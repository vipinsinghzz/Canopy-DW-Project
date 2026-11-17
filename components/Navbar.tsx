'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Explore Resources', href: '/resources' },
  { label: 'Compare Tools', href: '/compare' },
  { label: 'Setup Guides', href: '/guides' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={`z-50 transition-all duration-300 ${
        isHome
          ? `fixed top-0 left-0 right-0 ${
              scrolled
                ? 'bg-[#ecf1e8]/95 backdrop-blur-md border-b border-[#d4e2d1]/80 py-3 shadow-xs'
                : 'bg-transparent py-5 sm:py-6'
            }`
          : 'sticky top-0 bg-[#ecf1e8]/95 backdrop-blur-md border-b border-[#d4e2d1]/80 py-3.5 shadow-xs'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d7a48] rounded-full p-1"
          >
            <div className="w-9 h-9 rounded-full bg-[#162e1a] text-[#86c78e] flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 border border-[#2b5431]">
              <Leaf className="w-4 h-4 fill-[#86c78e]" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-normal tracking-tight leading-none transition-colors ${
                  !scrolled && isHome
                    ? 'text-white drop-shadow-xs'
                    : 'text-[#162e1a]'
                }`}
              >
                Canopy
              </span>
              <span
                className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
                  !scrolled && isHome ? 'text-emerald-200/90' : 'text-[#58755c]'
                }`}
              >
                Digital Wellness Hub
              </span>
            </div>
          </Link>

          {/* Floating Pill Desktop Nav (Ref Screenshot 1 aesthetic) */}
          <nav
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-200 shadow-2xs ${
              !scrolled && isHome
                ? 'bg-black/40 backdrop-blur-md border-white/20 text-white/90'
                : 'bg-white/85 backdrop-blur-md border-[#d4e2d1] text-[#2d4d32]'
            }`}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                    isActive
                      ? !scrolled && isHome
                        ? 'text-white'
                        : 'text-[#162e1a]'
                      : !scrolled && isHome
                      ? 'text-white/70 hover:text-white hover:bg-white/10'
                      : 'text-[#4f6652] hover:text-[#162e1a] hover:bg-[#e4ede1]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className={`absolute inset-0 rounded-full -z-10 shadow-2xs ${
                        !scrolled && isHome
                          ? 'bg-white/25 border border-white/30'
                          : 'bg-[#dce9da] border border-[#c4dcbf]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/resources"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm ${
                !scrolled && isHome
                  ? 'bg-white text-[#162e1a] hover:bg-[#dce9da]'
                  : 'bg-[#162e1a] text-white hover:bg-[#234728]'
              }`}
            >
              Explore 12 Tools
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-full border transition-colors ${
                !scrolled && isHome
                  ? 'bg-black/30 border-white/20 text-white'
                  : 'bg-white border-[#d4e2d1] text-[#162e1a]'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl border border-[#d4e2d1] p-4 shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                        isActive
                          ? 'bg-[#dce9da] text-[#162e1a]'
                          : 'text-[#4f6652] hover:bg-[#f4f7f2] hover:text-[#162e1a]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-[#d4e2d1]">
                  <Link
                    href="/resources"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#162e1a] text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    Explore All 12 Tools
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
