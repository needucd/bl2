
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, ShieldCheck, CheckCircle, Car, CalendarCheck, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const districts = [
  { name: "Trivandrum", responseTime: "Same Day", popular: true },
  { name: "Kollam", responseTime: "Same Day", popular: true },
  { name: "Pathanamthitta", responseTime: "Next Day", popular: false },
  { name: "Alappuzha", responseTime: "Next Day", popular: false },
  { name: "Kottayam", responseTime: "Next Day", popular: false },
  { name: "Idukki", responseTime: "Within 48 hours", popular: false },
  { name: "Ernakulam", responseTime: "Next Day", popular: true },
  { name: "Thrissur", responseTime: "Next Day", popular: false },
  { name: "Palakkad", responseTime: "Within 48 hours", popular: false },
  { name: "Malappuram", responseTime: "Within 48 hours", popular: false },
  { name: "Kozhikode", responseTime: "Next Day", popular: true },
  { name: "Wayanad", responseTime: "Within 48 hours", popular: false },
  { name: "Kannur", responseTime: "Next Day", popular: false },
  { name: "Kasaragod", responseTime: "Within 48 hours", popular: false },
];

const testPackages = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    price: 299,
    description: "Essential blood test that measures different components of your blood.",
    popular: true
  },
  {
    id: 2,
    name: "Comprehensive Health Package",
    price: 1499,
    description: "Complete health assessment with 40+ parameters including thyroid, vitamin levels, and liver function.",
    popular: true
  },
  {
    id: 3,
    name: "Diabetes Care Package",
    price: 899,
    description: "Specialized package for diabetes monitoring with glucose analysis and kidney function.",
    popular: false
  }
];

