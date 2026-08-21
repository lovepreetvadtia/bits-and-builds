"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import GsapTextReveal from "@/components/GsapTextReveal";

export default function InteractiveServiceShowcase() {
  const [activeSlug, setActiveSlug] = useState("web-development");
  const activeService = services.find((s) => s.slug === activeSlug) || services[0];

  return (
    <section className="relative border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal py-28 px-6 md:px-10 text-charcoal dark:text-white overflow-hidden grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 dark:border-white/10 pb-8">
          <div>
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>Full-Stack Capabilities</span>
            </div>
            <GsapTextReveal
              as="h2"
              variant="words"
              text="ENGINEERED FOR MEASURABLE REVENUE."
              highlightWord="MEASURABLE"
              highlightClass="highlight-yellow"
              className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
            />
            <p className="mt-4 max-w-xl font-satoshi text-base text-charcoal/70 dark:text-sage/80 leading-relaxed">
              Explore our core growth engines. Click through each service to inspect live technical simulators, deliverables, and performance benchmarks.
            </p>
          </div>

          <Link
            href="/services"
            data-cursor-text="ALL"
            className="font-anton text-xs uppercase tracking-widest text-charcoal dark:text-yellow hover:text-charcoal/70 dark:hover:text-white transition-colors inline-flex items-center gap-2 underline decoration-yellow decoration-2 underline-offset-4"
          >
            <span>View Detailed Catalog</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2-Column Interactive Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {services.map((s) => {
              const isActive = s.slug === activeSlug;
              return (
                <button
                  key={s.slug}
                  onClick={() => setActiveSlug(s.slug)}
                  data-cursor-text="PREVIEW"
                  className={`group relative flex items-start gap-4 rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 ${isActive
                      ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-[#222a24] text-white shadow-brutalist dark:shadow-brutalist-yellow"
                      : "border border-charcoal/15 dark:border-white/10 bg-[#f8f9fa] dark:bg-darkgray text-charcoal dark:text-white hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-yellow/10"
                    }`}
                >
                  <span
                    className={`font-anton text-sm font-bold transition-colors ${isActive
                        ? "text-yellow"
                        : "text-charcoal/50 dark:text-sage/50 group-hover:text-charcoal dark:group-hover:text-yellow"
                      }`}
                  >
                    {s.tag}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-anton text-lg sm:text-xl tracking-wide transition-colors ${isActive
                            ? "text-white"
                            : "text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow"
                          }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-xs transition-transform duration-300 shrink-0 ${isActive
                            ? "translate-x-1 text-yellow"
                            : "text-charcoal/40 dark:text-sage/40 group-hover:text-charcoal"
                          }`}
                      >
                        →
                      </span>
                    </div>
                    <p
                      className={`mt-1 font-satoshi text-xs line-clamp-1 leading-relaxed ${isActive ? "text-sage/90" : "text-charcoal/70 dark:text-sage/70"
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
          <div className="lg:col-span-7 sticky top-28">
            <div className="rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal dark:bg-darkgray text-white p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <div>
                  <span className="font-mono text-xs text-yellow uppercase tracking-wider font-semibold">
                    {activeService.badge} · {activeService.tag}
                  </span>
                  <h4 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white mt-1 tracking-tight">
                    {activeService.title}
                  </h4>
                </div>

                <div className="rounded-xl border border-yellow/40 bg-yellow/10 px-4 py-2 text-right">
                  <div className="font-anton text-xl sm:text-2xl text-yellow">
                    {activeService.caseHighlight.metric}
                  </div>
                  <div className="text-[10px] font-mono text-sage/70 uppercase">
                    {activeService.caseHighlight.label}
                  </div>
                </div>
              </div>

              {/* Dynamic Service Simulator Preview */}
              <div className="my-6 rounded-2xl border border-white/10 bg-black/50 p-5">
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
                <p className="font-mono text-xs uppercase tracking-widest text-sage/50 mb-3">
                  Delivered in Every Sprint:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.slice(0, 4).map((d, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] p-3 font-satoshi text-xs text-sage/90"
                    >
                      <span className="text-yellow font-bold shrink-0">✓</span>
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  {activeService.tools.slice(0, 5).map((toolName) => {
                    const toolObj = activeService.toolStack?.find((t) => t.name === toolName);
                    return (
                      <span
                        key={toolName}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80 border border-white/10"
                      >
                        {toolObj?.svgIcon ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={toolObj.svgIcon}
                            alt={toolName}
                            className="h-3.5 w-3.5 object-contain inline-block"
                          />
                        ) : null}
                        <span>{toolName}</span>
                      </span>
                    );
                  })}
                </div>

                <Link
                  href={`/services/${activeService.slug}`}
                  data-cursor-text="DETAILS"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3 font-anton text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
                >
                  <span>Explore Service</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
                </Link>
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
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-sage/60 ml-1.5 text-[11px] truncate">next.config.server.js</span>
        </div>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow shrink-0 font-anton">
          Lighthouse 100/100
        </span>
      </div>

      <div className="overflow-x-auto space-y-1 text-sage/90 text-[11px] leading-relaxed py-1">
        <p><span className="text-yellow">export default async function</span> ServerPage() &#123;</p>
        <p className="pl-4 text-sage/40">// Zero client-side hydration delay, pure Edge SSR</p>
        <p className="pl-4"><span className="text-yellow">const</span> schema = <span className="text-yellow">await</span> fetchJSONLDSchema();</p>
        <p className="pl-4"><span className="text-yellow">return</span> &lt;<span className="text-white">EdgeSpeedWrapper</span> ttfb=&quot;0.18s&quot; /&gt;;</p>
        <p>&#125;</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        {["Performance: 100", "Accessibility: 100", "Best Practices: 100", "SEO Schema: 100"].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center rounded-xl bg-yellow/10 border border-yellow/30 p-2 text-yellow">
            <span className="font-anton text-lg">100</span>
            <span className="text-[10px] text-sage/80 font-mono mt-0.5">{item.split(":")[0]}</span>
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
        <span className="text-sage/70 text-[11px]">Instagram Viral Growth Engine</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          Viral Hook Matrix
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="font-anton text-2xl text-white">1.4M+</div>
          <div className="text-[10px] text-sage/50 uppercase">Reels Plays</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="font-anton text-2xl text-yellow">+8.2K</div>
          <div className="text-[10px] text-sage/50 uppercase">Local Followers</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <div className="font-anton text-2xl text-white">420+</div>
          <div className="text-[10px] text-sage/50 uppercase">Direct DMs / Leads</div>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-2.5 font-satoshi text-xs text-sage/90 leading-relaxed">
        🔥 Strategy: Localized geo-hooks + retention pacing for clinic &amp; restaurant audiences.
      </div>
    </div>
  );
}

function PpcSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-sage/70 text-[11px]">Meta &amp; Google Ads Live Feed</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          Active 4.8x ROAS
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-sage/50 uppercase">Ad Spend</div>
          <div className="font-anton text-xl text-white">₹25,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-sage/50 uppercase">Tracked Revenue</div>
          <div className="font-anton text-xl text-yellow">₹1,20,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-[10px] text-sage/50 uppercase">Cost Per Lead</div>
          <div className="font-anton text-xl text-white">₹42.50</div>
        </div>
      </div>
      <div className="font-satoshi text-xs text-sage/80 leading-relaxed">
        Targeted radius campaigns: Local geo-fencing + Meta lookalikes + Google Search call-only intent.
      </div>
    </div>
  );
}

function SeoSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-sage/70 text-[11px]">Google Maps 3-Pack &amp; AEO Ranker</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          #1 Map Pack Verified
        </span>
      </div>
      <div className="rounded-xl border border-yellow/30 bg-yellow/5 p-4 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <span className="font-anton text-base text-white">1. Bits and Builds (Your Brand)</span>
          <span className="text-yellow text-xs">★★★★★ (4.9 / 50+ reviews)</span>
        </div>
        <div className="font-satoshi text-xs text-sage/70">Sri Ganganagar, Rajasthan · 335002 · Open 9AM - 8PM</div>
        <div className="font-mono text-[11px] text-yellow font-bold">✓ GMB Optimized · Geo-Grid Verified · AEO Schema Active</div>
      </div>
      <div className="font-satoshi text-xs text-sage/60 leading-relaxed">
        Structured citations enabling ChatGPT, Perplexity &amp; Gemini to quote your business directly.
      </div>
    </div>
  );
}

function DesignSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-sage/70 text-[11px]">Vector Identity &amp; Editorial Design Kit</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          Figma Masters
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="rounded-xl border border-white/10 bg-[#171e19] p-3 text-white font-mono">Charcoal #171E19</div>
        <div className="rounded-xl border border-white/10 bg-[#ffe17c] p-3 text-charcoal font-bold font-mono">Yellow #FFE17C</div>
        <div className="rounded-xl border border-white/10 bg-[#272727] p-3 text-white font-mono">DarkGray #272727</div>
        <div className="rounded-xl border border-white/10 bg-[#ffffff] p-3 text-charcoal font-bold font-mono">Paper #FFFFFF</div>
      </div>
      <div className="font-satoshi text-xs text-sage/70 leading-relaxed">
        Deliverables: Responsive Vector Logos, Social Media Design Systems, Menus, Signage &amp; Collateral.
      </div>
    </div>
  );
}

