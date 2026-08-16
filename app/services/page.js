import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { buildMetadata, WHATSAPP_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Web Dev, SEO, PPC, Social Media, Design & Automation",
  description:
    "Explore the 7 core services of Bits and Builds: Server-rendered Next.js web development, local SEO (GMB, AEO, GEO), Meta/Google PPC ads, social media, video editing and clinic/restaurant booking automation.",
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
      <section className="blueprint-grid relative px-6 pb-20 pt-40 md:px-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-[1440px]">
          <div className="eyebrow-pill mb-6">
            <span>Capabilities &amp; Solutions</span>
          </div>

          <h1 className="max-w-4xl font-display text-clampHero font-bold leading-[0.95] tracking-tightest2 text-paper">
            Everything your brand needs to <span className="text-teal">dominate online.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-paper/70 leading-relaxed">
            Seven unified capabilities engineered for performance, search visibility, and revenue.
            Choose a standalone service or partner with us for full-stack growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Us vs Generic Agencies */}
      <section className="border-t border-white/10 bg-ink-card/30 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>The Standard</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Why brands choose Bits &amp; Builds.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-ink">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] font-mono text-xs uppercase tracking-wider text-paper/40">
                  <th className="p-6">Capability Metric</th>
                  <th className="p-6 text-teal font-bold">Bits &amp; Builds</th>
                  <th className="p-6 text-paper/50">Typical Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01]">
                    <td className="p-6 font-display font-semibold text-paper text-sm">
                      {row.feature}
                    </td>
                    <td className="p-6 text-teal font-medium bg-teal/[0.02]">
                      ✓ {row.us}
                    </td>
                    <td className="p-6 text-paper/50">
                      ✗ {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1440px] rounded-3xl border border-white/10 bg-gradient-to-r from-teal/10 via-ink-card to-electric-blue/10 p-10 md:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-paper">
              Not sure which service stack you need?
            </h2>
            <p className="mt-2 text-sm text-paper/60 max-w-xl">
              Book a free 20-minute consultation with Lavi and Jass. We will audit your current
              presence and give you an actionable growth roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-cursor-text="START"
              className="rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,242,213,0.3)]"
            >
              Request Free Audit →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-teal/40 px-6 py-4 font-mono text-xs text-teal hover:bg-teal/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