const DoorstepBloodCollection = () => {
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
        <title>Reliable Doorstep Blood Collection Service Across Kerala | Trivandrum Specialists</title>
        <meta name="description" content="Experience hassle-free doorstep blood collection throughout Kerala with our trained technicians. Serving Trivandrum and surrounding districts with premium diagnostic services." />
        <meta name="keywords" content="doorstep collection, Kerala diagnostic services, home sample collection, medical tests, health testing, pathology service, lab diagnostics, mobile collection" />
        <link rel="canonical" href="https://bloodlyf.com/doorstep-blood-collection-kerala" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Doorstep Blood Collection Service Kerala",
              "serviceType": "Medical Diagnostic Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "BloodLyf Diagnostics",
                "telephone": "+919876543210",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Medical College Junction",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695011",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 8.5241,
                  "longitude": 76.9366
                }
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Kerala"
                },
                {
                  "@type": "City",
                  "name": "Trivandrum"
                },
                {
                  "@type": "City",
                  "name": "Kollam"
                },
                {
                  "@type": "City",
                  "name": "Ernakulam"
                }
              ],
              "description": "Professional doorstep blood collection services across Kerala with focus on Trivandrum and major districts.",
              "offers": {
                "@type": "Offer",
                "price": "299",
                "priceCurrency": "INR"
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
                Serving All Districts in Kerala
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Reliable Doorstep Blood Collection Service Across Kerala
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Experience hassle-free diagnostic services with our statewide doorstep blood collection. Our network of trained technicians provides premium sample collection throughout Kerala, with special focus on quality service in Trivandrum.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <MapPin className="h-5 w-5" />
                    <span>Kerala-Wide Service</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Coverage across all 14 districts</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <Car className="h-5 w-5" />
                    <span>Mobile Collection</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Fully equipped mobile units</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <ShieldCheck className="h-5 w-5" />
                    <span>NABL Certified</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Highest quality standards</p>
                </div>
                <div className="bg-bloodlyf-beige/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-bloodlyf-blue font-medium mb-1">
                    <Clock className="h-5 w-5" />
                    <span>Quick Turnaround</span>
                  </div>
                  <p className="text-sm text-bloodlyf-taupe/80">Results in 24-48 hours</p>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Doorstep Collection
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mobile blood collection service reaching doorstep in Trivandrum, Kerala" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Districts We Serve in Kerala</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {districts.map((district) => (
                <BlurGlass key={district.name} className="p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{district.name}</h3>
                    {district.popular && (
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-bloodlyf-blue" />
                    <span>{district.responseTime} Response</span>
                  </div>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Doorstep Collection Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">1</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Book Your Test</h3>
                <p className="text-bloodlyf-taupe/80">
                  Schedule via website, app, or call center. Select tests and provide your location details.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">2</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Technician Visit</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our trained phlebotomist arrives at your location with proper equipment and safety gear.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">3</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Sample Collection</h3>
                <p className="text-bloodlyf-taupe/80">
                  Blood sample collected following strict protocols in temperature-controlled containers.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">4</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Results Delivery</h3>
                <p className="text-bloodlyf-taupe/80">
                  Digital reports delivered via email or app within the promised timeframe.
                </p>
              </div>
            </div>
          </div>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Popular Test Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                    <span className="text-xl font-medium">₹{pkg.price}</span>
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
          
          <div className="mb-12 bg-gradient-to-r from-purple-600/10 to-bloodlyf-blue/10 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">Why Choose Our Doorstep Blood Collection</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Statewide Coverage</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        We serve all districts in Kerala with specialized focus on major cities like Trivandrum, Kollam, and Ernakulam.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Trained Professionals</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Our team consists of certified phlebotomists with extensive experience in mobile sample collection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Sample Integrity</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        We use specialized transport containers to maintain temperature and ensure sample quality during transit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Digital Reports</h3>
                      <p className="text-sm text-bloodlyf-taupe/80">
                        Get your results digitally with detailed analysis and doctor interpretation available.
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="mt-6 bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                  onClick={() => document.getElementById('home-collection-popup')?.click()}
                >
                  Book Your Collection Now
                </Button>
              </div>
              <div className="p-6 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">What our customers say</h3>
                    <BlurGlass className="p-4 rounded-lg">
                      <p className="text-sm italic mb-2">"The service was excellent. The phlebotomist arrived on time, was very professional, and made the process painless. The reports were delivered as promised."</p>
                      <p className="text-sm font-medium">- Suresh Kumar, Trivandrum</p>
                    </BlurGlass>
                  </div>
                  <div>
                    <BlurGlass className="p-4 rounded-lg">
                      <p className="text-sm italic mb-2">"I needed urgent tests done while in Kollam. BloodLyf arranged same-day collection and provided results the next morning. Very reliable service."</p>
                      <p className="text-sm font-medium">- Priya Thomas, Kollam</p>
                    </BlurGlass>
                  </div>
                  <div>
                    <BlurGlass className="p-4 rounded-lg">
                      <p className="text-sm italic mb-2">"As someone living in a remote area of Wayanad, finding quality diagnostic services was challenging until I discovered BloodLyf's doorstep collection."</p>
                      <p className="text-sm font-medium">- Mohammed Ali, Wayanad</p>
                    </BlurGlass>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Special Services for Trivandrum Residents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Same-Day Service</h3>
                <p className="text-bloodlyf-taupe/80">
                  Trivandrum residents enjoy same-day collection and priority processing with results available within 24 hours.
                </p>
              </BlurGlass>
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <BadgeCheck className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Premium Technicians</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our most experienced phlebotomists are assigned to Trivandrum collections, ensuring the highest quality service.
                </p>
              </BlurGlass>
              <BlurGlass className="p-6 rounded-xl">
                <div className="w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-4">
                  <CalendarCheck className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Flexible Scheduling</h3>
                <p className="text-bloodlyf-taupe/80">
                  Trivandrum customers can book appointments from 6 AM to 9 PM, seven days a week, including holidays.
                </p>
              </BlurGlass>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How soon can I get doorstep blood collection in Trivandrum?",
                  answer: "For Trivandrum residents, we offer same-day service with appointments available throughout the day from 6 AM to 9 PM. In urgent cases, we can arrange collection within 60-90 minutes."
                },
                {
                  question: "What about doorstep collection in other districts of Kerala?",
                  answer: "We serve all 14 districts in Kerala with next-day service in most major cities like Kollam, Ernakulam, and Kozhikode. For remote areas in districts like Idukki, Wayanad, and Kasaragod, we typically need 48 hours notice."
                },
                {
                  question: "How is the sample quality maintained during transport?",
                  answer: "We use specialized temperature-controlled containers and follow strict sample handling protocols. Our mobile collection units are equipped with portable refrigeration to ensure sample integrity during transport to our laboratory."
                },
                {
                  question: "Is there an extra charge for doorstep collection in remote areas?",
                  answer: "For locations within city limits, we charge a standard doorstep collection fee of ₹100 (waived for orders above ₹999). For remote locations that require extended travel, a small additional fee may apply based on distance."
                },
                {
                  question: "How are the test results delivered?",
                  answer: "Test results are delivered digitally via email or our secure patient portal within the promised timeframe. Physical copies can be arranged upon request. For critical results, our doctor may contact you directly."
                }
              ].map((faq, index) => (
                <BlurGlass key={index} className="p-5 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-bloodlyf-taupe/80">{faq.answer}</p>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Ready to Book Your Doorstep Collection?</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Experience the convenience of professional blood collection at your doorstep anywhere in Kerala.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-bloodlyf-blue hover:from-purple-700 hover:to-bloodlyf-darkblue text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Book Your Doorstep Collection Now
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

export default DoorstepBloodCollection;
