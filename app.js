let state = {
  recipes: [],
  ingredients: [],       // full registry
  ingredientMap: {},
  stores: [],
  selectedTags: new Set(),
  recipeSearch: '',
  ingSearch: '',
  cartRecipeIds: new Set(),   // recipes added to list
  customIngredients: [],      // user-added ad hoc items
  listIngredients: []         // rendered list (recipe-derived + custom)
};

// ── Bootstrap ──────────────────────────────────────────────────────────────

function loadData() {
  state.recipes    = DATA_RECIPES;
  state.ingredients = DATA_INGREDIENTS.slice();   // copy so additions persist in session
  state.ingredientMap = Object.fromEntries(state.ingredients.map(i => [i.id, i]));
  state.stores     = DATA_CONFIG.stores;
}

// ── Core logic ─────────────────────────────────────────────────────────────

function allTags() {
  const tags = new Set();
  state.recipes.forEach(r => r.tags.forEach(t => tags.add(t)));
  return [...tags].sort();
}

function filterRecipes(recipes, selectedTags, query) {
  let result = recipes;
  if (selectedTags.size > 0)
    result = result.filter(r => [...selectedTags].every(tag => r.tags.includes(tag)));
  if (query)
    result = result.filter(r => r.name.toLowerCase().includes(query));
  return result;
}

function buildListIngredients() {
  const selected = state.recipes.filter(r => state.cartRecipeIds.has(r.id));
  const ids = [...new Set(selected.flatMap(r => r.ingredients))];
  const fromRecipes = ids.map(id => {
    const existing = state.listIngredients.find(i => i.id === id);
    return existing || {
      ...state.ingredientMap[id],
      selected: true,
      storeOverride: null,
      custom: false
    };
  });
  const custom = state.listIngredients.filter(i => i.custom);
  state.listIngredients = [...fromRecipes, ...custom];
}


function groupByStore(ingredients) {
  const assigned = {};
  const unassigned = [];
  ingredients.forEach(i => {
    if (i.storeOverride) {
      if (!assigned[i.storeOverride]) assigned[i.storeOverride] = [];
      assigned[i.storeOverride].push(i.name);
    } else {
      unassigned.push(i.name);
    }
  });
  return { assigned, unassigned };
}

function formatGroupedList({ assigned, unassigned }) {
  const parts = Object.entries(assigned).map(([storeId, items]) => {
    const storeObj = state.stores.find(s => s.id === storeId);
    const label = storeObj ? storeObj.label.toUpperCase() : storeId.toUpperCase();
    return `*** ${label} ***\n${items.join('\n')}`;
  });
  if (unassigned.length) parts.push(unassigned.join('\n'));
  return parts.join('\n\n');
}

// ── View switching ─────────────────────────────────────────────────────────

function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('view-' + name).classList.remove('hidden');
  document.querySelector(`.nav-btn[data-view="${name}"]`).classList.add('active');

  const subtitles = { recipes: 'Recipes', list: 'Shopping List', ingredients: 'Ingredients' };
  document.getElementById('header-subtitle').textContent = subtitles[name] || '';

  if (name === 'list') { buildListIngredients(); renderList(); }
  if (name === 'ingredients') renderRegistry();
}

// ── Render: Recipes ────────────────────────────────────────────────────────

function renderTags() {
  const container = document.getElementById('tag-list');
  container.innerHTML = '';
  allTags().forEach(tag => {
    const label = document.createElement('label');
    label.className = 'tag-chip' + (state.selectedTags.has(tag) ? ' active' : '');
    label.innerHTML = `<input type="checkbox" value="${tag}" ${state.selectedTags.has(tag) ? 'checked' : ''}>${tag}`;
    label.querySelector('input').addEventListener('change', e => {
      if (e.target.checked) state.selectedTags.add(tag);
      else state.selectedTags.delete(tag);
      renderTags();
      renderRecipes();
    });
    container.appendChild(label);
  });
}

