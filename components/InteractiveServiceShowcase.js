"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import TextRollButton from "@/components/TextRollButton";

export default function InteractiveServiceShowcase() {
  const [activeSlug, setActiveSlug] = useState("web-development");
  const activeService = services.find((s) => s.slug === activeSlug) || services[0];

  return (
    <section className="bg-[#F5F5F5] dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            5
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Full-Stack Capabilities
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white max-w-2xl">
              Engineered for measurable revenue &amp; search dominance.
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              Explore our core growth engines. Select each capability to inspect live technical simulators, deliverables, and proven performance benchmarks.
            </p>
          </div>

          <Link
            href="/services"
            className="text-xs uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] font-semibold transition-colors inline-flex items-center gap-2 underline decoration-[#F2C230] decoration-2 underline-offset-4"
          >
            <span>View All Services</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2-Column Interactive Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Interactive Service Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {services.map((s) => {
              const isActive = s.slug === activeSlug;
              return (
                <button
                  key={s.slug}
                  onClick={() => setActiveSlug(s.slug)}
                  className={`group relative flex items-start gap-3 sm:gap-4 rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#0A0A0A] dark:bg-white/15 text-white border border-[#0A0A0A] dark:border-white/25 shadow-lg"
                      : "bg-white dark:bg-[#141414] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                      isActive
                        ? "bg-[#F2C230] text-gray-900 font-bold"
                        : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-[#F2C230] group-hover:text-gray-900"
                    }`}
                  >
                    {s.tag}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-base sm:text-lg font-medium tracking-tight transition-colors block ${
                          isActive
                            ? "text-white"
                            : "text-gray-900 dark:text-white group-hover:text-[#D9AC1F] dark:group-hover:text-[#F2C230]"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`text-xs transition-transform duration-300 shrink-0 ${
                          isActive
                            ? "translate-x-1 text-[#F2C230]"
                            : "text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"
                        }`}
                      >
                        →
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-xs line-clamp-1 leading-relaxed ${
                        isActive ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {s.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Visualizer Preview */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs text-[#F2C230] uppercase tracking-wider font-semibold">
                    {activeService.badge} · {activeService.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white mt-1 tracking-tight">
                    {activeService.title}
                  </h3>
                </div>

                <div className="rounded-xl border border-[#F2C230]/40 bg-[#F2C230]/10 px-4 py-2 text-right">
                  <div className="text-xl sm:text-2xl font-semibold text-[#F2C230]">
                    {activeService.caseHighlight.metric}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    {activeService.caseHighlight.label}
                  </div>
                </div>
              </div>

              {/* Dynamic Service Simulator Preview */}
              <div className="my-6 rounded-2xl border border-white/10 bg-black/60 p-5">
                {activeSlug === "web-development" && <WebDevSimulator />}
                {activeSlug === "social-media-marketing" && <SocialSimulator />}
                {activeSlug === "ppc" && <PpcSimulator />}
                {activeSlug === "seo" && <SeoSimulator />}
                {activeSlug === "graphic-design" && <DesignSimulator />}
                {activeSlug === "video-editing" && <VideoSimulator />}
                {activeSlug === "automation" && <AutomationPreviewSimulator />}
              </div>

              {/* Core Deliverables */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
                  Delivered in Every Sprint:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.slice(0, 4).map((d, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-xs text-gray-300"
                    >
                      <span className="text-[#F2C230] font-bold shrink-0">✓</span>
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  {activeService.tools.slice(0, 4).map((toolName) => (
                    <span
                      key={toolName}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs text-gray-300 border border-white/10"
                    >
                      {toolName}
                    </span>
                  ))}
                </div>

                <TextRollButton
                  text="Explore service"
                  href={`/services/${activeService.slug}`}
                  variant="gold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebDevSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F2C230] shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-gray-400 ml-1.5 text-[11px] truncate">next.config.server.js</span>
        </div>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230] shrink-0">
          Lighthouse 100/100
        </span>
      </div>

      <div className="overflow-x-auto space-y-1 text-gray-300 text-[11px] leading-relaxed py-1">
        <p><span className="text-[#F2C230]">export default async function</span> ServerPage() &#123;</p>
        <p className="pl-4 text-gray-500">// Zero client-side hydration delay, pure Edge SSR</p>
        <p className="pl-4"><span className="text-[#F2C230]">const</span> schema = <span className="text-[#F2C230]">await</span> fetchJSONLDSchema();</p>
        <p className="pl-4"><span className="text-[#F2C230]">return</span> &lt;<span className="text-white">EdgeSpeedWrapper</span> ttfb=&quot;0.18s&quot; /&gt;;</p>
        <p>&#125;</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        {["Performance: 100", "Accessibility: 100", "Best Practices: 100", "SEO Schema: 100"].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center rounded-xl bg-[#F2C230]/10 border border-[#F2C230]/30 p-2 text-[#F2C230]">
            <span className="text-lg font-semibold">100</span>
            <span className="text-[10px] text-gray-300 font-mono mt-0.5">{item.split(":")[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">Instagram Viral Growth Engine</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          Viral Hook Matrix
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="text-2xl font-semibold text-white">1.4M+</div>
          <div className="text-[10px] text-gray-400 uppercase">Reels Plays</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="text-2xl font-semibold text-[#F2C230]">+8.2K</div>
          <div className="text-[10px] text-gray-400 uppercase">Local Followers</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="text-2xl font-semibold text-white">420+</div>
          <div className="text-[10px] text-gray-400 uppercase">Direct DMs / Leads</div>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-2.5 text-xs text-gray-300 leading-relaxed">
        🔥 Strategy: Localized geo-hooks + retention pacing for clinic &amp; restaurant audiences.
      </div>
    </div>
  );
}

function PpcSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">Meta &amp; Google Ads Live Feed</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          Active 4.8x ROAS
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-gray-400 uppercase">Ad Spend</div>
          <div className="text-xl font-semibold text-white">₹25,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-gray-400 uppercase">Tracked Revenue</div>
          <div className="text-xl font-semibold text-[#F2C230]">₹1,20,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-gray-400 uppercase">Cost Per Lead</div>
          <div className="text-xl font-semibold text-white">₹42.50</div>
        </div>
      </div>
      <div className="text-xs text-gray-300 leading-relaxed font-normal">
        Targeted radius campaigns: Local geo-fencing + Meta lookalikes + Google Search call-only intent.
      </div>
    </div>
  );
}

function SeoSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">Google Maps 3-Pack &amp; AEO Ranker</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          #1 Map Pack Verified
        </span>
      </div>
      <div className="rounded-xl border border-[#F2C230]/30 bg-[#F2C230]/5 p-4 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <span className="text-base font-semibold text-white">1. Bits and Builds (Your Brand)</span>
          <span className="text-[#F2C230] text-xs">★★★★★ (4.9 / 50+ reviews)</span>
        </div>
        <div className="text-xs text-gray-400">Sri Ganganagar, Rajasthan · 335002 · Open 9AM - 8PM</div>
        <div className="text-[11px] text-[#F2C230] font-semibold">✓ GMB Optimized · Geo-Grid Verified · AEO Schema Active</div>
      </div>
      <div className="text-xs text-gray-400 leading-relaxed font-normal">
        Structured citations enabling ChatGPT, Perplexity &amp; Gemini to quote your business directly.
      </div>
    </div>
  );
}

function DesignSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">Vector Identity &amp; Brand System</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          Figma Masters
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-white font-medium">Black #0A0A0A</div>
        <div className="rounded-xl border border-white/10 bg-[#F2C230] p-3 text-gray-900 font-semibold">Gold #F2C230</div>
        <div className="rounded-xl border border-white/10 bg-[#272727] p-3 text-white font-medium">DarkGray #272727</div>
        <div className="rounded-xl border border-gray-300 bg-[#FFFFFF] p-3 text-gray-900 font-semibold">White #FFFFFF</div>
      </div>
      <div className="text-xs text-gray-400 leading-relaxed font-normal">
        Deliverables: Responsive Vector Logos, Design Systems, Collateral &amp; Social Kits.
      </div>
    </div>
  );
}

function VideoSimulator() {
  return (
    <div className="space-y-3.5 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">Production Suite &amp; Viral Timeline</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          4K 60FPS Render
        </span>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-2">
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-[#F2C230]/20 px-2 py-0.5 text-[#F2C230] text-[10px] shrink-0 font-semibold">00:00 - 00:02</span>
          <span className="text-xs text-white">Attention Hook Cut + SFX + Kinetic Typography</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-0.5 text-white text-[10px] shrink-0 font-semibold">00:03 - 00:28</span>
          <span className="text-xs text-gray-300">Fast Pacing + B-roll zooms + Dynamic Subtitles</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-[#F2C230]/20 px-2 py-0.5 text-[#F2C230] text-[10px] shrink-0 font-semibold">00:29 - 00:35</span>
          <span className="text-xs text-[#F2C230] font-semibold">Conversion CTA Trigger (Book / DM / WhatsApp)</span>
        </div>
      </div>
    </div>
  );
}

function AutomationPreviewSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-gray-400 text-[11px]">WhatsApp Cloud API Workflow</span>
        <span className="rounded-md border border-[#F2C230]/40 bg-[#F2C230]/10 px-2 py-0.5 text-[11px] font-semibold text-[#F2C230]">
          24/7 Autopilot Booking
        </span>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#F2C230] font-semibold">1.</span> Patient / Customer sends &quot;Hi, I need an appointment&quot;
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#F2C230] font-semibold">2.</span> Bot returns doctor slots + date selection in 1.2s
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#F2C230] font-semibold">3.</span> Calendar syncs automatically + confirmation dispatched
        </div>
        <div className="flex items-center gap-2 text-[#F2C230] font-semibold">
          <span className="text-[#F2C230]">4.</span> Automated 2-hour reminder cuts no-shows by 80%
        </div>
      </div>
    </div>
  );
}
