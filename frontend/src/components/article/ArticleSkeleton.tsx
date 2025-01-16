// app/(main)/articles/[slug]/components/ArticleSkeleton.tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticleSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <div className="lg:col-span-1">
        <Skeleton className="h-[200px] w-full" />
      </div>
    </div>
  );
}