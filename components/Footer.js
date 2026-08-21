"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import {
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
} from "@/lib/seo";

export default function Footer() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

  if (pathname === "/lithos" || pathname === "/spotlight") {
    return null;
  }

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#f4f5f2] dark:bg-[#121814] text-charcoal dark:text-white transition-colors duration-300 pt-12 md:pt-16 border-t border-charcoal/10 dark:border-white/10 font-satoshi">
      {/* 1. SCENIC ROLLING HILLS BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Landscape Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-bottom opacity-85 dark:opacity-40 transition-opacity duration-500"
          style={{
            backgroundImage: `url('/images/footer-hills.webp')`,
            backgroundPosition: "center 68%",
          }}
        />

        {/* Top Smooth Fade Mask (blends from page bg into landscape) */}
        <div className="absolute inset-x-0 top-0 h-36 md:h-52 bg-gradient-to-b from-[#f4f5f2] via-[#f4f5f2]/80 to-transparent dark:from-[#121814] dark:via-[#121814]/85 dark:to-transparent" />

        {/* Subtle Ambient Color Tint */}
        <div className="absolute inset-0 bg-yellow/[0.02] dark:bg-charcoal/50 mix-blend-multiply" />

        {/* Bottom Atmospheric Mist Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-36 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-[#121814] dark:via-[#121814]/60 dark:to-transparent" />
      </div>

      {/* 2. MAIN FOOTER CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* 4-Column SaaS / Studio Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 md:pb-16 items-start">
          
          {/* Column 1: Brand Info & Primary Action (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Brand Logo & Name */}
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-charcoal dark:bg-white text-yellow dark:text-charcoal font-anton text-xs font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
                BB
              </div>
              <span className="font-satoshi font-bold text-base tracking-tight text-charcoal dark:text-white">
                Bits and Builds
              </span>
            </Link>

            {/* Tagline / Subheading */}
            <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-charcoal dark:text-white tracking-tight leading-snug max-w-sm">
              Your high-contrast web &amp; digital growth engine.
            </h3>

            {/* Short Studio Description */}
            <p className="font-satoshi text-xs text-charcoal/80 dark:text-sage/85 leading-relaxed max-w-sm">
              Bits and Builds brings sub-second Next.js engineering, Google Maps 3-Pack rankings, paid ads, and automated workflows into one studio.
            </p>

            {/* Black Pill CTA Button (like Cooldock "Download for macOS") */}
            <div className="pt-1">
              <Link
                href="/contact"
                data-cursor-text="START"
                className="group inline-flex items-center gap-2.5 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal px-4 py-2 font-satoshi text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse" />
                <span>Start a Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Copyright & Founder Signature */}
            <div className="pt-3 space-y-1.5 text-xs text-charcoal/70 dark:text-sage/70">
              <div>
                © {currentYear} Bits and Builds Studio · All rights reserved
              </div>

              {/* Founder Avatar Badge (like "Built with 💛 by Solt Wagner") */}
              <div className="flex items-center gap-1.5 text-xs text-charcoal/80 dark:text-sage/85">
                <span>Built with</span>
                <span className="text-yellow">💛</span>
                <span>by</span>
                <div className="flex items-center gap-1 font-semibold text-charcoal dark:text-white">
                  <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-yellow text-charcoal text-[9px] font-bold">
                    L
                  </span>
                  <span>Lavi</span>
                  <span className="text-charcoal/60 dark:text-white/60">&amp;</span>
                  <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-charcoal dark:bg-white text-yellow dark:text-charcoal text-[9px] font-bold">
                    J
                  </span>
                  <span>Jass</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services / Menu (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm text-charcoal dark:text-white">
              Menu
            </h4>
            <ul className="space-y-2 text-xs text-charcoal/80 dark:text-sage/85">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block font-normal"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm text-charcoal dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-charcoal/80 dark:text-sage/85">
              <li>
                <Link href="/" className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block">
                  About Founders
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block">
                  Service Catalog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block">
                  Knowledge Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-block">
                  Contact Studio
                </Link>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal dark:hover:text-yellow transition-colors hover:translate-x-0.5 inline-flex items-center gap-1"
                >
                  <span>WhatsApp Direct</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Capabilities (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm text-charcoal dark:text-white">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-charcoal/80 dark:text-sage/85">
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  Next.js 14 Server-Side (SSR)
                </span>
              </li>
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  Google Maps 3-Pack Dominance
                </span>
              </li>
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  Meta Ads &amp; Server-Side CAPI
                </span>
              </li>
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  WhatsApp Cloud API Automation
                </span>
              </li>
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  Generative Engine Optimization (GEO)
                </span>
              </li>
              <li>
                <span className="hover:text-charcoal dark:hover:text-yellow transition-colors cursor-default">
                  Figma Vector Design Systems
                </span>
              </li>
            </ul>

            {/* Quick Location & Time */}
            <div className="pt-2 text-[11px] font-mono text-charcoal/70 dark:text-sage/80 space-y-0.5">
              <div>📍 {AGENCY_LOCATION}</div>
              <div className="text-charcoal dark:text-yellow font-medium">⏱ {time || "IST"} · Open for Sprints</div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FLOATING SOARING BIRD SILHOUETTE (Micro-Aesthetic from Reference Image) */}
      <div
        className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-8 pointer-events-none select-none opacity-35 dark:opacity-25 hidden md:block"
        aria-hidden="true"
      >
        <svg
          width="40"
          height="26"
          viewBox="0 0 100 65"
          fill="currentColor"
          className="text-charcoal/80 dark:text-white/60"
        >
          <path d="M0,28 C18,20 35,5 50,22 C65,5 82,20 100,28 C80,34 65,30 50,45 C35,30 20,34 0,28 Z" />
        </svg>
      </div>

      {/* 4. REFINED BOTTOM TYPOGRAPHY WORDMARK ("Bits and Builds" in clean modern geometric sans) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none text-center px-6 sm:px-10 md:px-14 pt-6 sm:pt-10 md:pt-14 pb-2 sm:pb-4 z-10">
        <p aria-hidden="true" className="font-satoshi font-black tracking-tighter text-[9vw] sm:text-[9.2vw] md:text-[9.5vw] leading-[0.88] text-white/70 dark:text-yellow/50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_6px_30px_rgba(255,225,124,0.15)] transition-all duration-300">
          Bits and Builds
        </p>
      </div>

      {/* Back to top floating pill button at bottom right */}
      <button
        type="button"
        onClick={scrollToTop}
        data-cursor-text="TOP"
        className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-md border border-charcoal/15 dark:border-white/20 text-charcoal dark:text-white font-satoshi text-xs font-bold shadow-md hover:scale-110 hover:bg-yellow hover:text-charcoal transition-all duration-300"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
