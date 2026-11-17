'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  X,
  CheckSquare,
  Square,
  Info,
  GitCompare,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { resources, Resource } from '@/data/resources';

const pricingColors: Record<string, string> = {
  Free: 'text-[#1b381e] bg-[#ecf1e8] border border-[#c4dcbf]',
  Freemium: 'text-[#1a3e68] bg-[#e7f0fa] border border-[#c2daf5]',
  Paid: 'text-[#6b4712] bg-[#fcf3e6] border border-[#f0dac0]',
  'Built-in': 'text-[#4d286d] bg-[#f3edf8] border border-[#dfd0ec]',
};

const MAX_COMPARE = 4;
const MIN_COMPARE = 2;

// Student-friendly comparison presets
const PRESETS = [
  {
    name: 'Desktop Blockers',
    description: 'Cold Turkey vs Freedom vs LeechBlock NG',
    ids: ['cold-turkey', 'freedom', 'leechblock-ng'],
  },
  {
    name: 'Phone Screen-Time',
    description: 'ScreenZen vs Digital Wellbeing vs Minimalist Phone',
    ids: ['screenzen', 'digital-wellbeing', 'minimalist-phone'],
  },
  {
    name: 'Notifications & Sleep',
    description: 'iOS Focus vs Android Controls vs BuzzKill',
    ids: ['ios-focus', 'android-notification-controls', 'buzzkill'],
  },
  {
    name: 'Study Session Timers',
    description: 'Forest vs TickTick',
    ids: ['forest', 'ticktick'],
  },
];

interface CompareTableProps {
  selected: Resource[];
  onRemove: (id: string) => void;
}

