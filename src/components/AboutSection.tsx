
import { useRef, useEffect } from 'react';
import BlurGlass from './ui/BlurGlass';
import { CheckCircle, Microscope, Clock, Shield, UserCheck } from 'lucide-react';

const features = [
  { 
    icon: <UserCheck className="h-5 w-5" />,
    title: "Certified Phlebotomists", 
    description: "Our team consists of highly trained professionals with extensive experience in blood collection." 
  },
  { 
    icon: <Shield className="h-5 w-5" />,
    title: "Accredited Labs", 
    description: "We partner with NABL accredited laboratories to ensure the highest standards of testing and accuracy." 
  },
  { 
    icon: <Clock className="h-5 w-5" />,
    title: "Quick Results", 
    description: "Receive your digital reports within 24-48 hours of sample collection via email or our secure app." 
  },
  { 
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Home Convenience", 
    description: "Skip hospital queues and waiting rooms with our hassle-free home collection service." 
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bloodlyf-beige/20 to-bloodlyf-ivory z-0" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-bloodlyf-blue/10 filter blur-3xl animate-floating" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-bloodlyf-beige/20 filter blur-3xl animate-floating animation-delay-2000" />
      
      <div className="bloodlyf-container relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-12 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-4">
            Healthcare At Your Doorstep
          </h2>
          <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto">
            Founded on the belief that quality healthcare should be accessible, convenient, and stress-free for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="relative transform transition-all duration-1000 opacity-0 translate-y-10 delay-200"
          >
            <BlurGlass className="absolute -top-6 -left-6 w-full h-full rounded-2xl"></BlurGlass>
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] w-full relative">
                <div className="blur-load w-full h-full absolute inset-0" style={{ backgroundColor: '#a9c4d1' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1625134673337-519d4d5f8428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="Healthcare professional with patient" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 -right-8 md:-right-16 z-10">
              <BlurGlass 
                className="p-5 max-w-[240px] animate-floating"
                intensity="medium"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bloodlyf-blue/20 mb-3 mx-auto">
                  <Microscope className="h-6 w-6 text-bloodlyf-taupe" />
                </div>
                <div className="text-center">
                  <div className="font-medium mb-1">Advanced Technology</div>
                  <div className="text-sm text-bloodlyf-taupe/70">
                    State-of-the-art equipment for precise sample collection and testing
                  </div>
                </div>
              </BlurGlass>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="space-y-8 transform transition-all duration-1000 opacity-0 translate-y-10 delay-300"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-medium">Making Healthcare Accessible</h3>
              <p className="text-bloodlyf-taupe/80">
                At BloodLyf, we believe that everyone should have access to high-quality diagnostic services without the hassle of visiting a clinic or hospital. Our mission is to bridge the gap between patients and laboratory services by bringing professional blood collection to your doorstep.
              </p>
              <p className="text-bloodlyf-taupe/80">
                We work with certified phlebotomists and partner with accredited laboratories to ensure reliable, accurate results. Our convenient booking system, professional service, and quick turnaround time for results have made us the preferred choice for home blood collection services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-bloodlyf-beige/10 transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-bloodlyf-blue/20 text-bloodlyf-taupe">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-bloodlyf-taupe/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <a href="#how-it-works" className="btn-bloodlyf">
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
