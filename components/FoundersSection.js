import Link from "next/link";
import { AGENCY_PHONE, AGENCY_EMAIL, WHATSAPP_URL } from "@/lib/seo";

export default function FoundersSection() {
  return (
    <section className="relative border-t border-white/10 bg-ink py-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="eyebrow-pill mb-4">
              <span>Leadership &amp; Craft</span>
            </div>
            <h2 className="font-display text-clamp2 font-bold tracking-tightest2 text-paper">
              Built by founders, <span className="text-teal">run by founders.</span>
            </h2>
            <p className="mt-4 max-w-xl text-paper/60 text-base">
              No junior account managers or layers of bureaucracy. You work directly with Lavi and
              Jass from kickoff through launch.
            </p>
          </div>

          <Link
            href="/about"
            data-cursor-text="STORY"
            className="font-mono text-xs uppercase tracking-widest text-teal hover:underline inline-flex items-center gap-2"
          >
            <span>Read studio story</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder 1: Lavi */}
          <div className="group relative rounded-3xl border border-white/10 bg-ink-card p-8 transition-all duration-300 hover:border-teal/40 hover:shadow-[0_0_40px_rgba(0,242,213,0.1)]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 border border-teal/30 text-teal font-display text-2xl font-bold shadow-[0_0_20px_rgba(0,242,213,0.2)]">
                  L
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-paper group-hover:text-teal transition-colors">
                    Lavi
                  </h3>
                  <p className="font-mono text-xs text-teal">Co-Founder &amp; Technical Director</p>
                </div>
              </div>
              <span className="font-mono text-xs text-paper/30">01</span>
            </div>

            <p className="mt-6 text-sm text-paper/70 leading-relaxed">
              &quot;My focus is technical precision: engineering websites on Next.js Server-Side
              Rendering that load in sub-second speeds, dominating Google Maps 3-Pack rankings for
              local businesses, and configuring AI search schemas (AEO &amp; GEO) so your brand is
              recommended by ChatGPT and Perplexity.&quot;
            </p>

            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper/40 mb-3">
                Core Domains:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 SSR",
                  "Local SEO & GMB Setup",
                  "AEO & GEO AI Search",
                  "Custom Web Architecture",
                  "WhatsApp API Automation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-paper/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founder 2: Jass */}
          <div className="group relative rounded-3xl border border-white/10 bg-ink-card p-8 transition-all duration-300 hover:border-electric-blue/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric-blue/10 border border-electric-blue/30 text-electric-blue font-display text-2xl font-bold shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  J
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-paper group-hover:text-electric-blue transition-colors">
                    Jass
                  </h3>
                  <p className="font-mono text-xs text-electric-blue">
                    Co-Founder &amp; Creative / Marketing Director
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-paper/30">02</span>
            </div>

            <p className="mt-6 text-sm text-paper/70 leading-relaxed">
              &quot;Great technology needs captivating storytelling and aggressive distribution. I
              architect paid acquisition campaigns on Meta and Google Ads, direct viral short-form
              Reels, and craft visual identities that make local clinics, restaurants, and brands look
              like multi-million dollar institutions.&quot;
            </p>

            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper/40 mb-3">
                Core Domains:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "PPC (Meta & Google Ads)",
                  "Viral Reels & Video Editing",
                  "Brand Identity & Graphic Design",
                  "Conversion Copywriting",
                  "Restaurant & Clinic Growth",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-paper/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location & Ethos Banner */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-teal/10 via-ink-card to-electric-blue/10 p-8 md:p-10 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal">
                Headquarters · Sri Ganganagar, Rajasthan (335002)
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-paper mt-2">
                Local craftsmanship, worldwide digital reach.
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-paper/60">
                Whether you need in-person strategy in Rajasthan or complete remote project delivery
                in Delhi, Mumbai, London, or Dubai — our workflows run seamlessly on calls, WhatsApp,
                and live boards.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="TALK"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              <span>Speak with Lavi &amp; Jass</span>
              <span>💬</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
