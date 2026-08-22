import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import { services } from "@/lib/services";
import { buildMetadata, WHATSAPP_URL } from "@/lib/seo";
import GsapTextReveal from "@/components/GsapTextReveal";

export const metadata = buildMetadata({
  title: "Services — Web Dev, SEO, PPC, Social Media, Design & Automation",
  description:
    "Explore the 7 core services of Bits and Builds: Server-rendered Next.js web development, local SEO (GMB, AEO, GEO), Meta/Google PPC ads, social media, reels & short-form video, and clinic/restaurant booking automation.",
  path: "/services",
});

const COMPARISON = [
  {
    feature: "Website Architecture",
    us: "Next.js App Router (100% Server-Side Rendered, sub-800ms loads)",
    others: "Bloated WordPress themes with 40+ plugins (4-8s slow loads)",
  },
  {
    feature: "Local SEO & AI Search",
    us: "GMB 3-pack optimization + AEO & GEO structured JSON-LD schemas",
    others: "Generic keyword stuffing on outdated directory listings",
  },
  {
    feature: "Paid Advertising (PPC)",
    us: "Server-side CAPI tracking, high-ROAS creative funnels & weekly optimization",
    others: "Boosting posts directly with no conversion tracking or pixel setup",
  },
  {
    feature: "Local Business Operations",
    us: "24/7 automated WhatsApp appointment & table reservation bots",
    others: "Manual phone registers causing 30%+ patient/diner no-shows",
  },
  {
    feature: "Account Leadership",
    us: "Direct partnership with founders Lavi & Jass on every project",
    others: "Shuffled between junior account managers and outsourced teams",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 px-4 sm:px-6 pb-16 sm:pb-20 pt-28 sm:pt-36 md:px-10 overflow-hidden border-b border-charcoal/15 dark:border-white/15 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="badge-editorial-light dark:badge-editorial mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-yellow animate-pulse border border-charcoal/40" />
            <span>Capabilities &amp; Solutions</span>
          </div>

          <h1 className="max-w-5xl font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal dark:text-white tracking-tight leading-[0.92] uppercase">
            EVERYTHING YOUR BRAND NEEDS TO{" "}
            <span className="highlight-yellow">DOMINATE ONLINE.</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-2xl font-satoshi text-base sm:text-lg md:text-xl text-charcoal/75 dark:text-sage/80 leading-relaxed">
            Seven unified capabilities engineered for performance, search visibility, and revenue.
            Choose a standalone service or partner with us for full-stack growth.
          </p>
        </div>
      </section>

      {/* Services Grid (7 Cards) */}
      <section className="bg-[#fcfdfc] dark:bg-[#151b17] border-b border-charcoal/15 dark:border-white/15 px-4 sm:px-6 py-16 sm:py-20 md:py-24 md:px-10 grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Us vs Generic Agencies (Loaded on scroll) */}
      <ScrollRevealSection minHeight="500px">
        <section className="border-b border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal px-4 sm:px-6 py-20 sm:py-24 md:py-28 md:px-10 grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 sm:mb-16 border-b border-charcoal/10 dark:border-white/10 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="badge-editorial-light dark:badge-editorial mb-4">
                  <span>The Standard</span>
                </div>
                <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                  WHY BRANDS CHOOSE <span className="highlight-yellow">BITS &amp; BUILDS.</span>
                </h2>
              </div>
              <p className="font-satoshi text-sm md:text-base text-charcoal/70 dark:text-sage/80 max-w-md">
                We eliminate agency middlemen, slow page builders, and vanity metrics in favor of pure engineering and measurable revenue.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-2 shadow-xl">
              <table className="w-full text-left text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 font-mono text-xs uppercase tracking-wider text-charcoal/80 dark:text-sage/80 font-semibold">
                    <th className="p-4 sm:p-6">Capability Metric</th>
                    <th className="p-4 sm:p-6 text-charcoal dark:text-yellow font-anton text-sm tracking-wide">Bits &amp; Builds</th>
                    <th className="p-4 sm:p-6 text-charcoal/70 dark:text-sage/70 font-semibold">Typical Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 dark:divide-white/10 text-xs font-mono">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-yellow/10 dark:hover:bg-white/[0.03] transition-colors">
                      <td className="p-4 sm:p-6 font-anton text-charcoal dark:text-white text-sm sm:text-base tracking-wide">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-6 text-charcoal dark:text-yellow font-bold bg-yellow/20 dark:bg-yellow/10 rounded-xl">
                        ✓ {row.us}
                      </td>
                      <td className="p-4 sm:p-6 text-charcoal/75 dark:text-sage/80">
                        ✕ {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Action CTA (Loaded on scroll) */}
      <ScrollRevealSection minHeight="300px">
        <section className="bg-white dark:bg-charcoal px-4 sm:px-6 py-16 sm:py-20 md:py-24 md:px-10 transition-colors duration-300">
          <div className="mx-auto max-w-[1440px] rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal dark:bg-darkgray text-white p-6 sm:p-10 md:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-yellow">
                Custom Growth Architecture
              </span>
              <h2 className="font-anton text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
                NOT SURE WHICH ENGINE YOU NEED?
              </h2>
              <p className="mt-3 font-satoshi text-sm md:text-base text-sage/80 max-w-xl leading-relaxed">
                Book a 20-minute consultation with founders Lavi and Jass. We will audit your current
                presence and give you an actionable growth roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                data-cursor-text="START"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-7 sm:px-8 py-3.5 sm:py-4 font-anton text-xs sm:text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 font-bold"
              >
                <span>Request Free Audit</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-6 sm:px-7 py-3.5 sm:py-4 font-anton text-xs sm:text-sm uppercase tracking-wider text-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </>
  );
} </>
  );
}
