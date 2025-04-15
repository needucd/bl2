
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, Phone, CalendarCheck, BadgeCheck, Star, ShoppingCart } from 'lucide-react';
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

const PattomArea = () => {
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
        <title>Blood Test Home Collection in Pattom Area | BloodLyf</title>
        <meta name="description" content="Book professional blood test home collection services in Pattom, Trivandrum. Fast, reliable, and convenient. Trusted by doctors and patients alike." />
        <meta name="keywords" content="blood test Pattom, home collection Trivandrum, phlebotomist Pattom, medical lab Pattom, healthcare Trivandrum" />
        <link rel="canonical" href="https://bloodlyf.com/pattom-area" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "BloodLyf - Pattom Area Blood Test Service",
              "url": "https://bloodlyf.com/pattom-area",
              "description": "Professional blood test home collection services in Pattom, Trivandrum",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "BloodLyf",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Pattom Junction",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695004",
                  "addressCountry": "IN"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Pattom, Trivandrum"
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://bloodlyf.com/book",
                "servicePhone": "+919876543210"
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
                Pattom Area
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Blood Test Home Collection Services in Pattom
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                We offer professional blood collection services right at your doorstep in Pattom, Trivandrum. Our certified phlebotomists ensure a painless experience with fast and accurate results.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Serving all of Pattom and surrounding areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Same-day collection, results within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Call us at +919876543210 for emergency services</span>
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
                src="https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Blood collection service in Pattom" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Why Choose BloodLyf in Pattom?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Certified Professionals</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our phlebotomists are NABH certified with years of experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <CalendarCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Convenient Scheduling</h3>
                <p className="text-bloodlyf-taupe/80">
                  Book your appointment online or via phone, 7 days a week.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Trusted by Locals</h3>
                <p className="text-bloodlyf-taupe/80">
                  Rated 4.9/5 by Pattom residents for our reliable service.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Popular Test Packages in Pattom</h2>
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
            <h2 className="text-2xl font-serif font-medium mb-4">Areas We Serve in Pattom</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">Pattom Junction</h3>
                <p className="text-sm text-bloodlyf-taupe/80">10 min response time</p>
              </div>
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">Kuravankonam</h3>
                <p className="text-sm text-bloodlyf-taupe/80">15 min response time</p>
              </div>
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">Kesavadasapuram</h3>
                <p className="text-sm text-bloodlyf-taupe/80">15 min response time</p>
              </div>
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">Paruthippara</h3>
                <p className="text-sm text-bloodlyf-taupe/80">20 min response time</p>
              </div>
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">PTP Nagar</h3>
                <p className="text-sm text-bloodlyf-taupe/80">20 min response time</p>
              </div>
              <div className="bg-bloodlyf-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-medium mb-1">Kowdiar</h3>
                <p className="text-sm text-bloodlyf-taupe/80">25 min response time</p>
              </div>
            </div>
          </div>
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Ready to Book Your Test?</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Click the "Book Home Collection" button on the right side of your screen to schedule a visit from our phlebotomist. You can also call us directly at +919876543210.
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

export default PattomArea;
