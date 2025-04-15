
import { useEffect, useRef, useState } from 'react';
import BlurGlass from './ui/BlurGlass';

// Corporate client logos data
const clientLogos = [
  { id: 1, name: 'Apple', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { id: 2, name: 'Google', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 3, name: 'Microsoft', img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { id: 4, name: 'Amazon', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 5, name: 'Facebook', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' },
  { id: 6, name: 'Wipro', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { id: 7, name: 'Infosys', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { id: 8, name: 'TCS', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Tata_Consultancy_Services_Logo.svg' },
  { id: 9, name: 'IBM', img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: 10, name: 'Oracle', img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { id: 11, name: 'Intel', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { id: 12, name: 'Nvidia', img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { id: 13, name: 'Adobe', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Adobe_Inc._logo.svg' },
  { id: 14, name: 'Cisco', img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { id: 15, name: 'Salesforce', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { id: 16, name: 'Dell', img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { id: 17, name: 'HP', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { id: 18, name: 'SAP', img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { id: 19, name: 'Accenture', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { id: 20, name: 'Deloitte', img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
  { id: 21, name: 'KPMG', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg' },
  { id: 22, name: 'EY', img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Ernst_%26_Young_logo.svg' },
  { id: 23, name: 'PwC', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg' },
  { id: 24, name: 'Capgemini', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Capgemini_Logo.svg' },
  { id: 25, name: 'Cognizant', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Cognizant_logo.svg' },
];

const ClientShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    if (!scrollContainer) return;
    
    let animationId: number;
    let startTime: number | null = null;
    
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!scrollContainer || isPaused) {
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      // Slow continuous scroll from right to left (negative value)
      scrollContainer.scrollLeft -= 0.7;
      
      // Reset scroll when it reaches the beginning to create infinite scroll effect
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
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

  return (
    <section className="py-4 bg-bloodlyf-ivory/50">
      <div className="bloodlyf-container">
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-3xl font-serif font-medium">Trusted by <span className="text-bloodlyf-darkblue">Leading Companies</span></h2>
        </div>
        
        <BlurGlass intensity="light" className="p-3 rounded-xl overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Double the logos to ensure smooth infinite scroll */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={client.img} 
                  alt={`${client.name} logo`} 
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </BlurGlass>
      </div>
    </section>
  );
};

export default ClientShowcase;
