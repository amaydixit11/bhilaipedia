// app/(main)/articles/[slug]/components/ArticleBody.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/editor/Editor'), { 
  ssr: false,
  loading: () => <div>Loading editor...</div>
});

interface ArticleBodyProps {
  content: string;
  isEditing: boolean;
  onSave: (content: string) => Promise<void>;
  onCancel: () => void;
}

export default function ArticleBody({
  content,
  isEditing,
  onSave,
  onCancel
}: ArticleBodyProps) {
  const [editedContent, setEditedContent] = useState(content);

  if (!isEditing) {
    return (
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="edit">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <Editor 
            content={editedContent}
            onChange={setEditedContent}
          />
        </TabsContent>
        <TabsContent value="preview">
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: editedContent }} />
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(editedContent)}>Save Changes</Button>
      </div>
    </div>
  );
}

