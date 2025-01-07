"use client";

import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, Edit, GitBranch, MessageSquare, Star } from "lucide-react";
import { useAuthStore } from "@/store/auth";

export default function ProfilePage() {
  const { user } = useAuthStore();
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: () => fetchProfile(user?.id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback>{profile.name[0]}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-muted-foreground">{profile.role}</p>
              </div>
              <Button className="w-full" variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Contribution Points</span>
                    <span className="font-medium">{profile.points}</span>
                  </div>
                  <Progress value={profile.points / 10} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {profile.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50"
                    >
                      <span className="text-2xl">{badge.icon}</span>
                      <span className="text-xs text-center">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="contributions">
            <TabsList className="mb-4">
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            </TabsList>

            <TabsContent value="contributions">
              <div className="space-y-4">
                {profile.contributions.map((contribution) => (
                  <Card key={contribution.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium hover:text-primary">
                            {contribution.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {contribution.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <span className="flex items-center gap-1">
                              <GitBranch className="h-4 w-4" />
                              {contribution.type}
                            </span>
                            <span>{contribution.date}</span>
                          </div>
                        </div>
                        <Badge>{contribution.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Add other tab contents */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Temporary mock function
async function fetchProfile(userId: string | undefined) {
  return {
    name: "John Doe",
    role: "Editor",
    avatar: "",
    points: 750,
    badges: [
      { id: 1, name: "Top Contributor", icon: "🏆" },
      { id: 2, name: "Quality Writer", icon: "✍️" },
      { id: 3, name: "Helpful Editor", icon: "📝" },
      { id: 4, name: "Discussion Leader", icon: "💬" },
    ],
    contributions: [
      {
        id: 1,
        title: "Updated Library Access Guidelines",
        description: "Added new sections about digital resource access",
        type: "Edit",
        category: "Academic",
        date: "2 days ago",
      },
      // Add more contributions...
    ],
  };
}