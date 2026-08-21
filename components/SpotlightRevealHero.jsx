"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, ArrowUpRight, ArrowLeft } from "lucide-react";
import RevealLayer from "./RevealLayer";

const BG_IMAGE_1_LITHOS =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2_LITHOS =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const BG_IMAGE_1_BB =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop";
const BG_IMAGE_2_BB =
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1920&auto=format&fit=crop";

const NAV_ITEMS = [
  { label: "Course", active: true },
  { label: "Field Guides", active: false },
  { label: "Geology", active: false },
  { label: "Plans", active: false },
  { label: "Live Tour", active: false },
];

/**
 * Pure React 18 Spotlight Reveal Hero Component.
 * Runs in standard React (Vite / CRA) as well as Next.js.
 *
 * @param {Object} props
 * @param {'lithos' | 'bits-and-builds'} [props.initialMode='lithos'] - Initial theme mode
 * @param {boolean} [props.showModeSwitcher=true] - Whether to show the mode toggle pill
 * @param {boolean} [props.isStandalone=true] - Whether rendered as standalone page or embedded
 * @param {boolean} [props.showNavbar=true] - Whether to render top navigation (only if standalone)
 */
export default function SpotlightRevealHero({
  initialMode = "lithos",
  showModeSwitcher = true,
  isStandalone = true,
  showNavbar = true,
}) {
  const [mode, setMode] = useState(initialMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Course");
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const sectionRef = useRef(null);

  const isLithos = mode === "lithos";
  const baseImage = isLithos ? BG_IMAGE_1_LITHOS : BG_IMAGE_1_BB;
  const revealImage = isLithos ? BG_IMAGE_2_LITHOS : BG_IMAGE_2_BB;

  // Initialize cursor position on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = isStandalone ? window.innerHeight * 0.45 : 300;
      mouse.current = { x: centerX, y: centerY };
      smooth.current = { x: centerX, y: centerY };
      setCursorPos({ x: centerX, y: centerY });
    }
  }, [isStandalone]);

  // Smooth lerp mouse tracking loop (smooth.x += (mouse.x - smooth.x) * 0.1)
  useEffect(() => {
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
    <div
      className={
        isStandalone
          ? "min-h-screen bg-white tracking-[-0.02em] relative selection:bg-[#e8702a] selection:text-white"
          : "w-full h-full relative overflow-hidden bg-black tracking-[-0.02em]"
      }
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ---------- FIXED NAVIGATION (ONLY IN STANDALONE MODE) ---------- */}
      {isStandalone && showNavbar && (
        <nav
          className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-all duration-300"
          style={{ zIndex: 100 }}
        >
          {/* Left: SVG Logo + Wordmark */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-1.5 text-xs font-mono uppercase bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors backdrop-blur-md"
              title="Back to Bits & Builds"
            >
              <ArrowLeft size={14} />
              <span>Agency</span>
            </a>

            <div className="flex items-center gap-2.5 text-white">
              <svg
                width="26"
                height="26"
                viewBox="0 0 256 256"
                fill="#ffffff"
                className="transition-transform hover:rotate-12 duration-300"
              >
                <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
              </svg>
              <span className="text-white text-2xl font-playfair italic font-medium">
                Lithos
              </span>
            </div>
          </div>

          {/* Center Pill Navigation (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveNav(item.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeNav === item.label
                    ? "bg-white/25 text-white shadow-sm font-semibold"
                    : "text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right CTA (Desktop) + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert("Welcome to Lithos sign up portal!")}
              className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      )}

      {/* ---------- MOBILE SLIDE-DOWN DRAWER ---------- */}
      {isStandalone && showNavbar && mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-[99] rounded-2xl bg-black/90 backdrop-blur-xl border border-white/20 p-6 shadow-2xl text-white animate-fade-in">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setActiveNav(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  activeNav === item.label
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Sign Up");
              }}
              className="mt-2 w-full bg-white text-gray-900 font-semibold py-3 rounded-full text-center hover:bg-gray-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* ---------- HERO SECTION ---------- */}
      <section
        ref={sectionRef}
        className={
          isStandalone
            ? "relative w-full overflow-hidden h-screen bg-black"
            : "relative w-full overflow-hidden h-full min-h-[550px] bg-black"
        }
        style={isStandalone ? { height: "100dvh" } : undefined}
      >
        {/* Layer 1: Base Image (z-1) with hero-zoom Ken Burns */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom pointer-events-none"
          style={{
            backgroundImage: `url(${baseImage})`,
            zIndex: 1,
          }}
        />

        {/* Layer 2: Reveal Layer (z-2) - Dynamic Radial Gradient Canvas Mask */}
        <RevealLayer
          image={revealImage}
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
        />

        {/* Layer 3: Heading (z-10) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <h1 className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-4xl sm:text-6xl md:text-7xl hero-anim hero-reveal"
              style={{
                letterSpacing: "-0.05em",
                animationDelay: "0.25s",
              }}
            >
              {isLithos ? "Layers hold" : "Code holds"}
            </span>
            <span
              className="block font-normal text-4xl sm:text-6xl md:text-7xl -mt-1 hero-anim hero-reveal"
              style={{
                letterSpacing: "-0.08em",
                animationDelay: "0.42s",
              }}
            >
              {isLithos ? "tales of time" : "layers of growth"}
            </span>
          </h1>
        </div>

        {/* Layer 4: Bottom-Left Paragraph (z-10) - Hidden on mobile */}
        <div
          className={
            isStandalone
              ? "hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] hero-anim hero-fade pointer-events-auto"
              : "hidden sm:block absolute bottom-8 left-8 md:left-10 max-w-[240px] hero-anim hero-fade pointer-events-auto"
          }
          style={{ zIndex: 10, animationDelay: "0.7s" }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            {isLithos
              ? "Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us."
              : "Every layer of web architecture records a milestone in user conversion, from sub-second SSR to automated booking pipelines."}
          </p>
        </div>

        {/* Layer 5: Bottom-Right Block (z-10) */}
        <div
          className={
            isStandalone
              ? "absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade pointer-events-auto"
              : "absolute bottom-6 sm:bottom-8 left-5 right-5 sm:left-auto sm:right-8 md:right-10 max-w-full sm:max-w-[240px] flex flex-col items-start gap-3 sm:gap-4 hero-anim hero-fade pointer-events-auto"
          }
          style={{ zIndex: 10, animationDelay: "0.85s" }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            {isLithos
              ? "Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet."
              : "Our interactive engineering stacks let you peel back the UI to trace how high-ROAS ads, Next.js speed, and automation shape your brand."}
          </p>

          <button
            type="button"
            onClick={() => {
              if (isLithos) {
                alert("Exploring geological strata with Lithos Interactive Maps!");
              } else {
                window.location.href = "/contact";
              }
            }}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer flex items-center gap-2"
          >
            <span>{isLithos ? "Start Digging" : "Start Building"}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mode Switcher Pill */}
        {showModeSwitcher && (
          <div
            className={
              isStandalone
                ? "absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 z-[60] bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-2xl"
                : "absolute top-4 right-4 z-[60] bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xl"
            }
            style={{ zIndex: 60 }}
          >
            <div className="flex items-center gap-1.5 text-xs text-white/60 font-mono pr-1 hidden sm:flex">
              <Sparkles size={13} className="text-[#e8702a] animate-pulse" />
              <span>Theme:</span>
            </div>
            <button
              type="button"
              onClick={() => setMode("lithos")}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                isLithos
                  ? "bg-[#e8702a] text-white shadow-md font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Lithos
            </button>
            <button
              type="button"
              onClick={() => setMode("bits-and-builds")}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                !isLithos
                  ? "bg-yellow text-charcoal shadow-md font-bold"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Bits &amp; Builds
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
