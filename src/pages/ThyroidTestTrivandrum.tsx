
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, BadgeCheck, TestTube, ShieldCheck, ShoppingCart, ChevronRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const thyroidTests = [
  {
    id: 1,
    name: "Thyroid Profile Test",
    price: 79,
    description: "Comprehensive thyroid health assessment including TSH, T3, and T4 tests.",
    popular: true,
    url: "/thyroid-profile-test",
  },
  {
    id: 2,
    name: "Thyroid Function Test",
    price: 59,
    description: "Basic thyroid function evaluation with TSH testing.",
    popular: false,
    url: "/thyroid-function-test",
  },
  {
    id: 3,
    name: "T3 T4 TSH Test",
    price: 99,
    description: "Complete evaluation of all key thyroid hormones for thorough assessment.",
    popular: true,
    url: "/t3-t4-tsh-test-trivandrum",
  }
];

const relatedPages = [
  {
    title: "Thyroid Test Near Me Trivandrum",
    url: "/thyroid-test-near-me-trivandrum",
  },
  {
    title: "Thyroid Test Home Collection Trivandrum",
    url: "/thyroid-test-home-collection-trivandrum",
  },
  {
    title: "Thyroid Test Home Service Kerala",
    url: "/thyroid-test-home-service-kerala",
  },
  {
    title: "Best Thyroid Test Center Trivandrum",
    url: "/best-thyroid-test-center-trivandrum",
  },
  {
    title: "Affordable Thyroid Test Trivandrum",
    url: "/affordable-thyroid-test-trivandrum",
  },
  {
    title: "Thyroid Test Laboratory Trivandrum",
    url: "/thyroid-test-laboratory-trivandrum",
  }
];

