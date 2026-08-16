"use client";

import { useState } from "react";
import { AGENCY_PHONE } from "@/lib/seo";

const SERVICES_LIST = [
  { id: "web", name: "Web Development (Next.js SSR)", baseWeeks: 2.5 },
  { id: "seo", name: "SEO (GMB, AEO, GEO & Local)", baseWeeks: 3 },
  { id: "ppc", name: "PPC (Meta & Google Ads)", baseWeeks: 1.5 },
  { id: "social", name: "Social Media Marketing", baseWeeks: 2 },
  { id: "design", name: "Graphic Design & Branding", baseWeeks: 1.5 },
  { id: "video", name: "Video Editing & Reels", baseWeeks: 1 },
  { id: "automation", name: "Local Brand Automation (Clinic/Restaurant)", baseWeeks: 2 },
];

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState(["web", "seo"]);
  const [businessType, setBusinessType] = useState("local"); // 'local' | 'ecommerce' | 'national'
  const [targetMarket, setTargetMarket] = useState("pan-india"); // 'local' | 'pan-india' | 'worldwide'

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate estimated timeline
  const selectedItems = SERVICES_LIST.filter((s) => selectedServices.includes(s.id));
  const totalWeeks = Math.max(
    ...selectedItems.map((s) => s.baseWeeks),
    selectedItems.length > 2 ? 3.5 : 2
  );

  const getWhatsAppMessage = () => {
    const serviceNames = selectedItems.map((s) => s.name).join(", ");
    const text = `Hi Bits and Builds! I used your Project Estimator.\n\nServices: ${serviceNames}\nBusiness Model: ${businessType.toUpperCase()}\nTarget Market: ${targetMarket.toUpperCase()}\nEstimated Timeline: ~${totalWeeks} weeks\n\nI'd like to get a quote and kickoff call.`;
    return `https://wa.me/916367637487?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative border-t border-white/10 bg-ink-card py-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="eyebrow-pill mb-4">
            <span>Instant Scope &amp; Strategy</span>
          </div>
          <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
            Estimate your <span className="text-teal">project roadmap.</span>
          </h2>
          <p className="mt-3 text-sm text-paper/60">
            Select the services your business needs to calculate an estimated delivery timeline and
            strategic scope.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-white/10 bg-ink/80 p-5 sm:p-7 md:p-8 backdrop-blur-xl">
            {/* Step 1: Services */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-teal block mb-3 font-semibold">
                1. Select Required Services (Multi-Select)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_LIST.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      data-cursor-text="TOGGLE"
                      className={`flex items-center justify-between rounded-xl p-3.5 text-left text-xs font-mono transition-all ${
                        isChecked
                          ? "border border-teal/50 bg-teal/10 text-paper font-bold shadow-[0_0_15px_rgba(0,242,213,0.15)]"
                          : "border border-white/5 bg-white/[0.02] text-paper/60 hover:border-white/20 hover:text-paper"
                      }`}
                    >
                      <span className="pr-2 leading-snug">{srv.name}</span>
                      <span className={`text-xs shrink-0 ${isChecked ? "text-teal font-bold" : "text-paper/20"}`}>
                        {isChecked ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Business Profile */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-teal block mb-3 font-semibold">
                2. Business Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Local Brand / Clinic / Restaurant" },
                  { id: "ecommerce", label: "D2C / E-Commerce Brand" },
                  { id: "national", label: "Startup / B2B Corporate" },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBusinessType(b.id)}
                    className={`min-h-[58px] flex items-center justify-center rounded-xl px-4 py-3 text-center text-xs font-mono transition-all leading-snug ${
                      businessType === b.id
                        ? "border border-teal/50 bg-teal/10 text-paper font-bold shadow-[0_0_15px_rgba(0,242,213,0.15)]"
                        : "border border-white/5 bg-white/[0.02] text-paper/60 hover:border-white/20 hover:text-paper"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Target Market */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-teal block mb-3 font-semibold">
                3. Target Market &amp; Reach
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Sri Ganganagar / Local Region" },
                  { id: "pan-india", label: "Pan-India National Reach" },
                  { id: "worldwide", label: "International / Global Reach" },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setTargetMarket(m.id)}
                    className={`min-h-[58px] flex items-center justify-center rounded-xl px-4 py-3 text-center text-xs font-mono transition-all leading-snug ${
                      targetMarket === m.id
                        ? "border border-teal/50 bg-teal/10 text-paper font-bold shadow-[0_0_15px_rgba(0,242,213,0.15)]"
                        : "border border-white/5 bg-white/[0.02] text-paper/60 hover:border-white/20 hover:text-paper"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Scope Card */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-ink/95 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-2xl">
            <div className="border-b border-white/10 pb-5 sm:pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                Recommended Strategy
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-paper mt-1">
                Custom Multi-Channel Funnel
              </h3>
            </div>

            <div className="py-5 sm:py-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/[0.03] p-4">
                <span className="font-mono text-xs text-paper/60">Estimated Timeline:</span>
                <span className="font-display text-lg sm:text-xl font-bold text-teal">
                  ~{totalWeeks.toFixed(1)} Weeks
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/[0.03] p-4">
                <span className="font-mono text-xs text-paper/60">Selected Capabilities:</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-paper">
                  {selectedServices.length} Core Stack Modules
                </span>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2 text-xs text-paper/70">
                <p className="font-bold text-paper font-mono text-[11px] uppercase tracking-wider">
                  Engineered Outputs:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Server-rendered infrastructure with 95+ Core Web Vitals</li>
                  <li>Direct WhatsApp lead routing &amp; automated notification flow</li>
                  <li>Local business schema &amp; AI answer engine crawlability</li>
                  <li>Weekly analytics &amp; direct founders access (Lavi &amp; Jass)</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 sm:pt-6 space-y-3">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-teal py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,242,213,0.3)]"
              >
                <span>Send Brief to WhatsApp</span>
                <span>💬</span>
              </a>

              <p className="text-center font-mono text-[11px] text-paper/40">
                Direct phone/WhatsApp: {AGENCY_PHONE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
