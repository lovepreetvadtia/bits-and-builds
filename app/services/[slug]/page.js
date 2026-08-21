import { services } from "@/lib/services";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import ServiceIcon from "@/components/ServiceIcon";
import { AGENCY_PHONE, WHATSAPP_URL, serviceDetailSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Bits and Builds`,
    description: service.description.slice(0, 160),
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const schema = serviceDetailSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white dark:bg-charcoal text-charcoal dark:text-white pt-36 pb-24 px-6 md:px-10 grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-charcoal/60 dark:text-sage/70 mb-8">
            <Link href="/" className="hover:text-charcoal dark:hover:text-yellow transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-charcoal dark:hover:text-yellow transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-yellow font-bold">{service.tag}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow text-charcoal shadow-brutalist">
              <ServiceIcon slug={service.slug} className="h-6 w-6" />
            </span>
            <div className="badge-editorial-light dark:badge-editorial">
              <span>{service.badge}</span>
            </div>
          </div>

          <h1 className="mt-8 font-anton text-6xl md:text-8xl lg:text-9xl text-charcoal dark:text-white tracking-tight leading-[0.92] max-w-5xl">
            {service.title.toUpperCase()}.
          </h1>

          <p className="mt-6 font-satoshi text-lg md:text-2xl text-charcoal/80 dark:text-sage/90 max-w-3xl leading-relaxed">
            {service.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-cursor-text="START"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal dark:bg-yellow px-8 py-4 font-anton text-sm uppercase tracking-wider text-white dark:text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black dark:hover:bg-white active:scale-95"
            >
              <span>Kickoff This Engine</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </Link>
            <a
              href={`${WHATSAPP_URL}%20regarding%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="WHATSAPP"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal dark:border-white/30 bg-white dark:bg-white/10 px-7 py-4 font-anton text-sm uppercase tracking-wider text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              <span>Chat on WhatsApp ({AGENCY_PHONE})</span>
              <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Solved vs Solution */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-charcoal text-white px-6 py-24 md:px-10 grid-editorial-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2 items-stretch">
            {/* Left: The Challenge */}
            <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold">
                  ✕ The Problem
                </span>
                <h3 className="font-anton text-3xl text-white mt-2 tracking-wide">
                  WHAT HOLDS MOST BUSINESSES BACK:
                </h3>
                <p className="mt-4 font-satoshi text-sm md:text-base text-sage/80 leading-relaxed">
                  {service.problemSolved}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-sage/75 font-semibold">
                LACK OF ENGINEERED CONVERSION SYSTEMS
              </div>
            </div>

            {/* Right: The Solution */}
            <div className="rounded-3xl border-2 border-yellow bg-darkgray p-8 md:p-10 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-yellow font-bold">
                  ✓ The Bits &amp; Builds Fix
                </span>
                <h3 className="font-anton text-3xl text-yellow mt-2 tracking-wide">
                  HOW WE ENGINEER THE SOLUTION:
                </h3>
                <p className="mt-4 font-satoshi text-sm md:text-base text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-yellow font-semibold">
                HIGH CRAFT · SUB-SECOND SPEED · DIRECT FOUNDER EXECUTION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Deliverables */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span>Included Scope</span>
            </div>
            <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
              CONCRETE DELIVERABLES, <span className="highlight-yellow">ZERO FLUFF.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-6 md:p-8 shadow-md card-editorial text-charcoal dark:text-white"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow text-charcoal font-anton text-sm font-bold shadow-xs">
                  ✓
                </span>
                <span className="font-satoshi text-sm text-charcoal/85 dark:text-sage/90 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Production Tools & Software Suite Section */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#fcfdfc] dark:bg-[#151b17] px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 border-b border-charcoal/10 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span>⚙️ Production Software &amp; Toolchain</span>
              </div>
              <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                TOOLS WE DEPLOY FOR THIS <span className="highlight-yellow">ENGINE.</span>
              </h2>
            </div>
            <p className="font-satoshi text-sm md:text-base text-charcoal/80 dark:text-sage/85 max-w-md">
              We execute exclusively on industry-standard, professional software stacks — zero amateur templates, no shortcuts, and full master asset delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(service.toolStack || service.tools.map((t) => ({ name: t, category: "Core Software", desc: "Production-grade toolchain deployed for active client deliverables.", icon: "🛠️" }))).map((tool, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-7 sm:p-8 shadow-lg card-editorial flex flex-col justify-between transition-all duration-300 hover:border-yellow hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {tool.svgIcon ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal/5 dark:bg-white/5 p-2 border border-charcoal/10 dark:border-white/10 shadow-xs group-hover:scale-110 group-hover:border-yellow/50 transition-all duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.svgIcon}
                          alt={tool.name}
                          className="h-8 w-8 object-contain drop-shadow-xs"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl">{tool.icon || "⚡"}</span>
                    )}
                    <span className="rounded-full border border-charcoal/10 dark:border-white/10 bg-charcoal/5 dark:bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-charcoal/80 dark:text-yellow font-bold">
                      {tool.category || "Production Tool"}
                    </span>
                  </div>
                  <h3 className="font-anton text-2xl text-charcoal dark:text-white tracking-wide group-hover:text-charcoal dark:group-hover:text-yellow transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-3 font-satoshi text-xs sm:text-sm text-charcoal/80 dark:text-sage/85 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/10 dark:border-white/10 flex items-center justify-between font-mono text-[10px] text-charcoal/70 dark:text-sage/75 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Production Grade</span>
                  </div>
                  <span className="uppercase font-bold text-yellow">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-white dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span>Workflow Protocol</span>
            </div>
            <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
              HOW WE EXECUTE THIS <span className="highlight-yellow">SERVICE.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#f8f9fa] dark:bg-darkgray rounded-3xl border border-charcoal/15 dark:border-white/15 p-8 flex flex-col justify-between min-h-[280px] shadow-lg card-editorial text-charcoal dark:text-white"
              >
                <div>
                  <span className="font-anton text-2xl text-charcoal bg-yellow px-2.5 py-1 rounded">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-anton text-xl text-charcoal dark:text-white tracking-wide">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 font-satoshi text-xs sm:text-sm leading-relaxed text-charcoal/80 dark:text-sage/85">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#fcfdfc] dark:bg-[#1a211c] px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div className="badge-editorial-light dark:badge-editorial mb-4">
              <span>Service Specific FAQ</span>
            </div>
            <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
              QUESTIONS ABOUT <span className="highlight-yellow">{service.title}.</span>
            </h2>
          </div>

          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-charcoal px-6 py-28 md:px-10 text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 transition-colors duration-300">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex items-end justify-between border-b border-charcoal/10 dark:border-white/10 pb-8">
            <div>
              <div className="badge-editorial-light dark:badge-editorial mb-4">
                <span>Complementary Services</span>
              </div>
              <h2 className="font-anton text-5xl md:text-7xl text-charcoal dark:text-white tracking-tight leading-[0.92]">
                PAIR THIS <span className="highlight-yellow">WITH:</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="font-anton text-xs uppercase tracking-widest text-charcoal dark:text-yellow hover:text-charcoal/70 dark:hover:text-white transition-colors underline decoration-yellow decoration-2 underline-offset-4"
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
