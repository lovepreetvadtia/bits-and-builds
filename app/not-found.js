import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/seo";

export default function NotFound() {
  return (
    <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 flex min-h-[85vh] flex-col items-center justify-center px-6 pt-36 pb-20 text-center overflow-hidden transition-colors duration-300">
      <div className="relative z-10 max-w-xl space-y-6">
        <div className="badge-editorial-light dark:badge-editorial mb-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-yellow animate-pulse border border-charcoal/40" />
          <span>Error 404 · Route Not Located</span>
        </div>

        <div className="font-anton text-8xl md:text-9xl text-charcoal dark:text-white leading-none select-none">
          4<span className="text-yellow">0</span>4
        </div>

        <h1 className="font-anton text-4xl sm:text-5xl text-charcoal dark:text-white tracking-tight leading-[0.95] uppercase">
          LOST IN THE <span className="highlight-yellow">BITS?</span>
        </h1>

        <p className="font-satoshi text-base text-charcoal/70 dark:text-sage/80 leading-relaxed max-w-md mx-auto">
          The requested page could not be located on the server. Explore our 7 core capabilities or return
          to the studio homepage.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            data-cursor-text="HOME"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal dark:bg-yellow px-8 py-4 font-anton text-sm uppercase tracking-wider text-white dark:text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black dark:hover:bg-white active:scale-95"
          >
            <span>Back to Homepage</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
          </Link>
          <Link
            href="/services"
            data-cursor-text="SERVICES"
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal dark:border-white/30 bg-white dark:bg-white/5 px-7 py-4 font-anton text-sm uppercase tracking-wider text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
