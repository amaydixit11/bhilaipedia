// src/components/home/FeaturedArticle.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function FeaturedArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-serif">From Today's Featured Article</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <p>
          <strong>IIT Bhilai's Central Library</strong> (pictured) houses over 50,000 volumes 
          and provides access to major scientific journals and databases. Established in 2016, 
          the library has grown...
        </p>
        <div className="text-sm mt-4">
          <Link href="/articles/central-library" className="text-primary hover:underline">
            Continue reading...
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
