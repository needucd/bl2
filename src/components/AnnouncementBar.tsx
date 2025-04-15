
import { useRef, useEffect, useState } from 'react';

const AnnouncementBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    if (!scrollContainer) return;
    
    let animationId: number;
    
    const scroll = () => {
      if (!scrollContainer || isPaused) {
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      // Continuous scroll
      scrollContainer.scrollLeft += 1;
      
      // Reset scroll when it reaches the end to create infinite scroll effect
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  // Handle scroll to hide the announcement bar when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const announcement = "🩸 Special Offer: 20% off on all health packages this month! • Free home collection for orders above ₹999 • Get your reports within 24 hours • Now open in 35+ locations across the city • ";

  return (
    <div 
      className={`bg-green-600 text-white py-1.5 overflow-hidden whitespace-nowrap fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="overflow-x-hidden flex"
      >
        <div className="flex-shrink-0 animate-none flex items-center">
          {Array(4).fill(announcement).map((text, index) => (
            <span key={index} className="inline-block mr-6 text-sm">{text}</span>
          ))}
        </div>
        <div className="flex-shrink-0 animate-none flex items-center">
          {Array(4).fill(announcement).map((text, index) => (
            <span key={index} className="inline-block mr-6 text-sm">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
