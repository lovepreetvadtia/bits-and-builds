"use client";

import React from "react";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Competitor Radar Audit",
    desc: "We dissect your city's local search intent, analyze your top competitors' backlink and ad profiles, and architect an edge-conversion blueprint designed for your market.",
    highlight: "Keyword Mapping · Local Search Radius · Speed Benchmark",
  },
  {
    num: "02",
    title: "Code, Creative & Automation Sprint",
    desc: "We write clean Next.js 14 code with Server-Side Rendering, design high-contrast brand assets, and program 24/7 automated WhatsApp qualification and booking workflows.",
    highlight: "Next.js SSR · 99/100 Core Web Vitals · WhatsApp Cloud API",
  },
  {
    num: "03",
    title: "Launch, Local SEO Blast & Ad Scaling",
    desc: "We deploy onto global edge infrastructure, inject LocalBusiness JSON-LD schemas, launch targeted Meta & Google Ads, and let your automated pipeline capture paying clients 24/7.",
    highlight: "Global Edge Deploy · Google Maps 3-Pack · High-ROAS Ads",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Two-Column Layout (1:2 ratio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
                6
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
                Execution Framework
              </span>
            </div>

            <GsapTextReveal
              as="h2"
              text="How our studio executes engineering sprints."
              variant="chars"
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
              highlightWord="sprints."
              highlightClass="text-[#F2C230]"
            />

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              Three systematic stages from initial technical audit to automated client capture. Transparent timelines, zero guesswork.
            </p>

            <div className="pt-6 border-t border-gray-200 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  Average Sprint Velocity:
                </span>
                <span className="rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 px-3 py-0.5 text-xs font-medium">
                  10-14 Days
                </span>
              </div>

              <div>
                <TextRollButton
                  text="Book a strategy call"
                  href="/contact"
                  variant="gold"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Vertical stack of three steps */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] hover:bg-white dark:hover:bg-[#1a1a1a] p-8 sm:p-12 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#F2C230] uppercase tracking-wider bg-gray-900 dark:bg-black px-2.5 py-0.5 rounded">
                      PHASE {step.num}
                    </span>
                    <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-white/10 text-xs">
                    <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Deliverables: </span>
                    <span className="text-gray-900 dark:text-white font-medium">{step.highlight}</span>
                  </div>
                </div>

                <div className="text-6xl sm:text-7xl font-light text-gray-300 dark:text-white/20 group-hover:text-[#F2C230] transition-colors duration-300 select-none self-end md:self-start leading-none shrink-0 font-mono">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
