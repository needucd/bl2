
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurGlass from './ui/BlurGlass';
import { X, Clock } from 'lucide-react';

// Lists for random data generation
const places = [
  'Palayam', 'Pattom', 'Kowdiar', 'Vellayambalam', 'Sasthamangalam', 'Vazhuthacaud', 'Thampanoor',
  'East Fort', 'Karamana', 'Poojappura', 'Nemom', 'Kesavadasapuram', 'Ulloor', 'Kumarapuram',
  'Medical College', 'Kazhakkoottam', 'Sreekariyam', 'Pangappara', 'Chackai', 'Pettah', 'Kunnukuzhy',
  'Ambalamukku', 'Nalanchira', 'Peroorkada', 'Mannanthala', 'Karyavattom', 'Vattiyoorkavu', 'Veli',
  'Shangumugham', 'Chittazha', 'Balaramapuram', 'Kaimanam', 'Vizhinjam', 'Kovalam', 'Kallayam'
];

const testNames = [
  'Complete Blood Count (CBC)', 'Blood Sugar (Fasting & PPBS)', 'Lipid Profile', 'Liver Function Test (LFT)',
  'Kidney Function Test (KFT/RFT)', 'Thyroid Function Test (T3, T4, TSH)', 'Vitamin D Test', 'Vitamin B12 Test',
  'Iron Studies', 'HbA1c Test', 'Electrolyte Panel', 'C-Reactive Protein (CRP)', 'Cancer Screening Panel',
  'Cardiac Risk Marker Test', 'Hormone Profile'
];

// Helper function to get random item from array
const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

// Helper function to get random number between min and max
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const SalesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentData, setCurrentData] = useState({
    place: getRandomItem(places),
    test: getRandomItem(testNames),
    time: getRandomNumber(1, 10)
  });
  
  useEffect(() => {
    // Initial delay before first popup
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    
    // Setup interval for recurring popups
    const intervalId = setInterval(() => {
      // Update data with new random values
      setCurrentData({
        place: getRandomItem(places),
        test: getRandomItem(testNames),
        time: getRandomNumber(1, 10)
      });
      
      // Show popup
      setIsVisible(true);
      
      // Hide popup after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 30000); // Show a new popup every 30 seconds
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-4 bottom-4 z-40 max-w-[280px]"
        >
          <BlurGlass className="p-3 rounded-lg shadow-lg">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-bloodlyf-taupe/60 hover:text-bloodlyf-taupe transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bloodlyf-blue/20 flex items-center justify-center">
                <Clock className="h-4 w-4 text-bloodlyf-darkblue" />
              </div>
              
              <div>
                <div className="text-sm font-medium mb-1">
                  Recent Booking
                </div>
                <p className="text-xs text-bloodlyf-taupe/70">
                  Someone booked a{' '}
                  <span className="font-medium text-bloodlyf-darkblue">{currentData.test}</span>{' '}
                  {currentData.time} min ago from{' '}
                  <span className="font-medium">{currentData.place}</span>.
                </p>
              </div>
            </div>
          </BlurGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesPopup;
