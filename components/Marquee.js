"use client";

export default function Marquee({
  items,
  reverse = false,
  speed = "normal",
  className = "",
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className={`marquee-container overflow-hidden border-y border-charcoal/15 py-5 bg-charcoal text-white ${className}`}
    >
      <div
        className={`marquee-track ${reverse ? "reverse" : ""} ${
          speed === "fast" ? "fast" : ""
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 whitespace-nowrap font-anton text-2xl md:text-3xl tracking-wide text-white/90 transition-colors hover:text-yellow uppercase"
          >
            <span>{item}</span>
            <span className="font-mono text-yellow text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
