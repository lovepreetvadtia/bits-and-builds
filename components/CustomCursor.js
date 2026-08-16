"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to(dot, { x: mouse.x, y: mouse.y, duration: 0.08, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.16;
      pos.y += (mouse.y - pos.y) * 0.16;
      gsap.set(ring, { x: pos.x, y: pos.y });
    });

    const updateCursorState = (e) => {
      const target = e.target.closest("[data-cursor-hover], [data-cursor-text], a, button, input, textarea, select");
      if (!target) {
        ring.classList.remove("is-hover", "is-text");
        setCursorText("");
        return;
      }

      const text = target.getAttribute("data-cursor-text");
      if (text) {
        setCursorText(text);
        ring.classList.add("is-text");
        ring.classList.remove("is-hover");
      } else {
        setCursorText("");
        ring.classList.add("is-hover");
        ring.classList.remove("is-text");
      }
    };

    window.addEventListener("mouseover", updateCursorState);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", updateCursorState);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label">
          {cursorText}
        </span>
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
