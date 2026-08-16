"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

const DEFAULT_FAQS = [
  {
    q: "Where is Bits and Builds located, and do you work with remote clients?",
    a: "We are headquartered in Sri Ganganagar, Rajasthan (PIN 335002). We work with local brands across Rajasthan, as well as businesses across India (Delhi, Mumbai, Bengaluru, Jaipur, etc.) and international clients in the UK, US, and UAE. All projects are run with crystal-clear communication via WhatsApp, Google Meet, and shared Notion/Slack boards.",
  },
  {
    q: "Who will I be working with directly?",
    a: "You work directly with co-founders Lavi and Jass. Lavi oversees all technical architecture, Next.js code, and SEO/AEO search optimization. Jass leads paid ad funnels (Meta & Google Ads), creative direction, and viral video editing.",
  },
  {
    q: "How does the Hospital & Restaurant booking automation work?",
    a: "We deploy automated WhatsApp Business & SMS workflows that integrate directly with your doctor OPD schedules or restaurant table seating charts. Patients or diners can view available slots, book in under 45 seconds, receive confirmation PDFs, and get automated 2-hour reminders. This completely eliminates phone hold times and slashes no-shows by up to 80%.",
  },
  {
    q: "Why do you build websites in Next.js SSR instead of WordPress?",
    a: "WordPress sites rely on heavy themes and dozens of third-party plugins that bloat load times and create security vulnerabilities. Next.js with Server-Side Rendering (SSR) delivers sub-second page loads, 95+ Google PageSpeed scores, zero plugin vulnerabilities, and native search engine crawlability.",
  },
  {
    q: "What is AEO & GEO in your SEO service?",
    a: "Search has expanded beyond traditional Google rankings. Answer Engine Optimization (AEO) structures your data for voice search and featured snippets. Generative Engine Optimization (GEO) embeds structured entity knowledge so AI platforms like ChatGPT, Google Gemini, and Perplexity recommend your business when users search for local or national solutions.",
  },
  {
    q: "How do we get started on a project?",
    a: "Simply fill out our contact form, send a message to +91 63676 37487 on WhatsApp, or email bitss.builds@gmail.com. We will analyze your current presence and schedule a 20-minute strategy call within 24 hours.",
  },
];

export default function FAQ({ items = DEFAULT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);
  const refs = useRef([]);

  const toggle = (i) => {
    const isOpening = openIndex !== i;
    const current = refs.current[openIndex];
    const next = refs.current[i];

    if (current) gsap.to(current, { height: 0, duration: 0.35, ease: "power2.inOut" });
    if (isOpening && next) {
      gsap.set(next, { height: "auto" });
      gsap.from(next, { height: 0, duration: 0.35, ease: "power2.inOut" });
    }
    setOpenIndex(isOpening ? i : -1);
  };

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => (
        <div key={item.q} className="group">
          <button
            data-cursor-text={openIndex === i ? "CLOSE" : "OPEN"}
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-teal"
          >
            <span className="font-display text-lg md:text-xl font-medium text-paper">
              {item.q}
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-base text-teal transition-all duration-300 ${
                openIndex === i ? "rotate-45 border-teal bg-teal text-ink" : "group-hover:border-teal"
              }`}
            >
              +
            </span>
          </button>
          <div
            ref={(el) => (refs.current[i] = el)}
            className="overflow-hidden transition-all"
            style={{ height: openIndex === i ? "auto" : 0 }}
          >
            <p className="pb-6 max-w-3xl text-sm leading-relaxed text-paper/60">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
