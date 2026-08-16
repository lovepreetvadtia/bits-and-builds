"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";
import {
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
  FOUNDERS,
} from "@/lib/seo";

export default function Footer() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      // Indian Standard Time (IST / Asia/Kolkata)
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(AGENCY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-ink pt-24 pb-12 px-6 md:px-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-teal/10 blur-[160px]"
        aria-hidden="true"
      />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Top Callout & Massive Typography (Produx Design style) */}
        <div className="mb-20 border-b border-white/10 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal mb-6">
                <span className="h-2 w-2 rounded-full bg-teal animate-ping" />
                <span>Ready to scale your brand?</span>
              </div>
              <h2 className="font-display text-clampHero font-bold leading-[0.92] tracking-tightest2 text-paper">
                Let's build your
                <br />
                next <span className="text-teal">breakthrough.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="flex items-center justify-center gap-3 rounded-full border border-teal/40 bg-teal/10 px-8 py-5 font-mono text-xs font-bold uppercase tracking-widest text-teal transition-all hover:bg-teal hover:text-ink hover:shadow-[0_0_30px_rgba(0,242,213,0.4)]"
              >
                <span>Chat on WhatsApp</span>
                <span>💬</span>
              </a>

              <Link
                href="/contact"
                data-cursor-text="START"
                className="group flex items-center justify-center gap-3 rounded-full bg-paper px-8 py-5 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-all hover:bg-teal hover:text-ink hover:shadow-[0_0_30px_rgba(0,242,213,0.4)]"
              >
                <span>Start a Project</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Quick Copy Email Bar */}
          <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
            <span className="font-mono text-xs text-paper/40 uppercase tracking-wider">
              Direct Contact:
            </span>
            <button
              onClick={copyEmail}
              data-cursor-text="COPY"
              className="group flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 font-mono text-sm text-paper hover:bg-teal/20 hover:text-teal transition-all"
            >
              <span>{AGENCY_EMAIL}</span>
              <span className="text-xs text-teal">{copied ? "✓ Copied!" : "📋 Copy"}</span>
            </button>
            <span className="text-paper/20">|</span>
            <a
              href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
              data-cursor-text="CALL"
              className="font-mono text-sm text-paper/80 hover:text-teal transition-colors"
            >
              {AGENCY_PHONE}
            </a>
          </div>
        </div>

        {/* 5-Column Navigation Matrix */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 lg:gap-12">
          {/* Col 1: Studio info */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 font-display text-2xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10 border border-teal/30 text-teal font-mono text-sm font-bold">
                B&B
              </span>
              <span>
                Bits<span className="text-teal">&</span>Builds
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              High-performance digital marketing, server-rendered Next.js web systems, SEO & local
              automation. Founded by <strong>Lavi and Jass</strong> in Sri Ganganagar, Rajasthan.
            </p>

            {/* Live Clock (Sri Ganganagar IST) */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-mono text-paper/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              <span>Sri Ganganagar (IST):</span>
              <span className="font-bold text-teal">{time || "11:00:00 AM"}</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="eyebrow mb-4">Capabilities</p>
            <ul className="space-y-2.5 text-sm text-paper/60">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    data-cursor-text="VIEW"
                    className="hover:text-teal transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="eyebrow mb-4">Studio</p>
            <ul className="space-y-2.5 text-sm text-paper/60">
              <li>
                <Link href="/about" data-cursor-text="ABOUT" className="hover:text-teal transition-colors">
                  About & Founders
                </Link>
              </li>
              <li>
                <Link href="/services" data-cursor-text="SERVICES" className="hover:text-teal transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/blog" data-cursor-text="BLOG" className="hover:text-teal transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" data-cursor-text="CONTACT" className="hover:text-teal transition-colors">
                  Contact & Brief
                </Link>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline inline-flex items-center gap-1 font-mono text-xs"
                >
                  WhatsApp Fast Track ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Coverage */}
          <div>
            <p className="eyebrow mb-4">HQ & Coverage</p>
            <div className="space-y-3 text-sm text-paper/60">
              <div>
                <p className="font-semibold text-paper">Headquarters</p>
                <p className="mt-0.5 text-xs text-paper/50">{AGENCY_LOCATION}</p>
              </div>
              <div>
                <p className="font-semibold text-paper">Service Reach</p>
                <p className="mt-0.5 text-xs text-paper/50">Pan-India & Worldwide Remote Delivery</p>
              </div>
              <div className="pt-2">
                <p className="font-mono text-[11px] text-teal">Founders: {FOUNDERS.map(f => f.name).join(" & ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-paper/40 sm:flex-row">
          <p>© {currentYear} Bits and Builds. All rights reserved. Crafted with Next.js SSR.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono">Sri Ganganagar 335002</span>
            <button
              onClick={scrollToTop}
              data-cursor-text="TOP"
              className="flex items-center gap-1 font-mono text-teal hover:underline"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
