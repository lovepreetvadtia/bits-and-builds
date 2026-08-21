"use client";

import Link from "next/link";
import { useState } from "react";
import GsapTextReveal from "@/components/GsapTextReveal";

export default function BentoGridSection() {
  const [schemaTab, setSchemaTab] = useState("LocalBusiness");
  const [whatsappSent, setWhatsappSent] = useState(false);

  const schemas = {
    LocalBusiness: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bits & Builds Studio",
  "address": {
    "addressLocality": "Sri Ganganagar",
    "addressRegion": "Rajasthan",
    "postalCode": "335002"
  },
  "geo": { "latitude": "29.9038", "longitude": "73.8772" },
  "priceRange": "$$",
  "rating": 5.0
}`,
    MedicalClinic: `{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "City Care Hospital",
  "availableService": "Automated OPD Booking",
  "openingHours": "Mo-Sa 09:00-20:00",
  "hasMap": "https://maps.google.com/?cid=..."
}`,
  };

  return (
    <section className="relative px-6 py-28 md:px-10 bg-white dark:bg-charcoal grid-editorial-light dark:grid-editorial-40 text-charcoal dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 dark:border-white/10 pb-8">
          <div>
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>Full-Stack Modular Architecture</span>
            </div>
            <GsapTextReveal
              as="h2"
              variant="words"
              text="BUILT FOR SPEED. ENGINEERED FOR REVENUE."
              highlightWord="ENGINEERED"
              highlightClass="highlight-yellow"
              className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
            />
          </div>
          <p className="max-w-md font-satoshi text-base text-charcoal/70 dark:text-sage/80 leading-relaxed">
            Every layer of our stack is purpose-built to reduce friction, dominate Google search results, and convert visitors into recurring customers.
          </p>
        </div>

        {/* 3-Column Bento Grid with auto-rows ~400px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Feature 1 (SPANS 2 COLUMNS) - bg-#171e19 (Contrast dark) */}
          <div className="md:col-span-2 relative min-h-[420px] rounded-3xl bg-charcoal dark:bg-darkgray p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden shadow-2xl border border-sage/15 dark:border-white/10 card-editorial group">
            {/* Top row */}
            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs text-yellow font-bold">
                <span>✦ Edge SSR Engine</span>
              </div>
              <span className="font-mono text-xs text-sage/70 font-semibold">FEATURE 01</span>
            </div>

            {/* Middle: Abstract UI element - Speed Gauge & Animated Pulse Blocks */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 z-10">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between">
                <div className="font-mono text-[10px] uppercase text-sage/80">Lighthouse Score</div>
                <div className="font-anton text-4xl text-yellow mt-2">99/100</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-white/90">Performance Passed</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between">
                <div className="font-mono text-[10px] uppercase text-sage/80">Time to First Byte</div>
                <div className="font-anton text-4xl text-white mt-2">0.18s</div>
                <div className="font-mono text-[10px] text-sage/80 mt-2">Sub-Second Global Edge</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between">
                <div className="font-mono text-[10px] uppercase text-sage/80">Interaction to Next Paint</div>
                <div className="font-anton text-4xl text-yellow mt-2">24ms</div>
                <div className="font-mono text-[10px] text-sage/80 mt-2">Zero Input Lag</div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="z-10">
              <h3 className="font-anton text-3xl md:text-4xl text-white tracking-tight">
                NEXT.JS 14 SERVER-SIDE RENDERING
              </h3>
              <p className="mt-2 font-satoshi text-sm text-sage/90 max-w-xl">
                We reject slow, bloated website themes. Every page is statically or server rendered with zero layout shift and instant edge caching.
              </p>
            </div>

            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-yellow/10 blur-3xl" />
          </div>

          {/* Card 2: 1 COLUMN - Light/Dark adapted */}
          <div className="relative min-h-[420px] rounded-3xl bg-[#f8f9fa] dark:bg-charcoal-card p-8 text-charcoal dark:text-white flex flex-col justify-between border border-charcoal/10 dark:border-white/15 shadow-lg card-editorial">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 dark:bg-white/10 px-3 py-1 font-mono text-xs text-charcoal dark:text-yellow font-bold">
                <span>💬 24/7 Lead Capture</span>
              </div>
              <span className="font-mono text-xs text-charcoal/70 dark:text-sage/70 font-semibold">FEATURE 02</span>
            </div>

            {/* Interactive WhatsApp mini simulator */}
            <div className="my-4 rounded-2xl border border-charcoal/10 dark:border-white/10 bg-white dark:bg-darkgray p-4 shadow-sm space-y-3">
              <div className="flex items-center gap-2 border-b border-charcoal/5 dark:border-white/10 pb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] font-bold text-charcoal dark:text-white">
                  WhatsApp Cloud Bot
                </span>
              </div>
              <div className="rounded-lg bg-yellow/20 dark:bg-yellow/10 p-2.5 font-satoshi text-xs text-charcoal dark:text-white">
                👋 Hello! Ready to book your consultation at City Clinic?
              </div>
              {whatsappSent ? (
                <div className="rounded-lg bg-charcoal dark:bg-white text-white dark:text-charcoal p-2.5 font-satoshi text-xs animate-fade-in font-medium">
                  ✓ Slot booked for Tomorrow at 4:30 PM. Calendar sync complete!
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setWhatsappSent(true)}
                  className="w-full rounded-lg bg-charcoal dark:bg-yellow py-2 font-anton text-xs uppercase text-yellow dark:text-charcoal hover:bg-yellow hover:text-charcoal dark:hover:bg-white transition-colors shadow-xs"
                >
                  Test Auto-Booking Trigger
                </button>
              )}
            </div>

            <div>
              <h3 className="font-anton text-3xl text-charcoal dark:text-white tracking-tight">
                WHATSAPP AUTOMATION
              </h3>
              <p className="mt-2 font-satoshi text-xs text-charcoal/80 dark:text-sage/85 leading-relaxed">
                Connect patient appointments, restaurant tables, and customer inquiries directly to WhatsApp with zero missed calls.
              </p>
            </div>
          </div>

          {/* Card 3: 1 COLUMN */}
          <div className="relative min-h-[420px] rounded-3xl bg-[#f8f9fa] dark:bg-charcoal-card p-8 text-charcoal dark:text-white flex flex-col justify-between border border-charcoal/10 dark:border-white/15 shadow-lg card-editorial">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 dark:bg-white/10 px-3 py-1 font-mono text-xs text-charcoal dark:text-yellow font-bold">
                <span>📍 Local Pack Radar</span>
              </div>
              <span className="font-mono text-xs text-charcoal/70 dark:text-sage/70 font-semibold">FEATURE 03</span>
            </div>

            {/* GeoGrid Rank Visualizer */}
            <div className="my-4 rounded-2xl border border-charcoal/10 dark:border-white/10 bg-white dark:bg-darkgray p-4 shadow-sm">
              <div className="font-mono text-[10px] text-charcoal/70 dark:text-sage/70 uppercase mb-2 font-semibold">
                City Grid Geo-Rank (5km Radius)
              </div>
              <div className="grid grid-cols-5 gap-1.5 text-center font-anton text-xs">
                {[1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1].map(
                  (rank, i) => (
                    <div
                      key={i}
                      className="rounded py-1.5 bg-yellow text-charcoal font-bold shadow-xs border border-charcoal/10 hover:scale-110 transition-transform"
                    >
                      #{rank}
                    </div>
                  )
                )}
              </div>
              <div className="mt-2 text-center font-mono text-[10px] text-charcoal/70 dark:text-sage/75 font-semibold">
                #1 Dominance across 96% of City Search Grid
              </div>
            </div>

            <div>
              <h3 className="font-anton text-3xl text-charcoal dark:text-white tracking-tight">
                GOOGLE MAPS 3-PACK
              </h3>
              <p className="mt-2 font-satoshi text-xs text-charcoal/80 dark:text-sage/85 leading-relaxed">
                Rank in the top 3 spots on Google Maps for high-intent local queries in Sri Ganganagar, Rajasthan &amp; across India.
              </p>
            </div>
          </div>

          {/* Card 4: Feature 4 (SPANS 2 COLUMNS) - bg-#171e19 (Contrast dark) */}
          <div className="md:col-span-2 relative min-h-[420px] rounded-3xl bg-charcoal dark:bg-darkgray p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden shadow-2xl border border-sage/15 dark:border-white/10 card-editorial group">
            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs text-yellow font-bold">
                <span>⚡ AI Search Optimization</span>
              </div>
              <span className="font-mono text-xs text-sage/70 font-semibold">FEATURE 04</span>
            </div>

            {/* Dark interactive code snippet */}
            <div className="my-4 rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow" />
                  <span className="text-[11px] text-sage/80 font-semibold">schema-injector.json-ld</span>
                </div>
                <div className="flex gap-2">
                  {Object.keys(schemas).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSchemaTab(key)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        schemaTab === key ? "bg-yellow text-charcoal font-bold" : "text-sage/70 hover:text-white"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
              <pre className="text-yellow/90 overflow-x-auto text-[11px] leading-relaxed max-h-36">
                <code>{schemas[schemaTab]}</code>
              </pre>
            </div>

            <div className="z-10">
              <h3 className="font-anton text-3xl md:text-4xl text-white tracking-tight">
                AEO &amp; GEO GENERATIVE SEARCH READY
              </h3>
              <p className="mt-2 font-satoshi text-sm text-sage/90 max-w-xl">
                We structure your business entity data so ChatGPT, Perplexity, and Google AI Overviews cite and recommend your brand directly to searchers.
              </p>
            </div>

            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-yellow/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
