import React from "react";
import Link from "next/link";
import { buildMetadata, AGENCY_PHONE, AGENCY_EMAIL, WHATSAPP_URL } from "@/lib/seo";
import GsapTextReveal from "@/components/GsapTextReveal";

export const metadata = buildMetadata({
  title: "Privacy Policy — Bits and Builds Studio",
  description:
    "Privacy guidelines, data protection protocols, and communication standards for Bits and Builds Studio clients and visitors.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 28, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      body: "When you interact with Bits and Builds through our web application, contact consultation forms, project estimator tools, or direct WhatsApp links, we collect information necessary to evaluate and execute digital engineering sprints. This includes: names, corporate emails, telephone numbers, project scope descriptions, domain names, and business addresses.",
    },
    {
      title: "2. How We Utilize Your Data",
      body: "We process collected information strictly for legitimate commercial purposes: (a) formulating custom technical roadmaps and project estimates, (b) establishing secure development environments and cloud server accounts, (c) dispatching transactional email notifications regarding inquiry status, and (d) communicating directly via WhatsApp regarding sprint deliverables.",
    },
    {
      title: "3. WhatsApp & Conversational Communications",
      body: `By submitting your phone number or initiating a WhatsApp chat with Bits and Builds (${AGENCY_PHONE}), you consent to direct, non-automated communication with studio founders Lavi & Jass regarding your project inquiry. We never sell, rent, or distribute contact lists to third-party telemarketers or advertisers.`,
    },
    {
      title: "4. Client Confidentiality & Code IP",
      body: "Bits and Builds treats all client source code, database architectures, customer lists, and proprietary marketing data with strict non-disclosure security. All custom software, custom Next.js components, vector design assets, and marketing collateral engineered during paid sprints become 100% the intellectual property of the client upon final invoice settlement.",
    },
    {
      title: "5. Analytics, Cookies & Telemetry",
      body: "Our web application utilizes lightweight, privacy-focused telemetry to observe Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint), page latency, and geographic referral traffic. We do not use invasive fingerprinting or intrusive tracking cookies.",
    },
    {
      title: "6. Third-Party Integrations",
      body: "In delivering integrated client solutions, we interface with enterprise platforms including: Google Cloud Platform (Maps APIs, Google Search Console, Google Business Profiles), Meta Business Manager (Server-Side Conversions API), and secure SMTP relay infrastructure. Each integration operates under the respective provider's enterprise privacy framework.",
    },
    {
      title: "7. Your Rights & Data Erasure",
      body: `You maintain full rights to inspect, update, or request the complete deletion of your contact records and historical project correspondence. To submit an erasure request, email ${AGENCY_EMAIL} or reach out directly to our founders via WhatsApp.`,
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F2C230] text-gray-900 text-[11px] sm:text-[12px] font-bold flex items-center justify-center select-none flex-shrink-0">
            ⚖
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 select-none">
            Legal &amp; Data Governance · Effective {lastUpdated}
          </span>
        </div>

        {/* H1 Heading */}
        <GsapTextReveal
          as="h1"
          text="Privacy Policy &amp; Data Governance."
          variant="chars"
          className="max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
          highlightWord="Governance."
          highlightClass="text-[#F2C230]"
        />

        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          How Bits and Builds protects client intellectual property, handles confidential project requirements, and manages communications.
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

          {/* Contact Studio Box */}
          <div className="rounded-2xl border border-[#F2C230]/40 bg-[#F2C230]/10 p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Questions regarding data handling?
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Direct all inquiries to technical co-founders Lavi &amp; Jass at{" "}
              <a href={`mailto:${AGENCY_EMAIL}`} className="font-semibold underline hover:text-[#B88C14] dark:hover:text-[#F2C230]">
                {AGENCY_EMAIL}
              </a>{" "}
              or message via{" "}
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
