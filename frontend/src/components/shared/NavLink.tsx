// src/components/shared/NavLink.tsx
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function NavLink({ href, icon: Icon, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}
