import React from "react";
import { services } from "@/lib/services";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import ServiceIcon from "@/components/ServiceIcon";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";
import Tilt3DCard from "@/components/Tilt3DCard";
import { AGENCY_PHONE, WHATSAPP_URL, serviceDetailSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Bits and Builds`,
    description: service.description.slice(0, 160),
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const schema = serviceDetailSchema(service);  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 font-medium">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-[#F2C230] font-semibold">{service.tag}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A0A0A] dark:bg-black text-[#F2C230] shadow-sm border border-transparent dark:border-white/10">
              <ServiceIcon slug={service.slug} className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
              {service.badge}
            </span>
          </div>

          <GsapTextReveal
            as="h1"
            text={`${service.title}.`}
            variant="chars"
            className="mt-6 sm:mt-8 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white max-w-5xl"
            highlightWord={service.title.split(" ")[0]}
            highlightClass="text-[#F2C230]"
          />

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed font-normal">
            {service.heroSubtitle}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <TextRollButton
              text="Kickoff this engine"
              href="/contact"
              variant="gold"
            />
            <a
              href={`${WHATSAPP_URL}%20regarding%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-white/15 bg-white dark:bg-[#141414] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] px-6 py-3.5 text-xs font-medium text-gray-900 dark:text-white transition-colors shadow-xs"
            >
              <span>Chat on WhatsApp ({AGENCY_PHONE})</span>
              <span className="text-[#F2C230]">💬</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Solved vs Solution */}
      <section className="bg-[#F5F5F5] dark:bg-[#0E0E0E] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
            {/* Left: The Challenge */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-8 sm:p-12 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 rounded-full px-3 py-1 mb-4">
                  ✕ The Challenge
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 dark:text-white mt-2">
                  What holds most businesses back
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {service.problemSolved}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Lack of unified conversion engineering
              </div>
            </div>

            {/* Right: The Solution */}
            <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] text-white p-8 sm:p-12 shadow-xl flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F2C230] bg-[#F2C230]/10 border border-[#F2C230]/30 rounded-full px-3 py-1 mb-4">
                  ✓ The Bits &amp; Builds Fix
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mt-2">
                  How we engineer the solution
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-[#F2C230] uppercase tracking-wider">
                High Craft · Sub-Second Speed · Direct Partner Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Deliverables */}
      <section className="bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                ✓
              </span>
              <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                Included Scope
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
              Concrete deliverables, zero fluff.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {service.deliverables.map((item, i) => (
              <Tilt3DCard key={i} maxTilt={6} scale={1.02} className="rounded-2xl">
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 shadow-xs text-gray-900 dark:text-white h-full">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-gray-900 text-xs font-bold font-mono">
                    ✓
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Production Tools & Software Suite Section */}
      <section className="bg-[#F5F5F5] dark:bg-[#0E0E0E] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                  ⚙
                </span>
                <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 py-1">
                  Production Software &amp; Toolchain
                </span>
              </div>
              <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
                Tools we deploy for this engine.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md font-normal leading-relaxed">
              We execute exclusively on industry-standard, professional software stacks — zero amateur templates, no shortcuts, and full master asset delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {(service.toolStack || service.tools.map((t) => ({ name: t, category: "Core Software", desc: "Production-grade toolchain deployed for active client deliverables.", icon: "🛠️" }))).map((tool, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-7 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {tool.svgIcon ? (
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F5F5] dark:bg-white/5 p-2 border border-gray-200 dark:border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.svgIcon}
                          alt={tool.name}
                          className="h-7 w-7 object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl">{tool.icon || "⚡"}</span>
                    )}
                    <span className="rounded-full bg-[#F5F5F5] dark:bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-gray-600 dark:text-gray-300 font-semibold border border-transparent dark:border-white/10">
                      {tool.category || "Production Tool"}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Production Grade</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white font-mono">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                ▶
              </span>
              <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                Workflow Protocol
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
              How we execute this service.
            </h2>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#F5F5F5] dark:bg-[#141414] rounded-3xl border border-gray-200 dark:border-white/10 p-7 flex flex-col justify-between shadow-xs text-gray-900 dark:text-white min-h-[260px]"
              >
                <div>
                  <span className="text-xs font-bold text-gray-900 bg-[#F2C230] px-2.5 py-1 rounded-full">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-medium text-lg text-gray-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="bg-[#F5F5F5] dark:bg-[#0E0E0E] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                ?
              </span>
              <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 py-1">
                Service Specific Queries
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
              Questions about {service.title}.
            </h2>
          </div>

          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white dark:bg-[#0A0A0A] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between border-b border-gray-200 dark:border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                  +
                </span>
                <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                  Complementary Engines
                </span>
              </div>
              <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
                Pair this engine with:
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] font-semibold transition-colors underline decoration-[#F2C230] decoration-2 underline-offset-4"
            >
              All 7 Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
