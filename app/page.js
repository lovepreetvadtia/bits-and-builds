import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import InteractiveServiceShowcase from "@/components/InteractiveServiceShowcase";
import AutomationSimulator from "@/components/AutomationSimulator";
import ProjectEstimator from "@/components/ProjectEstimator";
import FoundersSection from "@/components/FoundersSection";
import FAQ from "@/components/FAQ";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";
import { caseStudies, clientTestimonials } from "@/lib/caseStudies";
import { buildMetadata, WHATSAPP_URL, AGENCY_PHONE, AGENCY_LOCATION } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bits and Builds — Digital Marketing, Web Studio & Automation, Sri Ganganagar",
  description:
    "Next.js web development, SEO (GMB, AEO, GEO), PPC ads, social media, video editing and clinic/restaurant booking automation. Founded by Lavi & Jass in Sri Ganganagar, Rajasthan.",
  path: "/",
});

const MARQUEE_TRACK_1 = [
  "Web Development (Next.js SSR)",
  "Social Media Marketing",
  "PPC (Meta & Google Ads)",
  "SEO (GMB, AEO & GEO)",
  "Graphic Design & Branding",
  "Viral Video Editing",
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

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We audit your local competitors, map keyword search volumes in your city, and outline a high-converting digital architecture.",
  },
  {
    step: "02",
    title: "Code & Creative Sprint",
    desc: "We write clean Next.js code with SSR, design high-craft visual assets, and program WhatsApp booking workflows.",
  },
  {
    step: "03",
    title: "Launch & Local SEO Blast",
    desc: "We deploy on global edge servers, inject LocalBusiness JSON-LD schemas, and optimize your Google Business Profile (GMB).",
  },
  {
    step: "04",
    title: "Scale, Ads & Autopilot",
    desc: "We activate targeted Meta & Google Ads, publish high-retention video Reels, and let your automated booking engine run 24/7.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="blueprint-grid relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-40 md:px-10">
        {/* Glow ambient background halos */}
        <div
          className="pointer-events-none absolute -right-32 top-24 h-[550px] w-[550px] rounded-full bg-teal/15 blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-24 h-[450px] w-[450px] rounded-full bg-electric-blue/10 blur-[160px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[1440px]">
          {/* Eyebrow location badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="eyebrow-pill">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span>{AGENCY_LOCATION}</span>
            </div>
            <span className="font-mono text-xs text-paper/40 hidden sm:inline">
              ✦ Serving Clients Across India &amp; Worldwide
            </span>
          </div>

          {/* Kinetic Headline */}
          <AnimatedText
            as="h1"
            immediate
            text="We build brands that show up, load fast and get booked."
            className="max-w-6xl font-display text-clampHero font-bold leading-[0.94] tracking-tightest2 text-paper"
          />

          {/* Subtitle & Action Grid */}
          <div className="mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-paper/70">
              <strong>Bits and Builds</strong> is a digital marketing &amp; web engineering studio
              founded by <strong>Lavi &amp; Jass</strong>. We combine server-rendered Next.js
              technology, Google Maps SEO dominance, high-ROAS paid ads, and automated WhatsApp
              booking systems for local clinics, restaurants, and scaling brands.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="flex items-center gap-2.5 rounded-full border border-teal/40 bg-teal/10 px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-teal transition-all hover:bg-teal hover:text-ink hover:shadow-[0_0_25px_rgba(0,242,213,0.3)]"
              >
                <span>Chat on WhatsApp</span>
                <span>💬</span>
              </a>

              <Link
                href="/contact"
                data-cursor-text="START"
                className="group flex items-center gap-3 rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,242,213,0.4)]"
              >
                <span>Start a Project</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 lg:gap-8">
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-teal">7 Core</div>
              <div className="font-mono text-xs text-paper/50 mt-0.5">Stack Services</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-paper">99/100</div>
              <div className="font-mono text-xs text-paper/50 mt-0.5">PageSpeed Score</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-teal">24/7</div>
              <div className="font-mono text-xs text-paper/50 mt-0.5">WhatsApp Booking</div>
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-paper">Pan-India</div>
              <div className="font-mono text-xs text-paper/50 mt-0.5">+ Global Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DUAL INFINITE MARQUEE (Produx Style) ---------- */}
      <Marquee items={MARQUEE_TRACK_1} className="bg-ink-card" />
      <Marquee items={MARQUEE_TRACK_2} reverse speed="fast" className="bg-ink" />

      {/* ---------- STUDIO ETHOS & INTRO ---------- */}
      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-3">
              <span className="eyebrow">The Philosophy</span>
              <h3 className="font-display text-2xl font-bold text-paper mt-2">
                Bits<span className="text-teal">&</span>Builds
              </h3>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <AnimatedText
                as="p"
                text="Bits are the code, the ad targeting parameters, the JSON-LD schemas, and the micro-conversions. Builds are the websites, the automated appointment pipelines, and the revenue they generate."
                className="font-display text-clamp2 font-medium leading-snug tracking-tight text-paper/90"
              />
              <p className="max-w-2xl text-base text-paper/60 leading-relaxed">
                Most agencies give you disconnected pieces: a designer who doesn't understand SEO,
                a developer who doesn't care about conversion rates, and a media buyer who blames
                the website. We unify the entire stack under one roof in Sri Ganganagar, delivering
                digital systems that actually run your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE SERVICES SHOWCASE (LXL Style) ---------- */}
      <InteractiveServiceShowcase />

      {/* ---------- LOCAL BRAND AUTOMATION SPOTLIGHT ---------- */}
      <AutomationSimulator />

      {/* ---------- FOUNDERS SPOTLIGHT (Lavi & Jass) ---------- */}
      <FoundersSection />

      {/* ---------- CASE STUDIES & TRANSFORMATIONS ---------- */}
      <section className="border-t border-white/10 bg-ink-card/30 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="eyebrow-pill mb-4">
                <span>Proven Results</span>
              </div>
              <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
                Transformations that speak in <span className="text-teal">revenue.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              data-cursor-text="START"
              className="font-mono text-xs uppercase tracking-widest text-teal hover:underline"
            >
              Get results like these →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-ink-card p-8 transition-all hover:border-teal/40 hover:shadow-[0_0_30px_rgba(0,242,213,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-paper/40 mb-3">
                    <span>{cs.category}</span>
                    <span className="text-teal">{cs.location}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-paper group-hover:text-teal transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-4 text-xs leading-relaxed text-paper/60">{cs.summary}</p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-6 space-y-3">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-paper/50">{r.label}:</span>
                      <span className="font-bold text-teal text-sm">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE PROJECT ESTIMATOR ---------- */}
      <ProjectEstimator />

      {/* ---------- 4-STEP PROCESS ---------- */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="eyebrow-pill mb-4">
              <span>Execution Framework</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Four steps, zero guesswork.
            </h2>
            <p className="mt-3 text-sm text-paper/60">
              How we take your local business or national brand from kickoff to market dominance.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-ink p-8 flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="font-mono text-sm font-bold text-teal">{step.step}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-paper">{step.title}</h3>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-paper/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLIENT TESTIMONIALS ---------- */}
      <section className="border-t border-white/10 bg-ink-card/40 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>Client Voices</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              What founders say about working with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-ink p-8"
              >
                <div className="text-amber-400 text-sm mb-4">★★★★★</div>
                <p className="text-sm text-paper/80 leading-relaxed italic mb-8">
                  &quot;{item.quote}&quot;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-display font-bold text-paper text-sm">{item.author}</p>
                  <p className="font-mono text-[11px] text-teal">{item.role}</p>
                  <p className="text-[10px] text-paper/40 font-mono mt-0.5">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BLOG TEASER ---------- */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="eyebrow-pill mb-4">
                <span>Knowledge &amp; Insights</span>
              </div>
              <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
                Latest notes from the studio.
              </h2>
            </div>
            <Link
              href="/blog"
              data-cursor-text="BLOG"
              className="font-mono text-xs uppercase tracking-widest text-teal hover:underline hidden sm:inline-block"
            >
              Read all articles →
            </Link>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-cursor-text="READ"
                className="group grid gap-4 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:items-center"
              >
                <span className="font-mono text-xs font-bold text-teal md:col-span-2">{post.tag}</span>
                <div className="md:col-span-7">
                  <h3 className="font-display text-xl font-bold text-paper group-hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-paper/60 line-clamp-1">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs font-mono text-paper/40">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ SECTION ---------- */}
      <section className="border-t border-white/10 bg-ink-card/50 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14">
            <div className="eyebrow-pill mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Everything you need to know.
            </h2>
          </div>

          <FAQ />
        </div>
      </section>
    </>
  );
}
