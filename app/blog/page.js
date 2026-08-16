import Link from "next/link";
import { posts } from "@/lib/blog";
import { buildMetadata, WHATSAPP_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog & Field Notes — Bits and Builds Studio",
  description:
    "Engineering insights, local SEO playbooks, AI search optimization (AEO/GEO), and WhatsApp booking blueprints from founders Lavi & Jass.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="blueprint-grid relative px-6 pb-28 pt-40 md:px-10 overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        <div className="eyebrow-pill mb-6">
          <span>Editorial &amp; Insights</span>
        </div>

        <h1 className="max-w-4xl font-display text-clampHero font-bold leading-[0.95] tracking-tightest2 text-paper">
          Notes on engineering, <span className="text-teal">SEO &amp; growth.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-paper/70 leading-relaxed">
          Tactical guides and field notes on building high-converting web applications, ranking in
          Google Maps, and automating local business workflows.
        </p>

        {/* Blog Post List */}
        <div className="mt-20 divide-y divide-white/10 border-y border-white/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-cursor-text="READ"
              className="group grid gap-6 py-12 transition-all hover:bg-white/[0.02] md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-2">
                <span className="inline-flex rounded-lg bg-teal/10 border border-teal/30 px-3 py-1 font-mono text-xs font-bold text-teal">
                  {post.tag}
                </span>
              </div>

              <div className="md:col-span-7">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-paper transition-colors group-hover:text-teal">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs font-mono text-paper/40">
                <span className="text-paper/70 font-semibold">Author: {post.author} ({post.authorRole})</span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / Custom Question CTA */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-ink-card p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-paper">
              Have a specific marketing or technical question?
            </h3>
            <p className="mt-2 text-sm text-paper/60 max-w-lg">
              Reach out directly to Lavi and Jass. We're always happy to audit your current stack and
              share insights.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="WHATSAPP"
            className="shrink-0 rounded-full bg-teal px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
          >
            Ask on WhatsApp 💬
          </a>
        </div>
      </div>
    </section>
  );
}
