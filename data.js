const DATA_RECIPES = [
  {
    "id": "black_bean_burritos",
    "name": "Black Bean Burritos",
    "tags": ["mexican", "vegetarian"],
    "ingredients": ["tortillas", "black_beans", "cheese", "salsa", "sour_cream", "bell_pepper"],
    "url": ""
  },
  {
    "id": "chocolate_chip_cookies",
    "name": "The Best Chocolate Chip Cookies",
    "tags": ["mexican", "vegetarian"],
    "ingredients": ["flour", "sugar", "baking_powder", "chocolate", "eggs", "vanilla"],
    "url": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/"
  },
  {
    "id": "orange_cookies",
    "name": "Orange Cookies",
    "tags": ["dessert", "cookies"],
    "ingredients": ["unsalted_butter", "flour", "sugar", "eggs", "orange_juice", "oranges", "powdered_sugar", "baking_powder"],
    "url": "https://preppykitchen.com/orange-cookies/#recipe"
  },
  {
    "id": "lakmeh_banadora",
    "name": "Lakmeh Banadora",
    "tags": ["lebanese", "meat"],
    "ingredients": ["ground_beef", "tomatoes", "tomato_sauce", "onion", "garlic", "olive_oil", "parsley"],
    "url": ""
  },
  {
    "id": "kafta_batata",
    "name": "Kafta Batata",
    "tags": ["lebanese", "meat"],
    "ingredients": ["ground_beef", "potatoes", "onion", "garlic", "olive_oil", "parsley"],
    "url": ""
  },
  {
    "id": "tuna_casserole",
    "name": "Tuna Casserole",
    "tags": ["casserole", "seafood"],
    "ingredients": ["tuna", "pasta", "cheese", "butter", "cream"],
    "url": ""
  },
  {
    "id": "quinoa_kale_salad",
    "name": "Quinoa Kale Salad",
    "tags": ["salad", "vegetarian"],
    "ingredients": ["quinoa", "kale", "tomatoes", "cucumber", "olive_oil", "lemon_juice"],
    "url": ""
  },
  {
    "id": "leek_soup",
    "name": "Leek Soup",
    "tags": ["soup", "vegetarian"],
    "ingredients": ["leeks", "potatoes", "onion", "butter", "cream", "broth"],
    "url": ""
  },
  {
    "id": "broccoli_cheddar_soup",
    "name": "Broccoli Cheddar Soup",
    "tags": ["soup", "vegetarian"],
    "ingredients": ["broccoli", "cheese", "potatoes", "onion", "butter", "cream", "broth"],
    "url": ""
  },
  {
    "id": "fatoosh",
    "name": "Fatoosh",
    "tags": ["lebanese", "salad", "vegetarian"],
    "ingredients": ["lettuce", "tomatoes", "cucumber", "radishes", "parsley", "mint", "sumac", "bread", "olive_oil", "lemon_juice", "garlic"],
    "url": ""
  },
  {
    "id": "hummus",
    "name": "Hummus",
    "tags": ["middle eastern", "appetizer", "vegetarian"],
    "ingredients": ["chickpeas", "tahini", "lemon_juice", "garlic", "olive_oil"],
    "url": ""
  },
  {
    "id": "falafal",
    "name": "Falafal",
    "tags": ["middle eastern", "appetizer", "vegetarian"],
    "ingredients": ["chickpeas", "onion", "garlic", "parsley", "cilantro", "flour"],
    "url": ""
  },
  {
    "id": "vegetable_lasagna",
    "name": "Vegetable Lasagna",
    "tags": ["italian", "vegetarian"],
    "ingredients": ["pasta", "zucchini", "spinach", "bell_pepper", "tomatoes", "tomato_sauce", "cheese", "ricotta"],
    "url": ""
  },
  {
    "id": "fetteh",
    "name": "Fetteh",
    "tags": ["middle eastern", "vegetarian"],
    "ingredients": ["chickpeas", "bread", "yogurt", "tahini", "garlic", "lemon_juice"],
    "url": ""
  },
  {
    "id": "dal",
    "name": "Dal",
    "tags": ["indian", "vegetarian"],
    "ingredients": ["lentils", "onion", "garlic", "ginger", "olive_oil", "tomatoes", "cumin"],
    "url": ""
  },
  {
    "id": "beef_shawarma",
    "name": "Beef Shawarma",
    "tags": ["middle eastern", "lebanese", "meat"],
    "ingredients": ["ground_beef", "garlic", "lemon_juice", "olive_oil", "paprika", "cumin", "cinnamon", "pita_bread", "tomatoes", "onion"],
    "url": ""
  },
  {
    "id": "cornflake_chicken",
    "name": "Cornflake Chicken",
    "tags": ["chicken", "appetizer"],
    "ingredients": ["chicken_breast", "eggs", "cornflakes", "butter", "salt", "pepper"],
    "url": ""
  },
  {
    "id": "eggplant_curry",
    "name": "Eggplant Curry",
    "tags": ["curry", "indian", "vegetarian"],
    "ingredients": ["eggplant", "onion", "garlic", "ginger", "tomatoes", "cumin", "turmeric", "coriander", "coconut_milk", "olive_oil"],
    "url": ""
  },
  {
    "id": "chicken_gallbah",
    "name": "Chicken Gallbah",
    "tags": ["lebanese", "middle eastern", "chicken"],
    "ingredients": ["chicken_breast", "phyllo_dough", "onion", "garlic", "lemon_juice", "olive_oil", "pine_nuts", "spices"],
    "url": ""
  },
  {
    "id": "mjaddara",
    "name": "Mjaddara",
    "tags": ["lebanese", "middle eastern", "vegetarian"],
    "ingredients": ["lentils", "bulgur_wheat", "onion", "olive_oil", "salt", "pepper"],
    "url": ""
  },
  {
    "id": "enchiladas",
    "name": "Enchiladas",
    "tags": ["mexican", "chicken"],
    "ingredients": ["chicken_breast", "tortillas", "enchilada_sauce", "cheese", "onion", "sour_cream", "cilantro"],
    "url": ""
  },
  {
    "id": "spicy_tuna_bowl",
    "name": "Spicy Tuna Bowl",
    "tags": ["seafood", "bowl"],
    "ingredients": ["tuna", "rice", "cucumber", "avocado", "soy_sauce", "ginger", "garlic", "sesame_oil", "green_onions"],
    "url": ""
  },
  {
    "id": "southwest_salmon_bowls",
    "name": "Southwest Salmon Bowls",
    "tags": ["seafood", "bowl"],
    "ingredients": ["salmon", "rice", "black_beans", "corn", "bell_pepper", "lime", "cilantro", "avocado"],
    "url": ""
  },
  {
    "id": "eggplant_maqloubi",
    "name": "Eggplant Maqloubi",
    "tags": ["middle eastern", "vegetarian"],
    "ingredients": ["eggplant", "rice", "ground_beef", "tomatoes", "onion", "garlic", "olive_oil", "cinnamon"],
    "url": ""
  },
  {
    "id": "chicken_enchiladas",
    "name": "Chicken Enchiladas",
    "tags": ["mexican", "chicken"],
    "ingredients": ["chicken_breast", "tortillas", "enchilada_sauce", "cheese", "onion", "sour_cream", "cilantro"],
    "url": ""
  },
  {
    "id": "shepherds_pie",
    "name": "Shepherd's Pie",
    "tags": ["british", "meat"],
    "ingredients": ["ground_beef", "onion", "carrots", "peas", "potatoes", "butter", "cream", "broth"],
    "url": ""
  },
  {
    "id": "stuffed_shells",
    "name": "Stuffed Shells",
    "tags": ["italian", "pasta"],
    "ingredients": ["pasta_shells", "ricotta", "spinach", "cheese", "eggs", "tomato_sauce", "garlic", "parsley"],
    "url": ""
  },
  {
    "id": "one_pot_burrito_bake",
    "name": "One Pot Burrito Bake",
    "tags": ["mexican", "casserole"],
    "ingredients": ["ground_beef", "rice", "black_beans", "cheese", "tortillas", "salsa", "bell_pepper", "onion"],
    "url": ""
  },
  {
    "id": "tuna_crunch_wraps",
    "name": "Tuna Crunch Wraps",
    "tags": ["seafood", "wrap"],
    "ingredients": ["tuna", "tortillas", "lettuce", "celery", "mayo", "green_onions", "sesame_seeds"],
    "url": ""
  },
  {
    "id": "grape_leaves",
    "name": "Grape Leaves",
    "tags": ["middle eastern", "lebanese", "vegetarian"],
    "ingredients": ["grape_leaves", "rice", "onion", "parsley", "mint", "lemon_juice", "olive_oil", "ground_beef"],
    "url": ""
  },
  {
    "id": "ablama",
    "name": "Ablama",
    "tags": ["middle eastern", "meat"],
    "ingredients": ["ground_beef", "kidney_beans", "tomatoes", "onion", "garlic", "cumin", "cinnamon", "olive_oil"],
    "url": ""
  },
  {
    "id": "ijjeh",
    "name": "Ijjeh",
    "tags": ["middle eastern", "lebanese", "vegetarian"],
    "ingredients": ["eggs", "parsley", "mint", "green_onions", "onion", "flour", "olive_oil"],
    "url": ""
  },
  {
    "id": "asian_salmon_bowl",
    "name": "Asian Salmon Bowl",
    "tags": ["seafood", "asian", "bowl"],
    "ingredients": ["salmon", "rice", "edamame", "cucumber", "avocado", "soy_sauce", "sesame_oil", "ginger", "sesame_seeds"],
    "url": ""
  },
  {
    "id": "roasted_vegetable_tortellini",
    "name": "Roasted Vegetable Tortellini",
    "tags": ["italian", "pasta", "vegetarian"],
    "ingredients": ["tortellini", "zucchini", "bell_pepper", "cherry_tomatoes", "olive_oil", "garlic", "parmesan", "basil"],
    "url": ""
  },
  {
    "id": "stuffed_peppers",
    "name": "Stuffed Peppers",
    "tags": ["vegetarian", "casserole"],
    "ingredients": ["bell_pepper", "rice", "ground_beef", "onion", "tomatoes", "cheese", "garlic", "herbs"],
    "url": ""
  }
];

