"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react";
import { services } from "@/lib/services";
import {
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/lib/seo";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

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

  // Smooth scroll parallax calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = Math.min(Math.max((windowHeight - rect.top) * 0.09, 0), 120);
        setParallaxOffset(offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/lithos" || pathname === "/spotlight") {
    return <footer className="hidden" aria-hidden="true" />;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-[#f4f5f2] dark:bg-[#121814] text-charcoal dark:text-white transition-colors duration-300 pt-24 sm:pt-28 md:pt-32 border-t border-charcoal/10 dark:border-white/10 font-satoshi"
    >
      {/* 1. SCENIC ROLLING HILLS BACKGROUND LAYER WITH PARALLAX */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Landscape Image with dynamic parallax offset - extended top and bottom so it never gaps */}
        <div
          className="absolute -top-16 -bottom-16 inset-x-0 bg-cover bg-center md:bg-bottom opacity-50 dark:opacity-35 transition-transform duration-100 ease-out will-change-transform"
          style={{
            backgroundImage: `url('/images/footer-hills.webp')`,
            backgroundPosition: "center bottom",
            transform: `translate3d(0, -${Math.min(parallaxOffset, 30)}px, 0)`,
          }}
        />

        {/* Full-Height Atmospheric Readability Wash so text is 100% sharp and readable on any screen */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f2]/95 via-[#f4f5f2]/80 to-transparent dark:from-[#121814]/90 dark:via-[#121814]/75 dark:to-transparent" />

        {/* Subtle Ambient Color Tint */}
        <div className="absolute inset-0 bg-yellow/[0.02] dark:bg-charcoal/50 mix-blend-multiply" />
      </div>

      {/* 2. MAIN FOOTER CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* 4-Column Clean Grid (2 columns on mobile so Navigation/pages and Menu are side-by-side) */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 md:pb-16 items-start">
          
          {/* Column 1: Brand Info & Primary Action (Full width on mobile, 5 cols on desktop) */}
          <div className="col-span-2 lg:col-span-5 space-y-4">
            {/* Brand Logo & Name */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/logo.svg"
                  alt="Bits and Builds Logo"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_12px_rgba(255,225,124,0.25)]"
                />
              </div>
              <span className="font-satoshi font-bold text-base sm:text-lg tracking-tight text-charcoal dark:text-white">
                Bits and Builds
              </span>
            </Link>

            {/* Tagline / Subheading */}
            <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-gray-950 dark:text-white tracking-tight leading-snug max-w-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] dark:drop-shadow-none">
              Your high-contrast web &amp; digital growth engine.
            </h3>

            {/* Short Studio Description */}
            <p className="font-satoshi text-xs sm:text-[13px] font-medium text-gray-900 dark:text-gray-200 leading-relaxed max-w-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
              Bits and Builds brings sub-second Next.js engineering, Google Maps 3-Pack rankings, paid ads, and automated workflows into one studio.
            </p>

            {/* Gold Pill CTA Button with text-roll & arrow */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] text-gray-900 px-5 py-2.5 font-medium text-xs shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="h-2 w-2 rounded-full bg-gray-900 animate-pulse" />
                <span className="font-semibold">Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] transition-transform duration-300 group-hover:-rotate-45">
                  →
                </span>
              </Link>

              {/* Social Channels: Instagram & Facebook */}
              <div className="flex items-center gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bits and Builds on Instagram"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/90 dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 shadow-xs hover:scale-110"
                >
                  <InstagramIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bits and Builds on Facebook"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/90 dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all duration-300 shadow-xs hover:scale-110"
                >
                  <FacebookIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Copyright & Founder Signature */}
            <div className="pt-3 space-y-1.5 text-xs text-gray-900 dark:text-gray-200 font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
              <div>
                © {currentYear} Bits and Builds Studio · All rights reserved
              </div>

              {/* Founder Avatar Badge */}
              <div className="flex items-center gap-1.5 text-xs text-gray-900 dark:text-gray-200 font-medium">
                <span>Built with</span>
                <Heart className="h-3 w-3 fill-[#F2C230] text-[#F2C230]" />
                <span>by</span>
                <div className="flex items-center gap-1 font-semibold text-gray-950 dark:text-white">
                  <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-[#F2C230] text-gray-900 text-[9px] font-bold">
                    L
                  </span>
                  <span>Lavi</span>
                  <span className="text-gray-600 dark:text-white/60">&amp;</span>
                  <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-gray-950 dark:bg-white text-[#F2C230] dark:text-gray-900 text-[9px] font-bold">
                    J
                  </span>
                  <span>Jass</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services / Menu (1 Col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm sm:text-base text-gray-900 dark:text-white tracking-tight">
              Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 font-normal">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation / Pages (1 Col on mobile side-by-side with Menu, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm sm:text-base text-gray-900 dark:text-white tracking-tight">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 font-normal">
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block">
                  About Founders
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block">
                  Service Catalog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block">
                  Knowledge Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block">
                  Contact Studio
                </Link>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-flex items-center gap-1 text-gray-900 dark:text-[#F2C230] font-medium"
                >
                  <span>WhatsApp Direct</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-flex items-center gap-1"
                >
                  <span>Facebook</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Indexes (Replaced Capabilities) */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <h4 className="font-satoshi font-semibold text-sm sm:text-base text-gray-900 dark:text-white tracking-tight">
              Legal &amp; Index
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 font-normal">
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block"
                >
                  llms.txt
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-[#F2C230] transition-colors hover:translate-x-0.5 inline-block"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>

            {/* Direct Studio Contact & Location */}
            <div className="pt-3 border-t border-gray-200/80 dark:border-white/10 space-y-2 text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 font-normal">
              <div>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="group hover:text-black dark:hover:text-[#F2C230] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 text-[#F2C230] shrink-0" />
                  <span>{AGENCY_EMAIL}</span>
                </a>
              </div>
              <div>
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s+/g, '')}`}
                  className="group hover:text-black dark:hover:text-[#F2C230] transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5 text-[#F2C230] shrink-0" />
                  <span>{AGENCY_PHONE}</span>
                </a>
              </div>
              <div className="pt-1.5 text-[11px] sm:text-xs font-mono text-gray-600 dark:text-gray-400 space-y-1.5">
                <div className="inline-flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#F2C230] shrink-0 mt-0.5" />
                  <span>{AGENCY_LOCATION}</span>
                </div>
                <div className="inline-flex items-center gap-2 text-gray-800 dark:text-[#F2C230] font-medium">
                  <Clock className="h-3.5 w-3.5 text-[#F2C230] shrink-0" />
                  <span>{time || "IST"} · Open for Sprints</span>
                </div>
              </div>
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

      {/* 4. REFINED BOTTOM TYPOGRAPHY WORDMARK ("Bits and Builds" in warm yellowish with bit whitish blend) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none text-center px-6 sm:px-10 md:px-14 pt-4 sm:pt-8 md:pt-10 pb-2 sm:pb-3 z-10">
        <p
          aria-hidden="true"
          className="font-satoshi font-black tracking-tighter text-[9vw] sm:text-[9.2vw] md:text-[9.5vw] leading-[0.88] text-[#FFF6CC]/55 dark:text-[#FEF3C7]/45 drop-shadow-[0_4px_24px_rgba(242,194,48,0.2)] dark:drop-shadow-[0_6px_30px_rgba(255,225,124,0.2)] transition-all duration-300"
        >
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
