import Link from 'next/link';
import Hero from '@/components/Hero';
import ResourceCard from '@/components/ResourceCard';
import CategoryCard from '@/components/CategoryCard';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { resources, RESEARCH_NOTICE } from '@/data/resources';
import { categories } from '@/data/categories';
import {
  Smartphone,
  Timer,
  Bell,
  Brain,
  BookOpen,
  GitCompare,
  ArrowRight,
  Info,
  CheckCircle2,
  ShieldCheck,
  Star,
  Sparkles,
  Compass,
} from 'lucide-react';

const problems = [
  {
    number: '01',
    tag: 'Habit Loops',
    icon: Smartphone,
    title: 'Autopilot Phone Checking',
    description:
      'Opening social apps without realizing it. Algorithms exploit habit loops, turning a 2-minute break between lectures into 45 minutes of mindless scrolling.',
  },
  {
    number: '02',
    tag: 'Time Fragmentation',
    icon: Timer,
    title: 'Excessive & Untracked Screen Time',
    description:
      'College students average 6 to 9 hours of screen time daily. Without visibility, screen fatigue eats into study hours and sleep quality before exams.',
  },
  {
    number: '03',
    tag: 'Attention Fracture',
    icon: Bell,
    title: 'Constant Group & App Notifications',
    description:
      'Notifications from group chats, news alerts, and apps shatter concentration. Research shows recovering deep focus after an interruption takes up to 23 minutes.',
  },
  {
    number: '04',
    tag: 'Mental Strain',
    icon: Brain,
    title: 'Procrastination & Focus Fatigue',
    description:
      'Willpower alone rarely beats engineered digital friction. Without structured timers and blockers, deep academic focus feels increasingly difficult.',
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Discover Researched Tools',
    description:
      'Browse our independent directory of 12 verified wellness resources organized by student problem — from mindful pause nudges to strict desktop lockers.',
  },
  {
    step: '02',
    title: 'Compare Alternatives Side-by-Side',
    description:
      'Select between 2 and 4 tools to evaluate their supported platforms, true pricing models, privacy policies, and verified limitations without fake ratings.',
  },
  {
    step: '03',
    title: 'Follow Step-by-Step Setup Guides',
    description:
      'Use interactive walkthroughs to set up built-in Digital Wellbeing, lock websites with Cold Turkey, or run gamified study sessions with Forest.',
  },
  {
    step: '04',
    title: 'Build Sustainable Digital Habits',
    description:
      'Adopt friction-based workflows that protect your deep work time during exam weeks and restore calm, natural sleep routines.',
  },
];

const topRecommendations = [
  {
    tool: 'Digital Wellbeing / iOS Focus',
    type: 'Built-in (Zero Cost)',
    desc: 'Start here. Built into your phone, zero install, and covers app timers, Focus mode, and Bedtime mode.',
    slug: 'digital-wellbeing',
  },
  {
    tool: 'ScreenZen',
    type: 'Free Mindful Pause',
    desc: 'Free on both Android & iOS. Adds a pause before habit apps open, breaking autopilot scrolling.',
    slug: 'screenzen',
  },
  {
    tool: 'LeechBlock NG',
    type: 'Free Laptop Extension',
    desc: 'Free and open-source browser blocker with flexible time limits and schedules for study sessions.',
    slug: 'leechblock-ng',
  },
  {
    tool: 'TickTick',
    type: 'Task & Deadline Planner',
    desc: 'Free plan covers core task planning and habit tracking; caps are generous enough for coursework.',
    slug: 'ticktick',
  },
  {
    tool: 'Freedom / Cold Turkey',
    type: 'Strict Blocker',
    desc: 'The next step when a pause or browser extension is not strict enough to keep you off distracting sites.',
    slug: 'cold-turkey',
  },
];

