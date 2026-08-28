"use client";

import React from "react";

export default function Marquee({
  items,
  reverse = false,
  speed = "normal",
  className = "",
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className={`marquee-container overflow-hidden border-y border-white/10 py-4 bg-[#0A0A0A] text-white ${className}`}
    >
      <div
        className={`marquee-track ${reverse ? "reverse" : ""} ${
          speed === "fast" ? "fast" : ""
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 whitespace-nowrap text-sm sm:text-base font-medium tracking-tight text-gray-300 transition-colors hover:text-[#F2C230]"
          >
            <span>{item}</span>
            <span className="text-[#F2C230] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
