// lib/articles.ts
import { Article, ArticleCreateInput, ArticleUpdateInput, ArticleVersion } from '@/types/article';
import { createClient } from '@/utils/supabase/server';

const supabase = await createClient();

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data: article, error } = await supabase
    .from('articles')
    .select(`
      *,
      author:users(id, name),
      categories:article_categories(
        category:categories(id, name, slug)
      ),
      tags:article_tags(
        tag:tags(id, name, slug)
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) throw error;
  if (!article) return null;

  // Transform the data to match the Article type
  return {
    ...article,
    categories: article.categories.map((c: any) => c.category),
    tags: article.tags.map((t: any) => t.tag),
  };
}

export async function getArticleVersions(articleId: string): Promise<ArticleVersion[]> {
  const { data: versions, error } = await supabase
    .from('article_versions')
    .select(`
      *,
      author:users(id, name)
    `)
    .eq('article_id', articleId)
    .order('version_number', { ascending: false });

  if (error) throw error;
  return versions;
}

export async function createArticle(
  input: ArticleCreateInput,
  authorId: string
): Promise<Article> {
  const { title, content, excerpt, category_ids, tag_ids } = input;

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  // Start a transaction
  const { data: article, error } = await supabase
    .rpc('create_article', {
      title,
      content,
      excerpt: excerpt || '',
      slug,
      author_id: authorId,
      category_ids,
      tag_ids,
    });

  if (error) throw error;
  return article;
}

export async function updateArticle(
  slug: string,
  input: ArticleUpdateInput,
  authorId: string
): Promise<Article> {
  const { data: article, error } = await supabase
    .rpc('update_article', {
      p_slug: slug,
      p_title: input.title,
      p_content: input.content,
      p_excerpt: input.excerpt,
      p_category_ids: input.category_ids,
      p_tag_ids: input.tag_ids,
      p_published: input.published,
      p_author_id: authorId,
    });

  if (error) throw error;
  return article;
}

export async function getRelatedArticles(
  articleId: string,
  categoryIds: string[],
  tagIds: string[],
  limit = 3
): Promise<Article[]> {
  const { data: articles, error } = await supabase
    .rpc('get_related_articles', {
      p_article_id: articleId,
      p_category_ids: categoryIds,
      p_tag_ids: tagIds,
      p_limit: limit,
    });

  if (error) throw error;
  return articles;
}

// Utility function to check if user can edit an article
export async function canEditArticle(
  articleId: string,
  userId: string
): Promise<boolean> {
  const { data: userRole } = await supabase
    .from('users')
    .select('role')
    .eq('id', userId)
    .single();

  if (!userRole) return false;

  // Admins can edit any article
  if (userRole.role === 'admin') return true;

  // Editors can edit their own articles
  if (userRole.role === 'editor') {
    const { data: article } = await supabase
      .from('articles')
      .select('author_id')
      .eq('id', articleId)
      .single();

    return article?.author_id === userId;
  }

  return false;
}