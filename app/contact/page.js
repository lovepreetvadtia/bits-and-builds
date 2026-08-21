import ContactForm from "@/components/ContactForm";
import {
  buildMetadata,
  AGENCY_PHONE,
  AGENCY_EMAIL,
  AGENCY_LOCATION,
  WHATSAPP_URL,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Bits and Builds — Sri Ganganagar | Start a Project",
  description:
    "Get in touch with founders Lavi and Jass at Bits and Builds. Phone/WhatsApp: +91 6367637487, Email: bitss.builds@gmail.com. Sri Ganganagar, Rajasthan 335002 — serving clients across India and worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 px-6 pb-28 pt-36 md:px-10 overflow-hidden min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="badge-editorial-light dark:badge-editorial mb-6 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-yellow animate-pulse border border-charcoal/40" />
          <span>Kickoff Consultation &amp; Scope</span>
        </div>

        <h1 className="max-w-4xl font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal dark:text-white tracking-tight leading-[0.92] uppercase">
          TELL US WHAT YOU&apos;RE <span className="highlight-yellow">BUILDING.</span>
        </h1>

        <p className="mt-6 max-w-xl font-satoshi text-base sm:text-lg md:text-xl text-charcoal/75 dark:text-sage/80 leading-relaxed">
          Whether you need a full-stack Next.js web application, Google Maps SEO dominance,
          high-ROAS Meta &amp; Google Ads, or automated WhatsApp booking for your clinic or
          restaurant — we are ready to build.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl border-2 border-charcoal dark:border-white/20 bg-yellow p-8 md:p-10 shadow-brutalist text-charcoal">
              <div className="flex items-center gap-2 text-charcoal font-mono text-xs uppercase tracking-wider font-bold mb-3">
                <span className="h-2 w-2 rounded-full bg-charcoal animate-ping" />
                <span>Fastest Response Channel</span>
              </div>
              <h3 className="font-anton text-3xl text-charcoal tracking-tight">
                DIRECT WHATSAPP WITH FOUNDERS
              </h3>
              <p className="mt-2 font-satoshi text-sm text-charcoal/85 leading-relaxed font-medium">
                Connect directly with Lavi and Jass. Average response time is under 15 minutes during
                operating hours.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="WHATSAPP"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-4 font-anton text-xs uppercase tracking-wider text-white transition-transform hover:scale-[1.02] hover:bg-black shadow-md"
              >
                <span>Chat on WhatsApp ({AGENCY_PHONE})</span>
                <span>💬</span>
              </a>
            </div>

            {/* Studio Info Cards */}
            <div className="space-y-4 font-mono text-xs">
              <div className="rounded-2xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-6 shadow-md text-charcoal dark:text-white">
                <p className="uppercase tracking-widest text-charcoal/50 dark:text-sage/50 font-bold mb-1">Direct Studio Email</p>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  data-cursor-text="EMAIL"
                  className="font-anton text-xl text-charcoal dark:text-white hover:text-charcoal/70 dark:hover:text-yellow transition-colors"
                >
                  {AGENCY_EMAIL}
                </a>
              </div>

              <div className="rounded-2xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-6 shadow-md text-charcoal dark:text-white">
                <p className="uppercase tracking-widest text-charcoal/50 dark:text-sage/50 font-bold mb-1">Phone Line</p>
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
                  data-cursor-text="CALL"
                  className="font-anton text-xl text-charcoal dark:text-white hover:text-charcoal/70 dark:hover:text-yellow transition-colors"
                >
                  {AGENCY_PHONE}
                </a>
              </div>

              <div className="rounded-2xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-6 shadow-md text-charcoal dark:text-white">
                <p className="uppercase tracking-widest text-charcoal/50 dark:text-sage/50 font-bold mb-1">Studio Headquarters</p>
                <p className="font-anton text-lg text-charcoal dark:text-white">{AGENCY_LOCATION}</p>
                <p className="mt-1 font-satoshi text-xs text-charcoal/60 dark:text-sage/60">Operating Hours: Mon - Sat (9:00 AM - 8:00 PM IST)</p>
                <p className="mt-1 font-mono text-xs text-charcoal dark:text-yellow font-bold">Serving Clients Pan-India &amp; Worldwide Remote</p>
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
