
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, Navigation, ShoppingCart } from 'lucide-react';
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

const locations = [
  { name: "Pattom", response: "10 min" },
  { name: "Kesavadasapuram", response: "15 min" },
  { name: "Medical College", response: "15 min" },
  { name: "Vellayambalam", response: "20 min" },
  { name: "Palayam", response: "20 min" },
  { name: "Technopark", response: "25 min" },
  { name: "Kazhakootam", response: "30 min" },
  { name: "Sreekaryam", response: "25 min" }
];

const BloodSampleCollection = () => {
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
        <title>Fast Blood Sample Collection Near You in Trivandrum | Book Today</title>
        <meta name="description" content="Looking for 'blood sample collection near me' in Trivandrum? Our home service covers all areas with quick appointments and trained technicians at your doorstep." />
        <meta name="keywords" content="blood sample collection near me, nearby blood collection, Trivandrum lab services, local blood testing, home diagnostics, phlebotomy services, medical testing, lab work, diagnostic center" />
        <link rel="canonical" href="https://bloodlyf.com/blood-sample-collection-near-me" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BloodLyf Sample Collection",
              "description": "Professional blood sample collection service near you in Trivandrum",
              "image": "https://bloodlyf.com/images/collection-service.jpg",
              "url": "https://bloodlyf.com/blood-sample-collection-near-me",
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Technopark",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "postalCode": "695581",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 8.5583,
                "longitude": 76.8812
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 8.5241,
                  "longitude": 76.9366
                },
                "geoRadius": "25000"
              },
              "priceRange": "₹₹"
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
                Near You
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Fast Blood Sample Collection Near You in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Looking for "blood sample collection near me"? We offer professional blood collection services across Trivandrum with quick response times. Our trained phlebotomists come to your location for safe, convenient sample collection.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Service available in all Trivandrum localities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Quick response times, typically within 30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Nearest technician dispatched to your location</span>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Find Collection Near Me
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584362917157-4164352a9de5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Phlebotomist arriving at residence for blood sample collection in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Why Choose Our Nearby Collection Service</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Proximity</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our collectors are stationed throughout Trivandrum for quick service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Fast Response</h3>
                <p className="text-bloodlyf-taupe/80">
                  Most locations serviced within 10-30 minutes of booking.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Navigation className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">GPS Tracking</h3>
                <p className="text-bloodlyf-taupe/80">
                  Track your technician's arrival in real-time via our app.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Areas We Serve in Trivandrum</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <BlurGlass key={index} className="p-4 rounded-xl text-center">
                  <h3 className="font-medium mb-2">{location.name}</h3>
                  <p className="text-sm text-bloodlyf-taupe/80">Response time: {location.response}</p>
                </BlurGlass>
              ))}
            </div>
            <p className="text-center mt-4 text-bloodlyf-taupe/80">
              And many more locations throughout Trivandrum!
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Popular Tests Available</h2>
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
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Find Blood Collection Near You</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Enter your location to find the nearest available phlebotomist for quick and convenient blood sample collection.
            </p>
            <Button 
              className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Find Nearest Collection
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

export default BloodSampleCollection;
