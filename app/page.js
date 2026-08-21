import Link from "next/link";
import NextSpotlightHero from "@/components/NextSpotlightHero";
import Marquee from "@/components/Marquee";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import BentoGridSection from "@/components/BentoGridSection";
import InteractiveServiceShowcase from "@/components/InteractiveServiceShowcase";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationSimulator from "@/components/AutomationSimulator";
import ProjectEstimator from "@/components/ProjectEstimator";
import FoundersSection from "@/components/FoundersSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQ from "@/components/FAQ";
import FinalCTASection from "@/components/FinalCTASection";
import GsapTextReveal from "@/components/GsapTextReveal";
import { caseStudies } from "@/lib/caseStudies";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bits and Builds — Digital Marketing, Web Studio & Automation, Sri Ganganagar",
  description:
    "Next.js web development, SEO (GMB, AEO, GEO), PPC ads, social media, reels & short-form video, and clinic/restaurant booking automation. Founded by Lavi & Jass in Sri Ganganagar, Rajasthan.",
  path: "/",
});

const MARQUEE_TRACK_1 = [
  "Web Development (Next.js SSR)",
  "Social Media Marketing",
  "PPC (Meta & Google Ads)",
  "SEO (GMB, AEO & GEO)",
  "Graphic Design & Branding",
  "Reels & Short-Form Video",
  "Local Brand Automation",
];

const MARQUEE_TRACK_2 = [
  "Sub-Second 99/100 PageSpeed",
  "Google Maps 3-Pack Rank Dominance",
  "Automated Hospital OPD Booking",
  "Automated Restaurant Table Booking",
  "Pan-India & Worldwide Remote Delivery",
  "Founded by Lavi & Jass",
];

export default function HomePage() {
  return (
    <>
      {/* ---------- 1. SPOTLIGHT REVEAL HERO ---------- */}
      <NextSpotlightHero />

      {/* ---------- 2. KINETIC TICKER 1 ---------- */}
      <Marquee items={MARQUEE_TRACK_1} speed={35} />

      {/* ---------- 3. PROBLEM VS SOLUTION ---------- */}
      <ProblemSolutionSection />

      {/* ---------- 4. BENTO CAPABILITIES GRID ---------- */}
      <BentoGridSection />

      {/* ---------- 5. KINETIC TICKER 2 (REVERSE) ---------- */}
      <Marquee items={MARQUEE_TRACK_2} speed={40} reverse />

      {/* ---------- 6. INTERACTIVE SERVICE SHOWCASE & SIMULATORS ---------- */}
      <InteractiveServiceShowcase />

      {/* ---------- 7. 4-STEP EXECUTION FRAMEWORK ---------- */}
      <HowItWorksSection />

      {/* ---------- 8. LIVE AUTOMATION SIMULATOR ---------- */}
      <AutomationSimulator />

      {/* ---------- 9. CASE STUDIES & RESULTS ---------- */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div>
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
                <span>Proven Transformations</span>
              </div>
              <GsapTextReveal
                as="h2"
                variant="words"
                text="TRANSFORMATIONS THAT SPEAK IN REVENUE."
                highlightWord="REVENUE."
                highlightClass="highlight-yellow"
                className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
              />
            </div>
            <Link
              href="/contact"
              data-cursor-text="START"
              className="font-anton text-xs uppercase tracking-widest text-charcoal dark:text-yellow hover:text-charcoal/70 dark:hover:text-white transition-colors underline decoration-yellow decoration-2 underline-offset-4"
            >
              Get Results Like These →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="group flex flex-col justify-between rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-8 md:p-10 shadow-lg card-editorial"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-charcoal/50 dark:text-white/50 mb-4 border-b border-charcoal/10 dark:border-white/10 pb-3">
                    <span className="font-bold uppercase text-charcoal dark:text-white">{cs.category}</span>
                    <span className="bg-yellow/40 dark:bg-yellow/20 px-2 py-0.5 rounded text-charcoal dark:text-yellow font-bold">
                      {cs.location}
                    </span>
                  </div>
                  <h3 className="font-anton text-2xl text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow transition-colors tracking-wide">
                    {cs.title}
                  </h3>
                  <p className="mt-4 font-satoshi text-xs md:text-sm leading-relaxed text-charcoal/70 dark:text-sage/80">
                    {cs.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-charcoal/10 dark:border-white/10 pt-6 space-y-3">
                  {cs.results.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs font-mono bg-[#f8f9fa] dark:bg-charcoal/60 p-2.5 rounded-xl border border-charcoal/5 dark:border-white/5"
                    >
                      <span className="text-charcoal/60 dark:text-sage/70">{r.label}:</span>
                      <span className="font-anton text-charcoal dark:text-yellow text-base">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 10. INTERACTIVE PROJECT ESTIMATOR ---------- */}
      <ProjectEstimator />

      {/* ---------- 11. FOUNDERS SPOTLIGHT (Lavi & Jass) ---------- */}
      <FoundersSection />

      {/* ---------- 12. TESTIMONIAL HIGH-CONTRAST CARDS ---------- */}
      <TestimonialSection />

      {/* ---------- 13. EDITORIAL BLOG TEASER ---------- */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex items-end justify-between border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div>
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span>Knowledge &amp; Studio Notes</span>
              </div>
              <GsapTextReveal
                as="h2"
                variant="words"
                text="LATEST NOTES FROM THE STUDIO."
                highlightWord="STUDIO."
                highlightClass="highlight-yellow"
                className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
              />
            </div>
            <Link
              href="/blog"
              data-cursor-text="BLOG"
              className="font-anton text-xs uppercase tracking-widest text-charcoal dark:text-yellow hover:text-charcoal/70 dark:hover:text-white transition-colors hidden sm:inline-block underline decoration-yellow decoration-2 underline-offset-4"
            >
              Read All Articles →
            </Link>
          </div>

          <div className="divide-y divide-charcoal/15 dark:divide-white/15 border-y border-charcoal/15 dark:border-white/15">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-cursor-text="READ"
                className="group grid gap-4 py-8 transition-colors hover:bg-yellow/10 dark:hover:bg-white/5 md:grid-cols-12 md:items-center px-4 rounded-xl"
              >
                <span className="font-mono text-xs font-bold text-charcoal dark:text-charcoal bg-yellow px-2.5 py-1 rounded w-max md:col-span-2 shadow-xs">
                  {post.tag}
                </span>
                <div className="md:col-span-7">
                  <h3 className="font-anton text-2xl text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow transition-colors tracking-wide">
                    {post.title}
                  </h3>
                  <p className="mt-1 font-satoshi text-xs text-charcoal/70 dark:text-sage/80 line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs font-mono text-charcoal/50 dark:text-white/50">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 14. FAQ SECTION ---------- */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span>Client Queries</span>
            </div>
            <GsapTextReveal
              as="h2"
              variant="words"
              text="FREQUENTLY ASKED QUESTIONS."
              highlightWord="QUESTIONS."
              highlightClass="highlight-yellow"
              className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]"
            />
          </div>

          <FAQ />
        </div>
      </section>

      {/* ---------- 15. FINAL CALL TO ACTION ---------- */}
      <FinalCTASection />
    </>
  );
}
