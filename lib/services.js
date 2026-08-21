export const services = [
  {
    slug: "web-development",
    tag: "01",
    badge: "Architecture & Code",
    title: "Web Development",
    short: "Server-rendered Next.js websites built for speed, SEO & conversion.",
    heroSubtitle: "High-performance digital flagships that rank #1 on Google, load in under 800ms, and turn visitors into booked clients.",
    description:
      "We build custom, modern web applications engineered on Next.js App Router with Server-Side Rendering (SSR). No sluggish page builders or bloated templates — just clean code, pixel-perfect responsive UI, lightning-fast Core Web Vitals, and conversion-optimized architectures tailored for Indian businesses and global brands.",
    problemSolved:
      "Slow WordPress sites with 40+ plugins, low Google PageSpeed scores (under 50), poor mobile rendering, zero SEO indexability, and clunky user journeys that cause bounce rates exceeding 70%.",
    deliverables: [
      "Custom Next.js App Router & React development with 100% Server-Side Rendering (SSR)",
      "Lighthouse 95+ Core Web Vitals score across Performance, Accessibility & SEO",
      "Mobile-first responsive design tailored for smartphones, tablets & 4K displays",
      "Interactive lead capture, multi-step quotation forms & instant WhatsApp integrations",
      "Custom E-commerce & Headless CMS architectures (Shopify, Sanity, Stripe/Razorpay)",
      "Automated schema markup, sitemap generation & OpenGraph previews",
    ],
    processSteps: [
      { step: "01", title: "Architecture & Wireframes", desc: "User journey mapping, information architecture & high-conversion UI wireframes." },
      { step: "02", title: "Custom Code & SSR Setup", desc: "Clean React/Next.js component development with Tailwind CSS & dynamic metadata." },
      { step: "03", title: "Speed & SEO Optimization", desc: "Asset minification, CWV performance tuning & Google Search Console indexing." },
      { step: "04", title: "Deploy & Scale", desc: "Vercel/AWS global CDN deployment, DNS routing & ongoing technical maintenance." },
    ],
    tools: ["Next.js 14/15 App Router", "React 18", "TypeScript", "Tailwind CSS", "GSAP & Lenis", "Vercel Enterprise Edge"],
    toolStack: [
      {
        name: "Next.js 14/15 App Router",
        category: "SSR Architecture",
        desc: "Server-Side Rendering, edge caching, and sub-second Time to First Byte (TTFB).",
        icon: "⚡",
        svgIcon: "/icons/tools/nextjs.svg",
      },
      {
        name: "React 18",
        category: "UI Component Library",
        desc: "Declarative, component-driven UI architecture with responsive client-side state.",
        icon: "⚛️",
        svgIcon: "/icons/tools/react.svg",
      },
      {
        name: "Tailwind CSS",
        category: "Styling System",
        desc: "Bespoke utility design tokens with strict dark/light mode optimization.",
        icon: "🎨",
        svgIcon: "/icons/tools/tailwind.svg",
      },
      {
        name: "TypeScript",
        category: "Type Safety",
        desc: "Enterprise-grade codebase stability, static typing, and runtime error prevention.",
        icon: "🛡️",
        svgIcon: "/icons/tools/typescript.svg",
      },
      {
        name: "GSAP & Lenis",
        category: "Motion & Smooth Scroll",
        desc: "GPU-accelerated scroll reveals, kinetic typography, and smooth inertia physics.",
        icon: "✨",
        svgIcon: "/icons/tools/gsap.svg",
      },
      {
        name: "Vercel Enterprise Edge",
        category: "Cloud CDN & CI/CD",
        desc: "Sub-50ms global asset delivery, automated SSL certificates, and instant deployments.",
        icon: "🌐",
        svgIcon: "/icons/tools/vercel.svg",
      },
    ],
    caseHighlight: { metric: "99/100", label: "Up to 99/100 Mobile PageSpeed Score" },
    faqs: [
      {
        q: "Why do you use Next.js instead of standard WordPress?",
        a: "Next.js provides Server-Side Rendering (SSR) which pre-renders HTML on the server. This means instant load times, zero plugin vulnerabilities, effortless 95+ Google PageSpeed scores, and superior search engine crawler indexing."
      },
      {
        q: "Will my website work smoothly on mobile and slow 4G connections?",
        a: "Yes. Every website is engineered mobile-first with image optimization, minimal JavaScript payloads, and responsive touch gestures, ensuring lightning-fast load times even on Tier-2/Tier-3 city cellular networks."
      },
      {
        q: "How long does a custom web development project take?",
        a: "A typical high-converting business flagship takes 2 to 3 weeks from kickoff to launch, including design review, development, testing, and SEO setup."
      }
    ]
  },
  {
    slug: "social-media-marketing",
    tag: "02",
    badge: "Organic Growth & Reach",
    title: "Social Media Marketing",
    short: "Strategic organic content, Reels & community growth that converts followers into paying customers.",
    heroSubtitle: "Transform your social channels from ghost towns into revenue-generating discovery engines.",
    description:
      "We take full ownership of your social media presence — developing high-retention Instagram Reels, Facebook campaigns, LinkedIn thought leadership, and interactive stories. Tailored for local businesses seeking footfall and national brands building brand affinity.",
    problemSolved:
      "Inconsistent posting, low engagement, zero follower-to-customer conversion, amateur graphics, and wasting hours on content that yields zero ROI.",
    deliverables: [
      "Custom monthly content calendars with hook-focused Instagram Reels & carousels",
      "End-to-end scripting, shooting direction, professional editing & audio mastering",
      "Community management: comment replies, DM lead routing & engagement pods",
      "Collaborative influencer campaigns and local brand cross-promotions",
      "Detailed monthly analytics tracking reach, profile visits, website clicks & leads",
    ],
    processSteps: [
      { step: "01", title: "Audience & Competitor Audit", desc: "Analyzing your local and national competitors to discover viral content gaps." },
      { step: "02", title: "Content Engine & Scripts", desc: "Batch scripting 15-30 days of high-hook Reels, carousel graphics, and stories." },
      { step: "03", title: "Post & Optimize", desc: "Publishing at peak engagement hours with localized hashtags and geo-tags." },
      { step: "04", title: "Lead Conversion", desc: "Guiding engaged viewers into DMs and WhatsApp booking channels." },
    ],
    tools: ["Meta Business Suite", "Canva Pro", "Metricool & Buffer", "Google Analytics 4", "CapCut Pro"],
    toolStack: [
      {
        name: "Meta Business Suite",
        category: "Omni-Channel Management",
        desc: "Cross-platform Instagram & Facebook scheduling, automated message routing, and unified inbox.",
        icon: "📱",
        svgIcon: "/icons/tools/meta.svg",
      },
      {
        name: "Canva Pro & Adobe Creative Suite",
        category: "Creative Templates",
        desc: "Daily carousel slides, branded story overlays, and viral informative graphics.",
        icon: "🎨",
        svgIcon: "/icons/tools/canva.svg",
      },
      {
        name: "Metricool & Buffer",
        category: "Publishing & Heatmaps",
        desc: "Audience activity heatmaps, automated optimal-time publishing, and reach monitoring.",
        icon: "📊",
        svgIcon: "/icons/tools/metricool.svg",
      },
      {
        name: "Google Analytics 4",
        category: "Attribution Tracking",
        desc: "Tracking website referral traffic, booking conversions, and campaign attribution from social bios.",
        icon: "📈",
        svgIcon: "/icons/tools/google-analytics.svg",
      },
    ],
    caseHighlight: { metric: "+420%", label: "Up to 420% organic reach growth in 90 days" },
    faqs: [
      {
        q: "Do you shoot the content or do we need to provide footage?",
        a: "We provide detailed storyboard scripts and recording guidelines so you or your staff can record on a smartphone with zero hassle. For clients in and around Sri Ganganagar / Rajasthan, we can also organize on-site shoot sessions."
      },
      {
        q: "How many posts and Reels do you create per month?",
        a: "Our standard packages range from 12 to 24 high-retention Reels and carousel posts per month, plus daily engaging stories and community moderation."
      }
    ]
  },
  {
    slug: "ppc",
    tag: "03",
    badge: "Paid Ads & ROI",
    title: "PPC — Facebook & Google Ads",
    short: "High-ROAS paid acquisition campaigns on Meta & Google Search engineered for revenue.",
    heroSubtitle: "Stop burning ad budget on boosted posts. Run laser-targeted campaigns with precision conversion tracking.",
    description:
      "We design, build, and optimize paid advertising campaigns across Google Search, Performance Max, Facebook Ads, and Instagram Sponsored Stories. Every campaign is backed by Meta Conversions API (CAPI), Google Tag Manager, and custom landing pages to ensure maximum Return on Ad Spend (ROAS).",
    problemSolved:
      "High cost per click, fake bot leads, negative return on ad spend, poorly structured ad accounts, and lack of conversion tracking.",
    deliverables: [
      "Google Search, Call-Only, Display & Performance Max ad setup",
      "Meta Ads (Facebook & Instagram Feed, Stories & Reels) high-intent funnels",
      "Server-side tracking with Meta Conversions API (CAPI) & Google Analytics 4",
      "High-converting A/B tested landing page copywriting & design",
      "Custom audience building, lookalike modeling & dynamic retargeting campaigns",
      "Transparent live performance dashboards & weekly ROI reports",
    ],
    processSteps: [
      { step: "01", title: "Audience & Competitor Research", desc: "Uncovering buyer search intent, negative keywords, and competitor ad creatives." },
      { step: "02", title: "CAPI & Tag Manager Setup", desc: "Installing server-side tracking, custom conversion events & CRM webhooks." },
      { step: "03", title: "Creative & Copy Build", desc: "Designing high-CTR video and image ad creatives with persuasive brutalist copy." },
      { step: "04", title: "Daily Scaling & Optimization", desc: "Bid adjustments, negative keyword weeding & budget scaling on winning ad sets." },
    ],
    tools: ["Meta Ads Manager", "Google Ads & Performance Max", "Google Tag Manager", "Meta CAPI", "Looker Studio"],
    toolStack: [
      {
        name: "Meta Ads Manager",
        category: "Paid Social Engine",
        desc: "Advantage+ campaign budgeting, lookalike audiences, and high-converting retargeting funnels.",
        icon: "🎯",
        svgIcon: "/icons/tools/meta.svg",
      },
      {
        name: "Google Ads & Performance Max",
        category: "Search Intent Capture",
        desc: "High-intent buyer keyword bidding, call-only campaigns, and local Google Maps ad extensions.",
        icon: "🔍",
        svgIcon: "/icons/tools/google-ads.svg",
      },
      {
        name: "Google Tag Manager (GTM)",
        category: "Event Architecture",
        desc: "Client & server-side trigger mapping, phone click tracking, and lead form event capture.",
        icon: "🏷️",
        svgIcon: "/icons/tools/google-tag-manager.svg",
      },
      {
        name: "Meta Conversions API (CAPI)",
        category: "Server-Side Tracking",
        desc: "Direct server-to-server conversion data routing that bypasses iOS ad-blockers and browser drop-offs.",
        icon: "⚡",
        svgIcon: "/icons/tools/meta.svg",
      },
      {
        name: "Looker Studio",
        category: "Live ROI Dashboards",
        desc: "Transparent live client dashboards displaying real-time CAC, CPC, conversion rates, and ROAS.",
        icon: "📊",
        svgIcon: "/icons/tools/looker-studio.svg",
      },
    ],
    caseHighlight: { metric: "5.8x", label: "Up to 5.8x Return on Ad Spend (ROAS) in client campaigns" },
    faqs: [
      {
        q: "What ad budget do I need to get started?",
        a: "We recommend starting with a minimum ad spend of ₹15,000 to ₹30,000/month for local businesses (clinics/restaurants) and ₹50,000+/month for national e-commerce or B2B brands to gather statistical data and optimize algorithms quickly."
      },
      {
        q: "How soon do we see leads from Google or Meta ads?",
        a: "Google Search ads typically generate high-intent inbound calls and leads within the first 48 to 72 hours of launch once campaigns are approved."
      }
    ]
  },
  {
    slug: "seo",
    tag: "04",
    badge: "Search & Visibility",
    title: "SEO — GMB, AEO, GEO & Local",
    short: "Dominate Google Maps 3-Pack rankings and get recommended by AI engines like ChatGPT & Perplexity.",
    heroSubtitle: "Capture high-intent local customers right when they search 'best clinic near me' or 'top service in Sri Ganganagar'.",
    description:
      "Local search is where buying decisions happen. We engineer comprehensive Search Engine Optimization: Google Business Profile (GMB) 3-Pack map rankings, Generative Engine Optimization (GEO) for AI search results, structured JSON-LD schema markup, and high-authority local citations.",
    problemSolved:
      "Invisible on Google Maps, buried on page 4 of search results, competitors taking all the local call inquiries, and zero visibility in AI-powered search engines.",
    deliverables: [
      "Complete Google Business Profile (GMB) audit, optimization & category structuring",
      "Local Map 3-Pack rank tracking & review acceleration systems",
      "Answer Engine Optimization (AEO) for Google SGE, Perplexity & ChatGPT recommendations",
      "Custom JSON-LD schema markup (LocalBusiness, MedicalClinic, Restaurant, FAQPage)",
      "High-authority regional citation building across 50+ verified business directories",
      "Localized blog & service landing page content targeting high-intent 'near me' keywords",
    ],
    processSteps: [
      { step: "01", title: "Local Search & Citation Audit", desc: "Benchmarking current Google Map rankings, NAP consistency & competitor authority." },
      { step: "02", title: "GMB Optimization & Geo-Tagging", desc: "Refining business categories, descriptions, geo-tagged photos & service menus." },
      { step: "03", title: "Schema & On-Page SEO", desc: "Injecting structured JSON-LD data and localized keyword clusters into your site." },
      { step: "04", title: "Reviews & Authority Building", desc: "Deploying automated review generation workflows and local directory citations." },
    ],
    tools: ["Google Business Profile", "Semrush & Ahrefs", "Schema.org (JSON-LD)", "Google Search Console", "BrightLocal"],
    toolStack: [
      {
        name: "Google Business Profile (GMB)",
        category: "Local Maps 3-Pack",
        desc: "Category optimization, weekly geo-tagged image uploads, and Google Maps local 3-pack dominance.",
        icon: "📍",
        svgIcon: "/icons/tools/google-my-business.svg",
      },
      {
        name: "Semrush & Ahrefs",
        category: "Keyword Intelligence",
        desc: "Competitor gap auditing, local search intent tracking, and high-intent backlink discovery.",
        icon: "🔍",
        svgIcon: "/icons/tools/semrush.svg",
      },
      {
        name: "Schema.org & JSON-LD",
        category: "AI & AEO Structured Data",
        desc: "Semantic microdata markup that qualifies your business for Google AI Overviews and rich snippets.",
        icon: "🤖",
        svgIcon: "/icons/tools/schema.svg",
      },
      {
        name: "Google Search Console",
        category: "Search Engine Health",
        desc: "Core Web Vitals monitoring, indexation verification, and organic search query analytics.",
        icon: "📈",
        svgIcon: "/icons/tools/google-search-console.svg",
      },
      {
        name: "BrightLocal",
        category: "Local Citation Sync",
        desc: "Consistent NAP (Name, Address, Phone) distribution across 50+ verified directories.",
        icon: "🌐",
        svgIcon: "/icons/tools/brightlocal.svg",
      },
    ],
    caseHighlight: { metric: "#1 Rank", label: "Achieved on Google Maps for targeted local service queries within 60 days" },
    faqs: [
      {
        q: "What is AEO and GEO, and why does my business need it?",
        a: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structure your website content with deep semantic schema so AI engines like Google Gemini, ChatGPT, and Perplexity understand and recommend your brand when users ask conversational questions."
      },
      {
        q: "How long does local SEO take to show results?",
        a: "Google Business Profile optimizations usually show noticeable improvements in map pack impressions and phone calls within 30 to 60 days."
      }
    ]
  },
  {
    slug: "graphic-design",
    tag: "05",
    badge: "Identity & Visuals",
    title: "Graphic Design & Branding",
    short: "Distinctive brand identities, logos, print collateral & high-converting digital creative suites.",
    heroSubtitle: "Stand out in crowded markets with a bold, memorable visual identity that commands premium pricing.",
    description:
      "Great design builds instant trust. We create full visual identity systems: distinctive logos, typography pairings, color palettes, physical print collateral (business cards, clinic prescription pads, restaurant menus, packaging), and high-conversion social media post templates.",
    problemSolved:
      "Cheap-looking amateur logos made on template apps, inconsistent brand colors across platforms, unmemorable brand presence, and zero design guidelines.",
    deliverables: [
      "Custom vector logo design with full brand style guide & usage rules",
      "Typography pairing, custom color palette systems & brand guidelines document",
      "High-converting social media banner & post design templates (Figma / Illustrator)",
      "Print-ready marketing collateral: business cards, menus, clinic prescription pads, brochures & banners",
      "Packaging and merchandise design for retail and hospitality brands",
      "Vector icons, custom infographics, and digital ad creative suites",
    ],
    processSteps: [
      { step: "01", title: "Brand Discovery & Moodboard", desc: "Uncovering your brand personality, target demographics, and aesthetic direction." },
      { step: "02", title: "Concept Generation", desc: "Crafting 3 unique logo and visual identity directions for review." },
      { step: "03", title: "Refinement & Systems", desc: "Polishing typography pairings, color systems, and responsive layout assets." },
      { step: "04", title: "Brand Kit Delivery", desc: "Delivering complete vector master files (SVG, AI, PDF, PNG) and editable templates." },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign", "Midjourney v6"],
    toolStack: [
      {
        name: "Adobe Photoshop",
        category: "Raster Manipulation & Retouching",
        desc: "High-end commercial photo compositing, product retouching, and digital advertising master creative suites.",
        icon: "🖼️",
        svgIcon: "/icons/tools/photoshop.svg",
      },
      {
        name: "Adobe Illustrator",
        category: "Vector Brand Systems",
        desc: "Infinite-resolution vector logos, custom brand typography, print collateral, and master SVG assets.",
        icon: "✒️",
        svgIcon: "/icons/tools/illustrator.svg",
      },
      {
        name: "Figma",
        category: "Design Systems & UI/UX",
        desc: "Collaborative design token libraries, responsive layouts, and interactive wireframes.",
        icon: "🎨",
        svgIcon: "/icons/tools/figma.svg",
      },
      {
        name: "Adobe InDesign",
        category: "Editorial Publication & Print",
        desc: "Multi-page brand guideline books, clinic prescription layouts, brochures, and luxury restaurant menus.",
        icon: "📄",
        svgIcon: "/icons/tools/indesign.svg",
      },
      {
        name: "Midjourney v6",
        category: "AI Concept Art Direction",
        desc: "Generative concept moodboarding, bespoke background textures, and high-concept visual brainstorming.",
        icon: "✨",
        svgIcon: "/icons/tools/midjourney.svg",
      },
    ],
    caseHighlight: { metric: "100%", label: "Vector-grade custom brand assets delivered with full IP ownership" },
    faqs: [
      {
        q: "Do I get full ownership of the logo and design files?",
        a: "Yes. Once finalized, you receive 100% intellectual property rights and all original vector source files (AI, EPS, SVG, PNG, PDF)."
      },
      {
        q: "Can you redesign our existing old logo without losing brand recognition?",
        a: "Absolutely. We specialize in modernizing legacy brand identities — retaining core heritage while making the visual system crisp, modern, and digital-first."
      }
    ]
  },
  {
    slug: "video-editing",
    tag: "06",
    badge: "Motion & Short-Form",
    title: "Reels & Short-Form Video",
    short: "High-retention Instagram Reels, YouTube Shorts & 4K commercial ad edits.",
    heroSubtitle: "Captivate viewers in the first 2 seconds and keep them watching until the call to action.",
    description:
      "Video is the #1 driver of organic reach and ad conversion. We edit fast-paced, retention-focused Instagram Reels, YouTube Shorts, commercial brand films, and paid video ad creatives — complete with kinetic captions, sound design, motion graphics, and color grading.",
    problemSolved:
      "Boring videos with high drop-off rates, poor audio quality, lack of captions, and videos that get zero likes or inquiries.",
    deliverables: [
      "High-retention short-form video editing (Instagram Reels, YouTube Shorts, Meta Ad creatives)",
      "Dynamic kinetic captions, animated emojis, and visual sound design effects",
      "Color grading, audio enhancement, background noise removal, and master audio leveling",
      "Motion graphics lower-thirds, brand intros/outros, and product callout animations",
      "Multiple hook variations (A/B testing hooks for paid advertising)",
    ],
    processSteps: [
      { step: "01", title: "Raw Footage Ingestion", desc: "Organizing clips, selecting prime takes, and analyzing the speech cadence." },
      { step: "02", title: "Rough Cut & Hook Pacing", desc: "Editing out pauses, dead air, and building an attention-grabbing 3-second hook." },
      { step: "03", title: "Motion, Text & Sound", desc: "Adding synced sound effects, kinetic subtitles, zooms, and B-roll overlays." },
      { step: "04", title: "Final Master & Export", desc: "Color grading and exporting in 4K / 1080p 60fps optimized for mobile screens." },
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve Studio", "Adobe Audition", "CapCut Pro"],
    toolStack: [
      {
        name: "Adobe Premiere Pro",
        category: "Master NLE Suite",
        desc: "Multi-camera timeline pacing, speech cadence editing, dynamic B-roll cutting, and 4K mobile exports.",
        icon: "🎬",
        svgIcon: "/icons/tools/premiere-pro.svg",
      },
      {
        name: "Adobe After Effects",
        category: "Motion Graphics & VFX",
        desc: "Kinetic animated typography, custom lower-thirds, tracking callouts, particle effects, and 2D/3D brand intros.",
        icon: "⚡",
        svgIcon: "/icons/tools/after-effects.svg",
      },
      {
        name: "DaVinci Resolve Studio",
        category: "Cinematic Color Grading",
        desc: "Broadcast-standard color grading, skin tone correction, HDR curves, and noise reduction.",
        icon: "🎨",
        svgIcon: "/icons/tools/davinci-resolve.svg",
      },
      {
        name: "Adobe Audition",
        category: "Studio Audio Mastering",
        desc: "Dialogue isolation, background noise reduction, EQ balancing, and broadcast loudness normalization (-14 LUFS).",
        icon: "🎙️",
        svgIcon: "/icons/tools/adobe-audition.svg",
      },
      {
        name: "CapCut Pro",
        category: "Short-Form Kinetic Acceleration",
        desc: "Rapid turnaround kinetic auto-captions, trending audio sound design, and viral short-form pacing.",
        icon: "📱",
        svgIcon: "/icons/tools/capcut.svg",
      },
    ],
    caseHighlight: { metric: "84%", label: "Up to 84% retention rate on optimized Reels" },
    faqs: [
      {
        q: "What is your typical turnaround time for video edits?",
        a: "Standard turnaround for short-form Reels and video ads is 24 to 48 hours per batch, with revisions handled swiftly."
      },
      {
        q: "What format do I need to send my raw videos in?",
        a: "You can simply record on your iPhone or Android phone and upload clips to a shared Google Drive or Dropbox link."
      }
    ]
  },
  {
    slug: "automation",
    tag: "07",
    badge: "Local Brand Systems",
    title: "Automation for Local Brands",
    short: "Automated hospital appointment scheduling, restaurant table reservations & WhatsApp CRM bots.",
    heroSubtitle: "Turn your local business operations into an automated machine that books clients 24/7 without extra staff.",
    description:
      "We design custom business automations for local healthcare providers, diagnostic centers, hospitals, and restaurants. From automatic appointment booking synced with doctor calendars, to 1-click restaurant table reservations and automated WhatsApp confirmation/reminder notifications that eliminate no-shows.",
    problemSolved:
      "Missed calls during peak hours, double-booked appointments, 30%+ no-show rates, front desk overwhelmed with repetitive scheduling, and zero automated follow-up with past customers.",
    deliverables: [
      "WhatsApp Business API appointment booking bots for hospitals, doctors & clinics",
      "Instant table reservation & digital menu ordering systems for restaurants & cafes",
      "Automated WhatsApp & SMS appointment reminders with 1-click reschedule / confirm buttons",
      "Missed call auto-reply: automatically texts back callers with an instant booking link",
      "Google Calendar, Apple Calendar, and custom CRM sync for front-desk receptionists",
      "Automated post-visit review generation (boosts Google 5-star ratings automatically)",
    ],
    processSteps: [
      { step: "01", title: "Workflow Mapping", desc: "Auditing your current receptionist booking flow, doctor schedules, or table capacities." },
      { step: "02", title: "WhatsApp API & Bot Build", desc: "Configuring automated multi-step dialog flows for booking, rescheduling, and queries." },
      { step: "03", title: "Calendar & CRM Integration", desc: "Connecting WhatsApp directly to Google Calendar, front desk dashboard, and database." },
      { step: "04", title: "Testing & Staff Training", desc: "Simulating 50+ customer booking flows and training your front-desk team in 30 minutes." },
    ],
    tools: ["WhatsApp Cloud API", "Make.com", "n8n", "Google Calendar API", "Twilio API"],
    toolStack: [
      {
        name: "WhatsApp Cloud API",
        category: "Meta Conversational CRM",
        desc: "Official Meta WhatsApp Cloud API for automated 24/7 client booking, interactive menu buttons, and automated alerts.",
        icon: "💬",
        svgIcon: "/icons/tools/whatsapp.svg",
      },
      {
        name: "Make.com (Integromat)",
        category: "Visual Automation Engine",
        desc: "Complex multi-step webhook routing, data transformations, and automated CRM record generation.",
        icon: "⚙️",
        svgIcon: "/icons/tools/make.svg",
      },
      {
        name: "n8n",
        category: "Self-Hosted Workflow Engine",
        desc: "Privacy-first enterprise workflow automation connecting internal clinic databases and receptionist consoles.",
        icon: "🔄",
        svgIcon: "/icons/tools/n8n.svg",
      },
      {
        name: "Google Calendar & Twilio API",
        category: "Real-Time Booking & SMS",
        desc: "Direct two-way appointment synchronization and instant transactional SMS fallback reminders.",
        icon: "📅",
        svgIcon: "/icons/tools/google-calendar.svg",
      },
    ],
    caseHighlight: { metric: "-80%", label: "Up to 80% reduction in appointment no-shows with automated WhatsApp workflows" },
    faqs: [
      {
        q: "How does the hospital doctor appointment automation work?",
        a: "When a patient messages your official WhatsApp number or clicks an ad, an interactive bot asks for their name, preferred doctor, specialty, and date/time slot. It verifies available calendar slots in real-time, books the appointment, sends a confirmation card, and notifies the receptionist immediately."
      },
      {
        q: "Can this integrate with our existing clinic or restaurant management software?",
        a: "Yes. Using webhooks and REST APIs, we can connect WhatsApp booking workflows into Google Calendar, Excel/Google Sheets, custom CRMs, or POS systems."
      }
    ]
  },
];
