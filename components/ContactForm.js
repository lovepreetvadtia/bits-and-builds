"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL } from "@/lib/seo";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [selectedService, setSelectedService] = useState("Web Development");
  const [budget, setBudget] = useState("₹25k - ₹50k");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.target);
    const payload = {
      ...Object.fromEntries(form.entries()),
      service: selectedService,
      budget,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border-2 border-charcoal dark:border-yellow bg-yellow/20 dark:bg-yellow/10 p-8 md:p-10 shadow-brutalist dark:shadow-brutalist-yellow animate-fade-in text-charcoal dark:text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal dark:bg-yellow text-yellow dark:text-charcoal font-anton text-2xl font-bold mb-6">
          ✓
        </div>
        <h3 className="font-anton text-3xl text-charcoal dark:text-white tracking-wide">
          PROJECT BRIEF DISPATCHED.
        </h3>
        <p className="mt-3 font-satoshi text-sm md:text-base text-charcoal/80 dark:text-sage/90 leading-relaxed max-w-md">
          Thank you! Lavi &amp; Jass will review your market details and get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal dark:bg-yellow px-7 py-3.5 font-anton text-xs uppercase tracking-wider text-white dark:text-charcoal hover:bg-yellow hover:text-charcoal dark:hover:bg-white transition-colors shadow-sm"
          >
            <span>Need a faster reply? Chat on WhatsApp</span>
            <span>💬</span>
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-charcoal/30 dark:border-white/30 px-6 py-3 font-anton text-xs uppercase text-charcoal dark:text-white hover:bg-white dark:hover:bg-white/10 transition-colors"
          >
            Send Another Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-8 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-6 sm:p-8 md:p-10 shadow-2xl text-charcoal dark:text-white transition-colors duration-300"
    >
      {/* Service Selector Pills */}
      <div>
        <label className="font-anton text-sm uppercase tracking-wider text-charcoal dark:text-white block mb-3">
          1. Select Primary Growth Engine
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setSelectedService(s.title)}
              className={`rounded-xl px-3.5 py-2 font-satoshi text-xs transition-all ${
                selectedService === s.title
                  ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow text-white dark:text-charcoal font-bold shadow-xs"
                  : "border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-white/5 text-charcoal/70 dark:text-sage/75 hover:border-charcoal/40 dark:hover:border-white/40 hover:bg-yellow/10"
              }`}
            >
              {s.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedService("Full Stack Growth Blueprint")}
            className={`rounded-xl px-3.5 py-2 font-satoshi text-xs transition-all ${
              selectedService === "Full Stack Growth Blueprint"
                ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow text-white dark:text-charcoal font-bold shadow-xs"
                : "border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-white/5 text-charcoal/70 dark:text-sage/75 hover:border-charcoal/40 dark:hover:border-white/40 hover:bg-yellow/10"
            }`}
          >
            ✦ Full Stack Growth Blueprint (All 7)
          </button>
        </div>
      </div>

      {/* Budget Selector */}
      <div>
        <label className="font-anton text-sm uppercase tracking-wider text-charcoal dark:text-white block mb-3">
          2. Estimated Project Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
          {["₹15k - ₹25k", "₹25k - ₹50k", "₹50k - ₹1L", "₹1L+ (Custom Sprint)"].map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setBudget(tier)}
              className={`rounded-xl p-3 text-center transition-all ${
                budget === tier
                  ? "border-2 border-charcoal dark:border-yellow bg-charcoal dark:bg-yellow text-white dark:text-charcoal font-bold"
                  : "border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-white/5 text-charcoal/70 dark:text-sage/75 hover:border-charcoal/40 dark:hover:border-white/40"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Form Inputs Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="font-anton text-xs uppercase tracking-wider text-charcoal dark:text-white block mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Dr. Rajesh / Simran Kaur"
            className="w-full rounded-xl border border-charcoal/20 dark:border-white/20 bg-[#f8f9fa] dark:bg-charcoal px-4 py-3 font-satoshi text-sm text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-sage/40 focus:border-charcoal dark:focus:border-yellow focus:outline-none"
          />
        </div>

        <div>
          <label className="font-anton text-xs uppercase tracking-wider text-charcoal dark:text-white block mb-2">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-charcoal/20 dark:border-white/20 bg-[#f8f9fa] dark:bg-charcoal px-4 py-3 font-satoshi text-sm text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-sage/40 focus:border-charcoal dark:focus:border-yellow focus:outline-none"
          />
        </div>

        <div>
          <label className="font-anton text-xs uppercase tracking-wider text-charcoal dark:text-white block mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@brand.com"
            className="w-full rounded-xl border border-charcoal/20 dark:border-white/20 bg-[#f8f9fa] dark:bg-charcoal px-4 py-3 font-satoshi text-sm text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-sage/40 focus:border-charcoal dark:focus:border-yellow focus:outline-none"
          />
        </div>

        <div>
          <label className="font-anton text-xs uppercase tracking-wider text-charcoal dark:text-white block mb-2">
            Business / Hospital / Brand Name
          </label>
          <input
            type="text"
            name="business"
            placeholder="e.g. Apex Eye Hospital"
            className="w-full rounded-xl border border-charcoal/20 dark:border-white/20 bg-[#f8f9fa] dark:bg-charcoal px-4 py-3 font-satoshi text-sm text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-sage/40 focus:border-charcoal dark:focus:border-yellow focus:outline-none"
          />
        </div>
      </div>

      {/* Project Goals / Message */}
      <div>
        <label className="font-anton text-xs uppercase tracking-wider text-charcoal dark:text-white block mb-2">
          Project Goals &amp; Specific Requirements *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell Lavi & Jass what you want to achieve (e.g. Need 100+ patient bookings/month, Google Maps #1 rank in Sri Ganganagar, sub-second Next.js web application)..."
          className="w-full rounded-xl border border-charcoal/20 dark:border-white/20 bg-[#f8f9fa] dark:bg-charcoal p-4 font-satoshi text-sm text-charcoal dark:text-white placeholder:text-charcoal/40 dark:placeholder:text-sage/40 focus:border-charcoal dark:focus:border-yellow focus:outline-none"
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 font-satoshi text-xs text-red-500 font-bold">
          ✕ Something went wrong while submitting. Please try again or chat directly on WhatsApp (+91 63676 37487).
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor-text="SUBMIT"
        className="group w-full rounded-full bg-charcoal dark:bg-yellow py-4 font-anton text-sm uppercase tracking-wider text-white dark:text-charcoal shadow-xl transition-all duration-300 hover:scale-[1.01] hover:bg-black dark:hover:bg-white active:scale-95 disabled:opacity-50 inline-flex items-center justify-center gap-2"
      >
        <span>{status === "sending" ? "DISPATCHING BRIEF..." : "DISPATCH PROJECT BRIEF TO FOUNDERS"}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
      </button>

      <p className="text-center font-mono text-[11px] text-charcoal/50 dark:text-sage/60">
        🔒 Direct confidentiality guaranteed. Lavi &amp; Jass personally respond within 24 hours.
      </p>
    </form>
  );
}
