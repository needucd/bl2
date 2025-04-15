
import { useState, useRef, useEffect } from 'react';
import BlurGlass from './ui/BlurGlass';
import { cn } from '@/lib/utils';
import { Calendar, FileText, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

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
    name: "Complete Blood Count",
    category: "Basic Health",
    price: 59,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#e6dfd5",
    description: "Essential blood test that measures different components of your blood."
  },
  {
    id: 2,
    name: "Comprehensive Metabolic Panel",
    category: "Advanced Screening",
    price: 89,
    image: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#a9c4d1",
    description: "Evaluates kidney and liver function, blood sugar levels, and electrolyte balance."
  },
  {
    id: 3,
    name: "Thyroid Function Panel",
    category: "Specialized Tests",
    price: 75,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#f0e9e1",
    description: "Assesses thyroid gland function by measuring hormone levels in your blood."
  },
  {
    id: 4,
    name: "Vitamin D Test",
    category: "Nutritional Analysis",
    price: 49,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#b7c4aa",
    description: "Determines if you have sufficient vitamin D levels for optimal health."
  },
  {
    id: 5,
    name: "Lipid Profile",
    category: "Heart Health",
    price: 65,
    image: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#d5e8e8",
    description: "Measures cholesterol and triglycerides to assess heart disease risk."
  },
  {
    id: 6,
    name: "HbA1c Test",
    category: "Diabetes Care",
    price: 55,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#fae7e1",
    description: "Monitors long-term blood sugar control in diabetic patients."
  },
  {
    id: 7,
    name: "Liver Function Test",
    category: "Organ Health",
    price: 70,
    image: "https://images.unsplash.com/photo-1579684288982-d3e36bde0f33?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#e3e8d5",
    description: "Assesses the health and function of your liver."
  },
  {
    id: 8,
    name: "Kidney Function Test",
    category: "Organ Health",
    price: 65,
    image: "https://images.unsplash.com/photo-1576091515179-a6a4b8633257?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    backgroundColor: "#dfe1e7",
    description: "Evaluates how well your kidneys are functioning."
  },
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
          <Calendar className="h-4 w-4" />
        </a>
      </div>
      <div className="space-y-1">
        <div className="text-xs text-bloodlyf-taupe/70">{testPackage.category}</div>
        <h3 className="font-serif text-base font-medium truncate">{testPackage.name}</h3>
        <p className="text-xs text-bloodlyf-taupe/80 line-clamp-2 mt-1">{testPackage.description}</p>
        <div className="font-medium mt-1 text-sm">${testPackage.price}</div>
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
