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
    <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 px-6 pb-28 pt-36 md:px-10 overflow-hidden min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="badge-editorial-light dark:badge-editorial mb-6 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-yellow animate-pulse border border-charcoal/40" />
          <span>Editorial &amp; Engineering Field Notes</span>
        </div>

        <h1 className="max-w-4xl font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal dark:text-white tracking-tight leading-[0.92] uppercase">
          NOTES ON ENGINEERING, <span className="highlight-yellow">SEO &amp; GROWTH.</span>
        </h1>

        <p className="mt-6 max-w-2xl font-satoshi text-base sm:text-lg md:text-xl text-charcoal/75 dark:text-sage/80 leading-relaxed">
          Tactical guides and field notes on building high-converting web applications, ranking in
          Google Maps 3-Pack, and automating local business workflows.
        </p>

        {/* Blog Post List */}
        <div className="mt-16 divide-y divide-charcoal/15 dark:divide-white/15 border-y border-charcoal/15 dark:border-white/15">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-cursor-text="READ"
              className="group grid gap-6 py-12 transition-all hover:bg-yellow/10 dark:hover:bg-white/5 md:grid-cols-12 md:items-center px-4 rounded-2xl"
            >
              <div className="md:col-span-2">
                <span className="inline-flex rounded-lg bg-yellow/40 dark:bg-yellow/20 border border-charcoal/20 dark:border-white/20 px-3 py-1 font-anton text-xs uppercase text-charcoal dark:text-yellow">
                  {post.tag}
                </span>
              </div>

              <div className="md:col-span-7">
                <h2 className="font-anton text-2xl md:text-3xl text-charcoal dark:text-white transition-colors group-hover:text-charcoal dark:group-hover:text-yellow tracking-wide">
                  {post.title}
                </h2>
                <p className="mt-3 font-satoshi text-sm leading-relaxed text-charcoal/70 dark:text-sage/75">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs font-mono text-charcoal/60 dark:text-sage/60">
                <span className="text-charcoal dark:text-white font-bold font-satoshi">
                  By {post.author} ({post.authorRole})
                </span>
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

        {/* Custom Question CTA */}
        <div className="mt-20 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal dark:bg-darkgray text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-yellow">
              Direct Technical Advisory
            </span>
            <h3 className="font-anton text-3xl text-white mt-1 tracking-tight">
              HAVE A SPECIFIC MARKETING OR TECHNICAL QUESTION?
            </h3>
            <p className="mt-2 font-satoshi text-sm text-sage/80 max-w-lg">
              Reach out directly to Lavi and Jass. We&apos;re always happy to audit your current stack and
              share actionable insights.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="WHATSAPP"
            className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-8 py-4 font-anton text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
          >
            <span>Ask on WhatsApp</span>
            <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}
