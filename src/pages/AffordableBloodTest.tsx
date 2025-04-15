
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Toaster } from '@/components/ui/toaster';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import BlurGlass from '@/components/ui/BlurGlass';
import { MapPin, Clock, DollarSign, Percent, BadgeCheck, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const affordablePackages = [
  {
    id: 1,
    name: "Budget CBC Test",
    price: 39,
    originalPrice: 59,
    description: "Essential Complete Blood Count at an affordable price.",
    popular: true
  },
  {
    id: 2,
    name: "Economy Thyroid Test",
    price: 49,
    originalPrice: 75,
    description: "Basic thyroid function assessment at discounted rates.",
    popular: false
  }
];

const familyPackages = [
  {
    id: 3,
    name: "Family Basic Package",
    price: 89,
    originalPrice: 149,
    description: "Value CBC tests for two family members.",
    members: 2
  },
  {
    id: 4,
    name: "Family Complete Package",
    price: 179,
    originalPrice: 299,
    description: "CBC and basic health screening for up to four family members.",
    members: 4
  }
];

const AffordableBloodTest = () => {
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
        <title>Affordable Blood Test Home Service in Trivandrum | Best Rates Guaranteed</title>
        <meta name="description" content="Get access to affordable blood test home service in Trivandrum without compromising on quality. Transparent pricing, no hidden fees, and package discounts available." />
        <meta name="keywords" content="affordable blood test home service, budget-friendly blood tests, economical lab services, cheap home diagnostics, low-cost testing, value healthcare, discount packages, medical testing, pathology services" />
        <link rel="canonical" href="https://bloodlyf.com/affordable-blood-test-home-service" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalTest",
              "name": "BloodLyf Affordable Blood Testing",
              "description": "Budget-friendly blood test home service in Trivandrum with high quality",
              "relevantSpecialty": "Pathology",
              "provider": {
                "@type": "Organization",
                "name": "BloodLyf"
              },
              "hasPriceSpecification": {
                "@type": "PriceSpecification",
                "price": "39.00",
                "priceCurrency": "INR",
                "validFrom": "2023-01-01",
                "valueAddedTaxIncluded": true,
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              },
              "offeredBy": {
                "@type": "MedicalOrganization",
                "name": "BloodLyf Home Collection",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Trivandrum",
                  "addressRegion": "Kerala",
                  "addressCountry": "IN"
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
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-green-100 text-green-800 mb-2">
                Best Value
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Affordable Blood Test Home Service in Trivandrum
              </h1>
              <p className="text-bloodlyf-taupe/80 mb-6">
                Quality healthcare shouldn't break the bank. Our affordable blood test home service offers the perfect balance of quality and cost-effectiveness, making essential diagnostics accessible to everyone in Trivandrum.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Prices up to 40% lower than market rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-green-600" />
                  <span>Special discounts for families and senior citizens</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                  <span>Quality never compromised despite affordable rates</span>
                </div>
              </div>
              <Button 
                className="w-full md:w-auto bg-green-600 hover:bg-green-700"
                onClick={() => document.getElementById('affordable-packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Budget Packages
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Affordable blood test being conducted at patient's home in Trivandrum" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <BlurGlass className="p-6 rounded-xl mb-12 border-2 border-green-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-medium ml-3">Our Price Promise</h2>
            </div>
            <p className="text-center text-bloodlyf-taupe/80 max-w-3xl mx-auto mb-4">
              We believe that essential healthcare services should be accessible to everyone. That's why we've created Trivandrum's most affordable blood test home service without compromising on quality or accuracy.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium mb-2">Transparent Pricing</h3>
                <p className="text-bloodlyf-taupe/80">
                  No hidden fees or surprise charges. The price we quote is the price you pay.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium mb-2">Best Rate Guarantee</h3>
                <p className="text-bloodlyf-taupe/80">
                  Found a lower price elsewhere? We'll match it and give an additional 5% off.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium mb-2">Flexible Payment</h3>
                <p className="text-bloodlyf-taupe/80">
                  Multiple payment options including installments for larger packages.
                </p>
              </div>
            </div>
          </BlurGlass>
          
          <div id="affordable-packages" className="mb-12">
            <h2 className="text-2xl font-serif font-medium mb-6">Budget-Friendly Individual Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {affordablePackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Best Value
                      </span>
                    )}
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-medium text-green-600">${pkg.price}</span>
                      <span className="text-sm text-bloodlyf-taupe/70 line-through ml-2">${pkg.originalPrice}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full ml-2">
                        Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                      </span>
                    </div>
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
                        className="bg-green-600 hover:bg-green-700"
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
            <h2 className="text-2xl font-serif font-medium mb-6">Family Value Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {familyPackages.map((pkg) => (
                <BlurGlass key={pkg.id} className="p-6 rounded-xl border-2 border-green-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{pkg.name}</h3>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      For {pkg.members} Members
                    </span>
                  </div>
                  <p className="text-bloodlyf-taupe/80 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-medium text-green-600">${pkg.price}</span>
                      <span className="text-sm text-bloodlyf-taupe/70 line-through ml-2">${pkg.originalPrice}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full ml-2">
                        Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                      </span>
                    </div>
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
                        className="bg-green-600 hover:bg-green-700"
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
            <h2 className="text-2xl font-serif font-medium mb-6">Why Choose Our Affordable Service</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Quality Assurance</h3>
                <p className="text-bloodlyf-taupe/80">
                  Despite our low prices, all tests are conducted in NABL-accredited labs with stringent quality controls.
                </p>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Bulk Purchasing Power</h3>
                <p className="text-bloodlyf-taupe/80">
                  We leverage our high volume to negotiate better rates with suppliers and pass the savings to you.
                </p>
              </BlurGlass>
              <BlurGlass className="p-5 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Efficient Operations</h3>
                <p className="text-bloodlyf-taupe/80">
                  Our streamlined processes minimize overhead costs without compromising on service quality.
                </p>
              </BlurGlass>
            </div>
          </div>
          
          <div id="book-now" className="text-center mb-12">
            <h2 className="text-2xl font-serif font-medium mb-4">Quality Healthcare Doesn't Have to Be Expensive</h2>
            <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto mb-6">
              Book your affordable blood test today and experience how we make quality healthcare accessible to everyone in Trivandrum.
            </p>
            <Button 
              className="w-full md:w-auto bg-green-600 hover:bg-green-700"
              onClick={() => document.getElementById('home-collection-popup')?.click()}
            >
              Book Affordable Test
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

export default AffordableBloodTest;
