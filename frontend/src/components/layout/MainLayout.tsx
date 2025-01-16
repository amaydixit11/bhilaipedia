// src/components/layout/MainLayout.tsx
import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <TopNav />
        <main className="max-w-[1200px] mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}