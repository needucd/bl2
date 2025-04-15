
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

const ThyroidProfileTest = () => {
  // Handler for booking a test
  const handleBookTest = () => {
    toast({
      title: "Test booking initiated",
      description: "Please fill out the booking form to schedule your thyroid profile test.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Thyroid Profile Test | Comprehensive Thyroid Testing in Trivandrum | BloodLyf</title>
        <meta name="description" content="Get a complete thyroid profile test in Trivandrum with BloodLyf. Our comprehensive thyroid profile includes TSH, T3, T4 tests with home collection services in Trivandrum, Kerala." />
        <meta name="keywords" content="thyroid profile test, TSH T3 T4 test, thyroid panel test, thyroid blood test, home thyroid test, Trivandrum, Kerala" />
        <link rel="canonical" href="https://bloodlyf.com/thyroid/thyroid-profile-test" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Thyroid Profile Test",
              "description": "Comprehensive thyroid profile test including TSH, T3, and T4 measurements with home collection services in Trivandrum.",
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
                "price": "799",
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
                  Comprehensive Thyroid Profile Test in Trivandrum
                </h1>
                <p className="text-bloodlyf-taupe mb-6">
                  Get your complete thyroid profile done with convenient home collection service in Trivandrum. Accurate results, affordable prices, and expert analysis.
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

        {/* Information Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">What is a Thyroid Profile Test?</h2>
                
                <div className="prose max-w-none text-bloodlyf-taupe">
                  <p>
                    A thyroid profile test is a blood test that measures different hormones related to thyroid function. The thyroid is a small, butterfly-shaped gland located at the base of your neck that produces hormones that regulate vital body functions, including metabolism, heart rate, body temperature, and more.
                  </p>
                  
                  <p>
                    A comprehensive thyroid profile generally includes tests for:
                  </p>
                  
                  <ul>
                    <li><strong>Thyroid Stimulating Hormone (TSH):</strong> Produced by the pituitary gland, TSH stimulates the thyroid to produce hormones. High levels can indicate hypothyroidism, while low levels may suggest hyperthyroidism.</li>
                    <li><strong>Free T4 (Thyroxine):</strong> One of the main hormones produced by the thyroid gland. It helps regulate metabolism and affects nearly every organ in the body.</li>
                    <li><strong>Free T3 (Triiodothyronine):</strong> The active form of thyroid hormone that affects various physiological processes in the body.</li>
                  </ul>
                  
                  <p>
                    Some comprehensive profiles may also include additional tests such as:
                  </p>
                  
                  <ul>
                    <li><strong>Thyroid Peroxidase Antibody (TPO):</strong> Helps diagnose autoimmune thyroid diseases like Hashimoto's thyroiditis.</li>
                    <li><strong>Thyroglobulin Antibody (TgAb):</strong> Another antibody test that helps identify autoimmune thyroid conditions.</li>
                  </ul>
                  
                  <h3>Why Get a Thyroid Profile Test in Trivandrum?</h3>
                  
                  <p>
                    Thyroid disorders are increasingly common in Kerala, with an estimated 10% of the population affected by some form of thyroid dysfunction. Early detection through regular thyroid profile testing can help manage these conditions effectively.
                  </p>
                  
                  <p>
                    BloodLyf offers convenient home collection services for thyroid profile tests in Trivandrum. Our phlebotomists come to your doorstep, collect the sample professionally, and transport it to NABL-accredited laboratories for analysis.
                  </p>
                  
                  <h3>When Should You Get a Thyroid Profile Test?</h3>
                  
                  <p>
                    You should consider getting a thyroid profile test if you experience symptoms such as:
                  </p>
                  
                  <ul>
                    <li>Unexplained weight gain or weight loss</li>
                    <li>Fatigue or weakness</li>
                    <li>Hair loss</li>
                    <li>Irregular or heavy menstrual periods</li>
                    <li>Depression or anxiety</li>
                    <li>Difficulty concentrating</li>
                    <li>Dry skin or brittle nails</li>
                    <li>Sensitivity to cold or heat</li>
                    <li>Constipation or frequent bowel movements</li>
                  </ul>
                  
                  <p>
                    Regular thyroid testing is also recommended for:
                  </p>
                  
                  <ul>
                    <li>People with a family history of thyroid disease</li>
                    <li>Women above 35 years of age</li>
                    <li>Pregnant women or women planning pregnancy</li>
                    <li>People with autoimmune conditions like type 1 diabetes</li>
                    <li>Those on certain medications that can affect thyroid function</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <BlurGlass intensity="light" className="p-6 rounded-xl sticky top-20">
                  <h3 className="text-xl font-medium text-bloodlyf-darkblue mb-4">Our Thyroid Test Packages</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-bloodlyf-beige/50 hover:border-bloodlyf-blue/30 hover:shadow-md transition-all">
                      <h4 className="font-medium">Basic Thyroid Profile</h4>
                      <p className="text-sm text-bloodlyf-taupe mb-2">TSH, Free T4</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹599</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10 text-xs h-8"
                          onClick={handleBookTest}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-bloodlyf-blue/30 hover:shadow-md transition-all relative">
                      <div className="absolute -top-3 right-3 bg-bloodlyf-blue text-white text-xs px-2 py-1 rounded-full">Popular</div>
                      <h4 className="font-medium">Complete Thyroid Profile</h4>
                      <p className="text-sm text-bloodlyf-taupe mb-2">TSH, Free T3, Free T4</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹799</div>
                        <Button 
                          size="sm"
                          className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue text-xs h-8"
                          onClick={handleBookTest}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-bloodlyf-beige/50 hover:border-bloodlyf-blue/30 hover:shadow-md transition-all">
                      <h4 className="font-medium">Advanced Thyroid Profile</h4>
                      <p className="text-sm text-bloodlyf-taupe mb-2">TSH, Free T3, Free T4, TPO Antibody</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹1299</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10 text-xs h-8"
                          onClick={handleBookTest}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Why Choose BloodLyf</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <BadgeCheck className="h-5 w-5 text-bloodlyf-blue shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-bloodlyf-taupe">NABL accredited laboratory partners</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 text-bloodlyf-blue shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-bloodlyf-taupe">Home collection throughout Trivandrum</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-bloodlyf-blue shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-bloodlyf-taupe">Quick turnaround time for reports (24-48 hrs)</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-bloodlyf-blue shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-bloodlyf-taupe">Strict adherence to safety protocols</span>
                      </li>
                    </ul>
                  </div>
                </BlurGlass>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tests Section */}
        <section className="py-12 bg-bloodlyf-ivory/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-8">Other Thyroid Tests You May Need</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/thyroid/thyroid-function-test" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-bloodlyf-beige/20">
                <h3 className="text-lg font-medium mb-2">Thyroid Function Test</h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">Basic test to evaluate thyroid gland function with TSH measurement.</p>
                <div className="flex justify-between items-center">
                  <div className="text-bloodlyf-red">₹450</div>
                  <ChevronRight className="h-5 w-5 text-bloodlyf-blue" />
                </div>
              </a>
              
              <a href="/thyroid/t3-t4-tsh-test-trivandrum" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-bloodlyf-beige/20">
                <h3 className="text-lg font-medium mb-2">T3 T4 TSH Test</h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">Comprehensive evaluation of all three main thyroid hormones.</p>
                <div className="flex justify-between items-center">
                  <div className="text-bloodlyf-red">₹799</div>
                  <ChevronRight className="h-5 w-5 text-bloodlyf-blue" />
                </div>
              </a>
              
              <a href="/thyroid/thyroid-antibody-test" className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-bloodlyf-beige/20">
                <h3 className="text-lg font-medium mb-2">Thyroid Antibody Test</h3>
                <p className="text-sm text-bloodlyf-taupe mb-4">Tests for antibodies that can indicate autoimmune thyroid disease.</p>
                <div className="flex justify-between items-center">
                  <div className="text-bloodlyf-red">₹1100</div>
                  <ChevronRight className="h-5 w-5 text-bloodlyf-blue" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </>
  );
};

export default ThyroidProfileTest;
