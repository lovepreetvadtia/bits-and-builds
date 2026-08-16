"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL } from "@/lib/seo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", isMega: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-ink/90 via-ink/40 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Brand Logo */}
        <Link
          href="/"
          data-cursor-text="HOME"
          className="group flex items-center gap-3 font-display text-xl font-bold tracking-tight text-paper transition-transform hover:scale-[1.02]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10 border border-teal/30 text-teal font-mono text-sm font-bold shadow-[0_0_15px_rgba(0,242,213,0.2)]">
            B&B
          </span>
          <span className="tracking-tight">
            Bits<span className="text-teal font-extrabold">&</span>Builds
          </span>
        </Link>

        {/* Live Availability Pill (LXL Creative style) */}
        <div className="hidden xl:flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1 text-[11px] font-mono text-paper/80">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          <span>Available for projects in India & Worldwide</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) =>
            item.isMega ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  data-cursor-text="SERVICES"
                  className={`eyebrow !text-xs transition-colors ${
                    pathname.startsWith("/services") ? "!text-teal font-bold" : "!text-paper/80 hover:!text-teal"
                  }`}
                >
                  {item.label}
                  <span className="text-[10px] text-teal/70">▾</span>
                </Link>

                {/* Mega Menu Dropdown */}
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4">
                    <div className="rounded-2xl border border-white/10 bg-ink-card/95 p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2 px-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                          Studio Capabilities (7 Core Services)
                        </span>
                        <Link
                          href="/services"
                          className="font-mono text-[11px] text-teal hover:underline"
                        >
                          View All Services →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            data-cursor-text="VIEW"
                            className="group flex flex-col justify-between rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-teal/30 hover:bg-white/[0.04]"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[11px] font-bold text-teal">{s.tag}</span>
                              <span className="text-[10px] font-mono text-paper/40 group-hover:text-teal transition-colors">↗</span>
                            </div>
                            <span className="mt-1 font-display text-sm font-semibold text-paper group-hover:text-teal transition-colors">
                              {s.title}
                            </span>
                            <span className="mt-0.5 text-xs text-paper/50 line-clamp-1">
                              {s.short}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                data-cursor-text={item.label.toUpperCase()}
                className={`eyebrow !text-xs transition-colors ${
                  pathname === item.href ? "!text-teal font-bold" : "!text-paper/80 hover:!text-teal"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="CHAT"
            className="flex items-center gap-2 rounded-full border border-teal/40 bg-teal/5 px-4 py-2 font-mono text-xs text-teal transition-all hover:border-teal hover:bg-teal/15"
          >
            <span className="text-sm">💬</span>
            <span className="tracking-wide">WhatsApp</span>
          </a>

          <Link
            href="/contact"
            data-cursor-text="START"
            className="group flex items-center gap-2 rounded-full bg-teal px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-teal-bright hover:shadow-[0_0_20px_rgba(0,242,213,0.4)]"
          >
            <span>Start a Project</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-5 bg-paper transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-paper transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto bg-ink/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">Navigation</p>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-2xl font-semibold transition-colors ${
                    pathname === item.href ? "text-teal" : "text-paper hover:text-teal"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-white/10 pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
                Our Services
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3 text-sm text-paper/90 hover:bg-teal/10 hover:text-teal"
                  >
                    <span>{s.title}</span>
                    <span className="font-mono text-xs text-teal">{s.tag}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-full bg-teal py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-ink"
              >
                Start a Project →
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-teal/40 py-3 text-center font-mono text-xs uppercase tracking-wider text-teal"
              >
                Chat on WhatsApp (+91 63676 37487)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
