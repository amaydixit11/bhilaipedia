"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, FolderTree, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const filteredCategories = categories?.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Categories</h1>
          <p className="text-muted-foreground">
            Browse all knowledge base categories
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Category
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search categories..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FolderTree className="h-5 w-5 text-primary" />
            {category.name}
          </span>
          <Badge variant="secondary">{category.articleCount}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {category.description}
        </p>
        <ScrollArea className="h-32">
          <ul className="space-y-2">
            {category.recentArticles.map((article: any) => (
              <li key={article.id}>
                <Link
                  href={`/articles/${article.id}`}
                  className="text-sm hover:text-primary flex items-center gap-2 group"
                >
                  <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

// Temporary mock function
async function fetchCategories() {
  return [
    {
      id: "academic",
      name: "Academic Resources",
      description: "Course materials, academic policies, and study resources",
      articleCount: 156,
      recentArticles: [
        { id: 1, title: "Course Registration Guide 2024" },
        { id: 2, title: "Academic Calendar" },
        { id: 3, title: "Library Resources" },
      ],
    },
    // Add more categories...
  ];
}