"use client";

const STEPS = [
  {
    num: "01",
    title: "DISCOVERY & COMPETITOR RADAR AUDIT",
    desc: "We dissect your city's local search intent, analyze your top 3 competitors' backlink and ad profiles, and architect a conversion blueprint designed for your specific market niche.",
    highlight: "Keyword Mapping · Local Search Radius · Speed Benchmark",
  },
  {
    num: "02",
    title: "CODE, CREATIVE & AUTOMATION SPRINT",
    desc: "We write clean Next.js 14 code with Server-Side Rendering, design high-contrast editorial assets, and program 24/7 automated WhatsApp qualification and booking workflows.",
    highlight: "Next.js SSR · 99/100 Core Web Vitals · WhatsApp Cloud API",
  },
  {
    num: "03",
    title: "LAUNCH, LOCAL SEO BLAST & AD SCALING",
    desc: "We deploy onto global edge infrastructure, inject LocalBusiness JSON-LD schemas, launch targeted Meta & Google Ads, and let your automated pipeline capture paying clients 24/7.",
    highlight: "Global Edge Deploy · Google Maps 3-Pack · High-ROAS Ads",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative border-t border-charcoal/10 bg-charcoal px-4 sm:px-6 py-20 sm:py-24 md:py-28 md:px-10 text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Two-Column Layout (1:2 ratio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Sticky Anton Title - 4 cols */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 sm:space-y-6">
            <div className="badge-editorial">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>Execution Blueprint</span>
            </div>

            <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]">
              HOW IT <br />
              <span className="highlight-yellow">WORKS.</span>
            </h2>

            <p className="font-satoshi text-sm sm:text-base text-sage/80 leading-relaxed max-w-sm">
              Three systematic stages from initial audit to automated revenue generation. Zero fluff, zero guesswork.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <span className="font-mono text-xs text-yellow font-bold uppercase">
                ✦ Average Kickoff-to-Launch:
              </span>
              <span className="rounded bg-white/10 px-2.5 py-1 font-mono text-xs text-white">
                10-14 Days
              </span>
            </div>
          </div>

          {/* Right Column: Vertical stack of three steps - 8 cols */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-3xl border border-sage/15 bg-charcoal-card p-6 sm:p-8 md:p-12 transition-all duration-300 hover:border-yellow hover:bg-[#222b25] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8"
              >
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-yellow uppercase tracking-widest">
                      PHASE {step.num}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white tracking-wide group-hover:text-yellow transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-satoshi text-sm sm:text-base text-sage/80 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-3 font-mono text-xs text-yellow">
                    <span className="text-white/70 font-semibold">DELIVERABLES: </span>
                    <span>{step.highlight}</span>
                  </div>
                </div>

                {/* Massive numeral that changes to full opacity on hover */}
                <div className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-yellow/20 group-hover:text-yellow transition-colors duration-300 select-none self-end md:self-start leading-none shrink-0">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
