"use client";

import { useState } from "react";
import { AGENCY_PHONE } from "@/lib/seo";
import GsapTextReveal from "@/components/GsapTextReveal";

const SERVICES_LIST = [
  { id: "web", name: "Web Development (Next.js SSR)", baseWeeks: 2.5 },
  { id: "seo", name: "SEO (GMB, AEO, GEO & Local)", baseWeeks: 3 },
  { id: "ppc", name: "PPC (Meta & Google Ads)", baseWeeks: 1.5 },
  { id: "social", name: "Social Media Marketing", baseWeeks: 2 },
  { id: "design", name: "Graphic Design & Branding", baseWeeks: 1.5 },
  { id: "video", name: "Reels & Short-Form Video", baseWeeks: 1 },
  { id: "automation", name: "Local Brand Automation (Clinic/Restaurant)", baseWeeks: 2 },
];

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState(["web", "seo"]);
  const [businessType, setBusinessType] = useState("local");
  const [targetMarket, setTargetMarket] = useState("pan-india");

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

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
    <section className="relative border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal text-charcoal dark:text-white py-28 px-6 md:px-10 overflow-hidden grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-editorial-light dark:badge-editorial">
            <span className="h-2 w-2 rounded-full bg-yellow animate-ping" />
            <span>Instant Project Calculator</span>
          </div>
          <GsapTextReveal
            as="h2"
            variant="words"
            text="ESTIMATE YOUR PROJECT SCOPE."
            highlightWord="SCOPE."
            highlightClass="highlight-yellow"
            className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
          />
          <p className="font-satoshi text-base text-charcoal/70 dark:text-sage/80">
            Select the capabilities your business requires to calculate an estimated sprint timeline and strategic deliverable roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#fcfdfc] dark:bg-darkgray p-6 sm:p-8 shadow-xl">
            {/* Step 1: Services */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-yellow text-charcoal font-anton text-xs font-bold shadow-xs">
                  01
                </span>
                <h3 className="font-anton text-base tracking-wide text-charcoal dark:text-white">
                  SELECT REQUIRED GROWTH ENGINES (MULTI-SELECT)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_LIST.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      data-cursor-text="TOGGLE"
                      className={`flex items-center justify-between rounded-2xl p-4 text-left text-xs font-satoshi transition-all duration-200 ${
                        isChecked
                          ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow/15 text-white dark:text-white font-bold shadow-brutalist dark:shadow-[0_0_15px_rgba(255,225,124,0.15)]"
                          : "border border-charcoal/15 dark:border-white/10 bg-white dark:bg-charcoal/80 text-charcoal/80 dark:text-white/80 hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-yellow/10 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="pr-2 leading-snug">{srv.name}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md font-anton text-xs ${
                          isChecked
                            ? "bg-yellow text-charcoal font-bold"
                            : "border border-charcoal/20 dark:border-white/20 text-charcoal/40 dark:text-white/30"
                        }`}
                      >
                        {isChecked ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Business Profile */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-yellow text-charcoal font-anton text-xs font-bold shadow-xs">
                  02
                </span>
                <h3 className="font-anton text-base tracking-wide text-charcoal dark:text-white">
                  BUSINESS PROFILE &amp; CATEGORY
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Local Clinic / Hospital / Restaurant" },
                  { id: "ecommerce", label: "D2C / E-Commerce Brand" },
                  { id: "national", label: "National B2B / Startup" },
                ].map((b) => {
                  const isSelected = businessType === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBusinessType(b.id)}
                      className={`min-h-[58px] flex items-center justify-center rounded-2xl px-4 py-3 text-center text-xs font-satoshi transition-all duration-200 leading-snug ${
                        isSelected
                          ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow/15 text-white dark:text-white font-bold shadow-brutalist dark:shadow-[0_0_15px_rgba(255,225,124,0.15)]"
                          : "border border-charcoal/15 dark:border-white/10 bg-white dark:bg-charcoal/80 text-charcoal/80 dark:text-white/80 hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-yellow/10 dark:hover:bg-white/5"
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Target Market */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-yellow text-charcoal font-anton text-xs font-bold shadow-xs">
                  03
                </span>
                <h3 className="font-anton text-base tracking-wide text-charcoal dark:text-white">
                  TARGET MARKET &amp; REACH
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Sri Ganganagar / Local Region" },
                  { id: "pan-india", label: "Pan-India National Reach" },
                  { id: "worldwide", label: "International / Global Delivery" },
                ].map((m) => {
                  const isSelected = targetMarket === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setTargetMarket(m.id)}
                      className={`min-h-[58px] flex items-center justify-center rounded-2xl px-4 py-3 text-center text-xs font-satoshi transition-all duration-200 leading-snug ${
                        isSelected
                          ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow/15 text-white dark:text-white font-bold shadow-brutalist dark:shadow-[0_0_15px_rgba(255,225,124,0.15)]"
                          : "border border-charcoal/15 dark:border-white/10 bg-white dark:bg-charcoal/80 text-charcoal/80 dark:text-white/80 hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-yellow/10 dark:hover:bg-white/5"
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Timeline & Scope Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal dark:bg-darkgray p-8 text-white shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-yellow font-semibold">
                    Calculated Sprint Scope
                  </span>
                  <h3 className="font-anton text-2xl text-white mt-1">
                    ESTIMATED BLUEPRINT
                  </h3>
                </div>
                <div className="rounded-2xl border border-yellow/40 bg-yellow/10 p-3 text-center">
                  <div className="font-anton text-3xl text-yellow leading-none">
                    ~{totalWeeks}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-sage/70 mt-1 font-semibold">
                    Weeks Delivery
                  </div>
                </div>
              </div>

              {/* Scope Checklist */}
              <div className="my-6 space-y-3 font-satoshi text-xs">
                <p className="font-mono text-[11px] uppercase tracking-widest text-sage/50">
                  Included Engine Modules ({selectedItems.length}):
                </p>
                <div className="space-y-2">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="font-mono text-xs text-yellow font-bold">~{item.baseWeeks}w</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Deliverables Included */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-[11px] font-mono text-sage/75">
                <div className="flex items-center gap-2">
                  <span className="text-yellow font-bold">✓</span>
                  <span>100% Server-Side Rendered (SSR) Next.js Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow font-bold">✓</span>
                  <span>Direct Partner Execution with Founders Lavi &amp; Jass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow font-bold">✓</span>
                  <span>Google Maps 3-Pack Schema &amp; AEO AI Engine Tagging</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="LOCK"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-yellow py-4 font-anton text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95"
                >
                  <span>Lock In Scope on WhatsApp ({AGENCY_PHONE})</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
                <p className="text-center font-mono text-[10px] text-sage/50">
                  ⚡ Pre-populates WhatsApp with your exact selected scope &amp; estimated timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
