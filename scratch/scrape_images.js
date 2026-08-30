const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function scrapeBingImages(query) {
  const bingUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
  const bRes = await fetch(bingUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const bHtml = await bRes.text();
  const matches = [...bHtml.matchAll(/&quot;murl&quot;:&quot;(https:\/\/[^&]+)&quot;.*?&quot;t&quot;:&quot;([^&]+)&quot;/g)];
  return matches.map(m => ({
    url: m[1],
    title: m[2].replace(/\\u0027/g, "'").replace(/&#39;/g, "'").replace(/<b>/g, '').replace(/<\/b>/g, '')
  }));
}

async function run() {
  const queries = [
    'Google PageSpeed Insights 100 score mobile',
    'Next.js Server Side Rendering SSR architecture diagram',
    'Google Maps 3-Pack local SEO results mobile',
    'Google Business Profile manager dashboard',
    'Google AI Overviews search results screenshot',
    'Perplexity AI search engine answer citations',
    'WhatsApp Business appointment booking chat',
    'Clinic doctor appointment calendar scheduling'
  ];

  for (const q of queries) {
    const items = await scrapeBingImages(q);
    console.log(`\n=== Query: ${q} ===`);
    console.log(`Found ${items.length} items. Top 3:`);
    items.slice(0, 3).forEach(it => console.log(`- [${it.title}] => ${it.url}`));
  }
}

run().catch(console.error);
