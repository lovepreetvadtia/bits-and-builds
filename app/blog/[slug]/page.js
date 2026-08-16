import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/blog";
import { buildMetadata, SITE_URL, WHATSAPP_URL } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} — Bits and Builds`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.tag, "Bits and Builds", "Sri Ganganagar", post.author],
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Bits and Builds",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="blueprint-grid relative px-6 pb-28 pt-40 md:px-10 overflow-hidden">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-xs text-paper/50 mb-8">
            <Link href="/" className="hover:text-teal">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal">Blog</Link>
            <span>/</span>
            <span className="text-teal font-semibold line-clamp-1">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="eyebrow-pill">{post.tag}</span>
            <span className="font-mono text-xs text-paper/40">{post.readTime}</span>
          </div>

          <h1 className="font-display text-clamp2 font-bold leading-tight tracking-tightest2 text-paper">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="mt-8 flex items-center justify-between border-y border-white/10 py-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/15 text-teal font-bold text-sm">
                {post.author[0]}
              </div>
              <div>
                <p className="font-bold text-paper">{post.author}</p>
                <p className="text-[11px] text-paper/50">{post.authorRole}</p>
              </div>
            </div>
            <div className="text-paper/40">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Article Excerpt */}
          <div className="my-10 rounded-2xl border border-teal/30 bg-teal/[0.04] p-6 text-paper/90 text-base leading-relaxed italic">
            &quot;{post.excerpt}&quot;
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-12 text-paper/80 leading-relaxed">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-paper border-b border-white/5 pb-2">
                  {section.heading}
                </h2>
                <div className="whitespace-pre-line text-sm md:text-base leading-relaxed text-paper/70">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* Author Footnote Card */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-ink-card p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-teal">
                  Need Help Implementing This?
                </span>
                <h3 className="font-display text-2xl font-bold text-paper mt-1">
                  Let Bits &amp; Builds handle it for you.
                </h3>
                <p className="mt-2 text-xs text-paper/60 max-w-md">
                  We build the websites, run the ads, optimize Google Maps, and configure the
                  automations.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 shrink-0">
                <Link
                  href="/contact"
                  data-cursor-text="START"
                  className="rounded-full bg-teal px-6 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
                >
                  Start a Project →
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-teal/40 px-6 py-3 text-center font-mono text-xs text-teal hover:bg-teal/10"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
