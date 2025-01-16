"use client"

import { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

type SearchSuggestion = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
};

export function SearchBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock suggestions - replace with actual API call
  const fetchSuggestions = async (search: string) => {
    // Simulated API response
    const mockSuggestions: SearchSuggestion[] = [
      {
        id: '1',
        title: 'Central Library',
        category: 'Facilities',
        excerpt: 'The main library building with over 50,000 volumes...'
      },
      {
        id: '2',
        title: 'Computer Science Department',
        category: 'Departments',
        excerpt: 'Department offering B.Tech, M.Tech and PhD programs...'
      },
      {
        id: '3',
        title: 'Student Clubs',
        category: 'Campus Life',
        excerpt: 'Various technical and cultural clubs at IIT Bhilai...'
      }
    ];
    setSuggestions(mockSuggestions.filter(s => 
      s.title.toLowerCase().includes(search.toLowerCase())
    ));
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setOpen(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        router.push(`/article/${suggestions[selectedIndex].id}`);
        setOpen(false);
      } else {
        handleSearch();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Search Input */}
      <div className="relative flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2"
          onClick={() => inputRef.current?.focus()}
        >
          <Search className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search Bhilaipedia..."
          className="w-full pl-10 pr-4"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            fetchSuggestions(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Custom Dropdown */}
      {open && query && (
        <Card className="absolute z-50 w-full mt-1 max-h-[300px] overflow-y-auto">
          <div className="p-2">
            {suggestions.length === 0 ? (
              <p className="text-sm text-muted-foreground p-2">No results found.</p>
            ) : (
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground px-2 mb-2">
                  Suggestions
                </h3>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.id}
                    className={`px-2 py-1.5 rounded-md cursor-pointer ${
                      index === selectedIndex ? 'bg-accent' : 'hover:bg-accent/50'
                    }`}
                    onClick={() => {
                      router.push(`/article/${suggestion.id}`);
                      setOpen(false);
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{suggestion.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {suggestion.category} • {suggestion.excerpt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}