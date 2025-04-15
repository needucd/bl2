
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Layers, FileDown, CheckCircle } from 'lucide-react';
import BlurGlass from '@/components/ui/BlurGlass';

interface Page {
  id: string;
  lastUpdated: string;
}

interface Blog {
  id: number;
  date: string;
}

interface SitemapGeneratorProps {
  pages: Page[];
  blogs: Blog[];
}

export const SitemapGenerator = ({ pages, blogs }: SitemapGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const generateSitemap = () => {
    setIsGenerating(true);
    const baseUrl = "https://bloodlyf.com";
    const timestamp = new Date().toISOString().split('T')[0];
    
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${timestamp}</lastmod>
    <priority>1.0</priority>
  </url>`;
    
    // Add pages
    pages.forEach(page => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}/${page.id}</loc>
    <lastmod>${page.lastUpdated || timestamp}</lastmod>
    <priority>0.8</priority>
  </url>`;
    });
    
    // Add blogs
    blogs.forEach(blog => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}/blog/${blog.id}</loc>
    <lastmod>${blog.date || timestamp}</lastmod>
    <priority>0.7</priority>
  </url>`;
    });
    
    // Add additional thyroid test pages
    // Complete list from the user's request
    const additionalThyroidPages = [
      "thyroid/affordable-thyroid-test-trivandrum",
      "thyroid/thyroid-test-laboratory-trivandrum",
      "thyroid/t3-t4-tsh-test-trivandrum",
      "thyroid/complete-thyroid-panel-test",
      "thyroid/thyroid-antibody-test",
      "thyroid/thyroid-screening-test",
      "thyroid/thyroid-function-test-at-home",
      "thyroid/comprehensive-thyroid-profile",
      "thyroid/hypothyroidism-test-trivandrum",
      "thyroid/hyperthyroidism-screening",
      "thyroid/thyroid-disorder-test",
      "thyroid/thyroid-hormone-test",
      "thyroid/thyroid-health-check",
      "thyroid/thyroid-disease-diagnosis",
      "thyroid/thyroid-test-for-women",
      "thyroid/thyroid-test-for-men",
      "thyroid/thyroid-test-during-pregnancy",
      "thyroid/senior-citizen-thyroid-test",
      "thyroid/thyroid-test-for-weight-management",
      "thyroid/thyroid-test-for-fatigue",
      "thyroid/low-cost-thyroid-test-trivandrum",
      "thyroid/home-thyroid-test-price",
      "thyroid/thyroid-test-package",
      "thyroid/thyroid-test-with-doctor-consultation",
      "thyroid/fast-thyroid-test-results",
      "thyroid/accurate-thyroid-function-test",
      "thyroid/thyroid-stimulating-hormone-test",
      "thyroid/free-t4-test",
      "thyroid/total-t3-test",
      "thyroid/thyroid-peroxidase-antibody-test",
      "thyroid/thyroglobulin-antibody-test",
      "thyroid/reverse-t3-test",
      "thyroid/how-to-diagnose-thyroid-problems-in-trivandrum",
      "thyroid/best-time-to-get-thyroid-test",
      "thyroid/symptoms-that-indicate-need-for-thyroid-test",
      "thyroid/thyroid-test-preparation-tips",
      "thyroid/understanding-thyroid-test-results",
      "thyroid/cost-of-comprehensive-thyroid-screening-in-kerala",
      "thyroid/online-thyroid-test-booking-trivandrum",
      "thyroid/book-thyroid-test-online",
      "thyroid/home-collection-thyroid-test",
      "thyroid/digital-thyroid-test-report",
      "thyroid/whatsapp-thyroid-test-results",
      "thyroid/thyroid-test-for-working-professionals",
      "thyroid/thyroid-test-for-students",
      "thyroid/thyroid-test-for-sedentary-lifestyle",
      "thyroid/corporate-thyroid-health-package",
      "thyroid/thyroid-test-for-fitness-enthusiasts",
      "thyroid/thyroid-test-cost-comparison",
      "thyroid/thyroid-test-accuracy",
      "thyroid/best-thyroid-test-laboratory",
      "thyroid/comprehensive-vs-basic-thyroid-test",
      "thyroid/home-vs-lab-thyroid-test",
      "thyroid/thyroid-health-awareness",
      "thyroid/thyroid-test-guidelines",
      "thyroid/importance-of-regular-thyroid-screening",
      "thyroid/thyroid-test-fasting-requirements",
      "thyroid/thyroid-test-interpretation-guide"
    ];
    
    // Check if these are already in the pages list
    const existingPageIds = pages.map(page => page.id);
    const missingThyroidPages = additionalThyroidPages.filter(pageId => !existingPageIds.includes(pageId));
    
    // Add missing thyroid pages to sitemap
    missingThyroidPages.forEach(pageId => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}/${pageId}</loc>
    <lastmod>${timestamp}</lastmod>
    <priority>0.7</priority>
  </url>`;
    });
    
    sitemapContent += `
</urlset>`;
    
    // Create a blob and download link
    const blob = new Blob([sitemapContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setIsGenerating(false);
    
    toast({
      title: "Sitemap generated",
      description: `The sitemap has been created with ${pages.length + blogs.length + missingThyroidPages.length} URLs and downloaded.`,
    });
  };
  
  return (
    <BlurGlass intensity="light" className="p-6 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Generate XML Sitemap</h3>
          <p className="text-sm text-bloodlyf-taupe mt-1">
            Create a complete sitemap with all pages, blogs, and thyroid test pages for SEO.
          </p>
        </div>
        <Button 
          onClick={generateSitemap}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
        >
          {isGenerating ? (
            <>
              <CheckCircle className="h-4 w-4 animate-pulse" />
              Generating...
            </>
          ) : (
            <>
              <Layers className="h-4 w-4" />
              Generate & Download Sitemap
            </>
          )}
        </Button>
      </div>
      
      <div className="mt-6 text-sm text-bloodlyf-taupe/80 border-t border-bloodlyf-beige/20 pt-4">
        <p className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          The sitemap will be available at: <code className="bg-bloodlyf-beige/10 px-2 py-1 rounded text-xs">https://bloodlyf.com/sitemap.xml</code>
        </p>
        <p className="mt-2">
          Upload this file to your server and submit it to Google Search Console for better indexing.
        </p>
      </div>
    </BlurGlass>
  );
};
