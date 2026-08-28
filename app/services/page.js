import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import { services } from "@/lib/services";
import { buildMetadata, WHATSAPP_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Web Dev, SEO, PPC, Social Media, Design & Automation",
  description:
    "Explore the 7 core services of Bits and Builds: Server-rendered Next.js web development, local SEO (GMB, AEO, GEO), Meta/Google PPC ads, social media, reels & short-form video, and clinic/restaurant booking automation.",
  path: "/services",
});

const COMPARISON = [
  {
    feature: "Website Architecture",
    us: "Next.js App Router (100% Server-Side Rendered, sub-800ms loads)",
    others: "Bloated WordPress themes with 40+ plugins (4-8s slow loads)",
  },
  {
    feature: "Local SEO & AI Search",
    us: "GMB 3-pack optimization + AEO & GEO structured JSON-LD schemas",
    others: "Generic keyword stuffing on outdated directory listings",
  },
  {
    feature: "Paid Advertising (PPC)",
    us: "Server-side CAPI tracking, high-ROAS creative funnels & weekly optimization",
    others: "Boosting posts directly with no conversion tracking or pixel setup",
  },
  {
    feature: "Local Business Operations",
    us: "24/7 automated WhatsApp appointment & table reservation bots",
    others: "Manual phone registers causing 30%+ patient/diner no-shows",
  },
  {
    feature: "Account Leadership",
    us: "Direct partnership with founders Lavi & Jass on every project",
    others: "Shuffled between junior account managers and outsourced teams",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
              Capabilities &amp; Solutions
            </span>
          </div>

          <GsapTextReveal
            as="h1"
            text="Everything your brand needs to dominate online."
            variant="chars"
            className="max-w-5xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
            highlightWord="dominate"
            highlightClass="text-[#F2C230]"
          />

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            Seven unified capabilities engineered for performance, search visibility, and revenue.
            Choose a standalone service or partner with us for full-stack growth.
          </p>
        </div>
      </section>

      {/* Services Grid (7 Cards) */}
      <section className="bg-[#F5F5F5] dark:bg-[#0E0E0E] border-b border-gray-200 dark:border-white/10 px-5 sm:px-8 lg:px-12 py-16 sm:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Us vs Generic Agencies */}
      <ScrollRevealSection minHeight="500px">
        <section className="border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                    The Standard
                  </span>
                </div>
                <GsapTextReveal
                  as="h2"
                  text="Why brands choose Bits and Builds."
                  variant="words"
                  className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
                  highlightWord="Bits"
                  highlightClass="text-[#F2C230]"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md leading-relaxed font-normal">
                We eliminate agency middlemen, slow page builders, and vanity metrics in favor of pure engineering and measurable revenue.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-3 shadow-sm">
              <table className="w-full text-left text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#1c1c1c] rounded-xl text-xs uppercase tracking-wider text-gray-700 dark:text-gray-200 font-semibold">
                    <th className="p-5 sm:p-6 rounded-l-xl">Capability Metric</th>
                    <th className="p-5 sm:p-6 text-gray-900 dark:text-white font-semibold">Bits &amp; Builds</th>
                    <th className="p-5 sm:p-6 text-gray-500 dark:text-gray-400 font-medium rounded-r-xl">Typical Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-xs">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-white dark:hover:bg-white/5 transition-colors">
                      <td className="p-5 sm:p-6 text-gray-900 dark:text-white text-sm font-semibold">
                        {row.feature}
                      </td>
                      <td className="p-5 sm:p-6 text-gray-900 dark:text-[#F2C230] font-semibold bg-[#F2C230]/20 rounded-xl">
                        ✓ {row.us}
                      </td>
                      <td className="p-5 sm:p-6 text-gray-600 dark:text-gray-400">
                        ✕ {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Action CTA */}
      <ScrollRevealSection minHeight="300px">
        <section className="bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px] rounded-3xl border border-white/10 bg-[#0A0A0A] text-white p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F2C230] font-semibold">
                Custom Growth Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mt-2">
                Not sure which engine you need?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal">
                Book a 20-minute consultation with founders Lavi and Jass. We will audit your current
                digital presence and give you an actionable growth roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <TextRollButton
                text="Schedule a sprint call"
                href="/contact"
                variant="gold"
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-xs font-medium text-white transition-colors"
              >
                <span>WhatsApp Direct</span>
                <span className="text-[#F2C230]">↗</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </div>
  );
}
