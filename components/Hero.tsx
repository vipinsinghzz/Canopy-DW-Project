'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  GitCompare,
  Compass,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden shadow-2xl">
      {/* Full-bleed Background Image: User Uploaded Botanical Silhouette */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top_18%] transition-transform duration-1000 scale-[1.01]"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />


      {/* Cinematic Gradient Vignette: Deep Forest overlays for high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a180d]/95 via-[#0e2213]/80 to-transparent sm:to-[#0a180d]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a180d]/90 via-transparent to-[#0a180d]/50" />

      {/* Center Main Hero Content spanning full width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-20 sm:pb-24 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3d7a48]/40 backdrop-blur-md border border-[#86c78e]/40 text-[#c2eac6] text-xs font-semibold tracking-wide mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#86c78e]" />
            <span>Independent Digital Wellness Hub For College Students</span>
          </motion.div>

          {/* Main Title - Impactful & Editorial */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-md"
          >
            Take control of your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e2ab] via-[#d1fad6] to-white">
              digital life.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-emerald-100/90 leading-relaxed font-normal mb-10 max-w-2xl drop-shadow-xs"
          >
            A curated, independent directory helping college students discover, understand, and compare existing digital wellness tools — from gentle mindful pauses to strict desktop lockers.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3d7a48] hover:bg-[#478a53] active:bg-[#32643c] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Explore 12 Tools
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/25 text-white text-sm font-semibold transition-all duration-200 hover:border-white/40"
            >
              <GitCompare className="w-4 h-4 text-[#a3e2ab]" />
              Compare Alternatives
            </Link>

            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-emerald-200 hover:text-white transition-colors"
            >
              <Compass className="w-4 h-4" />
              Setup Guides
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
