"use client";

import Link from "next/link";
import { AGENCY_PHONE, AGENCY_EMAIL, WHATSAPP_URL } from "@/lib/seo";

export default function FoundersSection() {
  return (
    <section className="relative border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal py-28 px-6 md:px-10 text-charcoal dark:text-white overflow-hidden grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 dark:border-white/10 pb-8">
          <div>
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>Leadership &amp; Engineering Craft</span>
            </div>
            <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
              BUILT BY FOUNDERS. <span className="highlight-yellow">RUN BY FOUNDERS.</span>
            </h2>
            <p className="mt-4 max-w-xl font-satoshi text-base text-charcoal/75 dark:text-sage/80 leading-relaxed">
              No junior interns or layers of bureaucracy. You work directly with Lavi and Jass from kickoff blueprint through live launch.
            </p>
          </div>

          <Link
            href="/about"
            data-cursor-text="STORY"
            className="font-anton text-xs uppercase tracking-widest text-charcoal dark:text-yellow hover:text-yellow dark:hover:text-white underline decoration-yellow decoration-2 underline-offset-4 inline-flex items-center gap-2"
          >
            <span>Read Studio Story</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder 1: Lavi */}
          <div className="group relative rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-8 md:p-10 transition-all duration-300 hover:border-yellow dark:hover:border-yellow shadow-lg card-editorial text-charcoal dark:text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow text-charcoal font-anton text-3xl font-bold shadow-brutalist border border-charcoal">
                  L
                </div>
                <div>
                  <h3 className="font-anton text-3xl text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow transition-colors tracking-wide">
                    LAVI
                  </h3>
                  <p className="font-mono text-xs text-charcoal/70 dark:text-yellow uppercase tracking-wider font-semibold">
                    Co-Founder &amp; Technical Director
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-charcoal/40 dark:text-sage/40">01</span>
            </div>

            <p className="mt-6 font-satoshi text-sm text-charcoal/80 dark:text-sage/85 leading-relaxed">
              &quot;My focus is technical precision: engineering websites on Next.js Server-Side
              Rendering that load in sub-second speeds, dominating Google Maps 3-Pack rankings for
              local businesses, and configuring AI search schemas (AEO &amp; GEO) so your brand is
              recommended by ChatGPT and Perplexity.&quot;
            </p>

            <div className="mt-8 border-t border-charcoal/10 dark:border-white/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 dark:text-sage/50 mb-3">
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
                    className="rounded-lg bg-white dark:bg-white/5 px-3 py-1 font-mono text-xs text-charcoal dark:text-white border border-charcoal/15 dark:border-white/10 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founder 2: Jass */}
          <div className="group relative rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-8 md:p-10 transition-all duration-300 hover:border-yellow dark:hover:border-yellow shadow-lg card-editorial text-charcoal dark:text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal dark:bg-white text-yellow dark:text-charcoal font-anton text-3xl font-bold shadow-brutalist border border-charcoal">
                  J
                </div>
                <div>
                  <h3 className="font-anton text-3xl text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow transition-colors tracking-wide">
                    JASS
                  </h3>
                  <p className="font-mono text-xs text-charcoal/70 dark:text-yellow uppercase tracking-wider font-semibold">
                    Co-Founder &amp; Creative Director
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-charcoal/40 dark:text-sage/40">02</span>
            </div>

            <p className="mt-6 font-satoshi text-sm text-charcoal/80 dark:text-sage/85 leading-relaxed">
              &quot;Great technology needs captivating storytelling and aggressive distribution. I
              architect paid acquisition campaigns on Meta and Google Ads, direct viral short-form
              Reels, and craft visual identities that make local clinics, restaurants, and brands look
              like multi-million dollar institutions.&quot;
            </p>

            <div className="mt-8 border-t border-charcoal/10 dark:border-white/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 dark:text-sage/50 mb-3">
                Core Domains:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "PPC (Meta & Google Ads)",
                  "Viral Reels & Short-Form Video",
                  "Brand Identity & Design",
                  "Conversion Copywriting",
                  "Clinic & Brand Scaling",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white dark:bg-white/5 px-3 py-1 font-mono text-xs text-charcoal dark:text-white border border-charcoal/15 dark:border-white/10 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location & Ethos Banner */}
        <div className="mt-12 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal text-white p-8 md:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-yellow">
                Headquarters · Sri Ganganagar, Rajasthan (335002)
              </p>
              <h3 className="font-anton text-3xl md:text-4xl text-white mt-2 tracking-tight">
                LOCAL CRAFTSMANSHIP, PAN-INDIA &amp; WORLDWIDE REACH.
              </h3>
              <p className="mt-2 max-w-2xl font-satoshi text-sm text-sage/80 leading-relaxed">
                Whether you need in-person strategy in Rajasthan or complete remote project delivery in Delhi, Mumbai, London, or Dubai — our workflows run seamlessly on WhatsApp and rapid development sprints.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="TALK"
              className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-8 py-4 font-anton text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
            >
              <span>Speak with Lavi &amp; Jass</span>
              <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
