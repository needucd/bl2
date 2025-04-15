
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, TestTube, ShieldCheck, ShoppingCart, ChevronRight, Award, Stars, Building } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BestThyroidTestCenter = () => {
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
        <title>Best Thyroid Test Center in Trivandrum | NABL Certified | BloodLyf</title>
        <meta name="description" content="Looking for the best thyroid test center in Trivandrum? BloodLyf offers accurate, affordable thyroid testing with home collection and fast results." />
        <meta name="keywords" content="best thyroid test center, thyroid lab trivandrum, top thyroid testing, quality thyroid test" />
        <link rel="canonical" href="https://bloodlyf.com/thyroid/best-thyroid-test-center-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "BloodLyf - Best Thyroid Test Center in Trivandrum",
              "description": "Premier thyroid testing center in Trivandrum offering accurate diagnosis with home collection service.",
              "url": "https://bloodlyf.com/thyroid/best-thyroid-test-center-trivandrum",
              "logo": "https://bloodlyf.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pattom",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "postalCode": "695004",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service",
                "areaServed": "Trivandrum"
              },
              "medicalSpecialty": "Endocrinology",
              "availableTest": {
                "@type": "MedicalTest",
                "name": "Comprehensive Thyroid Profile Test"
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
                  Best Thyroid Test Center in Trivandrum
                </h1>
                <p className="text-bloodlyf-taupe mb-6">
                  BloodLyf is Trivandrum's premier thyroid testing facility, offering accurate diagnosis, doorstep collection, and quick results at affordable prices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <BlurGlass 
                    className="bg-bloodlyf-blue/90 text-white px-4 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30 flex items-center gap-2"
                    onClick={handleBookTest}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Book Test Now
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

        {/* Why Choose Us Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Why Choose BloodLyf for Thyroid Testing</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <BlurGlass intensity="light" className="p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <Award className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Certified Excellence</h3>
                <p className="text-sm text-bloodlyf-taupe">
                  All tests are performed in NABL accredited laboratories with state-of-the-art equipment for accurate results.
                </p>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Fast Turnaround</h3>
                <p className="text-sm text-bloodlyf-taupe">
                  Receive your thyroid test results within 24-48 hours, delivered digitally via email or WhatsApp.
                </p>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
                <p className="text-sm text-bloodlyf-taupe">
                  Rigorous quality control measures ensure reliable and accurate thyroid test results every time.
                </p>
              </BlurGlass>
            </div>
          </div>
        </section>

        {/* Our Thyroid Test Services */}
        <section className="py-12 bg-bloodlyf-ivory/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Our Thyroid Test Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <BlurGlass intensity="light" className="p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <TestTube className="h-5 w-5 mr-2 text-bloodlyf-blue" />
                  Thyroid Profile Test
                </h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">
                  Comprehensive analysis of thyroid function including TSH, T3, and T4 levels to evaluate thyroid health.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                  onClick={() => window.location.href = '/thyroid/thyroid-profile-test'}
                >
                  Learn More
                </Button>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <TestTube className="h-5 w-5 mr-2 text-bloodlyf-blue" />
                  T3, T4, TSH Test
                </h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">
                  Individual tests for triiodothyronine (T3), thyroxine (T4), and thyroid stimulating hormone (TSH).
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                  onClick={() => window.location.href = '/thyroid/t3-t4-tsh-test-trivandrum'}
                >
                  Learn More
                </Button>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <TestTube className="h-5 w-5 mr-2 text-bloodlyf-blue" />
                  Thyroid Antibody Test
                </h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">
                  Tests for thyroid peroxidase (TPO) and thyroglobulin antibodies to detect autoimmune thyroid disorders.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                  onClick={() => window.location.href = '/thyroid/thyroid-antibody-test'}
                >
                  Learn More
                </Button>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <TestTube className="h-5 w-5 mr-2 text-bloodlyf-blue" />
                  Complete Thyroid Panel
                </h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">
                  Comprehensive panel including all thyroid hormones, antibodies, and related markers for a complete evaluation.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                  onClick={() => window.location.href = '/thyroid/complete-thyroid-panel-test'}
                >
                  Learn More
                </Button>
              </BlurGlass>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 bg-gradient-to-r from-bloodlyf-blue/10 to-bloodlyf-blue/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-4">Experience the Best Thyroid Testing Service in Trivandrum</h2>
            <p className="text-bloodlyf-taupe max-w-2xl mx-auto mb-8">
              Get your thyroid tests done at Trivandrum's premier diagnostic center. Convenient home collection, accurate results, and expert interpretation.
            </p>
            <BlurGlass 
              className="bg-bloodlyf-blue/90 text-white px-6 py-3 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30 inline-block"
              onClick={handleBookTest}
            >
              Book Your Thyroid Test Now
            </BlurGlass>
          </div>
        </section>

        {/* Related Services with Internal Links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Related Services</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/thyroid/thyroid-test-near-me-trivandrum" className="block hover:bg-bloodlyf-beige/10 p-4 rounded-lg transition-colors">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-bloodlyf-blue" />
                  <span className="font-medium">Thyroid Test Near Me</span>
                </div>
                <p className="mt-2 text-sm text-bloodlyf-taupe">Find convenient thyroid testing locations near you in Trivandrum.</p>
              </a>
              
              <a href="/thyroid/thyroid-test-home-collection-trivandrum" className="block hover:bg-bloodlyf-beige/10 p-4 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-3 text-bloodlyf-blue" />
                  <span className="font-medium">Home Collection Service</span>
                </div>
                <p className="mt-2 text-sm text-bloodlyf-taupe">Get your thyroid samples collected at home by certified phlebotomists.</p>
              </a>
              
              <a href="/thyroid/affordable-thyroid-test-trivandrum" className="block hover:bg-bloodlyf-beige/10 p-4 rounded-lg transition-colors">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-3 text-bloodlyf-blue" />
                  <span className="font-medium">Affordable Thyroid Tests</span>
                </div>
                <p className="mt-2 text-sm text-bloodlyf-taupe">Cost-effective thyroid testing solutions without compromising on quality.</p>
              </a>
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

export default BestThyroidTestCenter;
