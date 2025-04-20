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
  id: "advanced-full-body-checkup",
  name: "Advanced Full Body Checkup",
  category: "Full Body Checkups",
  price: 2500,
  originalPrice: 5250,
  rating: 4.8,
  reviewCount: 124,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "BloodLyf’s Advanced Full Body Checkup includes all essential tests to monitor your complete health status. It helps in early detection of metabolic, hormonal, nutritional, and organ function-related issues — making it ideal for comprehensive screening.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Erythrocyte Sedimentation Rate (ESR)",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Lipid Profile",
    "HbA1c",
    "Thyroid Stimulating Hormone (TSH)",
    "Vitamin B12",
    "Vitamin D",
    "Calcium",
    "Phosphorus",
    "Urine Complete Examination (CUE)"
  ],
  recommendations: [
    "Recommended for individuals above 30 years",
    "Ideal for comprehensive preventive screening",
    "Suggested once every 6 to 12 months"
  ]
}

  ,
  {
    id: "basic-health-checkup",
    name: "Basic Health Checkup",
    category: "Full Body Checkups",
    price: 1100,
    originalPrice: 1580,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Our Basic Health Checkup package gives you a fundamental overview of your health status. It includes core tests like CBC, liver and kidney function, blood sugar, lipid profile, and urine analysis to detect early signs of health issues.",
    inclusions: [
      "Complete Blood Count (CBC)",
      "Blood Glucose (Fasting)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Urine Routine Examination",
      "Erythrocyte Sedimentation Rate (ESR)"
    ],
    recommendations: [
      "Recommended for adults of all ages",
      "Suggested frequency: Annual checkup",
      "Best for general health assessment"
    ]
  }
  ,

  {
    id: "executive-health-checkup",
    name: "Executive Health Checkup",
    category: "Full Body Checkups",
    price: 3200,
    originalPrice: 6000,
    rating: 4.9,
    reviewCount: 150,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "BloodLyf's Executive Health Checkup is designed for working professionals, leaders, and executives who want a deep dive into their health. It includes an advanced panel of hormonal, cardiac, metabolic, and cancer markers to ensure early detection and proactive wellness management.",
    inclusions: [
      "Complete Blood Count (CBC)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Thyroid Stimulating Hormone (TSH)",
      "HbA1c",
      "Homocysteine",
      "hsCRP",
      "Apo A1",
      "Apo B",
      "Vitamin D",
      "Vitamin B12",
      "ECG",
      "PSA",
      "CA-125"
    ],
    recommendations: [
      "Ideal for working professionals, executives, and high-stress lifestyle individuals",
      "Suggested every 12 months for proactive screening",
      "Covers cardiac, hormonal, metabolic, and cancer risk markers"
    ]
  }
    ,

    {
      id: "senior-citizen-health-package",
      name: "Senior Citizen Health Package",
      category: "Full Body Checkups",
      price: 5000,
      originalPrice: 8950,
      rating: 4.9,
      reviewCount: 112,
      image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "This Senior Citizen Health Package is designed to provide a comprehensive overview of all vital health parameters in aging adults. It covers chronic condition screening, heart health, kidney and liver function, cancer markers, and bone health — making it ideal for proactive elderly care.",
      inclusions: [
        "Complete Blood Count (CBC)",
        "HbA1c",
        "Thyroid Stimulating Hormone (TSH)",
        "Kidney Function Test (KFT)",
        "Liver Function Test (LFT)",
        "Lipid Profile",
        "Calcium",
        "Vitamin D",
        "Vitamin B12",
        "ECG",
        "PSA",
        "CA-125",
        "Urine Complete Examination (CUE)",
        "Homocysteine",
        "Ferritin",
        "Bone Profile"
      ],
      recommendations: [
        "Highly recommended for individuals aged 60 and above",
        "Best suited for chronic condition monitoring and early risk detection",
        "Suggested once every 6 months or as per physician's advice"
      ]
    },
    {
      id: "womens-wellness-package",
      name: "Women's Wellness Package",
      category: "Full Body Checkups",
      price: 3500,
      originalPrice: 6650,
      rating: 4.8,
      reviewCount: 98,
      image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "The Women's Wellness Package is tailored to address essential health parameters for women of all ages. It includes a broad range of tests to monitor hormonal balance, cancer markers, vitamin levels, and organ health, providing a complete view of overall well-being.",
      inclusions: [
        "Complete Blood Count (CBC)",
        "Thyroid Stimulating Hormone (TSH)",
        "HbA1c",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Lipid Profile",
        "CA-125",
        "Vitamin D",
        "Vitamin B12",
        "Folic Acid",
        "Follicle Stimulating Hormone (FSH)",
        "Luteinizing Hormone (LH)",
        "Prolactin",
        "Urine Complete Examination (CUE)"
      ],
      recommendations: [
        "Ideal for women of all age groups",
        "Suggested once a year for hormone and health monitoring",
        "Helpful in screening for early symptoms of deficiencies, hormonal imbalance, and gynecologic conditions"
      ]
    }
