import { notFound } from 'next/navigation';
import Link from 'next/link';
import { resources, getResourceBySlug, RESEARCH_NOTICE } from '@/data/resources';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  DollarSign,
  Shield,
  XCircle,
  Star,
  GitCompare,
  Calendar,
  Sparkles,
} from 'lucide-react';

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: 'Resource not found – Canopy' };
  return {
    title: `${resource.name} – Canopy Digital Wellness`,
    description: resource.summary,
  };
}

const pricingColors: Record<string, string> = {
  Free: 'bg-[#ecf1e8] text-[#1b381e] border-[#c4dcbf]',
  Freemium: 'bg-[#e7f0fa] text-[#1a3e68] border-[#c2daf5]',
  Paid: 'bg-[#fcf3e6] text-[#6b4712] border-[#f0dac0]',
  'Built-in': 'bg-[#f3edf8] text-[#4d286d] border-[#dfd0ec]',
};

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) notFound();

  const related = resources
    .filter((r) => r.category === resource.category && r.slug !== resource.slug)
    .slice(0, 3);

  const hasUnverified =
    resource.privacyNote.includes('Not verified') ||
    resource.pricingNote.includes('Not verified') ||
    resource.docsUrl === 'Not verified';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#58755c] mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#162e1a] transition-colors font-medium">
          Home
        </Link>
        <span className="text-[#8ba38e]">/</span>
        <Link href="/resources" className="hover:text-[#162e1a] transition-colors font-medium">
          Resources
        </Link>
        <span className="text-[#8ba38e]">/</span>
        <span className="text-[#162e1a] font-bold truncate">{resource.name}</span>
      </nav>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column: Comprehensive Research Content (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Title Header Box */}
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-xs px-3 py-1 rounded-full border font-semibold bg-[#ecf1e8] text-[#162e1a] border-[#c4dcbf]">
                {resource.category}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full border font-semibold ${
                  pricingColors[resource.pricingLabel] ?? 'bg-[#ecf1e8] text-[#162e1a] border-[#c4dcbf]'
                }`}
              >
                {resource.pricingLabel}
              </span>
              {hasUnverified && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Contains unverified details
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#162e1a] tracking-tight mb-4">
              {resource.name}
            </h1>

            <p className="text-base sm:text-lg text-[#4f6652] leading-relaxed font-normal mb-6">
              {resource.description}
            </p>

            {/* Best For Highlight */}
            <div className="bg-[#f4f7f2] border border-[#c8dcc5] rounded-2xl p-5 flex gap-3.5">
              <Star className="w-5 h-5 text-[#3d7a48] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#162e1a] mb-1">
                  Best For College Students
                </p>
                <p className="text-xs sm:text-sm text-[#253f28] font-medium leading-relaxed italic">
                  "{resource.bestFor}"
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e2ede0]">
              <CheckCircle2 className="w-5 h-5 text-[#3d7a48]" />
              <h2 className="text-lg font-bold text-[#162e1a] tracking-tight">Key Verified Features</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {resource.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334d37]">
                  <span className="w-2 h-2 rounded-full bg-[#3d7a48] mt-1.5 shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Free Tier Limits */}
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#e2ede0]">
              <DollarSign className="w-5 h-5 text-[#3d7a48]" />
              <h2 className="text-lg font-bold text-[#162e1a] tracking-tight">Pricing Model & Free Tier Caps</h2>
            </div>
            <div className="mb-3">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${pricingColors[resource.pricingLabel]}`}>
                Pricing: {resource.pricingLabel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4f6652] leading-relaxed">
              {resource.pricingNote}
            </p>
          </div>

          {/* Privacy & Data Handling */}
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#e2ede0]">
              <Shield className="w-5 h-5 text-[#3d7a48]" />
              <h2 className="text-lg font-bold text-[#162e1a] tracking-tight">Privacy & Data Handling</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4f6652] leading-relaxed mb-3">
              {resource.privacyNote}
            </p>
            <p className="text-[11px] text-[#7d9b82] leading-normal italic">
              Note: App Store privacy labels and Google Play data safety reports are declared by developers and are not independently verified by Apple or Google.
            </p>
          </div>

          {/* Limitations & Drawbacks */}
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#e2ede0]">
              <XCircle className="w-5 h-5 text-[#8b3232]" />
              <h2 className="text-lg font-bold text-[#162e1a] tracking-tight">Known Limitations</h2>
            </div>
            <ul className="space-y-3">
              {resource.limitations.map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#58755c]">
                  <span className="text-[#8b3232] font-bold mt-0.5">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Sticky Sidebar Quick Facts (1 col) */}
        <div className="space-y-6">
          <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-7 shadow-xs lg:sticky lg:top-24 space-y-6">
            <div>
              <p className="text-[11px] font-bold text-[#6e8a72] uppercase tracking-wider mb-3">
                Resource At A Glance
              </p>

              {/* Primary Website CTA */}
              <a
                href={resource.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs font-bold rounded-full transition-all shadow-xs mb-2.5"
              >
                Visit Official Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Documentation CTA if verified */}
              {resource.docsUrl !== 'Not verified' ? (
                <a
                  href={resource.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ecf1e8] hover:bg-[#dce9da] text-[#162e1a] text-xs font-semibold rounded-full border border-[#c4dcbf] transition-colors"
                >
                  Official Documentation
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <p className="text-[11px] text-[#7d9b82] text-center py-1">
                  Official docs URL: Not verified during research
                </p>
              )}
            </div>

            {/* Quick Meta List */}
            <div className="space-y-3 pt-4 border-t border-[#e2ede0] text-xs">
              <div>
                <span className="text-[#6e8a72] block mb-1 font-semibold">Supported Platforms:</span>
                <div className="flex flex-wrap gap-1.5">
                  {resource.platforms.map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-[#ecf1e8] text-[#162e1a] rounded-md font-mono text-[11px] border border-[#d4e2d1]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[#6e8a72] block mb-0.5 font-semibold">Pricing Model:</span>
                <span className="font-bold text-[#162e1a]">{resource.pricingLabel}</span>
              </div>

              <div>
                <span className="text-[#6e8a72] block mb-0.5 font-semibold">Category:</span>
                <span className="font-bold text-[#162e1a]">{resource.category}</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#6e8a72] pt-2 border-t border-[#e2ede0]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Researched: {resource.checkedOn}</span>
              </div>
            </div>

            {/* Compare Tool Action */}
            <div className="pt-4 border-t border-[#e2ede0]">
              <Link
                href="/compare"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#162e1a] hover:bg-[#234728] text-white text-xs font-bold rounded-full transition-all shadow-xs"
              >
                <GitCompare className="w-3.5 h-3.5 text-[#86c78e]" />
                Compare With Other Tools
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources Grid */}
      {related.length > 0 && (
        <div className="border-t border-[#d4e2d1] pt-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#162e1a] tracking-tight">
                Other Tools in {resource.category}
              </h2>
              <p className="text-xs text-[#58755c] mt-0.5">
                Compare with alternative solutions for this category
              </p>
            </div>
            <Link
              href="/resources"
              className="text-xs font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
            >
              View directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/resources/${r.slug}`}
                className="group bg-white border border-[#d4e2d1] rounded-2xl p-5 hover:border-[#86c78e] hover:shadow-xs transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-bold text-sm text-[#162e1a] group-hover:text-[#3d7a48] transition-colors">
                    {r.name}
                  </p>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#ecf1e8] text-[#162e1a] rounded-full border border-[#d4e2d1]">
                    {r.pricingLabel}
                  </span>
                </div>
                <p className="text-xs text-[#58755c] line-clamp-2 leading-relaxed">
                  {r.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="mt-10 pt-6 border-t border-[#d4e2d1] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all resources
        </Link>
        <p className="text-[11px] text-[#6e8a72] text-center sm:text-right leading-relaxed max-w-xl">
          * {RESEARCH_NOTICE}
        </p>
      </div>
    </div>
  );
}
