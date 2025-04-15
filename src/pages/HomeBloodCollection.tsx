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
import { MapPin, Clock, Phone, CalendarCheck, BadgeCheck, Star, ShoppingCart, CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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
    name: "Thyroid Function Test",
    price: 499,
    description: "Assesses thyroid gland function by measuring hormone levels in your blood.",
    popular: false
  },
  {
    id: 3,
    name: "Diabetes Screening",
    price: 399,
    description: "Checks blood glucose levels to screen for diabetes and prediabetes.",
    popular: true
  },
  {
    id: 4,
    name: "Lipid Profile",
    price: 449,
    description: "Measures cholesterol levels and triglycerides to assess heart health.",
    popular: false
  }
];

const HomeBloodCollection = () => {
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
        <title>Professional Home Blood Collection Services in Trivandrum | Same-Day Results</title>
        <meta name="description" content="Trust our certified phlebotomists for safe, convenient home blood collection in Trivandrum. Book online, get samples collected at your doorstep, and receive digital reports within 24 hours." />
        <meta name="keywords" content="home blood collection, Trivandrum blood test, doorstep blood sample, medical home service, blood test at home, diagnostic service, sample collection, healthcare" />
        <link rel="canonical" href="https://bloodlyf.com/home-blood-collection-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BloodLyf Home Collection Services",
              "description": "Professional home blood collection services in Trivandrum with same-day results",
              "url": "https://bloodlyf.com/home-blood-collection-trivandrum",
              "logo": "https://bloodlyf.com/images/logo.png",
              "image": "https://bloodlyf.com/images/home-collection.jpg",
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
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "06:00",
                "closes": "22:00"
              },
              "areaServed": ["Trivandrum", "Kowdiar", "Vellayambalam", "Pattom", "Kesavadasapuram", "Medical College", "Ulloor", "Technopark", "Kazhakkoottam", "Sreekaryam"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Blood Collection Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Blood Tests",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTest",
                          "name": "Complete Blood Count"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTest",
                          "name": "Thyroid Function Test"
                        }
                      }
                    ]
                  }
                ]
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
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Professional Home Blood Collection Services in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                We bring laboratory-quality blood collection services right to your doorstep in Trivandrum. Our team of certified phlebotomists ensures a safe, painless experience with fast and accurate results delivered digitally within 24 hours.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-bloodlyf-blue" />
                  <span>NABH-certified phlebotomists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Same-day collection, results within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Serving all areas in Trivandrum (695001-695043)</span>
                </div>
              </div>
              <BlurGlass 
                className="w-full md:w-auto px-6 py-3 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-300 bg-bloodlyf-blue/90 text-white border border-white/30"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Home Collection Now
              </BlurGlass>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Certified phlebotomist performing home blood collection in Trivandrum" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Why Choose Our Home Blood Collection Service</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Certified Professionals</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our phlebotomists are NABH certified with extensive training in venipuncture techniques.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Quick Turnaround</h3>
                <p className="text-bloodlyf-taupe/80">
                  Digital reports within 24 hours, with urgent tests available in just 4-6 hours.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-bloodlyf-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">5-Star Service</h3>
                <p className="text-bloodlyf-taupe/80">
                  Rated 4.9/5 by Trivandrum residents for our reliable and professional service.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Home Blood Collection Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">1</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Book Appointment</h3>
                <p className="text-bloodlyf-taupe/80">
                  Schedule a convenient time for blood collection through our online booking system or by phone.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">2</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Phlebotomist Visit</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our certified phlebotomist arrives at your home with all necessary equipment and safety gear.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">3</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Sample Collection</h3>
                <p className="text-bloodlyf-taupe/80">
                  Blood sample is collected following strict protocols and transported in temperature-controlled containers.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">4</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Digital Reports</h3>
                <p className="text-bloodlyf-taupe/80">
                  Receive your test results digitally within 24 hours, with expert interpretation available.
                </p>
              </div>
            </div>
          </div>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Popular Blood Test Packages</h2>
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
            <h2 className="text-2xl font-serif font-medium mb-6">Areas We Serve in Trivandrum</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Pattom", "Kowdiar", "Vellayambalam", "Kesavadasapuram", "Peroorkada", 
                "Medical College", "Ulloor", "Technopark", "Kazhakkoottam", "Sreekaryam",
                "Sasthamangalam", "Vazhuthacaud", "Thampanoor", "Fort", "Chalai",
                "Statue", "PMG", "Palayam", "Thiruvananthapuram Central", "Poojappura"
              ].map((area, index) => (
                <div key={index} className="bg-bloodlyf-beige/20 p-3 rounded-lg text-center">
                  <h3 className="font-medium text-sm">{area}</h3>
                </div>
              ))}
            </div>
            <p className="text-center mt-4 text-sm text-bloodlyf-taupe/80">
              Serving all PIN codes from 695001 to 695043 in Trivandrum district
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Menon",
                  location: "Pattom, Trivandrum",
                  rating: 5,
                  review: "Extremely professional service. The phlebotomist was on time and completed the blood collection in minutes with zero pain. Got my reports the next morning as promised."
                },
                {
                  name: "Lakshmi Nair",
                  location: "Kowdiar, Trivandrum",
                  rating: 5,
                  review: "As a diabetic patient, I need regular testing but find it difficult to visit labs. BloodLyf's home collection has been a blessing. Their staff is well-trained and courteous."
                },
                {
                  name: "Dr. Sunil Kumar",
                  location: "Medical College, Trivandrum",
                  rating: 5,
                  review: "I recommend BloodLyf to many of my patients who can't visit labs easily. Their quality standards are excellent and reports are reliable and timely."
                }
              ].map((testimonial, index) => (
                <BlurGlass key={index} className="p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-bloodlyf-taupe/60">{testimonial.location}</p>
                  </div>
                </BlurGlass>
              ))}
            </div>
          </div>
          
          <div className="mb-12 bg-gradient-to-r from-purple-600/10 to-bloodlyf-blue/10 p-8 rounded-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-medium mb-4">Ready for a Convenient Blood Test Experience?</h2>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Book your home blood collection today and experience the ease, comfort, and reliability of BloodLyf's premium healthcare service.
              </p>
              <BlurGlass 
                className="bg-gradient-to-r from-purple-600 to-bloodlyf-blue text-white px-8 py-4 rounded-full cursor-pointer hover:shadow-lg shadow-md transition-all duration-300 border border-white/30 inline-block"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Your Home Collection Now
              </BlurGlass>
              <p className="mt-4 text-sm text-bloodlyf-taupe/60">
                No hidden charges • Transparent pricing • Reports within 24 hours
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How much does home blood collection cost in Trivandrum?",
                  answer: "Our home blood collection service in Trivandrum has a nominal convenience fee of ₹100 in addition to the test costs. However, this fee is waived for orders above ₹999 or if you book multiple tests."
                },
                {
                  question: "How long does the blood collection process take?",
                  answer: "The actual blood drawing procedure typically takes only 5-10 minutes. Our phlebotomist might spend about 15-20 minutes total at your location to ensure proper documentation and sample handling."
                },
                {
                  question: "Do I need to prepare before the blood collection?",
                  answer: "For most blood tests, fasting for 8-12 hours is recommended. We'll inform you about any specific preparation needed when you book your appointment. Drinking water is usually encouraged before the test."
                },
                {
                  question: "How are the blood samples transported?",
                  answer: "We use temperature-controlled transport containers that maintain the integrity of your blood sample. Our logistics system ensures samples reach our laboratory within the optimal timeframe for testing."
                },
                {
                  question: "How will I receive my test results?",
                  answer: "Test results are delivered digitally through email or our secure patient portal within 24 hours. For urgent tests, we can provide results within 4-6 hours for an additional express fee."
                }
              ].map((faq, index) => (
                <BlurGlass key={index} className="p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-bloodlyf-taupe/80">{faq.answer}</p>
                </BlurGlass>
              ))}
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

export default HomeBloodCollection;
