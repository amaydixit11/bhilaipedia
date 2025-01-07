"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, GitBranch, MessageSquare, Flag } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArticleContent } from "@/components/article-content";
import { VersionHistory } from "@/components/version-history";
import { Discussion } from "@/components/discussion";
import { useAuthStore } from "@/store/auth";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { user, role } = useAuthStore();
  const { data: article, isLoading } = useQuery({
    queryKey: ["article", params.id],
    queryFn: () => fetchArticle(params.id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!article) return <div>Article not found</div>;

  const canEdit = role === "admin" || role === "editor";

  return (
    <div className="container py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: article.category, href: `/categories/${article.categoryId}` },
          { label: article.title, href: "#" },
        ]}
      />

      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Last updated {article.updatedAt}
            </span>
            <span>by {article.lastEditor}</span>
            <Badge variant="secondary">{article.category}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          {canEdit && (
            <Button asChild>
              <Link href={`/articles/${params.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
          )}
          <Button variant="outline" size="icon">
            <Flag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="discussion">
            Discussion
            <Badge variant="secondary" className="ml-2">
              {article.discussionCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="history">
            History
            <Badge variant="secondary" className="ml-2">
              {article.versionCount}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <ArticleContent content={article.content} />
          
          <div className="flex items-center gap-4 mt-8 pt-8 border-t">
            <Button variant="outline" size="sm">
              <GitBranch className="h-4 w-4 mr-2" />
              Version {article.currentVersion}
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Join Discussion
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="discussion">
          <Discussion articleId={params.id} />
        </TabsContent>

        <TabsContent value="history">
          <VersionHistory articleId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Temporary mock function
async function fetchArticle(id: string) {
  return {
    id,
    title: "Getting Started at IIT Bhilai",
    content: "# Welcome to IIT Bhilai\n\nThis guide will help you...",
    category: "Student Life",
    categoryId: "student-life",
    updatedAt: "2 hours ago",
    lastEditor: "Admin Team",
    currentVersion: "1.2.0",
    versionCount: 5,
    discussionCount: 12,
  };
}