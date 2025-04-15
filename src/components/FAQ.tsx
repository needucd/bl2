
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import BlurGlass from './ui/BlurGlass';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does home blood collection work?",
    answer: "Our certified phlebotomists visit your home at your scheduled time. They follow all safety protocols, collect your blood sample, properly package it, and transport it to our partner laboratory for analysis."
  },
  {
    question: "Is home blood collection safe?",
    answer: "Yes, our home blood collection service is completely safe. All our phlebotomists are certified professionals who follow strict hygiene and safety protocols. They use sterile, disposable equipment for every collection."
  },
  {
    question: "How soon will I get my test results?",
    answer: "Most test results are available within 24-48 hours after sample collection. You'll receive a notification when your results are ready, and you can access them through our secure portal or app."
  },
  {
    question: "Do I need to prepare before my blood test?",
    answer: "Preparation depends on the specific test. Some tests require fasting for 8-12 hours, while others have no special requirements. We'll provide detailed instructions when you book your appointment."
  },
  {
    question: "Are your services available on weekends?",
    answer: "Yes, our home collection services are available seven days a week, including weekends and holidays, for your convenience."
  },
  {
    question: "How do I reschedule or cancel my appointment?",
    answer: "You can reschedule or cancel your appointment through our website or app up to 4 hours before your scheduled time without any charges."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bloodlyf-blue/10 to-bloodlyf-ivory z-0" />
      
      <div className="bloodlyf-container relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-16 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-4">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto">
            Find answers to the most common questions about our home blood collection services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 opacity-0 translate-y-10 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
              ref={(el) => {
                if (el) {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        setTimeout(() => {
                          entry.target.classList.add('opacity-100');
                          entry.target.classList.remove('opacity-0', 'translate-y-10');
                        }, index * 100);
                      }
                    },
                    { threshold: 0.1 }
                  );
                  observer.observe(el);
                  return () => observer.disconnect();
                }
              }}
            >
              <BlurGlass 
                className="overflow-hidden"
                intensity="light"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      openIndex === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "px-5 overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  )}
                >
                  <p className="text-bloodlyf-taupe/80">{item.answer}</p>
                </div>
              </BlurGlass>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <BlurGlass className="inline-block px-6 py-4 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-5 w-5 text-bloodlyf-darkblue" />
              <p className="text-bloodlyf-taupe">
                Still have questions? <a href="#newsletter" className="font-medium text-bloodlyf-darkblue hover:underline">Contact our support team</a>
              </p>
            </div>
          </BlurGlass>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
