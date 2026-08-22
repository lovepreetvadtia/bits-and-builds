import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import { buildMetadata, WHATSAPP_URL, AGENCY_LOCATION, FOUNDERS } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Bits and Builds — Founders Lavi & Jass | Sri Ganganagar",
  description:
    "Learn about Bits and Builds, founded by Lavi and Jass in Sri Ganganagar, Rajasthan (335002). We deliver server-rendered Next.js web development, local SEO, PPC, and booking automation across India and worldwide.",
  path: "/about",
});

const FoundersSection = dynamic(
  () =>
    Promise.all([
      import("@/components/FoundersSection"),
    ]).then(([mod]) => mod),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="w-full flex items-center justify-center p-8 text-charcoal/40 dark:text-sage/40 font-mono text-xs"
        style={{ minHeight: "550px" }}
      >
        <div className="flex items-center gap-2.5 rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-yellow animate-ping" />
          <span>Hydrating Founders Section...</span>
        </div>
      </div>
    ),
  }
);

const CORE_PILLARS = [
  {
    n: "01",
    title: "SERVER-SIDE RENDERED BY DEFAULT",
    text: "We believe slow websites with 40 plugins are obsolete. Every digital experience we build runs on Next.js Server-Side Rendering (SSR) with 95+ Core Web Vitals to maximize search crawling and user conversion.",
  },
  {
    n: "02",
    title: "ROOTED LOCALLY, SCALED GLOBALLY",
    text: "We founded Bits and Builds in Sri Ganganagar, Rajasthan. We bring the world's most modern web and advertising technology to local hospitals, clinics, and restaurants — while delivering international-grade projects across India and worldwide.",
  },
  {
    n: "03",
    title: "DIRECT FOUNDER PARTNERSHIP",
    text: "You won't be passed off to an inexperienced intern. Lavi (Technical Director) oversees all code, architecture, and search optimization; Jass (Creative Director) leads all marketing campaigns, creative direction, and paid acquisition funnels.",
  },
  {
    n: "04",
    title: "AUTOMATION AS A REVENUE LEVER",
    text: "Marketing without automated operations is a leaky bucket. We connect WhatsApp Cloud APIs, doctor OPD schedules, and restaurant table seating systems so your business captures revenue 24/7.",
  },
];

