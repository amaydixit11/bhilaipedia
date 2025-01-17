'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getArticleBySlug, updateArticle } from '@/lib/articles';
import ArticleSkeleton from './ArticleSkeleton';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import { Article, ArticleUpdateInput } from '@/types/article';

export default function ArticleContent({ articleSlug }: { articleSlug: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data: article, isLoading, isError } = useQuery<Article | null>({
    queryKey: ['article', articleSlug],
    queryFn: () => getArticleBySlug(articleSlug),
    staleTime: 1000 * 60 * 5,
  });

  const mutation = useMutation({
    mutationFn: (updatedContent: ArticleUpdateInput) =>
      updateArticle(articleSlug, updatedContent, article?.author.id || ''),
    onSuccess: (updatedArticle) => {
      queryClient.setQueryData(['article', articleSlug], updatedArticle);
      setIsEditing(false);
    },
    onError: (error) => {
      console.error('Error updating article:', error);
      alert('Failed to save changes. Please try again.');
    },
  });

  if (isLoading) return <ArticleSkeleton />;
  if (isError || !article) return <div>Article not found</div>;

  const handleSave = async (newContent: string) => {
    if (!article) return;
    const updateData: ArticleUpdateInput = { content: newContent };
    mutation.mutate(updateData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <ArticleHeader
          title={article.title}
          author={article.author}
          lastModified={article.updated_at}
          onEdit={() => setIsEditing(true)}
        />
        <ArticleBody
          content={article.content}
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </div>
      {/* <div className="lg:col-span-1">
        <ArticleSidebar category={article.categories} tags={article.tags} />
      </div> */}
    </div>
  );
}
