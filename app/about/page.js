import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import FoundersSection from "@/components/FoundersSection";
import { buildMetadata, WHATSAPP_URL, AGENCY_LOCATION, FOUNDERS } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Bits and Builds — Founders Lavi & Jass | Sri Ganganagar",
  description:
    "Learn about Bits and Builds, founded by Lavi and Jass in Sri Ganganagar, Rajasthan (335002). We deliver server-rendered Next.js web development, local SEO, PPC, and booking automation across India and worldwide.",
  path: "/about",
});

const CORE_PILLARS = [
  {
    n: "01",
    title: "Server-Side Rendered by Default",
    text: "We believe slow websites with 40 plugins are obsolete. Every digital experience we build runs on Next.js Server-Side Rendering (SSR) with 95+ Core Web Vitals to maximize search crawling and user conversion.",
  },
  {
    n: "02",
    title: "Rooted Locally, Scaled Globally",
    text: "We founded Bits and Builds in Sri Ganganagar, Rajasthan. We bring the world's most modern web and advertising technology to local hospitals, clinics, and restaurants — while delivering international-grade projects across India and worldwide.",
  },
  {
    n: "03",
    title: "Direct Founder Partnership",
    text: "You won't be passed off to an inexperienced intern. Lavi oversees all code, SEO schemas, and technical systems; Jass leads all marketing campaigns, video creative direction, and paid acquisition funnels.",
  },
  {
    n: "04",
    title: "Automation as a Revenue Lever",
    text: "Marketing without automated operations is a leaky bucket. We connect WhatsApp Cloud APIs, doctor OPD schedules, and restaurant table seating systems so your business captures revenue 24/7.",
  },
];

const TIMELINE = [
  {
    year: "Origin",
    title: "The Genesis in Sri Ganganagar",
    desc: "Lavi and Jass recognized that local businesses in Rajasthan were being sold slow, outdated WordPress sites with zero SEO visibility and no automated follow-up. Bits and Builds was founded to fix this.",
  },
  {
    year: "Expansion",
    title: "Pan-India & Global Remote Delivery",
    desc: "Word spread of our sub-second web speeds and high-ROAS ad campaigns. We scaled our remote project workflows to serve clinics, D2C brands, and hospitality groups across Delhi, Bengaluru, Mumbai, the UK, and UAE.",
  },
  {
    year: "Current",
    title: "Full-Stack Agency & AI Search Engine Optimizers",
    desc: "Today, we operate across 7 core services — pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to ensure our clients dominate both Google Maps and conversational AI engines.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid relative px-6 pb-20 pt-40 md:px-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-[1440px]">
          <div className="eyebrow-pill mb-6">
            <span>About Bits &amp; Builds</span>
          </div>

          <AnimatedText
            as="h1"
            immediate
            text="A modern digital studio, founded in Sri Ganganagar, building for ambitious brands everywhere."
            className="max-w-5xl font-display text-clampHero font-bold leading-[0.95] tracking-tightest2 text-paper"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="lg:col-span-8 text-base md:text-lg text-paper/70 leading-relaxed">
              Bits and Builds was created with a clear mission: to bring Silicon Valley-grade web
              engineering, Google Maps map-pack dominance, and automated WhatsApp booking systems
              to local businesses and national brands. Founded by <strong>Lavi and Jass</strong>,
              we operate from <strong>Sri Ganganagar, Rajasthan (PIN 335002)</strong>, combining
              high craft with relentless conversion focus.
            </p>

            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-ink-card p-6 font-mono text-xs text-paper/70 space-y-2">
              <div className="text-teal font-bold text-sm">✦ Studio Quick Facts:</div>
              <div>📍 Headquarters: {AGENCY_LOCATION}</div>
              <div>👥 Founders: {FOUNDERS.map((f) => f.name).join(" & ")}</div>
              <div>🌐 Coverage: Pan-India &amp; Worldwide Remote</div>
              <div>⚡ Core Stack: Next.js 14 SSR · Meta Ads · GMB SEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Spotlight */}
      <FoundersSection />

      {/* Core Pillars */}
      <section className="border-t border-white/10 bg-ink-card/30 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>Our Principles</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              What we stand for.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((p) => (
              <div key={p.n} className="bg-ink p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="font-mono text-sm font-bold text-teal">{p.n}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-paper">{p.title}</h3>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-paper/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Timeline */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>Studio Journey</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              The road so far.
            </h2>
          </div>

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="grid gap-6 rounded-3xl border border-white/10 bg-ink-card p-8 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-teal">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mt-1">{item.title}</h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-sm text-paper/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mega CTA Banner */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1440px] rounded-3xl border border-teal/30 bg-gradient-to-r from-teal/10 via-ink-card to-electric-blue/10 p-10 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-teal">
              Start a Conversation
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-paper mt-2">
              Ready to partner with Lavi &amp; Jass?
            </h2>
            <p className="mt-2 text-sm text-paper/60 max-w-xl">
              Tell us about your business goals and where you want to take your brand. We will
              deliver a custom scope and strategy within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-cursor-text="CONTACT"
              className="rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,242,213,0.3)]"
            >
              Get in Touch →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="WHATSAPP"
              className="rounded-full border border-teal/40 px-7 py-4 font-mono text-xs text-teal hover:bg-teal/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