const TIMELINE = [
  {
    year: "ORIGIN",
    title: "The Genesis in Sri Ganganagar",
    desc: "Lavi and Jass recognized that local businesses in Rajasthan were being sold slow, outdated WordPress sites with zero SEO visibility and no automated follow-up. Bits and Builds was founded to fix this with raw engineering.",
  },
  {
    year: "EXPANSION",
    title: "Pan-India & Global Remote Delivery",
    desc: "Word spread of our sub-second web speeds and high-ROAS ad campaigns. We scaled our remote project workflows to serve clinics, D2C brands, and hospitality groups across Delhi, Bengaluru, Mumbai, the UK, and UAE.",
  },
  {
    year: "CURRENT",
    title: "Full-Stack Agency & AI Search Engine Optimizers",
    desc: "Today, we operate across 7 core services — pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to ensure our clients dominate both Google Maps and conversational AI engines.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero (Immediate LCP render) */}
      <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 px-4 sm:px-6 pb-16 sm:pb-24 pt-28 sm:pt-36 md:px-10 overflow-hidden border-b border-charcoal/15 dark:border-white/15 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="badge-editorial-light dark:badge-editorial mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-yellow animate-pulse border border-charcoal/40" />
            <span>About Bits &amp; Builds Studio</span>
          </div>

          <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal dark:text-white tracking-tight leading-[0.92] uppercase max-w-5xl">
            FOUNDED IN SRI GANGANAGAR, BUILDING FOR{" "}
            <span className="highlight-yellow">AMBITIOUS BRANDS</span> EVERYWHERE.
          </h1>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-12 items-start">
            <p className="lg:col-span-8 font-satoshi text-base sm:text-lg md:text-xl text-charcoal/75 dark:text-sage/80 leading-relaxed">
              Bits and Builds was created with a clear mission: to bring Silicon Valley-grade web
              engineering, Google Maps map-pack dominance, and automated WhatsApp booking systems
              to local businesses and national brands. Founded by <strong>Lavi and Jass</strong>,
              we operate from <strong>Sri Ganganagar, Rajasthan (PIN 335002)</strong>, combining
              high craft with relentless conversion focus.
            </p>

            <div className="lg:col-span-4 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-5 sm:p-6 font-mono text-xs text-charcoal dark:text-white space-y-3 shadow-lg">
              <div className="font-anton text-base text-charcoal dark:text-yellow uppercase border-b border-charcoal/10 dark:border-white/10 pb-2">
                ✦ Studio Quick Facts:
              </div>
              <div>📍 Headquarters: {AGENCY_LOCATION}</div>
              <div>👥 Founders: {FOUNDERS.map((f) => f.name).join(" & ")}</div>
              <div>🌐 Coverage: Pan-India &amp; Worldwide Remote</div>
              <div>⚡ Core Stack: Next.js 14/15 App Router · React 18 · TypeScript · Tailwind CSS · Vercel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Spotlight (Loaded on scroll) */}
      <ScrollRevealSection minHeight="550px">
        <FoundersSection />
      </ScrollRevealSection>

      {/* Core Pillars (Loaded on scroll) */}
      <ScrollRevealSection minHeight="450px">
        <section className="border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal px-4 sm:px-6 py-20 sm:py-24 md:py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 border-b border-charcoal/10 dark:border-white/10 pb-6 sm:pb-8">
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span>Core Principles</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                WHAT WE <span className="highlight-yellow">STAND FOR.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_PILLARS.map((p) => (
                <div
                  key={p.n}
                  className="bg-[#f8f9fa] dark:bg-darkgray rounded-3xl border border-charcoal/15 dark:border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] shadow-lg card-editorial text-charcoal dark:text-white"
                >
                  <div>
                    <span className="font-anton text-xl sm:text-2xl text-charcoal bg-yellow px-2.5 py-1 rounded">
                      {p.n}
                    </span>
                    <h3 className="mt-4 sm:mt-5 font-anton text-xl sm:text-2xl text-charcoal dark:text-white tracking-wide">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 font-satoshi text-xs sm:text-sm leading-relaxed text-charcoal/80 dark:text-sage/85">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Agency Timeline (Loaded on scroll) */}
      <ScrollRevealSection minHeight="450px">
        <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#fcfdfc] dark:bg-[#1a211c] px-4 sm:px-6 py-20 sm:py-24 md:py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 border-b border-charcoal/10 dark:border-white/10 pb-6 sm:pb-8">
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span>Studio Journey</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                THE ROAD <span className="highlight-yellow">SO FAR.</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className="grid gap-4 sm:gap-6 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-6 sm:p-8 md:p-10 md:grid-cols-12 md:items-center shadow-lg card-editorial"
                >
                  <div className="md:col-span-3">
                    <span className="font-anton text-xs uppercase tracking-widest text-charcoal bg-yellow px-2 py-0.5 rounded shadow-xs font-bold">
                      {item.year}
                    </span>
                    <h3 className="font-anton text-xl sm:text-2xl text-charcoal dark:text-white mt-2 tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-9 font-satoshi text-xs sm:text-sm text-charcoal/80 dark:text-sage/85 leading-relaxed">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Mega CTA Banner (Loaded on scroll) */}
      <ScrollRevealSection minHeight="250px">
        <section className="border-t border-charcoal/15 dark:border-white/15 bg-yellow px-4 sm:px-6 py-16 sm:py-20 md:py-24 md:px-10 text-charcoal overflow-hidden relative">
          <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 z-10 relative">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal/80">
                Start a Conversation
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl text-charcoal mt-2 tracking-tight leading-[0.92]">
                READY TO PARTNER WITH <br />
                <span className="bg-charcoal text-yellow px-2.5 sm:px-3 py-0.5 sm:py-1 inline-block -rotate-1 rounded-lg">
                  LAVI &amp; JASS?
                </span>
              </h2>
              <p className="mt-3 font-satoshi text-sm sm:text-base text-charcoal/80 max-w-xl font-medium">
                Tell us about your business goals and where you want to take your brand. We will
                deliver a custom scope and strategy within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                data-cursor-text="CONTACT"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal hover:bg-black text-white px-7 sm:px-8 py-3.5 sm:py-4 font-anton text-xs sm:text-base uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-bold"
              >
                <span>Get in Touch</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-white/90 backdrop-blur-md px-6 sm:px-7 py-3.5 sm:py-4 font-anton text-xs sm:text-base uppercase tracking-wider text-charcoal hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </>
  );
}
