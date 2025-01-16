// app/(main)/articles/[slug]/page.tsx
import { Suspense } from 'react';
import ArticleSkeleton from '@/components/article/ArticleSkeleton';
import ArticleContent from '@/components/article/ArticleContent';
import { getArticleBySlug } from '@/lib/articles';

export default async function ArticlePage({
  params
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Suspense fallback={<ArticleSkeleton />}>
          <ArticleContent articleSlug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
