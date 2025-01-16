// src/components/layout/Sidebar.tsx
import { BookOpen, Clock, Star, MessageSquare, Edit, Menu } from 'lucide-react';
import { NavLink } from '../shared/NavLink';
export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r border-border p-6 space-y-4">
      <nav className="space-y-2">
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground">Navigation</h2>
        <NavLink href="/" icon={BookOpen}>Main Page</NavLink>
        <NavLink href="/categories" icon={Menu}>Categories</NavLink>
        <NavLink href="/special/random" icon={Star}>Random Article</NavLink>
        <NavLink href="/help" icon={MessageSquare}>Help</NavLink>
        
        <h2 className="text-sm font-semibold mb-3 mt-6 text-muted-foreground">Contribute</h2>
        <NavLink href="/articles/new" icon={Edit}>Create Article</NavLink>
        <NavLink href="/recent-changes" icon={Clock}>Recent Changes</NavLink>
      </nav>
    </aside>
  );
}