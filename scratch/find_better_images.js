const fs = require('fs');
const sharp = require('sharp');

async function searchBing(query) {
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const matches = [...html.matchAll(/&quot;murl&quot;:&quot;(https:\/\/[^&]+)&quot;.*?&quot;t&quot;:&quot;([^&]+)&quot;/g)];
  return matches.map(m => ({
    url: m[1],
    title: m[2].replace(/\\u0027/g, "'").replace(/&#39;/g, "'").replace(/<b>/g, '').replace(/<\/b>/g, '')
  }));
}

async function testQueries() {
  const queries = {
    b1_cover: ['Google Lighthouse 100 100 100 100 score screenshot', 'PageSpeed Insights score 100 mobile'],
    b1_section: ['SSR vs CSR vs SSG diagram', 'Next.js server side rendering diagram'],
    b2_cover: ['Google local pack 3 pack mobile screenshot', 'Google maps local 3 pack search results'],
    b2_section: ['Google Business Profile insights dashboard screenshot', 'Google Business Profile manager dashboard'],
    b3_cover: ['Google AI overview search screenshot', 'Google AI Overviews generative search'],
    b3_section: ['Perplexity AI search engine answer citations screenshot', 'Generative Engine Optimization entity graph'],
    b4_cover: ['WhatsApp appointment booking bot chat screenshot', 'WhatsApp Business appointment booking interactive buttons'],
    b4_section: ['WhatsApp appointment scheduling workflow diagram', 'doctor appointment booking calendar workflow']
  };

  for (const [key, qList] of Object.entries(queries)) {
    console.log(`\n=== Category: ${key} ===`);
    for (const q of qList) {
      const items = await searchBing(q);
      console.log(`Query: ${q} (found ${items.length})`);
      items.slice(0, 3).forEach(it => console.log(`  - [${it.title.slice(0, 60)}] ${it.url}`));
    }
  }
}

testQueries().catch(console.error);
