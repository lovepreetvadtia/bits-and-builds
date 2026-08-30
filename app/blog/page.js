import React from "react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog";
import { buildMetadata, WHATSAPP_URL } from "@/lib/seo";
import TextRollButton from "@/components/TextRollButton";
import GsapTextReveal from "@/components/GsapTextReveal";

export const metadata = buildMetadata({
  title: "Blog & Field Notes — Bits and Builds Studio",
  description:
    "Engineering insights, local SEO playbooks, AI search optimization (AEO/GEO), and WhatsApp booking blueprints from founders Lavi & Jass.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-[#F2C230] text-white dark:text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center select-none flex-shrink-0">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 select-none">
            Editorial &amp; Engineering Field Notes
          </span>
        </div>

        <GsapTextReveal
          as="h1"
          text="Notes on engineering, SEO &amp; growth."
          variant="chars"
          className="max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 dark:text-white"
          highlightWord="engineering,"
          highlightClass="text-[#F2C230]"
        />

        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          Tactical guides and field notes on building high-converting web applications, ranking in
          Google Maps 3-Pack, and automating local business workflows.
        </p>

        {/* Blog Post List */}
        <div className="mt-12 sm:mt-16 divide-y divide-gray-200 dark:divide-white/10 border-y border-gray-200 dark:border-white/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-5 sm:gap-6 py-8 sm:py-10 transition-colors hover:bg-[#F5F5F5] dark:hover:bg-white/5 md:grid-cols-12 md:items-center px-4 rounded-2xl"
            >
              {post.coverImage ? (
                <div className="md:col-span-3">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 shadow-xs">
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ) : (
                <div className="md:col-span-2">
                  <span className="inline-flex rounded-full bg-[#F2C230] px-3 py-1 text-xs font-semibold text-gray-900">
                    {post.tag}
                  </span>
                </div>
              )}

              <div className={post.coverImage ? "md:col-span-6" : "md:col-span-7"}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex rounded-full bg-[#F2C230] px-2.5 py-0.5 text-[11px] font-semibold text-gray-900">
                    {post.tag}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white group-hover:text-[#D9AC1F] dark:group-hover:text-[#F2C230] transition-colors tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between md:col-span-3 md:flex-col md:items-end md:gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span className="text-gray-900 dark:text-white font-semibold">
                  By {post.author}
                </span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {post.authorRole}
                </span>
                <span className="mt-1">
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
        <div className="mt-14 sm:mt-20 rounded-3xl border border-white/10 bg-[#0A0A0A] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F2C230]">
              Direct Technical Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white mt-1 tracking-tight">
              Have a specific marketing or technical question?
            </h3>
            <p className="mt-2 text-sm text-gray-300 max-w-lg font-normal">
              Reach out directly to Lavi and Jass. We&apos;re always happy to audit your current stack and
              share actionable recommendations.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#F2C230] hover:bg-[#D9AC1F] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-md transition-colors"
          >
            <span>Ask on WhatsApp</span>
            <span>💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}
