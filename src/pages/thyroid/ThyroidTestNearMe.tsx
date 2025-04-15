
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

const ThyroidTestNearMe = () => {
  // Handler for booking a test
  const handleBookTest = () => {
    toast({
      title: "Test booking initiated",
      description: "Please fill out the booking form to schedule your thyroid test.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Thyroid Test Near Me in Trivandrum | Local Testing | BloodLyf</title>
        <meta name="description" content="Looking for thyroid test near me in Trivandrum? BloodLyf offers convenient home collection services with fast results and affordable rates." />
        <meta name="keywords" content="thyroid test near me, thyroid testing nearby, thyroid test Trivandrum, local thyroid test" />
        <link rel="canonical" href="https://bloodlyf.com/thyroid/thyroid-test-near-me-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Thyroid Test Near Me",
              "description": "Convenient thyroid testing services near you in Trivandrum with home collection option.",
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
                  Thyroid Test Near Me in Trivandrum
                </h1>
                <p className="text-bloodlyf-taupe mb-6">
                  Looking for a thyroid test nearby? BloodLyf offers convenient thyroid testing services near you in Trivandrum with home collection available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-bloodlyf-red hover:bg-bloodlyf-darkred flex items-center gap-2"
                    onClick={handleBookTest}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Book Test Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-bloodlyf-blue text-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                    onClick={handleBookTest}
                  >
                    View Test Packages
                  </Button>
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
                <HomeCollectionBooking />
              </div>
            </div>
          </div>
        </section>

        {/* Main content - Basic template structure */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Find Thyroid Tests Near You in Trivandrum</h2>
            <p className="text-bloodlyf-taupe">
              BloodLyf offers convenient thyroid testing services throughout Trivandrum, with home collection services to make testing as easy as possible. No need to search for "thyroid test near me" anymore!
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </>
  );
};

export default ThyroidTestNearMe;
