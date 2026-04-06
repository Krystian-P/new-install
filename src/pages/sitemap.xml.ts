const pages = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/instalacje/', priority: '0.9', changefreq: 'monthly' },
  { url: '/instalacje/co/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/wod-kan/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/gazowe/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/kotlownie/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/przylacza/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/przeciski/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/szamba/', priority: '0.8', changefreq: 'monthly' },
  { url: '/instalacje/wentylacja/', priority: '0.8', changefreq: 'monthly' },
  { url: '/realizacje/', priority: '0.7', changefreq: 'weekly' },
  { url: '/kontakt/', priority: '0.9', changefreq: 'monthly' },
];

const site = 'https://newinstall.pl';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
