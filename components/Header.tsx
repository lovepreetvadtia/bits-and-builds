"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Clock,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code2,
  MapPin,
  Target,
  Share2,
  Palette,
  Film,
  MessageSquare,
  Calculator,
} from "lucide-react";
import { services } from "@/lib/services";
import { AGENCY_PHONE, WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/seo";
import ThemeToggle from "@/components/ThemeToggle";
import ServiceIcon from "@/components/ServiceIcon";
import TextRollButton from "@/components/TextRollButton";

interface NavLink {
  href: string;
  label: string;
  isMega?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", isMega: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { title: "Web Development", href: "/services/web-development", icon: Code2 },
  { title: "SEO & Google Maps", href: "/services/seo", icon: MapPin },
  { title: "Meta & Google Ads", href: "/services/ppc", icon: Target },
  { title: "Social Media Growth", href: "/services/social-media", icon: Share2 },
  { title: "Brand Identity & Design", href: "/services/graphic-design", icon: Palette },
  { title: "Video & Reels Production", href: "/services/video-editing", icon: Film },
  { title: "WhatsApp Automation", href: "/services/automation", icon: MessageSquare },
  { title: "Project Estimator Tool", href: "/#estimator", icon: Calculator },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [time, setTime] = useState<string>("");
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Live IST Clock (24h/12h auto-formatted)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", options).format(new Date());
        setTime(formatted);
      } catch {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        setTime(`${hh}:${mm}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Window scroll listener for elevation change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  const isHome = pathname === "/";

  return (
    <>
      {/* 1. Global Floating Header (Fixed z-50) */}
      <header className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 px-3 sm:px-6 md:px-10 transition-all duration-300 pointer-events-none">
        <div className="mx-auto max-w-[1440px] pointer-events-auto">
          <nav
            aria-label="Main Navigation"
            className={`relative flex items-center justify-between gap-3 rounded-full px-3 sm:px-4 py-2 transition-all duration-300 ${scrolled || !isHome
                ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                : "bg-white/95 dark:bg-black/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              }`}
          >
            {/* LEFT: Brand Logo & Title */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2.5 group"
                aria-label="Bits and Builds Home"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                  <Image
                    src="/icons/logo.webp"
                    alt="Bits and Builds Logo"
                    width={32}
                    height={32}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-xs sm:text-sm tracking-tight text-gray-900 dark:text-white">
                    Bits and Builds
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F2C230] inline-block animate-pulse" />
                </div>
              </Link>
            </div>

            {/* CENTER: Desktop Navigation Links + Mega Dropdown */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.isMega ? (
                  <div
                    key={link.href}
                    className="flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${pathname.startsWith("/services")
                          ? "bg-[#F2C230] text-gray-900 font-semibold shadow-xs"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </Link>

                    {/* ReflexAI-Style 2-Column Mega Menu (Centered on navbar) */}
                    {servicesOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full w-[680px] max-w-[95vw] pt-3 z-50 animate-fade-in"
                        style={{ width: "680px", maxWidth: "95vw" }}
                      >
                        <div className="rounded-3xl border border-gray-200 dark:border-white/15 bg-white dark:bg-[#0A0A0A] p-6 shadow-2xl backdrop-blur-2xl text-gray-900 dark:text-white">
                          {/* Top Header Row */}
                          <div className="mb-4 flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-3 px-1">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#F2C230] animate-pulse" />
                              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 font-mono">
                                Core Capabilities
                              </span>
                            </div>

                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-[#B88C14] dark:hover:text-[#F2C230] transition-colors inline-flex items-center gap-1"
                            >
                              <span>View Complete Catalog</span>
                              <span>→</span>
                            </Link>
                          </div>

                          {/* 2-Column Clean Services Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                            {SERVICES.map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-200"
                                >
                                  {/* Soft hover background backdrop */}
                                  <div className="absolute inset-0 rounded-xl bg-[#F5F5F5] dark:bg-white/[0.07] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />

                                  {/* Icon box with expanding gold highlight pill */}
                                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-900 dark:text-white transition-colors duration-200">
                                    <div className="absolute inset-0 rounded-lg bg-[#F2C230]/20 dark:bg-[#F2C230]/25 scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
                                    <IconComponent className="relative h-4 w-4 text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-[#F2C230] transition-colors" />
                                  </div>

                                  {/* Bold, clean label */}
                                  <span className="relative text-[14px] sm:text-[15px] font-semibold text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-[#F2C230] transition-colors tracking-tight">
                                    {item.title}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Bottom Footer Bar */}
                          <div className="mt-5 pt-3.5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
                            <span className="text-gray-500 dark:text-gray-400 font-normal">
                              📍 Sri Ganganagar (335002) • Remote Worldwide
                            </span>
                            <a
                              href={WHATSAPP_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#B88C14] dark:text-[#F2C230] font-semibold hover:underline inline-flex items-center gap-1"
                            >
                              <span>Direct WhatsApp Consultation</span>
                              <span>→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${pathname === link.href
                        ? "bg-[#F2C230] text-gray-900 font-semibold shadow-xs"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* RIGHT: Live Clock, Status, Theme Toggle, WhatsApp & CTA */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Taking on projects status badge */}
              <span className="hidden xl:inline-block text-[12px] text-gray-500 dark:text-gray-400 font-normal select-none">
                Taking on projects for Q1 2026
              </span>

              {/* Live IST Clock */}
              <div className="hidden sm:flex items-center gap-1.5 text-[12px] text-gray-600 dark:text-gray-300 font-medium select-none bg-gray-100 dark:bg-white/10 px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-white/10">
                <Clock size={12} className="text-gray-500 dark:text-[#F2C230]" />
                <span suppressHydrationWarning>{time ? `${time} IST` : "17:00 IST"}</span>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center">
                <ThemeToggle />
              </div>

              {/* WhatsApp direct pill (Desktop) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-[#F2C230] transition-colors"
                title="Connect on WhatsApp"
              >
                <span>💬 WhatsApp</span>
              </a>

              {/* Primary CTA Button */}
              <div className="hidden sm:block">
                <TextRollButton
                  text="Start a project"
                  href="/contact"
                  variant="gold"
                />
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. Responsive Mobile Bottom Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Bottom Sheet Modal */}
        <div
          className={`absolute bottom-0 inset-x-0 mx-3 mb-3 bg-white dark:bg-[#0A0A0A] rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl border border-gray-200 dark:border-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          {/* Header row in mobile sheet */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-2 text-[12px] text-gray-600 dark:text-gray-300 font-medium">
              <Clock size={13} className="text-[#F2C230]" />
              <span suppressHydrationWarning>{time ? `${time} IST` : "17:00 IST"}</span>
            </div>
            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">
              Direct with Lavi &amp; Jass
            </span>
          </div>

          {/* Large Nav Links */}
          <div className="flex flex-col gap-3.5 my-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl sm:text-3xl font-medium transition-colors flex items-center justify-between ${pathname === link.href
                    ? "text-[#D9AC1F] font-semibold"
                    : "text-gray-900 dark:text-white hover:text-[#D9AC1F]"
                  }`}
              >
                <span>{link.label}</span>
                <span className="text-sm text-gray-400">↗</span>
              </Link>
            ))}
          </div>

          {/* Start a project CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#F2C230] hover:bg-[#D9AC1F] text-gray-900 rounded-full py-4 px-6 font-semibold text-sm uppercase tracking-wider flex items-center justify-between shadow-md transition-colors"
            >
              <span>Start a project</span>
              <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <ArrowRight size={16} strokeWidth={2.2} />
              </span>
            </Link>
          </div>

          {/* Social Channels Row in Mobile Sheet */}
          <div className="pt-4 flex items-center justify-around text-xs font-semibold text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-white/10 mt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-colors flex items-center gap-1.5"
            >
              <span>Instagram</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors flex items-center gap-1.5"
            >
              <span>Facebook</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
