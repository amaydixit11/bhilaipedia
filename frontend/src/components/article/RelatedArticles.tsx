// app/(main)/articles/[slug]/components/RelatedArticles.tsx
'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Article } from '@/types/article';

interface RelatedArticlesProps {
  currentArticleId: string;
  categoryIds: string[];
  tagIds: string[];
}

export default function RelatedArticles({
  currentArticleId,
  categoryIds,
  tagIds,
}: RelatedArticlesProps) {
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ['related-articles', currentArticleId],
    queryFn: () => 
      fetch(`/api/articles/${currentArticleId}/related?categories=${categoryIds.join(',')}&tags=${tagIds.join(',')}`).then(res => res.json()),
  });

  if (isLoading) {
    return <RelatedArticlesSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles?.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="block hover:bg-muted p-3 rounded-lg transition-colors"
            >
              <h3 className="font-semibold">{article.title}</h3>
              <p className="text-sm text-muted-foreground">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function RelatedArticlesSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}