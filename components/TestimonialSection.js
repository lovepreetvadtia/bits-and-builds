"use client";

import React from "react";

const REVIEWS = [
  {
    author: "Dr. Rajesh Verma",
    role: "Chief Medical Officer · City Super Specialty Clinic",
    location: "Sri Ganganagar, Rajasthan",
    quote:
      "Bits and Builds overhauled our website to Next.js and built our automated WhatsApp OPD booking system. Our patient drop-off rate fell by 68%, and we now dominate local Google Maps search results.",
    avatarText: "RV",
    stats: "+340% Patient Bookings",
  },
  {
    author: "Amit Sharma",
    role: "Founder & Managing Director · Royale Dine Hospitality",
    location: "Jaipur, Rajasthan",
    quote:
      "The combination of sub-second web speed and automated WhatsApp table reservations has completely transformed our weekend rushes. Lavi and Jass operate with surgical technical precision.",
    avatarText: "AS",
    stats: "99/100 PageSpeed · 4.8x ROAS",
  },
  {
    author: "Priya Agarwal",
    role: "E-Commerce Founder · Luxe Ayurveda D2C",
    location: "Delhi NCR & Pan-India",
    quote:
      "Unlike traditional marketing agencies that talk in vanity metrics, Bits and Builds engineered high-converting landing pages that dropped our Meta Ad CAC by 42% in our very first month.",
    avatarText: "PA",
    stats: "-42% Customer Acq. Cost",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
              10
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
              Verified Client Reviews
            </span>
          </div>

          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
            Client transformations that speak in revenue.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            Real revenue, automated workflows, and Google Maps category dominance delivered for ambitious founders.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {/* Card 1 */}
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] hover:bg-white dark:hover:bg-[#1a1a1a] p-8 sm:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md">
            <div>
              <div className="flex items-center gap-1 text-[#F2C230] text-lg mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-medium mb-8">
                &quot;{REVIEWS[0].quote}&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200/70 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-full bg-gray-900 dark:bg-white/10 text-white dark:text-[#F2C230] text-sm font-semibold flex items-center justify-center">
                  {REVIEWS[0].avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {REVIEWS[0].author}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                    {REVIEWS[0].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Center Featured Card (Deep Black) */}
          <div className="relative rounded-3xl bg-[#0A0A0A] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-white/10 lg:-translate-y-4">
            <div className="absolute -top-3 right-8 rounded-full bg-[#F2C230] px-3.5 py-1 text-[11px] font-semibold text-gray-900 uppercase tracking-wider shadow-sm">
              Featured Case
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#F2C230] text-lg mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-medium mb-8">
                &quot;{REVIEWS[1].quote}&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-full bg-[#F2C230] text-gray-900 text-sm font-bold flex items-center justify-center">
                  {REVIEWS[1].avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {REVIEWS[1].author}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {REVIEWS[1].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] hover:bg-white dark:hover:bg-[#1a1a1a] p-8 sm:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md">
            <div>
              <div className="flex items-center gap-1 text-[#F2C230] text-lg mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-medium mb-8">
                &quot;{REVIEWS[2].quote}&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200/70 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-full bg-gray-900 dark:bg-white/10 text-white dark:text-[#F2C230] text-sm font-semibold flex items-center justify-center">
                  {REVIEWS[2].avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {REVIEWS[2].author}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                    {REVIEWS[2].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
