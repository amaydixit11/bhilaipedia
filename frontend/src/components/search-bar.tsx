"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    articles: true,
    discussions: true,
    comments: false,
    users: false,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchParams = new URLSearchParams();
      searchParams.set("q", query);
      Object.entries(filters).forEach(([key, value]) => {
        if (value) searchParams.append("type", key);
      });
      router.push(`/search?${searchParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles, discussions, and more..."
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Search in</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={filters.articles}
            onCheckedChange={(checked) => 
              setFilters(prev => ({ ...prev, articles: checked }))
            }
          >
            Articles
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={filters.discussions}
            onCheckedChange={(checked) =>
              setFilters(prev => ({ ...prev, discussions: checked }))
            }
          >
            Discussions
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={filters.comments}
            onCheckedChange={(checked) =>
              setFilters(prev => ({ ...prev, comments: checked }))
            }
          >
            Comments
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={filters.users}
            onCheckedChange={(checked) =>
              setFilters(prev => ({ ...prev, users: checked }))
            }
          >
            Users
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button type="submit">Search</Button>
    </form>
  );
}