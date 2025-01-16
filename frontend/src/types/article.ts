// types/article.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
  published: boolean;
  categories: Category[];
  tags: Tag[];
  version_count: number;
}

export interface ArticleVersion {
  id: string;
  article_id: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  version_number: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent_id?: string;
  article_count: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  article_count: number;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
  parent_id?: string;
  replies?: Comment[];
}

export interface ArticleCreateInput {
  title: string;
  content: string;
  excerpt?: string;
  category_ids: string[];
  tag_ids: string[];
}

export interface ArticleUpdateInput {
  title?: string;
  content?: string;
  excerpt?: string;
  category_ids?: string[];
  tag_ids?: string[];
  published?: boolean;
}