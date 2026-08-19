export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'breakfast' | 'tea' | 'cold-drinks' | 'bakery';
  description: string;
  priceNote: string;
  isPopular?: boolean;
  isHouseFavorite?: boolean;
  dietary?: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  relativeTime: string;
  text: string;
  verified: boolean;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee' | 'Breakfast' | 'Food' | 'Interior' | 'Atmosphere';
  src: string;
  alt: string;
  aspect: 'square' | 'portrait' | 'landscape' | 'wide';
  caption: string;
}

export interface CoffeeFeature {
  id: string;
  name: string;
  roastNotes: string;
  description: string;
  temp: 'Hot' | 'Iced' | 'Hot / Iced';
  image: string;
  accent: string;
}
