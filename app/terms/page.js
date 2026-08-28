import React from "react";
import Link from "next/link";
import { buildMetadata, AGENCY_PHONE, AGENCY_EMAIL, WHATSAPP_URL } from "@/lib/seo";
import GsapTextReveal from "@/components/GsapTextReveal";

export const metadata = buildMetadata({
  title: "Terms & Conditions — Bits and Builds Studio",
  description:
    "Standard sprint agreements, intellectual property ownership, milestone deliveries, and engagement terms for Bits and Builds Studio.",
  path: "/terms",
});

export default function TermsPage() {
  const lastUpdated = "August 28, 2026";

  const sections = [
    {
      title: "1. Scope & Sprint Engagements",
      body: "Bits and Builds operates as an agile engineering and performance studio. Every project kickoff begins with an approved Scope of Work (SOW) detailing exact deliverables, tech stack specifications (e.g. Next.js 14, Tailwind, WhatsApp Cloud API), target performance benchmarks (90+ Lighthouse score), and milestone delivery schedules.",
    },
    {
      title: "2. Intellectual Property & Code Ownership",
      body: "Upon 100% settlement of agreed project fees, all bespoke source code, UI/UX designs, Figma components, copywriting, and media assets engineered specifically for the client become the sole intellectual property of the client. Bits and Builds retains the right to display non-sensitive project case studies and verified growth metrics within our studio portfolio.",
    },
    {
      title: "3. Third-Party Costs & Platform Accounts",
      body: "All external third-party costs — including domain registration, hosting providers (Vercel, AWS), advertising spend (Meta Ads, Google Ads), WhatsApp Cloud API conversational credits, and SMS gateways — are billed directly to the client's corporate billing account. Bits and Builds does not mark up third-party advertising spend.",
    },
    {
      title: "4. Review Cycles, Feedback & Revisions",
      body: "Each sprint phase includes dedicated review periods. Clients are provided staging links and preview deployments to submit consolidated feedback. Revisions within agreed scope parameters are executed promptly. Feature requests outside the agreed SOW are quoted as subsequent sprints.",
    },
    {
      title: "5. Invoicing & Milestone Payments",
      body: "Unless explicitly stated otherwise in a custom retainer contract, fixed-scope projects require an upfront deposit (typically 50%) prior to sprint kickoff, with remaining balance payable upon staging approval and prior to production domain cutover.",
    },
    {
      title: "6. Warranties & Post-Launch Support",
      body: "All web development deliveries include a 30-day post-launch warranty covering bug fixes and unexpected technical anomalies arising from the delivered codebase. Ongoing maintenance, search engine algorithm adaptations, and feature expansions are available under monthly engineering retainers.",
    },
    {
      title: "7. Governing Law & Dispute Resolution",
      body: "These terms and all commercial agreements executed with Bits and Builds Studio shall be governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the competent courts in Sri Ganganagar, Rajasthan.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F2C230] text-gray-900 text-[11px] sm:text-[12px] font-bold flex items-center justify-center select-none flex-shrink-0">
            📜
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 select-none">
            Terms of Service · Effective {lastUpdated}
          </span>
        </div>

        {/* H1 Heading */}
        <GsapTextReveal
          as="h1"
          text="Terms &amp; Sprint Agreements."
          variant="chars"
          className="max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
          highlightWord="Agreements."
          highlightClass="text-[#F2C230]"
        />

        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          Transparent guidelines for agile sprints, milestone payments, intellectual property handover, and client warranties.
        </p>

        {/* Policy Sections */}
        <div className="mt-12 sm:mt-16 max-w-4xl space-y-10">
          {sections.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#121212] p-6 sm:p-8 shadow-xs"
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                {s.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {s.body}
              </p>
            </div>
          ))}

          {/* Contact Box */}
          <div className="rounded-2xl border border-[#F2C230]/40 bg-[#F2C230]/10 p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Need a tailored enterprise MSA?
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              For custom Master Services Agreements (MSA) or customized NDA documents, contact founders Lavi &amp; Jass directly at{" "}
              <a href={`mailto:${AGENCY_EMAIL}`} className="font-semibold underline hover:text-[#B88C14] dark:hover:text-[#F2C230]">
                {AGENCY_EMAIL}
              </a>{" "}
              or via{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#B88C14] dark:hover:text-[#F2C230]">
                WhatsApp ({AGENCY_PHONE})
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
