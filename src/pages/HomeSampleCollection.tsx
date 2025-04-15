
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, ShieldCheck, ShoppingCart, CalendarCheck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const testCategories = [
  {
    id: 1,
    name: "Blood Tests",
    samples: ["Blood"],
    tests: ["Complete Blood Count", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Diabetes Screening", "Thyroid Profile"]
  },
  {
    id: 2,
    name: "Urine Tests",
    samples: ["Urine"],
    tests: ["Routine Urine Analysis", "Urine Culture", "Urine Microalbumin", "Pregnancy Test", "Drug Screening"]
  },
  {
    id: 3,
    name: "Stool Tests",
    samples: ["Stool"],
    tests: ["Routine Stool Analysis", "Occult Blood Test", "Stool Culture", "Parasite Examination"]
  },
  {
    id: 4,
    name: "Swab Tests",
    samples: ["Throat Swab", "Nasal Swab"],
    tests: ["Throat Culture", "Rapid Strep Test", "COVID-19 Testing"]
  }
];

const HomeSampleCollection = () => {
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
        <title>Expert Home Sample Collection in Trivandrum | All Test Types Available</title>
        <meta name="description" content="Our skilled technicians provide convenient home sample collection in Trivandrum for all diagnostic needs. Book online for same-day appointments and fast results." />
        <meta name="keywords" content="sample collection at home, Trivandrum diagnostic services, medical sample pickup, home testing, lab tests, blood work, urine tests, medical diagnostics" />
        <link rel="canonical" href="https://bloodlyf.com/home-sample-collection-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Home Sample Collection in Trivandrum",
              "description": "Professional medical sample collection services at your home in Trivandrum",
              "usesDevice": [
                {
                  "@type": "MedicalDevice",
                  "name": "Blood Collection Kit"
                },
                {
                  "@type": "MedicalDevice",
                  "name": "Urine Collection Kit"
                },
                {
                  "@type": "MedicalDevice",
                  "name": "Swab Collection Kit"
                }
              ],
              "provider": {
                "@type": "Service",
                "name": "BloodLyf Home Collection",
                "provider": {
                  "@type": "MedicalOrganization",
                  "name": "BloodLyf",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kowdiar Junction",
                    "addressLocality": "Trivandrum",
                    "addressRegion": "Kerala",
                    "postalCode": "695003",
                    "addressCountry": "IN"
                  }
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Trivandrum"
                },
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceUrl": "https://bloodlyf.com/home-sample-collection-trivandrum",
                  "servicePhone": "+919876543210"
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
                All Sample Types Collected
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Expert Home Sample Collection in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Our skilled technicians bring professional sample collection services to your doorstep in Trivandrum. We collect all types of diagnostic samples including blood, urine, stool, and swabs with proper handling and transport protocols.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <BadgeCheck className="h-5 w-5" />
                    <span>All Sample Types</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Blood, urine, stool, swabs & more</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <Clock className="h-5 w-5" />
                    <span>Same-Day Service</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">24-hour result turnaround</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Expert Handling</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Special transportation containers</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <MapPin className="h-5 w-5" />
                    <span>All Trivandrum Areas</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Covering key localities</p>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Sample Collection
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Medical professional collecting samples at patient's home in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Sample Types We Collect</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testCategories.map((category) => (
                <BlurGlass key={category.id} className="p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-3">{category.name}</h3>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-bloodlyf-taupe/70 mb-2">Sample Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.samples.map((sample, index) => (
                        <span key={index} className="bg-bloodlyf-blue/10 text-bloodlyf-blue text-xs px-3 py-1 rounded-full">
                          {sample}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-bloodlyf-taupe/70 mb-2">Common Tests:</p>
                    <ul className="text-sm text-bloodlyf-taupe/80 space-y-1">
                      {category.tests.map((test, index) => (
                        <li key={index} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-bloodlyf-blue rounded-full"></span>
                          {test}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-bloodlyf-beige/20">
                    <Button 
                      className="w-full bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                      onClick={() => document.getElementById('home-collection-popup')?.click()}
                    >
                      Book {category.name}
                    </Button>
                  </div>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="mb-12 bg-gradient-to-r from-purple-600/10 to-bloodlyf-blue/10 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">Our Sample Collection Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Schedule Your Appointment</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Book your preferred date and time through our website, app, or call center.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Pre-Collection Guidance</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Receive specific preparation instructions based on your test requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Home Visit & Collection</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Our technician arrives at your location with appropriate collection kits and safety equipment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Sample Processing & Results</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Samples are transported in specialized containers and tested at our lab. Results are delivered digitally within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <BlurGlass className="p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-4">Special Instructions by Sample Type</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-bloodlyf-blue mb-1">Blood Samples</h4>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Most tests require 8-12 hours fasting. Stay hydrated with water only. Avoid exercise 24 hours before some hormone tests.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-bloodlyf-blue mb-1">Urine Samples</h4>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        First morning sample is preferred for most tests. Our technician will provide sterile containers and detailed instructions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-bloodlyf-blue mb-1">Stool Samples</h4>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Special collection containers will be provided in advance. Follow dietary restrictions for certain tests like occult blood.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-bloodlyf-blue mb-1">Swab Samples</h4>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        No special preparation needed. Avoid eating, drinking, or using mouthwash 1 hour before throat swabs.
                      </p>
                    </div>
                  </div>
                </BlurGlass>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Areas We Serve in Trivandrum</h2>
            <p className="text-bloodlyf-taupe/80 mb-6">
              We provide home sample collection services in all major localities across Trivandrum, with special focus on these key neighborhoods:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { area: "Kowdiar", response: "Within 30 min" },
                { area: "Vellayambalam", response: "Within 30 min" },
                { area: "Sasthamangalam", response: "Within 30 min" },
                { area: "Pattom", response: "Within 30 min" },
                { area: "Medical College", response: "Within 45 min" },
                { area: "Kesavadasapuram", response: "Within 45 min" },
                { area: "Peroorkada", response: "Within 45 min" },
                { area: "Technopark", response: "Within 60 min" },
                { area: "Kazhakkoottam", response: "Within 60 min" },
                { area: "Sreekaryam", response: "Within 45 min" },
                { area: "Palayam", response: "Within 30 min" },
                { area: "Thampanoor", response: "Within 30 min" }
              ].map((location, index) => (
                <BlurGlass key={index} className="p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{location.area}</h3>
                    <span className="text-xs text-bloodlyf-blue bg-bloodlyf-blue/10 px-2 py-0.5 rounded-full">
                      {location.response}
                    </span>
                  </div>
                </BlurGlass>
              ))}
            </div>
            <BlurGlass className="mt-4 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-bloodlyf-blue flex-shrink-0" />
                <p className="text-sm">
                  We also cover all other areas in Trivandrum with a standard response time of 60-90 minutes.
                </p>
              </div>
            </BlurGlass>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Why Choose Our Home Sample Collection</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <BadgeCheck className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expert Technicians</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our sample collection team consists of certified laboratory technicians with specialized training in home collection protocols.
                </p>
              </BlurGlass>
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
                <p className="text-bloodlyf-taupe/80">
                  We use laboratory-grade collection equipment and temperature-controlled transport to ensure sample integrity.
                </p>
              </BlurGlass>
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <CalendarCheck className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Convenient Scheduling</h3>
                <p className="text-bloodlyf-taupe/80">
                  Book appointments from 6 AM to 9 PM, seven days a week, with emergency services available 24/7.
                </p>
              </BlurGlass>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What types of samples can be collected at home?",
                  answer: "We collect all types of diagnostic samples including blood, urine, stool, sputum, and various swabs (throat, nasal, wound). Our technicians are trained in all collection procedures."
                },
                {
                  question: "How is the quality of samples maintained during transport?",
                  answer: "We use specialized temperature-controlled containers and transport boxes for different sample types. Blood samples are transported in vacuum-sealed tubes, while culture samples are kept in special media to preserve microorganisms."
                },
                {
                  question: "Can you collect samples from children and elderly patients?",
                  answer: "Yes, our technicians are specially trained in pediatric and geriatric sample collection techniques. We use appropriate equipment and gentle approaches for these sensitive age groups."
                },
                {
                  question: "What areas in Trivandrum do you cover?",
                  answer: "We serve all areas in Trivandrum with priority service in key localities like Kowdiar, Vellayambalam, Sasthamangalam, and Pattom. We have technicians stationed throughout the city for quick response times."
                },
                {
                  question: "How much does the home sample collection service cost?",
                  answer: "Our home collection service has a convenience fee of ₹100 in addition to the test costs. This fee is waived for orders above ₹999 or for senior citizens and differently-abled individuals."
                }
              ].map((faq, index) => (
                <BlurGlass key={index} className="p-5 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-bloodlyf-taupe/80">{faq.answer}</p>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12 bg-gradient-to-r from-purple-600/10 to-bloodlyf-blue/10 p-8 rounded-2xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-medium mb-4">Ready to Book Your Home Sample Collection?</h2>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Experience the convenience and professionalism of our home sample collection service in Trivandrum. Our experts are ready to serve you.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-bloodlyf-blue hover:from-purple-700 hover:to-bloodlyf-darkblue text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Schedule Your Collection Now
              </Button>
              <p className="mt-4 text-sm text-bloodlyf-taupe/60">
                Same-day appointments available • All sample types • Results within 24 hours
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

export default HomeSampleCollection;
