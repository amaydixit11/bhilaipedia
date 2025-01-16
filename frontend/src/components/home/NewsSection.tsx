
// src/components/home/NewsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/types";
import Link from "next/link";

interface NewsSectionProps {
  items: NewsItem[];
}

export function NewsSection({ items }: NewsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-serif">In The News</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-sm">
          {items.map((item) => (
            <li key={item.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
              <Link href={`/articles/${item.slug}`} className="hover:text-primary">
                {item.title}
              </Link>
              <p className="text-muted-foreground mt-1">{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
