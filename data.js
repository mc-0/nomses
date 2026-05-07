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
    "tags": ["middle_eastern", "appetizer", "vegetarian"],
    "ingredients": ["chickpeas", "tahini", "lemon_juice", "garlic", "olive_oil"],
    "url": ""
  },
  {
    "id": "falafal",
    "name": "Falafal",
    "tags": ["middle_eastern", "appetizer", "vegetarian"],
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
    "tags": ["middle_eastern", "vegetarian"],
    "ingredients": ["chickpeas", "bread", "yogurt", "tahini", "garlic", "lemon_juice"],
    "url": ""
  },
  {
    "id": "dal",
    "name": "Dal",
    "tags": ["indian", "vegetarian"],
    "ingredients": ["lentils", "onion", "garlic", "ginger", "olive_oil", "tomatoes", "cumin"],
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
  { "id": "rice",           "name": "Rice" },
  { "id": "eggs",           "name": "Eggs" },
  { "id": "soy_sauce",      "name": "Soy Sauce" },
  { "id": "sesame_oil",     "name": "Sesame Oil" },
  { "id": "garlic",         "name": "Garlic" },
  { "id": "green_onions",   "name": "Green Onions" },
  { "id": "tortillas",      "name": "Tortillas" },
  { "id": "chicken_breast", "name": "Chicken Breast" },
  { "id": "ground_beef",    "name": "Ground Beef" },
  { "id": "pasta",          "name": "Pasta" },
  { "id": "tomato_sauce",   "name": "Tomato Sauce" },
  { "id": "onion",          "name": "Onion" },
  { "id": "bell_pepper",    "name": "Bell Pepper" },
  { "id": "cheese",         "name": "Cheese" },
  { "id": "lettuce",        "name": "Lettuce" },
  { "id": "olive_oil",      "name": "Olive Oil" },
  { "id": "black_beans",    "name": "Black Beans" },
  { "id": "salsa",          "name": "Salsa" },
  { "id": "sour_cream",     "name": "Sour Cream" },
  { "id": "bread",          "name": "Bread" },
  { "id": "flour",         "name": "Flour" },
  { "id": "sugar",         "name": "Sugar" },
  { "id": "baking_powder", "name": "Baking Powder" },
  { "id": "chocolate",       "name": "Chocolate Chips" },
  { "id": "vanilla",         "name": "Vanilla Extract" },
  { "id": "unsalted_butter", "name": "Unsalted Butter" },
  { "id": "orange_juice",    "name": "Orange Juice" },
  { "id": "oranges",         "name": "Oranges" },
  { "id": "powdered_sugar",  "name": "Powdered Sugar" },
  { "id": "tomatoes",        "name": "Tomatoes" },
  { "id": "potatoes",        "name": "Potatoes" },
  { "id": "tuna",            "name": "Tuna" },
  { "id": "butter",          "name": "Butter" },
  { "id": "cream",           "name": "Heavy Cream" },
  { "id": "broth",           "name": "Vegetable Broth" },
  { "id": "quinoa",          "name": "Quinoa" },
  { "id": "kale",            "name": "Kale" },
  { "id": "cucumber",        "name": "Cucumber" },
  { "id": "lemon_juice",     "name": "Lemon Juice" },
  { "id": "leeks",           "name": "Leeks" },
  { "id": "broccoli",        "name": "Broccoli" },
  { "id": "radishes",        "name": "Radishes" },
  { "id": "parsley",         "name": "Parsley" },
  { "id": "mint",            "name": "Mint" },
  { "id": "sumac",           "name": "Sumac" },
  { "id": "chickpeas",       "name": "Chickpeas" },
  { "id": "tahini",          "name": "Tahini" },
  { "id": "cilantro",        "name": "Cilantro" },
  { "id": "zucchini",        "name": "Zucchini" },
  { "id": "spinach",         "name": "Spinach" },
  { "id": "ricotta",         "name": "Ricotta Cheese" },
  { "id": "yogurt",          "name": "Yogurt" },
  { "id": "lentils",         "name": "Lentils" },
  { "id": "ginger",          "name": "Ginger" },
  { "id": "cumin",           "name": "Cumin" }
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
