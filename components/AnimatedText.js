"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Splits text into words, wraps each in a clipped span, and reveals them
 * on scroll (or immediately if `immediate` is set — used in the hero).
 */
export default function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  immediate = false,
  delay = 0,
  stagger = 0.045,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word-inner");

    const tween = gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: immediate
          ? undefined
          : {
              trigger: el,
              start: "top 85%",
              once: true,
            },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [immediate, delay, stagger]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((w, i) => (
        <span className="split-word" key={i}>
          <span className="word-inner inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
