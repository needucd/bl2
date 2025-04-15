
import { useRef, useEffect } from 'react';
import BlurGlass from './ui/BlurGlass';
import { Calendar, Clock, TestTube, FileText } from 'lucide-react';
import { Button } from './ui/button';

const steps = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Book Your Test",
    description: "Choose your preferred test and schedule a convenient date and time for sample collection."
  },
  {
    icon: <TestTube className="h-6 w-6" />,
    title: "Home Collection",
    description: "Our certified phlebotomist visits your home and collects the sample following all safety protocols."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Lab Processing",
    description: "Your sample is transported to our partner laboratory for accurate analysis by experts."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Receive Results",
    description: "Access your test results digitally within 24-48 hours via email or our secure app."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-8 lg:py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bloodlyf-ivory to-bloodlyf-blue/10 z-0" />
      
      <div className="bloodlyf-container relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-12 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-4">
            How It Works
          </h2>
          <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto">
            Our streamlined process makes getting your blood tests done easier than ever before.
            Four simple steps from booking to receiving your results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative transition-all duration-700 opacity-0 translate-y-10"
              style={{ animationDelay: `${index * 200}ms` }}
              ref={(el) => {
                if (el) {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        setTimeout(() => {
                          entry.target.classList.add('opacity-100');
                          entry.target.classList.remove('opacity-0', 'translate-y-10');
                        }, index * 200);
                      }
                    },
                    { threshold: 0.1 }
                  );
                  observer.observe(el);
                  return () => observer.disconnect();
                }
              }}
            >
              <BlurGlass className="h-full p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-bloodlyf-blue/20 text-bloodlyf-darkblue mb-5">
                  {step.icon}
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-bloodlyf-taupe text-bloodlyf-ivory font-medium mb-4">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
                <p className="text-bloodlyf-taupe/70">{step.description}</p>
              </BlurGlass>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-bloodlyf-beige/50 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <BlurGlass 
            className="inline-block px-8 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 bg-bloodlyf-blue/90 text-white border border-white/30"
            onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Test Now
          </BlurGlass>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
