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

      <article className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white grid-editorial-light dark:grid-editorial-40 px-4 sm:px-6 pb-20 sm:pb-28 pt-28 sm:pt-36 md:px-10 overflow-hidden min-h-screen transition-colors duration-300">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-xs text-charcoal/50 dark:text-sage/50 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-charcoal dark:hover:text-yellow transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-charcoal dark:hover:text-yellow transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-charcoal dark:text-white font-bold line-clamp-1">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge-editorial-light dark:badge-editorial">
              <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
              <span>{post.tag}</span>
            </span>
            <span className="font-mono text-xs text-charcoal/50 dark:text-sage/50">{post.readTime}</span>
          </div>

          <h1 className="font-anton text-3xl sm:text-5xl md:text-6xl text-charcoal dark:text-white tracking-tight leading-[0.95] uppercase">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between border-y border-charcoal/15 dark:border-white/15 py-3.5 sm:py-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-charcoal dark:bg-black text-yellow font-anton text-sm sm:text-base shadow-xs border border-yellow/30">
                {post.author[0]}
              </div>
              <div>
                <p className="font-bold font-satoshi text-charcoal dark:text-white text-xs sm:text-sm">{post.author}</p>
                <p className="text-[10px] sm:text-[11px] text-charcoal/60 dark:text-sage/60">{post.authorRole}</p>
              </div>
            </div>
            <div className="text-charcoal/60 dark:text-sage/60 text-[11px] sm:text-xs">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Article Excerpt */}
          <div className="my-8 sm:my-10 rounded-2xl border border-charcoal/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-darkgray p-5 sm:p-6 text-charcoal dark:text-white font-satoshi text-base sm:text-lg leading-relaxed italic border-l-4 border-l-yellow shadow-md">
            &quot;{post.excerpt}&quot;
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-8 sm:space-y-12 font-satoshi text-charcoal/85 dark:text-sage/90 leading-relaxed">
            {post.sections &&
              post.sections.map((section, idx) => (
                <section key={idx} className="space-y-3 sm:space-y-4">
                  <h2 className="font-anton text-xl sm:text-2xl md:text-3xl text-charcoal dark:text-white tracking-wide">
                    {section.heading}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-charcoal/80 dark:text-sage/85 leading-relaxed">
                    {section.body}
                  </p>
                  {section.takeaway && (
                    <div className="rounded-xl border border-yellow/40 bg-yellow/10 p-3.5 sm:p-4 font-mono text-xs text-charcoal dark:text-yellow">
                      <strong>Key Insight:</strong> {section.takeaway}
                    </div>
                  )}
                </section>
              ))}
          </div>

          {/* Article Footer & WhatsApp CTA */}
          <div className="mt-12 sm:mt-16 rounded-3xl border border-charcoal/15 dark:border-white/15 bg-charcoal dark:bg-darkgray text-white p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-yellow">
                Direct Founder Consultation
              </p>
              <h3 className="font-anton text-xl sm:text-2xl text-white mt-1">
                WANT THIS STRATEGY IMPLEMENTED FOR YOUR BRAND?
              </h3>
              <p className="mt-2 font-satoshi text-xs sm:text-sm text-sage/80">
                Lavi and Jass will review your current systems and build an actionable growth roadmap.
              </p>
            </div>

            <a
              href={`${WHATSAPP_URL}%20regarding%20blog%20${encodeURIComponent(post.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="WHATSAPP"
              className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 sm:px-7 py-3 sm:py-3.5 font-anton text-xs sm:text-sm uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 font-bold"
            >
              <span>Discuss on WhatsApp</span>
              <span className="transition-transform duration-300 group-hover:scale-110">💬</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
