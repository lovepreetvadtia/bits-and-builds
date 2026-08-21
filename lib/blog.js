export const posts = [
  {
    slug: "why-local-businesses-need-server-rendered-websites",
    title: "Why Local Businesses Need Server-Rendered Websites in 2026",
    excerpt:
      "Client-side-only single page applications are often invisible or slow to index for local search bots. Here is why Next.js Server-Side Rendering (SSR) gives local brands an unfair ranking advantage.",
    date: "2026-06-15",
    readTime: "6 min read",
    tag: "Web Development",
    author: "Lavi",
    authorRole: "Co-Founder & Technical Director",
    content: [
      {
        heading: "The Hidden Cost of Slow Client-Side Websites",
        body: "Most local business owners hire agencies that spin up bloated WordPress themes with 40+ third-party plugins or heavy client-rendered JavaScript SPAs. When Google's mobile crawler or an AI bot like Perplexity visits your site over a 4G connection, heavy JavaScript delays initial content rendering by 4 to 8 seconds. For a customer in Sri Ganganagar or Jaipur looking for an urgent doctor appointment or restaurant menu, that delay results in an immediate bounce back to Google."
      },
      {
        heading: "How Server-Side Rendering (SSR) Changes the Game",
        body: "With Next.js App Router and Server-Side Rendering, HTML is pre-generated on ultra-fast cloud edge servers. When a user or search bot requests your page, 100% of the structured text, local schema markup, and image tags arrive in the very first network response packet. This delivers sub-second Largest Contentful Paint (LCP) and instant First Input Delay (INP)."
      },
      {
        heading: "Key Takeaways for Business Owners",
        body: "1. Demand 90+ Lighthouse Core Web Vitals from your web agency.\n2. Ensure all service pages and local geo-landing pages are server-rendered with schema markup.\n3. Keep your mobile payload under 150KB for rapid 4G/5G mobile responsiveness."
      }
    ]
  },
  {
    slug: "gmb-setup-checklist-for-local-seo",
    title: "The Ultimate Google Business Profile (GMB) Checklist for 2026",
    excerpt:
      "A correctly optimized Google Business Profile is the #1 lever for local map-pack dominance. Here is the exact step-by-step checklist we implement for clients across India.",
    date: "2026-05-28",
    readTime: "7 min read",
    tag: "Local SEO",
    author: "Lavi",
    authorRole: "Co-Founder & Technical Director",
    content: [
      {
        heading: "Why Google Maps 3-Pack Drives 70% of Local Inquiries",
        body: "When local customers search for 'best hospital near me', 'table booking restaurant', or 'digital marketing studio', Google highlights the top 3 Google Business Profiles before showing any organic website links. Ranking in this top 3 is often the difference between 10 calls a week and 100 calls a week."
      },
      {
        heading: "The 6-Step GMB Optimization Protocol",
        body: "1. Primary Category Precision: Never guess your primary category — inspect the top 3 ranking competitors in your city using local SEO tools.\n2. Exact Name & NAP Consistency: Match your legal business name, street address, and phone number identically across your website footer, GMB, and social channels.\n3. High-Resolution Geo-Tagged Photos: Upload photos of your facility, team, and interior weekly.\n4. Complete Service Menus with Pricing: Fill out every individual service item with clear descriptions.\n5. Automated Review Generation Funnel: Request reviews from satisfied customers via SMS/WhatsApp within 2 hours of service delivery.\n6. Weekly GMB Updates & Offers: Post updates with targeted keywords to signal active management to Google's ranking algorithm."
      }
    ]
  },
  {
    slug: "answer-engine-optimisation-explained",
    title: "AEO & GEO Explained: How to Rank in ChatGPT, Perplexity & Google AI Overviews",
    excerpt:
      "Search is rapidly shifting from blue links to conversational AI answers. Learn how Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) position your brand inside AI recommendations.",
    date: "2026-05-10",
    readTime: "8 min read",
    tag: "SEO & AI",
    author: "Jass",
    authorRole: "Co-Founder & Creative Director",
    content: [
      {
        heading: "What are AEO and GEO?",
        body: "Answer Engine Optimization (AEO) focuses on structuring content so search engines and voice assistants (Google Assistant, Siri, Alexa) extract direct answer snippets. Generative Engine Optimization (GEO) ensures your brand, founder names, and services are cited as authoritative sources by Large Language Models like ChatGPT, Google Gemini, and Perplexity when users prompt them for recommendations."
      },
      {
        heading: "How We Optimize for Generative Search Engines",
        body: "1. Entity Association: Establishing strong entity ties using JSON-LD schema (founder, parent organization, geo-coordinates, professional service credentials).\n2. Direct Q&A Formatting: Answering customer queries directly in the first 40 words before elaborating with technical data.\n3. Digital PR & Citation Authority: Publishing thought leadership across high-trust publications so LLMs ingest your brand in their knowledge graph."
      }
    ]
  },
  {
    slug: "booking-automation-for-clinics-and-restaurants",
    title: "How WhatsApp Booking Automation Cuts No-Shows by 80% for Hospitals & Restaurants",
    excerpt:
      "Stop wasting front-desk payroll on phone tag. Here is how local brands in Tier-2 and Tier-3 cities are scaling appointment and reservation booking automatically.",
    date: "2026-04-22",
    readTime: "5 min read",
    tag: "Local Automation",
    author: "Jass",
    authorRole: "Co-Founder & Creative Director",
    content: [
      {
        heading: "The Traditional Front-Desk Bottleneck",
        body: "During peak hospital consulting hours or dinner rushes at restaurants, receptionists are balancing walk-ins, phone calls, and manual registers. Calls go unanswered, appointment cancellations aren't logged in time, and 20% to 30% of scheduled patients or diners simply fail to show up."
      },
      {
        heading: "The Automated WhatsApp Booking Ecosystem",
        body: "By connecting the official WhatsApp Business Cloud API with Google Calendar and automated SMS webhooks, customers can book appointments in under 45 seconds directly through chat. The system automatically sends calendar invites, directions via Google Maps, and a confirmation prompt 2 hours prior with 1-tap 'Confirm' or 'Reschedule' buttons. This simple flow cuts no-shows by upwards of 80%."
      }
    ]
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
