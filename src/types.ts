export type DietaryTag = 'V' | 'GF';

export interface FoodItem {
  id: string;
  name: string;
  price: string;
  description: string;
  dietary?: DietaryTag[];
  isSignature?: boolean;
  isSpecial?: boolean;
  badge?: string;
  category: 'breakfast' | 'brunch-lunch' | 'salads' | 'rotating-specials' | 'kids' | 'desserts';
}

export interface DrinkSizePrices {
  s?: string;
  m?: string;
  l?: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  prices: DrinkSizePrices;
  notes?: string;
  flavors?: string[];
  isSpecial?: boolean;
}

export type GalleryCategory = 'brunch-lunch' | 'salads' | 'interior' | 'exterior';

export interface GalleryItem {
  id: string;
  name: string;
  category: GalleryCategory;
  description: string;
  image: string;
  originalUrl?: string;
  dietary?: DietaryTag[];
  badge?: string;
}
