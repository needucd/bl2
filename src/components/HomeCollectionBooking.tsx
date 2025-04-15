
import React, { useState } from 'react';
import { X, Package, Calendar as CalendarIcon, Clock } from 'lucide-react';
import BlurGlass from './ui/BlurGlass';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface HomeCollectionBookingProps {
  testType?: string;
}

const HomeCollectionBooking: React.FC<HomeCollectionBookingProps> = ({ testType = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Generate time slots from 5:00 AM to 9:00 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    let hour = 5;
    let minute = 0;
    
    while (hour < 21 || (hour === 21 && minute === 0)) {
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour < 12 ? 'AM' : 'PM';
      slots.push(`${formattedHour}:${minute === 0 ? '00' : minute} ${period}`);
      
      minute += 30;
      if (minute === 60) {
        minute = 0;
        hour += 1;
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-5 z-40">
      <div 
        id="home-collection-popup"
        className="flex flex-col items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <BlurGlass 
          className="p-3 rounded-xl flex flex-col items-center gap-2 hover:shadow-lg transition-all duration-300 shadow-md"
          intensity="medium"
          style={{ width: '50px' }} // Making it narrower
        >
          <Package className="h-6 w-6 text-bloodlyf-blue rotate-90" />
          <div className="flex flex-col">
            <span 
              className="text-bloodlyf-darkblue text-xs font-medium whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed', 
                transform: 'rotate(180deg)',
                marginBottom: '8px'
              }}
            >
              Book Home Collection
            </span>
          </div>
        </BlurGlass>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md w-full p-0 overflow-hidden border-0 shadow-2xl bg-transparent">
          <BlurGlass 
            className="relative p-6 sm:p-8 rounded-2xl w-full border border-white/30"
            intensity="medium"
          >
            <div className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-bloodlyf-beige/30 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-bloodlyf-taupe" />
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif font-medium text-bloodlyf-darkblue">Book Home Collection</DialogTitle>
              <p className="text-bloodlyf-taupe mt-2">
                Fill out the form below to schedule a blood collection at your doorstep.
              </p>
            </DialogHeader>
            
            <form className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-bloodlyf-taupe mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-bloodlyf-beige/50 focus:ring-bloodlyf-blue focus:border-bloodlyf-blue bg-white/90 p-2"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-bloodlyf-taupe mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-xl border border-bloodlyf-beige/50 focus:ring-bloodlyf-blue focus:border-bloodlyf-blue bg-white/90 p-2"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bloodlyf-taupe mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-bloodlyf-beige/50 focus:ring-bloodlyf-blue focus:border-bloodlyf-blue bg-white/90 p-2"
                  placeholder="Your Email Address"
                />
              </div>
              
              <div>
                <label htmlFor="test" className="block text-sm font-medium text-bloodlyf-taupe mb-1">Select Test</label>
                <select
                  id="test"
                  className="w-full rounded-xl border border-bloodlyf-beige/50 focus:ring-bloodlyf-blue focus:border-bloodlyf-blue bg-white/90 p-2"
                  defaultValue={testType || "Complete Blood Count (CBC)"}
                >
                  {!testType && <option>Complete Blood Count (CBC)</option>}
                  {testType && <option>{testType}</option>}
                  <option>Lipid Profile</option>
                  <option>Thyroid Function Test</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-bloodlyf-taupe mb-1">Select Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-2 w-full rounded-xl border border-bloodlyf-beige/50 bg-white/90 p-2 text-left text-sm",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white/95 backdrop-blur-md border border-white/40 shadow-xl rounded-xl">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-bloodlyf-taupe mb-1">Select Time</label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full border-bloodlyf-beige/50 bg-white/90 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <SelectValue placeholder="Select time" className="text-bloodlyf-taupe" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-xl rounded-xl max-h-36 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-1 p-2">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="text-bloodlyf-taupe hover:bg-bloodlyf-beige/30 rounded-lg text-xs text-center">
                          {slot}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
              
              <BlurGlass
                className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-300 bg-bloodlyf-blue/90 text-white border border-white/30 mt-4"
              >
                Book Now
              </BlurGlass>
            </form>
          </BlurGlass>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeCollectionBooking;
