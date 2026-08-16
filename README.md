# Bits and Builds — website

Next.js 14 (App Router) site with server-side rendering, built for SEO from
the ground up.

## Stack
- **Next.js 14** — App Router, SSR + static generation for service/blog pages
- **Tailwind CSS** — theme tokens in `tailwind.config.js` (black / paper / teal)
- **GSAP + ScrollTrigger** — scroll reveals, text animations
- **Lenis** — smooth scroll
- Custom cursor, marquee and footer inspired by the reference sites you shared

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build (SSR + static generation)
npm run start   # run the production build locally
```

## Structure
- `app/page.js` — homepage (hero, services grid, process, automation
  spotlight, stats, FAQ)
- `app/services/page.js` — services index
- `app/services/[slug]/page.js` — one sub-page per service, statically
  generated from `lib/services.js`
- `app/about`, `app/contact`, `app/blog`, `app/blog/[slug]` — remaining pages
- `app/api/contact/route.js` — contact form endpoint (currently logs
  submissions server-side — wire up Resend/SendGrid/Nodemailer or a CRM here)
- `app/sitemap.js`, `app/robots.js` — auto-generated SEO files
- `lib/services.js`, `lib/blog.js` — all copy for services/blog lives here;
  edit these to change content site-wide
- `lib/seo.js` — site URL, metadata helper, LocalBusiness JSON-LD

## Before going live
1. Replace placeholder blog post bodies in `app/blog/[slug]/page.js` /
   `lib/blog.js` with real articles.
2. Set the real domain in `lib/seo.js` (`SITE_URL`).
3. Add an `og-image.jpg` to `/public` (referenced in the LocalBusiness schema).
4. Wire the contact form (`app/api/contact/route.js`) to an email/CRM
   provider.
5. Swap in real photography/illustration — the site currently ships with no
   images so it renders instantly; add optimised images via `next/image`.
6. Update `sameAs` in `lib/seo.js` with your social profile URLs once live.

## Design notes
- Palette: near-black `#0a0a0a` background, off-white `#f5f5f2` text, teal
  `#1fd1c1` accent — set in `tailwind.config.js`.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows) —
  loaded via `next/font/google` in `app/layout.js`.
- Signature element: the "blueprint grid" backdrop (`.blueprint-grid` in
  `globals.css`) ties back to the brand name — Bits (code) + Builds
  (construction/blueprints).
- Cursor, marquee and footer are custom-built components inspired by the
  produx.design reference; scroll reveals use GSAP ScrollTrigger inspired by
  noth.in; word-level text reveals (`components/AnimatedText.js`) are inspired
  by madewithgsap.com examples.
