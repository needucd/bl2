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
    
    // Define all static routes
    const staticRoutes = [
      {
        url: "/",
        priority: "1.0",
        changefreq: "daily"
      },
      {
        url: "/blog",
        priority: "0.8",
        changefreq: "daily"
      },
      {
        url: "/dashboard",
        priority: "0.7",
        changefreq: "weekly"
      },
      {
        url: "/profile",
        priority: "0.6",
        changefreq: "monthly"
      },
      {
        url: "/my-bookings",
        priority: "0.7",
        changefreq: "weekly"
      },
      {
        url: "/home-blood-collection-trivandrum",
        priority: "0.9",
        changefreq: "daily"
      },
      {
        url: "/blood-test-at-home-trivandrum",
        priority: "0.9",
        changefreq: "daily"
      },
      {
        url: "/doorstep-blood-collection-kerala",
        priority: "0.9",
        changefreq: "daily"
      }
    ];

    // Define package routes with proper format
    const packageRoutes = [
      {
        url: "/package/executive-health-checkup",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/comprehensive-health-checkup",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/diabetes-screening",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/heart-health-package",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/kidney-function-test",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/liver-function-test",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/cancer-screening",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/arthritis-bone-health",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/vitamin-deficiency-panel",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/obesity-metabolism-test",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/allergy-test-panel",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/stress-hormone-panel",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/sports-fitness-health-check",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/post-covid-health-check",
        priority: "0.8",
        changefreq: "weekly"
      },
      {
        url: "/package/gut-health-digestive-panel",
        priority: "0.8",
        changefreq: "weekly"
      }
    ];

    // Start sitemap content
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static routes
    staticRoutes.forEach(route => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${timestamp}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Add package routes
    packageRoutes.forEach(route => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${timestamp}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Add dynamic pages
    pages.forEach(page => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}/${page.id}</loc>
    <lastmod>${page.lastUpdated || timestamp}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    // Add blog posts
    blogs.forEach(blog => {
      sitemapContent += `
  <url>
    <loc>${baseUrl}/blog/${blog.id}</loc>
    <lastmod>${blog.date || timestamp}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    sitemapContent += `
</urlset>`;

    // Create and download sitemap file
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
      title: "Sitemap generated successfully",
      description: "The sitemap has been created and downloaded. Upload it to Google Search Console.",
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
