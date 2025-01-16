
// app/(main)/articles/[slug]/components/ArticleHeader.tsx
'use client';

import { Button } from '@/components/ui/button';
// import { useAuth } from '@/hooks/useAuth';

interface ArticleHeaderProps {
  title: string;
  author: {
    name: string;
    id: string;
  };
  lastModified: string;
  onEdit: () => void;
}

export default function ArticleHeader({
  title,
  author,
  lastModified,
  onEdit
}: ArticleHeaderProps) {
  // const { user, role } = useAuth();
  
  // const canEdit = role === 'admin' || role === 'editor';

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground">
          <span>By {author.name}</span>
          <span className="mx-2">•</span>
          <span>Last modified {new Date(lastModified).toLocaleDateString()}</span>
        </div>
        {/* {canEdit && ( */}
          <Button onClick={onEdit} variant="outline">
            Edit
          </Button>
        {/* )} */}
      </div>
    </div>
  );
}
