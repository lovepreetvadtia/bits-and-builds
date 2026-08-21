"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapTextReveal({
  text,
  as: Tag = "h2",
  className = "",
  highlightWord = "",
  highlightClass = "highlight-yellow",
  variant = "words",
  stagger = 0.035,
  delay = 0,
  scrub = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".gsap-token");
    if (!targets.length) return;

    let ctx = gsap.context(() => {
      if (variant === "scrub" || scrub) {
        gsap.fromTo(
          targets,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 55%",
              scrub: 1,
            },
          }
        );
      } else if (variant === "chars") {
        gsap.fromTo(
          targets,
          {
            yPercent: 120,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "expo.out",
            stagger,
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      } else {
        // Default words split with clean kinetic slide-up
        gsap.fromTo(
          targets,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "expo.out",
            stagger,
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [variant, stagger, delay, scrub]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, wIdx) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());

        return (
          <span
            key={wIdx}
            className={`inline-block overflow-hidden align-top ${
              isHighlight ? "overflow-visible" : ""
            }`}
          >
            {isHighlight ? (
              <span className={`inline-block ${highlightClass}`}>
                <span className="gsap-token inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ) : variant === "chars" ? (
              <span className="inline-block whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="gsap-token inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ) : (
              <span className="gsap-token inline-block will-change-transform">
                {word}
              </span>
            )}
            {wIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </Tag>
  );
}
