import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Clock, ChevronRight, CheckCircle, Truck, HeartPulse } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import BlurGlass from '@/components/ui/BlurGlass';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const packages = [
  {
    id: "basic-health-checkup",
    name: "Basic Health Checkup",
    category: "Full Body Checkups",
    price: 59,
    originalPrice: 79,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Our Basic Health Checkup package is designed to give you a comprehensive overview of your health status. It includes essential tests to evaluate your blood count, liver and kidney function, blood sugar, and lipid profile.",
    inclusions: [
      "Complete Blood Count (CBC)",
      "Blood Glucose (Fasting)",
      "Liver Function Test",
      "Kidney Function Test",
      "Lipid Profile",
      "Urine Routine Examination",
      "Chest X-Ray (if required)",
      "ECG (if required)"
    ],
    recommendations: [
      "Recommended for adults of all ages",
      "Suggested frequency: Annual checkup",
      "Best for general health assessment"
    ]
  },
  {
    id: "advanced-full-body-checkup",
    name: "Advanced Full Body Checkup",
    category: "Full Body Checkups",
    price: 129,
    originalPrice: 169,
    rating: 4.9,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "The Advanced Full Body Checkup is our comprehensive health assessment package that covers all major organs and systems. It includes over 70 tests to give you a detailed insight into your health status and identify potential health concerns early.",
    inclusions: [
      "Complete Blood Count with ESR",
      "HbA1c & Fasting Blood Glucose",
      "Comprehensive Liver Function Tests",
      "Advanced Kidney Function Tests",
      "Complete Lipid Profile",
      "Thyroid Profile",
      "Vitamin Levels (B12, D3)",
      "Urine Complete Examination",
      "Chest X-Ray",
      "ECG",
      "Abdominal Ultrasound"
    ],
    recommendations: [
      "Recommended for adults above 30 years",
      "Suggested frequency: Annual checkup",
      "Ideal for comprehensive health assessment",
      "Beneficial for those with family history of chronic diseases"
    ]
  }
];

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const [packageData, setPackageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const selectedPackage = packages.find(p => p.id === packageId) || packages[0];
      setPackageData(selectedPackage);
      setLoading(false);
    }, 300);
  }, [packageId]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${packageData?.name} added to your cart.`,
      variant: "default",
    });
  };

  const handleBookNow = () => {
    toast({
      title: "Test scheduled!",
      description: `Your ${packageData?.name} has been scheduled. Our team will contact you shortly.`,
      variant: "default",
    });
  };

  if (loading || !packageData) {
    return (
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased">
        <AnnouncementBar />
        <Navbar />
        <div className="bloodlyf-container py-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-bloodlyf-beige/30 w-1/3 mx-auto rounded-lg mb-4"></div>
            <div className="h-4 bg-bloodlyf-beige/30 w-2/3 mx-auto rounded-lg mb-2"></div>
            <div className="h-4 bg-bloodlyf-beige/30 w-1/2 mx-auto rounded-lg"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased">
      <AnnouncementBar />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bloodlyf-container">
          <div className="flex items-center text-sm mb-8">
            <a href="/" className="hover:text-bloodlyf-darkblue">Home</a>
            <ChevronRight className="h-3 w-3 mx-2" />
            <a href="/packages" className="hover:text-bloodlyf-darkblue">Packages</a>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-bloodlyf-darkblue">{packageData.name}</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src={packageData.image} 
                  alt={packageData.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <BlurGlass className="p-4 rounded-xl">
                <h3 className="text-lg font-medium mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {packageData.inclusions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </BlurGlass>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="text-sm text-bloodlyf-taupe/70 mb-1">{packageData.category}</div>
                <h1 className="text-3xl font-serif font-medium mb-2">{packageData.name}</h1>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn("h-4 w-4", i < Math.floor(packageData.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300")} 
                      />
                    ))}
                  </div>
                  <span className="text-sm">
                    {packageData.rating} ({packageData.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-medium">${packageData.price}</span>
                  {packageData.originalPrice && (
                    <span className="text-lg text-bloodlyf-taupe/70 line-through">${packageData.originalPrice}</span>
                  )}
                  {packageData.originalPrice && (
                    <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Save {Math.round(100 - (packageData.price / packageData.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                
                <p className="text-bloodlyf-taupe/80 mb-6">{packageData.description}</p>
                
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Available 7 days a week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Results in 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Free home sample collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="h-5 w-5 text-bloodlyf-blue" />
                    <span>NABH certified laboratories</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="flex items-center border border-bloodlyf-beige/50 rounded-md overflow-hidden">
                    <button 
                      className="px-3 py-2 hover:bg-bloodlyf-beige/10"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </button>
                    <span className="px-3 py-2 border-x border-bloodlyf-beige/50">{quantity}</span>
                    <button 
                      className="px-3 py-2 hover:bg-bloodlyf-beige/10"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    className="w-full bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              
              <BlurGlass className="p-4 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {packageData.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </BlurGlass>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default PackageDetail;