const featuredSlugs = [
  'screenzen',
  'cold-turkey',
  'forest',
  'leechblock-ng',
  'digital-wellbeing',
  'freedom',
];
const featuredResources = featuredSlugs
  .map((s) => resources.find((r) => r.slug === s))
  .filter(Boolean) as typeof resources;

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Reference Screenshot 1: The Student Challenges & Reality Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Eyebrow + Heading + Problems + Landscape Placeholder IMG-01 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-4 border border-[#c4dcbf]">
                <Sparkles className="w-3.5 h-3.5 text-[#3d7a48]" />
                The Reality of Student Life
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#162e1a] tracking-tight leading-tight mb-4">
                Digital distractions are structural, not personal failure.
              </h2>

              <p className="text-sm sm:text-base text-[#4f6652] leading-relaxed mb-6 font-normal">
                Phones and web platforms are engineered to maximize session time. We blend independent research with practical student workflows to help you manage screen time, break phone habits, and protect deep focus throughout your academic semester.
              </p>

              {/* 2 Mini Problem highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {problems.slice(0, 2).map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.number}
                      className="bg-white border border-[#d4e2d1] rounded-2xl p-4 shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#ecf1e8] flex items-center justify-center text-[#162e1a]">
                          <Icon className="w-4 h-4 text-[#3d7a48]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#8ba38e]">
                          {p.number}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#162e1a] mb-1">{p.title}</h4>
                      <p className="text-[11px] text-[#58755c] leading-snug line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Landscape Placeholder IMG-01 */}
            <ImagePlaceholder
              id="IMG-01"
              title="College Campus Digital Study Environment"
              src="/img-1.avif"
              alt="College Campus Digital Study Environment"
              aspectRatio="aspect-[16/9]"
              dimensions="1200 × 675 • 16:9"
              suggestedSubject="Student working peacefully on a laptop near library glass windows with natural greenery and morning sunlight"
              priorityBadge="Ref Screenshot 1 Left"
            />
          </div>

          {/* Center Column: Tall Portrait Image Container IMG-02 (Ref Screenshot 1 center) */}
          <div className="lg:col-span-4 flex flex-col">
            <ImagePlaceholder
              id="IMG-02"
              title="Student Serenity & Calm Focus"
              src="/img-2.png"
              alt="Student Serenity & Calm Focus"
              aspectRatio="aspect-[3/4] min-h-[460px] h-full"
              dimensions="900 × 1200 • 3:4"
              suggestedSubject="Portrait of a college student in comfortable clothing practicing mindful breathing or stretching peacefully in lush mountain nature / campus green space"
              className="shadow-sm"
              priorityBadge="Ref Screenshot 1 Center"
            />
          </div>

          {/* Right Column: Statistics & 3 Thumbnail Previews (Ref Screenshot 1 right) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div className="bg-white border border-[#d4e2d1] rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#162e1a] tracking-tight block">
                  12
                </span>
                <span className="text-xs font-medium text-[#58755c]">
                  + Verified Wellness Resources
                </span>
              </div>

              <div className="pt-4 border-t border-[#e2ede0]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#162e1a] tracking-tight block">
                  4
                </span>
                <span className="text-xs font-medium text-[#58755c]">
                  + Core Student Categories
                </span>
              </div>

              <div className="pt-4 border-t border-[#e2ede0]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#162e1a] tracking-tight block">
                  100%
                </span>
                <span className="text-xs font-medium text-[#58755c]">
                  + Free from Affiliate & Ad Bias
                </span>
              </div>

              <div className="pt-4 border-t border-[#e2ede0]">
                <span className="text-xl sm:text-2xl font-bold text-[#3d7a48] tracking-tight block font-mono">
                  Nov 2026
                </span>
                <span className="text-xs font-medium text-[#58755c]">
                  + Latest Independent Research Date
                </span>
              </div>
            </div>

            {/* 3 Small Thumbnails (Ref Screenshot 1 bottom-right preview row) */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#58755c] block mb-2">
                Curated Focus Previews:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <ImagePlaceholder
                  id="IMG-03"
                  title="Phone Habit"
                  src="/img-3.avif"
                  alt="Minimal phone habit focus screen"
                  aspectRatio="aspect-square"
                  dimensions="400 × 400"
                  suggestedSubject="Close up of hand gently holding phone with minimal grey screen"
                />
                <ImagePlaceholder
                  id="IMG-04"
                  title="Study Flow"
                  src="/img-4.webp"
                  alt="Study desk with open textbook and plant"
                  aspectRatio="aspect-square"
                  dimensions="400 × 400"
                  suggestedSubject="Clean wooden desk, open textbook, notebook and green plant"
                />
                <ImagePlaceholder
                  id="IMG-05"
                  title="Nature Walk"
                  src="/img-5.jpg"
                  alt="Peaceful botanical trail in nature"
                  aspectRatio="aspect-square"
                  dimensions="400 × 400"
                  suggestedSubject="Peaceful botanical trail under trees in soft afternoon light"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Reference Screenshot 2 & 3: Explore by Wellness Category (4 Deep Forest Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-2 border border-[#c4dcbf]">
              <Sparkles className="w-3.5 h-3.5 text-[#3d7a48]" />
              Structured Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight">
              Personalized Wellness Resources Built Around You
            </h2>
            <p className="text-sm text-[#58755c] mt-1">
              Choose the specific digital challenge you want to address:
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs font-bold transition-all shadow-xs"
          >
            View All Categories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Deep Forest Green Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/resources?category=${encodeURIComponent(cat.slug)}`}>
              <CategoryCard category={cat} variant="forest" />
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Reference Screenshot 3: Research Synthesis - Top 5 Recommendations Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#d4e2d1] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text + Checklist */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3d7a48]" />
                Why Choose Canopy • Research Synthesis
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#162e1a] tracking-tight leading-tight mb-4">
                Which 5 wellness resources should a student try first?
              </h2>

              <p className="text-sm sm:text-base text-[#4f6652] leading-relaxed mb-6 font-normal">
                We blend independent research with student-first practicality. Based on verified pricing, setup effort, and suitability for college laptops and phones, these 5 tools provide the most reliable starting points:
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {topRecommendations.map((rec) => (
                  <Link
                    key={rec.slug}
                    href={`/resources/${rec.slug}`}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f4f7f2] hover:bg-[#eaf1e7] border border-[#dce9da] transition-colors group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3d7a48] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-xs font-bold text-[#162e1a] block leading-tight group-hover:text-[#3d7a48] transition-colors">
                        {rec.tool}
                      </span>
                      <span className="text-[11px] text-[#58755c] leading-tight">
                        {rec.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#162e1a] hover:bg-[#234728] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  Explore Research Directory
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ecf1e8] hover:bg-[#dce9da] text-[#162e1a] text-xs sm:text-sm font-bold transition-all border border-[#c4dcbf]"
                >
                  <GitCompare className="w-4 h-4 text-[#3d7a48]" />
                  Compare Them Side-by-Side
                </Link>
              </div>
            </div>

            {/* Right Column: Wide Rounded Landscape Container IMG-07 */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                id="IMG-07"
                title="Mindful Digital Harmony"
                src="/img-7.png"
                alt="Mindful Digital Harmony"
                aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                dimensions="1200 × 750 • 16:10"
                suggestedSubject="Serene double-exposure profile of student surrounded by mossy pine forest and misty mountain peak (matching aesthetic of hero image)"
                priorityBadge="Ref Screenshot 3 Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Resources Spotlight & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-2 border border-[#c4dcbf]">
              <Star className="w-3.5 h-3.5 text-[#3d7a48]" />
              Curated Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#162e1a] tracking-tight">
              Featured Wellness Resources
            </h2>
            <p className="text-sm text-[#58755c] mt-1">
              Tools with verified student utility, from zero-install options to desktop lockups:
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3d7a48] hover:text-[#162e1a] transition-colors"
          >
            All 12 Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Resources Grid: 6 cards aligned across 2 rows of 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredResources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3d7a48] hover:bg-[#478a53] text-white text-xs sm:text-sm font-bold rounded-full transition-all shadow-sm hover:shadow-md"
          >
            Explore all {resources.length} resources in directory
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[11px] text-[#6e8a72] max-w-2xl mx-auto pt-5 leading-relaxed">
            * {RESEARCH_NOTICE}
          </p>
        </div>
      </section>

      {/* 7. Reference Screenshot 4 (Top): 4 Process Step Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dce9da] text-[#162e1a] text-xs font-bold tracking-wide mb-3 border border-[#c4dcbf]">
            <Compass className="w-3.5 h-3.5 text-[#3d7a48]" />
            Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#162e1a] tracking-tight mb-3">
            How Canopy Guides You
          </h2>
          <p className="text-sm text-[#58755c]">
            A step-by-step roadmap to reclaiming your attention without fighting impossible willpower battles.
          </p>
        </div>

        {/* 4 Tall White Step Cards (Ref Screenshot 4 Top) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-[#d4e2d1] rounded-3xl p-7 shadow-xs hover:shadow-md hover:border-[#86c78e] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-extrabold text-[#162e1a] tracking-tight font-mono">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-[#8ba38e] uppercase tracking-wider">
                    / STEP
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#162e1a] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#58755c] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#e2ede0]">
                <span className="text-[11px] font-semibold text-[#3d7a48]">
                  Verified Guidance
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Reference Screenshot 4 (Bottom): Full-Width Deep Forest Green Collage Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#162e1a] text-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 lg:p-16 border border-[#2b5431] shadow-2xl overflow-hidden">
          {/* Subtle Botanical Leaf Ambient Illustrations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3d7a48]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86c78e]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid with Asymmetrical Floating Images & Center Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Collage: IMG-09 (Top-left 3:4) & IMG-11 (Bottom-left 1:1) */}
            <div className="lg:col-span-3 space-y-4 hidden sm:block">
              <ImagePlaceholder
                id="IMG-09"
                title="Mindful Practice"
                src="/img-9.webp"
                alt="Student practicing mindful posture"
                aspectRatio="aspect-[3/4]"
                dimensions="600 × 800 • 3:4"
                suggestedSubject="Student sitting on yoga mat practicing mindful posture in studio/dorm"
                dark
              />
              <ImagePlaceholder
                id="IMG-11"
                title="Botanical Silhouette"
                src="/img-11.webp"
                alt="Forest mountain double exposure overlay"
                aspectRatio="aspect-square"
                dimensions="500 × 500 • 1:1"
                suggestedSubject="Forest mountain double exposure overlay matching hero aesthetic"
                dark
              />
            </div>

            {/* Center Content (Ref Screenshot 4 Centerpiece) */}
            <div className="lg:col-span-6 text-center px-2 sm:px-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#d1fad6] text-xs font-bold tracking-wide mb-4 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#86c78e]" />
                Independent College Mission
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Smarter Wellness, Designed Around Your Everyday Needs
              </h2>

              <p className="text-xs sm:text-base text-emerald-100/90 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
                We blend independent research with practical routines to support healthier habits, balanced study sessions, and meaningful focus throughout your academic journey.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#162e1a] hover:bg-[#dce9da] text-xs sm:text-sm font-extrabold transition-all shadow-md"
                >
                  Explore All 12 Resources
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20"
                >
                  <GitCompare className="w-4 h-4 text-[#86c78e]" />
                  Try Comparison Tool
                </Link>
              </div>

              {/* Bottom Center Image IMG-12 (Ref Screenshot 4 bottom center) */}
              <div className="mt-8 max-w-xs mx-auto hidden sm:block">
                <ImagePlaceholder
                  id="IMG-12"
                  title="Campus Meditation"
                  src="/img-12.webp"
                  alt="Student meditating peacefully in campus park"
                  aspectRatio="aspect-[4/3]"
                  dimensions="600 × 450"
                  suggestedSubject="Student sitting peacefully in campus park with quiet greenery and reflection"
                  dark
                />
              </div>
            </div>

            {/* Right Image Collage: IMG-10 (Top-right 3:4) & IMG-13 (Bottom-right 16:10) */}
            <div className="lg:col-span-3 space-y-4 hidden sm:block">
              <ImagePlaceholder
                id="IMG-10"
                title="Serene Study"
                src="/img-10.png"
                alt="Student studying at clean wooden desk with plants"
                aspectRatio="aspect-[3/4]"
                dimensions="600 × 800 • 3:4"
                suggestedSubject="Student studying calmly at clean desk with plants and warm natural light"
                dark
              />
              <ImagePlaceholder
                id="IMG-13"
                title="Majestic Horizon"
                src="/img-13.jpg"
                alt="Serene mountain vista landscape"
                aspectRatio="aspect-[16/10]"
                dimensions="700 × 440 • 16:10"
                suggestedSubject="Serene mountain vista landscape with traveler resting mindfully in nature"
                dark
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
