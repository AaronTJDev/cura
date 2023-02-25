import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SEARCH_INPUT_DEBOUNCE_TIME = 300;

export enum FOOD_CATEGORY_TITLES {
  CEREAL_AND_GRAIN = 'Cereal and grain products',
  SAUCES_AND_CONDIMENTS = 'Sauces and condiments',
  SNACKS_AND_TREATS = 'Snacks and treats',
  BAKED_GOODS_AND_SUPPLIES = 'Baked goods and baking supplies',
  DAIRY_AND_NON_DAIRY = 'Dairy and non-dairy products',
  BEVERAGES = 'Beverages',
  FROZEN_FOODS = 'Frozen foods',
  MEAT_POULTRY_AND_SEAFOOD = 'Meat, poultry, and seafood',
  FRUITS_AND_VEGETABLES = 'Fruits and vegetables',
  HEALTH_AND_NUTRITION_SUPPLEMENTS = 'Health and nutrition supplements'
}

export enum FOOD_CATEGORY_KEYS {
  CEREAL_AND_GRAIN = 'cerealAndGrain',
  SAUCES_AND_CONDIMENTS = 'saucesAndCondiments',
  SNACKS_AND_TREATS = 'snacksAndTreats',
  BAKED_GOODS_AND_SUPPLIES = 'bakedGoodsAndSupplies',
  DAIRY_AND_NON_DAIRY = 'dairyAndNonDairy',
  BEVERAGES = 'beverages',
  FROZEN_FOODS = 'frozenFoods',
  MEAT_POULTRY_AND_SEAFOOD = 'meatPoultryAndSeafood',
  FRUITS_AND_VEGETABLES = 'fruitsAndVegetables',
  HEALTH_AND_NUTRITION_SUPPLEMENTS = 'healthAndNutritionSupplements'
}

