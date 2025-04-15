
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, Stethoscope, ShieldCheck, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const healthPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 99,
    description: "Essential health screening with basic blood tests and vital measurements.",
    popular: true,
    tests: [
      "Complete Blood Count", 
      "Blood Sugar (Fasting)", 
      "Lipid Profile", 
      "Liver Function Test", 
      "Kidney Function Test"
    ]
  },
  {
    id: 2,
    name: "Comprehensive Wellness Package",
    price: 199,
    description: "Thorough health assessment with advanced tests and detailed reports.",
    popular: false,
    tests: [
      "Complete Blood Count", 
      "Blood Sugar (Fasting & PP)", 
      "HbA1c", 
      "Complete Lipid Profile", 
      "Liver & Kidney Function Tests", 
      "Thyroid Profile", 
      "Vitamin B12 & D3", 
      "Urine Analysis"
    ]
  }
];

const HealthCheckup = () => {
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
        <title>Thorough Health Checkup at Home in Kerala | Trivandrum's Premier Service</title>
        <meta name="description" content="Our comprehensive health checkup at home service in Kerala brings preventive healthcare to your doorstep. Specializing in Trivandrum with complete test packages." />
        <meta name="keywords" content="health checkup at home Kerala, home health screening, Kerala medical checkup, preventive healthcare, doorstep diagnostics, wellness testing, medical examination, disease prevention, health monitoring" />
        <link rel="canonical" href="https://bloodlyf.com/health-checkup-at-home-kerala" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "BloodLyf Health Checkup at Home",
              "description": "Comprehensive health checkup at home service in Kerala",
              "relevantSpecialty": "Preventive Healthcare",
              "provider": {
                "@type": "Service",
                "name": "BloodLyf Home Collection",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Technopark",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695581",
                  "addressCountry": "IN"
                }
              },
              "areaServed": {
                "@type": "State",
                "name": "Kerala, India"
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
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-2">
                Kerala
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Thorough Health Checkup at Home in Kerala
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Experience the convenience of comprehensive health checkups in the comfort of your home. Our preventive healthcare packages help you monitor your health status and detect potential issues early.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Serving all major districts in Kerala, specializing in Trivandrum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Reports delivered within 24-48 hours</span>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Health Packages
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare professional conducting health checkup at patient's home in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Benefits of Home Health Checkups</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Convenience</h3>
                <p className="text-bloodlyf-taupe/80">
                  No waiting in queues or traveling to multiple facilities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Stethoscope className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Personalized Care</h3>
                <p className="text-bloodlyf-taupe/80">
                  One-on-one attention from healthcare professionals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Early Detection</h3>
                <p className="text-bloodlyf-taupe/80">
                  Identify potential health issues before they become serious.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Health Checkup Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {healthPackages.map((pkg) => (
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
                    <h4 className="font-medium mb-2">Included Tests:</h4>
                    <ul className="list-disc list-inside text-bloodlyf-taupe/80 space-y-1">
                      {pkg.tests.map((test, index) => (
                        <li key={index}>{test}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-medium">${pkg.price}</span>
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
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-bloodlyf-blue">1</span>
                </div>
                <h3 className="font-medium mb-2">Book Appointment</h3>
                <p className="text-bloodlyf-taupe/80 text-sm">
                  Schedule a convenient time for your health checkup.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-bloodlyf-blue">2</span>
                </div>
                <h3 className="font-medium mb-2">Home Visit</h3>
                <p className="text-bloodlyf-taupe/80 text-sm">
                  Our healthcare professionals visit your home.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-bloodlyf-blue">3</span>
                </div>
                <h3 className="font-medium mb-2">Sample Collection</h3>
                <p className="text-bloodlyf-taupe/80 text-sm">
                  Painless sample collection by trained phlebotomists.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-bloodlyf-blue">4</span>
                </div>
                <h3 className="font-medium mb-2">Results & Analysis</h3>
                <p className="text-bloodlyf-taupe/80 text-sm">
                  Receive digital reports with expert interpretation.
                </p>
              </div>
            </div>
          </div>
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Take Control of Your Health Today</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Regular health checkups are essential for preventive healthcare. Book your home health checkup today and take the first step towards a healthier future.
            </p>
            <Button 
              className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Book Health Checkup
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
      <HomeCollectionBooking />
      <Toaster />
    </div>
  );
};

export default HealthCheckup;