const ThyroidTestTrivandrum = () => {
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
        <title>Comprehensive Thyroid Test in Trivandrum | Home Collection Available</title>
        <meta name="description" content="Get accurate thyroid test in Trivandrum with BloodLyf's home collection service. TSH, T3, T4 testing with fast results. Book your thyroid function test today!" />
        <meta name="keywords" content="thyroid test Trivandrum, TSH test, T3 T4 test, thyroid profile, thyroid function, thyroid health, home collection, diagnostic test" />
        <link rel="canonical" href="https://bloodlyf.com/thyroid-test-trivandrum" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "Thyroid Test in Trivandrum",
              "description": "Comprehensive thyroid testing with home sample collection service in Trivandrum",
              "relevantSpecialty": "Endocrinology",
              "usesDevice": {
                "@type": "MedicalDevice",
                "name": "Blood Testing Equipment"
              },
              "study": {
                "@type": "MedicalStudy",
                "studyLocation": {
                  "@type": "Place",
                  "name": "Bloodlyf Diagnostic Service, Trivandrum"
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
          <div className="grid md:grid-cols-7 gap-8">
            {/* Main content - 5 columns */}
            <div className="md:col-span-5">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-2">
                Trivandrum
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Comprehensive Thyroid Test in Trivandrum with Home Collection
              </h1>
              
              <div className="prose prose-bloodlyf max-w-none mb-8">
                <p className="text-lg mb-4">
                  BloodLyf provides thorough thyroid testing services in Trivandrum, with the convenience of sample collection at your home. Our complete thyroid panel includes TSH, T3, T4, and specialized antibody tests to accurately assess your thyroid health.
                </p>
                
                <p className="mb-4">
                  The thyroid gland plays a crucial role in regulating various bodily functions, including metabolism, growth, and development. When thyroid function is disrupted, it can lead to a range of health issues. Regular thyroid testing is essential for early detection and management of thyroid disorders.
                </p>
                
                <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Understanding Thyroid Testing</h2>
                
                <p className="mb-4">
                  Thyroid testing involves measuring the levels of various hormones produced by the thyroid gland and those that regulate its function. The most common thyroid tests include:
                </p>
                
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2"><strong>TSH (Thyroid Stimulating Hormone)</strong>: Produced by the pituitary gland, TSH regulates the production of thyroid hormones. It's often the first test used to evaluate thyroid function.</li>
                  <li className="mb-2"><strong>T4 (Thyroxine)</strong>: The main hormone produced by the thyroid gland. It can be measured as total T4 or free T4 (the active form).</li>
                  <li className="mb-2"><strong>T3 (Triiodothyronine)</strong>: Another hormone produced by the thyroid gland, typically measured when T4 and TSH results are abnormal.</li>
                  <li className="mb-2"><strong>Thyroid Antibodies</strong>: These tests help diagnose autoimmune thyroid conditions such as Hashimoto's thyroiditis or Graves' disease.</li>
                </ul>
                
                <h2 className="text-2xl font-serif font-medium mt-8 mb-4">When to Consider Thyroid Testing</h2>
                
                <p className="mb-4">
                  You should consider thyroid testing if you experience any of the following symptoms:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-medium mb-2">Hypothyroidism Symptoms:</h3>
                    <ul className="list-disc pl-6">
                      <li>Fatigue and weakness</li>
                      <li>Weight gain</li>
                      <li>Cold intolerance</li>
                      <li>Dry skin and hair</li>
                      <li>Constipation</li>
                      <li>Depression</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Hyperthyroidism Symptoms:</h3>
                    <ul className="list-disc pl-6">
                      <li>Weight loss despite increased appetite</li>
                      <li>Rapid heartbeat</li>
                      <li>Heat intolerance</li>
                      <li>Anxiety and irritability</li>
                      <li>Sleep difficulties</li>
                      <li>Tremors</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Thyroid testing is also recommended for individuals with a family history of thyroid disorders, those with certain autoimmune conditions, women planning pregnancy, and adults over 60 years of age.
                </p>
                
                <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Our Thyroid Testing Process</h2>
                
                <p className="mb-4">
                  At BloodLyf, we've simplified the thyroid testing process to provide maximum convenience without compromising on accuracy:
                </p>
                
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2"><strong>Online Booking</strong>: Schedule your thyroid test through our website or app, selecting your preferred date and time for sample collection.</li>
                  <li className="mb-2"><strong>Home Sample Collection</strong>: Our trained phlebotomist visits your location in Trivandrum, collects the blood sample using sterile equipment, and transports it to our lab under controlled conditions.</li>
                  <li className="mb-2"><strong>Laboratory Analysis</strong>: Your sample is processed in our NABL-accredited laboratory using advanced testing equipment for accurate results.</li>
                  <li className="mb-2"><strong>Digital Report Delivery</strong>: Receive your comprehensive thyroid test results digitally within 24-48 hours, with clear reference ranges and interpretations.</li>
                  <li className="mb-2"><strong>Optional Consultation</strong>: If needed, connect with our partnered healthcare providers to discuss your results and determine next steps.</li>
                </ol>
                
                <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Why Choose BloodLyf for Thyroid Testing in Trivandrum</h2>
                
                <p className="mb-3">
                  Our thyroid testing service stands out for several reasons:
                </p>
              </div>
              
              <BlurGlass className="p-6 rounded-xl mb-12">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                      <BadgeCheck className="h-8 w-8 text-bloodlyf-blue" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Accuracy</h3>
                    <p className="text-bloodlyf-taupe/80">
                      NABL-accredited laboratory with state-of-the-art equipment for precise results.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                      <TestTube className="h-8 w-8 text-bloodlyf-blue" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Comprehensive</h3>
                    <p className="text-bloodlyf-taupe/80">
                      Complete thyroid panel including TSH, T3, T4, and antibody tests when required.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-bloodlyf-blue/10 rounded-full flex items-center justify-center mb-3">
                      <ShieldCheck className="h-8 w-8 text-bloodlyf-blue" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Convenience</h3>
                    <p className="text-bloodlyf-taupe/80">
                      Home collection service throughout Trivandrum, saving time and effort.
                    </p>
                  </div>
                </div>
              </BlurGlass>
              
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-medium mb-6">Our Thyroid Test Packages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {thyroidTests.map((test) => (
                    <BlurGlass key={test.id} className="p-6 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium">{test.name}</h3>
                        {test.popular && (
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-bloodlyf-taupe/80 mb-4">{test.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-medium">₹{test.price}</span>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            onClick={() => handleAddToCart(test.name)}
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
              
              <div className="prose prose-bloodlyf max-w-none mb-12">
                <h2 className="text-2xl font-serif font-medium mb-4">Thyroid Test Preparation</h2>
                
                <p className="mb-4">
                  To ensure accurate thyroid test results, we recommend following these guidelines:
                </p>
                
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Fast for 8-12 hours before the test (water is allowed)</li>
                  <li className="mb-2">Schedule your test for the morning, if possible</li>
                  <li className="mb-2">Inform our phlebotomist about any medications you're taking</li>
                  <li className="mb-2">Avoid biotin supplements for at least 48 hours before testing</li>
                  <li className="mb-2">Wear comfortable clothing with easy access to your arm</li>
                </ul>
                
                <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Service Areas in Trivandrum</h2>
                
                <p className="mb-4">
                  Our thyroid testing service with home collection is available throughout Trivandrum, including but not limited to:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                  <div>Pattom</div>
                  <div>Medical College</div>
                  <div>Kesavadasapuram</div>
                  <div>Technopark</div>
                  <div>Kowdiar</div>
                  <div>Vellayambalam</div>
                  <div>Palayam</div>
                  <div>Kazhakootam</div>
                  <div>Sreekaryam</div>
                  <div>Ulloor</div>
                  <div>Sasthamangalam</div>
                  <div>Vazhuthacaud</div>
                </div>
                
                <p>
                  Whether you're in the heart of the city or in residential areas, we ensure timely sample collection and accurate test results for residents across Trivandrum.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-medium mb-6">Related Thyroid Testing Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedPages.map((page, index) => (
                    <a 
                      key={index} 
                      href={page.url}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-bloodlyf-beige/30 hover:bg-bloodlyf-blue/5 transition-colors"
                    >
                      <span className="font-medium">{page.title}</span>
                      <ChevronRight className="h-5 w-5 text-bloodlyf-blue" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div id="book-now" className="mb-12">
                <h2 className="text-2xl font-serif font-medium mb-4">Book Your Thyroid Test Today</h2>
                <p className="text-bloodlyf-taupe/80 max-w-xl mb-6">
                  Don't delay this important health check. Schedule your thyroid test with BloodLyf's convenient home collection service in Trivandrum.
                </p>
                <Button 
                  className="w-full md:w-auto bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                  onClick={() => document.getElementById('home-collection-popup')?.click()}
                >
                  Book Thyroid Test
                </Button>
              </div>
            </div>
            
            {/* Sidebar - 2 columns */}
            <div className="md:col-span-2">
              <BlurGlass className="sticky top-24 p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-4">Book Thyroid Test</h3>
                <form className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                      placeholder="Enter your location in Trivandrum"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Test</label>
                    <select className="w-full p-2 border border-bloodlyf-beige/50 rounded-md">
                      <option value="">Select a thyroid test</option>
                      {thyroidTests.map((test) => (
                        <option key={test.id} value={test.name}>
                          {test.name} - ₹{test.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button 
                    className="w-full bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('home-collection-popup')?.click();
                    }}
                  >
                    Request Callback
                  </Button>
                </form>
                
                <div className="border-t border-bloodlyf-beige/30 pt-4">
                  <h4 className="font-medium mb-2">Why book with us?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-bloodlyf-blue" />
                      <span>Home collection across Trivandrum</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-bloodlyf-blue" />
                      <span>Results within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BadgeCheck className="h-4 w-4 text-bloodlyf-blue" />
                      <span>NABL accredited laboratory</span>
                    </div>
                  </div>
                </div>
              </BlurGlass>
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

export default ThyroidTestTrivandrum;
