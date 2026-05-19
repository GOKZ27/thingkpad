import x1carbon from './assets/10.jpeg';
import t14 from './assets/11.jpeg';
import p1gen7 from './assets/12.jpeg';
import z13 from './assets/13.jpeg';
import x1yoga from './assets/14.jpeg';
import t14gen5 from './assets/16.jpeg';
import t16gen3 from './assets/17.jpeg';
import z13ai from './assets/18.jpeg';

export interface Product {
  id: string;
  name: string;
  category: 'X1 Carbon' | 'T Series' | 'P Series' | 'AI Edition';
  price: number;
  rating: number;

  specs: {
    cpu: string;
    ram: string;
    storage: string;
    display: string;
  };

  image: string;
  isPromo?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ThinkPad X1 Carbon Gen 12',
    category: 'X1 Carbon',
    price: 32999000,
    rating: 4.9,

    specs: {
      cpu: 'Intel Core Ultra 7',
      ram: '32GB LPDDR5X',
      storage: '1TB Gen4 SSD',
      display: '14" 2.8K OLED'
    },

    image: x1carbon,
    isPromo: true
  },

  {
    id: '2',
    name: 'ThinkPad T14 Gen 5',
    category: 'T Series',
    price: 24999000,
    rating: 4.7,

    specs: {
      cpu: 'AMD Ryzen 7 PRO',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '14" WUXGA IPS'
    },

    image: t14
  },

  {
    id: '3',
    name: 'ThinkPad P1 Gen 7',
    category: 'P Series',
    price: 48999000,
    rating: 4.9,

    specs: {
      cpu: 'Intel Core Ultra 9',
      ram: '64GB LPDDR5X',
      storage: '2TB SSD',
      display: '16" 4K OLED'
    },

    image: p1gen7,
    isPromo: true
  },

  {
    id: '4',
    name: 'ThinkPad Z13 Gen 2 AI Edition',
    category: 'AI Edition',
    price: 28999000,
    rating: 4.8,

    specs: {
      cpu: 'AMD Ryzen 7 PRO AI',
      ram: '32GB LPDDR5X',
      storage: '1TB SSD',
      display: '13.3" OLED'
    },

    image: z13,
    isPromo: true
  },

  {
    id: '5',
    name: 'ThinkPad T16 Gen 3',
    category: 'T Series',
    price: 27999000,
    rating: 4.7,

    specs: {
      cpu: 'Intel Core Ultra 7',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16" WUXGA IPS'
    },

    image: t16gen3
  },

  {
    id: '6',
    name: 'ThinkPad X1 Yoga Gen 8',
    category: 'X1 Carbon',
    price: 35999000,
    rating: 4.8,

    specs: {
      cpu: 'Intel Core i7 Evo',
      ram: '32GB LPDDR5',
      storage: '1TB SSD',
      display: '14" 4K OLED Touch'
    },

    image: x1yoga
  },

  {
    id: '7',
    name: 'ThinkPad T14 Gen 5 Special',
    category: 'T Series',
    price: 26999000,
    rating: 4.8,

    specs: {
      cpu: 'Intel Core Ultra 5',
      ram: '16GB DDR5',
      storage: '512GB SSD',
      display: '14" IPS'
    },

    image: t14gen5,
    isPromo: true
  },

  {
    id: '8',
    name: 'ThinkPad Z13 AI Edition',
    category: 'AI Edition',
    price: 31999000,
    rating: 4.9,

    specs: {
      cpu: 'Ryzen AI 9',
      ram: '32GB LPDDR5X',
      storage: '1TB SSD',
      display: '13.3" OLED'
    },

    image: z13ai,
    isPromo: true
  }
];