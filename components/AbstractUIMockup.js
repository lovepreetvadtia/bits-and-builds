"use client";

import { useState } from "react";

export default function AbstractUIMockup() {
  const [activeColor, setActiveColor] = useState("#FFE17C");
  const [alignment, setAlignment] = useState("center");
  const [activeTab, setActiveTab] = useState("overview");

  const colors = [
    { label: "Golden Yellow", hex: "#FFE17C" },
    { label: "Charcoal", hex: "#171E19" },
    { label: "Dark Gray", hex: "#272727" },
    { label: "Sage Muted", hex: "#B7C6C2" },
  ];

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-3xl border border-charcoal/15 bg-white shadow-2xl transition-all duration-300 hover:shadow-[0_30px_70px_rgba(23,30,25,0.12)]">
      {/* Mockup Header */}
      <div className="flex h-12 items-center justify-between border-b border-charcoal/10 bg-[#f8f9fa] px-5">
        {/* Gray/colored traffic lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
        </div>

        {/* Centered Mockup Title */}
        <div className="font-mono text-xs font-semibold tracking-wider text-charcoal/70">
          Bits &amp; Builds — Studio Engine v3.4 [PRODUCTION]
        </div>

        {/* Right Status Pill */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#ffe17c] animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-charcoal/60 uppercase">99/100 SSR</span>
        </div>
      </div>

      {/* Mockup Body (3-Column Grid: Sidebar, Main Canvas, Properties Panel) */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] bg-paper">
        {/* 1. Sidebar (col-span-2) */}
        <div className="border-b md:border-b-0 md:border-r border-charcoal/10 bg-[#fcfdfc] p-4 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-3 px-2">
              Workspace
            </div>
            {[
              { id: "overview", label: "Overview", icon: "⚡" },
              { id: "seo", label: "Maps 3-Pack", icon: "📍" },
              { id: "speed", label: "Edge Speed", icon: "🚀" },
              { id: "booking", label: "Automation", icon: "💬" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-satoshi text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-charcoal text-white font-bold"
                    : "text-charcoal/70 hover:bg-charcoal/5"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-charcoal/10 bg-yellow/20 p-3">
            <div className="font-mono text-[10px] font-bold text-charcoal uppercase">
              Cloud Edge
            </div>
            <div className="font-anton text-sm text-charcoal mt-0.5">0.18s TTFB</div>
          </div>
        </div>

        {/* 2. Main Canvas (col-span-7) */}
        <div className="relative flex flex-col items-center justify-center p-6 md:p-8 md:col-span-7 bg-[#f8f9fa] grid-editorial-light">
          {/* Centered White Card with subtle shadows */}
          <div
            className="w-full max-w-md rounded-2xl border border-charcoal/10 bg-white p-6 shadow-xl transition-all duration-300"
            style={{
              textAlign: alignment,
              borderTop: `4px solid ${activeColor}`,
            }}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-3 mb-4">
              <span className="badge-editorial-light !text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeColor }} />
                <span>Active Campaign</span>
              </span>
              <span className="font-mono text-xs font-bold text-charcoal/50">#BB-2026</span>
            </div>

            <h4 className="font-anton text-2xl md:text-3xl text-charcoal tracking-tight">
              REVENUE ACCELERATOR
            </h4>

            <p className="mt-2 font-satoshi text-xs text-charcoal/70 leading-relaxed">
              Full-funnel Next.js deployment connected to automated WhatsApp lead qualification and Google Maps ranking.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-charcoal/10">
              <div className="rounded-lg bg-charcoal/5 p-2.5 text-left">
                <div className="font-mono text-[10px] text-charcoal/50 uppercase">PageSpeed</div>
                <div className="font-anton text-lg text-charcoal mt-0.5">99/100</div>
              </div>
              <div className="rounded-lg bg-charcoal/5 p-2.5 text-left">
                <div className="font-mono text-[10px] text-charcoal/50 uppercase">Leads Captured</div>
                <div className="font-anton text-lg text-charcoal mt-0.5">340+ /mo</div>
              </div>
            </div>
          </div>

          {/* Floating Cursor Icon with User Name Label */}
          <div className="absolute top-10 right-8 md:top-14 md:right-16 flex items-center gap-2 pointer-events-none animate-float">
            <svg
              className="h-5 w-5 fill-charcoal drop-shadow-md"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 2l16 11-7.5 1.5L9 22z" />
            </svg>
            <div className="flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-1 font-mono text-[11px] font-bold text-yellow shadow-lg border border-yellow/30">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-ping" />
              <span>✦ Lavi (Technical Director)</span>
            </div>
          </div>

          {/* Second subtle cursor */}
          <div className="absolute bottom-6 left-8 flex items-center gap-2 pointer-events-none opacity-80">
            <svg
              className="h-4 w-4 fill-yellow drop-shadow-md"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 2l16 11-7.5 1.5L9 22z" />
            </svg>
            <div className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[10px] font-semibold text-charcoal shadow border border-charcoal/10">
              ✦ Jass (Creative Director)
            </div>
          </div>
        </div>

        {/* 3. Properties Panel (col-span-3) */}
        <div className="border-t md:border-t-0 md:border-l border-charcoal/10 bg-white p-5 md:col-span-3 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-2">
                Properties &amp; Controls
              </div>
              <div className="font-anton text-lg uppercase text-charcoal">
                Style Inspector
              </div>
            </div>

            {/* Alignment Icons */}
            <div>
              <label className="block font-mono text-[10px] uppercase font-bold text-charcoal/60 mb-2">
                Alignment Mode
              </label>
              <div className="grid grid-cols-3 gap-1.5 rounded-lg border border-charcoal/10 p-1 bg-charcoal/5">
                {[
                  { id: "left", label: "Left", icon: "⫷" },
                  { id: "center", label: "Center", icon: "☰" },
                  { id: "right", label: "Right", icon: "⫸" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAlignment(item.id)}
                    className={`flex items-center justify-center rounded py-1 font-mono text-xs transition-colors ${
                      alignment === item.id
                        ? "bg-white font-bold text-charcoal shadow-sm"
                        : "text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    <span>{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hex Color Swatch (#FFE17C) */}
            <div>
              <label className="block font-mono text-[10px] uppercase font-bold text-charcoal/60 mb-2">
                Primary Accent Color
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 rounded-xl border border-charcoal/15 bg-charcoal/5 p-2">
                  <span
                    className="h-6 w-6 rounded-md border border-black/20 shadow-sm"
                    style={{ backgroundColor: activeColor }}
                  />
                  <span className="font-mono text-xs font-bold text-charcoal">
                    {activeColor}
                  </span>
                  <span className="ml-auto rounded bg-yellow px-1.5 py-0.5 font-mono text-[9px] font-bold text-charcoal">
                    ACTIVE
                  </span>
                </div>

                <div className="flex gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setActiveColor(c.hex)}
                      title={c.label}
                      className={`h-7 w-7 rounded-lg border transition-transform ${
                        activeColor === c.hex
                          ? "scale-110 border-charcoal ring-2 ring-yellow ring-offset-1"
                          : "border-black/10 hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Display Font Controller */}
            <div className="rounded-xl border border-charcoal/10 bg-[#f8f9fa] p-3">
              <div className="font-mono text-[10px] uppercase font-bold text-charcoal/50">
                Display Font
              </div>
              <div className="font-anton text-base text-charcoal mt-0.5 tracking-wide">
                ANTON DISPLAY 900
              </div>
              <div className="font-satoshi text-[11px] text-charcoal/60 mt-1">
                Paired with Satoshi Body
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-charcoal/10 flex items-center justify-between font-mono text-[10px] text-charcoal/50">
            <span>Status: Verified</span>
            <span className="text-charcoal font-bold">100% Responsive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
