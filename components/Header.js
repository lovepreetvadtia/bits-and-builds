"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL } from "@/lib/seo";
import ThemeToggle from "@/components/ThemeToggle";
import ServiceIcon from "@/components/ServiceIcon";

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
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* 1. Progressive Invisible Blur Veil (Active on scroll, smooth gradient mask blur without hard edges) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 right-0 h-[76px] sm:h-[84px] z-40 select-none transition-opacity duration-400 ease-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
        }}
      >
        {/* Subtle atmospheric tint matching dark/light mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent dark:from-[#171e19]/45 dark:via-[#171e19]/15 dark:to-transparent" />
      </div>

      {/* 2. Fixed Header Bar (z-50) */}
      <header className="fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-3.5 px-4 sm:px-6 md:px-10 transition-all duration-300">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
          {/* Left: Brand Logo Pill */}
          <Link
            href="/"
            data-cursor-text="HOME"
            className="flex items-center gap-2 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-charcoal/15 dark:border-white/15 px-3.5 sm:px-4 py-2 text-charcoal dark:text-white shadow-md dark:shadow-xl hover:border-yellow transition-all group shrink-0"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-charcoal font-anton text-xs font-bold shadow-xs transition-transform group-hover:scale-105">
              BB
            </div>
            <span className="font-anton text-sm sm:text-base tracking-tight text-charcoal dark:text-white">
              BITS &amp; BUILDS
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-yellow inline-block animate-pulse" />
          </Link>

          {/* Center: Floating Navigation Pill (Adapts between light & dark mode) */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-charcoal/15 dark:border-white/15 px-4 py-2 text-charcoal dark:text-white shadow-md dark:shadow-xl transition-all">
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
                    className={`flex items-center gap-1 rounded-full px-3 py-1 font-anton text-xs uppercase tracking-wider transition-colors ${
                      pathname.startsWith("/services")
                        ? "text-charcoal bg-yellow/40 dark:text-yellow dark:bg-white/10 font-bold"
                        : "text-charcoal/75 hover:text-charcoal hover:bg-charcoal/5 dark:text-white/80 dark:hover:text-yellow dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-70">▾</span>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-[560px] pt-3 z-50">
                      <div className="rounded-2xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-[#171e19] p-5 shadow-2xl backdrop-blur-2xl text-charcoal dark:text-white">
                        <div className="mb-3 flex items-center justify-between border-b border-charcoal/10 dark:border-white/10 pb-2.5">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 dark:text-sage/70 font-bold">
                            Growth &amp; Code Engines (7 Services)
                          </span>
                          <Link
                            href="/services"
                            className="font-anton text-xs uppercase text-charcoal dark:text-yellow hover:underline"
                          >
                            All Services →
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group/item flex items-center gap-2.5 rounded-xl p-2.5 transition-all bg-[#f4f6f4] dark:bg-[#151d17] hover:bg-[#e8ece8] dark:hover:bg-[#1d2720] border border-charcoal/10 dark:border-white/[0.08]"
                            >
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/5 text-charcoal dark:text-yellow group-hover/item:bg-yellow group-hover/item:text-charcoal transition-colors">
                                <ServiceIcon slug={s.slug} className="h-3.5 w-3.5" />
                              </div>
                              <span className="font-anton text-xs tracking-wide text-charcoal dark:text-white group-hover/item:text-charcoal dark:group-hover/item:text-yellow truncate">
                                {s.title}
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
                  className={`rounded-full px-3 py-1 font-anton text-xs uppercase tracking-wider transition-colors ${
                    pathname === item.href
                      ? "text-charcoal bg-yellow/40 dark:text-yellow dark:bg-white/10 font-bold"
                      : "text-charcoal/75 hover:text-charcoal hover:bg-charcoal/5 dark:text-white/80 dark:hover:text-yellow dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Actions (Theme Toggle + WhatsApp + CTA) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-charcoal/15 dark:border-white/15 px-3 py-1.5 text-charcoal dark:text-white shadow-md dark:shadow-xl transition-all">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Direct WhatsApp Pill */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-anton uppercase text-charcoal/85 dark:text-white/90 hover:text-charcoal dark:hover:text-yellow transition-colors"
              >
                <span>💬 WhatsApp ↗</span>
              </a>
            </div>

            {/* Primary CTA Button */}
            <Link
              href="/contact"
              data-cursor-text="START"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow text-charcoal px-4 sm:px-5 py-2.5 font-anton text-xs uppercase tracking-wider shadow-md dark:shadow-lg hover:shadow-xl hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 font-bold"
            >
              <span>Start a Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-charcoal text-charcoal dark:text-white border border-charcoal/20 dark:border-white/20 shadow-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mx-2 rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-charcoal/15 dark:border-white/15 p-6 text-charcoal dark:text-white shadow-2xl space-y-4">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-anton text-xl uppercase tracking-wider text-charcoal dark:text-white hover:text-yellow transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-charcoal/10 dark:border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-charcoal/5 dark:bg-white/10 p-3 font-anton text-xs uppercase text-charcoal dark:text-yellow"
              >
                <span>💬 Direct WhatsApp ({AGENCY_PHONE})</span>
                <span>↗</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-full bg-yellow p-3 font-anton text-xs uppercase text-charcoal font-bold"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
