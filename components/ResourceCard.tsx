'use client';

import Link from 'next/link';
import { ExternalLink, ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Resource } from '@/data/resources';

const pricingStyles: Record<string, string> = {
  Free: 'bg-[#ecf1e8] text-[#1b381e] border-[#c4dcbf]',
  Freemium: 'bg-[#e7f0fa] text-[#1a3e68] border-[#c2daf5]',
  Paid: 'bg-[#fcf3e6] text-[#6b4712] border-[#f0dac0]',
  'Built-in': 'bg-[#f3edf8] text-[#4d286d] border-[#dfd0ec]',
};

interface ResourceCardProps {
  resource: Resource;
  compact?: boolean;
}

export default function ResourceCard({ resource, compact = false }: ResourceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (compact) {
    return (
      <motion.div
        layout
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.15 }}
        className="group bg-white border border-[#d4e2d1] rounded-2xl p-4 hover:border-[#86c78e] hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Link
              href={`/resources/${resource.slug}`}
              className="text-base font-bold text-[#162e1a] group-hover:text-[#3d7a48] transition-colors"
            >
              {resource.name}
            </Link>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-[#f4f7f2] text-[#2d4d32] border-[#d4e2d1]">
              {resource.category}
            </span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${pricingStyles[resource.pricingLabel] || 'bg-neutral-100 text-neutral-600'}`}>
              {resource.pricingLabel}
            </span>
          </div>
          <p className="text-xs text-[#58755c] line-clamp-1">{resource.summary}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex gap-1">
            {resource.platforms.slice(0, 2).map((p) => (
              <span key={p} className="text-[10px] font-mono px-2 py-0.5 bg-[#ecf1e8] text-[#334d37] rounded-md border border-[#d4e2d1]">
                {p}
              </span>
            ))}
          </div>
          <Link
            href={`/resources/${resource.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
          >
            Details <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-[#d4e2d1] rounded-2xl sm:rounded-3xl p-6 hover:border-[#86c78e] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Header: Name + Badges */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <Link href={`/resources/${resource.slug}`}>
              <h3 className="font-bold text-[#162e1a] text-lg group-hover:text-[#3d7a48] transition-colors tracking-tight">
                {resource.name}
              </h3>
            </Link>
            <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full border font-semibold bg-[#ecf1e8] text-[#2d4d32] border-[#c8dcc5]">
              {resource.category}
            </span>
          </div>

          <span
            className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-semibold ${
              pricingStyles[resource.pricingLabel] ?? 'bg-[#ecf1e8] text-[#162e1a] border-[#c8dcc5]'
            }`}
          >
            {resource.pricingLabel}
          </span>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#4f6652] leading-relaxed mb-4">
          {resource.summary}
        </p>

        {/* Best For Callout */}
        <div className="bg-[#f4f7f2] border border-[#dce9da] rounded-xl p-3 mb-4 text-xs text-[#2b442f]">
          <span className="font-bold text-[#162e1a] block mb-0.5">Best For:</span>
          {resource.bestFor}
        </div>

        {/* Key Features (Top 3) */}
        <ul className="space-y-1.5 mb-5 text-xs text-[#4f6652]">
          {resource.keyFeatures.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#3d7a48] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Platform tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {resource.platforms.map((platform) => (
            <span
              key={platform}
              className="text-[10px] font-mono font-medium px-2 py-0.5 bg-[#ecf1e8] text-[#334d37] rounded-md border border-[#d4e2d1]"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Detail Link + External Website */}
      <div className="pt-4 border-t border-[#e2ede0] flex items-center justify-between">
        <Link
          href={`/resources/${resource.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
        >
          View Full Breakdown
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href={resource.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#6e8a72] hover:text-[#162e1a] inline-flex items-center gap-1 font-medium transition-colors"
          aria-label={`Visit official website of ${resource.name}`}
        >
          Website
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
