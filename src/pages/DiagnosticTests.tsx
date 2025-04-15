
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, Star, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const testPackages = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    price: 59,
    description: "Essential blood test that measures different components of your blood.",
    popular: true
  },
  {
    id: 2,
    name: "Thyroid Function Test",
    price: 75,
    description: "Assesses thyroid gland function by measuring hormone levels in your blood.",
    popular: false
  }
];

const DiagnosticTests = () => {
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
        <title>Comprehensive Diagnostic Tests at Home in Trivandrum | Complete Healthcare Solutions</title>
        <meta name="description" content="Access full range of diagnostic tests at home in Trivandrum with our expert medical team. From basic blood work to specialized testing with accurate, timely results." />
        <meta name="keywords" content="home diagnostics Trivandrum, medical tests at home, doorstep lab services, healthcare testing, blood collection, health screening, pathology services, medical diagnostics" />
        <link rel="canonical" href="https://bloodlyf.com/diagnostic-tests-at-home-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "BloodLyf Diagnostic Tests at Home",
              "description": "Comprehensive diagnostic tests conducted at home in Trivandrum by certified technicians",
              "relevantSpecialty": "Pathology",
              "provider": {
                "@type": "HealthAndBeautyBusiness",
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
                "@type": "City",
                "name": "Trivandrum, Kerala"
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
                Trivandrum
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Comprehensive Diagnostic Tests at Home in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                We offer a complete range of diagnostic tests right at your doorstep in Trivandrum. Our certified technicians ensure accurate sample collection, and our partner labs provide prompt, reliable results.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Serving all areas in Trivandrum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Results within 24-48 hours</span>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Test Packages
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Diagnostic testing equipment being used during home visit in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Why Choose Our Diagnostic Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">NABL Accredited Labs</h3>
                <p className="text-bloodlyf-taupe/80">
                  All samples are tested in certified laboratories with rigorous quality controls.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Quick Turnaround</h3>
                <p className="text-bloodlyf-taupe/80">
                  Get your results digitally within 24-48 hours for most tests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expert Analysis</h3>
                <p className="text-bloodlyf-taupe/80">
                  All results are verified by experienced pathologists before delivery.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Diagnostic Test Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testPackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4">{pkg.description}</p>
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
                        onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth' })}
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
            <h2 className="text-2xl font-serif font-medium mb-6">Types of Diagnostic Tests Available</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Blood Tests</h3>
                <ul className="space-y-2 text-bloodlyf-taupe/80">
                  <li>Complete Blood Count</li>
                  <li>Lipid Profile</li>
                  <li>Liver Function Tests</li>
                  <li>Kidney Function Tests</li>
                  <li>Thyroid Profile</li>
                  <li>Vitamin Assays</li>
                </ul>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Diabetes Tests</h3>
                <ul className="space-y-2 text-bloodlyf-taupe/80">
                  <li>Fasting Blood Glucose</li>
                  <li>Post Prandial Blood Sugar</li>
                  <li>HbA1c</li>
                  <li>Glucose Tolerance Test</li>
                  <li>Insulin Assay</li>
                </ul>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Other Tests</h3>
                <ul className="space-y-2 text-bloodlyf-taupe/80">
                  <li>Urine Analysis</li>
                  <li>Stool Examination</li>
                  <li>ECG at Home</li>
                  <li>Hormone Tests</li>
                  <li>PCR Tests</li>
                </ul>
              </BlurGlass>
            </div>
          </div>
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Ready to Book Your Diagnostic Test?</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Click the "Book Home Collection" button to schedule a visit from our technician. All sample collections are done by trained professionals following strict safety protocols.
            </p>
            <Button 
              className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Schedule Now
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

export default DiagnosticTests;
