"use client";

import React, { useState } from "react";
import { AGENCY_PHONE } from "@/lib/seo";

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
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            8
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Instant Project Calculator
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
            Estimate your project scope &amp; timeline.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            Select the growth capabilities your business requires to calculate an estimated sprint timeline and strategic deliverable roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8 shadow-sm">
            {/* Step 1: Services */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-xs font-semibold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  Select Required Growth Engines (Multi-Select)
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
                      className={`flex items-center justify-between rounded-2xl p-4 text-left text-xs font-medium transition-all duration-200 ${
                        isChecked
                          ? "border-2 border-[#0A0A0A] dark:border-[#F2C230] bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 font-semibold shadow-sm"
                          : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-200 hover:border-gray-300 dark:hover:border-white/20"
                      }`}
                    >
                      <span className="pr-2 leading-snug">{srv.name}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isChecked
                            ? "bg-[#F2C230] text-gray-900 dark:bg-black dark:text-[#F2C230]"
                            : "border border-gray-300 dark:border-white/20 text-gray-400"
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
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-xs font-semibold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  Business Profile &amp; Category
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Local Clinic / Restaurant" },
                  { id: "ecommerce", label: "D2C / E-Commerce Brand" },
                  { id: "national", label: "National B2B / Startup" },
                ].map((b) => {
                  const isSelected = businessType === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBusinessType(b.id)}
                      className={`min-h-[52px] flex items-center justify-center rounded-2xl px-3 py-2.5 text-center text-xs font-medium transition-all duration-200 leading-snug ${
                        isSelected
                          ? "border-2 border-[#0A0A0A] dark:border-[#F2C230] bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 font-semibold shadow-sm"
                          : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-200 hover:border-gray-300 dark:hover:border-white/20"
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
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-xs font-semibold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  Target Market &amp; Reach
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "local", label: "Local City / Region" },
                  { id: "pan-india", label: "Pan-India Reach" },
                  { id: "worldwide", label: "International Delivery" },
                ].map((m) => {
                  const isSelected = targetMarket === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setTargetMarket(m.id)}
                      className={`min-h-[52px] flex items-center justify-center rounded-2xl px-3 py-2.5 text-center text-xs font-medium transition-all duration-200 leading-snug ${
                        isSelected
                          ? "border-2 border-[#0A0A0A] dark:border-[#F2C230] bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 font-semibold shadow-sm"
                          : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-200 hover:border-gray-300 dark:hover:border-white/20"
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
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F2C230] font-semibold">
                    Calculated Sprint Scope
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mt-1">
                    Estimated Blueprint
                  </h3>
                </div>
                <div className="rounded-2xl border border-[#F2C230]/40 bg-[#F2C230]/10 p-3 text-center shrink-0">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#F2C230] leading-none">
                    ~{totalWeeks}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-medium">
                    Weeks Delivery
                  </div>
                </div>
              </div>

              {/* Scope Checklist */}
              <div className="my-6 space-y-3 text-xs">
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                  Included Engine Modules ({selectedItems.length}):
                </p>
                <div className="space-y-2">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-[#F2C230] font-semibold shrink-0 ml-2">~{item.baseWeeks}w</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Deliverables Included */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-[11px] text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#F2C230] font-bold">✓</span>
                  <span>100% Server-Side Rendered (SSR) Next.js Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F2C230] font-bold">✓</span>
                  <span>Direct Partner Execution with Founders Lavi &amp; Jass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F2C230] font-bold">✓</span>
                  <span>Google Maps 3-Pack Schema &amp; AEO AI Engine Tagging</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center"
                >
                  <span>Lock In Scope on WhatsApp</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </a>
                <p className="text-center text-[11px] text-gray-400 leading-relaxed font-normal">
                  Pre-populates WhatsApp (<span className="text-[#F2C230] font-medium">{AGENCY_PHONE}</span>) with your exact selected scope &amp; timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
