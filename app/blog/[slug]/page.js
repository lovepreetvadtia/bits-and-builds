import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    image: post.coverImage?.src,
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
    image: post.coverImage ? `${SITE_URL}${post.coverImage.src}` : undefined,
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
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

          {/* Cover / Featured Image with Image SEO */}
          {post.coverImage && (
            <figure className="my-8 sm:my-12 overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.02] shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              {post.coverImage.caption && (
                <figcaption className="px-5 py-3 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01] italic">
                  {post.coverImage.caption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Structured Article Sections */}
          <div className="space-y-12 sm:space-y-16 text-gray-800 dark:text-gray-300 leading-relaxed font-normal">
            {(post.sections || post.content || []).map((section, idx) => (
              <section key={idx} className="space-y-5">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white tracking-tight pt-2">
                    {section.heading}
                  </h2>
                )}

                {/* Section Diagram / Image with Image SEO */}
                {section.image && (
                  <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.02] shadow-xs">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>
                    {section.image.caption && (
                      <figcaption className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01] italic">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Direct paragraphs */}
                {section.paragraphs &&
                  section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}

                {/* Legacy single body fallback */}
                {!section.paragraphs && section.body && (
                  <p
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                )}

                {/* Expert Pullquote */}
                {section.quote && (
                  <blockquote className="my-6 rounded-2xl border-l-4 border-l-[#F2C230] border-y border-r border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-5 sm:p-6 text-gray-800 dark:text-gray-200 italic shadow-xs">
                    <p className="text-base sm:text-lg leading-relaxed font-normal">
                      &ldquo;{section.quote.text}&rdquo;
                    </p>
                    {section.quote.author && (
                      <cite className="mt-3 block text-xs font-semibold not-italic text-gray-900 dark:text-[#F2C230] uppercase tracking-wider">
                        — {section.quote.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                {/* Structured Comparison Table */}
                {section.table && (
                  <div className="my-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-xs bg-white dark:bg-[#111111]">
                    {section.table.caption && (
                      <div className="border-b border-gray-200 dark:border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5">
                        {section.table.caption}
                      </div>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="border-b border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.03] text-gray-900 dark:text-white font-semibold">
                          <tr>
                            {section.table.headers.map((header, hIdx) => (
                              <th key={hIdx} className="px-4 sm:px-5 py-3.5 whitespace-nowrap">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                          {section.table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-4 sm:px-5 py-3.5 ${
                                    cIdx === 0
                                      ? "font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                      : "text-gray-700 dark:text-gray-300"
                                  }`}
                                  dangerouslySetInnerHTML={{ __html: cell }}
                                />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Structured List */}
                {section.list && (
                  <div className="my-4">
                    {section.list.type === "number" ? (
                      <ol className="space-y-3 pl-2">
                        {section.list.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-xs font-bold text-gray-900 mt-0.5">
                              {itemIdx + 1}
                            </span>
                            <div
                              className="leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="space-y-3 pl-2">
                        {section.list.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
                          >
                            <span className="h-2 w-2 rounded-full bg-[#F2C230] shrink-0 mt-2.5" />
                            <div
                              className="leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Subsections with H3 question headings */}
                {section.subsections &&
                  section.subsections.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-3 pt-3">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white tracking-tight">
                        {sub.subheading}
                      </h3>
                      {sub.paragraphs &&
                        sub.paragraphs.map((subP, subPIdx) => (
                          <p
                            key={subPIdx}
                            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: subP }}
                          />
                        ))}
                      {sub.list && (
                        <div className="my-3">
                          {sub.list.type === "number" ? (
                            <ol className="space-y-3 pl-2">
                              {sub.list.items.map((subItem, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2C230] text-xs font-bold text-gray-900 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <div
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: subItem }}
                                  />
                                </li>
                              ))}
                            </ol>
                          ) : (
                            <ul className="space-y-3 pl-2">
                              {sub.list.items.map((subItem, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
                                >
                                  <span className="h-2 w-2 rounded-full bg-[#F2C230] shrink-0 mt-2.5" />
                                  <div
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: subItem }}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                {/* Key Takeaway Callout */}
                {section.takeaway && (
                  <div className="rounded-2xl border border-[#F2C230]/40 bg-[#F2C230]/10 p-5 text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                    <strong className="font-semibold uppercase tracking-wider text-xs block mb-1 text-gray-900 dark:text-[#F2C230]">
                      Key Takeaway:
                    </strong>
                    <div dangerouslySetInnerHTML={{ __html: section.takeaway }} />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Interlinking Navigation Block: Blog -> Service -> Services Hub -> Home */}
          {post.primaryService && (
            <div className="mt-14 sm:mt-18 rounded-3xl border border-gray-200 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#141414] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  <span>Related Service Engine</span>
                  <span>•</span>
                  <span className="text-[#F2C230]">Architecture &amp; Code</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white tracking-tight">
                  {post.primaryService.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-xl">
                  {post.primaryService.desc}
                </p>
              </div>

              <Link
                href={`/services/${post.primaryService.slug}`}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#F2C230] dark:hover:bg-[#F2C230] dark:hover:text-gray-900 transition-colors shadow-sm"
              >
                <span>View Service Details</span>
                <span>→</span>
              </Link>
            </div>
          )}

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