function CompareTable({ selected, onRemove }: CompareTableProps) {
  const shouldReduceMotion = useReducedMotion();

  const rows: { label: string; icon: typeof Layers; render: (r: Resource) => React.ReactNode }[] = [
    {
      label: 'Category',
      icon: Layers,
      render: (r) => (
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ecf1e8] text-[#162e1a] border border-[#d4e2d1]">
          {r.category}
        </span>
      ),
    },
    {
      label: 'Core Purpose',
      icon: Sparkles,
      render: (r) => <p className="text-xs sm:text-sm text-[#4f6652] leading-relaxed">{r.summary}</p>,
    },
    {
      label: 'Supported Platforms',
      icon: Layers,
      render: (r) => (
        <div className="flex flex-wrap gap-1">
          {r.platforms.map((p) => (
            <span key={p} className="text-[11px] px-2 py-0.5 bg-[#ecf1e8] text-[#2b442f] rounded-md font-mono border border-[#d4e2d1]">
              {p}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: 'Pricing Details',
      icon: DollarSign,
      render: (r) => (
        <div>
          <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-semibold mb-1.5 ${pricingColors[r.pricingLabel] || ''}`}>
            {r.pricingLabel}
          </span>
          <p className="text-xs text-[#58755c] leading-snug">{r.pricingNote}</p>
        </div>
      ),
    },
    {
      label: 'Key Features',
      icon: Sparkles,
      render: (r) => (
        <ul className="space-y-1.5">
          {r.keyFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-[#4f6652]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d7a48] mt-1.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Privacy Information',
      icon: Shield,
      render: (r) => (
        <div className="text-xs text-[#4f6652] leading-relaxed space-y-1">
          <p>{r.privacyNote}</p>
          {r.privacyNote.includes('Not verified') && (
            <span className="inline-flex items-center gap-1 text-[11px] text-amber-800 font-semibold">
              <AlertTriangle className="w-3 h-3 text-amber-600" /> Not verified on official page
            </span>
          )}
        </div>
      ),
    },
    {
      label: 'Known Limitations',
      icon: AlertTriangle,
      render: (r) => (
        <ul className="space-y-1">
          {r.limitations.map((l) => (
            <li key={l} className="flex items-start gap-1.5 text-xs text-[#58755c]">
              <span className="text-[#8b3232] font-bold mt-0.5">•</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Best For',
      icon: Sparkles,
      render: (r) => (
        <p className="text-xs sm:text-sm text-[#253f28] italic bg-[#f4f7f2] p-2.5 rounded-xl border border-[#dce9da]">
          "{r.bestFor}"
        </p>
      ),
    },
  ];

  return (
    <div className="relative overflow-x-auto rounded-3xl border border-[#d4e2d1] bg-white shadow-xs">
      <table className="w-full text-sm border-collapse min-w-[640px]">
        <thead>
          <tr className="bg-[#f4f7f2] border-b border-[#d4e2d1]">
            <th className="text-left px-5 py-4 font-bold text-[#58755c] text-xs uppercase tracking-wider w-44 sticky left-0 bg-[#f4f7f2] z-10 border-r border-[#d4e2d1]">
              Tool / Attribute
            </th>
            {selected.map((r) => (
              <th key={r.id} className="px-5 py-4 border-r border-[#d4e2d1] last:border-r-0 min-w-[240px] align-top">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-left">
                    <Link
                      href={`/resources/${r.slug}`}
                      className="font-bold text-[#162e1a] hover:text-[#3d7a48] transition-colors text-base tracking-tight block"
                    >
                      {r.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <Link
                        href={`/resources/${r.slug}`}
                        className="text-[11px] font-bold text-[#3d7a48] hover:underline flex items-center gap-0.5"
                      >
                        Details <ArrowRight className="w-2.5 h-2.5" />
                      </Link>
                      <span className="text-[#8ba38e]">·</span>
                      <a
                        href={r.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[11px] text-[#6e8a72] hover:text-[#162e1a] transition-colors font-medium"
                      >
                        Site <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemove(r.id)}
                    className="p-1 rounded-md text-[#6e8a72] hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                    title={`Remove ${r.name}`}
                    aria-label={`Remove ${r.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-b border-[#e2ede0] last:border-b-0 ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#fafcf9]'
              }`}
            >
              <td className="px-5 py-4 font-bold text-xs text-[#162e1a] uppercase tracking-wider align-top sticky left-0 bg-inherit z-10 border-r border-[#d4e2d1]">
                <div className="flex items-center gap-1.5">
                  <row.icon className="w-3.5 h-3.5 text-[#3d7a48]" />
                  <span>{row.label}</span>
                </div>
              </td>
              {selected.map((r) => (
                <td
                  key={r.id}
                  className="px-5 py-4 align-top border-r border-[#d4e2d1] last:border-r-0"
                >
                  {row.render(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['cold-turkey', 'leechblock-ng']);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  };

  const remove = (id: string) => setSelectedIds((prev) => prev.filter((x) => x !== id));
  const reset = () => setSelectedIds([]);
  const loadPreset = (ids: string[]) => setSelectedIds(ids);

  const selectedResources = selectedIds
    .map((id) => resources.find((r) => r.id === id))
    .filter(Boolean) as Resource[];

  const canCompare = selectedIds.length >= MIN_COMPARE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dce9da] border border-[#c4dcbf] rounded-full text-[#162e1a] text-xs font-bold mb-3">
          <GitCompare className="w-3.5 h-3.5 text-[#3d7a48]" />
          <span>Factual Side-by-Side Analysis</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#162e1a] tracking-tight mb-3">
          Compare Digital Wellness Tools
        </h1>
        <p className="text-[#4f6652] text-sm sm:text-base max-w-2xl leading-relaxed">
          Select between 2 and 4 tools to compare their purpose, supported platforms, pricing models, verified privacy information, and limitations. No artificial ratings, scores, or rankings.
        </p>
      </div>

      {/* Quick Comparison Presets */}
      <div className="mb-8">
        <p className="text-xs font-bold text-[#58755c] uppercase tracking-wider mb-3">
          Suggested Comparisons for Students
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => loadPreset(preset.ids)}
              className="text-left p-4 bg-white hover:bg-[#f4f7f2] border border-[#d4e2d1] hover:border-[#86c78e] rounded-2xl transition-all cursor-pointer group shadow-2xs"
            >
              <p className="text-xs font-bold text-[#162e1a] group-hover:text-[#3d7a48]">
                {preset.name}
              </p>
              <p className="text-[11px] text-[#58755c] mt-1 line-clamp-1">{preset.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selection Control Panel */}
      <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#e2ede0]">
          <div>
            <span className="text-sm font-bold text-[#162e1a]">
              Select Resources ({selectedIds.length}/{MAX_COMPARE})
            </span>
            <span className="text-xs text-[#58755c] ml-2">
              (Choose between {MIN_COMPARE} and {MAX_COMPARE} to compare)
            </span>
          </div>

          {selectedIds.length > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#58755c] hover:text-[#162e1a] self-start sm:self-auto cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset selections
            </button>
          )}
        </div>

        {/* Selected chips strip */}
        {selectedIds.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-5 pb-4 border-b border-[#e2ede0]">
            <span className="text-xs text-[#6e8a72] font-semibold mr-1">Selected:</span>
            <AnimatePresence>
              {selectedResources.map((r) => (
                <motion.span
                  key={r.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ecf1e8] text-[#162e1a] border border-[#c4dcbf] rounded-full text-xs font-bold"
                >
                  {r.name}
                  <button onClick={() => remove(r.id)} aria-label={`Deselect ${r.name}`} className="cursor-pointer">
                    <X className="w-3.5 h-3.5 hover:text-black" />
                  </button>
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Resource Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {resources.map((r) => {
            const isSelected = selectedIds.includes(r.id);
            const isDisabled = !isSelected && selectedIds.length >= MAX_COMPARE;
            return (
              <button
                key={r.id}
                onClick={() => toggle(r.id)}
                disabled={isDisabled}
                className={`flex items-start gap-2.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#3d7a48] bg-[#ecf1e8] text-[#162e1a] shadow-2xs font-semibold'
                    : isDisabled
                    ? 'border-[#e2ede0] bg-[#f8faf7] text-[#a4c0a8] cursor-not-allowed opacity-60'
                    : 'border-[#d4e2d1] bg-white hover:border-[#86c78e] hover:bg-[#f4f7f2] text-[#334d37]'
                }`}
              >
                {isSelected ? (
                  <CheckSquare className="w-4 h-4 text-[#3d7a48] shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-[#8ba38e] shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate leading-tight">{r.name}</p>
                  <p className="text-[10px] text-[#6e8a72] truncate mt-0.5">{r.category}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Table or Empty Prompt */}
      {canCompare ? (
        <div>
          <CompareTable selected={selectedResources} onRemove={remove} />
          <p className="text-xs text-[#6e8a72] mt-4 text-center">
            Tip: You can click on any tool's name to view its complete individual research page.
          </p>
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-dashed border-[#c4dcbf] rounded-3xl">
          <GitCompare className="w-12 h-12 text-[#8ba38e] mx-auto mb-3" />
          <h3 className="text-[#162e1a] font-bold text-base mb-1">
            Select at least 2 resources to compare
          </h3>
          <p className="text-[#58755c] text-xs sm:text-sm max-w-sm mx-auto mb-5">
            Pick tools above or click one of our student presets to populate the comparison matrix.
          </p>
          <button
            onClick={() => loadPreset(['cold-turkey', 'freedom', 'leechblock-ng'])}
            className="px-5 py-2.5 bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
          >
            Load Desktop Blockers Comparison
          </button>
        </div>
      )}

      {/* Bottom small text disclaimer */}
      <p className="text-center text-[11px] text-[#6e8a72] max-w-2xl mx-auto pt-8 leading-relaxed">
        * Data reflected from independent research on 15 November 2026. Items not confirmable from official developer sources are explicitly labeled as <span className="font-semibold">Not verified</span>. Always verify pricing directly on official store checkout pages.
      </p>
    </div>
  );
}
