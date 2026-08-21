"use client";

import { useState } from "react";
import { WHATSAPP_URL, AGENCY_PHONE, AGENCY_EMAIL } from "@/lib/seo";

export default function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-yellow px-6 py-28 md:px-10 text-charcoal">
      {/* Background Decorative Elements: Massive 'Anton' text overlays with 10% opacity */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between overflow-hidden select-none opacity-10">
        <div className="font-anton text-[14vw] whitespace-nowrap leading-none tracking-tighter text-charcoal -translate-x-10">
          DOMINATE · SCALE · CONVERT · DOMINATE
        </div>
        <div className="font-anton text-[14vw] whitespace-nowrap leading-none tracking-tighter text-charcoal translate-x-10">
          SUB-SECOND · REVENUE · NEXT.JS · WHATSAPP
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] z-10">
        {/* Centralized Stack */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/30 bg-charcoal/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
            <span className="h-2 w-2 rounded-full bg-charcoal animate-ping" />
            <span>Ready for your digital breakthrough?</span>
          </div>

          {/* Anton Headline (8xl, leading-0.9) */}
          <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-charcoal tracking-tight leading-[0.9] uppercase">
            LET&apos;S BUILD YOUR <br />
            <span className="bg-charcoal text-yellow px-4 py-1 inline-block -rotate-1 rounded-lg shadow-brutalist">
              NEXT UNFAIR
            </span>{" "}
            ADVANTAGE.
          </h2>

          {/* Satoshi Subtext (2xl, max-w-2xl) */}
          <p className="font-satoshi text-lg sm:text-xl md:text-2xl text-charcoal/85 max-w-2xl leading-relaxed font-medium">
            Next.js web engineering, Google Maps 3-Pack rank dominance, and 24/7 automated WhatsApp pipelines. Let&apos;s talk numbers.
          </p>

          {/* Large Centered Form with Input and Button (bg-charcoal, shadow-xl, hover:scale-105) */}
          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="rounded-2xl bg-charcoal p-6 text-white shadow-2xl text-center border-2 border-charcoal animate-fade-in">
                <div className="font-anton text-2xl text-yellow">
                  ✓ BLUEPRINT REQUEST RECEIVED!
                </div>
                <p className="mt-2 font-satoshi text-sm text-sage/80">
                  Lavi &amp; Jass will review your city and domain details within 24 hours.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-2.5 font-anton text-xs uppercase text-charcoal shadow-sm hover:scale-105 transition-transform"
                >
                  <span>Connect Instantly on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl bg-white/70 p-2.5 backdrop-blur-md border border-charcoal/20 shadow-2xl"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email or phone..."
                  className="flex-1 rounded-xl bg-white px-5 py-4 font-satoshi text-sm text-charcoal placeholder-charcoal/50 outline-none border border-charcoal/10 focus:ring-2 focus:ring-charcoal"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal px-8 py-4 font-anton text-base uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black"
                >
                  <span>Get Free Audit</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>

          {/* Bottom Quick Connect Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-charcoal/20 font-mono text-xs font-semibold text-charcoal/80">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5"
            >
              <span>💬 Direct WhatsApp</span>
            </a>
            <span>•</span>
            <a href={`tel:${AGENCY_PHONE}`} className="hover:underline">
              📞 {AGENCY_PHONE}
            </a>
            <span>•</span>
            <a href={`mailto:${AGENCY_EMAIL}`} className="hover:underline">
              ✉️ {AGENCY_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
