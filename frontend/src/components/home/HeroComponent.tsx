// HeroSection.jsx
import { SearchBar } from '@/components/shared/SearchBar';
import { Button } from '@/components/ui/button';
import { Plus, BookOpen, Brain } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative mb-16 py-12 bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-serif mb-6 text-center">
          Welcome to Bhilaipedia
        </h1>
        <p className="text-muted-foreground mb-8 text-center text-lg">
          The free encyclopedia of IIT Bhilai that anyone from the institute can edit.
        </p>
        <SearchBar />
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/contribute">
              <Plus className="mr-2 h-4 w-4" />
              Create Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/random">
              <BookOpen className="mr-2 h-4 w-4" />
              Random Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/help">
              <Brain className="mr-2 h-4 w-4" />
              Help
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;