'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Category, PricingLabel, resources } from '@/data/resources';

const ALL_CATEGORIES: Category[] = [
  'Focus & Productivity',
  'Screen-Time Management',
  'Mental Wellness',
  'Notifications & Sleep',
];

const ALL_PRICING: PricingLabel[] = ['Free', 'Freemium', 'Paid', 'Built-in'];

interface FilterBarProps {
  selectedCategory: Category | 'All';
  selectedPricing: PricingLabel | 'All';
  onCategoryChange: (c: Category | 'All') => void;
  onPricingChange: (p: PricingLabel | 'All') => void;
}

export default function FilterBar({
  selectedCategory,
  selectedPricing,
  onCategoryChange,
  onPricingChange,
}: FilterBarProps) {
  const shouldReduceMotion = useReducedMotion();

  // Helper to count how many tools belong to each category
  const getCategoryCount = (c: Category | 'All') => {
    if (c === 'All') return resources.length;
    return resources.filter((r) => r.category === c).length;
  };

  // Helper to count how many tools belong to each pricing
  const getPricingCount = (p: PricingLabel | 'All') => {
    if (p === 'All') return resources.length;
    return resources.filter((r) => r.pricingLabel === p).length;
  };

  return (
    <div className="space-y-4 pt-1">
      {/* Category filters */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-bold text-[#58755c] uppercase tracking-wider">
            Filter by Category
          </p>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => onCategoryChange('All')}
              className="text-[11px] text-[#3d7a48] hover:text-[#162e1a] font-bold cursor-pointer"
            >
              Reset category
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <FilterChip
            label="All Categories"
            count={getCategoryCount('All')}
            active={selectedCategory === 'All'}
            onClick={() => onCategoryChange('All')}
            shouldReduceMotion={shouldReduceMotion}
          />
          {ALL_CATEGORIES.map((c) => (
            <FilterChip
              key={c}
              label={c}
              count={getCategoryCount(c)}
              active={selectedCategory === c}
              onClick={() => onCategoryChange(c)}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>

      {/* Pricing filters */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-bold text-[#58755c] uppercase tracking-wider">
            Filter by Pricing
          </p>
          {selectedPricing !== 'All' && (
            <button
              onClick={() => onPricingChange('All')}
              className="text-[11px] text-[#3d7a48] hover:text-[#162e1a] font-bold cursor-pointer"
            >
              Reset pricing
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <FilterChip
            label="All Pricing"
            count={getPricingCount('All')}
            active={selectedPricing === 'All'}
            onClick={() => onPricingChange('All')}
            shouldReduceMotion={shouldReduceMotion}
          />
          {ALL_PRICING.map((p) => (
            <FilterChip
              key={p}
              label={p}
              count={getPricingCount(p)}
              active={selectedPricing === p}
              onClick={() => onPricingChange(p)}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  shouldReduceMotion,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.button
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
        active
          ? 'bg-[#162e1a] text-white border-[#162e1a] shadow-xs'
          : 'bg-white text-[#334d37] border-[#d4e2d1] hover:border-[#86c78e] hover:bg-[#f4f7f2]'
      }`}
    >
      <span>{label}</span>
      <span
        className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
          active ? 'bg-[#3d7a48] text-white' : 'bg-[#ecf1e8] text-[#58755c]'
        }`}
      >
        {count}
      </span>
    </motion.button>
  );
}