function renderRecipes() {
  const container = document.getElementById('recipe-list');
  container.innerHTML = '';
  const filtered = filterRecipes(state.recipes, state.selectedTags, state.recipeSearch);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">No recipes match the selected tags.</p>';
    return;
  }

  filtered.forEach(recipe => {
    const inCart = state.cartRecipeIds.has(recipe.id);
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <div class="recipe-info">
        <div class="recipe-name">${recipe.name}</div>
        <div class="recipe-tags">${recipe.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('')}</div>
        ${recipe.url ? `<a class="recipe-url" href="${recipe.url}" target="_blank" rel="noopener">View recipe ↗</a>` : ''}
      </div>
      <button class="btn-cart${inCart ? ' in-cart' : ''}" aria-label="${inCart ? 'Remove from list' : 'Add to list'}" title="${inCart ? 'Remove from list' : 'Add to list'}">
        ${inCart ? '✓' : '+'}
      </button>`;

    card.querySelector('.btn-cart').addEventListener('click', () => {
      if (state.cartRecipeIds.has(recipe.id)) {
        state.cartRecipeIds.delete(recipe.id);
        // remove recipe-derived ingredients that aren't shared by remaining recipes
        const remainingIds = new Set(
          state.recipes.filter(r => state.cartRecipeIds.has(r.id)).flatMap(r => r.ingredients)
        );
        state.listIngredients = state.listIngredients.filter(i => i.custom || remainingIds.has(i.id));
      } else {
        state.cartRecipeIds.add(recipe.id);
      }
      updateCartBadge();
      renderRecipes();
    });

    container.appendChild(card);
  });
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = state.cartRecipeIds.size;
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);
}

// ── Render: List ───────────────────────────────────────────────────────────

function renderList() {
  const isEmpty = state.cartRecipeIds.size === 0 && state.listIngredients.filter(i => i.custom).length === 0;
  document.getElementById('list-empty').classList.toggle('hidden', !isEmpty);
  document.getElementById('list-content').classList.toggle('hidden', isEmpty);
  if (isEmpty) return;

  const container = document.getElementById('ingredient-list');
  container.innerHTML = '';

  state.listIngredients.forEach((ing, idx) => {
    const row = document.createElement('div');
    row.className = 'ingredient-row';

    const storeBtns = state.stores.map(s => `
      <button class="store-btn${ing.storeOverride === s.id ? ' active' : ''}" data-store="${s.id}">${s.label}</button>
    `).join('');

    row.innerHTML = `
      <div class="ingredient-top">
        <span class="ingredient-name">${ing.name}</span>
        ${ing.custom ? '<span class="ingredient-source">custom</span>' : ''}
        <button class="btn-remove-ing" aria-label="Remove ${ing.name}">✕</button>
      </div>
      <div class="store-buttons">${storeBtns}</div>`;

    row.querySelector('.btn-remove-ing').addEventListener('click', () => {
      state.listIngredients.splice(idx, 1);
      renderList();
    });

    row.querySelectorAll('.store-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ing = state.listIngredients[idx];
        ing.storeOverride = ing.storeOverride === btn.dataset.store ? null : btn.dataset.store;
        renderList();
      });
    });

    container.appendChild(row);
  });
}

// ── Render: Ingredients registry ───────────────────────────────────────────

function renderRegistry() {
  const container = document.getElementById('registry-list');
  container.innerHTML = '';
  const query = state.ingSearch;
  const visible = [...state.ingredients]
    .filter(i => !query || i.name.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name));
  visible.forEach(ing => {
    const row = document.createElement('div');
    row.className = 'registry-row';
    const alreadyInList = state.listIngredients.some(i => i.id === ing.id);
    row.innerHTML = `
      <span class="reg-name">${ing.name}</span>
      <button class="btn-add-to-list${alreadyInList ? ' added' : ''}" aria-label="Add ${ing.name} to list" title="${alreadyInList ? 'Already in list' : 'Add to list'}">
        ${alreadyInList ? '✓' : '+'}
      </button>`;
    row.querySelector('.btn-add-to-list').addEventListener('click', () => {
      if (state.listIngredients.some(i => i.id === ing.id)) return;
      state.listIngredients.push({ ...ing, storeOverride: null, custom: true });
      renderRegistry();
    });
    container.appendChild(row);
  });
}


// ── Wire up events ─────────────────────────────────────────────────────────

function initEvents() {
  // Search
  function bindSearch(inputId, clearFn) {
    const input = document.getElementById(inputId);
    const btn = input.nextElementSibling;
    input.addEventListener('input', e => {
      btn.classList.toggle('hidden', !e.target.value);
      clearFn(e.target.value.trim().toLowerCase());
    });
    btn.addEventListener('click', () => {
      input.value = '';
      btn.classList.add('hidden');
      clearFn('');
      input.focus();
    });
  }

  bindSearch('recipe-search', q => { state.recipeSearch = q; renderRecipes(); });
  bindSearch('ing-search',    q => { state.ingSearch = q;    renderRegistry(); });

  // List view — copy
  document.getElementById('btn-copy').addEventListener('click', () => {
    const grouped = groupByStore(state.listIngredients);
    const text = formatGroupedList(grouped);
    navigator.clipboard.writeText(text).then(() => {
      showFeedback('Copied to clipboard!');
    }).catch(() => {
      showFeedback('Copy failed — try selecting manually.');
    });
  });

  function showFeedback(msg) {
    const fb = document.getElementById('copy-feedback');
    fb.textContent = msg;
    setTimeout(() => { fb.textContent = ''; }, 2500);
  }

}

// ── Init ───────────────────────────────────────────────────────────────────

// ── Theme ──────────────────────────────────────────────────────────────────

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  document.getElementById('btn-theme').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const systemDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = current === 'dark' || (!current && systemDark);
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.getElementById('btn-theme').textContent = next === 'dark' ? '☀️' : '🌙';
  });

  const systemDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && systemDark);
  document.getElementById('btn-theme').textContent = isDark ? '☀️' : '🌙';
})();

loadData();

renderTags();
renderRecipes();
initEvents();
switchView('recipes');
