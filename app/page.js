import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import TextRollButton from "@/components/TextRollButton";
import Tilt3DCard from "@/components/Tilt3DCard";
import Marquee from "@/components/Marquee";
import GsapTextReveal from "@/components/GsapTextReveal";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { posts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import {
  RotatingHeroWord,
  ScrollWordReveal,
  KineticHeading,
  OdometerCounter,
} from "@/components/ReflexTextAnimations";

// Dynamic client-only import for HeroShaderBackground
const HeroShaderBackground = dynamic(
  () => import("@/components/HeroShaderBackground"),
  {
    ssr: false,
  }
);

export const metadata = buildMetadata({
  title: "Bits and Builds — Digital Marketing, Web Studio & Automation",
  description:
    "We engineer brands that dominate their category online. Next.js SSR development, Google Maps 3-Pack SEO dominance, high-ROAS paid ads, and automated WhatsApp workflows. Founded by Lavi & Jass in Sri Ganganagar, Rajasthan.",
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
    className="w-full flex items-center justify-center p-8 text-charcoal/40 dark:text-gray-400 font-mono text-xs select-none"
    style={{ minHeight: height }}
  >
    <div className="flex items-center gap-2.5 rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-[#F2C230] animate-ping" />
      <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-900 dark:text-white">
        Hydrating Studio Engine...
      </span>
    </div>
  </div>
);

const ProblemSolutionSection = dynamic(
  () => import("@/components/ProblemSolutionSection"),
  { loading: () => <EngineSkeleton height="450px" /> }
);

const BentoGridSection = dynamic(
  () => import("@/components/BentoGridSection"),
  { loading: () => <EngineSkeleton height="650px" /> }
);

const InteractiveServiceShowcase = dynamic(
  () => import("@/components/InteractiveServiceShowcase"),
  { loading: () => <EngineSkeleton height="800px" /> }
);

const HowItWorksSection = dynamic(
  () => import("@/components/HowItWorksSection"),
  { loading: () => <EngineSkeleton height="550px" /> }
);

const AutomationSimulator = dynamic(
  () => import("@/components/AutomationSimulator"),
  { loading: () => <EngineSkeleton height="650px" /> }
);

const ProjectEstimator = dynamic(
  () => import("@/components/ProjectEstimator"),
  { loading: () => <EngineSkeleton height="750px" /> }
);

const FoundersSection = dynamic(
  () => import("@/components/FoundersSection"),
  { loading: () => <EngineSkeleton height="600px" /> }
);

const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection"),
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
    <div className="w-full bg-[#0A0A0A] text-white selection:bg-[#F2C230] selection:text-gray-900">
      {/* =========================================================================
          SECTION 1: HERO (Full viewport height with Animated Shader Stack)
          ========================================================================= */}
      <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
        {/* Animated shader overlay */}
        <HeroShaderBackground />

        {/* Spacer to push content to the bottom of the viewport */}
        <div className="flex-1" />

        {/* Hero Content (z-20) */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          {/* Small label */}
          <p className="text-[13px] sm:text-[14px] text-white tracking-wide mb-5 sm:mb-8 font-medium">
            Bits and Builds
          </p>

          {/* Headline h1 with ReflexAI-style rotating kinetic word pill */}
          <h1
            className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white max-w-[1280px]"
            style={{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}
          >
            We engineer brands that{" "}
            <RotatingHeroWord
              words={[
                "dominate their category",
                "rank #1 on Google Maps",
                "convert 3.8x more leads",
                "automate bookings 24/7",
              ]}
            />
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            online.
          </h1>

          {/* CTA row */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            {/* Gold CTA button */}
            <TextRollButton
              text="Start a project"
              href="/contact"
              variant="gold"
            />

            {/* Google Partner badge */}
            <div
              tabIndex={0}
              role="button"
              aria-label="Verified Google Partner agency"
              className="bg-white text-gray-900 rounded-[4px] px-3.5 py-2 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 select-none cursor-pointer"
            >
              {/* B&B shield icon */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center p-0.5 flex-shrink-0">
                <Image
                  src="/icons/logo.webp"
                  alt="B&B Shield Mark"
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 tracking-tight">
                Google Partner
              </span>

              {/* Verified badge */}
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white font-medium px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider">
                Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KINETIC TICKER 1 ---------- */}
      <Marquee items={MARQUEE_TRACK_1} speed={35} />

      {/* =========================================================================
          SECTION 2: ABOUT (White/Dark background with 3-Column Studio Layout)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 transition-colors duration-300 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Badge row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
              1
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
              Introducing Bits and Builds
            </span>
          </div>          {/* Heading h2 with ReflexAI Kinetic Reveal */}
          <KineticHeading
            as="h2"
            className="px-5 sm:px-8 lg:px-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 dark:text-white mb-12 sm:mb-16 lg:mb-28"
          >
            Strategy-led web &amp; marketing, delivering
            <br className="hidden sm:block" />
            {" "}results across India and beyond.
          </KineticHeading>

          {/* Content area: Responsive */}
          {/* MOBILE/TABLET: lg:hidden */}
          <div className="lg:hidden px-5 sm:px-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium mb-6 max-w-2xl">
              <ScrollWordReveal
                text="Through Next.js engineering, local SEO and automation we help growing brands realize their digital full potential."
                highlightIndices={[2, 3, 5, 6, 8, 12, 13]}
              />
            </p>

            <div className="mb-10">
              <TextRollButton
                text="About our studio"
                href="/about"
                variant="gold"
              />
            </div>

            {/* Two responsive images */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/10">
                <Image
                  src="/images/studio-team.jpg"
                  alt="Bits and Builds studio team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>

              <div className="w-full sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/10">
                <Image
                  src="/images/studio-workspace.jpg"
                  alt="Bits and Builds engineering studio workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP: hidden lg:grid */}
          <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
            {/* Left column (self-end): Small image, aspect-[438/346] */}
            <div className="self-end w-full aspect-[438/346] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/10">
              <Image
                src="/images/studio-team.jpg"
                alt="Bits and Builds studio team collaborating"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="26vw"
              />
            </div>

            {/* Center column (self-start, flex justify-end): Paragraph + gold button with ReflexAI Word Scrub */}
            <div className="self-start flex flex-col justify-end items-start xl:px-2 pt-2">
              <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium mb-8 max-w-md">
                <ScrollWordReveal
                  text="Through Next.js engineering, local SEO and automation we help growing brands realize their digital full potential."
                  highlightIndices={[2, 3, 5, 6, 8, 12, 13]}
                />
              </p>

              <TextRollButton
                text="About our studio"
                href="/about"
                variant="gold"
              />
            </div>

            {/* Right column (self-end): Large image, aspect-[3/2] */}
            <div className="self-end w-full aspect-[3/2] rounded-2xl overflow-hidden relative shadow-sm">
              <Image
                src="/images/studio-workspace.jpg"
                alt="Bits and Builds engineering studio workspace"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="48vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROBLEM VS SOLUTION ---------- */}
      <ScrollRevealSection minHeight="450px">
        <ProblemSolutionSection />
      </ScrollRevealSection>

      {/* ---------- BENTO CAPABILITIES GRID ---------- */}
      <ScrollRevealSection minHeight="650px">
        <BentoGridSection />
      </ScrollRevealSection>

      {/* ---------- KINETIC TICKER 2 (REVERSE) ---------- */}
      <Marquee items={MARQUEE_TRACK_2} speed={40} reverse />

      {/* ---------- INTERACTIVE SERVICE SHOWCASE & SIMULATORS ---------- */}
      <ScrollRevealSection minHeight="800px">
        <InteractiveServiceShowcase />
      </ScrollRevealSection>

      {/* ---------- 4-STEP EXECUTION FRAMEWORK ---------- */}
      <ScrollRevealSection minHeight="550px">
        <HowItWorksSection />
      </ScrollRevealSection>

      {/* ---------- LIVE AUTOMATION SIMULATOR ---------- */}
      <ScrollRevealSection minHeight="650px">
        <AutomationSimulator />
      </ScrollRevealSection>

      {/* =========================================================================
          SECTION 3: CASE STUDIES & CLIENT REELS
          ========================================================================= */}
      <section className="bg-[#F5F5F5] dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Badge row */}
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
              2
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
              Featured client work
            </span>
          </div>

          {/* Heading h2 with GSAP ScrollTrigger Character Animation */}
          <GsapTextReveal
            as="h2"
            text="Selected client deployments &amp; verified growth engines."
            variant="chars"
            className="px-5 sm:px-8 lg:px-12 text-[clamp(1.75rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white mb-10 sm:mb-14 lg:mb-16 max-w-4xl"
            highlightWord="deployments"
            highlightClass="text-[#F2C230]"
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-5 sm:px-8 lg:px-12 mb-16">
            {/* Card 1: Healthcare Case Study */}
            <div className="flex flex-col">
              <Tilt3DCard maxTilt={5} scale={1.01} className="rounded-2xl w-full">
                <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-[#0A0A0A] relative group cursor-pointer shadow-md border border-gray-200 dark:border-white/10">
                  <Image
                    src="/images/case-study-clinic.jpg"
                    alt="Apex Multi-Specialty Hospital & Diagnostics Case Study"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                  {/* Floating Metric Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-xs font-semibold text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>#1 Google Maps · +240% Inpatient OPD</span>
                  </div>

                  {/* Tech Stack Chip */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-gray-200 border border-white/10">
                    Next.js · GMB · WhatsApp API
                  </div>

                  {/* Interactive Button */}
                  <div
                    className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[158px] bg-white dark:bg-[#141414] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2.5 z-10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] border border-transparent dark:border-white/15"
                    aria-label="Learn more about Apex Multi-Specialty Hospital"
                  >
                    <span className="text-[13px] font-medium text-gray-900 dark:text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-1 select-none">
                      Explore Blueprint
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-900 dark:text-white flex-shrink-0 ml-auto transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                </div>
              </Tilt3DCard>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88C14] dark:text-[#F2C230]">
                <span>Healthcare &amp; Clinic Engine</span>
                <span>•</span>
                <span>Sri Ganganagar</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mt-1">
                Apex Multi-Specialty Hospital &amp; Diagnostics
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed font-normal">
                Engineered sub-second Next.js portal, Google Maps 3-Pack rank dominance, and 24/7 automated WhatsApp doctor appointment bookings.
              </p>
            </div>

            {/* Card 2: E-Commerce Case Study */}
            <div className="flex flex-col">
              <Tilt3DCard maxTilt={5} scale={1.01} className="rounded-2xl w-full">
                <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-[#0A0A0A] relative group cursor-pointer shadow-md border border-gray-200 dark:border-white/10">
                  <Image
                    src="/images/case-study-streetwear.jpg"
                    alt="Kult Streetwear & Apparel Case Study"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                  {/* Floating Metric Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-xs font-semibold text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#F2C230] animate-pulse" />
                    <span>3.8x ROAS · ₹42L+ Monthly Scale</span>
                  </div>

                  {/* Tech Stack Chip */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-gray-200 border border-white/10">
                    Headless · Meta CAPI · Reels
                  </div>

                  {/* Interactive Button */}
                  <div
                    className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[158px] bg-gray-900 dark:bg-black rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2.5 z-10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] border border-transparent dark:border-white/15"
                    aria-label="View case study for Kult Streetwear & Apparel"
                  >
                    <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-1 select-none">
                      Explore Blueprint
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={2.2}
                      className="text-[#F2C230] flex-shrink-0 ml-auto transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0"
                    />
                  </div>
                </div>
              </Tilt3DCard>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88C14] dark:text-[#F2C230]">
                <span>E-Commerce &amp; Paid Ads</span>
                <span>•</span>
                <span>D2C Fashion</span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mt-1">
                Kult Streetwear &amp; Apparel
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed font-normal">
                Headless Next.js storefront combined with short-form viral reels production and server-side Meta CAPI ads scaling to ₹42L+ monthly run-rate.
              </p>
            </div>
          </div>

          {/* Deep Case Studies Grid */}
          <div className="px-5 sm:px-8 lg:px-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 py-1">
                    Proven Transformations
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white leading-[1.08]">
                  Transformations that speak in revenue.
                </h3>
              </div>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] font-semibold transition-colors underline decoration-[#F2C230] decoration-2 underline-offset-4"
              >
                Get Results Like These →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="group flex flex-col justify-between rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-100 dark:border-white/10 pb-3">
                      <span className="font-semibold uppercase text-gray-900 dark:text-white tracking-wider text-[11px]">{cs.category}</span>
                      <span className="bg-[#F2C230]/20 text-gray-900 dark:text-[#F2C230] px-2 py-0.5 rounded font-semibold text-[11px]">
                        {cs.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-[#D9AC1F] dark:group-hover:text-[#F2C230] transition-colors tracking-tight">
                      {cs.title}
                    </h4>
                    <p className="mt-3 text-xs md:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
                      {cs.summary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 dark:border-white/10 pt-5 space-y-2.5">
                    {cs.results.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs bg-[#F5F5F5] dark:bg-white/5 p-2.5 rounded-xl border border-gray-100 dark:border-white/10 font-medium"
                      >
                        <span className="text-gray-500 dark:text-gray-400">{r.label}:</span>
                        <span className="text-gray-900 dark:text-[#F2C230] font-semibold text-sm">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE PROJECT ESTIMATOR ---------- */}
      <ScrollRevealSection minHeight="750px">
        <ProjectEstimator />
      </ScrollRevealSection>

      {/* ---------- FOUNDERS SPOTLIGHT ---------- */}
      <ScrollRevealSection minHeight="600px">
        <FoundersSection />
      </ScrollRevealSection>

      {/* ---------- TESTIMONIAL HIGH-CONTRAST CARDS ---------- */}
      <ScrollRevealSection minHeight="500px">
        <TestimonialSection />
      </ScrollRevealSection>

      {/* ---------- EDITORIAL BLOG TEASER ---------- */}
      <ScrollRevealSection minHeight="500px">
        <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 flex items-end justify-between border-b border-gray-200 dark:border-white/10 pb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                    11
                  </span>
                  <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 py-1">
                    Knowledge &amp; Studio Notes
                  </span>
                </div>
                <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
                  Latest engineering &amp; growth notes.
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-widest text-gray-900 dark:text-white hover:text-[#D9AC1F] dark:hover:text-[#F2C230] font-semibold transition-colors hidden sm:inline-block underline decoration-[#F2C230] decoration-2 underline-offset-4"
              >
                Read All Articles →
              </Link>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-white/10 border-y border-gray-200 dark:border-white/10">
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-4 py-8 transition-colors hover:bg-[#F5F5F5] dark:hover:bg-white/5 md:grid-cols-12 md:items-center px-4 rounded-2xl"
                >
                  <span className="text-xs font-semibold text-gray-900 bg-[#F2C230] px-3 py-1 rounded-full w-max md:col-span-2 shadow-xs">
                    {post.tag}
                  </span>
                  <div className="md:col-span-7">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white group-hover:text-[#D9AC1F] dark:group-hover:text-[#F2C230] transition-colors tracking-tight">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 line-clamp-1 font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* ---------- FAQ SECTION ---------- */}
      <ScrollRevealSection minHeight="400px">
        <section className="bg-[#F5F5F5] dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] font-semibold flex items-center justify-center">
                  12
                </span>
                <span className="text-[12px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-full px-3 py-1">
                  Client Queries
                </span>
              </div>
              <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white">
                Frequently asked questions.
              </h2>
            </div>

            <FAQ />
          </div>
        </section>
      </ScrollRevealSection>

      {/* ---------- FINAL CALL TO ACTION ---------- */}
      <ScrollRevealSection minHeight="450px">
        <FinalCTASection />
      </ScrollRevealSection>
    </div>
  );
}
