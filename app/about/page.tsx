import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { Leaf, Users, Target, Heart, ArrowRight, AlertTriangle, Info, CheckCircle2, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { RESEARCH_NOTICE, CHECKED_ON } from '@/data/resources';

const values = [
  {
    icon: Target,
    title: 'Research-Based, Not Promotional',
    description:
      'Every resource in Canopy is evaluated from official developer documentation, store listings, and verified user guides. We accept zero promotional sponsorships, paid placement, or affiliate fees.',
  },
  {
    icon: Heart,
    title: 'Honest About Unverified Information',
    description:
      'Where a pricing tier, refund policy, or privacy claim could not be confirmed from official pages, it is labeled as "Not verified" rather than filled with estimates or marketing claims.',
  },
  {
    icon: Users,
    title: 'Designed Around Real College Constraints',
    description:
      'Built specifically for college life: tight student budgets, shared study environments, device compatibility between phones and campus laptops, and exam pressure.',
  },
];

const faqs = [
  {
    q: 'Is Canopy a new app or browser extension?',
    a: 'No. Canopy is not a productivity tool or distraction blocker. It is a curated, centralized resource hub that catalogues, explains, and compares the existing digital wellness tools already available.',
  },
  {
    q: 'Do you charge students to use Canopy?',
    a: 'No. Canopy is completely free, open-access, and requires no account registration to view resources, compare tools, or follow setup guides.',
  },
  {
    q: 'Why are some features marked as "Not verified"?',
    a: 'We prioritize accuracy over completeness. When developer documentation is behind an automated paywall, missing, or contradictory across regional app stores, we explicitly declare it unverified so you can double-check before purchasing.',
  },
  {
    q: 'Can mental wellness apps replace professional therapy?',
    a: 'Absolutely not. Tools like Finch are habit-building self-care apps, not clinical treatments or medical interventions. If you are experiencing serious mental health distress, please contact your university counseling service or medical professional.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Hero Badge + Title Container */}
      <div className="text-center mb-12 bg-white border border-[#d4e2d1] rounded-3xl p-8 sm:p-12 shadow-xs">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#162e1a] text-[#86c78e] mb-4 shadow-xs border border-[#2e5936]">
          <Leaf className="w-7 h-7 fill-[#86c78e]" />
        </div>
        <div className="block mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#dce9da] text-[#162e1a] text-xs font-bold rounded-full border border-[#c4dcbf]">
            <Sparkles className="w-3.5 h-3.5 text-[#3d7a48]" />
            Independent Student Project
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#162e1a] tracking-tight mb-4">
          About Canopy
        </h1>
        <p className="text-[#4f6652] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          A centralized digital wellness hub built to help college students make informed, intentional decisions about their relationship with technology.
        </p>

        {/* Editorial Story Image IMG-19 */}
        <div className="max-w-3xl mx-auto">
          <ImagePlaceholder
            id="IMG-19"
            title="College Campus Courtyard & Mindful Study"
            src="/img-19.jpg"
            alt="College Campus Courtyard & Mindful Study"
            aspectRatio="aspect-[16/9]"
            dimensions="1200 × 675 • 16:9"
            suggestedSubject="College student seated peacefully on university campus lawn or shaded courtyard bench with open notebook and natural greenery"
            priorityBadge="About Editorial"
          />
        </div>
      </div>

      {/* What is Canopy */}
      <section className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
          Our Purpose
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight mb-4">
          What is Canopy?
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-[#4f6652] leading-relaxed font-normal">
          <p>
            Students often experience friction from smartphone habits, social media rabbit holes, unnecessary notifications, and excessive screen time. Yet many are unaware of the tools already built into their phones or the specialized software available on their laptops.
          </p>
          <p>
            Canopy is a centralized platform that makes discovering, understanding, and comparing existing digital wellness resources straightforward. We do not recreate tools or build another productivity app — our mission is to organize what exists, explain how it works in plain language, and help college students choose suitable solutions.
          </p>
        </div>
      </section>

      {/* Why it was created & Research Image Grid */}
      <section className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight mb-4">
              Why was Canopy created?
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#4f6652] leading-relaxed font-normal">
              <p>
                College is an environment of constant autonomy paired with constant digital stimulation. Coursework, club communications, social lives, and assignments all flow through the exact same glass screens designed to maximize advertising engagement.
              </p>
              <p>
                While commercial apps frequently compete for student attention or push expensive subscriptions with confusing cancellation policies, Canopy provides a neutral, fact-checked directory. We highlight free and built-in alternatives first, and clearly note what each tool cannot do.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <ImagePlaceholder
              id="IMG-20"
              title="Research Methodology & Workspace"
              src="/img-20.jpg"
              alt="Research Methodology & Workspace"
              aspectRatio="aspect-[4/3]"
              dimensions="800 × 600 • 4:3"
              suggestedSubject="Organized research desk with printed documentation, notebook, laptop displaying research comparison, and a small potted bonsai plant"
              priorityBadge="Research Methodology"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-8">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-2 border border-[#c4dcbf]">
            Guiding Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight">
            Our Research & Editorial Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white border border-[#d4e2d1] rounded-3xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#ecf1e8] text-[#162e1a] rounded-2xl flex items-center justify-center mb-4 border border-[#c4dcbf]">
                    <Icon className="w-5 h-5 text-[#3d7a48]" />
                  </div>
                  <h3 className="font-bold text-[#162e1a] text-sm mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#58755c] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Methodology */}
      <section className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
          Fact-Checking Process
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight mb-4">
          Research Methodology
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-[#4f6652] leading-relaxed">
          <p>
            All resource information in this directory was systematically checked on <strong className="text-[#162e1a]">{CHECKED_ON}</strong> using official product websites, developer help centers, Apple App Store listings, and Google Play Store documentation.
          </p>
          <p>
            We explicitly distinguish between developer-declared privacy labels and independently verified claims. When third-party websites cite conflicting pricing numbers (such as outdated subscription amounts), we note the discrepancy and advise students to verify at the official checkout screen.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#e2ede0]">
          <HelpCircle className="w-5 h-5 text-[#3d7a48]" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#162e1a] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="divide-y divide-[#e2ede0]">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm font-bold text-[#162e1a] mb-1.5">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#58755c] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Independence & Legal Notice */}
      <section className="bg-[#fcf8e8] border border-[#ecd99f] rounded-3xl p-6 sm:p-8 mb-10 flex gap-4 text-xs sm:text-sm text-[#664d14]">
        <AlertTriangle className="w-5 h-5 text-[#9a731b] shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h2 className="font-bold text-[#664d14] text-sm">
            Independent Student Project Disclaimer
          </h2>
          <p className="leading-relaxed">
            Canopy is an independent academic project and is not affiliated with, authorized, maintained, sponsored, or endorsed by Google, Apple, TickTick, Forest (SEEKRTECH), Freedom, Cold Turkey Blocker, LeechBlock, ScreenZen, Minimalist Phone (QQ42 Labs), Finch Care, or Sam Ruston (BuzzKill).
          </p>
          <p className="leading-relaxed">
            All registered trademarks, company names, and logos are the property of their respective owners. Information is provided for educational and discovery purposes only.
          </p>
        </div>
      </section>

      {/* Action Footer */}
      <div className="text-center pt-2">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs sm:text-sm font-bold rounded-full transition-all shadow-xs"
        >
          Explore Researched Resources
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[11px] text-[#6e8a72] max-w-2xl mx-auto pt-6 leading-relaxed">
          * {RESEARCH_NOTICE}
        </p>
      </div>
    </div>
  );
}
