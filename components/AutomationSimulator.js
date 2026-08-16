"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/seo";

export default function AutomationSimulator() {
  const [mode, setMode] = useState("hospital"); // 'hospital' | 'restaurant'
  const [hospitalStep, setHospitalStep] = useState(1);
  const [restaurantStep, setRestaurantStep] = useState(1);

  return (
    <section className="relative border-t border-white/10 bg-ink py-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Value Prop */}
          <div className="lg:col-span-6">
            <div className="eyebrow-pill mb-4">
              <span>Local Brand Automation Spotlight</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper leading-[1.02]">
              Hospital appointments &amp; table reservations that{" "}
              <span className="text-teal">book themselves.</span>
            </h2>
            <p className="mt-6 text-paper/60 text-base leading-relaxed">
              Never let your front-desk receptionist miss a high-value customer during rush hours.
              We build end-to-end WhatsApp &amp; SMS automation for local hospitals, diagnostic
              centers, and restaurants in Sri Ganganagar, Rajasthan and across India.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 space-y-3">
              {[
                "24/7 instant booking via WhatsApp without hiring extra staff",
                "Direct real-time sync with Google Calendar & front-desk dashboards",
                "Automated reminders with 1-click reschedule to eliminate 80% of no-shows",
                "Automated missed-call textback (captures customers immediately)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-paper/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal text-xs font-bold">
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services/automation"
                data-cursor-text="AUTOMATION"
                className="rounded-full bg-teal px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-teal-bright hover:shadow-[0_0_25px_rgba(0,242,213,0.3)]"
              >
                Learn More About Automation →
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="rounded-full border border-teal/40 px-6 py-4 font-mono text-xs text-teal hover:bg-teal/10 transition-colors"
              >
                Request a Custom Demo
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            {/* Mode Switcher */}
            <div className="mb-6 flex flex-wrap justify-center gap-1.5 rounded-2xl sm:rounded-full border border-white/10 bg-ink-card p-1.5 backdrop-blur-md max-w-full">
              <button
                onClick={() => {
                  setMode("hospital");
                  setHospitalStep(1);
                }}
                className={`rounded-xl sm:rounded-full px-4 sm:px-5 py-2 font-mono text-xs transition-all ${
                  mode === "hospital"
                    ? "bg-teal text-ink font-bold shadow-lg"
                    : "text-paper/60 hover:text-paper"
                }`}
              >
                🏥 Hospital &amp; Clinic Flow
              </button>
              <button
                onClick={() => {
                  setMode("restaurant");
                  setRestaurantStep(1);
                }}
                className={`rounded-xl sm:rounded-full px-4 sm:px-5 py-2 font-mono text-xs transition-all ${
                  mode === "restaurant"
                    ? "bg-teal text-ink font-bold shadow-lg"
                    : "text-paper/60 hover:text-paper"
                }`}
              >
                🍽️ Restaurant Table Flow
              </button>
            </div>

            {/* Phone Screen Mockup */}
            <div className="w-full max-w-[380px] rounded-[32px] sm:rounded-[36px] border-4 border-white/15 bg-[#0b101b] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              {/* Phone Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 px-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-ink font-bold text-sm">
                    {mode === "hospital" ? "🏥" : "🍽️"}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-xs sm:text-sm font-bold text-paper truncate">
                      {mode === "hospital" ? "Apex Clinic Auto-Bot" : "Royal Haveli Reservations"}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse shrink-0" />
                      <span className="truncate">Verified WhatsApp Business</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => (mode === "hospital" ? setHospitalStep(1) : setRestaurantStep(1))}
                  className="font-mono text-[10px] text-paper/40 hover:text-teal shrink-0 ml-2"
                >
                  Reset ↺
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="py-4 space-y-3 min-h-[340px] text-xs">
                {mode === "hospital" ? (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-paper/90 leading-relaxed">
                      👋 Welcome to Apex Clinic! How can we assist you today?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-teal/20 border border-teal/40 p-3 text-paper font-medium text-right leading-relaxed">
                      I want to book an OPD doctor appointment.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-paper/90 space-y-2">
                      <p>Please select the consulting specialist:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => setHospitalStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            hospitalStep >= 2
                              ? "bg-teal text-ink font-bold"
                              : "bg-white/5 text-paper hover:bg-white/15"
                          }`}
                        >
                          1. Dr. R. Sharma (Cardiology)
                        </button>
                        <button
                          onClick={() => setHospitalStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            hospitalStep < 2 ? "bg-white/5 text-paper hover:bg-white/15" : "bg-white/5 opacity-50"
                          }`}
                        >
                          2. Dr. V. Verma (Pediatrics)
                        </button>
                      </div>
                    </div>

                    {hospitalStep >= 2 && (
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-teal/20 border border-teal/40 p-3 text-paper text-right animate-in fade-in leading-relaxed">
                        Selected: Dr. R. Sharma (Cardiology)
                      </div>
                    )}

                    {hospitalStep >= 2 && (
                      <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-paper/90 space-y-2 animate-in fade-in">
                        <p>Available OPD Slots for Today:</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setHospitalStep(3)}
                            className={`rounded-lg p-2 text-center text-[11px] font-mono flex-1 transition-colors ${
                              hospitalStep === 3
                                ? "bg-teal text-ink font-bold"
                                : "bg-white/5 text-paper hover:bg-white/15"
                            }`}
                          >
                            5:30 PM
                          </button>
                          <button
                            onClick={() => setHospitalStep(3)}
                            className="rounded-lg p-2 text-center text-[11px] font-mono flex-1 bg-white/5 text-paper hover:bg-white/15"
                          >
                            6:15 PM
                          </button>
                        </div>
                      </div>
                    )}

                    {hospitalStep >= 3 && (
                      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-emerald-300 space-y-1 animate-in fade-in leading-relaxed">
                        <div className="font-bold flex items-center gap-1">
                          <span>✓</span> Appointment Confirmed!
                        </div>
                        <p className="text-[10px] text-paper/70">
                          Token #14 booked for 5:30 PM today. Google Maps directions &amp; reminder
                          PDF sent to your WhatsApp.
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-paper/90 leading-relaxed">
                      🍷 Welcome to Royal Haveli! Would you like to reserve a dining table?
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-teal/20 border border-teal/40 p-3 text-paper font-medium text-right leading-relaxed">
                      Yes, table for 4 guests this evening.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-paper/90 space-y-2">
                      <p>Select your dining area:</p>
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => setRestaurantStep(2)}
                          className={`rounded-lg p-2.5 text-left text-[11px] font-mono transition-colors leading-snug ${
                            restaurantStep >= 2
                              ? "bg-teal text-ink font-bold"
                              : "bg-white/5 text-paper hover:bg-white/15"
                          }`}
                        >
                          🌟 Rooftop Courtyard (AC / Open Air)
                        </button>
                        <button
                          onClick={() => setRestaurantStep(2)}
                          className="rounded-lg p-2.5 text-left text-[11px] font-mono bg-white/5 text-paper hover:bg-white/15 leading-snug"
                        >
                          🍽️ Royal Indoor Dining Lounge
                        </button>
                      </div>
                    </div>

                    {restaurantStep >= 2 && (
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-teal/20 border border-teal/40 p-3 text-paper text-right animate-in fade-in leading-relaxed">
                        Rooftop Courtyard, 8:00 PM tonight.
                      </div>
                    )}

                    {restaurantStep >= 2 && (
                      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-emerald-300 space-y-1 animate-in fade-in leading-relaxed">
                        <div className="font-bold flex items-center gap-1">
                          <span>✓</span> Table #8 Reserved for 4!
                        </div>
                        <p className="text-[10px] text-paper/70">
                          Digital menu &amp; location pin sent. Tap here to pre-order specials.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Phone Footer Bar */}
              <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white/5 p-2 text-[10px] sm:text-[11px] text-paper/40 font-mono">
                <span className="text-teal">⚡</span>
                <span className="truncate">Automated via Bits &amp; Builds Cloud Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
