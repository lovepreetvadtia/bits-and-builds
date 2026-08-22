"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/seo";

export default function AutomationSimulator() {
  const [mode, setMode] = useState("hospital");
  const [hospitalStep, setHospitalStep] = useState(1);
  const [restaurantStep, setRestaurantStep] = useState(1);

  return (
    <section className="relative border-t border-charcoal/15 bg-charcoal text-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden grid-editorial-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Value Prop */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="badge-editorial">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>Local Brand Automation Spotlight</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[0.92]">
              CLINIC APPOINTMENTS &amp; TABLE BOOKINGS THAT{" "}
              <span className="highlight-yellow">RUN THEMSELVES.</span>
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-sage/80 leading-relaxed max-w-xl">
              Never let your front-desk receptionist miss a high-value customer during rush hours.
              We build end-to-end WhatsApp &amp; SMS automation for local hospitals, diagnostic
              centers, and restaurants in Sri Ganganagar, Rajasthan and across India.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "24/7 instant booking via WhatsApp without hiring extra reception staff",
                "Direct real-time sync with Google Calendar & front-desk doctor dashboards",
                "Automated reminders with 1-click reschedule to eliminate 80% of no-shows",
                "Automated missed-call textback that captures customers immediately",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 font-satoshi text-sm text-sage/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-yellow text-xs font-bold font-mono">
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/services/automation"
                data-cursor-text="AUTOMATION"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-8 py-4 font-anton text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
              >
                <span>Explore Automation Suite</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-yellow/40 bg-yellow/5 px-6 py-4 font-anton text-sm uppercase tracking-wider text-yellow hover:bg-yellow/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Request Custom Bot Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            {/* Mode Switcher */}
            <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-darkgray p-1.5 backdrop-blur-md max-w-full">
              <button
                type="button"
                onClick={() => {
                  setMode("hospital");
                  setHospitalStep(1);
                }}
                className={`rounded-xl px-4 py-2 font-anton text-xs uppercase tracking-wider transition-all ${
                  mode === "hospital"
                    ? "bg-yellow text-charcoal shadow-sm"
                    : "text-sage/70 hover:text-white"
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
                className={`rounded-xl px-4 py-2 font-anton text-xs uppercase tracking-wider transition-all ${
                  mode === "restaurant"
                    ? "bg-yellow text-charcoal shadow-sm"
                    : "text-sage/70 hover:text-white"
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
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow text-charcoal font-bold text-sm font-anton">
                    {mode === "hospital" ? "🏥" : "🍽️"}
                  </div>
                  <div className="min-w-0">
                    <div className="font-anton text-xs text-white truncate tracking-wide">
                      {mode === "hospital" ? "Apex Clinic Auto-Bot" : "Royal Dine Reservations"}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-yellow">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse shrink-0" />
                      <span className="truncate">Verified WhatsApp Cloud</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => (mode === "hospital" ? setHospitalStep(1) : setRestaurantStep(1))}
                  className="font-mono text-[10px] text-sage/50 hover:text-yellow shrink-0 ml-2"
                >
                  Reset ↺
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="py-4 space-y-3 min-h-[340px] text-xs font-satoshi">
                {mode === "hospital" ? (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white leading-relaxed">
                      👋 Welcome to Apex Clinic! How can we assist you today?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-yellow/20 border border-yellow/40 p-3 text-yellow font-medium text-right leading-relaxed">
                      I want to book an OPD doctor appointment.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2">
                      <p className="text-sage/90">Please select the consulting specialist:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setHospitalStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            hospitalStep >= 2
                              ? "bg-yellow text-charcoal font-bold"
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
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-yellow/20 border border-yellow/40 p-3 text-yellow text-right animate-fade-in leading-relaxed">
                        Selected: Dr. R. Sharma (Cardiology)
                      </div>
                    )}

                    {hospitalStep >= 2 && (
                      <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2 animate-fade-in">
                        <p className="text-sage/90">Available OPD Slots for Today:</p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setHospitalStep(3)}
                            className={`rounded-lg p-2 text-center text-[11px] font-mono flex-1 transition-colors ${
                              hospitalStep === 3
                                ? "bg-yellow text-charcoal font-bold"
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
                      <div className="rounded-2xl border border-yellow/60 bg-yellow/15 p-3 text-yellow space-y-1 animate-fade-in leading-relaxed">
                        <div className="font-anton text-sm flex items-center gap-1">
                          <span>✓</span> APPOINTMENT CONFIRMED!
                        </div>
                        <p className="text-[10px] text-sage/90 font-satoshi">
                          Token #14 booked for 5:30 PM today. Google Maps directions &amp; reminder
                          PDF sent to your WhatsApp.
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white leading-relaxed">
                      🍷 Welcome to Royal Dine! Would you like to reserve a dining table?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-yellow/20 border border-yellow/40 p-3 text-yellow font-medium text-right leading-relaxed">
                      Yes, table for 4 guests this evening.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-white space-y-2">
                      <p className="text-sage/90">Select your dining area:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setRestaurantStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            restaurantStep >= 2
                              ? "bg-yellow text-charcoal font-bold"
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
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-yellow/20 border border-yellow/40 p-3 text-yellow text-right animate-fade-in leading-relaxed">
                        Rooftop Courtyard, 8:00 PM tonight.
                      </div>
                    )}

                    {restaurantStep >= 2 && (
                      <div className="rounded-2xl border border-yellow/60 bg-yellow/15 p-3 text-yellow space-y-1 animate-fade-in leading-relaxed">
                        <div className="font-anton text-sm flex items-center gap-1">
                          <span>✓</span> TABLE #8 RESERVED FOR 4!
                        </div>
                        <p className="text-[10px] text-sage/90 font-satoshi">
                          Digital menu &amp; location pin sent. Tap here to pre-order specials.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Phone Footer Bar */}
              <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white/5 p-2 text-[10px] sm:text-[11px] text-sage/50 font-mono">
                <span className="text-yellow">⚡</span>
                <span className="truncate">Automated via Bits &amp; Builds Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
