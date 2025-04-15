
import { useEffect, useRef, useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import BlurGlass from './ui/BlurGlass';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const patientImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-bloodlyf-ivory to-bloodlyf-blue/20 z-0" />
      
      {/* Subtle animated circles */}
      <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-bloodlyf-blue/10 filter blur-3xl animate-floating" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-bloodlyf-beige/30 filter blur-3xl animate-floating animation-delay-3000" />
      
      <div className="bloodlyf-container relative z-10">
        <div 
          ref={heroRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe">
                Professional Lab Tests at Home
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
                Home Blood Collection <br />
                <span className="text-bloodlyf-darkblue">Made Easy</span>
              </h1>
              <p className="text-lg text-bloodlyf-taupe/80">
                Convenient, accurate lab testing from the comfort of your home. 
                Professional phlebotomists, precise results, and a seamless experience.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#featured-products" 
                className="inline-block px-6 py-3 rounded-xl bg-bloodlyf-blue/90 text-white border border-white/30 backdrop-blur-md shadow-md hover:bg-bloodlyf-darkblue transition-all duration-300"
              >
                Book a Blood Test
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent border border-bloodlyf-taupe/50 bg-white/50 backdrop-blur-sm text-bloodlyf-taupe hover:bg-bloodlyf-taupe/10 hover:border-bloodlyf-taupe transition-all duration-300"
              >
                How It Works
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {patientImages.map((image, index) => (
                  <div 
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-bloodlyf-ivory overflow-hidden"
                  >
                    <img 
                      src={image} 
                      alt={`Patient ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-medium">500+ Satisfied Patients</div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg key={n} className="w-4 h-4 text-bloodlyf-taupe" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image with animation - Made larger */}
          <div className="order-first md:order-last">
            <BlurGlass className="overflow-hidden transform transition-all duration-700 hover:scale-[1.02] h-auto">
              <AspectRatio ratio={3/2.5} className="bg-bloodlyf-beige/50">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Blood collection at home" 
                  className="w-full h-full object-cover rounded-xl animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bloodlyf-blue/10 to-transparent animate-pulse"></div>
              </AspectRatio>
            </BlurGlass>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
