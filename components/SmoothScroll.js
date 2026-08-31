"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Check if device is touch or mobile to prevent touch hijacking & forced reflows
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;

    // Initialize ultra-smooth Lenis instance for desktop mouse wheels
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isTouch,
      wheelMultiplier: 1.0,
      touchMultiplier: 0, // Never hijack native touch momentum on mobile devices
      infinite: false,
    });

    // Make global for programmatic scroll triggers
    window.__lenis = lenis;

    const progressBar = document.getElementById("scroll-progress");
    let ticking = false;

    const onScrollUpdate = (scrollVal) => {
      ScrollTrigger.update();

      const docEl = document.documentElement;
      const totalHeight = docEl.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? scrollVal / totalHeight : 0;
      const clamped = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(Math.round(clamped * 100));
      setShowScrollTop(scrollVal > 400);

      if (progressBar) {
        progressBar.style.transform = `scaleX(${clamped})`;
      }
      ticking = false;
    };

    lenis.on("scroll", (e) => {
      if (!ticking) {
        requestAnimationFrame(() => onScrollUpdate(e.scroll));
        ticking = true;
      }
    });

    // Native scroll listener for touch devices when Lenis is bypassed
    const handleNativeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => onScrollUpdate(window.scrollY));
        ticking = true;
      }
    };

    if (isTouch) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
    }

    // Handle internal anchor links with smooth glide
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href !== "#" && href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -90, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Sync GSAP RAF ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (isTouch) {
        window.removeEventListener("scroll", handleNativeScroll);
      }
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Golden-Yellow Glowing Progress Bar */}
      <div id="scroll-progress" aria-hidden="true" />

      {children}

      {/* Floating Kinetic Scroll-to-Top Orb */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          data-cursor-text="TOP"
          aria-label="Scroll back to top"
          className="fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 bg-yellow text-charcoal shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 animate-fade-in group"
        >
          <div className="flex flex-col items-center justify-center font-anton leading-none">
            <span className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
            <span className="font-mono text-[9px] font-bold text-charcoal/80">
              {scrollProgress}%
            </span>
          </div>
        </button>
      )}
    </>
  );
}
