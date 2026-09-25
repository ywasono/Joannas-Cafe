import { FoodItem, DrinkItem } from '../types';

export const FOOD_MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'breakfast', label: 'Breakfast Rolls & Paninis' },
  { id: 'brunch-lunch', label: 'Brunch & Lunch (Signature)' },
  { id: 'salads', label: 'Fresh Salads' },
  { id: 'rotating-specials', label: 'Lunch Specials' },
  { id: 'kids', label: "Kids' Meals" },
  { id: 'desserts', label: 'Desserts & Grab & Go' },
] as const;

export const FOOD_ITEMS: FoodItem[] = [
  // Breakfast Rolls & Paninis
  {
    id: 'bf-1',
    name: 'Bacon, Cheese and Egg Roll',
    price: '$12.50',
    description: 'Crispy bacon, fried egg, melted cheese and house tomato relish on a toasted milk bun.',
    category: 'breakfast',
  },
  {
    id: 'bf-2',
    name: 'Ham and Cheese Panini',
    price: '$11.90',
    description: 'Double smoked ham and melted cheese pressed in a crusty toasted artisan panini.',
    category: 'breakfast',
  },
  {
    id: 'bf-3',
    name: 'Breakfast BLT Roll',
    price: '$12.90',
    description: 'Streaky bacon, crisp lettuce, ripe tomato and creamy whole egg mayonnaise.',
    category: 'breakfast',
  },
  {
    id: 'bf-4',
    name: 'Chicken and Avocado Panini',
    price: '$15.90',
    description: 'Tender grilled chicken, sliced avocado, melted cheese and house herb mayonnaise.',
    category: 'breakfast',
  },
  {
    id: 'bf-5',
    name: 'Egg, Cheese and Tomato Roll',
    price: '$9.90',
    description: 'Fried egg, melted cheese, sliced ripe tomato and savory relish on a warm roll.',
    dietary: ['V'],
    category: 'breakfast',
  },
  {
    id: 'bf-6',
    name: 'Butter Croissant',
    price: '$6.90',
    description: 'Flaky all-butter French croissant served warm with whipped butter and strawberry jam.',
    dietary: ['V'],
    category: 'breakfast',
  },
  {
    id: 'bf-7',
    name: 'Ham and Cheese Croissant',
    price: '$11.90',
    description: 'Flaky warm butter croissant filled with shaved leg ham and melted cheddar.',
    category: 'breakfast',
  },

  // Brunch & Lunch (Signature Afro-Western Dishes)
  {
    id: 'sig-1',
    name: 'West African Jollof Rice with Grilled Chicken Breast',
    price: '$24.90',
    description: 'Fragrant, slow-reduced tomato, pepper and aromatic herb rice topped with tender grilled spiced chicken breast. Served with house chilli sauce on request.',
    isSignature: true,
    badge: 'Afro-Western Signature',
    category: 'brunch-lunch',
  },
  {
    id: 'sig-2',
    name: 'Steamed Rice and Spicy Red Beef Stew',
    price: '$24.90',
    description: 'Fluffy steamed jasmine rice paired with melt-in-your-mouth slow-cooked beef simmered in a rich, deeply spiced tomato and pepper reduction.',
    isSignature: true,
    badge: 'Chef’s Special',
    category: 'brunch-lunch',
  },
  {
    id: 'lunch-3',
    name: 'Chicken Schnitzel',
    price: '$22.90',
    description: 'Crispy house-crumbed chicken breast fillet served with golden chips, fresh garden salad and warm rich gravy.',
    category: 'brunch-lunch',
  },
  {
    id: 'lunch-4',
    name: 'Chicken Parmigiana',
    price: '$24.90',
    description: 'Golden chicken schnitzel layered with napolitana tomato sauce, shaved ham and melted mozzarella; served with hot chips and fresh salad.',
    category: 'brunch-lunch',
  },
  {
    id: 'lunch-5',
    name: 'Pancakes with Seasonal Fruit',
    price: '$18.90',
    description: 'Golden pancakes crowned with seasonal berries and fruit, pure maple syrup and chantilly whipped cream.',
    dietary: ['V'],
    category: 'brunch-lunch',
  },

  // Salads
  {
    id: 'sal-1',
    name: 'Chicken and Avocado Salad',
    price: '$17.90',
    description: 'Marinated grilled chicken breast, fresh avocado, mixed garden leaves, vine tomato, cucumber and house herb dressing.',
    category: 'salads',
  },
  {
    id: 'sal-2',
    name: 'Classic Caesar Salad',
    price: '$15.90',
    description: 'Crisp cos lettuce, diced smoky bacon, shaved parmesan, garlic croutons and creamy Caesar dressing. (Add grilled chicken +$5.00)',
    category: 'salads',
  },
  {
    id: 'sal-3',
    name: 'Greek Salad',
    price: '$12.90',
    description: 'Vine-ripened tomato, crisp cucumber, red onion, kalamata olives, creamy Greek feta and dried oregano olive oil dressing.',
    dietary: ['V', 'GF'],
    category: 'salads',
  },
  {
    id: 'sal-4',
    name: 'Roast Pumpkin and Feta Salad',
    price: '$15.90',
    description: 'Caramelized roast butternut pumpkin, baby spinach, crumbled feta, toasted pepita seeds and aged balsamic dressing.',
    dietary: ['V', 'GF'],
    category: 'salads',
  },

  // Rotating Lunch Specials
  {
    id: 'spec-1',
    name: 'Beef Lasagna',
    price: '$23.90',
    description: 'Traditional slow-simmered bolognese layered with rich béchamel, pasta sheets and melted cheese; served with a crisp garden salad.',
    isSpecial: true,
    badge: 'Rotating Special',
    category: 'rotating-specials',
  },
  {
    id: 'spec-2',
    name: 'Crumbed Chicken Tenderloins',
    price: '$19.90',
    description: 'Crispy crumbed chicken tenderloins served with golden hot chips, house crunchy coleslaw and chef’s dipping sauce.',
    isSpecial: true,
    badge: 'Rotating Special',
    category: 'rotating-specials',
  },

  // Kids' Meals (12 years & under)
  {
    id: 'kid-1',
    name: 'Chicken Nuggets and Chips',
    price: '$9.90',
    description: 'Tender golden chicken nuggets with seasoned chips and tomato sauce.',
    category: 'kids',
  },
  {
    id: 'kid-2',
    name: 'Fish Fingers and Chips',
    price: '$10.90',
    description: 'Crispy battered fish fingers served with chips and lemon wedge.',
    category: 'kids',
  },
  {
    id: 'kid-3',
    name: 'One Mini Sliders, Chips and Coleslaw',
    price: '$12.90',
    description: 'Juicy mini beef slider with cheese and relish, served with hot chips and creamy coleslaw.',
    category: 'kids',
  },

  // Desserts & Grab & Go
  {
    id: 'des-1',
    name: 'Warm Banana Bread',
    price: '$7.50',
    description: 'Toasted spiced banana loaf served warm with whipped salted butter. (Add whipped cream or vanilla ice cream +$2.00).',
    dietary: ['V'],
    category: 'desserts',
  },
  {
    id: 'des-2',
    name: 'Carrot Cake',
    price: '$7.90',
    description: 'Moist spiced carrot cake packed with walnuts and topped with rich cream cheese frosting.',
    dietary: ['V'],
    badge: 'Rotating Dessert',
    category: 'desserts',
  },
  {
    id: 'des-3',
    name: 'Mixed Berry Cheesecake',
    price: '$8.90',
    description: 'Silky smooth baked cheesecake topped with a tart mixed berry compote.',
    dietary: ['V'],
    badge: 'Rotating Dessert',
    category: 'desserts',
  },
  {
    id: 'des-4',
    name: 'Classic Tiramisu',
    price: '$8.50',
    description: 'Coffee-soaked savoiardi sponge fingers layered with mascarpone cream and dusted with dark cocoa.',
    dietary: ['V'],
    badge: 'Rotating Dessert',
    category: 'desserts',
  },
  {
    id: 'gg-1',
    name: 'Fresh Baked Muffin of the Day',
    price: '$5.50',
    description: 'Daily fresh-baked sweet muffin (e.g. Blueberry, Apple Cinnamon, Double Chocolate).',
    dietary: ['V'],
    category: 'desserts',
  },
  {
    id: 'gg-2',
    name: 'Artisan Cookie',
    price: '$4.50',
    description: 'Generous café-style cookie with chocolate chunks or macadamia.',
    dietary: ['V'],
    category: 'desserts',
  },
  {
    id: 'gg-3',
    name: 'Chocolate Brownie',
    price: '$6.00',
    description: 'Fudgy Belgian chocolate brownie with a decadent crackly top.',
    dietary: ['V'],
    category: 'desserts',
  },
  {
    id: 'gg-4',
    name: 'Chocolate Caramel Slice',
    price: '$6.00',
    description: 'Crisp biscuit base with golden caramel filling and thick milk chocolate layer.',
    dietary: ['V'],
    category: 'desserts',
  },
  {
    id: 'gg-5',
    name: 'Berry Yoghurt & Granola Parfait',
    price: '$7.90',
    description: 'Creamy Greek yoghurt layered with house berry compote and crunchy honey-roasted granola.',
    dietary: ['V'],
    category: 'desserts',
  },
];

