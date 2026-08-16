"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL } from "@/lib/seo";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
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
      <div className="rounded-3xl border border-teal/40 bg-teal/5 p-8 md:p-10 shadow-[0_0_50px_rgba(0,242,213,0.15)] animate-in fade-in">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/20 text-teal text-2xl font-bold mb-6">
          ✓
        </div>
        <h3 className="font-display text-2xl font-bold text-paper">Message Dispatched.</h3>
        <p className="mt-3 text-sm text-paper/70 leading-relaxed max-w-md">
          Thank you! Lavi or Jass will review your brief and get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-ink"
          >
            <span>Need a faster reply? Chat on WhatsApp</span>
            <span>💬</span>
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="rounded-full border border-white/10 px-6 py-3 font-mono text-xs text-paper/60 hover:text-paper"
          >
            Send Another Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border border-white/10 bg-ink-card p-8 md:p-10 backdrop-blur-xl">
      {/* Service Selector Pills */}
      <div>
        <label className="font-mono text-xs uppercase tracking-widest text-teal block mb-3 font-semibold">
          Select Primary Service
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setSelectedService(s.title)}
              className={`rounded-xl px-3.5 py-2 font-mono text-xs transition-all ${
                selectedService === s.title
                  ? "border border-teal/50 bg-teal/15 text-paper font-bold shadow-[0_0_15px_rgba(0,242,213,0.2)]"
                  : "border border-white/5 bg-white/[0.02] text-paper/60 hover:border-white/20 hover:text-paper"
              }`}
            >
              {s.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedService("Full Stack Marketing Growth")}
            className={`rounded-xl px-3.5 py-2 font-mono text-xs transition-all ${
              selectedService === "Full Stack Marketing Growth"
                ? "border border-teal/50 bg-teal/15 text-paper font-bold shadow-[0_0_15px_rgba(0,242,213,0.2)]"
                : "border border-white/5 bg-white/[0.02] text-paper/60 hover:border-white/20 hover:text-paper"
            }`}
          >
            🔥 Full Stack Growth
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-paper/60 block mb-2" htmlFor="name">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-teal"
          />
        </div>

        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-paper/60 block mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g. rahul@brand.com"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-teal"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-paper/60 block mb-2" htmlFor="phone">
            Phone / WhatsApp Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-teal"
          />
        </div>

        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-paper/60 block mb-2" htmlFor="business">
            Business / Brand Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="e.g. City Care Hospital / The Spice Bistro"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-teal"
          />
        </div>
      </div>

      {/* Budget Tier */}
      <div>
        <label className="font-mono text-xs uppercase tracking-widest text-teal block mb-2 font-semibold">
          Estimated Project Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["₹15k - ₹35k", "₹35k - ₹75k", "₹75k - ₹1.5L", "₹1.5L+ / Global"].map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setBudget(tier)}
              className={`rounded-xl p-2.5 text-center font-mono text-xs transition-all ${
                budget === tier
                  ? "border border-teal/50 bg-teal/15 text-paper font-bold"
                  : "border border-white/5 bg-white/[0.02] text-paper/60 hover:text-paper"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="font-mono text-xs uppercase tracking-wider text-paper/60 block mb-2" htmlFor="message">
          Project Goals &amp; Timeline *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your business goals, target audience, and current challenges..."
          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-teal"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          data-cursor-text="SUBMIT"
          disabled={status === "sending"}
          className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02] disabled:opacity-50 shadow-[0_0_25px_rgba(0,242,213,0.3)]"
        >
          {status === "sending" ? "Sending Brief..." : "Submit Project Brief →"}
        </button>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="WHATSAPP"
          className="text-xs font-mono text-teal hover:underline flex items-center gap-1.5"
        >
          <span>Or chat directly on WhatsApp ({AGENCY_PHONE})</span>
          <span>↗</span>
        </a>
      </div>

      {status === "error" && (
        <p className="text-xs font-mono text-red-400">
          Something went wrong submitting the form. Please WhatsApp us directly at {AGENCY_PHONE} or
          email bitss.builds@gmail.com.
        </p>
      )}
    </form>
  );
}
