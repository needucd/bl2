
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, ShieldCheck, Star, ShoppingCart, BadgeCheck, CheckCircle, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';

const testPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 599,
    description: "Essential blood tests including CBC, blood sugar, cholesterol, and kidney function.",
    popular: true,
    tests: ["Complete Blood Count", "Blood Glucose", "Lipid Profile", "Kidney Function Test"]
  },
  {
    id: 2,
    name: "Comprehensive Health Package",
    price: 1499,
    description: "Complete health assessment with 40+ parameters including thyroid, vitamin levels, and liver function.",
    popular: true,
    tests: ["Complete Blood Count", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Thyroid Profile", "Vitamin B12 & D3", "HbA1c", "Urine Analysis"]
  },
  {
    id: 3,
    name: "Diabetes Care Package",
    price: 899,
    description: "Specialized package for diabetes monitoring and management with detailed glucose analysis.",
    popular: false,
    tests: ["Fasting Blood Sugar", "Post Prandial Blood Sugar", "HbA1c", "Kidney Function Test", "Lipid Profile"]
  },
  {
    id: 4,
    name: "Women's Health Package",
    price: 1299,
    description: "Tailored for women's health monitoring including hormonal tests and vitamin level assessment.",
    popular: false,
    tests: ["Complete Blood Count", "Thyroid Profile", "Vitamin D & B12", "Iron Studies", "Calcium", "PCOS Screening"]
  }
];

const BloodTestAtHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (packageName: string) => {
    toast({
      title: "Added to cart!",
      description: `${packageName} has been added to your cart.`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased">
      <Helmet>
        <title>Convenient Blood Tests at Home in Trivandrum | Complete Test Packages</title>
        <meta name="description" content="Skip the lab queues with our comprehensive blood test at home services in Trivandrum. Get tested in the comfort of your home by experienced technicians with 24-hour turnaround." />
        <meta name="keywords" content="blood test home service, lab tests Trivandrum, home diagnostics, doorstep collection, health checkup, medical tests, diagnostic center, blood collection" />
        <link rel="canonical" href="https://bloodlyf.com/blood-test-at-home-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Blood Tests at Home Trivandrum",
              "description": "Comprehensive blood testing services delivered at your home in Trivandrum",
              "usesDevice": {
                "@type": "MedicalDevice",
                "name": "Blood Collection Equipment"
              },
              "normalRange": "Varies by test",
              "affectedBy": ["Fasting status", "Medications", "Time of day"],
              "provider": {
                "@type": "LocalBusiness",
                "name": "BloodLyf Diagnostics",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Medical College Road",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695011",
                  "addressCountry": "IN"
                },
                "telephone": "+919876543210",
                "priceRange": "₹₹-₹₹₹",
                "areaServed": {
                  "@type": "City",
                  "name": "Trivandrum",
                  "sameAs": "https://en.wikipedia.org/wiki/Thiruvananthapuram"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <AnnouncementBar />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bloodlyf-container">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-blue mb-2">
                Lab-Quality Tests at Home
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Convenient Blood Tests at Home in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Skip the lab queues and waiting rooms. Our comprehensive blood test at home service brings professional diagnostics to your doorstep in Trivandrum with results in just 24 hours.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <BadgeCheck className="h-5 w-5" />
                    <span>Expert Technicians</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Certified professionals with 5+ years experience</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <Clock className="h-5 w-5" />
                    <span>Quick Results</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Digital reports within 24 hours via email</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <ShieldCheck className="h-5 w-5" />
                    <span>NABL Accredited</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Lab tests with highest quality standards</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <MapPin className="h-5 w-5" />
                    <span>City-Wide Coverage</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Serving all areas in Trivandrum</p>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Your Home Test Now
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare professional conducting blood test at customer's home in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div id="packages" className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-serif font-medium">Complete Blood Test Packages</h2>
              <div className="mt-2 md:mt-0">
                <Button variant="outline" onClick={() => document.getElementById('custom-package')?.scrollIntoView({ behavior: 'smooth' })}>
                  Create Custom Package
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {testPackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Includes:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.tests.map((test, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-sm text-bloodlyf-taupe/80">
                          <CheckCircle className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                          <span>{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-medium">₹{pkg.price}</span>
                      <span className="text-sm text-bloodlyf-taupe/60 ml-2">inclusive of home visit</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => handleAddToCart(pkg.name)}
                        className="flex items-center gap-1"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button 
                        className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                        onClick={() => document.getElementById('home-collection-popup')?.click()}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </BlurGlass>
              ))}
            </div>
            
            <div id="custom-package" className="mb-8">
              <BlurGlass className="p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">Create Your Custom Test Package</h3>
                <div className="mb-6">
                  <p className="text-bloodlyf-taupe/80 mb-4">
                    Choose the specific tests you need for a personalized health assessment. Our experts can help you determine which tests are right for you.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      "Complete Blood Count", "Liver Function Test", "Kidney Function Test",
                      "Lipid Profile", "Thyroid Profile", "Vitamin D Test",
                      "Vitamin B12 Test", "HbA1c", "Blood Glucose",
                      "Iron Studies", "Calcium & Electrolytes", "Urine Analysis"
                    ].map((test, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`test-${index}`} className="mr-2 h-4 w-4 rounded border-gray-300" />
                        <label htmlFor={`test-${index}`} className="text-sm">{test}</label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Preferred Appointment Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="date" 
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-bloodlyf-blue" 
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-bloodlyf-blue">
                        <option value="">Select time</option>
                        <option value="morning">Morning (6 AM - 10 AM)</option>
                        <option value="afternoon">Afternoon (10 AM - 2 PM)</option>
                        <option value="evening">Evening (2 PM - 6 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                  onClick={() => document.getElementById('home-collection-popup')?.click()}
                >
                  Book Your Custom Package
                </Button>
              </BlurGlass>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-medium mb-6">Why Choose Our Blood Test at Home Service</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="bg-bloodlyf-blue/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-bloodlyf-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Comprehensive Testing</h3>
                <p className="text-bloodlyf-taupe/80">
                  We offer over 1000+ diagnostic tests and panels, from basic blood work to specialized hormone assessments.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="bg-bloodlyf-blue/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-bloodlyf-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Superior Experience</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our phlebotomists are selected for both technical skill and compassionate care, ensuring a painless experience.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="bg-bloodlyf-blue/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7 text-bloodlyf-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
                <p className="text-bloodlyf-taupe/80">
                  All samples are tested in our NABL-accredited laboratory with strict quality control measures.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-medium mb-6">Service Locations in Trivandrum</h2>
            
            <div className="mb-4">
              <p className="mb-4 text-bloodlyf-taupe/80">
                We provide blood test at home services throughout Trivandrum, covering all major neighborhoods and residential areas.
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  "Pattom", "Kowdiar", "Vellayambalam", "Medical College", "Ulloor", "Sreekaryam",
                  "Technopark", "Kazhakkoottam", "Kesavadasapuram", "Peroorkada", "Poojappura", "Thampanoor",
                  "Palayam", "Fort", "Sasthamangalam", "Vazhuthacaud", "PMG", "Chalai"
                ].map((area, index) => (
                  <div key={index} className="bg-bloodlyf-beige/20 p-2 rounded text-center text-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            
            <BlurGlass className="p-4 rounded-xl mt-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                <p className="text-sm">
                  <span className="font-medium">Nearby Hospitals:</span> Medical College Hospital, KIMS, Ananthapuri Hospital, SUT Hospital, PRS Hospital
                </p>
              </div>
            </BlurGlass>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is the process for booking a blood test at home?",
                  answer: "Simply click on the 'Book Now' button, select your preferred package or tests, choose a date and time slot, and provide your contact and address details. Our customer care executive will confirm your booking."
                },
                {
                  question: "How should I prepare for my blood test?",
                  answer: "Most blood tests require 8-12 hours of fasting. We'll inform you about any specific preparations when you book. Generally, drinking water is encouraged, but avoid food, tea, coffee, or juice before the test."
                },
                {
                  question: "How long will the home visit take?",
                  answer: "The actual blood collection process typically takes only 5-10 minutes. Our phlebotomist may spend 15-20 minutes at your home to ensure proper documentation and safe sample collection."
                },
                {
                  question: "When will I receive my test results?",
                  answer: "Standard test results are delivered within 24 hours via email or our secure patient portal. For specialized tests, it may take 24-48 hours. We also offer express results within 6 hours for an additional fee."
                },
                {
                  question: "Is there a doctor to explain my test results?",
                  answer: "Yes, we offer complimentary doctor consultation to explain your test results. You can schedule this within 7 days of receiving your reports through our customer care team."
                }
              ].map((faq, index) => (
                <BlurGlass key={index} className="p-5 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-bloodlyf-taupe/80">{faq.answer}</p>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/10 to-bloodlyf-blue/10 p-8 rounded-2xl mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-medium mb-3">Ready for a Convenient and Reliable Blood Test?</h2>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Book your blood test at home today and experience professional diagnostics from the comfort of your own space.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-bloodlyf-blue hover:from-purple-700 hover:to-bloodlyf-darkblue text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Your Home Test Now
              </Button>
              <p className="mt-4 text-sm text-bloodlyf-taupe/60">
                Free home collection for orders above ₹999 • Digital reports within 24 hours • Doctor consultation available
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <HomeCollectionBooking />
      <Toaster />
    </div>
  );
};

export default BloodTestAtHome;
