
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, TestTube, ShieldCheck, Beaker, Microscope, Clipboard, ChevronRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ComprehensiveDiagnosticTests = () => {
  const handleBooking = () => {
    toast({
      title: "Booking initiated",
      description: "Please complete the form to schedule your diagnostic test.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Diagnostic Tests at Home in Trivandrum | BloodLyf</title>
        <meta name="description" content="Get comprehensive diagnostic tests at home in Trivandrum with BloodLyf. We offer a wide range of diagnostic services with home sample collection in Trivandrum, Kerala." />
        <meta name="keywords" content="diagnostic tests, home diagnostic tests, comprehensive tests, blood tests Trivandrum, health checkup at home, medical tests Kerala" />
        <link rel="canonical" href="https://bloodlyf.com/comprehensive-diagnostic-tests-at-home-in-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTestPanel",
              "name": "Comprehensive Diagnostic Tests",
              "description": "Complete range of diagnostic tests available with home collection in Trivandrum, Kerala",
              "usesDevice": {
                "@type": "MedicalDevice",
                "name": "Blood Testing Equipment"
              },
              "medicineSystem": "Conventional Medicine",
              "relevantSpecialty": "Diagnostic Medicine",
              "study": {
                "@type": "MedicalStudy",
                "studyLocation": "Trivandrum, Kerala, India"
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
        <section className="bg-gradient-to-r from-bloodlyf-ivory to-bloodlyf-beige/20 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-3/5">
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue mb-4">
                  Comprehensive Diagnostic Tests at Home in Trivandrum
                </h1>
                <p className="text-bloodlyf-taupe mb-6">
                  Experience the convenience of comprehensive diagnostic testing from the comfort of your home. BloodLyf brings advanced laboratory services to your doorstep in Trivandrum with professional sample collection and accurate results.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button 
                    className="bg-bloodlyf-red hover:bg-bloodlyf-darkred"
                    onClick={handleBooking}
                  >
                    Book a Test Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-bloodlyf-blue text-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                  >
                    View All Test Packages
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-bloodlyf-taupe">
                    <MapPin className="h-4 w-4 mr-1 text-bloodlyf-blue" />
                    <span>Home Collection in Trivandrum</span>
                  </div>
                  <div className="flex items-center text-sm text-bloodlyf-taupe">
                    <Clock className="h-4 w-4 mr-1 text-bloodlyf-blue" />
                    <span>Fast Results (24-48 hours)</span>
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

        {/* Services Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-medium text-bloodlyf-darkblue text-center mb-12">Comprehensive Diagnostic Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlurGlass intensity="light" className="p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-bloodlyf-blue/10 h-16 w-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Beaker className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Blood Tests</h3>
                <p className="text-bloodlyf-taupe text-center mb-4">Complete blood count, lipid profile, liver function, kidney function, diabetes screening, and more.</p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10">
                    View Blood Tests
                  </Button>
                </div>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-bloodlyf-blue/10 h-16 w-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TestTube className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Hormone Tests</h3>
                <p className="text-bloodlyf-taupe text-center mb-4">Thyroid function, reproductive hormones, cortisol, growth hormone, and comprehensive hormone panels.</p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10">
                    View Hormone Tests
                  </Button>
                </div>
              </BlurGlass>
              
              <BlurGlass intensity="light" className="p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-bloodlyf-blue/10 h-16 w-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Microscope className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Specialized Tests</h3>
                <p className="text-bloodlyf-taupe text-center mb-4">Vitamin deficiency, allergy testing, autoimmune markers, cancer markers, and genetic screening.</p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10">
                    View Specialized Tests
                  </Button>
                </div>
              </BlurGlass>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-bloodlyf-ivory/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-7 gap-8">
              <div className="md:col-span-5">
                <h2 className="text-2xl font-medium text-bloodlyf-darkblue mb-6">Why Choose Comprehensive Diagnostic Tests?</h2>
                
                <div className="prose max-w-none text-bloodlyf-taupe">
                  <p>
                    Comprehensive diagnostic testing provides a complete picture of your health status, helping to identify potential health issues before they become serious problems. Regular diagnostic testing is an essential part of preventive healthcare and can significantly contribute to early detection and management of various conditions.
                  </p>
                  
                  <h3>Benefits of Comprehensive Diagnostic Testing</h3>
                  
                  <ul>
                    <li><strong>Early Detection:</strong> Identify health issues before symptoms appear, allowing for earlier intervention and better outcomes.</li>
                    <li><strong>Preventive Care:</strong> Regular testing helps monitor your health parameters and prevent the development of serious conditions.</li>
                    <li><strong>Personalized Healthcare:</strong> Test results provide valuable data for your healthcare provider to develop personalized treatment plans.</li>
                    <li><strong>Health Optimization:</strong> Identify nutritional deficiencies, hormonal imbalances, and other factors that may be affecting your overall wellbeing.</li>
                    <li><strong>Peace of Mind:</strong> Regular comprehensive testing can alleviate health-related anxiety by providing clear information about your health status.</li>
                  </ul>
                  
                  <h3>Our Comprehensive Diagnostic Approach</h3>
                  
                  <p>
                    At BloodLyf, we offer a range of comprehensive diagnostic packages tailored to different age groups, genders, and specific health concerns. Our diagnostic tests are conducted in NABL-accredited laboratories with state-of-the-art equipment, ensuring accurate and reliable results.
                  </p>
                  
                  <p>
                    Our diagnostic packages typically include:
                  </p>
                  
                  <ol>
                    <li><strong>Complete Blood Count (CBC):</strong> Evaluates overall health and detects a wide range of disorders including anemia, infection, and certain cancers.</li>
                    <li><strong>Lipid Profile:</strong> Measures cholesterol levels and assesses risk factors for cardiovascular disease.</li>
                    <li><strong>Liver Function Tests:</strong> Evaluates liver health and function by measuring levels of proteins, enzymes, and bilirubin.</li>
                    <li><strong>Kidney Function Tests:</strong> Assesses kidney health through measurements of creatinine, urea, and electrolytes.</li>
                    <li><strong>Blood Glucose Tests:</strong> Screens for diabetes and monitors blood sugar control.</li>
                    <li><strong>Thyroid Function Tests:</strong> Evaluates thyroid health through measurements of TSH, T3, and T4 hormones.</li>
                    <li><strong>Vitamin Levels:</strong> Assesses levels of essential vitamins like B12, D, and folate.</li>
                    <li><strong>Electrolyte Panel:</strong> Measures sodium, potassium, chloride, and bicarbonate levels in the blood.</li>
                    <li><strong>Inflammatory Markers:</strong> Detects inflammation through tests like C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR).</li>
                  </ol>
                  
                  <h3>The Convenience of Home Collection in Trivandrum</h3>
                  
                  <p>
                    BloodLyf brings the laboratory to your doorstep with our home collection services in Trivandrum. Our trained phlebotomists visit your home at your preferred time, collect the required samples following strict hygiene protocols, and transport them safely to our partner laboratories.
                  </p>
                  
                  <p>
                    Home collection offers several advantages:
                  </p>
                  
                  <ul>
                    <li>Eliminates the need to travel to a laboratory</li>
                    <li>Reduces exposure to hospital environments</li>
                    <li>Provides comfort and convenience, especially for elderly and busy individuals</li>
                    <li>Allows for testing in a relaxed environment, potentially reducing stress-related variations in results</li>
                    <li>Saves time and eliminates waiting periods at diagnostic centers</li>
                  </ul>
                  
                  <h3>Understanding Your Test Results</h3>
                  
                  <p>
                    We believe that diagnostic testing is not just about collecting samples and generating reports. It's about providing meaningful insights into your health. Our digital reports are easy to understand, with clear marking of abnormal values and reference ranges.
                  </p>
                  
                  <p>
                    For comprehensive packages, we offer optional consultations with healthcare professionals who can explain your results and provide guidance on next steps if any abnormalities are detected.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <BlurGlass intensity="light" className="p-6 rounded-xl sticky top-20">
                  <h3 className="text-xl font-medium text-bloodlyf-darkblue mb-4">Popular Packages</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-bloodlyf-beige/50 hover:border-bloodlyf-blue/30 hover:shadow-md transition-all">
                      <h4 className="font-medium">Basic Health Checkup</h4>
                      <p className="text-xs text-bloodlyf-taupe mb-2">CBC, Glucose, Lipid Profile</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹999</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10 text-xs h-7"
                          onClick={handleBooking}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-bloodlyf-blue/30 hover:shadow-md transition-all relative">
                      <div className="absolute -top-3 right-3 bg-bloodlyf-blue text-white text-xs px-2 py-1 rounded-full">Popular</div>
                      <h4 className="font-medium">Comprehensive Panel</h4>
                      <p className="text-xs text-bloodlyf-taupe mb-2">80+ parameters incl. vitamins, hormones</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹2499</div>
                        <Button 
                          size="sm"
                          className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue text-xs h-7"
                          onClick={handleBooking}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-bloodlyf-beige/50 hover:border-bloodlyf-blue/30 hover:shadow-md transition-all">
                      <h4 className="font-medium">Diabetes Care</h4>
                      <p className="text-xs text-bloodlyf-taupe mb-2">HbA1c, Glucose, Insulin, Kidney Function</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹1599</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10 text-xs h-7"
                          onClick={handleBooking}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-bloodlyf-beige/50 hover:border-bloodlyf-blue/30 hover:shadow-md transition-all">
                      <h4 className="font-medium">Thyroid Complete</h4>
                      <p className="text-xs text-bloodlyf-taupe mb-2">TSH, T3, T4, Antibodies</p>
                      <div className="flex justify-between items-center">
                        <div className="text-bloodlyf-red font-medium">₹1299</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-bloodlyf-blue border-bloodlyf-blue hover:bg-bloodlyf-blue/10 text-xs h-7"
                          onClick={handleBooking}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a href="/health-packages" className="text-bloodlyf-blue hover:text-bloodlyf-darkblue flex items-center justify-center text-sm">
                      View all packages <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </BlurGlass>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </>
  );
};

export default ComprehensiveDiagnosticTests;
