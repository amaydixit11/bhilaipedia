// app/(main)/articles/[slug]/components/Comments.tsx
'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { useAuth } from '@/hooks/useAuth';
import { Comment } from '@/types/article';

interface CommentsProps {
  articleId: string;
}

export default function Comments({ articleId }: CommentsProps) {
  // const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const queryClient = useQueryClient();

  const { data: comments, isLoading } = useQuery<Comment[], Error>({
    queryKey: ['comments', articleId],
    queryFn: () =>
      fetch(`/api/articles/${articleId}/comments`).then((res) => res.json()),
  });
  

  const addCommentMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await fetch(`/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', articleId]);
      setNewComment('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addCommentMutation.mutate(newComment);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Comments</h2>
      
      {/* {user && ( */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="min-h-[100px]"
          />
          <Button type="submit">Post Comment</Button>
        </form>
      {/* )} */}

      <div className="space-y-6">
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex space-x-4">
      <Avatar>
        <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{comment.author.name}</span>
          <span className="text-sm text-muted-foreground">
            {new Date(comment.created_at).toLocaleDateString()}
          </span>
        </div>
        <p className="mt-1">{comment.content}</p>
      </div>
    </div>
  );
}