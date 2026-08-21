"use client";

import GsapTextReveal from "@/components/GsapTextReveal";

const REVIEWS = [
  {
    author: "DR. RAJESH VERMA",
    role: "Chief Medical Officer · City Super Specialty Clinic",
    location: "Sri Ganganagar, Rajasthan",
    quote:
      "Bits and Builds overhauled our website to Next.js and built our automated WhatsApp OPD booking system. Our patient booking drop-off rate fell by 68%, and we now dominate local Google Maps search results.",
    avatarText: "RV",
    stats: "+340% Patient Bookings",
  },
  {
    author: "AMIT SHARMA",
    role: "Founder & Managing Director · Royale Dine Hospitality",
    location: "Jaipur, Rajasthan",
    quote:
      "The combination of sub-second web speed and automated WhatsApp table reservations has completely transformed our weekend rushes. Lavi and Jass operate with surgical technical precision.",
    avatarText: "AS",
    stats: "99/100 PageSpeed · 4.8x ROAS",
  },
  {
    author: "PRIYA AGARWAL",
    role: "E-Commerce Founder · Luxe Ayurveda D2C",
    location: "Delhi NCR & Pan-India",
    quote:
      "Unlike traditional marketing agencies that talk in fluff, Bits and Builds engineered high-converting landing pages that dropped our Meta Ad CAC by 42% in our very first month.",
    avatarText: "PA",
    stats: "-42% Customer Acq. Cost",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative px-6 py-28 md:px-10 bg-white dark:bg-charcoal grid-editorial-light dark:grid-editorial-40 text-charcoal dark:text-white overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-editorial-light dark:badge-editorial">
            <span className="h-2 w-2 rounded-full bg-yellow animate-ping" />
            <span>High-Impact Proof</span>
          </div>
          <GsapTextReveal
            as="h2"
            variant="words"
            text="VERIFIED CLIENT TRANSFORMATIONS."
            highlightWord="TRANSFORMATIONS."
            highlightClass="highlight-yellow"
            className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
          />
          <p className="font-satoshi text-base md:text-lg text-charcoal/70 dark:text-sage/80">
            Real revenue, automated workflows, and Google Maps dominance delivered for ambitious founders.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Card 1: Side Card */}
          <div className="relative rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-8 md:p-10 flex flex-col justify-between shadow-lg card-editorial">
            <div>
              {/* 5 Stars with strong light/dark contrast */}
              <div className="flex items-center gap-1.5 text-amber-500 dark:text-yellow text-xl mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="drop-shadow-sm">
                    {star}
                  </span>
                ))}
              </div>

              {/* Satoshi-medium body text */}
              <p className="font-satoshi font-medium text-lg leading-relaxed text-charcoal/90 dark:text-white/90 italic mb-8">
                &quot;{REVIEWS[0].quote}&quot;
              </p>
            </div>

            {/* Avatar Footer */}
            <div className="pt-6 border-t border-charcoal/10 dark:border-white/10 flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-charcoal dark:bg-black text-yellow font-anton text-lg flex items-center justify-center grayscale shadow-sm border border-charcoal/20 dark:border-white/20">
                {REVIEWS[0].avatarText}
              </div>
              <div>
                <h3 className="font-anton text-base text-charcoal dark:text-white tracking-wide">
                  {REVIEWS[0].author}
                </h3>
                <p className="font-satoshi text-xs text-charcoal/75 dark:text-sage/80 line-clamp-1">
                  {REVIEWS[0].role}
                </p>
                <p className="font-mono text-[10px] text-charcoal/60 dark:text-sage/60 mt-0.5">
                  {REVIEWS[0].location}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Center Featured Card */}
          <div className="relative rounded-3xl bg-charcoal dark:bg-darkgray text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl border-2 border-yellow lg:-translate-y-4 card-editorial">
            <div className="absolute -top-3.5 right-8 rounded-full bg-yellow px-4 py-1 font-mono text-[10px] font-bold text-charcoal uppercase tracking-widest shadow-md">
              Featured Case
            </div>

            <div>
              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 text-yellow text-xl mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="drop-shadow-sm">
                    {star}
                  </span>
                ))}
              </div>

              {/* Satoshi-medium body text */}
              <p className="font-satoshi font-medium text-lg leading-relaxed text-white italic mb-8">
                &quot;{REVIEWS[1].quote}&quot;
              </p>
            </div>

            {/* Avatar Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-white text-charcoal font-anton text-lg flex items-center justify-center grayscale shadow-sm border border-white/20">
                {REVIEWS[1].avatarText}
              </div>
              <div>
                <h3 className="font-anton text-base text-yellow tracking-wide">
                  {REVIEWS[1].author}
                </h3>
                <p className="font-satoshi text-xs text-sage/80 line-clamp-1">
                  {REVIEWS[1].role}
                </p>
                <p className="font-mono text-[10px] text-sage/60 mt-0.5">
                  {REVIEWS[1].location}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Side Card */}
          <div className="relative rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-8 md:p-10 flex flex-col justify-between shadow-lg card-editorial">
            <div>
              {/* 5 Stars with strong light/dark contrast */}
              <div className="flex items-center gap-1.5 text-amber-500 dark:text-yellow text-xl mb-6">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="drop-shadow-sm">
                    {star}
                  </span>
                ))}
              </div>

              {/* Satoshi-medium body text */}
              <p className="font-satoshi font-medium text-lg leading-relaxed text-charcoal/90 dark:text-white/90 italic mb-8">
                &quot;{REVIEWS[2].quote}&quot;
              </p>
            </div>

            {/* Avatar Footer */}
            <div className="pt-6 border-t border-charcoal/10 dark:border-white/10 flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-charcoal dark:bg-black text-yellow font-anton text-lg flex items-center justify-center grayscale shadow-sm border border-charcoal/20 dark:border-white/20">
                {REVIEWS[2].avatarText}
              </div>
              <div>
                <h3 className="font-anton text-base text-charcoal dark:text-white tracking-wide">
                  {REVIEWS[2].author}
                </h3>
                <p className="font-satoshi text-xs text-charcoal/75 dark:text-sage/80 line-clamp-1">
                  {REVIEWS[2].role}
                </p>
                <p className="font-mono text-[10px] text-charcoal/60 dark:text-sage/60 mt-0.5">
                  {REVIEWS[2].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
