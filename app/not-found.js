"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Home, Sparkles, MessageSquare } from "lucide-react";
import TextRollButton from "@/components/TextRollButton";
import { WHATSAPP_URL, AGENCY_PHONE } from "@/lib/seo";

export default function NotFound() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize mouse at screen center
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMousePos({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const QUICK_LINKS = [
    { label: "Web Development (Next.js SSR)", href: "/services/web-development" },
    { label: "Local SEO & GMB", href: "/services/seo" },
    { label: "Paid Ads (PPC)", href: "/services/ppc" },
    { label: "Booking Automation", href: "/services/automation" },
    { label: "Studio Story", href: "/about" },
    { label: "Contact Brief", href: "/contact" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-5 sm:px-8 py-28 sm:py-36 overflow-hidden bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors select-none"
    >
      {/* 1. DYNAMIC SPOTLIGHT HOVER EFFECT LAYER */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0 will-change-transform"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(242, 194, 48, 0.18), transparent 70%)`
            : `radial-gradient(500px circle at 50% 45%, rgba(242, 194, 48, 0.12), transparent 70%)`,
        }}
      />

      {/* 2. ARCHITECTURAL SUBTLE GRID PATTERN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(120, 120, 120, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(120, 120, 120, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Numbered Badge Row */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 dark:border-white/15 bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 py-1.5 mb-8 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#F2C230] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-200">
            Error 404 · Route Not Located
          </span>
        </div>

        {/* Massive 404 Headline */}
        <div className="relative">
          <span
            className="text-[clamp(6rem,18vw,12rem)] font-medium leading-none tracking-[-0.05em] text-gray-900 dark:text-white select-none block"
            style={{
              fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
            }}
          >
            4<span className="text-[#F2C230] inline-block animate-bounce" style={{ animationDuration: "3s" }}>0</span>4
          </span>
        </div>

        {/* Sub-headline */}
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.12] tracking-tight text-gray-900 dark:text-white mt-4 max-w-xl">
          Lost in the digital architecture.
        </h1>

        {/* Narrative Description */}
        <p className="mt-3.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg font-normal">
          The page or parameter you requested does not exist on this server. Explore our core services catalog below or head back to the studio homepage.
        </p>

        {/* Action Buttons with TextRollButton */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <TextRollButton
            text="Back to Homepage"
            href="/"
            variant="gold"
          />
          <TextRollButton
            text="Explore Services"
            href="/services"
            variant="dark"
          />
        </div>

        {/* Quick Navigation Capability Chips */}
        <div className="mt-12 pt-8 border-t border-gray-200/80 dark:border-white/10 w-full">
          <span className="text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold block mb-3">
            Quick Navigation Pathways:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 hover:bg-[#F2C230] hover:text-gray-900 dark:hover:bg-[#F2C230] dark:hover:text-gray-900 border border-gray-200/70 dark:border-white/10 rounded-full px-3.5 py-1.5 transition-colors shadow-2xs"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Founder Assistance Help Link */}
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
          Looking for a custom integration or direct audit?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B88C14] dark:text-[#F2C230] font-semibold hover:underline"
          >
            Chat directly with Lavi &amp; Jass on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
