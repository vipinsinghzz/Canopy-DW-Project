'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Smartphone,
  Globe,
  Clock,
  ArrowRight,
  AlertTriangle,
  Info,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { RESEARCH_NOTICE } from '@/data/resources';

interface Section {
  heading: string;
  steps: string[];
}

interface Guide {
  id: string;
  icon: typeof Smartphone;
  platform: string;
  title: string;
  intro: string;
  sections: Section[];
  resourceSlug: string;
  color: string;
  note: string;
}

const guides: Guide[] = [
  {
    id: 'digital-wellbeing-android',
    icon: Smartphone,
    platform: 'Android',
    title: 'Configure Digital Wellbeing on Android',
    intro:
      "Digital Wellbeing is built into most Android phones running Android 9 and later, though availability varies by manufacturer. These steps reflect the standard Android interface from Google; your device's menus may look slightly different.",
    sections: [
      {
        heading: 'Find Digital Wellbeing in Settings',
        steps: [
          'Open the Settings app on your Android phone.',
          'Scroll down and tap "Digital Wellbeing & parental controls". If you do not see it, search for "Digital Wellbeing" in the Settings search bar.',
          'If the icon is not in your app drawer, tap "Show icon in the app list" inside Digital Wellbeing settings.',
        ],
      },
      {
        heading: 'Check your screen-time usage',
        steps: [
          'At the top of the Digital Wellbeing screen you will see a daily dashboard showing time spent on each app today.',
          'Tap the chart to see a full breakdown by app, including phone unlocks and notification count.',
          'Tap any individual app name to view its daily or hourly usage history.',
        ],
      },
      {
        heading: 'Set app timers',
        steps: [
          'From the dashboard, tap the hourglass icon next to any app, or tap the app name and then tap "Set timer".',
          'Choose a daily time limit (e.g. 30 minutes for social media apps).',
          'When the timer runs out, the app icon dims and the app pauses until midnight.',
          'Note: You can manually remove an app timer at any time — timers are designed as gentle friction, not unbreakable locks.',
        ],
      },
      {
        heading: 'Configure Focus mode',
        steps: [
          'From the Digital Wellbeing screen, tap "Focus mode".',
          'Select distracting apps you want to pause during study hours (such as games, shopping or social media).',
          'Tap "Turn on now" to start Focus mode immediately, or tap "Set a schedule" to activate it automatically during class or study blocks.',
          'During Focus mode, selected apps are paused and their notifications are hidden.',
          'You can tap "Take a break" from the active notification to pause Focus temporarily (e.g. 5 or 15 minutes).',
        ],
      },
      {
        heading: 'Configure Bedtime mode',
        steps: [
          'From the Digital Wellbeing screen, tap "Bedtime mode".',
          'Set your bedtime schedule by choosing your target sleep and wake times.',
          'Enable "Grayscale" to turn your screen black and white at bedtime, reducing visual dopamine and screen temptation.',
          'Enable "Do Not Disturb" during bedtime to silence calls and notifications overnight.',
          'Tap "Turn on now" to preview the mode, or keep the automatic schedule active.',
        ],
      },
    ],
    resourceSlug: 'digital-wellbeing',
    color: 'emerald',
    note: 'Some steps differ by manufacturer (Samsung OneUI, Xiaomi MIUI, Google Pixel) and Android version. Google reported in September 2026 that it may redesign Digital Wellbeing, so screens may change over time.',
  },
  {
    id: 'cold-turkey-setup',
    icon: Globe,
    platform: 'Windows · macOS',
    title: 'Block distracting websites using Cold Turkey Blocker',
    intro:
      'Cold Turkey Blocker is a desktop application for Windows and macOS. The free version blocks websites and can display a custom message in place of blocked sites. The Pro version (one-time purchase; exact price not verified — see getcoldturkey.com/pricing) adds application blocking, scheduled blocks, and stronger locking features.',
    sections: [
      {
        heading: 'Download and install',
        steps: [
          'Go to getcoldturkey.com and download the installer for Windows or macOS.',
          'Run the installer and follow the setup prompts (administrator rights may be required).',
          'Install the official browser extension for Chrome or Firefox from the official browser extension store to ensure web requests are intercepted.',
          'On macOS: allow the application in System Settings > Privacy & Security > Accessibility and Full Disk Access as requested by the installer.',
        ],
      },
      {
        heading: 'Create your first website block',
        steps: [
          'Launch Cold Turkey Blocker on your computer.',
          'In the Blocks tab, click "Add Block" and enter a name (e.g. "Deep Study Session").',
          'Under the Websites tab within your block, add URLs you want blocked (e.g. reddit.com, instagram.com, youtube.com).',
          'Use wildcards where needed — e.g. *.reddit.com blocks all Reddit subdomains.',
          'Optionally, add exceptions if you need specific academic subpages on an otherwise blocked domain.',
        ],
      },
      {
        heading: 'Start a timed block or set a schedule',
        steps: [
          'To start immediately: click the timer icon or toggle next to your block and enter your session duration (e.g. 45 minutes).',
          'To schedule recurring blocks (Pro feature): open the Schedule tab within your block and set specific weekly class and study hours.',
          'Once a block starts, it cannot be undone early if a strict lock is applied.',
          'The free version supports manual timed blocks; recurring schedules require Pro.',
        ],
      },
      {
        heading: 'Free vs Pro features',
        steps: [
          'Free: website blocking, exceptions, manual timed blocks, statistics, and a 7-day Pro trial.',
          'Pro (one-time purchase): application blocking (block desktop apps like Steam or Discord), scheduled blocks, locked mode, breaks & allowances, user limits.',
          'Students can request a 20% discount through the official support page.',
          'Blocker Pro includes lifetime updates and covers all computers you personally use with a 30-day refund guarantee.',
        ],
      },
      {
        heading: 'Understanding strict locking',
        steps: [
          'Cold Turkey is intentionally designed so locks are difficult or impossible to bypass. This is its key feature for self-control.',
          'If you start a timed block, you cannot remove it until the timer ends — even rebooting or attempting to uninstall on Windows will not disable active blocks.',
          'On macOS, uninstalling during an active block does not remove firewall blocks; refer to getcoldturkey.com/support/user-guide/ for recovery steps.',
          'Start with short block durations (20–40 minutes) when testing to avoid accidentally locking yourself out of important tools.',
          'Always verify your allowlist exceptions before enabling strict locked sessions.',
        ],
      },
    ],
    resourceSlug: 'cold-turkey',
    color: 'emerald',
    note: 'Free version ₹0. Pro is billed in USD via Paddle with no official INR price (reseller lists ₹2,499, unverified). Student 20% discount available. Researched on 15 November 2026.',
  },
  {
    id: 'forest-study-sessions',
    icon: Clock,
    platform: 'iOS · Android · Browser',
    title: 'Use Forest for focused study sessions',
    intro:
      'Forest is a focus timer app available on iPhone and iPad (App Store) and with browser extensions for Chrome and Firefox. Android is listed on third-party sources but was not directly verified during research. The app is free with a Plus subscription available; pricing varies by country and store listing.',
    sections: [
      {
        heading: 'Install the app',
        steps: [
          'On iPhone or iPad: open the App Store, search for "Forest — Focus for Productivity" and install. Verify the developer name matches "SEEKRTECH CO., LTD".',
          'For desktop browser extensions: visit forestapp.cc to find the verified Chrome Web Store or Firefox Add-on link.',
          'Android: search Google Play and verify developer details before downloading as similar apps exist.',
        ],
      },
      {
        heading: 'Start a focus session',
        steps: [
          'Open Forest. The home screen presents a central timer and a virtual seed.',
          'Rotate the dial or set the timer for your session (25 minutes is recommended for the Pomodoro technique).',
          'Tap "Plant" to begin. The virtual tree will start growing.',
          'Place your phone face-down or out of reach.',
          'Stay off your phone: if you leave Forest to open an unapproved app, your tree will wither and die.',
          'When the timer successfully finishes, a healthy tree is planted into your virtual forest.',
        ],
      },
      {
        heading: 'Understand the virtual tree mechanic',
        steps: [
          'Core rule: Your tree grows while you stay in the app; navigating away kills the tree.',
          'Withered trees remain in your forest view as a visual record of broken focus sessions.',
          'Consistent focus sessions gradually build a lush virtual forest representing your study hours.',
          'Allow Lists (iOS 16+): Configure allowed apps (like Spotify or calculator) in Forest settings so checking them does not kill your tree.',
          'Note: Forest is a motivational nudge based on psychological commitment, not an unbreakable operating system lock.',
        ],
      },
      {
        heading: 'Use tags and statistics',
        steps: [
          'Tap the tag icon before planting to label your session (e.g. "Biology", "Essay Writing", "Exam Revision").',
          'Open the Forest view or Stats tab to see your total focused hours by day, week, month, and year.',
          'Filter stats by tag to analyze how much time you genuinely dedicate to each academic subject.',
          'On iOS: enable Apple Health sync to record focus sessions as Mindful Minutes.',
        ],
      },
      {
        heading: 'Build a simple study routine',
        steps: [
          'Choose a dedicated study block (e.g. 7:00 PM – 9:00 PM) and commit to planting a tree at the start.',
          'Use 25-minute study intervals paired with 5-minute break intervals.',
          'Review your forest at the end of every week to identify productive hours and common distraction days.',
          'Set a weekly tree target (e.g. 20 trees) for visual motivation.',
          'Combine Forest with desktop site blockers (like LeechBlock NG or Cold Turkey) for distraction-free multi-device studying.',
        ],
      },
    ],
    resourceSlug: 'forest',
    color: 'emerald',
    note: 'Forest is free with ads; optional Forest Plus subscription available. One-time Pro fee discontinued. Regional INR prices vary by store listing. Researched on 15 November 2026.',
  },
];

