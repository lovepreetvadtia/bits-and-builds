"use client";

import React, { useState } from "react";
import Tilt3DCard from "@/components/Tilt3DCard";
import { KineticHeading, OdometerCounter } from "@/components/ReflexTextAnimations";

export default function BentoGridSection() {
  const [schemaTab, setSchemaTab] = useState("LocalBusiness");
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(schemas[schemaTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            4
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Full-Stack Modular Architecture
          </span>
        </div>

        {/* Heading h2 with ReflexAI Kinetic Mask Reveal */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <KineticHeading
            as="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white max-w-3xl"
          >
            Built for speed.
            <br className="hidden sm:block" />
            {" "}Engineered for category dominance.
          </KineticHeading>
          <p className="max-w-md text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            Every layer of our stack is purpose-built to eliminate friction, dominate search rankings, and convert traffic into recurring revenue.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Feature 1 (SPANS 2 COLUMNS) - Deep Black Card with 3D Tilt */}
          <Tilt3DCard maxTilt={5} scale={1.01} className="md:col-span-2 rounded-3xl h-full">
            <div className="relative min-h-[380px] sm:min-h-[420px] h-full rounded-3xl bg-[#0A0A0A] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden shadow-xl border border-white/10 group transition-all duration-300 hover:border-[#F2C230]/50 hover:shadow-[0_20px_50px_rgba(242,194,48,0.08)]">
              {/* Top row */}
              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs text-[#F2C230] font-medium">
                  <span>✦ Edge SSR Engine</span>
                </div>
                <span className="font-mono text-xs text-gray-400 font-semibold">FEATURE 01</span>
              </div>

              {/* Middle: Speed Gauge with ReflexAI Odometer Tickers */}
              <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 z-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between hover:bg-white/[0.08] transition-colors">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Lighthouse Score</div>
                  <div className="text-4xl font-semibold text-[#F2C230] mt-2">
                    <OdometerCounter target={99} suffix="/100" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-gray-300 font-medium">Performance Passed</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between hover:bg-white/[0.08] transition-colors">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Time to First Byte</div>
                  <div className="text-4xl font-semibold text-white mt-2">
                    <OdometerCounter target={0.18} suffix="s" />
                  </div>
                  <div className="text-[11px] text-gray-400 mt-2 font-medium">Sub-Second Global Edge</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col justify-between hover:bg-white/[0.08] transition-colors">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Interaction to Next Paint</div>
                  <div className="text-4xl font-semibold text-[#F2C230] mt-2">
                    <OdometerCounter target={24} suffix="ms" />
                  </div>
                  <div className="text-[11px] text-gray-400 mt-2 font-medium">Zero Input Lag</div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  Next.js 14 Server-Side Rendering
                </h3>
                <p className="mt-2 text-sm text-gray-300 max-w-xl leading-relaxed">
                  We reject bloated website themes. Every page is dynamically server-rendered with zero layout shift and instant edge caching.
                </p>
              </div>

              {/* Ambient background glow */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#F2C230]/10 blur-3xl" />
            </div>
          </Tilt3DCard>

          {/* Card 2: Feature 2 - WhatsApp Mini Simulator with 3D Tilt */}
          <Tilt3DCard maxTilt={6} scale={1.02} className="rounded-3xl h-full">
            <div className="relative min-h-[380px] sm:min-h-[420px] h-full rounded-3xl bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8 text-gray-900 dark:text-white flex flex-col justify-between border border-gray-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white/10 text-white dark:text-[#F2C230] px-3 py-1 text-xs font-medium">
                  <span>💬 24/7 Lead Capture</span>
                </div>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-semibold">FEATURE 02</span>
              </div>

              {/* Interactive WhatsApp mini simulator */}
              <div className="my-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] p-4 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-white/10 pb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[12px] font-semibold text-gray-900 dark:text-white">
                    WhatsApp Cloud Bot
                  </span>
                </div>
                <div className="rounded-lg bg-gray-100 dark:bg-white/5 p-2.5 text-xs text-gray-800 dark:text-gray-200 transition-all">
                  👋 Hello! Ready to book your consultation at City Clinic?
                </div>
                {whatsappSent ? (
                  <div className="rounded-lg bg-[#0A0A0A] dark:bg-black text-[#F2C230] p-2.5 text-xs font-medium animate-fade-in flex items-center justify-between">
                    <span>✓ Slot booked for Tomorrow at 4:30 PM!</span>
                    <span className="text-[10px] text-gray-400">Synced</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setWhatsappSent(true)}
                    className="w-full rounded-lg bg-[#F2C230] hover:bg-[#D9AC1F] text-gray-900 py-2 text-xs font-semibold transition-all hover:scale-[1.01] active:scale-95 shadow-sm"
                  >
                    Test Auto-Booking Trigger →
                  </button>
                )}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white tracking-tight">
                  WhatsApp Automation
                </h3>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  Connect patient appointments, restaurant tables, and customer inquiries directly to WhatsApp with zero missed opportunities.
                </p>
              </div>
            </div>
          </Tilt3DCard>


          {/* Card 3: Feature 3 - Local Pack Radar with 3D Tilt */}
          <Tilt3DCard maxTilt={6} scale={1.02} className="rounded-3xl h-full">
            <div className="relative min-h-[380px] sm:min-h-[420px] h-full rounded-3xl bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8 text-gray-900 dark:text-white flex flex-col justify-between border border-gray-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white/10 text-white dark:text-[#F2C230] px-3 py-1 text-xs font-medium">
                  <span>📍 Local Pack Radar</span>
                </div>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-semibold">FEATURE 03</span>
              </div>

              {/* GeoGrid Rank Visualizer */}
              <div className="my-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] p-4 shadow-sm">
                <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-medium">
                  City Grid Geo-Rank (5km Radius)
                </div>
                <div className="grid grid-cols-5 gap-1.5 text-center text-xs font-semibold">
                  {[1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1].map(
                    (rank, i) => (
                      <div
                        key={i}
                        className="rounded py-1.5 bg-[#F2C230] text-gray-900 font-semibold shadow-xs hover:scale-110 transition-transform cursor-pointer"
                        title={`Grid Node #${i + 1}: Rank #${rank}`}
                      >
                        #{rank}
                      </div>
                    )
                  )}
                </div>
                <div className="mt-2 text-center text-[11px] text-gray-600 dark:text-gray-300 font-medium">
                  #1 Dominance across 96% of City Search Grid
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white tracking-tight">
                  Google Maps 3-Pack
                </h3>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  Rank in the top 3 spots on Google Maps for high-intent local queries across Rajasthan, India &amp; beyond.
                </p>
              </div>
            </div>
          </Tilt3DCard>

          {/* Card 4: Feature 4 (SPANS 2 COLUMNS) - Deep Black Card with 3D Tilt */}
          <Tilt3DCard maxTilt={5} scale={1.01} className="md:col-span-2 rounded-3xl h-full">
            <div className="relative min-h-[380px] sm:min-h-[420px] h-full rounded-3xl bg-[#0A0A0A] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden shadow-xl border border-white/10 group transition-all duration-300 hover:border-[#F2C230]/50 hover:shadow-[0_20px_50px_rgba(242,194,48,0.08)]">
              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs text-[#F2C230] font-medium">
                  <span>⚡ AI Search Optimization</span>
                </div>
                <span className="font-mono text-xs text-gray-400 font-semibold">FEATURE 04</span>
              </div>

              {/* Interactive code snippet */}
              <div className="my-4 rounded-2xl border border-white/10 bg-black/80 p-4 font-mono text-xs z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F2C230]" />
                    <span className="text-[11px] text-gray-300 font-medium">schema-injector.json-ld</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {Object.keys(schemas).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSchemaTab(key)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                          schemaTab === key
                            ? "bg-[#F2C230] text-gray-900 font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-2 py-0.5 rounded border border-white/20 text-[10px] text-gray-300 hover:text-white hover:border-[#F2C230] transition-colors"
                      title="Copy JSON-LD"
                    >
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                </div>
                <pre className="text-[#F2C230] overflow-x-auto text-[11px] leading-relaxed max-h-36 font-mono">
                  <code>{schemas[schemaTab]}</code>
                </pre>
              </div>

              <div className="z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  AEO &amp; GEO Generative Search Ready
                </h3>
                <p className="mt-2 text-sm text-gray-300 max-w-xl leading-relaxed">
                  We structure your business entity data so ChatGPT, Perplexity, and Google AI Overviews cite and recommend your brand directly.
                </p>
              </div>

              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#F2C230]/10 blur-3xl" />
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
}
