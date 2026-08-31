"use client";

import React, { useState } from "react";
import Image from "next/image";
import TextRollButton from "@/components/TextRollButton";
import { WHATSAPP_URL } from "@/lib/seo";

export default function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 text-white border-t border-white/10">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#F2C230]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Small label */}
          <p className="text-[13px] sm:text-[14px] text-[#F2C230] tracking-wide font-medium">
            Start Your Next Sprint
          </p>

          {/* Heading h2 */}
          <h2
            className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white"
            style={{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}
          >
            Ready to engineer your
            <br className="hidden sm:block" />
            {" "}category dominance?
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal">
            Next.js web engineering, Google Maps 3-Pack rank dominance, and 24/7 automated booking engines. Direct partner access with Lavi &amp; Jass.
          </p>

          {/* Form */}
          <div className="w-full max-w-xl">
            {submitted ? (
              <div className="rounded-2xl bg-white/10 p-6 text-white text-center border border-white/15 animate-fade-in">
                <div className="text-xl font-semibold text-[#F2C230]">
                  ✓ Blueprint Request Received
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  Lavi &amp; Jass will review your project details and respond within 24 hours.
                </p>
                <div className="mt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F2C230] px-6 py-2.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-[#D9AC1F] transition-colors"
                  >
                    <span>Connect Instantly on WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 rounded-2xl sm:rounded-full bg-white/[0.08] hover:bg-white/[0.12] focus-within:bg-white/[0.14] p-2 border border-white/15 focus-within:border-[#F2C230]/70 backdrop-blur-xl shadow-2xl transition-all duration-300 w-full"
              >
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email or phone..."
                  className="flex-1 bg-transparent px-4 sm:px-5 py-3 text-sm text-white placeholder-gray-400 outline-none w-full"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-xl sm:rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] text-gray-900 px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-md hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1"
                >
                  <span>Get Free Audit</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <TextRollButton
              text="Start a project"
              href="/contact"
              variant="gold"
            />

            {/* Google Partner badge */}
            <div
              tabIndex={0}
              role="button"
              aria-label="Verified Google Partner agency"
              className="bg-white text-gray-900 rounded-[4px] px-3.5 py-2 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 select-none cursor-pointer"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center p-0.5 flex-shrink-0">
                <Image
                  src="/icons/logo.webp"
                  alt="B&B Shield Mark"
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 tracking-tight">
                Google Partner
              </span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white font-medium px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