export default function GuidesPage() {
  const shouldReduceMotion = useReducedMotion();
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const toggleSection = (sectionKey: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const resetGuideProgress = (guideId: string) => {
    setCompletedSteps((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${guideId}-`)) {
          delete next[k];
        }
      });
      return next;
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dce9da] border border-[#c4dcbf] rounded-full text-[#162e1a] text-xs font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#3d7a48]" />
          <span>Interactive Student Walkthroughs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#162e1a] tracking-tight mb-3">
          Setup Guides
        </h1>
        <p className="text-[#4f6652] text-sm sm:text-base max-w-2xl leading-relaxed">
          Practical, step-by-step walkthroughs to configure your digital wellness setup. Check off steps as you complete them to track your progress.
        </p>
      </div>

      {/* Jump to Guide Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-2.5 bg-white rounded-2xl border border-[#d4e2d1] shadow-2xs">
        <span className="text-xs font-bold text-[#58755c] px-2 uppercase tracking-wider">
          Jump to:
        </span>
        {guides.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="text-xs font-semibold px-3.5 py-1.5 bg-[#ecf1e8] text-[#162e1a] hover:bg-[#dce9da] rounded-xl border border-[#c4dcbf] transition-all"
          >
            {g.platform}: {g.title.split(' ')[0]} {g.title.split(' ')[1]}
          </a>
        ))}
      </div>

      {/* Guides List */}
      <div className="space-y-12">
        {guides.map((guide) => {
          const Icon = guide.icon;

          // Calculate total and completed steps for this guide
          let totalStepsCount = 0;
          let completedStepsCount = 0;

          guide.sections.forEach((sec, sIdx) => {
            sec.steps.forEach((_, stepIdx) => {
              totalStepsCount++;
              const key = `${guide.id}-${sIdx}-${stepIdx}`;
              if (completedSteps[key]) completedStepsCount++;
            });
          });

          const progressPercent = Math.round((completedStepsCount / totalStepsCount) * 100);
          let stepCounter = 0;

          return (
            <div
              key={guide.id}
              id={guide.id}
              className="bg-white border border-[#d4e2d1] rounded-3xl overflow-hidden shadow-xs transition-all scroll-mt-24"
            >
              {/* Guide Header */}
              <div className="p-6 sm:p-8 border-b border-[#e2ede0] bg-[#fafcf9]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ecf1e8] text-[#162e1a] flex items-center justify-center shrink-0 border border-[#c4dcbf]">
                      <Icon className="w-6 h-6 text-[#3d7a48]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full border font-bold bg-[#ecf1e8] text-[#162e1a] border-[#c4dcbf]">
                          {guide.platform}
                        </span>
                        <span className="text-[11px] text-[#6e8a72] font-mono">
                          {guide.sections.length} sections
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight mb-2">
                        {guide.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#4f6652] leading-relaxed max-w-2xl">
                        {guide.intro}
                      </p>
                    </div>
                  </div>

                  {/* Reset button if any completed */}
                  {completedStepsCount > 0 && (
                    <button
                      onClick={() => resetGuideProgress(guide.id)}
                      className="inline-flex items-center gap-1 text-xs text-[#58755c] hover:text-[#162e1a] self-start sm:self-auto px-3 py-1.5 rounded-lg hover:bg-[#ecf1e8] transition-colors cursor-pointer shrink-0 font-medium"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset steps
                    </button>
                  )}
                </div>



                {/* Progress bar */}
                <div className="mt-6 pt-4 border-t border-[#e2ede0]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#162e1a]">
                      Walkthrough Progress: {completedStepsCount} of {totalStepsCount} steps completed
                    </span>
                    <span className="font-mono font-bold text-[#3d7a48]">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#ecf1e8] rounded-full h-2 overflow-hidden border border-[#d4e2d1]">
                    <motion.div
                      className="h-full bg-[#3d7a48] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Sections with Accordion */}
              <div className="p-6 sm:p-8 space-y-5">
                {guide.sections.map((section, sIdx) => {
                  const sectionKey = `${guide.id}-sec-${sIdx}`;
                  const isCollapsed = !!collapsedSections[sectionKey];

                  return (
                    <div
                      key={section.heading}
                      className="border border-[#d4e2d1] rounded-2xl overflow-hidden bg-white shadow-2xs"
                    >
                      {/* Section Accordion Trigger */}
                      <button
                        onClick={() => toggleSection(sectionKey)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-[#fafcf9] transition-colors text-left cursor-pointer"
                        aria-expanded={!isCollapsed}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-[#8ba38e]">
                            0{sIdx + 1}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-[#162e1a] tracking-tight">
                            {section.heading}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-[#6e8a72] font-medium">
                            {section.steps.length} steps
                          </span>
                          {isCollapsed ? (
                            <ChevronDown className="w-4 h-4 text-[#6e8a72]" />
                          ) : (
                            <ChevronUp className="w-4 h-4 text-[#6e8a72]" />
                          )}
                        </div>
                      </button>

                      {/* Section Content */}
                      <AnimatePresence initial={false}>
                        {!isCollapsed && (
                          <motion.div
                            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-[#e2ede0] p-4 sm:p-6 bg-[#fafcf9] space-y-3"
                          >
                            <ol className="space-y-3">
                              {section.steps.map((step, stepIdx) => {
                                stepCounter++;
                                const currentNumber = stepCounter;
                                const stepKey = `${guide.id}-${sIdx}-${stepIdx}`;
                                const isDone = !!completedSteps[stepKey];

                                return (
                                   <li
                                    key={stepKey}
                                    onClick={() => toggleStep(stepKey)}
                                    className={`flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer select-none ${
                                      isDone
                                        ? 'bg-[#ecf1e8] border border-[#c4dcbf]'
                                        : 'bg-white hover:bg-[#f4f7f2] border border-[#d4e2d1]'
                                    }`}
                                  >
                                    <button
                                      type="button"
                                      aria-label={`Mark step ${currentNumber} as completed`}
                                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border ${
                                        isDone
                                          ? 'bg-[#3d7a48] border-[#3d7a48] text-white'
                                          : 'border-[#c4dcbf] bg-white hover:border-[#3d7a48]'
                                      }`}
                                    >
                                      {isDone && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    </button>

                                    <div className="flex-1">
                                      <span
                                        className={`text-xs sm:text-sm leading-relaxed ${
                                          isDone
                                            ? 'text-[#6e8a72] line-through'
                                            : 'text-[#334d37]'
                                        }`}
                                      >
                                        <span className="font-bold text-[#162e1a] mr-1.5">
                                          {currentNumber}.
                                        </span>
                                        {step}
                                      </span>
                                    </div>
                                  </li>
                                );
                              })}
                            </ol>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Guide Caution / Verification Note */}
                {guide.note && (
                  <div className="flex gap-3 bg-[#fcf8e8] border border-[#ecd99f] rounded-2xl p-4 text-xs text-[#664d14] leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-[#9a731b] shrink-0 mt-0.5" />
                    <p>{guide.note}</p>
                  </div>
                )}

                {/* Footer Link to Tool Details */}
                <div className="pt-4 border-t border-[#e2ede0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[#6e8a72] font-medium">
                    Researched on 15 November 2026.
                  </span>
                  <Link
                    href={`/resources/${guide.resourceSlug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
                  >
                    View Complete {guide.title.split(' ')[0]} Resource Analysis
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Future Roadmap Note */}
      <div className="mt-12 text-center bg-white border border-dashed border-[#c4dcbf] rounded-3xl p-8 sm:p-12">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ecf1e8] rounded-2xl mb-3 text-[#3d7a48]">
          <BookOpen className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-[#162e1a] text-base mb-1.5">
          More Verified Guides Coming
        </h3>
        <p className="text-xs sm:text-sm text-[#58755c] max-w-md mx-auto leading-relaxed">
          We are researching verified step-by-step instructions for TickTick, Freedom, ScreenZen, iOS Sleep Focus, and LeechBlock NG.
        </p>
      </div>

      {/* Bottom small text disclaimer */}
      <p className="text-center text-[11px] text-[#6e8a72] max-w-2xl mx-auto pt-8 leading-relaxed">
        * {RESEARCH_NOTICE}
      </p>
    </div>
  );
}
