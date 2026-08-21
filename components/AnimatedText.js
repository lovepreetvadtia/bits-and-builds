"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  immediate = false,
  delay = 0,
  stagger = 0.035,
  variant = "words",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = containerRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word-inner");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 115,
          opacity: 0,
          rotateZ: variant === "rotate" ? 3 : 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 0.85,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: immediate
            ? undefined
            : {
                trigger: el,
                start: "top 88%",
                once: true,
              },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [immediate, delay, stagger, variant]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((w, i) => (
        <span className="split-word inline-block overflow-hidden align-top" key={i}>
          <span className="word-inner inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
