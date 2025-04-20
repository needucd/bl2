const fs = require('fs');
const path = require('path');

// 1. Path to your PackageDetail.tsx
const packageFilePath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetail.tsx');
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://bloodlyf.com'; // Use your live domain

// 2. Static site routes
const staticRoutes = [
  '/',
  '/packages',
  '/blog',
  '/contact',
  '/about',
];

// 3. Extract all `id` values from PackageDetail.tsx
const packageFileContent = fs.readFileSync(packageFilePath, 'utf-8');
const idMatches = packageFileContent.match(/id:\s*["']([\w-&]+)["']/g) || [];

const packageSlugs = idMatches.map(line => {
  const match = line.match(/["']([\w-&]+)["']/);
  return match ? match[1] : null;
}).filter(Boolean);

// 4. Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...packageSlugs.map(slug => `/package/${slug}`)
];

// 5. Build the sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

// 6. Write the sitemap to /public
fs.writeFileSync(outputPath, sitemapXml);
console.log(`✅ Sitemap generated successfully with ${allRoutes.length} URLs at: ${outputPath}`);
