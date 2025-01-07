import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Star, TrendingUp, Users, Award, MessageSquare } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Bhilaipedia</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The comprehensive knowledge base for the IIT Bhilai community
        </p>
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar />
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/articles/new">Create Article</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/categories">Browse Categories</Link>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-12">
        <StatCard icon={BookOpen} label="Articles" value="5,000+" />
        <StatCard icon={Users} label="Contributors" value="500+" />
        <StatCard icon={MessageSquare} label="Discussions" value="1,200+" />
        <StatCard icon={Award} label="Active Badges" value="25" />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeaturedCard
          icon={Star}
          title="Popular Articles"
          items={featuredArticles}
          type="article"
        />
        <FeaturedCard
          icon={Clock}
          title="Recent Updates"
          items={recentUpdates}
          type="update"
        />
        <FeaturedCard
          icon={TrendingUp}
          title="Active Discussions"
          items={activeDiscussions}
          type="discussion"
        />
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <Icon className="h-8 w-8 text-primary" />
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function FeaturedCard({ icon: Icon, title, items, type }: { 
  icon: any, 
  title: string, 
  items: any[],
  type: 'article' | 'update' | 'discussion'
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="group">
              <Link
                href={`/${type}s/${item.id}`}
                className="block space-y-1 p-2 rounded-md hover:bg-muted/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium group-hover:text-primary">
                    {item.title}
                  </h3>
                  {type === 'discussion' && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {item.replies} replies
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.author}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                  {type === 'article' && (
                    <>
                      <span>•</span>
                      <span>{item.category}</span>
                    </>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Sample data
const featuredArticles = [
  {
    id: 1,
    title: "Getting Started at IIT Bhilai",
    excerpt: "Essential guide for new students covering accommodation, academics, and campus life.",
    author: "Admin Team",
    date: "2 days ago",
    category: "Student Life"
  },
  // ... more articles
];

const recentUpdates = [
  {
    id: 1,
    title: "Library Access Guidelines Updated",
    excerpt: "New procedures for accessing digital resources and extended hours announced.",
    author: "Library Committee",
    date: "3 hours ago"
  },
  // ... more updates
];

const activeDiscussions = [
  {
    id: 1,
    title: "Research Collaboration Opportunities",
    excerpt: "Discussion about upcoming research projects and collaboration possibilities.",
    author: "Dr. Smith",
    date: "1 hour ago",
    replies: 23
  },
  // ... more discussions
];