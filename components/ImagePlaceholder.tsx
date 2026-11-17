import React from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  id: string;
  title: string;
  aspectRatio?: string;
  dimensions?: string;
  suggestedSubject?: string;
  className?: string;
  dark?: boolean;
  priorityBadge?: string;
  src?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  id,
  title,
  aspectRatio = 'aspect-[4/3]',
  dimensions = '800 × 600',
  suggestedSubject,
  className = '',
  dark = false,
  priorityBadge,
  src,
  alt,
}: ImagePlaceholderProps) {
  // If an actual image is provided, render the optimized image
  if (src) {
    return (
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 group shadow-xs hover:shadow-md ${
          dark ? 'border-[#2b5431] bg-[#162e1a]' : 'border-[#d4e2d1] bg-[#f4f7f2]'
        } ${className}`}
      >
        <Image
          src={src}
          alt={alt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle dark gradient overlay at the bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  }

  // Otherwise, render the placeholder
  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 text-center transition-all duration-300 group border ${
        dark
          ? 'bg-[#1e3b23]/80 border-[#2e5936] text-[#e0ecdf]'
          : 'bg-[#f4f7f2] border-[#d4e2d1] text-[#2d4d32]'
      } ${className}`}
    >
      {/* Decorative botanical ambient glow */}
      <div
        className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
          dark ? 'bg-emerald-500/10' : 'bg-emerald-200/40'
        }`}
      />
      <div
        className={`absolute -bottom-12 -left-12 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
          dark ? 'bg-[#3d7a48]/20' : 'bg-[#e2ede0]/60'
        }`}
      />

      {/* Top badges */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 z-10">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border shadow-2xs ${
            dark
              ? 'bg-[#142817] text-[#a4d7aa] border-[#2e5936]'
              : 'bg-white text-[#1b381e] border-[#c8dcc5]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {id}
        </span>
        {priorityBadge && (
          <span
            className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
              dark ? 'bg-[#2b4d30] text-[#c2dfc6]' : 'bg-[#e5efe3] text-[#2d4d32]'
            }`}
          >
            <Sparkles className="w-2.5 h-2.5" />
            {priorityBadge}
          </span>
        )}
      </div>

      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
        <span
          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md ${
            dark ? 'bg-[#142817]/70 text-[#96be9b]' : 'bg-white/80 text-[#547359]'
          }`}
        >
          {dimensions}
        </span>
      </div>

      {/* Center Icon and Info */}
      <div className="relative z-10 flex flex-col items-center max-w-xs px-2">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 shadow-2xs transition-transform duration-300 group-hover:scale-105 ${
            dark
              ? 'bg-[#162e1a] text-[#86c78e] border border-[#2e5936]'
              : 'bg-white text-[#3d7a48] border border-[#d4e2d1]'
          }`}
        >
          <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 opacity-85" />
        </div>

        <h4
          className={`text-sm sm:text-base font-semibold tracking-tight mb-1 ${
            dark ? 'text-white' : 'text-[#162e1a]'
          }`}
        >
          {title}
        </h4>

        {suggestedSubject && (
          <p
            className={`text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 ${
              dark ? 'text-[#a8c7ab]' : 'text-[#58755c]'
            }`}
          >
            {suggestedSubject}
          </p>
        )}
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-3 inset-x-0 text-center">
        <span
          className={`text-[10px] uppercase tracking-widest font-semibold opacity-70 ${
            dark ? 'text-[#8eb592]' : 'text-[#648468]'
          }`}
        >
          Ready for Image Asset
        </span>
      </div>
    </div>
  );
}
