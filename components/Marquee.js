"use client";

export default function Marquee({
  items,
  reverse = false,
  speed = "normal",
  className = "",
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={`marquee-container overflow-hidden border-y border-white/10 py-5 bg-ink ${className}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""} ${speed === "fast" ? "fast" : ""}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-xl md:text-2xl font-semibold text-paper/80 transition-colors hover:text-teal"
          >
            <span>{item}</span>
            <span className="font-mono text-teal text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
