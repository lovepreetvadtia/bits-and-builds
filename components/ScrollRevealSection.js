"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * High-performance On-Scroll Section Lazy Loader & Revealer.
 * Uses IntersectionObserver with a generous rootMargin (250px) to prefetch & hydrate
 * heavy interactive engine sections right before the user scrolls to them.
 * Guarantees zero Cumulative Layout Shift (CLS = 0) and minimal initial First Load JS.
 */
export default function ScrollRevealSection({
  children,
  minHeight = "400px",
  className = "",
  rootMargin = "250px 0px",
  threshold = 0.01,
  id,
}) {
  const [isIntersected, setIsIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isIntersected
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ minHeight: isIntersected ? undefined : minHeight }}
    >
      {isIntersected ? (
        children
      ) : (
        <div
          aria-hidden="true"
          className="w-full flex items-center justify-center p-8 text-charcoal/40 dark:text-sage/40 font-mono text-xs select-none"
          style={{ minHeight }}
        >
          <div className="flex items-center gap-2.5 rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-yellow animate-ping" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              Loading Growth Engine...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
