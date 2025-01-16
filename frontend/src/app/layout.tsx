// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopNav } from '@/components/layout/TopNav'
import { MainLayout } from '@/components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhilaipedia - IIT Bhilai Knowledge Base',
  description: 'The comprehensive knowledge base for the IIT Bhilai community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}