async function searchBing(query) {
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const bHtml = await res.text();
  const matches = [...bHtml.matchAll(/&quot;murl&quot;:&quot;(https:\/\/[^&]+)&quot;.*?&quot;t&quot;:&quot;([^&]+)&quot;/g)];
  return matches.map(m => ({
    url: m[1],
    title: m[2]
  }));
}

async function run() {
  const queries = [
    'Knowledge Graph SEO entity diagram',
    'Schema markup JSON-LD entity graph SEO',
    'Generative Engine Optimization GEO framework diagram',
    'Perplexity AI citation sources search interface'
  ];
  for (const q of queries) {
    const items = await searchBing(q);
    console.log(`\n=== ${q} ===`);
    items.slice(0, 5).forEach(it => console.log(`- [${it.title.slice(0, 60)}] ${it.url}`));
  }
}
run();