export const HOT_COFFEE_DRINKS: DrinkItem[] = [
  { id: 'hc-1', name: 'Espresso', prices: { s: '$4.00' }, notes: 'Single origin espresso extracted with precision' },
  { id: 'hc-2', name: 'Macchiato / Piccolo', prices: { s: '$4.20' }, notes: 'Espresso stained with velvety microfoam' },
  { id: 'hc-3', name: 'Long Black', prices: { s: '$4.30', m: '$4.80', l: '$5.30' }, notes: 'Double shot poured over hot water with rich crema' },
  { id: 'hc-4', name: 'Flat White / Cappuccino / Latte', prices: { s: '$5.00', m: '$5.50', l: '$6.00' }, notes: 'Signature smooth espresso blend steamed to perfection' },
  { id: 'hc-5', name: 'Mocha', prices: { s: '$5.40', m: '$5.90', l: '$6.40' }, notes: 'Rich Dutch cocoa blended with espresso and silky milk' },
  { id: 'hc-6', name: 'Hot Chocolate', prices: { s: '$5.00', m: '$5.50', l: '$6.00' }, notes: 'Velvety drinking chocolate topped with chocolate dust' },
  { id: 'hc-7', name: 'Chai Latte', prices: { s: '$5.30', m: '$5.80', l: '$6.30' }, notes: 'Aromatic spiced black tea with warm cinnamon finish' },
  { id: 'hc-8', name: 'Tea Selection', prices: { s: '$5.00' }, notes: 'English Breakfast, Earl Grey, Green, or Peppermint (Loose leaf pots)' },
  { id: 'hc-9', name: 'Babyccino', prices: { s: '$2.00' }, notes: 'Frothy warm milk with cocoa dusting and marshmallow' },
];

