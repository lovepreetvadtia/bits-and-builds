import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import FoundersSection from "@/components/FoundersSection";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import Tilt3DCard from "@/components/Tilt3DCard";
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
    text: "We founded Bits and Builds in Sri Ganganagar, Rajasthan. We bring modern web engineering and high-ROAS advertising to local clinics and restaurants — while delivering international projects across India, the UK, and UAE.",
  },
  {
    n: "03",
    title: "Direct Founder Partnership",
    text: "You will never be passed off to an inexperienced intern. Lavi (Technical Director) oversees all code, architecture, and search optimization; Jass (Creative Director) leads all marketing campaigns and visual creative direction.",
  },
  {
    n: "04",
    title: "Automation as a Revenue Lever",
    text: "Marketing without automated operations is a leaky bucket. We connect WhatsApp Cloud APIs, doctor OPD schedules, and restaurant table seating systems so your business captures revenue 24/7.",
  },
];

const TIMELINE = [
  {
    year: "ORIGIN",
    title: "The Genesis in Sri Ganganagar",
    desc: "Lavi and Jass recognized that local businesses were being sold slow, outdated WordPress sites with zero SEO visibility and no automated follow-up. Bits and Builds was founded to fix this with raw engineering.",
  },
  {
    year: "EXPANSION",
    title: "Pan-India & Global Remote Delivery",
    desc: "Word spread of our sub-second web speeds and high-ROAS ad campaigns. We scaled our remote project workflows to serve clinics, D2C brands, and hospitality groups across Delhi, Bengaluru, Mumbai, the UK, and UAE.",
  },
  {
    year: "CURRENT",
    title: "Category Dominance & AI Search",
    desc: "Today, we operate across 7 core services — pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to ensure our clients dominate both Google Maps and conversational AI engines.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      {/* Hero Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
              About Bits &amp; Builds Studio
            </span>
          </div>

          <GsapTextReveal
            as="h1"
            text="Founded in Sri Ganganagar, engineering for ambitious brands everywhere."
            variant="chars"
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white max-w-5xl"
            highlightWord="engineering"
            highlightClass="text-[#F2C230]"
          />

          <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-12 items-start">
            <p className="lg:col-span-8 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              Bits and Builds was created with a clear mission: to bring Silicon Valley-grade web
              engineering, Google Maps map-pack dominance, and automated WhatsApp booking systems
              to local businesses and national brands. Founded by <strong>Lavi and Jass</strong>,
              we operate from <strong>Sri Ganganagar, Rajasthan (PIN 335002)</strong>, combining
              high craft with relentless conversion focus.
            </p>

            <div className="lg:col-span-4">
              <Tilt3DCard maxTilt={8} scale={1.02} className="rounded-3xl">
                <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 text-xs text-gray-800 dark:text-gray-300 space-y-3 font-mono shadow-sm">
                  <div className="text-xs uppercase tracking-wider font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
                    ✦ Studio Quick Facts:
                  </div>
                  <div>📍 Location: {AGENCY_LOCATION}</div>
                  <div>👥 Founders: {FOUNDERS.map((f) => f.name).join(" & ")}</div>
                  <div>🌐 Reach: Pan-India &amp; Worldwide Remote</div>
                  <div>⚡ Core Stack: Next.js 14 SSR · Tailwind CSS · WhatsApp Cloud API</div>
                </div>
              </Tilt3DCard>
            </div>
          </div>

          {/* Studio Photography Showcase */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-5 aspect-[438/346] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/10">
              <Image
                src="/images/studio-team.jpg"
                alt="Bits and Builds studio team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="md:col-span-7 aspect-[900/500] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/10">
              <Image
                src="/images/studio-workspace.jpg"
                alt="Bits and Builds workspace dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Spotlight */}
      <FoundersSection />

      {/* Core Principles */}
      <section className="bg-[#F5F5F5] dark:bg-[#0E0E0E] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                3
              </span>
              <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 py-1">
                Core Principles
              </span>
            </div>
            <GsapTextReveal
              as="h2"
              text="The core principles that guide our craft."
              variant="words"
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
              highlightWord="principles"
              highlightClass="text-[#F2C230]"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((p) => (
              <div
                key={p.n}
                className="bg-white dark:bg-[#141414] rounded-3xl border border-gray-200 dark:border-white/10 p-8 flex flex-col justify-between min-h-[280px] shadow-xs text-gray-900 dark:text-white"
              >
                <div>
                  <span className="text-xs font-bold text-gray-900 bg-[#F2C230] px-2.5 py-1 rounded-full font-mono">
                    {p.n}
                  </span>
                  <h3 className="mt-4 font-medium text-lg text-gray-900 dark:text-white tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Timeline */}
      <section className="bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                4
              </span>
              <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                Studio Journey
              </span>
            </div>
            <GsapTextReveal
              as="h2"
              text="The road so far &amp; where we are headed."
              variant="words"
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
              highlightWord="road"
              highlightClass="text-[#F2C230]"
            />
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="grid gap-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-8 md:p-10 md:grid-cols-12 md:items-center shadow-xs"
              >
                <div className="md:col-span-4">
                  <span className="text-xs uppercase tracking-widest text-gray-900 bg-[#F2C230] px-2.5 py-1 rounded-full font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mt-3 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mega CTA Banner */}
      <section className="bg-[#0A0A0A] text-white px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F2C230]">
              Start a Conversation
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-white mt-2 tracking-tight">
              Ready to partner with Lavi &amp; Jass?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              Tell us about your business goals and where you want to take your brand. We will
              deliver a custom scope and strategy roadmap within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <TextRollButton
              text="Schedule a sprint call"
              href="/contact"
              variant="gold"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-xs font-medium text-white transition-colors"
            >
              <span>WhatsApp Direct</span>
              <span className="text-[#F2C230]">💬</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
