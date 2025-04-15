import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, Award, Star, Shield, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const testPackages = [
  {
    id: 1,
    name: "Premium CBC Test",
    price: 599,
    description: "High-precision Complete Blood Count with expert interpretation.",
    popular: true
  },
  {
    id: 2,
    name: "Gold Standard Thyroid Profile",
    price: 799,
    description: "Comprehensive thyroid assessment with advanced analytics.",
    popular: false
  }
];

const BestHomeBloodTest = () => {
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
        <title>Best Home Blood Test Service in Trivandrum | Accurate Results Guaranteed</title>
        <meta name="description" content="Choose the best home blood test service in Trivandrum with our certified technicians, state-of-the-art equipment, and doctor-reviewed reports." />
        <meta name="keywords" content="best home blood test Trivandrum, top blood testing service, premium home diagnostics, Trivandrum lab tests, quality healthcare, medical diagnostics, health screening, laboratory services, pathology testing" />
        <link rel="canonical" href="https://bloodlyf.com/best-home-blood-test-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "BloodLyf Premium Blood Testing",
              "description": "The best home blood test service in Trivandrum with guaranteed accuracy",
              "relevantSpecialty": "Pathology",
              "provider": {
                "@type": "LocalBusiness",
                "name": "BloodLyf",
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
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Dr. Anoop R"
                },
                "reviewBody": "The most reliable blood testing service in Trivandrum with exceptional accuracy."
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
                Premium Service
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Best Home Blood Test Service in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Experience the highest quality blood testing service, right at your doorstep. We pride ourselves on exceptional accuracy, advanced equipment, and unmatched expertise in home blood collection.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Rated #1 home blood testing service in Trivandrum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-bloodlyf-blue" />
                  <span>99.8% accuracy rate, verified by independent labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-bloodlyf-blue" />
                  <span>NABL and ISO certified processing</span>
                </div>
              </div>
              <BlurGlass 
                className="w-full md:w-auto px-6 py-3 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-300 bg-bloodlyf-blue/90 text-white border border-white/30"
                onClick={() => document.getElementById('premium-packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Premium Services
              </BlurGlass>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional conducting high-quality blood test at customer's home in Trivandrum" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">What Makes Us the Best</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Premium Equipment</h3>
                <p className="text-bloodlyf-taupe/80">
                  We use only the highest quality German and Japanese equipment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expert Technicians</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our phlebotomists have a minimum of 5 years of experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Doctor Reviewed</h3>
                <p className="text-bloodlyf-taupe/80">
                  All reports are reviewed by specialist pathologists.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div id="premium-packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Premium Test Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testPackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl border-2 border-bloodlyf-blue/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        Top Rated
                      </span>
                    )}
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-medium">₹{pkg.price}</span>
                    <div className="flex gap-2">
                      <BlurGlass
                        onClick={() => handleAddToCart(pkg.name)}
                        className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </BlurGlass>
                      <BlurGlass 
                        className="bg-bloodlyf-blue/90 text-white px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 border border-white/30"
                        onClick={() => document.getElementById('home-collection-popup')?.click()}
                      >
                        Book Now
                      </BlurGlass>
                    </div>
                  </div>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Quality Guarantee</h2>
            <BlurGlass className="p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Accuracy Promise</h3>
                  <p className="text-bloodlyf-taupe/80 mb-4">
                    We guarantee 99.8% accuracy in all our test results. If you find any discrepancy, we'll retest for free and refund your money if we're proven wrong.
                  </p>
                  <h3 className="text-xl font-medium mb-3">Premium Materials</h3>
                  <p className="text-bloodlyf-taupe/80">
                    We use only the highest quality vacuum-sealed collection tubes and single-use equipment to ensure sample integrity and your safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Advanced Processing</h3>
                  <p className="text-bloodlyf-taupe/80 mb-4">
                    Your samples are processed in our state-of-the-art laboratory with the latest automation technology for consistent, reliable results.
                  </p>
                  <h3 className="text-xl font-medium mb-3">Expert Interpretation</h3>
                  <p className="text-bloodlyf-taupe/80">
                    All reports include doctor's notes explaining your results in plain language, with personalized insights about your health.
                  </p>
                </div>
              </div>
            </BlurGlass>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-5 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-bloodlyf-taupe/80 mb-3">
                  "The most professional blood collection service I've experienced. The technician was punctual, courteous, and made the process painless."
                </p>
                <div className="font-medium">- Dr. Thomas K., Cardiologist</div>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-bloodlyf-taupe/80 mb-3">
                  "As someone who hates needles, I was nervous about the home blood test. The phlebotomist was so skilled I barely felt anything. Amazing service!"
                </p>
                <div className="font-medium">- Priya S., Pattom</div>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-bloodlyf-taupe/80 mb-3">
                  "The detailed reports with doctor's interpretation helped me understand my health better than any test I've done before. Worth every penny."
                </p>
                <div className="font-medium">- Rajesh M., Technopark</div>
              </BlurGlass>
            </div>
          </div>
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Experience the Best Blood Testing Service</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Don't settle for less when it comes to your health. Book your premium blood test today and experience the difference quality makes.
            </p>
            <BlurGlass 
              className="w-full md:w-auto inline-flex px-8 py-4 rounded-full cursor-pointer hover:shadow-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-bloodlyf-blue text-white border border-white/30"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Book Premium Test
            </BlurGlass>
          </div>
        </div>
      </main>
      
      <Footer />
      <HomeCollectionBooking />
      <Toaster />
    </div>
  );
};

export default BestHomeBloodTest;
