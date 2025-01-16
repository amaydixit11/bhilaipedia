// CategoryBrowser.jsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CategoryBrowser = () => {
  const categories = ['Academics', 'Research', 'Campus Life', 'Facilities', 'Events', 'Alumni'];
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-serif mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="justify-start"
              asChild
            >
              <Link href={`/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryBrowser;