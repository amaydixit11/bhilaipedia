// src/types/index.ts

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'research' | 'campus' | 'cultural' | 'sports' | 'technical';
  excerpt: string;
  slug: string;
};
  
  export interface Article {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
  }