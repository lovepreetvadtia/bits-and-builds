import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      data-cursor-text="EXPLORE"
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-charcoal/15 dark:border-white/15 bg-white dark:bg-darkgray p-8 transition-all duration-300 hover:border-yellow dark:hover:border-yellow hover:shadow-[0_15px_35px_rgba(23,30,25,0.1)] dark:hover:shadow-editorial-dark card-editorial min-h-[320px] text-charcoal dark:text-white"
    >
      {/* Top row: Icon + Tag + Arrow */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal dark:bg-black font-anton text-sm font-bold text-yellow border border-yellow/30 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-yellow group-hover:text-charcoal duration-300">
            <ServiceIcon slug={service.slug} className="h-5 w-5" />
          </div>
          <div>
            <span className="font-anton text-xs text-yellow bg-charcoal dark:bg-black px-2 py-0.5 rounded border border-yellow/30 mr-2">
              {service.tag}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/50 dark:text-sage/60">
              {service.badge}
            </span>
          </div>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 dark:border-white/20 bg-charcoal/5 dark:bg-white/5 text-charcoal dark:text-white transition-all duration-300 group-hover:border-yellow group-hover:bg-yellow group-hover:text-charcoal group-hover:translate-x-1 group-hover:-translate-y-1 font-anton text-sm">
          ↗
        </span>
      </div>

      {/* Content */}
      <div className="my-6">
        <h3 className="font-anton text-2xl md:text-3xl text-charcoal dark:text-white transition-colors group-hover:text-charcoal/80 dark:group-hover:text-yellow tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 font-satoshi text-xs md:text-sm leading-relaxed text-charcoal/70 dark:text-sage/80">
          {service.short}
        </p>
      </div>

      {/* Bottom: Highlight metric */}
      <div className="border-t border-charcoal/10 dark:border-white/10 pt-4 flex items-center justify-between text-xs font-mono">
        <span className="text-charcoal/50 dark:text-sage/60">Proven metric:</span>
        <span className="text-charcoal dark:text-yellow font-anton text-sm bg-yellow/40 dark:bg-yellow/20 px-2.5 py-0.5 rounded border border-yellow/30">
          {service.caseHighlight.metric}
        </span>
      </div>
    </Link>
  );
}
