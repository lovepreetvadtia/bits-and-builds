"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * 1. RotatingHeroWord (ReflexAI Hero Word Flipper)
 * Smoothly flips through rotating action phrases with vertical slide-up mask and blur fade.
 */
export function RotatingHeroWord({
  words = [
    "dominate their category",
    "rank #1 on Google Maps",
    "convert 3.8x higher",
    "automate 24/7 client booking",
  ],
  interval = 2800,
}) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 350); // transition time
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="inline-block relative overflow-hidden align-baseline select-none">
      <span
        className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-[#F2C230]/15 dark:bg-[#F2C230]/20 border border-[#F2C230]/40 text-[#F2C230] font-semibold transition-all duration-350 transform ${
          animating
            ? "-translate-y-full opacity-0 blur-xs scale-95"
            : "translate-y-0 opacity-100 blur-0 scale-100"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}

/**
 * 2. ScrollWordReveal (ReflexAI Scroll-Driven Word Scrub)
 * Splitted words smoothly illuminate from muted opacity to 100% as they scroll into view.
 */
export function ScrollWordReveal({
  text,
  className = "",
  highlightIndices = [],
}) {
  const containerRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from when element enters lower 85% to mid-screen (35%)
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.35;
      const current = rect.top;

      if (current >= start) {
        setRevealedCount(0);
      } else if (current <= end) {
        setRevealedCount(words.length);
      } else {
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
        const count = Math.floor(progress * words.length);
        setRevealedCount(count);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <span ref={containerRef} className={`inline ${className}`}>
      {words.map((word, i) => {
        const isRevealed = i <= revealedCount;
        const isHighlighted = highlightIndices.includes(i);

        return (
          <span
            key={i}
            className={`inline-block mr-[0.28em] transition-all duration-300 ${
              isRevealed
                ? isHighlighted
                  ? "text-[#F2C230] opacity-100 translate-y-0"
                  : "text-gray-900 dark:text-white opacity-100 translate-y-0"
                : "text-gray-400/40 dark:text-white/20 opacity-30 translate-y-1"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

/**
 * 3. KineticHeading (ReflexAI Masked Headline Reveal)
 * Smoothly slides up text from an overflow-hidden mask when entering viewport.
 */
export function KineticHeading({
  children,
  className = "",
  delay = 0,
  as: Component = "h2",
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`overflow-hidden ${className}`}>
      <span
        className={`block transition-all duration-700 transform ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-[110%] opacity-0"
        }`}
        style={{
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </span>
    </Component>
  );
}

/**
 * 4. OdometerCounter (ReflexAI Number Ticker)
 * Ticks up numbers smoothly when scrolled into view.
 */
export function OdometerCounter({
  target = 100,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "",
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const isDecimal = String(target).includes(".");
    const targetNum = parseFloat(target);
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (targetNum - start) * ease;

      setCount(isDecimal ? current.toFixed(1) : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className={`font-mono inline-flex items-baseline ${className}`}>
      <span>{prefix}</span>
      <span>{count}</span>
      <span>{suffix}</span>
    </span>
  );
}
