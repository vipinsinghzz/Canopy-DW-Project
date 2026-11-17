'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import ResourceCard from '@/components/ResourceCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { resources, Category, PricingLabel, RESEARCH_NOTICE } from '@/data/resources';
import { SlidersHorizontal, Package, Info, LayoutGrid, List, X, Sparkles } from 'lucide-react';
import Loader from '@/components/Loader';

function ResourcesContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category | null) ?? 'All';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(
    initialCategory as Category | 'All'
  );
  const [selectedPricing, setSelectedPricing] = useState<PricingLabel | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return resources.filter((r) => {
      const matchesSearch =
        q === '' ||
        r.name.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.platforms.some((p) => p.toLowerCase().includes(q)) ||
        r.keyFeatures.some((f) => f.toLowerCase().includes(q)) ||
        r.bestFor.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
      const matchesPricing = selectedPricing === 'All' || r.pricingLabel === selectedPricing;
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [search, selectedCategory, selectedPricing]);

  const hasFilters = search !== '' || selectedCategory !== 'All' || selectedPricing !== 'All';

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedPricing('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Banner & Header */}
      <div className="mb-8 bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
              <Sparkles className="w-3.5 h-3.5 text-[#3d7a48]" />
              Verified Student Directory
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#162e1a] tracking-tight mb-3">
              Digital Wellness Resources
            </h1>
            <p className="text-sm sm:text-base text-[#4f6652] leading-relaxed max-w-xl">
              Explore all {resources.length} researched tools to manage screen time, block distractions, and regain study focus. Filter by category, pricing, or search by specific feature.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholder
              id="IMG-14"
              title="Digital Wellness Resource Hub Directory Hero"
              src="/img-14.jpg"
              alt="Digital Wellness Resource Hub Directory Hero"
              aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
              dimensions="1400 × 600 • Banner"
              suggestedSubject="Serene study desk with open laptop showing calm interface, succulent plant, cup of tea, and morning sunlight"
              priorityBadge="Directory Banner"
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Panel */}
      <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e2ede0]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#3d7a48]" />
            <span className="text-sm font-bold text-[#162e1a]">Filter Directory</span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* View mode toggle */}
            <div className="inline-flex items-center p-1 bg-[#ecf1e8] rounded-xl border border-[#d4e2d1]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#162e1a] shadow-2xs'
                    : 'text-[#58755c] hover:text-[#162e1a]'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  viewMode === 'compact'
                    ? 'bg-white text-[#162e1a] shadow-2xs'
                    : 'text-[#58755c] hover:text-[#162e1a]'
                }`}
                title="Compact list view"
                aria-label="Compact list view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {hasFilters && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8b3232] hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by tool name, platform (Android, Mac), feature or keyword…"
        />

        {/* Categories & Pricing chips */}
        <FilterBar
          selectedCategory={selectedCategory}
          selectedPricing={selectedPricing}
          onCategoryChange={setSelectedCategory}
          onPricingChange={setSelectedPricing}
        />
      </div>

      {/* Active filters pill bar + results counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 text-xs text-[#58755c]">
          <span>Showing</span>
          <span className="font-bold text-[#162e1a] bg-white border border-[#d4e2d1] px-2.5 py-0.5 rounded-full font-mono">
            {filtered.length} of {resources.length}
          </span>
          <span>resources</span>
        </div>

        {hasFilters && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[#6e8a72] font-semibold">Active:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ecf1e8] text-[#162e1a] border border-[#c4dcbf] rounded-full font-medium">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} aria-label="Remove category filter" className="cursor-pointer">
                  <X className="w-3 h-3 hover:text-black" />
                </button>
              </span>
            )}
            {selectedPricing !== 'All' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#e7f0fa] text-[#1a3e68] border border-[#c2daf5] rounded-full font-medium">
                {selectedPricing}
                <button onClick={() => setSelectedPricing('All')} aria-label="Remove pricing filter" className="cursor-pointer">
                  <X className="w-3 h-3 hover:text-black" />
                </button>
              </span>
            )}
            {search && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white text-[#162e1a] border border-[#d4e2d1] rounded-full font-medium">
                "{search}"
                <button onClick={() => setSearch('')} aria-label="Clear search term" className="cursor-pointer">
                  <X className="w-3 h-3 hover:text-black" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Resource Cards with Motion */}
      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-3.5'
            }
          >
            {filtered.map((r) => (
              <ResourceCard key={r.id} resource={r} compact={viewMode === 'compact'} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 bg-white border border-dashed border-[#c4dcbf] rounded-3xl"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ecf1e8] rounded-2xl mb-4 text-[#3d7a48]">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-[#162e1a] font-bold text-base mb-1">
              No matching resources found
            </h3>
            <p className="text-[#58755c] text-xs sm:text-sm max-w-sm mx-auto mb-5 leading-relaxed">
              We couldn't find any resources matching your search and filter criteria. Try resetting or adjusting the filters.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
            >
              Reset all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unverified resources disclaimer at bottom with small text */}
      <div className="pt-10 pb-4 text-center border-t border-[#d4e2d1]/60 mt-12">
        <p className="text-[11px] text-[#6e8a72] max-w-2xl mx-auto leading-relaxed">
          * {RESEARCH_NOTICE}
        </p>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 w-full min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] px-4 py-20 flex items-center justify-center text-[#4f6652]">
          <Loader />
        </div>
      }
    >
      <ResourcesContent />
    </Suspense>
  );
}
