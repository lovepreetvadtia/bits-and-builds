const fs = require('fs');
const sharp = require('sharp');

const images = [
  // Blog 1
  {
    dest: 'public/images/blog/nextjs-server-side-rendering-speed-audit.webp',
    urls: [
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhbv99ammwti7euofkdxn.png',
      'https://static.startuptalky.com/2023/08/pagespeed-insights-score-Startuptalky.jpg'
    ],
    fit: 'contain',
    bg: '#0D0E12'
  },
  {
    dest: 'public/images/blog/core-web-vitals-mobile-speed-metrics.webp',
    urls: [
      'https://www.alura.com.br/artigos/assets/csr-ssr-ssg/fluxo-de-abordagens.jpg',
      'https://miro.medium.com/v2/resize:fit:1358/1*aZ7cTi7BGY-pywmU6a_jwA.png'
    ],
    fit: 'contain',
    bg: '#FFFFFF'
  },
  // Blog 2
  {
    dest: 'public/images/blog/google-business-profile-local-3-pack-mobile.webp',
    urls: [
      'https://fusiononemarketing.com/wp-content/uploads/2022/02/Local-3-Pack-1.jpg',
      'https://www.soci.ai/wp-content/uploads/2022/11/Local-pack_Google-3-pack-Updated-1.png'
    ],
    fit: 'contain',
    bg: '#F8F9FA'
  },
  {
    dest: 'public/images/blog/local-seo-google-maps-location-ranking.webp',
    urls: [
      'https://www.syntacticsinc.com/wp-content/uploads/2014/03/01-Google-Business-Profile-Manager-1024x518.png',
      'https://blog.coupler.io/wp-content/uploads/2025/06/8-Google-Business-Profile-dashboard-1024x693.png'
    ],
    fit: 'contain',
    bg: '#FFFFFF'
  },
  // Blog 3
  {
    dest: 'public/images/blog/answer-engine-optimization-ai-search.webp',
    urls: [
      'https://cyberchimps.com/wp-content/uploads/2025/02/what-is-google-ai-overview.webp',
      'https://www.flyingorangewebdesign.com/wp-content/uploads/2026/01/google-ai-overview-search-screenshot-1024x486.png'
    ],
    fit: 'contain',
    bg: '#FFFFFF'
  },
  {
    dest: 'public/images/blog/generative-engine-optimization-knowledge-graph.webp',
    urls: [
      'https://opace.agency/images/wp-content/uploads/2026/03/perplexity-ai-search-answer-engine.png',
      'https://static.navifyai.com/upload/screenshots/perplexity_ai_screenshot_20250705_065832.png'
    ],
    fit: 'contain',
    bg: '#14171A'
  },
  // Blog 4
  {
    dest: 'public/images/blog/whatsapp-booking-automation-smartphone.webp',
    urls: [
      'https://static.wixstatic.com/media/4aefb8_ef3c006b9744496092c0bde8ba4b2da5~mv2.png/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/4aefb8_ef3c006b9744496092c0bde8ba4b2da5~mv2.png',
      'https://cdn-web.infobip.com/uploads/2024/12/whatsapp-appointment-booking-hero.png'
    ],
    fit: 'contain',
    bg: '#0B141A'
  },
  {
    dest: 'public/images/blog/clinic-restaurant-automated-appointment-scheduling.webp',
    urls: [
      'https://www.dr-firas.com/Automate-WhatsApp.png',
      'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035062955/original/MkcpQ6kS0vmVceanLIkud9dp6cNbDsBDtQ.png?1729493170'
    ],
    fit: 'contain',
    bg: '#0F172A'
  }
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  for (const item of images) {
    console.log(`\nProcessing: ${item.dest}`);
    let buffer = null;
    for (const u of item.urls) {
      try {
        buffer = await fetchBuffer(u);
        console.log(`  Successfully fetched: ${u.slice(0, 60)}...`);
        break;
      } catch (e) {
        console.log(`  Failed: ${u.slice(0, 50)} (${e.message})`);
      }
    }
    if (!buffer) {
      console.error(`  ERROR: Could not fetch any URL for ${item.dest}`);
      continue;
    }

    await sharp(buffer)
      .resize({
        width: 1200,
        height: 675,
        fit: item.fit,
        background: item.bg
      })
      .webp({ quality: 90 })
      .toFile(item.dest);

    const stats = fs.statSync(item.dest);
    console.log(`  Saved ${item.dest} (${Math.round(stats.size / 1024)} KB) - 1200x675 16:9 perfect fit`);
  }
}

run().then(() => console.log('\nAll 8 curated images processed successfully!')).catch(console.error);
