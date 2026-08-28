"use client";

import React, { useState } from "react";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL } from "@/lib/seo";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState("Web Development");
  const [budget, setBudget] = useState("₹25k - ₹50k");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
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

      const resData = await res.json().catch(() => ({}));
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || "Failed to submit project brief.");
      }

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorMessage(err.message || "Something went wrong while submitting. Please try again or chat directly on WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-8 md:p-10 shadow-sm animate-fade-in text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A0A0A] dark:bg-[#F2C230] text-[#F2C230] dark:text-gray-900 text-xl font-bold mb-6">
          ✓
        </div>
        <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          Project brief dispatched.
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-md font-normal">
          Thank you! Lavi &amp; Jass will review your project details and respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-900 transition-colors shadow-sm"
          >
            <span>Need a faster reply? Chat on WhatsApp</span>
            <span>💬</span>
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-gray-300 dark:border-white/15 bg-white dark:bg-[#1c1c1c] px-6 py-3 text-xs font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
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
      className="space-y-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8 md:p-10 shadow-sm text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Service Selector Pills */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-3">
          1. Select Primary Growth Engine
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setSelectedService(s.title)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                selectedService === s.title
                  ? "bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 shadow-xs font-semibold"
                  : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              {s.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedService("Full Stack Growth Blueprint")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedService === "Full Stack Growth Blueprint"
                ? "bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 shadow-xs font-semibold"
                : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20"
            }`}
          >
            ✦ Full Stack Growth Blueprint (All 7)
          </button>
        </div>
      </div>

      {/* Budget Selector */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-3">
          2. Estimated Project Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium">
          {["₹15k - ₹25k", "₹25k - ₹50k", "₹50k - ₹1L", "₹1L+ (Custom Sprint)"].map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setBudget(tier)}
              className={`rounded-2xl p-3 text-center transition-all ${
                budget === tier
                  ? "bg-[#0A0A0A] dark:bg-[#F2C230] text-white dark:text-gray-900 shadow-xs font-semibold"
                  : "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20"
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
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Dr. Rajesh / Simran Kaur"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-[#F2C230] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-2">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-[#F2C230] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@brand.com"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-[#F2C230] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-2">
            Business / Hospital / Brand Name
          </label>
          <input
            type="text"
            name="business"
            placeholder="e.g. Apex Eye Hospital"
            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-[#F2C230] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Project Goals / Message */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white block mb-2">
          Project Goals &amp; Specific Requirements *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell Lavi & Jass what you want to achieve (e.g. Need 100+ patient bookings/month, Google Maps #1 rank, Next.js web application)..."
          className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] p-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-[#F2C230] focus:outline-none transition-colors"
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500 dark:border-red-500/50 bg-red-50 dark:bg-red-950/40 p-4 text-xs text-red-700 dark:text-red-300 font-semibold">
          ✕ {errorMessage || "Something went wrong while submitting. Please try again or chat directly on WhatsApp (+91 63676 37487)."}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group w-full rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] py-4 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-md transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 inline-flex items-center justify-center gap-2"
      >
        <span>{status === "sending" ? "Dispatching Brief..." : "Dispatch Project Brief to Founders"}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
      </button>

      <p className="text-center text-[11px] text-gray-500 dark:text-gray-400 font-normal">
        🔒 Direct confidentiality guaranteed. Lavi &amp; Jass personally respond within 24 hours.
      </p>
    </form>
  );
}
