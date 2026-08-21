"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/seo";

const OLD_WAY_ITEMS = [
  {
    title: "Bloated WordPress & Template Sluggishness",
    desc: "45 plugins, 4-second loading times, and instant bounce rates before a visitor even sees your offer.",
  },
  {
    title: "Invisible on Google Maps (No Local Pack)",
    desc: "Zero geo-targeted schema tags, unoptimized GMB profiles, losing nearby high-intent clinic and customer searches to local competitors.",
  },
  {
    title: "Burning Ad Spend on Generic Traffic",
    desc: "Media buyers running broad Meta/Google Ads with generic landing pages that convert at less than 1.5%.",
  },
  {
    title: "Leaky Manual Lead Follow-Up",
    desc: "Inquiries sit in email inboxes or paper notebooks for 8+ hours until the prospective lead has booked someone else.",
  },
];

const NEW_WAY_ITEMS = [
  {
    title: "Sub-Second Next.js SSR Web Architecture",
    desc: "Server-side rendered on global edge servers with 99/100 Google PageSpeed scores for instant conversions.",
  },
  {
    title: "Google Maps 3-Pack & AI Search Dominance",
    desc: "Full LocalBusiness JSON-LD schema injection, AEO & GEO optimization for Google Maps, ChatGPT, and Perplexity AI.",
  },
  {
    title: "High-ROAS Scientific Ad Funnels",
    desc: "Tight geographic radius targeting, hyper-relevant landing pages, and dynamic creative testing producing 4x+ ROAS.",
  },
  {
    title: "24/7 Automated WhatsApp Booking Engines",
    desc: "Instant automated WhatsApp qualification, doctor OPD slot allocation, and restaurant reservations with zero human latency.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative w-full border-t border-b border-charcoal/10 dark:border-white/10 overflow-hidden transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* LEFT HALF: THE OLD WAY (Problem) - Light: bg-[#f4f6f4], Dark: bg-charcoal */}
        <div className="bg-[#f4f6f4] dark:bg-charcoal px-8 py-16 md:px-14 lg:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-charcoal/10 dark:border-white/10 transition-colors duration-300">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-red-600 dark:text-red-400 mb-6">
                <span>✕ The Status Quo</span>
              </div>
              <h2 className="font-anton text-5xl md:text-6xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                THE OLD <span className="text-charcoal/60 dark:text-sage/60">WAY.</span>
              </h2>
              <p className="mt-4 font-satoshi text-sm md:text-base text-charcoal/80 dark:text-sage/85 max-w-lg leading-relaxed">
                Why most local clinics, restaurants, and growing businesses waste thousands of dollars on disconnected digital agencies.
              </p>
            </div>

            {/* Problem Points List */}
            <div className="space-y-6 pt-4 border-t border-charcoal/10 dark:border-white/10">
              {OLD_WAY_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-bold text-sm">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-anton text-lg text-charcoal dark:text-white/90 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-satoshi text-xs md:text-sm text-charcoal/80 dark:text-sage/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-charcoal/10 dark:border-white/10 font-mono text-xs text-charcoal/70 dark:text-sage/75 font-semibold">
            RESULT: High customer acquisition costs &amp; stagnant local revenue.
          </div>
        </div>

        {/* RIGHT HALF: THE SOLUTION - Light: bg-white, Dark: bg-darkgray with yellow accent border */}
        <div className="relative bg-white dark:bg-darkgray px-8 py-16 md:px-14 lg:py-24 flex flex-col justify-between border-t-4 lg:border-t-0 lg:border-l-4 border-yellow transition-colors duration-300">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow/40 bg-yellow/20 dark:border-yellow/30 dark:bg-yellow/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-charcoal dark:text-yellow mb-6">
                <span className="h-2 w-2 rounded-full bg-amber-500 dark:bg-yellow animate-ping" />
                <span className="font-bold">✓ The Engineered Standard</span>
              </div>
              <h2 className="font-anton text-5xl md:text-6xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                THE <span className="highlight-yellow">BITS &amp; BUILDS</span> WAY.
              </h2>
              <p className="mt-4 font-satoshi text-sm md:text-base text-charcoal/75 dark:text-white/80 max-w-lg leading-relaxed">
                Full-stack web engineering, Google Maps dominance, and automated booking pipelines unified under one high-craft roof.
              </p>
            </div>

            {/* Solution Points List */}
            <div className="space-y-6 pt-4 border-t border-charcoal/10 dark:border-white/10">
              {NEW_WAY_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow/30 border border-yellow/60 text-charcoal dark:text-yellow font-bold text-sm shadow-[0_0_15px_rgba(255,225,124,0.3)]">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-anton text-lg text-charcoal dark:text-yellow tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-satoshi text-xs md:text-sm text-charcoal/75 dark:text-white/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-charcoal/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-charcoal dark:text-yellow font-bold uppercase tracking-wider">
              ✦ 99/100 Speed · 24/7 WhatsApp · 3-Pack Domination
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3 font-anton text-xs sm:text-sm uppercase tracking-wider text-charcoal shadow-lg hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 font-bold"
            >
              <span>Upgrade Your Stack</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
