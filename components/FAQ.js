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
    a: "You work directly with co-founders Lavi (Co-Founder & Technical Director) and Jass (Co-Founder & Creative Director). Lavi oversees all Next.js web code, technical architecture, and search optimization. Jass leads paid ad funnels (Meta & Google Ads), creative direction, and short-form video production.",
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

    if (current) {
      gsap.to(current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
    }
    if (isOpening && next) {
      gsap.set(next, { height: "auto", opacity: 1 });
      gsap.from(next, { height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut" });
    }
    setOpenIndex(isOpening ? i : -1);
  };

  const faqList = items && items.length > 0 ? items : DEFAULT_FAQS;

  return (
    <div className="divide-y divide-charcoal/15 dark:divide-white/15 border-y border-charcoal/15 dark:border-white/15">
      {faqList.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q || i} className="group py-2">
            <button
              type="button"
              data-cursor-text={isOpen ? "CLOSE" : "OPEN"}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-charcoal dark:hover:text-yellow focus:outline-none"
            >
              <span className="font-anton text-xl md:text-2xl tracking-wide text-charcoal dark:text-white group-hover:text-charcoal dark:group-hover:text-yellow transition-colors">
                {item.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/20 dark:border-white/20 font-mono text-lg font-bold transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-yellow bg-yellow text-charcoal shadow-md"
                    : "bg-charcoal/5 dark:bg-white/5 text-charcoal dark:text-white group-hover:border-yellow group-hover:bg-yellow group-hover:text-charcoal"
                }`}
              >
                +
              </span>
            </button>
            <div
              ref={(el) => (refs.current[i] = el)}
              className="overflow-hidden transition-all duration-300"
              style={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className="pb-6 max-w-3xl font-satoshi text-sm md:text-base leading-relaxed text-charcoal/75 dark:text-sage/85">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
