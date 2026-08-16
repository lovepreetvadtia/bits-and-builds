import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { buildMetadata, serviceSchema, faqSchema, WHATSAPP_URL, AGENCY_PHONE } from "@/lib/seo";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} — Bits and Builds Studio`,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.title, service.badge, "Bits and Builds", "Sri Ganganagar"],
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const sSchema = serviceSchema(service);
  const fSchema = faqSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fSchema) }}
      />

      {/* Hero */}
      <section className="blueprint-grid relative px-6 pb-20 pt-40 md:px-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-xs text-paper/50 mb-6">
            <Link href="/" className="hover:text-teal">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-teal">Services</Link>
            <span>/</span>
            <span className="text-teal font-semibold">{service.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="eyebrow-pill">
              {service.tag} · {service.badge}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-teal">
              Impact: {service.caseHighlight.metric} {service.caseHighlight.label}
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-clampHero font-bold leading-[0.95] tracking-tightest2 text-paper">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-paper/70 leading-relaxed font-medium">
            {service.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-cursor-text="START"
              className="rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,242,213,0.3)]"
            >
              Start this project →
            </Link>
            <a
              href={`${WHATSAPP_URL}%20regarding%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="WHATSAPP"
              className="rounded-full border border-teal/40 px-6 py-4 font-mono text-xs text-teal hover:bg-teal/10 transition-colors"
            >
              Chat on WhatsApp ({AGENCY_PHONE})
            </a>
          </div>
        </div>
      </section>

      {/* Problem Solved vs Solution */}
      <section className="border-t border-white/10 bg-ink-card/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: The Challenge */}
            <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
                The Problem
              </span>
              <h3 className="font-display text-2xl font-bold text-paper mt-2">
                What holds most businesses back:
              </h3>
              <p className="mt-4 text-sm text-paper/70 leading-relaxed">
                {service.problemSolved}
              </p>
            </div>

            {/* Right: The Solution */}
            <div className="rounded-3xl border border-teal/30 bg-teal/[0.04] p-8 md:p-10 shadow-[0_0_40px_rgba(0,242,213,0.1)]">
              <span className="font-mono text-xs uppercase tracking-widest text-teal font-bold">
                The Bits &amp; Builds Solution
              </span>
              <h3 className="font-display text-2xl font-bold text-paper mt-2">
                How we engineer the fix:
              </h3>
              <p className="mt-4 text-sm text-paper/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>Included Scope</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Concrete deliverables, zero fluff.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-card p-6 transition-all hover:border-teal/40"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-paper/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="border-t border-white/10 bg-ink-card/20 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <div className="eyebrow-pill mb-4">
              <span>Workflow Protocol</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              How we execute this service.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step) => (
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

      {/* Tools & Tech Stack */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-3xl border border-white/10 bg-ink-card p-8 md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              Technology &amp; Tools Stack
            </p>
            <h3 className="font-display text-2xl font-bold text-paper mt-1">
              Industry-standard tools we deploy for this service:
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 max-w-lg">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-paper/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="border-t border-white/10 bg-ink-card/40 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14">
            <div className="eyebrow-pill mb-4">
              <span>Service Specific FAQ</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Questions about {service.title}.
            </h2>
          </div>

          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="eyebrow-pill mb-4">
                <span>Complementary Services</span>
              </div>
              <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
                Pair this with:
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-xs uppercase tracking-widest text-teal hover:underline"
            >
              All 7 Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