export const ICED_COLD_DRINKS: DrinkItem[] = [
  { id: 'cd-1', name: 'Iced Latte', prices: { m: '$7.90', l: '$8.90' }, notes: 'Double espresso poured over cold milk and fresh ice' },
  { id: 'cd-2', name: 'Iced Long Black', prices: { m: '$6.50', l: '$7.50' }, notes: 'Double espresso pulled over chilled water and ice blocks' },
  { id: 'cd-3', name: 'Iced Coffee / Iced Chocolate', prices: { m: '$8.50', l: '$9.80' }, notes: 'Served with vanilla ice cream, cold milk, and chantilly cream' },
  { id: 'cd-4', name: 'Milkshake', prices: { m: '$7.50', l: '$8.50' }, notes: 'Vanilla, Chocolate, Lime, or Strawberry' },
  { id: 'cd-5', name: 'Smoothie', prices: { m: '$8.50', l: '$9.50' }, notes: 'Real fruit blend: Berry, Mango, or Banana' },
  { 
    id: 'cd-6', 
    name: "Joanna's African Fruit Punch", 
    prices: { m: '$7.00', l: '$8.00' }, 
    notes: 'Signature refreshing blend of tropical hibiscus, passionfruit, ginger, and citrus (Available selected days)',
    isSpecial: true,
  },
];

export const BOTTLED_DRINKS = [
  { name: 'Bottled Juice', price: '$6.00', desc: 'Cold pressed orange, apple, or green cleanse' },
  { name: 'Soft Drink Can', price: '$4.50', desc: 'Coke, Coke No Sugar, Sprite, Solo (375ml)' },
  { name: 'Soft Drink Bottle', price: '$5.80', desc: 'Coke varieties, ginger beer, iced tea (600ml)' },
  { name: 'Still Water', price: '$5.00', desc: 'Pure Australian spring water' },
  { name: 'Sparkling Water', price: '$5.50', desc: 'Crisp mineral sparkling water' },
  { name: "Kids' Juice", price: '$3.50', desc: 'Apple or orange juice box' },
];

export const DRINK_CUSTOMIZATIONS = [
  { label: 'Alternative or Lactose-Free Milk', price: '+$0.90', note: 'Oat, Almond, Soy, or Lactose-Free' },
  { label: 'Mug Upgrade', price: '+$0.50', note: 'For dine-in indulgence' },
  { label: 'Decaf', price: '+$0.50', note: 'Swiss Water process blend' },
  { label: 'Extra Shot', price: '+$1.00', note: 'Double strength boost' },
  { label: 'Syrups', price: '+$0.90', note: 'Vanilla, Hazelnut, or Caramel' },
];
