import { GalleryItem } from '../types';
import jollofImg from '../assets/images/jollof_grilled_chicken_breast_1790332168915.jpg';
import beefStewImg from '../assets/images/spicy_beef_stew_1790065528829.jpg';
import schnitzelImg from '../assets/images/chicken_schnitzel_1790065547774.jpg';
import parmiImg from '../assets/images/chicken_parmi_1790065563483.jpg';
import pancakesImg from '../assets/images/pancakes_fruit_1790065580907.jpg';
import chickenAvoSaladImg from '../assets/images/chicken_avocado_salad_1790065595112.jpg';
import caesarSaladImg from '../assets/images/classic_caesar_salad_1790065608791.jpg';
import greekSaladImg from '../assets/images/greek_salad_1790065623788.jpg';
import pumpkinFetaSaladImg from '../assets/images/diced_pumpkin_feta_salad_1790332361997.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  // Brunch & Lunch (Signature Afro-Western Dishes)
  {
    id: 'gal-jollof',
    name: 'West African Jollof Rice with Grilled Chicken Breast',
    category: 'brunch-lunch',
    description: 'Fragrant tomato and pepper rice with tender seasoned grilled chicken breast fillet and house chilli sauce on request.',
    image: jollofImg,
    badge: 'Signature Afro-Western',
  },
  {
    id: 'gal-beef-stew',
    name: 'Steamed Rice and Spicy Red Beef Stew',
    category: 'brunch-lunch',
    description: 'Steamed rice with slow-cooked beef in a rich tomato and pepper sauce.',
    image: beefStewImg,
    badge: 'Chef’s Special',
  },
  {
    id: 'gal-schnitzel',
    name: 'Chicken Schnitzel',
    category: 'brunch-lunch',
    description: 'Crumbed chicken breast with chips, garden salad and gravy.',
    image: schnitzelImg,
  },
  {
    id: 'gal-parmi',
    name: 'Chicken Parmigiana',
    category: 'brunch-lunch',
    description: 'Chicken schnitzel topped with tomato sauce, ham and cheese; served with chips and salad.',
    image: parmiImg,
    badge: 'Customer Favorite',
  },
  {
    id: 'gal-pancakes',
    name: 'Pancakes with Seasonal Fruit',
    category: 'brunch-lunch',
    description: 'Fluffy pancakes, seasonal fruit, maple syrup and whipped cream.',
    image: pancakesImg,
    dietary: ['V'],
  },

  // Salads
  {
    id: 'gal-chicken-avo',
    name: 'Chicken and Avocado Salad',
    category: 'salads',
    description: 'Grilled chicken, avocado, mixed leaves, tomato, cucumber and house dressing.',
    image: chickenAvoSaladImg,
  },
  {
    id: 'gal-caesar',
    name: 'Classic Caesar Salad',
    category: 'salads',
    description: 'Cos lettuce, bacon, parmesan, croutons and Caesar dressing (Add grilled chicken available).',
    image: caesarSaladImg,
  },
  {
    id: 'gal-greek',
    name: 'Greek Salad',
    category: 'salads',
    description: 'Tomato, cucumber, red onion, olives, feta and oregano dressing.',
    image: greekSaladImg,
    dietary: ['V', 'GF'],
  },
  {
    id: 'gal-pumpkin-feta',
    name: 'Roast Pumpkin and Feta Salad',
    category: 'salads',
    description: 'Baby spinach, roasted diced pumpkin cubes, Greek feta, crunchy pepitas and balsamic dressing.',
    image: pumpkinFetaSaladImg,
    dietary: ['V', 'GF'],
  },

  // Exterior & Shopfront Photo
  {
    id: 'gal-exterior-shopfront',
    name: "Joanna's Café Exterior & Shopfront",
    category: 'exterior',
    description: "Our welcoming café front along South Road in St Marys, featuring dedicated on-site parking and accessible entrance.",
    image: 'https://i.imgur.com/RplAuGv.jpg',
    originalUrl: 'https://imgur.com/RplAuGv',
    badge: '1231 South Road',
  },

  // Interior Café Photos
  {
    id: 'gal-interior-warm-dining',
    name: 'Warm Dining Area',
    category: 'interior',
    description: 'Spacious dining layout with comfortable tables, welcoming seating, and warm ambient lighting.',
    image: 'https://i.imgur.com/5dvycS6.jpg',
    originalUrl: 'https://imgur.com/5dvycS6',
    badge: 'Dining Area',
  },
  {
    id: 'gal-interior-cozy-seating',
    name: 'Cozy Table Seating & Atmosphere',
    category: 'interior',
    description: 'Inviting indoor setting designed for relaxed breakfast catchups, business lunches, and quiet coffee breaks.',
    image: 'https://i.imgur.com/TpjLd1W.jpg',
    originalUrl: 'https://imgur.com/TpjLd1W',
    badge: 'Dine-In Space',
  },
  {
    id: 'gal-interior-cafe-seating',
    name: 'Café Seating & Welcoming Ambience',
    category: 'interior',
    description: 'Bright and airy dining atmosphere reflecting our motto: "Good Food • Great People • Brighter Days".',
    image: 'https://i.imgur.com/uWJgTH3.jpg',
    originalUrl: 'https://imgur.com/uWJgTH3',
    badge: 'Welcoming Ambience',
  },
  {
    id: 'gal-interior-order-counter',
    name: 'Order Counter & Beverage Section',
    category: 'interior',
    description: 'Clean, modern counter service for fast takeaway pickups and friendly ordering.',
    image: 'https://i.imgur.com/3Qi8bHU.jpg',
    originalUrl: 'https://imgur.com/3Qi8bHU',
    badge: 'Order Counter',
  },
  {
    id: 'gal-interior-grab-and-go',
    name: 'Grab & Go Display',
    category: 'interior',
    description: 'Chilled display cabinet stocked with ready-to-go treats, snacks, and quick lunch items.',
    image: 'https://i.imgur.com/vXkUhYL.jpg',
    originalUrl: 'https://imgur.com/vXkUhYL',
    badge: 'Grab & Go',
  },
  {
    id: 'gal-interior-coffee-counter',
    name: 'Coffee Counter',
    category: 'interior',
    description: 'Dedicated coffee workstation where our specialty coffees, espresso, and teas are handcrafted.',
    image: 'https://i.imgur.com/OQpk7Qr.jpg',
    originalUrl: 'https://imgur.com/OQpk7Qr',
    badge: 'Coffee Counter',
  },
];
