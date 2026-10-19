// lib/types.ts — Shared TypeScript types for Intangible Heritage

export interface MuseumItem {
  id: string;
  title: string;
  description: string;
  category: 'Dance' | 'Crafts' | 'Rituals' | 'Music' | 'Festivals';
  image: string;
  photographer?: string;
  year?: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  venue: string;
  description: string;
  image: string;
  status: 'upcoming' | 'past';
  category: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;     // LKR
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorAffiliation?: string;
  date: string;
  abstract: string;
  tags: string[];
  downloadUrl?: string;
  journal?: string;
  volume?: string;
  issue?: string;
}
