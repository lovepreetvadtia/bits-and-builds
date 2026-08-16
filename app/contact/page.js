import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import {
  buildMetadata,
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
  FOUNDERS,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Bits and Builds — Sri Ganganagar | Start a Project",
  description:
    "Get in touch with founders Lavi and Jass at Bits and Builds. Phone/WhatsApp: +91 6367637487, Email: bitss.builds@gmail.com. Sri Ganganagar, Rajasthan 335002 — serving clients across India and worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="blueprint-grid relative px-6 pb-28 pt-40 md:px-10 overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        <div className="eyebrow-pill mb-6">
          <span>Start a Project</span>
        </div>

        <AnimatedText
          as="h1"
          immediate
          text="Tell us what you're building."
          className="max-w-4xl font-display text-clampHero font-bold leading-[0.95] tracking-tightest2 text-paper"
        />

        <p className="mt-6 max-w-xl text-base md:text-lg text-paper/70 leading-relaxed">
          Whether you need a full-stack Next.js web application, Google Maps SEO dominance,
          high-ROAS Meta &amp; Google Ads, or automated WhatsApp booking for your clinic or
          restaurant — we are ready to build.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl border border-teal/40 bg-teal/[0.06] p-8 shadow-[0_0_30px_rgba(0,242,213,0.15)]">
              <div className="flex items-center gap-3 text-teal font-mono text-xs uppercase tracking-wider font-bold mb-3">
                <span className="h-2 w-2 rounded-full bg-teal animate-ping" />
                <span>Fastest Response Channel</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-paper">
                Direct WhatsApp with Founders
              </h3>
              <p className="mt-2 text-xs text-paper/70 leading-relaxed">
                Connect directly with Lavi and Jass. Average response time is under 15 minutes during
                business hours.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,242,213,0.3)]"
              >
                <span>Chat on WhatsApp ({AGENCY_PHONE})</span>
                <span>💬</span>
              </a>
            </div>

            {/* Studio Info Cards */}
            <div className="space-y-4 font-mono text-xs">
              <div className="rounded-2xl border border-white/10 bg-ink-card p-6">
                <p className="uppercase tracking-widest text-teal font-semibold mb-1">Email</p>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  data-cursor-text="EMAIL"
                  className="font-display text-lg font-bold text-paper hover:text-teal transition-colors"
                >
                  {AGENCY_EMAIL}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-card p-6">
                <p className="uppercase tracking-widest text-teal font-semibold mb-1">Phone Line</p>
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
                  data-cursor-text="CALL"
                  className="font-display text-lg font-bold text-paper hover:text-teal transition-colors"
                >
                  {AGENCY_PHONE}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-card p-6">
                <p className="uppercase tracking-widest text-teal font-semibold mb-1">Studio Headquarters</p>
                <p className="font-display text-base font-bold text-paper">{AGENCY_LOCATION}</p>
                <p className="mt-1 text-[11px] text-paper/50">Operating Hours: Mon - Sat (9:00 AM - 8:00 PM IST)</p>
                <p className="mt-1 text-[11px] text-teal">Serving Clients Pan-India &amp; Worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Builder Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
