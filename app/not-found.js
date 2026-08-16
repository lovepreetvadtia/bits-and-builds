import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/seo";

export default function NotFound() {
  return (
    <section className="blueprint-grid relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-teal/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg">
        <div className="eyebrow-pill mb-6">
          <span>Error 404 · Route Not Found</span>
        </div>

        <h1 className="font-display text-clamp1 font-bold tracking-tightest2 text-paper">
          Lost in the <span className="text-teal">bits?</span>
        </h1>

        <p className="mt-6 text-sm text-paper/60 leading-relaxed">
          The requested page could not be located on the server. Explore our core services or return
          to the studio homepage.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            data-cursor-text="HOME"
            className="rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,242,213,0.3)]"
          >
            Back to Homepage →
          </Link>
          <Link
            href="/services"
            data-cursor-text="SERVICES"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-4 font-mono text-xs text-paper/80 hover:text-paper"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
