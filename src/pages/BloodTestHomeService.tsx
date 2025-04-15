
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
import { MapPin, Clock, BadgeCheck, Star, ShoppingCart, CheckCircle, FileText, Award, Truck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const popularPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 599,
    tests: ["Complete Blood Count", "Blood Glucose", "Lipid Profile"],
    popular: true,
    discount: "10% off"
  },
  {
    id: 2,
    name: "Comprehensive Package",
    price: 1499,
    tests: ["CBC", "Liver Function", "Kidney Function", "Thyroid Profile", "Vitamin D"],
    popular: true,
    discount: "15% off"
  },
  {
    id: 3,
    name: "Diabetes Care",
    price: 899,
    tests: ["Fasting Glucose", "HbA1c", "Kidney Function", "Lipid Profile"],
    popular: false,
    discount: "5% off"
  }
];

const testimonials = [
  {
    name: "Arjun Nair",
    location: "Kowdiar, Trivandrum",
    rating: 5,
    comment: "The service was excellent. The phlebotomist arrived on time, was very professional, and the entire process was quick and painless."
  },
  {
    name: "Meera Pillai",
    location: "Vazhuthacaud, Trivandrum",
    rating: 5,
    comment: "As a senior citizen, visiting labs is difficult. This service has been a blessing. Professional, courteous staff and prompt reporting."
  },
  {
    name: "Thomas Joseph",
    location: "Pattom, Trivandrum",
    rating: 4,
    comment: "Very convenient service. The technician was skilled and the blood collection was painless. Reports were received within 24 hours as promised."
  }
];

