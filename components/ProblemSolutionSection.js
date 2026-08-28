"use client";

import React from "react";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";

const OLD_WAY_ITEMS = [
  {
    title: "Bloated WordPress & Template Sluggishness",
    desc: "45 plugins, 4-second load times, and instant bounce rates before a visitor even reads your headline.",
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
    desc: "Inquiries sit in email inboxes or paper registers for 8+ hours until the prospective client has booked a competitor.",
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
    <section className="bg-[#F5F5F5] dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            3
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Engineering vs Legacy
          </span>
        </div>

        {/* Heading h2 with GSAP ScrollTrigger Animation */}
        <GsapTextReveal
          as="h2"
          text="Strategy vs guesswork. Engineered performance vs legacy templates."
          variant="words"
          className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white mb-12 sm:mb-16 max-w-4xl"
          highlightWord="performance"
          highlightClass="text-[#F2C230]"
        />

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: The Old Way (White Card) */}
          <div className="bg-white dark:bg-[#141414] rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/30 px-3.5 py-1 text-[12px] font-medium text-red-700 dark:text-red-400 mb-6">
                <span>✕ The Status Quo</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-3">
                Legacy Agency Approach
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Why most local businesses waste budget on slow templates and disconnected marketing tactics.
              </p>

              {/* Items */}
              <div className="space-y-6 pt-6 border-t border-gray-100 dark:border-white/10">
                {OLD_WAY_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Result: High customer acquisition costs &amp; stagnant local revenue.
            </div>
          </div>

          {/* Card 2: The New Way (Deep Black & Gold Card) */}
          <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle ambient gold glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F2C230]/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F2C230]/30 bg-[#F2C230]/10 px-3.5 py-1 text-[12px] font-medium text-[#F2C230] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F2C230] animate-ping" />
                <span>✓ The Engineered Standard</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                The Bits and Builds Engine
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                Integrated Next.js architecture, Google Maps 3-Pack rank dominance, and 24/7 WhatsApp booking automation.
              </p>

              {/* Items */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                {NEW_WAY_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-gray-900 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-medium text-[#F2C230] uppercase tracking-wider">
                Result: Predictable patient, diner &amp; client volume.
              </span>
              <TextRollButton
                text="Start a project"
                href="/contact"
                variant="gold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
