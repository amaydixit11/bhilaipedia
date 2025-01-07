"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, ThumbsDown, Reply, MoreVertical } from "lucide-react";
import { useAuthStore } from "@/store/auth";

export function Discussion({ articleId }: { articleId: string }) {
  const { user } = useAuthStore();
  const [newComment, setNewComment] = useState("");
  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments", articleId],
    queryFn: () => fetchComments(articleId),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
  };

  return (
    <div className="space-y-8">
      {user && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Add to the discussion..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button type="submit">Post Comment</Button>
        </form>
      )}

      <div className="space-y-6">
        {comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: any }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-sm text-muted-foreground ml-2">
                {comment.date}
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2">{comment.content}</p>
          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              {comment.upvotes}
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="h-4 w-4 mr-2" />
              {comment.downvotes}
            </Button>
            <Button variant="ghost" size="sm">
              <Reply className="h-4 w-4 mr-2" />
              Reply
            </Button>
          </div>
        </div>
      </div>

      {comment.replies?.length > 0 && (
        <div className="ml-14 space-y-4">
          {comment.replies.map((reply: any) => (
            <CommentCard key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

// Temporary mock function
async function fetchComments(articleId: string) {
  return [
    {
      id: 1,
      content: "This article was very helpful! Could you add more details about...",
      author: {
        name: "Jane Smith",
        avatar: "",
      },
      date: "1 hour ago",
      upvotes: 12,
      downvotes: 1,
      replies: [
        {
          id: 2,
          content: "I agree, that would be useful information to add.",
          author: {
            name: "John Doe",
            avatar: "",
          },
          date: "30 minutes ago",
          upvotes: 5,
          downvotes: 0,
        },
      ],
    },
    // Add more comments...
  ];
}