// RECIPE TEMPLATE
/*{
  "id": "",
    "name": "",
    "tags": [""],
    "ingredients": [""],
    "url": ""
},*/

const DATA_INGREDIENTS = [
  { "id": "rice",           "name": "Rice",           "category": "grains" },
  { "id": "eggs",           "name": "Eggs",           "category": "protein" },
  { "id": "soy_sauce",      "name": "Soy Sauce",      "category": "pantry" },
  { "id": "sesame_oil",     "name": "Sesame Oil",     "category": "pantry" },
  { "id": "garlic",         "name": "Garlic",         "category": "produce" },
  { "id": "green_onions",   "name": "Green Onions",   "category": "produce" },
  { "id": "tortillas",      "name": "Tortillas",      "category": "grains" },
  { "id": "chicken_breast", "name": "Chicken Breast", "category": "protein" },
  { "id": "ground_beef",    "name": "Ground Beef",    "category": "protein" },
  { "id": "pasta",          "name": "Pasta",          "category": "grains" },
  { "id": "tomato_sauce",   "name": "Tomato Sauce",   "category": "pantry" },
  { "id": "onion",          "name": "Onion",          "category": "produce" },
  { "id": "bell_pepper",    "name": "Bell Pepper",    "category": "produce" },
  { "id": "cheese",         "name": "Cheese",         "category": "dairy" },
  { "id": "lettuce",        "name": "Lettuce",        "category": "produce" },
  { "id": "olive_oil",      "name": "Olive Oil",      "category": "pantry" },
  { "id": "black_beans",    "name": "Black Beans",    "category": "pantry" },
  { "id": "salsa",          "name": "Salsa",          "category": "pantry" },
  { "id": "sour_cream",     "name": "Sour Cream",     "category": "dairy" },
  { "id": "bread",          "name": "Bread",          "category": "grains" },
  { "id": "flour",         "name": "Flour",         "category": "baking" },
  { "id": "sugar",         "name": "Sugar",         "category": "baking" },
  { "id": "baking_powder", "name": "Baking Powder", "category": "baking" },
  { "id": "chocolate",       "name": "Chocolate Chips", "category": "baking" },
  { "id": "vanilla",         "name": "Vanilla Extract", "category": "baking" },
  { "id": "unsalted_butter", "name": "Unsalted Butter", "category": "baking" },
  { "id": "orange_juice",    "name": "Orange Juice",    "category": "baking" },
  { "id": "oranges",         "name": "Oranges",         "category": "produce" },
  { "id": "powdered_sugar",  "name": "Powdered Sugar",  "category": "baking" },
  { "id": "tomatoes",        "name": "Tomatoes",        "category": "produce" },
  { "id": "potatoes",        "name": "Potatoes",        "category": "produce" },
  { "id": "tuna",            "name": "Tuna",            "category": "protein" },
  { "id": "butter",          "name": "Butter",          "category": "pantry" },
  { "id": "cream",           "name": "Heavy Cream",     "category": "pantry" },
  { "id": "broth",           "name": "Vegetable Broth", "category": "pantry" },
  { "id": "quinoa",          "name": "Quinoa",          "category": "grains" },
  { "id": "kale",            "name": "Kale",            "category": "produce" },
  { "id": "cucumber",        "name": "Cucumber",        "category": "produce" },
  { "id": "lemon_juice",     "name": "Lemon Juice",     "category": "produce" },
  { "id": "leeks",           "name": "Leeks",           "category": "produce" },
  { "id": "broccoli",        "name": "Broccoli",        "category": "produce" },
  { "id": "radishes",        "name": "Radishes",        "category": "produce" },
  { "id": "parsley",         "name": "Parsley",         "category": "produce" },
  { "id": "mint",            "name": "Mint",            "category": "produce" },
  { "id": "sumac",           "name": "Sumac",           "category": "pantry" },
  { "id": "chickpeas",       "name": "Chickpeas",       "category": "pantry" },
  { "id": "tahini",          "name": "Tahini",          "category": "pantry" },
  { "id": "cilantro",        "name": "Cilantro",        "category": "produce" },
  { "id": "zucchini",        "name": "Zucchini",        "category": "produce" },
  { "id": "spinach",         "name": "Spinach",         "category": "produce" },
  { "id": "ricotta",         "name": "Ricotta Cheese",  "category": "dairy" },
  { "id": "yogurt",          "name": "Yogurt",          "category": "dairy" },
  { "id": "lentils",         "name": "Lentils",         "category": "pantry" },
  { "id": "ginger",          "name": "Ginger",          "category": "baking" },
  { "id": "cumin",           "name": "Cumin",           "category": "pantry" },
  { "id": "paprika",         "name": "Paprika",         "category": "pantry" },
  { "id": "cinnamon",        "name": "Cinnamon",        "category": "pantry" },
  { "id": "pita_bread",      "name": "Pita Bread",      "category": "grains" },
  { "id": "cornflakes",      "name": "Cornflakes",      "category": "baking" },
  { "id": "salt",            "name": "Salt",            "category": "pantry" },
  { "id": "pepper",          "name": "Black Pepper",    "category": "pantry" },
  { "id": "eggplant",        "name": "Eggplant",        "category": "produce" },
  { "id": "turmeric",        "name": "Turmeric",        "category": "pantry" },
  { "id": "coriander",       "name": "Coriander",       "category": "pantry" },
  { "id": "coconut_milk",    "name": "Coconut Milk",    "category": "pantry" },
  { "id": "phyllo_dough",    "name": "Phyllo Dough",    "category": "baking" },
  { "id": "pine_nuts",       "name": "Pine Nuts",       "category": "baking" },
  { "id": "spices",          "name": "Mixed Spices",    "category": "pantry" },
  { "id": "bulgur_wheat",    "name": "Bulgur Wheat",    "category": "grains" },
  { "id": "enchilada_sauce", "name": "Enchilada Sauce", "category": "pantry" },
  { "id": "avocado",         "name": "Avocado",         "category": "produce" },
  { "id": "lime",            "name": "Lime",            "category": "produce" },
  { "id": "corn",            "name": "Corn",            "category": "produce" },
  { "id": "carrots",         "name": "Carrots",         "category": "produce" },
  { "id": "peas",            "name": "Peas",            "category": "produce" },
  { "id": "pasta_shells",    "name": "Pasta Shells",    "category": "grains" },
  { "id": "mayo",            "name": "Mayonnaise",      "category": "baking" },
  { "id": "celery",          "name": "Celery",          "category": "produce" },
  { "id": "sesame_seeds",    "name": "Sesame Seeds",    "category": "pantry" },
  { "id": "grape_leaves",    "name": "Grape Leaves",    "category": "produce" },
  { "id": "kidney_beans",    "name": "Kidney Beans",    "category": "pantry" },
  { "id": "edamame",         "name": "Edamame",         "category": "pantry" },
  { "id": "parmesan",        "name": "Parmesan Cheese", "category": "dairy" },
  { "id": "basil",           "name": "Fresh Basil",     "category": "produce" },
  { "id": "herbs",           "name": "Mixed Herbs",     "category": "pantry" },
  { "id": "cherry_tomatoes", "name": "Cherry Tomatoes", "category": "produce" },
  { "id": "pesto",           "name": "Pesto",           "category": "pantry" },
  { "id": "red_onions",      "name": "Red Onions",      "category": "produce" },
  { "id": "green_lentils",   "name": "Green Lentils",   "category": "pantry" },
  { "id": "red_lentils",     "name": "Red Lentils",     "category": "pantry" },
  { "id": "mushrooms",       "name": "Mushrooms",       "category": "produce" },
  { "id": "sweet_potatoes",  "name": "Sweet Potatoes",  "category": "produce" },
  { "id": "mexican_cheese",  "name": "Mexican Cheese Blend", "category": "dairy" },
  { "id": "mozzarella",      "name": "Mozzarella Cheese", "category": "dairy" },
  { "id": "burger_buns",     "name": "Burger Buns",     "category": "grains" },
  { "id": "maple_syrup",     "name": "Maple Syrup",     "category": "pantry" },
  { "id": "oatmeal",         "name": "Oatmeal",         "category": "grains" },
  { "id": "brown_sugar",     "name": "Brown Sugar",     "category": "pantry" },
  { "id": "strawberries",    "name": "Strawberries",    "category": "produce" },
  { "id": "bananas",         "name": "Bananas",         "category": "produce" },
  { "id": "blackberries",    "name": "Blackberries",    "category": "produce" },
  { "id": "blueberries",     "name": "Blueberries",     "category": "produce" },
  { "id": "raspberries",     "name": "Raspberries",     "category": "produce" },
  { "id": "mangos",          "name": "Mangos",          "category": "produce" },
  { "id": "pineapple",       "name": "Pineapple",       "category": "produce" },
  { "id": "apples",          "name": "Apples",          "category": "produce" },
  { "id": "greek_yogurt",    "name": "Greek Yogurt",    "category": "dairy" },
  { "id": "cocoa_powder",    "name": "Cocoa Powder",    "category": "pantry" },
  { "id": "laban",           "name": "Laban",           "category": "dairy" },
  { "id": "lebneh",          "name": "Lebneh",          "category": "dairy" },
  { "id": "canned_corn",     "name": "Canned Corn",     "category": "pantry" },
  { "id": "corn_on_the_cob", "name": "Corn on the Cob", "category": "produce" },
  { "id": "hoisin",          "name": "Hoisin Sauce",    "category": "pantry" },
  { "id": "rice_wine_vinegar", "name": "Rice Wine Vinegar", "category": "pantry" },
  { "id": "white_rice",      "name": "White Rice",      "category": "grains" },
  { "id": "jasmine_rice",    "name": "Jasmine Rice",    "category": "grains" },
  { "id": "basmati_rice",    "name": "Basmati Rice",    "category": "grains" },
  { "id": "tofu",            "name": "Tofu",            "category": "protein" },
  { "id": "ravioli",         "name": "Ravioli",         "category": "grains" },
  { "id": "salmon",          "name": "Salmon",          "category": "protein" },
  { "id": "white_onions",    "name": "White Onions",    "category": "produce" },
  { "id": "sweet_onions",    "name": "Sweet Onions",    "category": "produce" },
  { "id": "craisins",        "name": "Craisins",        "category": "produce" },
  { "id": "lemons",          "name": "Lemons",          "category": "produce" },
  { "id": "white_wine_vinegar", "name": "White Wine Vinegar", "category": "pantry" },
  { "id": "honey",           "name": "Honey",           "category": "pantry" },
  { "id": "feta_cheese",     "name": "Feta Cheese",     "category": "dairy" },
  { "id": "milk",            "name": "Milk",            "category": "dairy" },
  { "id": "almond_milk",     "name": "Almond Milk",     "category": "dairy" },
  { "id": "splenda",         "name": "Splenda",         "category": "pantry" },
  { "id": "ketchup",         "name": "Ketchup",         "category": "pantry" },
  { "id": "mustard",         "name": "Mustard",         "category": "pantry" },
  { "id": "dijon_mustard",   "name": "Dijon Mustard",   "category": "pantry" },
  { "id": "naan",            "name": "Naan Bread",      "category": "grains" },
  { "id": "toilet_paper",    "name": "Toilet Paper",    "category": "household" },
  { "id": "laundry_detergent", "name": "Laundry Detergent", "category": "household" },
  { "id": "dish_soap",       "name": "Dish Soap",       "category": "household" },
  { "id": "dryer_sheets",    "name": "Dryer Sheets",    "category": "household" },
  { "id": "chlorox_wipes",   "name": "Chlorox Wipes",   "category": "household" },
  { "id": "floor_cleaning_pads", "name": "Floor Cleaning Pads", "category": "household" },
  { "id": "laundry_beads",   "name": "Laundry Beads",   "category": "household" },
  { "id": "paper_plates",    "name": "Paper Plates",    "category": "household" },
  { "id": "plastic_utensils", "name": "Plastic Utensils", "category": "household" },
  { "id": "cling_film",      "name": "Cling Film",      "category": "household" },
  { "id": "press_and_seal",  "name": "Press and Seal",  "category": "household" },
  { "id": "aluminum_foil",   "name": "Aluminum Foil",   "category": "household" },
  { "id": "latex_gloves",    "name": "Latex Gloves",    "category": "household" },
  { "id": "dish_sponges",    "name": "Dish Sponges",    "category": "household" },
  { "id": "parchment_paper", "name": "Parchment Paper", "category": "household" },
  { "id": "ziplock_bags",    "name": "Ziplock Bags",    "category": "household" }
];

const DATA_CONFIG = {
  "stores": [
    { "id": "papaya",      "label": "Papaya" },
    { "id": "bjs",         "label": "BJs" },
    { "id": "meijer",      "label": "Meijer" },
    { "id": "fresh_thyme", "label": "Fresh Thyme" },
    { "id": "kroger",      "label": "Kroger" }
  ]
};

// Ingredient search and filtering functions
function getIngredientsByCategory(category) {
  return DATA_INGREDIENTS.filter(ingredient => ingredient.category === category);
}

function searchIngredients(query, category = null) {
  let results = DATA_INGREDIENTS.filter(ingredient =>
    ingredient.name.toLowerCase().includes(query.toLowerCase()) ||
    ingredient.id.toLowerCase().includes(query.toLowerCase())
  );

  if (category) {
    results = results.filter(ingredient => ingredient.category === category);
  }

  return results;
}

function getAllCategories() {
  const categories = [...new Set(DATA_INGREDIENTS.map(ingredient => ingredient.category))];
  return categories.sort();
}

function getIngredientById(id) {
  return DATA_INGREDIENTS.find(ingredient => ingredient.id === id);
}

function getIngredientsByIds(ids) {
  return ids.map(id => getIngredientById(id)).filter(Boolean);
}
