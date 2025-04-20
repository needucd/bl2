
import { useState, useRef, useEffect } from 'react';
import BlurGlass from './ui/BlurGlass';
import { cn } from '@/lib/utils';
import { Calendar, FileText, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';




interface TestPackage {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  backgroundColor: string;
  description: string;
}

const testPackages: TestPackage[] = [

    {
      id: 1,
      name: "Executive Health Checkup",
      category: "Full Body Checkups",
      price: 3200,
      image: "/images/executive_pack.png",
      backgroundColor: "#e6dfd5",
      description: "Designed for working professionals to detect early signs of metabolic and lifestyle-related risks."
    },
    {
      id: 2,
      name: "PCOS & Female Hormone Panel",
      category: "Pregnancy & Newborn Tests",
      price: 2200,
      image: "/images/pcos_panel.png",
      backgroundColor: "#f5d0c5",
      description: "Analyzes hormonal imbalance, ovarian reserve, and insulin resistance for PCOS management."
    },
    {
      id: 3,
      name: "Diabetes Screening",
      category: "Disease-Specific Tests",
      price: 1500,
      image: "/images/diabetes_panel.png",
      backgroundColor: "#ddebe2",
      description: "Includes glucose, HbA1c, insulin, and lipid profile to monitor or detect diabetes early."
    },
    {
      id: 4,
      name: "Heart Health Package",
      category: "Preventive & Lifestyle Tests",
      price: 2500,
      image: "/images/heart_health.png",
      backgroundColor: "#ebd4d3",
      description: "Comprehensive screening of cholesterol, hsCRP, Apo A1/B, and cardiac risk markers."
    },
    {
      id: 5,
      name: "Dengue, Malaria & Typhoid Panel",
      category: "Infectious Disease Tests",
      price: 1400,
      image: "/images/fever_panel.png",
      backgroundColor: "#d5e8e8",
      description: "Detects tropical fever causes like dengue, malaria, and typhoid with CBC and CRP."
    },
    {
      id: 6,
      name: "Genetic Disorder Screening",
      category: "Pregnancy & Newborn Tests",
      price: 4800,
      image: "/images/genetic_panel.png",
      backgroundColor: "#f4e9ff",
      description: "Screens for inherited conditions using karyotyping, thalassemia testing, and genetic markers."
    },
    {
      id: 7,
      name: "Advanced Cardiac Risk Markers",
      category: "Specialized & Advanced Tests",
      price: 2400,
      image: "/images/cardiac_risk.png",
      backgroundColor: "#fce9e0",
      description: "Tests for homocysteine, hsCRP, Apo A1/B, Lp(a), and more for cardiac risk assessment."
    },
    {
      id: 8,
      name: "Thyroid Panel",
      category: "Disease-Specific Tests",
      price: 1100,
      image: "/images/thyroid_panel.png",
      backgroundColor: "#e0e7fd",
      description: "Tests for TSH, T3, T4, and anti-TPO to evaluate thyroid gland health."
    }
  ];
  

const TestPackageCard = ({ testPackage }: { testPackage: TestPackage }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg mb-2">
        <div 
          className={cn(
            "h-32 w-full transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
          style={{ backgroundColor: testPackage.backgroundColor }}
        >
          <div className="blur-load w-full h-full"
            style={{ backgroundColor: testPackage.backgroundColor }}>
            <img 
              src={testPackage.image} 
              alt={testPackage.name} 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
            />
          </div>
        </div>
        <a 
          href={`/package/${testPackage.name.toLowerCase().replace(/\s+/g, '-')}`}
          className={cn(
            "absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-md text-bloodlyf-taupe transition-all duration-500",
            isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}
        >
          <Eye className="h-4 w-4" />
        </a>
      </div>
      <div className="space-y-1">
        <div className="text-xs text-bloodlyf-taupe/70">{testPackage.category}</div>
        <h3 className="font-serif text-base font-medium truncate">{testPackage.name}</h3>
        <p className="text-xs text-bloodlyf-taupe/80 line-clamp-2 mt-1">{testPackage.description}</p>
        <div className="font-medium mt-1 text-sm">₹{testPackage.price.toLocaleString("en-IN")}</div>

      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Added wheel event handling for mouse scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent default only if scrolling horizontally
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY * 2,
        behavior: 'smooth'
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section id="featured-products" className="py-6 lg:py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bloodlyf-ivory to-bloodlyf-beige/20 z-0" />
      
      <div className="bloodlyf-container relative z-10">
        <div className="text-center mb-4">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-2">
            Test Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-2">
            Popular Lab Tests
          </h2>
          <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto">
            Choose from our comprehensive range of laboratory tests, conducted by certified professionals
            in the comfort of your home.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button 
              onClick={scrollLeft} 
              size="icon" 
              variant="outline" 
              className="h-8 w-8 rounded-full shadow-md bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button 
              onClick={scrollRight} 
              size="icon" 
              variant="outline" 
              className="h-8 w-8 rounded-full shadow-md bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar gap-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {testPackages.map((testPackage) => (
              <div key={testPackage.id} className="min-w-[210px] flex-shrink-0">
                <TestPackageCard testPackage={testPackage} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a href="/packages" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-bloodlyf-blue/90 backdrop-blur-md border border-white/20 text-white shadow-md hover:bg-bloodlyf-darkblue transition-all duration-300">
            View All Test Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
