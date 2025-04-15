
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import ClientShowcase from '@/components/ClientShowcase';
import BlogShowcase from '@/components/BlogShowcase';
import FAQ from '@/components/FAQ';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import SalesPopup from '@/components/SalesPopup';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import AnnouncementBar from '@/components/AnnouncementBar';
import CorporateSection from '@/components/CorporateSection';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased overflow-x-hidden">
      <Helmet>
        <title>BloodLyf - Professional Blood Collection at Your Doorstep</title>
        <meta name="description" content="Professional blood collection at your doorstep in Trivandrum. Same-day results, certified phlebotomists, and online booking. Book your test now!" />
        <meta name="keywords" content="blood test, home collection, phlebotomy, medical tests, healthcare, doorstep service, Trivandrum" />
        <meta property="og:title" content="BloodLyf - Professional Blood Collection at Your Doorstep" />
        <meta property="og:description" content="Professional blood collection at your doorstep in Trivandrum. Same-day results, certified phlebotomists, and online booking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloodlyf.com" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href="https://bloodlyf.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "BloodLyf",
              "description": "Professional blood collection at your doorstep in Trivandrum",
              "url": "https://bloodlyf.com",
              "sameAs": [
                "https://facebook.com/bloodlyf",
                "https://twitter.com/bloodlyf",
                "https://instagram.com/bloodlyf"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Technopark",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "postalCode": "695581",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 8.5583,
                "longitude": 76.8812
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "06:00",
                "closes": "22:00"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="flex flex-col">
        <div className="z-[70]">
          <AnnouncementBar />
        </div>
        <Navbar />
        <main className="mt-16">
          <HeroSection />
          <FeaturedProducts />
          <AboutSection />
          <HowItWorks />
          <CorporateSection />
          <ClientShowcase />
          <BlogShowcase />
          <FAQ />
          <NewsletterSignup />
        </main>
        <Footer />
        <HomeCollectionBooking />
        <SalesPopup />
        <Toaster />
      </div>
    </div>
  );
};

export default Index;