,    
{
  id: "mens-wellness-package",
  name: "Men's Wellness Package",
  category: "Full Body Checkups",
  price: 7000,
  originalPrice: 11650,
  rating: 4.8,
  reviewCount: 105,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "The Men's Wellness Package is designed to address key health concerns for men, including hormonal balance, cardiac health, organ function, and nutritional status. It enables early detection of lifestyle-related risks and supports long-term well-being.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Prostate Specific Antigen (PSA)",
    "Testosterone",
    "Thyroid Stimulating Hormone (TSH)",
    "HbA1c",
    "Lipid Profile",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Vitamin D",
    "Vitamin B12",
    "Homocysteine",
    "Apolipoprotein A1 (Apo A1)",
    "Apolipoprotein B (Apo B)"
  ],
  recommendations: [
    "Ideal for men aged 30 and above",
    "Suggested annually for preventive health tracking",
    "Helps detect early signs of hormonal, cardiac, and metabolic imbalances"
  ]
}
,
{
  id: "pre-marital-health-check",
  name: "Pre-Marital Health Check",
  category: "Full Body Checkups",
  price: 14000,
  originalPrice: 17400,
  rating: 4.9,
  reviewCount: 88,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This Pre-Marital Health Check package is tailored for couples planning marriage. It screens for genetic, infectious, and reproductive health markers to ensure informed decision-making and promote long-term wellness.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Hb Electrophoresis",
    "VDRL",
    "HIV",
    "HBsAg",
    "HCV",
    "Blood Group",
    "Urine Complete Examination (CUE)",
    "Rubella IgG",
    "Thalassemia Screening"
  ],
  recommendations: [
    "Recommended for individuals planning to get married",
    "Helps detect hereditary and infectious conditions early",
    "Ensures responsible health planning for future family life"
  ]
}
,
{
  id: "diabetes-screening",
  name: "Diabetes Screening",
  category: "Disease-Specific Tests",
  price: 1500,
  originalPrice: 3340,
  rating: 4.7,
  reviewCount: 76,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This Diabetes Screening package is designed to detect early signs of diabetes and monitor blood sugar management effectively. It includes glucose and insulin levels, long-term glycemic control markers, and kidney-related complications.",
  inclusions: [
    "Fasting Glucose",
    "Postprandial Glucose",
    "HbA1c",
    "Insulin",
    "Urine Microalbumin",
    "Creatinine",
    "Lipid Profile"
  ],
  recommendations: [
    "Recommended for individuals at risk of diabetes or with a family history",
    "Ideal for monitoring blood glucose and related kidney complications",
    "Suggested every 6–12 months based on health status"
  ]
},

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
                   <span className="text-2xl font-medium">₹{packageData.price}</span>
                  {packageData.originalPrice && (
                  <span className="text-lg text-bloodlyf-taupe/70 line-through">₹{packageData.originalPrice}</span>
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