const BloodTestHomeService = () => {
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
        <title>Affordable Blood Test Home Service in Kerala | Trivandrum's Trusted Provider</title>
        <meta name="description" content="Save time and money with our premium blood test home service in Kerala. Specializing in Trivandrum with trained phlebotomists and digital reports within 24 hours." />
        <meta name="keywords" content="blood test at home, Kerala lab services, home diagnostics, convenient testing, health checkup packages, diagnostic tests, medical examination, pathology services" />
        <link rel="canonical" href="https://bloodlyf.com/blood-test-home-service-kerala" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Blood Test Home Service Kerala",
              "description": "Professional blood testing services at your home throughout Kerala with focus on Trivandrum",
              "usesDevice": {
                "@type": "MedicalDevice",
                "name": "Blood Collection Equipment"
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "BloodLyf Home Services",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Medical College Road",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "postalCode": "695011",
                  "addressCountry": "IN"
                },
                "telephone": "+919876543210",
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Kerala"
                  },
                  {
                    "@type": "City",
                    "name": "Trivandrum"
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
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-blue mb-2">
                Premium Home Service
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Affordable Blood Test Home Service in Kerala
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Save time and money with our premium blood testing service that comes to your doorstep. We specialize in Trivandrum and serve all major locations across Kerala with trained phlebotomists and quick result delivery.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Kerala's most trusted home collection service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Digital reports within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-bloodlyf-blue" />
                  <span>Serving Trivandrum and all major Kerala cities</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                  onClick={() => document.getElementById('home-collection-popup')?.click()}
                >
                  Book Home Service
                </Button>
                <Button 
                  variant="outline"
                  className="w-full md:w-auto"
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Packages
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Blood test being conducted at home by healthcare professional in Trivandrum, Kerala" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <BlurGlass className="p-6 rounded-xl">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-bloodlyf-blue mb-2">5000+</div>
                  <p className="text-sm text-bloodlyf-taupe/70">Monthly Home Collections</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bloodlyf-blue mb-2">98%</div>
                  <p className="text-sm text-bloodlyf-taupe/70">On-Time Appointments</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bloodlyf-blue mb-2">4.9/5</div>
                  <p className="text-sm text-bloodlyf-taupe/70">Customer Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bloodlyf-blue mb-2">35+</div>
                  <p className="text-sm text-bloodlyf-taupe/70">Service Locations</p>
                </div>
              </div>
            </BlurGlass>
          </div>
          
          <div id="packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Popular Test Packages with Special Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {popularPackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl relative overflow-hidden">
                  {pkg.discount && (
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
                      {pkg.discount}
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium">{pkg.name}</h3>
                      {pkg.popular && (
                        <span className="text-xs px-2 py-1 bg-bloodlyf-blue/10 text-bloodlyf-blue rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="mt-4 mb-3">
                      <span className="text-2xl font-bold">₹{pkg.price}</span>
                      <span className="text-sm text-bloodlyf-taupe/60 ml-2">including home visit</span>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <p className="text-sm font-medium mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {pkg.tests.map((test, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => handleAddToCart(pkg.name)}
                      className="flex items-center gap-1 flex-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue flex-1"
                      onClick={() => document.getElementById('home-collection-popup')?.click()}
                    >
                      Book Now
                    </Button>
                  </div>
                </BlurGlass>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="#" className="text-bloodlyf-blue hover:text-bloodlyf-darkblue inline-flex items-center gap-1 text-sm font-medium">
                View all 20+ packages
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mb-12 grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-serif font-medium mb-6">Why Choose Our Blood Test Home Service</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center">
                    <BadgeCheck className="h-6 w-6 text-bloodlyf-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Certified Professionals</h3>
                    <p className="text-bloodlyf-taupe/80">
                      Our team consists of NABH-certified phlebotomists with specialized training in home collection. Each technician has at least 5 years of experience and undergoes regular skill assessments.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-bloodlyf-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Accurate Reports</h3>
                    <p className="text-bloodlyf-taupe/80">
                      All samples are tested in our NABL-accredited laboratory using state-of-the-art equipment. Each test undergoes multiple quality checks to ensure accurate results.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-bloodlyf-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Extensive Coverage</h3>
                    <p className="text-bloodlyf-taupe/80">
                      We provide home blood test services throughout Kerala with special focus on Trivandrum. Our service network includes all major cities and many rural areas with prompt response times.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-bloodlyf-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Quick Turnaround</h3>
                    <p className="text-bloodlyf-taupe/80">
                      Standard test results are delivered digitally within 24 hours. Express service with 6-hour reporting is available for urgent cases. All reports include doctor's interpretation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <BlurGlass className="p-6 rounded-xl h-full">
                <h3 className="text-xl font-medium mb-4">Customer Testimonials</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="pb-4 border-b border-bloodlyf-beige/20 last:border-0 last:pb-0">
                      <div className="flex items-center mb-1">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm italic mb-2">"{testimonial.comment}"</p>
                      <div className="text-sm">
                        <span className="font-medium">{testimonial.name}</span>
                        <span className="text-bloodlyf-taupe/60"> - {testimonial.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="#" className="text-bloodlyf-blue hover:text-bloodlyf-darkblue text-sm font-medium">
                    Read more reviews
                  </Link>
                </div>
              </BlurGlass>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Service Locations in Kerala</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { city: "Trivandrum", response: "Same Day" },
                { city: "Kollam", response: "Same Day" },
                { city: "Kochi", response: "Same Day" },
                { city: "Thrissur", response: "Next Day" },
                { city: "Kozhikode", response: "Next Day" },
                { city: "Alappuzha", response: "Next Day" },
                { city: "Kottayam", response: "Next Day" },
                { city: "Palakkad", response: "Next Day" }
              ].map((location, index) => (
                <BlurGlass key={index} className="p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{location.city}</h3>
                    <span className="text-xs bg-bloodlyf-blue/10 text-bloodlyf-blue px-2 py-0.5 rounded-full">
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
                  We also serve other cities and towns across Kerala. Contact us for availability in your location.
                </p>
              </div>
            </BlurGlass>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">How Our Home Service Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">1</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Book Service</h3>
                <p className="text-bloodlyf-taupe/80">
                  Schedule your preferred date and time online or via phone. Choose your tests or packages.
                </p>
              </div>
              <div className="bg-bloodlyf-beige/10 p-6 rounded-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-bloodlyf-blue rounded-full flex items-center justify-center text-white font-medium">2</div>
                <h3 className="text-lg font-medium mb-2 mt-3">Home Visit</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our phlebotomist arrives at your location with all necessary equipment and safety gear.
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
                <h3 className="text-lg font-medium mb-2 mt-3">Results Delivery</h3>
                <p className="text-bloodlyf-taupe/80">
                  Receive digital reports via email or app within 24 hours with doctor's interpretation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What makes your blood test home service affordable?",
                  answer: "We've optimized our operations to reduce overhead costs while maintaining quality. We offer competitive pricing, package discounts, and free home collection for orders above ₹999. Regular promotions provide additional savings."
                },
                {
                  question: "How soon can I get blood tests done at home?",
                  answer: "In Trivandrum, Kollam, and Kochi, we offer same-day service with slots available throughout the day. For other cities, we typically require 24 hours notice. Emergency services are available in select locations."
                },
                {
                  question: "Are there any additional charges for home collection?",
                  answer: "We charge a nominal convenience fee of ₹100 for home collection, which is waived for orders above ₹999. There are no hidden costs, and all prices are transparent and inclusive of taxes."
                },
                {
                  question: "How is the quality of home-collected samples maintained?",
                  answer: "Our technicians use vacuum-sealed collection tubes and temperature-controlled transport containers. Samples are processed within the recommended timeframe at our NABL-accredited laboratory."
                },
                {
                  question: "Do you offer any special services for senior citizens?",
                  answer: "Yes, we provide priority scheduling for senior citizens and offer a 10% discount on all tests. Our technicians are trained to handle elderly patients with special care and patience."
                },
                {
                  question: "How can I pay for the service?",
                  answer: "We accept multiple payment methods including cash, credit/debit cards, UPI, and digital wallets. You can pay at the time of sample collection or pre-pay during online booking."
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
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-medium mb-4">Ready for Convenient and Affordable Blood Testing?</h2>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Experience the ease of professional blood tests at your doorstep with our premium home service.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-bloodlyf-blue hover:from-purple-700 hover:to-bloodlyf-darkblue text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('home-collection-popup')?.click()}
              >
                Book Your Home Blood Test Now
              </Button>
              <p className="mt-4 text-sm text-bloodlyf-taupe/60">
                Special discounts available • Digital reports within 24 hours • 7 days service
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

export default BloodTestHomeService;
