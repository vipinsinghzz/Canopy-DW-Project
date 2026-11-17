import Link from 'next/link';
import { Leaf, ExternalLink, Heart } from 'lucide-react';
import { CHECKED_ON } from '@/data/resources';

const footerNav = {
  Navigation: [
    { label: 'Home', href: '/' },
    { label: 'Explore Resources', href: '/resources' },
    { label: 'Compare Tools', href: '/compare' },
    { label: 'Setup Guides', href: '/guides' },
    { label: 'About Canopy', href: '/about' },
  ],
  Categories: [
    { label: 'Focus & Productivity', href: '/resources?category=Focus+%26+Productivity' },
    { label: 'Screen-Time Management', href: '/resources?category=Screen-Time+Management' },
    { label: 'Mental Wellness', href: '/resources?category=Mental+Wellness' },
    { label: 'Notifications & Sleep', href: '/resources?category=Notifications+%26+Sleep' },
  ],
  'Student Guides': [
    { label: 'Android Digital Wellbeing', href: '/guides#digital-wellbeing-android' },
    { label: 'Cold Turkey Website Blocking', href: '/guides#cold-turkey-setup' },
    { label: 'Forest Study Sessions', href: '/guides#forest-study-sessions' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0e2112] text-[#a5c4a9] border-t border-[#1d3b22] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1b3d20] border border-[#2e5936] flex items-center justify-center text-[#86c78e] shadow-xs">
                <Leaf className="w-4 h-4 fill-[#86c78e]" />
              </div>
              <span className="text-white font-serif text-xl tracking-tight">Canopy</span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-[#b8d6bc] font-normal">
              An independent digital wellness resource hub for college students. Curating, explaining, and comparing existing tools to help you manage screen time, mute distractions, and protect deep focus.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-[#86c78e] bg-[#142918] px-3 py-1 rounded-full border border-[#2b5431]">
                Research checked: {CHECKED_ON}
              </span>
            </div>

            <p className="text-[11px] text-[#789d7d] leading-relaxed max-w-sm">
              Not affiliated with any featured application. All trademarks belong to their respective owners.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section} className="space-y-3">
              <p className="text-white text-xs font-bold uppercase tracking-wider">
                {section}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#a5c4a9] hover:text-white transition-colors duration-150 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1d3b22] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#789d7d]">
          <p>© {new Date().getFullYear()} Canopy. Built for college students.</p>
          <p className="flex items-center gap-1 text-[#86c78e]">
            Always verify pricing and privacy details directly with official sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
