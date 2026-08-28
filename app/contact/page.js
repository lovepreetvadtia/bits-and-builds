import React from "react";
import ContactForm from "@/components/ContactForm";
import GsapTextReveal from "@/components/GsapTextReveal";
import Tilt3DCard from "@/components/Tilt3DCard";
import {
  buildMetadata,
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Bits and Builds — Sri Ganganagar | Start a Project",
  description:
    "Get in touch with founders Lavi and Jass at Bits and Builds. Phone/WhatsApp: +91 6367637487, Email: bitss.builds@gmail.com. Sri Ganganagar, Rajasthan 335002 — serving clients across India and worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Kickoff Consultation &amp; Scope
          </span>
        </div>

        <GsapTextReveal
          as="h1"
          text="Tell us what you're building."
          variant="chars"
          className="max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
          highlightWord="building."
          highlightClass="text-[#F2C230]"
        />

        <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          Whether you need a Next.js web application, Google Maps SEO dominance,
          high-ROAS Meta &amp; Google Ads, or automated WhatsApp booking for your clinic or
          restaurant — we are ready to build.
        </p>

        <div className="mt-12 sm:mt-16 grid gap-8 lg:gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <Tilt3DCard maxTilt={6} scale={1.02} className="rounded-3xl">
              <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-white shadow-xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#F2C230] mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#F2C230] animate-ping" />
                  <span>Fastest Response Channel</span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  Direct WhatsApp with founders
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed font-normal">
                  Connect directly with Lavi and Jass. Average response time is under 15 minutes during
                  operating hours.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F2C230] px-6 py-3 text-xs font-semibold text-gray-900 hover:bg-[#D9AC1F] transition-all hover:scale-105"
                >
                  <span>Chat on WhatsApp ({AGENCY_PHONE})</span>
                  <span>→</span>
                </a>
              </div>
            </Tilt3DCard>

            {/* Studio Info Cards */}
            <div className="space-y-4 text-xs font-medium">
              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 shadow-xs text-gray-900 dark:text-white">
                <p className="uppercase tracking-wider text-gray-500 dark:text-gray-400 text-[11px] mb-1 font-semibold">Direct Studio Email</p>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] transition-colors"
                >
                  {AGENCY_EMAIL}
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 shadow-xs text-gray-900 dark:text-white">
                <p className="uppercase tracking-wider text-gray-500 dark:text-gray-400 text-[11px] mb-1 font-semibold">Phone Line</p>
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] transition-colors"
                >
                  {AGENCY_PHONE}
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 shadow-xs text-gray-900 dark:text-white">
                <p className="uppercase tracking-wider text-gray-500 dark:text-gray-400 text-[11px] mb-1 font-semibold">Studio Headquarters</p>
                <p className="text-base font-medium text-gray-900 dark:text-white">{AGENCY_LOCATION}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-normal">Operating Hours: Mon - Sat (9:00 AM - 8:00 PM IST)</p>
                <p className="mt-1 text-xs text-[#B88C14] dark:text-[#F2C230] font-semibold">Serving Clients Pan-India &amp; Worldwide Remote</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Builder Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
