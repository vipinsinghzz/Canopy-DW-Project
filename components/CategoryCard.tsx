'use client';

import { Target, Clock, Heart, BellOff, LucideIcon, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CategoryItem } from '@/data/categories';
import { resources } from '@/data/resources';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Clock,
  Heart,
  BellOff,
};

interface CategoryCardProps {
  category: CategoryItem;
  onClick?: () => void;
  variant?: 'forest' | 'light';
}

export default function CategoryCard({
  category,
  onClick,
  variant = 'forest',
}: CategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[category.icon] ?? Target;
  const toolCount = resources.filter((r) => r.category === category.name).length;

  if (variant === 'light') {
    return (
      <motion.button
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
        transition={{ duration: 0.15 }}
        onClick={onClick}
        className="w-full text-left bg-white border border-[#d4e2d1] rounded-2xl p-6 transition-all duration-200 cursor-pointer group flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#86c78e]"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#ecf1e8] text-[#162e1a] flex items-center justify-center border border-[#c4dcbf]">
              <Icon className="w-5 h-5 text-[#3d7a48]" />
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#ecf1e8] text-[#162e1a] border border-[#d4e2d1]">
              {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
            </span>
          </div>

          <h3 className="font-bold text-base text-[#162e1a] mb-2 group-hover:text-[#3d7a48] transition-colors">
            {category.name}
          </h3>

          <p className="text-xs text-[#526e56] leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-[#e2ede0] flex items-center justify-between text-xs font-semibold text-[#3d7a48]">
          <span>Explore Category</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.button>
    );
  }

  // Deep Forest Green Variant (matches Reference Screenshot 2 & 3)
  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="w-full text-left bg-[#162e1a] border border-[#2b5431] rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#86c78e]/60 relative overflow-hidden"
    >
      {/* Subtle interior glow on hover */}
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#3d7a48]/20 blur-2xl pointer-events-none group-hover:bg-[#86c78e]/20 transition-all" />

      <div>
        <div className="flex items-center justify-between mb-5">
          {/* White rounded pill icon as in screenshots */}
          <div className="w-12 h-12 rounded-2xl bg-white text-[#162e1a] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6 text-[#162e1a]" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#d1fad6] border border-white/10">
            {toolCount} {toolCount === 1 ? 'Tool' : 'Tools'}
          </span>
        </div>

        <h3 className="font-bold text-lg text-white mb-2 tracking-tight group-hover:text-[#a3e2ab] transition-colors">
          {category.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#b8d6bc] leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#a3e2ab] transition-colors">
        <span>Explore Category</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
      </div>
    </motion.button>
  );
}
