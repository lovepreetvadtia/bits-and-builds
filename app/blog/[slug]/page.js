import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/blog";
import { buildMetadata, SITE_URL, WHATSAPP_URL } from "@/lib/seo";
import GsapTextReveal from "@/components/GsapTextReveal";

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
    <div className="w-full bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28 min-h-screen">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 font-medium">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-[#F2C230] font-semibold line-clamp-1">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#F2C230] text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
              {post.tag}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{post.readTime}</span>
          </div>

          <GsapTextReveal
            as="h1"
            text={post.title}
            variant="chars"
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white tracking-tight leading-[1.1]"
            highlightWord={post.title.split(" ")[0]}
            highlightClass="text-[#F2C230]"
          />

          {/* Author Badge */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between border-y border-gray-200 dark:border-white/10 py-4 text-xs font-medium">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] dark:bg-white/10 text-[#F2C230] font-bold text-sm border border-transparent dark:border-white/15">
                {post.author[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{post.author}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{post.authorRole}</p>
              </div>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Article Excerpt */}
          <div className="my-8 sm:my-10 rounded-2xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed italic border-l-4 border-l-[#F2C230] shadow-xs">
            &quot;{post.excerpt}&quot;
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-10 sm:space-y-12 text-gray-800 dark:text-gray-300 leading-relaxed font-normal">
            {post.sections &&
              post.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.body}
                  </p>
                  {section.takeaway && (
                    <div className="rounded-2xl border border-[#F2C230]/40 bg-[#F2C230]/10 p-5 text-xs text-gray-900 dark:text-gray-100 leading-relaxed">
                      <strong className="font-semibold uppercase tracking-wider text-xs block mb-1 text-gray-900 dark:text-[#F2C230]">Key Takeaway:</strong>
                      {section.takeaway}
                    </div>
                  )}
                </section>
              ))}
          </div>

          {/* Article Footer & WhatsApp CTA */}
          <div className="mt-14 sm:mt-18 rounded-3xl border border-white/10 bg-[#0A0A0A] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#F2C230]">
                Direct Founder Consultation
              </p>
              <h3 className="text-xl sm:text-2xl font-medium text-white mt-1 tracking-tight">
                Want this strategy implemented for your brand?
              </h3>
              <p className="mt-2 text-sm text-gray-300 font-normal">
                Lavi and Jass will review your current systems and build an actionable growth roadmap.
              </p>
            </div>

            <a
              href={`${WHATSAPP_URL}%20regarding%20blog%20${encodeURIComponent(post.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-md transition-colors"
            >
              <span>Discuss on WhatsApp</span>
              <span>💬</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
