import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      data-cursor-text="EXPLORE"
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-card p-8 transition-all duration-300 hover:border-teal/50 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(0,242,213,0.12)] min-h-[320px]"
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal/0 blur-2xl transition-all duration-500 group-hover:bg-teal/15" />

      {/* Top row: Tag + Arrow */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal border border-teal/20">
            {service.tag}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
            {service.badge}
          </span>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper/40 transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>

      {/* Content */}
      <div className="my-6">
        <h3 className="font-display text-2xl font-bold text-paper transition-colors group-hover:text-teal">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-paper/60">{service.short}</p>
      </div>

      {/* Bottom: Highlight metric */}
      <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs font-mono">
        <span className="text-paper/40">Key impact:</span>
        <span className="text-teal font-bold">{service.caseHighlight.metric}</span>
      </div>
    </Link>
  );
}
