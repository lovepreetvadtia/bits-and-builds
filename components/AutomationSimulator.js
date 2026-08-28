"use client";

import React, { useState } from "react";
import TextRollButton from "@/components/TextRollButton";
import { WHATSAPP_URL } from "@/lib/seo";

export default function AutomationSimulator() {
  const [mode, setMode] = useState("hospital");
  const [hospitalStep, setHospitalStep] = useState(1);
  const [restaurantStep, setRestaurantStep] = useState(1);

  return (
    <section className="bg-[#0A0A0A] text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-white/10 overflow-hidden relative">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#F2C230]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Context & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F2C230] text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
                7
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-white border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
                Local Brand Automation Spotlight
              </span>
            </div>

            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
              Clinic appointments &amp; reservations that run themselves.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-xl">
              Never let your front-desk receptionist miss a high-value customer during peak hours.
              We build end-to-end WhatsApp &amp; SMS automated workflows for local hospitals, diagnostic
              centers, and restaurants.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "24/7 instant booking via WhatsApp without extra reception staff",
                "Real-time sync with Google Calendar & front-desk doctor dashboards",
                "Automated reminders with 1-click reschedule cutting 80% of no-shows",
                "Instant missed-call textback that captures customers before competitors",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-gray-900 text-xs font-bold font-mono">
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <TextRollButton
                text="Explore automation suite"
                href="/services/automation"
                variant="gold"
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-xs font-medium text-white transition-all duration-300"
              >
                <span>Request Custom Bot Demo</span>
                <span className="text-[#F2C230]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            {/* Mode Switcher */}
            <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md max-w-full">
              <button
                type="button"
                onClick={() => {
                  setMode("hospital");
                  setHospitalStep(1);
                }}
                className={`rounded-xl px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  mode === "hospital"
                    ? "bg-[#F2C230] text-gray-900 font-semibold shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🏥 Hospital &amp; Clinic Flow
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("restaurant");
                  setRestaurantStep(1);
                }}
                className={`rounded-xl px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  mode === "restaurant"
                    ? "bg-[#F2C230] text-gray-900 font-semibold shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🍽️ Restaurant Table Flow
              </button>
            </div>

            {/* Phone Screen Mockup */}
            <div className="w-full max-w-[380px] rounded-[32px] border-4 border-white/20 bg-black p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              {/* Phone Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 px-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-gray-900 font-bold text-sm">
                    {mode === "hospital" ? "🏥" : "🍽️"}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white truncate">
                      {mode === "hospital" ? "Apex Clinic Auto-Bot" : "Royal Dine Reservations"}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F2C230]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F2C230] animate-pulse shrink-0" />
                      <span className="truncate">Verified WhatsApp Cloud</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => (mode === "hospital" ? setHospitalStep(1) : setRestaurantStep(1))}
                  className="font-mono text-[10px] text-gray-400 hover:text-[#F2C230] shrink-0 ml-2"
                >
                  Reset ↺
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="py-4 space-y-3 min-h-[340px] text-xs">
                {mode === "hospital" ? (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white leading-relaxed">
                      👋 Welcome to Apex Clinic! How can we assist you today?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-[#F2C230]/20 border border-[#F2C230]/40 p-3 text-[#F2C230] font-medium text-right leading-relaxed">
                      I want to book an OPD doctor appointment.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2">
                      <p className="text-gray-300">Please select the consulting specialist:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setHospitalStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            hospitalStep >= 2
                              ? "bg-[#F2C230] text-gray-900 font-semibold"
                              : "bg-white/5 text-white hover:bg-white/15"
                          }`}
                        >
                          1. Dr. R. Sharma (Cardiology)
                        </button>
                        <button
                          type="button"
                          onClick={() => setHospitalStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            hospitalStep < 2 ? "bg-white/5 text-white hover:bg-white/15" : "bg-white/5 opacity-50"
                          }`}
                        >
                          2. Dr. V. Verma (Pediatrics)
                        </button>
                      </div>
                    </div>

                    {hospitalStep >= 2 && (
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-[#F2C230]/20 border border-[#F2C230]/40 p-3 text-[#F2C230] text-right leading-relaxed">
                        Selected: Dr. R. Sharma (Cardiology)
                      </div>
                    )}

                    {hospitalStep >= 2 && (
                      <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2">
                        <p className="text-gray-300">Available OPD Slots for Today:</p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setHospitalStep(3)}
                            className={`rounded-lg p-2 text-center text-[11px] font-mono flex-1 transition-colors ${
                              hospitalStep === 3
                                ? "bg-[#F2C230] text-gray-900 font-semibold"
                                : "bg-white/5 text-white hover:bg-white/15"
                            }`}
                          >
                            5:30 PM
                          </button>
                          <button
                            type="button"
                            onClick={() => setHospitalStep(3)}
                            className="rounded-lg p-2 text-center text-[11px] font-mono flex-1 bg-white/5 text-white hover:bg-white/15"
                          >
                            6:15 PM
                          </button>
                        </div>
                      </div>
                    )}

                    {hospitalStep >= 3 && (
                      <div className="rounded-2xl border border-[#F2C230]/60 bg-[#F2C230]/15 p-3 text-[#F2C230] space-y-1 leading-relaxed">
                        <div className="text-sm font-semibold flex items-center gap-1">
                          <span>✓</span> APPOINTMENT CONFIRMED!
                        </div>
                        <p className="text-[11px] text-gray-300">
                          Token #14 booked for 5:30 PM today. Google Maps directions &amp; confirmation sent to your WhatsApp.
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white leading-relaxed">
                      🍷 Welcome to Royal Dine! Would you like to reserve a dining table?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-[#F2C230]/20 border border-[#F2C230]/40 p-3 text-[#F2C230] font-medium text-right leading-relaxed">
                      Yes, table for 4 guests this evening.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2">
                      <p className="text-gray-300">Select your dining area:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setRestaurantStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            restaurantStep >= 2
                              ? "bg-[#F2C230] text-gray-900 font-semibold"
                              : "bg-white/5 text-white hover:bg-white/15"
                          }`}
                        >
                          🌟 Rooftop Courtyard (AC / Open Air)
                        </button>
                        <button
                          type="button"
                          onClick={() => setRestaurantStep(2)}
                          className="rounded-lg p-2.5 text-left text-[11px] font-mono bg-white/5 text-white hover:bg-white/15 leading-snug"
                        >
                          🍽️ Royal Indoor Dining Lounge
                        </button>
                      </div>
                    </div>

                    {restaurantStep >= 2 && (
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-[#F2C230]/20 border border-[#F2C230]/40 p-3 text-[#F2C230] text-right leading-relaxed">
                        Rooftop Courtyard, 8:00 PM tonight.
                      </div>
                    )}

                    {restaurantStep >= 2 && (
                      <div className="rounded-2xl border border-[#F2C230]/60 bg-[#F2C230]/15 p-3 text-[#F2C230] space-y-1 leading-relaxed">
                        <div className="text-sm font-semibold flex items-center gap-1">
                          <span>✓</span> TABLE #8 RESERVED FOR 4!
                        </div>
                        <p className="text-[11px] text-gray-300">
                          Digital menu &amp; location pin sent. Tap here to pre-order specials.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Phone Footer Bar */}
              <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white/5 p-2 text-[11px] text-gray-400 font-mono">
                <span className="text-[#F2C230]">⚡</span>
                <span className="truncate">Automated via Bits &amp; Builds Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