function VideoSimulator() {
  const videoTools = [
    { name: "Premiere Pro", icon: "/icons/tools/premiere-pro.svg", role: "NLE Suite" },
    { name: "After Effects", icon: "/icons/tools/after-effects.svg", role: "Motion/VFX" },
    { name: "DaVinci", icon: "/icons/tools/davinci-resolve.svg", role: "Color Master" },
    { name: "Audition", icon: "/icons/tools/adobe-audition.svg", role: "Studio Audio" },
    { name: "CapCut Pro", icon: "/icons/tools/capcut.svg", role: "Viral Velocity" },
  ];

  return (
    <div className="space-y-3.5 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-sage/70 text-[11px]">Production Suite &amp; Viral Timeline</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          4K 60FPS Render
        </span>
      </div>

      {/* SVG Tool Suite Badges */}
      <div className="grid grid-cols-5 gap-2">
        {videoTools.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center transition-all duration-300 hover:border-yellow/50 hover:bg-yellow/10 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.icon}
              alt={t.name}
              className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-anton text-[10px] text-white mt-1.5 group-hover:text-yellow transition-colors truncate max-w-full">
              {t.name}
            </span>
            <span className="text-[8px] text-sage/60 font-mono hidden sm:block mt-0.5">{t.role}</span>
          </div>
        ))}
      </div>

      {/* Timeline Sequence */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-2">
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-yellow/20 px-2 py-0.5 text-yellow text-[10px] shrink-0 font-bold font-mono">00:00 - 00:02</span>
          <span className="font-satoshi text-xs text-white">Attention Hook Cut + SFX + Kinetic Text Pop</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-white/10 px-2 py-0.5 text-white text-[10px] shrink-0 font-bold font-mono">00:03 - 00:28</span>
          <span className="font-satoshi text-xs text-sage/90">Fast Pacing + B-roll zooms + Dynamic Subtitles</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-yellow/20 px-2 py-0.5 text-yellow text-[10px] shrink-0 font-bold font-mono">00:29 - 00:35</span>
          <span className="font-satoshi text-xs text-yellow font-medium">Conversion CTA Trigger (Book / DM / WhatsApp)</span>
        </div>
      </div>
    </div>
  );
}

function AutomationPreviewSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
        <span className="text-sage/70 text-[11px]">WhatsApp Cloud API Workflow</span>
        <span className="rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 text-[11px] font-bold text-yellow font-anton">
          24/7 Autopilot Booking
        </span>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-2 font-satoshi text-xs">
        <div className="flex items-center gap-2 text-sage/80">
          <span className="text-yellow font-bold font-mono">1.</span> Patient / Customer sends &quot;Hi, I need an appointment&quot;
        </div>
        <div className="flex items-center gap-2 text-sage/80">
          <span className="text-yellow font-bold font-mono">2.</span> Bot returns doctor slots + date selection in 1.2s
        </div>
        <div className="flex items-center gap-2 text-sage/80">
          <span className="text-yellow font-bold font-mono">3.</span> Calendar syncs automatically + confirmation PDF dispatched
        </div>
        <div className="flex items-center gap-2 text-yellow font-bold">
          <span className="text-yellow font-mono">4.</span> Automated 2-hour reminder cuts no-shows by 80%
        </div>
      </div>
    </div>
  );
}