export const foodCategoryMap = {
  cerealAndGrain: [
    'Cereal',
    'Rice',
    'Frozen Pancakes',
    'Waffles',
    'French Toast & Crepes',
    'Bread & Muffin Mixes',
    'Flours & Corn Meal',
    'Pasta Dinners',
    'Cereals Products - Ready to Eat (Shelf Stable)',
    'Cereal/Muesli Bars',
    'Dried Breads (Shelf Stable)',
    'Flour - Cereal/Pulse (Shelf Stable)',
    'Other Grains & Seeds',
    'Flavored Rice Dishes',
    'Pizza Mixes & Other Dry Dinners',
    'Processed Cereal Products',
    'Grains/Flour',
    'Pasta/Noodles',
    'Pasta/Noodles - Not Ready to Eat (Frozen),Bread',
    'Grain Based Products / Meals - Not Ready to Eat - Savoury (Shelf Stable)',
    'Breakfast Cereals - Hot and Cold',
    'Rice & Grains',
    'Biscuits Cracker',
    'Biscuits Plain/Sweet',
    'Biscuits Chocolate',
    'Fresh Pasta',
    'Taco Shells',
    'Noodles',
    'Wrapped Snacks - Cereal'
  ],
  saucesAndCondiments: [
    'Ketchup',
    'Mustard',
    'BBQ & Cheese Sauce',
    'Salad Dressing & Mayonnaise',
    'Jam',
    'Jelly & Fruit Spreads',
    'Prepared Pasta & Pizza Sauces',
    'Other Cooking Sauces',
    'Oriental',
    'Mexican & Ethnic Sauces',
    'Dips & Salsa',
    'Canned Condensed Soup',
    'Syrups & Molasses',
    'Dressings/Dips (Shelf Stable)',
    'Sauces - Cooking (Shelf Stable)',
    'Other Condiments',
    'Gravy Mix',
    'Sauces/Spreads/Dips/Condiments',
    'Herbs/Spices/Extracts',
    'Butter/Butter Substitutes',
    'Vinegars/Cooking Wines',
    'Pickles/Relishes/Chutneys/Olives',
    'Condiments',
    'Oils & Dressing',
    'Sauces',
    'Spreads',
    'Dips/Hummus/Pate',
    'Sauces - Cooking',
    'Salad Dressings',
    'Pickles',
    'Relishes and Vinegar'
  ],
  snacksAndTreats: [
    'Candy',
    'Chewing Gum & Mints',
    'Crackers & Biscotti',
    'Cakes',
    'Cupcakes',
    'Snack Cakes',
    'Chips',
    'Pretzels & Snacks',
    'Cookies & Biscuits',
    'Popcorn',
    'Peanuts',
    'Seeds & Related Snacks',
    'Ice Cream & Frozen Yogurt',
    'Chocolate',
    'Snack',
    'Energy & Granola Bars',
    'Baking Decorations & Dessert Toppings',
    'Other Snacks',
    'Wholesome Snacks',
    'Other Frozen Desserts',
    'Ice Cream/Ice Novelties (Shelf Stable)',
    'Biscuits/Cookies (Shelf Stable)',
    'Popcorn (Shelf Stable)',
    'Chips/Crisps/Snack Mixes - Natural/Extruded (Shelf Stable)',
    'Flavored Snack Crackers',
    'Sweet Spreads',
    'Biscuits/Cookies',
    'Confectionery Products',
    'Confection & Snacks',
    'Nuts/SeedsUnprepared/Unprocessed (Shelf Stable)',
    'Snack Foods - Other',
    'Snack Foods - Nuts',
    'Snack Foods - Cereal Snacks',
    'Confectionery',
    'Snack Foods - Chips',
    'Wrapped Snacks - Muesli Bars',
    'Desserts & Custard',
    'Wrapped Snacks - Nut Bars',
    'Snack Foods - Corn Chips',
    'Wrapped Snacks - Fruit Bars'
  ],
  bakedGoodsAndSupplies: [
    'Crusts & Dough',
    'Cake',
    'Cookie & Cupcake Mixes',
    'Breads & Buns',
    'Frozen Bread & Dough',
    'Croissants',
    'Sweet Rolls',
    'Muffins & Other Pastries',
    'Granulated',
    'Brown & Powdered Sugar',
    'Baking Additives & Extracts',
    'Baking/Cooking Mixes/Supplies Variety Packs',
    'Baking/Cooking Supplies (Shelf Stable)',
    'Baking/Cooking Mixes (Shelf Stable)',
    'Cakes - Sweet (Shelf Stable)',
    'Baking/Cooking Mixes (Perishable)',
    'Pastry Shells & Fillings',
    'Baking Accessories',
    'Baking/Cooking Mixes/Supplies',
    'Pies/Pastries - Sweet (Shelf Stable)',
    'Bread/Bakery Products Variety Packs',
    'Sugar and Flour',
    'Baking Supplies',
    'Pastries/Pies/Pizzas',
    'Frozen Pies/Savouries',
    'Baking Needs',
    'Cakes/Slices/Biscuits'
  ],
  dairyAndNonDairy: [
    'Yogurt',
    'Plant Based Milk',
    'Butter & Spread',
    'Milk',
    'Cheese',
    'Cream',
    'Milk Additives,Yogurt/Yogurt Substitutes (Perishable)',
    'Other Frozen Meats',
    'Iced & Bottle Tea',
    'Sport Drinks',
    'Breakfast Sandwiches',
    'Biscuits & Meals',
    'Pancakes',
    'Waffles',
    'French Toast & Crepes',
    'Frozen Breakfast Sandwiches',
    'Biscuits & Meals',
    'Frozen Bacon',
    'Sausages & Ribs',
    'Breakfast Drinks',
    'Yogurt/Yogurt Substitutes',
    'Dairy/Egg Based Products / Meals',
    'Milk/Milk Substitutes',
    'Cheese/Cheese Substitutes',
    'Cream/Cream Substitutes',
    'Milk/Cream - Shelf Stable',
    'Vegetarian',
    'Dairy Foods/Yoghurts',
    'Cheese - Block',
    'Cheese - Speciality',
    'Ice-Cream Take Home',
    'Ice-Cream/Block Single'
  ],
  beverages: [
    'Water',
    'Tea Bags',
    'Soda',
    'Powdered Drinks',
    'Other Drinks',
    'Fruit & Vegetable Juice',
    'Nectars & Fruit Drinks',
    'Plant Based Water',
    'Coffee',
    'Liquid Water Enhancer',
    'Energy',
    'Protein & Muscle Recovery Drinks',
    'Alcohol',
    'Non Alcoholic BeveragesReady to Drink',
    'Non Alcoholic BeveragesNot Ready to Drink',
    'Drinks Flavoured - Ready to Drink',
    'Coffee/Tea/Substitutes',
    'Food/Beverage/Tobacco Variety Packs',
    'Beer',
    'Drinks',
    'Drinks - Juices',
    'Drinks and Cordials',
    'Drinks - Energy Drinks',
    'Drinks - Soft Drinks',
    'Drinks - Powdered'
  ],
  frozenFoods: [
    `Frozen Pancakes`,
    `Waffles`,
    `French Toast & Crepes`,
    `Frozen Fish & Seafood`,
    `Frozen Appetizers & Hors D'oeuvres`,
    `Frozen Dinners & Entrees`,
    `Prepared Wraps and Burittos`,
    `Bacon`,
    `Sausages & Ribs`,
    `Weight Control`,
    `Chili & Stew`,
    `Other Meats`,
    `Frozen Poultry`,
    `Chicken & Turkey`,
    `Cooked & Prepared`,
    `Frozen Fruit & Fruit Juice Concentrates`,
    `Frozen Vegetables`,
    `Frozen Prepared Sides`,
    `Frozen Sausages`,
    `Hotdogs & Brats`,
    `Vegetarian Frozen Meats`,
    `Vegetable Based Products / Meals - Not Ready to Eat (Frozen)`,
    `Egg Based Products / Meals - Not Ready to Eat (Frozen)`,
    `Dough Based Products / Meals - Not Ready to Eat - Savoury (Frozen)`,
    `Pies/Pastries/Pizzas/Quiches - Savoury (Frozen)`,
    `Sushi`,
    `Frozen Breakfast Sandwiches`,
    `Biscuits & Meals`,
    `Frozen Bacon`,
    `Sausages & Ribs`,
    `Prepared/Preserved Foods Variety Packs`,
    `Pasta/Noodles - Not Ready to Eat (Frozen)`,
    `FishPrepared/Processed`,
    `Vegetables - Prepared/Processed (Frozen)`,
    `FishUnprepared/Unprocessed`,
    `Shellfish Unprepared/Unprocessed`,
    `Aquatic Invertebrates/Fish/Shellfish/Seafood Combination`,
    `Shellfish Prepared/Processed`,
    `VegetablesUnprepared/Unprocessed (Frozen)`,
    `Frozen Meals`,
    `Frozen Fish/Seafood`,
    `Frozen Fruit`,
    `Frozen Meat`,
    `Frozen Chicken - Processed`,
    `Frozen Potato`,
    `Frozen Snack`
  ],
  meatPoultryAndSeafood: [
    'Fish & Seafood',
    'Sausages',
    'Hotdogs & Brats',
    'Pepperoni',
    'Salami & Cold Cuts',
    'Meat/Poultry/Other AnimalsUnprepared/Unprocessed',
    'Canned Tuna',
    'Poultry',
    'Chicken & Turkey',
    'Pork Sausages - Prepared/Processed',
    'Canned Meat',
    'Canned Seafood',
    'Other Frozen Meats',
    'Other Condiments',
    'Meat/Poultry/Other AnimalsPrepared/Processed',
    'Meat/Poultry/Other Animals SausagesPrepared/Processed',
    'Pork - Prepared/Processed',
    'FishPrepared/Processed',
    'Meat Substitutes',
    'Beef - Prepared/Processed',
    'FishUnprepared/Unprocessed',
    'Shellfish Unprepared/Unprocessed',
    'Aquatic Invertebrates/Fish/Shellfish/Seafood Combination',
    'Shellfish Prepared/Processed',
    'Meat/Poultry/Other Animals Sausages – Prepared/Processed',
    'Bacon',
    'Ham/Cold Meats',
    'Smoked fish',
    'Salami / Cured Meat',
    'Mussels',
    'Fresh Chicken - Portions',
    'Fresh Meat',
    'S/O Fresh Fish Fillets/Steaks'
  ],
  fruitsAndVegetables: [
    'Vegetable and Lentil Mixes',
    'Canned Fruit',
    'Pre-Packaged Fruit & Vegetables',
    'Canned Vegetables',
    'Pickles',
    'Olives',
    'Peppers & Relishes',
    'Vegetable & Cooking Oils',
    'Tomatoes',
    'Gelatin',
    'Gels',
    'Pectins & Desserts',
    'Honey',
    'Fruits - Prepared/Processed (Shelf Stable)',
    'Nuts/Seeds - Prepared/Processed (Shelf Stable)',
    'Vegetables - Prepared/Processed (Shelf Stable)',
    'VegetablesPrepared/Processed',
    'Vegetable Based Products / Meals',
    'FruitPrepared/Processed',
    'Fruit/Nuts/Seeds Combination',
    'Vegetables - Prepared/Processed (Frozen)',
    'VegetablesUnprepared/Unprocessed (Frozen)',
    'Fruits',
    'Vegetables & Produce',
    'Peppers',
    'VegetablesUnprepared/Unprocessed (Shelf Stable)',
    'Salads',
    'Vegetables'
  ],
  healthAndNutritionSupplements: [
    `Seasoning Mixes`,
    `Salts`,
    `Marinades`,
    `Herbal Supplements`,
    `Specialty Formula Supplements`,
    `Green Supplements`,
    `Amino Acid Supplements`,
    `Health Care`,
    `Children's Nutritional Supplements`,
    `Digestive & Fiber Supplements`,
    `Vitamins`,
    `Meal Replacement Supplements`,
    `Antioxidant Supplements`,
    `Fatty Acid Supplements`,
    `Minerals`,
    `Health Supplements and Vitamins`,
    `Herbs And Spices`,
    `Gardening`,
    `Oral Hygiene Products`,
    `Puddings and desserts`
  ]
};
