"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import {
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
} from "@/lib/seo";
import ServiceIcon from "@/components/ServiceIcon";

const MENU_ITEMS = [
  { id: "01", href: "/", label: "Home", sub: "Digital Engineering Studio" },
  { id: "02", href: "/services", label: "Services", sub: "7 Full-Stack Engines", hasSubmenu: true },
  { id: "03", href: "/about", label: "About", sub: "Founders Lavi & Jass" },
  { id: "04", href: "/blog", label: "Blog", sub: "Studio Notes & Knowledge" },
  { id: "05", href: "/contact", label: "Contact", sub: "Kickoff & Sprints" },
];

export default function AwwwardsMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live IST Clock (Asia/Kolkata)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch (e) {
        setCurrentTime("IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setServicesExpanded(false);
      setHoveredIndex(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-[9999] h-[100dvh] max-h-[100dvh] w-full flex flex-col justify-between bg-[#0e1410] text-white select-none overflow-y-auto overflow-x-hidden font-satoshi animate-menu-enter"
      style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255, 225, 124, 0.05) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(23, 30, 25, 0.9) 0%, transparent 70%)`,
      }}
    >
      {/* 1. Top Bar Navigation Row (Fixed compact height) */}
      <div className="relative z-50 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between border-b border-white/10 shrink-0">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-white hover:border-yellow transition-all group"
        >
          <div className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/icons/logo.svg"
              alt="Bits and Builds Logo"
              width={24}
              height={24}
              className="h-full w-full object-contain drop-shadow-[0_1px_6px_rgba(255,225,124,0.3)]"
            />
          </div>
          <span className="font-anton text-xs sm:text-sm tracking-tight text-white">
            BITS &amp; BUILDS
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-yellow inline-block animate-pulse" />
        </Link>

        {/* Live Status Indicator (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-sage/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white font-medium">STUDIO OPEN</span>
          <span>•</span>
          <span>{AGENCY_LOCATION} ({currentTime})</span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          data-cursor-text="CLOSE"
          aria-label="Close navigation menu"
          className="group flex items-center gap-2 rounded-full bg-yellow text-charcoal px-3.5 sm:px-4 py-1.5 font-anton text-xs uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 font-bold"
        >
          <span>CLOSE</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-charcoal text-white text-[10px] transition-transform group-hover:rotate-90">
            ✕
          </span>
        </button>
      </div>

      {/* 2. Main Menu Content (Flex-1 Centered & Fitted without vertical overflow) */}
      <div className="relative z-30 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 py-3 sm:py-4 my-auto flex-1 flex flex-col justify-center min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          
          {/* Left Column: Numbered Editorial Links */}
          <div className="lg:col-span-7 flex flex-col space-y-1.5 sm:space-y-2 md:space-y-3">
            {MENU_ITEMS.map((item, idx) => {
              const isActive = pathname === item.href;
              const isHovered = hoveredIndex === idx;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <div key={item.id} className="menu-item-reveal" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(idx)}
                    className={`group flex flex-col transition-all duration-300 ${
                      isAnyHovered && !isHovered ? "opacity-35 blur-[0.3px]" : "opacity-100"
                    }`}
                  >
                    <div className="flex items-baseline gap-2.5 sm:gap-4 md:gap-6">
                      {/* Monospace Number Badge */}
                      <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-sage/50 group-hover:text-yellow transition-colors w-5 sm:w-6">
                        {item.id}
                      </span>

                      {/* Large Link */}
                      <div className="flex-1 flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          data-cursor-text={item.label.toUpperCase()}
                          className={`font-anton text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2 inline-block leading-none ${
                            isActive ? "text-yellow" : "text-white group-hover:text-yellow"
                          }`}
                        >
                          {item.label}
                        </Link>

                        {/* Expandable Services Drawer Toggle */}
                        {item.hasSubmenu && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setServicesExpanded(!servicesExpanded);
                            }}
                            className="ml-2.5 flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-white/80 hover:border-yellow hover:text-yellow transition-colors"
                            aria-label="Expand service list"
                          >
                            <span className="uppercase">
                              {servicesExpanded ? "Hide" : "7 Engines"}
                            </span>
                            <span className={`text-[10px] transition-transform duration-300 ${servicesExpanded ? "rotate-180 text-yellow" : ""}`}>
                              ▾
                            </span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Subtitle */}
                    <div className="pl-7 sm:pl-10 md:pl-12 flex items-center gap-2 pt-0.5 font-mono text-[10px] sm:text-[11px] text-sage/50 group-hover:text-sage/90 transition-colors">
                      <span>{item.sub}</span>
                      {isActive && <span className="text-yellow font-bold">● Active</span>}
                    </div>

                    {/* Expandable Services Submenu Drawer */}
                    {item.hasSubmenu && servicesExpanded && (
                      <div className="mt-2 ml-7 sm:ml-10 md:ml-12 p-2.5 sm:p-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 gap-1 animate-fade-in max-h-48 overflow-y-auto">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={onClose}
                            className="group/srv flex items-center gap-2 rounded-lg p-1.5 bg-white/[0.03] hover:bg-yellow hover:text-charcoal border border-white/5 transition-all text-white text-xs"
                          >
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/10 text-yellow group-hover/srv:bg-charcoal group-hover/srv:text-yellow transition-colors">
                              <ServiceIcon slug={s.slug} className="h-3 w-3" />
                            </div>
                            <span className="font-anton text-[11px] uppercase tracking-wide truncate">
                              {s.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Studio Credentials & Direct Contact (Clean, Compact & Non-overlapping) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 lg:border-l lg:border-white/10 lg:pl-8 pt-2 lg:pt-0">
            {/* HQ & Founders */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs font-mono text-sage/80 bg-white/[0.02] p-3 rounded-2xl border border-white/5">
              <div>
                <span className="block uppercase text-[9px] sm:text-[10px] tracking-widest text-sage/50 mb-0.5">
                  Location / HQ
                </span>
                <span className="text-white font-medium block text-xs">{AGENCY_LOCATION}</span>
                <span className="text-sage/60 text-[10px]">Rajasthan · India</span>
              </div>

              <div>
                <span className="block uppercase text-[9px] sm:text-[10px] tracking-widest text-sage/50 mb-0.5">
                  Founders &amp; Leads
                </span>
                <span className="text-white font-medium block text-xs">Lavi &amp; Jass</span>
                <span className="text-yellow text-[10px]">Direct Execution</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <Link
                href="/contact"
                onClick={onClose}
                data-cursor-text="START"
                className="group flex w-full items-center justify-between rounded-xl bg-yellow px-4 py-2.5 sm:py-3 font-anton text-xs sm:text-sm uppercase tracking-wider text-charcoal shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-white active:scale-95 font-bold"
              >
                <span>Start a Project Blueprint</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-2 sm:py-2.5 font-anton text-xs uppercase tracking-wider text-white hover:border-yellow hover:text-yellow transition-all"
              >
                <span className="flex items-center gap-1.5">
                  <span>💬 Direct WhatsApp</span>
                  <span className="font-mono text-[10px] text-sage/60 font-normal">
                    ({AGENCY_PHONE})
                  </span>
                </span>
                <span className="text-yellow font-bold">↗</span>
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono text-sage/70">
              <a href={`mailto:${AGENCY_EMAIL}`} className="hover:text-yellow hover:underline">
                ✉️ {AGENCY_EMAIL}
              </a>
              <span>•</span>
              <a href={`tel:${AGENCY_PHONE}`} className="hover:text-yellow hover:underline">
                📞 {AGENCY_PHONE}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Social Bar (Compact height) */}
      <div className="relative z-50 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 border-t border-white/10 flex items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-sage/60 shrink-0">
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow transition-colors"
          >
            GitHub
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} Bits and Builds Studio
        </div>
      </div>
    </div>
  );
}



