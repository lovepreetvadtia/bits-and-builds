import dynamic from "next/dynamic";
import Link from "next/link";
import NextSpotlightHero from "@/components/NextSpotlightHero";
import Marquee from "@/components/Marquee";
import GsapTextReveal from "@/components/GsapTextReveal";
import ScrollRevealSection from "@/components/ScrollRevealSection";
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

// Minimal skeleton fallback placeholder for smooth zero-CLS chunk loading
const EngineSkeleton = ({ height = "500px" }) => (
  <div
    aria-hidden="true"
    className="w-full flex items-center justify-center p-8 text-charcoal/40 dark:text-sage/40 font-mono text-xs select-none"
    style={{ minHeight: height }}
  >
    <div className="flex items-center gap-2.5 rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-yellow animate-ping" />
      <span className="text-[11px] uppercase tracking-wider font-semibold">
        Hydrating Engine Component...
      </span>
    </div>
  </div>
);

// High-speed chunk loading using Promise.all & next/dynamic
const ProblemSolutionSection = dynamic(
  () =>
    Promise.all([
      import("@/components/ProblemSolutionSection"),
      import("@/components/GsapTextReveal"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="450px" /> }
);

const BentoGridSection = dynamic(
  () =>
    Promise.all([
      import("@/components/BentoGridSection"),
      import("@/components/GsapTextReveal"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="650px" /> }
);

const InteractiveServiceShowcase = dynamic(
  () =>
    Promise.all([
      import("@/components/InteractiveServiceShowcase"),
      import("@/lib/services"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="800px" /> }
);

const HowItWorksSection = dynamic(
  () =>
    Promise.all([
      import("@/components/HowItWorksSection"),
      import("@/components/GsapTextReveal"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="550px" /> }
);

const AutomationSimulator = dynamic(
  () =>
    Promise.all([
      import("@/components/AutomationSimulator"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="650px" /> }
);

const ProjectEstimator = dynamic(
  () =>
    Promise.all([
      import("@/components/ProjectEstimator"),
      import("@/components/GsapTextReveal"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="750px" /> }
);

const FoundersSection = dynamic(
  () =>
    Promise.all([
      import("@/components/FoundersSection"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="600px" /> }
);

const TestimonialSection = dynamic(
  () =>
    Promise.all([
      import("@/components/TestimonialSection"),
      import("@/components/GsapTextReveal"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="500px" /> }
);

const FAQ = dynamic(
  () =>
    Promise.all([
      import("@/components/FAQ"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="400px" /> }
);

const FinalCTASection = dynamic(
  () =>
    Promise.all([
      import("@/components/FinalCTASection"),
    ]).then(([mod]) => mod),
  { loading: () => <EngineSkeleton height="450px" /> }
);

export default function HomePage() {
  return (
    <>
      {/* ---------- 1. SPOTLIGHT REVEAL HERO (Instant Above-the-Fold LCP) ---------- */}
      <NextSpotlightHero />

      {/* ---------- 2. KINETIC TICKER 1 ---------- */}
      <Marquee items={MARQUEE_TRACK_1} speed={35} />

      {/* ---------- 3. PROBLEM VS SOLUTION (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="450px">
        <ProblemSolutionSection />
      </ScrollRevealSection>

      {/* ---------- 4. BENTO CAPABILITIES GRID (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="650px">
        <BentoGridSection />
      </ScrollRevealSection>

      {/* ---------- 5. KINETIC TICKER 2 (REVERSE) ---------- */}
      <Marquee items={MARQUEE_TRACK_2} speed={40} reverse />

      {/* ---------- 6. INTERACTIVE SERVICE SHOWCASE & SIMULATORS (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="800px">
        <InteractiveServiceShowcase />
      </ScrollRevealSection>

      {/* ---------- 7. 4-STEP EXECUTION FRAMEWORK (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="550px">
        <HowItWorksSection />
      </ScrollRevealSection>

      {/* ---------- 8. LIVE AUTOMATION SIMULATOR (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="650px">
        <AutomationSimulator />
      </ScrollRevealSection>

      {/* ---------- 9. CASE STUDIES & RESULTS (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="600px">
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
      </ScrollRevealSection>

      {/* ---------- 10. INTERACTIVE PROJECT ESTIMATOR (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="750px">
        <ProjectEstimator />
      </ScrollRevealSection>

      {/* ---------- 11. FOUNDERS SPOTLIGHT (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="600px">
        <FoundersSection />
      </ScrollRevealSection>

      {/* ---------- 12. TESTIMONIAL HIGH-CONTRAST CARDS (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="500px">
        <TestimonialSection />
      </ScrollRevealSection>

      {/* ---------- 13. EDITORIAL BLOG TEASER (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="500px">
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
      </ScrollRevealSection>

      {/* ---------- 14. FAQ SECTION (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="400px">
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
      </ScrollRevealSection>

      {/* ---------- 15. FINAL CALL TO ACTION (Loaded on scroll) ---------- */}
      <ScrollRevealSection minHeight="450px">
        <FinalCTASection />
      </ScrollRevealSection>
    </>
  );
}

