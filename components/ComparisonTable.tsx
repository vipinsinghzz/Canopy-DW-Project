import { Resource } from '@/data/resources';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ComparisonTableProps {
  resources: Resource[];
}

const pricingColors: Record<string, string> = {
  Free: 'text-[#1b381e] bg-[#ecf1e8] border border-[#c4dcbf]',
  Freemium: 'text-[#1a3e68] bg-[#e7f0fa] border border-[#c2daf5]',
  Paid: 'text-[#6b4712] bg-[#fcf3e6] border border-[#f0dac0]',
  'Built-in': 'text-[#4d286d] bg-[#f3edf8] border border-[#dfd0ec]',
};

export default function ComparisonTable({ resources }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-[#d4e2d1] bg-white shadow-xs">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f4f7f2] border-b border-[#d4e2d1]">
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[160px]">Resource</th>
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[200px]">Summary</th>
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[180px]">Platforms</th>
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[120px]">Pricing</th>
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[160px]">Privacy</th>
            <th className="text-left px-5 py-4 font-bold text-[#58755c] min-w-[180px]">Limitations</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, idx) => (
            <tr
              key={resource.id}
              className={`border-b border-[#e2ede0] hover:bg-[#fafcf9] transition-colors ${
                idx === resources.length - 1 ? 'border-0' : ''
              }`}
            >
              <td className="px-5 py-4 align-top">
                <div className="font-bold text-[#162e1a]">
                  <Link href={`/resources/${resource.slug}`} className="hover:text-[#3d7a48] transition-colors">
                    {resource.name}
                  </Link>
                </div>
                <div className="text-xs text-[#6e8a72] mt-0.5">{resource.category}</div>
                <a
                  href={resource.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#3d7a48] hover:text-[#162e1a] mt-1 transition-colors font-medium"
                >
                  Website <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </td>
              <td className="px-5 py-4 text-[#4f6652] text-xs leading-relaxed max-w-[220px] align-top">
                {resource.summary}
              </td>
              <td className="px-5 py-4 align-top">
                <div className="flex flex-wrap gap-1">
                  {resource.platforms.map((p) => (
                    <span key={p} className="text-xs px-2 py-0.5 bg-[#ecf1e8] text-[#2b442f] rounded-md font-mono border border-[#d4e2d1]">
                      {p}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-5 py-4 align-top">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                    pricingColors[resource.pricingLabel] ?? 'text-[#162e1a] bg-[#ecf1e8]'
                  }`}
                >
                  {resource.pricingLabel}
                </span>
                <div className="text-xs text-[#6e8a72] mt-1 leading-tight">{resource.pricingNote}</div>
              </td>
              <td className="px-5 py-4 text-xs text-[#4f6652] leading-relaxed max-w-[180px] align-top">
                {resource.privacyNote}
              </td>
              <td className="px-5 py-4 align-top">
                <ul className="space-y-1">
                  {resource.limitations.map((lim) => (
                    <li key={lim} className="text-xs text-[#58755c] flex gap-1.5">
                      <span className="text-[#8b3232] mt-0.5">•</span>
                      {lim}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
