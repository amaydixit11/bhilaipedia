// app/(main)/articles/[slug]/components/VersionHistory.tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ArticleVersion } from '@/types/article';

interface VersionHistoryProps {
  articleId: string;
  onRestore: (version: ArticleVersion) => Promise<void>;
}

export default function VersionHistory({ articleId, onRestore }: VersionHistoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState<ArticleVersion | null>(null);

  const { data: versions, isLoading } = useQuery<ArticleVersion[]>({
    queryKey: ['article-versions', articleId],
    queryFn: () => fetch(`/api/articles/${articleId}/versions`).then(res => res.json()),
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View History</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Version History</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Version</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {versions?.map((version) => (
              <TableRow key={version.id}>
                <TableCell>{version.version_number}</TableCell>
                <TableCell>{version.author.name}</TableCell>
                <TableCell>
                  {format(new Date(version.created_at), 'MMM d, yyyy HH:mm')}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedVersion(version)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onRestore(version)}
                    >
                      Restore
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {selectedVersion && (
          <div className="mt-4 p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Preview of Version {selectedVersion.version_number}</h3>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedVersion.content }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}