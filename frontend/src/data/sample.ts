// src/data/sample.ts

export type NewsItem = {
    id: string;
    title: string;
    date: string; // ISO date string
    category: 'academic' | 'research' | 'campus' | 'cultural' | 'sports' | 'technical';
    excerpt: string;
    slug: string;  // Added this field
  };
  
  export const newsItems: NewsItem[] = [
    {
      id: "1",
      title: "IIT Bhilai Researchers Develop New AI Algorithm for Climate Prediction",
      date: "2025-01-15",
      category: "research",
      excerpt: "A team of researchers from the Computer Science department has developed a novel AI algorithm that improves regional climate predictions using local weather data.",
      slug: "climate-prediction-algorithm"
    },
    {
      id: "2",
      title: "Annual Technical Festival 'Meraz' Announced",
      date: "2025-01-14",
      category: "technical",
      excerpt: "The dates for Meraz 2025 have been announced. This year's festival will feature new competitions in robotics and sustainable technology.",
      slug: "meraz-2025"
    },
    {
      id: "3",
      title: "New Collaboration with MIT for Student Exchange Program",
      date: "2025-01-12",
      category: "academic",
      excerpt: "IIT Bhilai signs MoU with Massachusetts Institute of Technology for student exchange program starting Fall 2025.",
      slug: "mit-exchange-program"
    },
    {
      id: "4",
      title: "Campus Sports Complex Expansion Project Begins",
      date: "2025-01-10",
      category: "campus",
      excerpt: "Construction begins on the new indoor sports complex, featuring Olympic-size swimming pool and advanced fitness center.",
      slug: "sports-complex-expansion"
    },
    {
      id: "5",
      title: "Cultural Festival 'Spandan' Sets New Participation Record",
      date: "2025-01-08",
      category: "cultural",
      excerpt: "Over 5000 students from 50 colleges participated in this year's cultural festival, making it the biggest edition yet.",
      slug: "spandan-2025"
    },
    {
      id: "6",
      title: "Department of Physics Receives Major Research Grant",
      date: "2025-01-05",
      category: "research",
      excerpt: "The Department of Physics has been awarded a ₹10 crore research grant for quantum computing research.",
      slug: "physics-quantum-grant"
    },
    {
      id: "7",
      title: "New Academic Programs Announced for 2025-26",
      date: "2025-01-03",
      category: "academic",
      excerpt: "IIT Bhilai introduces new B.Tech program in Artificial Intelligence and Data Science, and M.Tech in Renewable Energy.",
      slug: "new-programs-2025"
    },
    {
      id: "8",
      title: "Students Win National Robotics Competition",
      date: "2025-01-01",
      category: "technical",
      excerpt: "Team of third-year students secures first place at the National Robotics Championship held at IIT Bombay.",
      slug: "robotics-championship-2025"
    }
  ];
  
  // Helper functions remain the same
  export const getRecentNews = (count: number = 5): NewsItem[] => {
    return [...newsItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };
  
  export const getNewsByCategory = (category: NewsItem['category']): NewsItem[] => {
    return newsItems.filter(item => item.category === category);
  };