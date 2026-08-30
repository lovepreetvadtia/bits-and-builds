const fs = require('fs');
const sharp = require('sharp');

const imagesToDownload = [
  // Blog 1: Next.js SSR & Core Web Vitals
  {
    url: 'https://static.startuptalky.com/2023/08/pagespeed-insights-score-Startuptalky.jpg',
    dest: 'public/images/blog/nextjs-server-side-rendering-speed-audit.webp',
    fallback: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hbv99ammwti7euofkdxn.png'
  },
  {
    url: 'https://asperbrothers.com/wp-content/uploads/2021/07/ssr.png',
    dest: 'public/images/blog/core-web-vitals-mobile-speed-metrics.webp',
    fallback: 'https://hybridheroes.de/blog/content/images/2023/05/Untitled-Diagram.drawio-1-.png'
  },
  // Blog 2: Google Business Profile (GMB) & Google Maps 3-Pack
  {
    url: 'https://www.soci.ai/wp-content/uploads/2022/11/Local-pack_Google-3-pack-Updated-1.png',
    dest: 'public/images/blog/google-business-profile-local-3-pack-mobile.webp',
    fallback: 'https://samblogs.com/wp-content/uploads/2021/03/THE-GOOGLE-MAP-PACK-768x691.png'
  },
  {
    url: 'https://embedsocial.com/wp-content/uploads/2024/06/google-business-profile-manager.jpg',
    dest: 'public/images/blog/local-seo-google-maps-location-ranking.webp',
    fallback: 'https://www.syntacticsinc.com/wp-content/uploads/2014/03/01-Google-Business-Profile-Manager-1024x518.png'
  },
  // Blog 3: AEO & GEO (AI Search Engines)
  {
    url: 'https://helios-i.mashable.com/imagery/articles/06rcC31DOH3kB87WEpaa56z/images-1.fill.size_2000x1186.v1715888260.png',
    dest: 'public/images/blog/answer-engine-optimization-ai-search.webp',
    fallback: 'https://crklr.com/wp-content/uploads/2025/08/AI-Overview-example.webp'
  },
  {
    url: 'https://static.navifyai.com/upload/screenshots/perplexity_ai_screenshot_20250705_065832.png',
    dest: 'public/images/blog/generative-engine-optimization-knowledge-graph.webp',
    fallback: 'https://opace.agency/images/wp-content/uploads/2026/03/perplexity-ai-search-answer-engine.png'
  },
  // Blog 4: WhatsApp Booking Automation
  {
    url: 'https://cdn-web.infobip.com/uploads/2023/03/WhatsApp-book-reschedule-cancel-appointments.webp',
    dest: 'public/images/blog/whatsapp-booking-automation-smartphone.webp',
    fallback: 'https://cdn-web.infobip.com/uploads/2024/12/whatsapp-appointment-booking-hero.png'
  },
  {
    url: 'https://cdn-web.infobip.com/uploads/2024/12/whatsapp-appointment-booking-self-service.png',
    dest: 'public/images/blog/clinic-restaurant-automated-appointment-scheduling.webp',
    fallback: 'https://cdn-web.infobip.com/uploads/2024/12/whatsapp-appointment-booking-hero.png'
  }
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processAll() {
  for (const item of imagesToDownload) {
    console.log(`Processing: ${item.dest}`);
    let buffer;
    try {
      buffer = await fetchBuffer(item.url);
      console.log(`  Fetched primary: ${item.url}`);
    } catch (e) {
      console.log(`  Primary failed (${e.message}), trying fallback: ${item.fallback}`);
      buffer = await fetchBuffer(item.fallback);
    }
    
    await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(item.dest);
    
    const stats = fs.statSync(item.dest);
    console.log(`  Saved ${item.dest} (${Math.round(stats.size / 1024)} KB)`);
  }
}

processAll().then(() => console.log('\nAll 8 authentic images downloaded & converted successfully!')).catch(console.error);
