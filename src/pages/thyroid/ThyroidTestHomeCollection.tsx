
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, TestTube, ShieldCheck, ShoppingCart, ChevronRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ThyroidTestHomeCollection = () => {
  // Handler for booking a test
  const handleBookTest = () => {
    toast({
      title: "Test booking initiated",
      description: "Please fill out the booking form to schedule your thyroid test home collection.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Thyroid Test Home Collection in Trivandrum | BloodLyf</title>
        <meta name="description" content="Get thyroid test home collection services in Trivandrum. Convenient, accurate, and timely sample collection by trained phlebotomists at your doorstep." />
        <meta name="keywords" content="thyroid test home collection, thyroid home sample, doorstep thyroid test, Trivandrum" />
        <link rel="canonical" href="https://bloodlyf.com/thyroid/thyroid-test-home-collection-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Thyroid Test Home Collection",
              "description": "Convenient thyroid test home collection service in Trivandrum. Sample collected at your doorstep by trained professionals.",
              "usesDevice": {
                "@type": "MedicalDevice",
                "name": "Blood Test Equipment"
              },
              "medicineSystem": "Conventional Medicine",
              "relevantSpecialty": "Endocrinology",
              "study": {
                "@type": "MedicalStudy",
                "studyLocation": "Trivandrum, Kerala, India"
              },
              "offer": {
                "@type": "Offer",
                "price": "450",
                "priceCurrency": "INR"
              },
              "provider": {
                "@type": "MedicalOrganization",
                "name": "BloodLyf",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Pattom",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695004",
                  "addressCountry": "IN"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="mt-16 pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-bloodlyf-ivory to-bloodlyf-beige/20 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue mb-4">
                  Thyroid Test Home Collection in Trivandrum
                </h1>
                <p className="text-bloodlyf-taupe mb-6">
                  Get your thyroid test samples collected at home by our trained phlebotomists. Convenient, safe, and reliable testing service in Trivandrum.
                </p>
                <div className="flex flex-wrap gap-4">
                  <BlurGlass 
                    className="bg-bloodlyf-red hover:bg-bloodlyf-darkred flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 text-white border border-white/30"
                    onClick={handleBookTest}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Book Home Collection
                  </BlurGlass>
                  <BlurGlass 
                    className="border-bloodlyf-blue text-bloodlyf-blue hover:bg-bloodlyf-blue/10 px-4 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border"
                    onClick={handleBookTest}
                  >
                    View Test Packages
                  </BlurGlass>
                </div>
                <div className="flex flex-wrap mt-6 gap-4">
                  <div className="flex items-center text-sm text-bloodlyf-taupe">
                    <MapPin className="h-4 w-4 mr-1 text-bloodlyf-blue" />
                    <span>Trivandrum, Kerala</span>
                  </div>
                  <div className="flex items-center text-sm text-bloodlyf-taupe">
                    <Clock className="h-4 w-4 mr-1 text-bloodlyf-blue" />
                    <span>Reports in 24-48 hours</span>
                  </div>
                  <div className="flex items-center text-sm text-bloodlyf-taupe">
                    <BadgeCheck className="h-4 w-4 mr-1 text-bloodlyf-blue" />
                    <span>NABL Certified Labs</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1597271479791-d25cbe13eaf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Thyroid Test Home Collection" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main content - Basic template structure */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Thyroid Test Home Collection Service</h2>
            <p className="text-bloodlyf-taupe">
              Our thyroid test home collection service in Trivandrum brings laboratory-quality testing to your doorstep. Our trained phlebotomists will visit your home at your preferred time to collect blood samples for thyroid testing.
            </p>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">TSH Test - ₹450</h3>
                <p className="text-sm text-bloodlyf-taupe/80">
                  Basic thyroid screening test to measure thyroid-stimulating hormone levels.
                </p>
                <BlurGlass 
                  className="mt-4 bg-bloodlyf-blue/90 text-white px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30 text-center text-sm"
                  onClick={handleBookTest}
                >
                  Book Now
                </BlurGlass>
              </BlurGlass>
              
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">T3, T4 Test - ₹850</h3>
                <p className="text-sm text-bloodlyf-taupe/80">
                  Measures triiodothyronine and thyroxine levels to assess thyroid function.
                </p>
                <BlurGlass 
                  className="mt-4 bg-bloodlyf-blue/90 text-white px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30 text-center text-sm"
                  onClick={handleBookTest}
                >
                  Book Now
                </BlurGlass>
              </BlurGlass>
              
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Complete Thyroid Profile - ₹1,250</h3>
                <p className="text-sm text-bloodlyf-taupe/80">
                  Comprehensive panel including TSH, T3, T4, FT3, FT4, and Anti-TPO antibodies.
                </p>
                <BlurGlass 
                  className="mt-4 bg-bloodlyf-blue/90 text-white px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30 text-center text-sm"
                  onClick={handleBookTest}
                >
                  Book Now
                </BlurGlass>
              </BlurGlass>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
      <HomeCollectionBooking testType="Thyroid Function Test" />
    </>
  );
};

export default ThyroidTestHomeCollection;
