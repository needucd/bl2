
import { useState, useRef, useEffect } from 'react';
import BlurGlass from './ui/BlurGlass';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setName('');
      setEmail('');
      setMessage('');
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bloodlyf-ivory to-bloodlyf-beige/30 z-0" />
      
      <div 
        ref={sectionRef}
        className="bloodlyf-container relative z-10 transform transition-all duration-1000 opacity-0 translate-y-10"
      >
        <BlurGlass 
          className="py-12 px-6 sm:px-16 rounded-2xl"
          intensity="medium"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight mb-4">
                Contact Us
              </h2>
              <p className="text-bloodlyf-taupe/80 mb-8">
                Have questions about our services or need assistance with booking? 
                Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-bloodlyf-blue/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-bloodlyf-darkblue" />
                  </div>
                  <div>
                    <div className="text-sm text-bloodlyf-taupe/70">Call us at</div>
                    <a href="tel:+1234567890" className="font-medium hover:text-bloodlyf-darkblue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-bloodlyf-blue/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-bloodlyf-darkblue" />
                  </div>
                  <div>
                    <div className="text-sm text-bloodlyf-taupe/70">Email us at</div>
                    <a href="mailto:info@bloodlyf.com" className="font-medium hover:text-bloodlyf-darkblue transition-colors">
                      info@bloodlyf.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-bloodlyf-blue/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-bloodlyf-darkblue" />
                  </div>
                  <div>
                    <div className="text-sm text-bloodlyf-taupe/70">WhatsApp</div>
                    <a href="https://wa.me/1234567890" className="font-medium hover:text-bloodlyf-darkblue transition-colors">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 shadow-sm backdrop-blur-sm border border-white/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bloodlyf-taupe mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-md border border-bloodlyf-beige bg-white/70 focus:outline-none focus:ring-2 focus:ring-bloodlyf-darkblue/30 transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bloodlyf-taupe mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-md border border-bloodlyf-beige bg-white/70 focus:outline-none focus:ring-2 focus:ring-bloodlyf-darkblue/30 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bloodlyf-taupe mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-md border border-bloodlyf-beige bg-white/70 focus:outline-none focus:ring-2 focus:ring-bloodlyf-darkblue/30 transition-all"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-5 flex items-center justify-center bg-bloodlyf-blue/90 backdrop-blur-md border border-white/20 text-white rounded-md shadow-md hover:bg-bloodlyf-darkblue transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </BlurGlass>
      </div>
    </section>
  );
};

export default ContactForm;
