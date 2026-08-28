"use client";

import React from "react";
import Link from "next/link";
import TextRollButton from "@/components/TextRollButton";
import Tilt3DCard from "@/components/Tilt3DCard";
import GsapTextReveal from "@/components/GsapTextReveal";

export default function FoundersSection() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
                9
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
                Studio Leadership
              </span>
            </div>

            <GsapTextReveal
              as="h2"
              text="Built by founders. Directed by founders."
              variant="chars"
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
              highlightWord="founders."
              highlightClass="text-[#F2C230]"
            />
            <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              No junior account managers or layers of agency bureaucracy. You work directly with Lavi and Jass from kickoff blueprint through live launch.
            </p>
          </div>

          <Link
            href="/about"
            className="text-xs uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] font-semibold transition-colors underline decoration-[#F2C230] decoration-2 underline-offset-4 inline-flex items-center gap-2"
          >
            <span>Read Studio Story</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2 Founders Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Founder 1: Lavi */}
          <Tilt3DCard maxTilt={6} scale={1.01} className="rounded-3xl h-full">
            <div className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] hover:bg-white dark:hover:bg-[#1a1a1a] p-8 sm:p-10 transition-all duration-300 hover:shadow-lg hover:border-[#F2C230]/40 text-gray-900 dark:text-white h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A0A0A] dark:bg-black text-[#F2C230] text-2xl font-bold shadow-sm transition-transform group-hover:scale-105 duration-300 border border-transparent dark:border-white/10"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      L
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                        Lavi
                      </h3>
                      <p className="text-xs font-semibold text-[#B88C14] dark:text-[#F2C230] uppercase tracking-wider mt-0.5">
                        Co-Founder &amp; Technical Director
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gray-400 font-semibold">01</span>
                </div>

                <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  &quot;My focus is technical precision: engineering websites on Next.js Server-Side
                  Rendering that load in sub-second speeds, dominating Google Maps 3-Pack rankings for
                  local businesses, and configuring AI search schemas (AEO &amp; GEO) so your brand is
                  recommended by ChatGPT and Perplexity.&quot;
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200/60 dark:border-white/10 pt-6">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                  Core Domains:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14 SSR",
                    "Local SEO & GMB Setup",
                    "AEO & GEO AI Search",
                    "Custom Web Architecture",
                    "WhatsApp API Automation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white dark:bg-white/5 px-3 py-1 text-xs text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 shadow-xs font-medium transition-colors group-hover:border-gray-300 dark:group-hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt3DCard>

          {/* Founder 2: Jass */}
          <Tilt3DCard maxTilt={6} scale={1.01} className="rounded-3xl h-full">
            <div className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] hover:bg-white dark:hover:bg-[#1a1a1a] p-8 sm:p-10 transition-all duration-300 hover:shadow-lg hover:border-[#F2C230]/40 text-gray-900 dark:text-white h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2C230] text-gray-900 text-2xl font-bold shadow-sm transition-transform group-hover:scale-105 duration-300"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      J
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                        Jass
                      </h3>
                      <p className="text-xs font-semibold text-[#B88C14] dark:text-[#F2C230] uppercase tracking-wider mt-0.5">
                        Co-Founder &amp; Creative Director
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gray-400 font-semibold">02</span>
                </div>

                <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  &quot;My focus is creative velocity and paid customer acquisition: building high-ROAS
                  Meta and Google ad campaigns, designing luxury brand aesthetics that command premium
                  pricing, and scripting high-retention short-form video reels that build community
                  loyalty.&quot;
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200/60 dark:border-white/10 pt-6">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                  Core Domains:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Meta & Google Paid Ads",
                    "Performance Creative Direction",
                    "High-ROAS Funnel Strategy",
                    "Short-Form Video & Reels",
                    "Brand Identity & Positioning",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white dark:bg-white/5 px-3 py-1 text-xs text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 shadow-xs font-medium transition-colors group-hover:border-gray-300 dark:group-hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </div>

        {/* Direct Call to Action */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
              Want to speak directly with Lavi and Jass?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              We schedule 20-minute kickoff audits to review your exact market opportunity.
            </p>
          </div>
          <TextRollButton
            text="Schedule partner call"
            href="/contact"
            variant="gold"
          />
        </div>
      </div>
    </section>
  );

}
