// lib/articles.ts
import { Article, ArticleCreateInput, ArticleUpdateInput, ArticleVersion } from '@/types/article';

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const response = await fetch(`/api/articles/${slug}`);
  const article = await response.json();
  return article || null;
}

export async function getArticleVersions(articleId: string): Promise<ArticleVersion[]> {
  const response = await fetch(`/api/articles/${articleId}/versions`);
  const versions = await response.json();
  return versions;
}

export async function createArticle(
  input: ArticleCreateInput,
  authorId: string
): Promise<Article> {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...input, authorId }),
  });

  const article = await response.json();
  return article;
}

export async function updateArticle(
  slug: string,
  input: ArticleUpdateInput,
  authorId: string
): Promise<Article> {
  const response = await fetch(`/api/articles/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...input, authorId }),
  });

  const article = await response.json();
  return article;
}

export async function getRelatedArticles(
  articleId: string,
  categoryIds: string[],
  tagIds: string[],
  limit = 3
): Promise<Article[]> {
  const response = await fetch(`/api/articles/related`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ articleId, categoryIds, tagIds, limit }),
  });

  const articles = await response.json();
  return articles;
}

export async function canEditArticle(articleId: string, userId: string): Promise<boolean> {
  const response = await fetch(`/api/articles/${articleId}/can-edit/${userId}`);
  const { canEdit } = await response.json();
  return canEdit;
}
