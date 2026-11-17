'use client';

import { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search by name, platform, features or problem…',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user presses '/' while not in an input or textarea
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6e8a72] group-focus-within:text-[#3d7a48] transition-colors pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-20 py-3 text-sm bg-white hover:bg-[#fbfdfa] focus:bg-white border border-[#d4e2d1] rounded-2xl text-[#162e1a] placeholder-[#7d9b82] focus:outline-none focus:ring-2 focus:ring-[#3d7a48]/25 focus:border-[#3d7a48] transition-all shadow-2xs"
      />
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
        {value ? (
          <button
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="p-1 text-[#6e8a72] hover:text-[#162e1a] hover:bg-[#ecf1e8] rounded-md transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#6e8a72] bg-[#ecf1e8] px-2 py-0.5 rounded-md border border-[#d4e2d1]">
            / to search
          </span>
        )}
      </div>
    </div>
  );
}
