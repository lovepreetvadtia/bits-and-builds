"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Cpu, MessageSquare } from "lucide-react";
import RevealLayer from "./RevealLayer";
import { WHATSAPP_URL, AGENCY_LOCATION } from "@/lib/seo";

// High-resolution local WebP architectural assets for instant LCP
const BG_IMAGE_1 = "/images/hero-base.webp";
const BG_IMAGE_2 = "/images/hero-reveal.webp";

/**
 * Next.js Clean & High-Impact Spotlight Reveal Hero Section for Bits & Builds.
 * Implements 60fps RAF mouse lerp smoothing + hardware-accelerated CSS radial gradient dynamic mask.
 */
export default function NextSpotlightHero() {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const sectionRef = useRef(null);

  // Initialize cursor position and start 60fps RAF lerp loop
  useEffect(() => {
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight * 0.45;
      mouse.current = { x: centerX, y: centerY };
      smooth.current = { x: centerX, y: centerY };
      setCursorPos({ x: centerX, y: centerY });
    }

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      } else {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          mouse.current.x = e.touches[0].clientX - rect.left;
          mouse.current.y = e.touches[0].clientY - rect.top;
        } else {
          mouse.current.x = e.touches[0].clientX;
          mouse.current.y = e.touches[0].clientY;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const animate = () => {
      if (mouse.current.x !== -999 && mouse.current.y !== -999) {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-charcoal text-white selection:bg-yellow selection:text-charcoal z-0"
      style={{ height: "100dvh", minHeight: "100dvh" }}
    >
      {/* Layer 1: Base Image (z-1) with next/image priority for instant LCP */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-90 overflow-hidden">
        <Image
          src={BG_IMAGE_1}
          alt="Bits & Builds Digital Architecture"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover object-center hero-zoom"
        />
      </div>

      {/* Layer 2: Reveal Layer (z-2) - Dynamic Radial Gradient Mask */}
      <RevealLayer
        image={BG_IMAGE_2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
      />

      {/* Layer 2.5: Ambient Vignette & Contrast Gradients (z-3) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90 pointer-events-none"
        style={{ zIndex: 3 }}
      />

      {/* Layer 3: Central Headline Stack (z-10) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-none -translate-y-4 sm:translate-y-0"
        style={{ zIndex: 10 }}
      >
        {/* Staggered Dual-Typography Headline */}
        <h1 className="text-white leading-[0.96] tracking-tight">
          <span
            className="block font-playfair italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl hero-anim hero-reveal"
            style={{
              letterSpacing: "-0.04em",
              animationDelay: "0.25s",
            }}
          >
            We engineer brands
          </span>
          <span
            className="block font-anton font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-yellow -mt-1 hero-anim hero-reveal"
            style={{
              letterSpacing: "-0.03em",
              animationDelay: "0.42s",
            }}
          >
            THAT DOMINATE.
          </span>
        </h1>

        {/* Crisp Subtitle */}
        <p
          className="mt-3 sm:mt-4 max-w-xl font-satoshi text-xs sm:text-sm md:text-base text-white/85 leading-relaxed hero-anim hero-fade px-3 sm:px-4"
          style={{ animationDelay: "0.58s" }}
        >
          High-performance Next.js engineering, Google Maps 3-Pack rank dominance,
          and automated WhatsApp booking pipelines.
        </p>
      </div>

      {/* Layer 4: Bottom-Left Card (z-10) */}
      <div
        className="hidden md:block absolute bottom-8 left-8 md:left-12 max-w-[240px] hero-anim hero-fade pointer-events-auto bg-white/90 dark:bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-charcoal/15 dark:border-white/15 shadow-xl transition-colors duration-300"
        style={{ zIndex: 10, animationDelay: "0.7s" }}
      >
        <div className="flex items-center gap-1.5 mb-1 text-charcoal dark:text-yellow font-mono text-[11px] uppercase tracking-wider font-bold">
          <Layers size={13} className="text-yellow" />
          <span>Web Engineering</span>
        </div>
        <p className="text-xs text-charcoal/80 dark:text-white/75 leading-relaxed font-satoshi">
          Sub-second SSR performance, zero-bloat pure code, and 10–14 day kickoff to launch.
        </p>
      </div>

      {/* Layer 5: Bottom-Right CTA Card (z-10) */}
      <div
        className="absolute bottom-4 sm:bottom-7 left-4 right-4 sm:left-auto sm:right-8 md:right-12 max-w-full sm:max-w-[260px] flex flex-col items-start gap-2 sm:gap-2.5 hero-anim hero-fade pointer-events-auto bg-white/95 dark:bg-black/75 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-charcoal/15 dark:border-white/15 shadow-xl transition-colors duration-300"
        style={{ zIndex: 10, animationDelay: "0.85s" }}
      >
        <div className="flex items-center gap-1.5 text-charcoal dark:text-yellow font-mono text-[11px] uppercase tracking-wider font-bold">
          <Cpu size={13} className="text-yellow" />
          <span>Revenue Systems</span>
        </div>

        <p className="text-xs text-charcoal/80 dark:text-white/75 leading-relaxed font-satoshi">
          High-ROAS paid media, local search authority, and 24/7 automated pipelines.
        </p>

        <div className="flex items-center gap-2 w-full pt-0.5">
          <Link
            href="/contact"
            data-cursor-text="START"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-yellow hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal text-charcoal text-xs font-anton uppercase tracking-wider py-2.5 px-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-bold"
          >
            <span>Start Project</span>
            <ArrowUpRight size={14} />
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="WHATSAPP"
            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-charcoal/10 dark:bg-white/15 hover:bg-yellow hover:text-charcoal text-charcoal dark:text-white transition-all hover:scale-105 border border-charcoal/15 dark:border-white/20 shrink-0"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare size={13} />
          </a>
        </div>
      </div>

      {/* Interactive Cursor Spotlight Hint Pill (Desktop only) (z-10) */}
      <div
        className="hidden lg:flex absolute bottom-3.5 left-1/2 -translate-x-1/2 items-center gap-2 rounded-full border border-charcoal/15 dark:border-white/15 bg-white/80 dark:bg-black/50 px-3.5 py-1 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-charcoal/70 dark:text-white/60 shadow-lg pointer-events-none transition-colors duration-300"
        style={{ zIndex: 10 }}
      >
        <Sparkles size={11} className="text-yellow animate-pulse" />
        <span>Hover cursor to reveal the digital architecture</span>
      </div>
    </section>
  );
}
