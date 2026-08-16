"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

export default function InteractiveServiceShowcase() {
  const [activeSlug, setActiveSlug] = useState("web-development");
  const activeService = services.find((s) => s.slug === activeSlug) || services[0];

  return (
    <section className="relative border-t border-white/10 bg-ink-card/50 py-28 px-6 md:px-10 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 -right-40 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]" />

      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="eyebrow-pill mb-4">
              <span>Interactive Capabilities</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Engineered for <span className="text-teal">measurable impact.</span>
            </h2>
            <p className="mt-4 max-w-xl text-paper/60 text-base">
              Explore our full-stack capabilities. Click through each service to see the technical
              deliverables and live simulation.
            </p>
          </div>

          <Link
            href="/services"
            data-cursor-text="ALL"
            className="font-mono text-xs uppercase tracking-widest text-teal hover:underline inline-flex items-center gap-2"
          >
            <span>View detailed catalog</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2-Column Interactive Hub (LXL Creative style) */}
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
                  className={`group relative flex items-start gap-4 rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border border-teal/40 bg-teal/10 shadow-[0_0_30px_rgba(0,242,213,0.15)]"
                      : "border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive ? "text-teal" : "text-paper/40 group-hover:text-paper"
                    }`}
                  >
                    {s.tag}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-display text-base sm:text-lg font-semibold truncate transition-colors ${
                          isActive ? "text-paper" : "text-paper/80 group-hover:text-teal"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-xs transition-transform duration-300 shrink-0 ${
                          isActive ? "translate-x-1 text-teal" : "text-paper/20 group-hover:text-paper"
                        }`}
                      >
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-paper/50 line-clamp-1">{s.short}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Visualizer Preview */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="rounded-3xl border border-white/10 bg-ink/90 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-2xl">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <div>
                  <span className="font-mono text-[11px] sm:text-xs text-teal uppercase tracking-wider font-semibold">
                    {activeService.badge} · {activeService.tag}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-paper mt-1">
                    {activeService.title}
                  </h4>
                </div>

                <div className="rounded-xl border border-teal/30 bg-teal/5 px-3 sm:px-4 py-2 text-right">
                  <div className="font-display text-lg sm:text-xl font-bold text-teal">
                    {activeService.caseHighlight.metric}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-paper/60 uppercase">
                    {activeService.caseHighlight.label}
                  </div>
                </div>
              </div>

              {/* Dynamic Service Simulator Preview */}
              <div className="my-5 sm:my-6 rounded-2xl border border-white/5 bg-ink-elevated/70 p-4 sm:p-5">
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
                <p className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-3">
                  What's Included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.slice(0, 4).map((d, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-paper/80"
                    >
                      <span className="text-teal font-bold shrink-0">✓</span>
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-5 sm:pt-6">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {activeService.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-paper/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${activeService.slug}`}
                  data-cursor-text="DETAILS"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
                >
                  <span>Explore Service</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mini interactive mockups for the preview container with responsive layouts
function WebDevSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 shrink-0" />
          <span className="text-paper/50 ml-1.5 text-[11px] truncate">page.server.jsx</span>
        </div>
        <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal shrink-0">
          Lighthouse 100/100
        </span>
      </div>

      <div className="overflow-x-auto space-y-1 text-paper/70 text-[11px] leading-relaxed py-1">
        <p><span className="text-electric-violet">export default async function</span> <span className="text-electric-blue">ServerPage</span>() &#123;</p>
        <p className="pl-3 sm:pl-4"><span className="text-paper/40">// Zero client-side hydration delay, pure SSR</span></p>
        <p className="pl-3 sm:pl-4"><span className="text-teal">const</span> data = <span className="text-electric-violet">await</span> fetchSSRSchema();</p>
        <p className="pl-3 sm:pl-4"><span className="text-electric-violet">return</span> &lt;<span className="text-teal">SpeedWrapper</span> lcp=&quot;450ms&quot; /&gt;;</p>
        <p>&#125;</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-400">
          <span className="font-bold text-sm sm:text-base">100</span>
          <span className="text-[10px] text-paper/70 font-mono mt-0.5">Performance</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-400">
          <span className="font-bold text-sm sm:text-base">100</span>
          <span className="text-[10px] text-paper/70 font-mono mt-0.5">Accessibility</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-400">
          <span className="font-bold text-sm sm:text-base">100</span>
          <span className="text-[10px] text-paper/70 font-mono mt-0.5">Best Practices</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-400">
          <span className="font-bold text-sm sm:text-base">100</span>
          <span className="text-[10px] text-paper/70 font-mono mt-0.5">SEO</span>
        </div>
      </div>
    </div>
  );
}

function SocialSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">Instagram Organic Growth Engine</span>
        <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal">
          Viral Hook Matrix
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <div className="text-base sm:text-lg font-bold text-paper">1.4M</div>
          <div className="text-[10px] text-paper/40">Reels Plays</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <div className="text-base sm:text-lg font-bold text-teal">+8.2K</div>
          <div className="text-[10px] text-paper/40">Local Followers</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <div className="text-base sm:text-lg font-bold text-electric-blue">420+</div>
          <div className="text-[10px] text-paper/40">Direct DMs/Leads</div>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-2.5 text-[11px] text-paper/70 leading-relaxed">
        🔥 Strategy: Localized geo-hooks + high-retention audio pairing for Rajasthan &amp; Pan-India.
      </div>
    </div>
  );
}

function PpcSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">Meta &amp; Google Ads Live Feed</span>
        <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
          ● Active 4.8x ROAS
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <div className="text-[10px] text-paper/40">Ad Spend</div>
          <div className="text-base font-bold text-paper">₹25,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <div className="text-[10px] text-paper/40">Revenue Return</div>
          <div className="text-base font-bold text-teal">₹1,20,000</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <div className="text-[10px] text-paper/40">Cost Per Lead</div>
          <div className="text-base font-bold text-electric-cyan">₹42.50</div>
        </div>
      </div>
      <div className="text-[11px] text-paper/60 leading-relaxed">
        Targeted audiences: High-intent local geo-radius + Meta Lookalikes + Google Search Call-Only ads.
      </div>
    </div>
  );
}

function SeoSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">Google Maps 3-Pack &amp; AEO Ranker</span>
        <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal">
          #1 Map Pack Verified
        </span>
      </div>
      <div className="rounded-xl border border-teal/20 bg-teal/5 p-3.5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <span className="font-bold text-paper text-xs sm:text-sm">1. Bits and Builds (Your Brand)</span>
          <span className="text-amber-400 text-[11px]">★★★★★ (4.9 / 50+ reviews)</span>
        </div>
        <div className="text-[11px] text-paper/60">Sri Ganganagar, Rajasthan · 335002 · Open 9AM - 8PM</div>
        <div className="text-[11px] text-teal">✓ GMB Optimized · Geo-Grid Verified · AEO Schema Active</div>
      </div>
      <div className="text-[11px] text-paper/50 leading-relaxed">
        AI Search (ChatGPT, Perplexity &amp; Gemini) citations structured via JSON-LD LocalBusiness entities.
      </div>
    </div>
  );
}

function DesignSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">Vector Identity &amp; Design Kit</span>
        <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal">
          Figma Masters
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
        <div className="rounded-xl border border-white/10 bg-[#07090e] p-2.5 text-paper">Dark #07090E</div>
        <div className="rounded-xl border border-white/10 bg-[#00f2d5] p-2.5 text-ink font-bold">Teal #00F2D5</div>
        <div className="rounded-xl border border-white/10 bg-[#38bdf8] p-2.5 text-ink font-bold">Cyan #38BDF8</div>
        <div className="rounded-xl border border-white/10 bg-[#f8fafc] p-2.5 text-ink font-bold">Paper #F8FAFC</div>
      </div>
      <div className="text-[11px] text-paper/60 leading-relaxed">
        Deliverables: Responsive Vector Logos, Social Media Design Systems, Menus, Signage &amp; Collateral.
      </div>
    </div>
  );
}

function VideoSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">Viral Short-Form Timeline</span>
        <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal">
          4K 60FPS Render
        </span>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 space-y-2">
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-teal/20 px-2 py-0.5 text-teal text-[10px] shrink-0">00:00 - 00:02</span>
          <span className="text-paper/80 text-[11px] leading-snug">Hook Cut + Sound FX + Kinetic Text Pop</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-electric-blue/20 px-2 py-0.5 text-electric-blue text-[10px] shrink-0">00:03 - 00:28</span>
          <span className="text-paper/80 text-[11px] leading-snug">Fast Pacing + B-roll zooms + Subtitles</span>
        </div>
        <div className="flex items-start sm:items-center gap-2">
          <span className="rounded bg-electric-violet/20 px-2 py-0.5 text-electric-violet text-[10px] shrink-0">00:29 - 00:35</span>
          <span className="text-paper/80 text-[11px] leading-snug">Action CTA (Book / Visit / DM for pricing)</span>
        </div>
      </div>
    </div>
  );
}

function AutomationPreviewSimulator() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
        <span className="text-paper/60 text-[11px]">WhatsApp Cloud API Workflow</span>
        <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
          ● 24/7 Autopilot Booking
        </span>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 space-y-2 text-[11px]">
        <div className="flex items-center gap-2 text-paper/70">
          <span className="text-teal font-bold">1.</span> Patient / Customer sends &quot;Hi, I need an appointment&quot;
        </div>
        <div className="flex items-center gap-2 text-paper/70">
          <span className="text-teal font-bold">2.</span> Bot returns doctor slots + date selection in 1.2s
        </div>
        <div className="flex items-center gap-2 text-paper/70">
          <span className="text-teal font-bold">3.</span> Calendar syncs automatically + confirmation PDF dispatched
        </div>
        <div className="flex items-center gap-2 text-teal font-bold">
          <span className="text-teal">4.</span> Automated 2-hour reminder cuts no-shows by 80%
        </div>
      </div>
    </div>
  );
}
