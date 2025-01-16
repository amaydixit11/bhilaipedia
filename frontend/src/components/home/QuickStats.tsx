
// src/components/home/QuickStats.tsx
import { BookOpen, Users, Clock, Edit } from 'lucide-react';
import { StatCard } from '../shared/StatCard';

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <StatCard icon={BookOpen} label="Articles" value="5,000+" />
      <StatCard icon={Users} label="Contributors" value="500+" />
      <StatCard icon={Clock} label="Recent Changes" value="50+" />
      <StatCard icon={Edit} label="Active Editors" value="25" />
    </div>
  );
}