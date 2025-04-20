
import { useState } from 'react';
import { ChevronRight, Tag, Heart, Star, ArrowRight, Gift, Package, PackageCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuCategories = [
  {
    title: "Full Body Checkups",
    icon: <Package className="h-4 w-4 text-purple-600" />,
    items: [
      { name: "Basic Health Checkup", href: "/package/basic-health-checkup" },
      { name: "Advanced Full Body Checkup", href: "/package/advanced-full-body-checkup" },
      { name: "Executive Health Checkup", href: "/package/executive-health-checkup" },
      { name: "Senior Citizen Health Package", href: "/package/senior-citizen-health-package" },
      { name: "Women's Wellness Package", href: "/package/womens-wellness-package" },
      { name: "Men's Wellness Package", href: "/package/mens-wellness-package" },
      { name: "Pre-Marital Health Check", href: "/package/pre-marital-health-check" },
    ],
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Disease-Specific Tests",
    icon: <Star className="h-4 w-4 text-amber-500" />,
    items: [
      { name: "Diabetes Screening", href: "/package/diabetes-screening" },
      { name: "Thyroid Panel", href: "/package/thyroid-panel" },
      { name: "Heart Health Package", href: "/package/heart-health-package" },
      { name: "Kidney Function Test", href: "/package/kidney-function-test" },
      { name: "Liver Function Test", href: "/package/liver-function-test" },
      { name: "Cancer Screening (Men/Women)", href: "/package/cancer-screening" },
      { name: "Arthritis & Bone Health", href: "/package/arthritis-bone-health" },
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Preventive & Lifestyle Tests",
    icon: <Heart className="h-4 w-4 text-red-500" />,
    items: [
      { name: "Vitamin Deficiency Panel", href: "/package/vitamin-deficiency-panel" },
      { name: "Obesity & Metabolism Test", href: "/package/obesity-metabolism-test" },
      { name: "Allergy Test Panel - Non Veg", href: "/package/allergy-test-panel-nonveg" },
      { name: "Allergy Test Panel - Veg", href: "/package/allergy-test-panel-veg" },
      { name: "Allergy Test Panel - Veg & Non-Veg", href: "/package/allergy-test-panel-veg&nonveg" },
      { name: "Stress & Hormone Panel", href: "/package/stress-hormone-panel" },
      { name: "Sports & Fitness Health Check", href: "/package/sports-fitness-health-check" },
      { name: "Post-COVID Health Check", href: "/package/post-covid-health-check" },
      { name: "Gut Health & Digestive Panel", href: "/package/gut-health-digestive-panel" },
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Corporate & Workplace Health",
    icon: <PackageCheck className="h-4 w-4 text-green-600" />,
    items: [
      { name: "Employee Health Checkup", href: "/package/employee-health-checkup" },
      { name: "Executive Health Screening", href: "/package/executive-health-screening" },
      { name: "Annual Health Packages", href: "/package/annual-health-packages" },
      { name: "Workplace Wellness Packages", href: "/package/workplace-wellness-packages" },
      { name: "Pre-Employment Health Check", href: "/package/pre-employment-health-check" },
      { name: "COVID-19 Screening for Employees", href: "/package/covid-19-screening-employees" },
      { name: "Drug & Alcohol Testing", href: "/package/drug-alcohol-testing" },
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Pregnancy & Newborn Tests",
    icon: <Heart className="h-4 w-4 text-pink-500" />,
    items: [
      { name: "Pregnancy Health Package", href: "/package/pregnancy-health-package" },
      { name: "Fertility Hormone Panel", href: "/package/fertility-hormone-panel" },
      { name: "PCOS & Female Hormone Panel", href: "/package/pcos-female-hormone-panel" },
      { name: "Newborn Screening Package", href: "/package/newborn-screening-package" },
      { name: "Antenatal Health Check", href: "/package/antenatal-health-check" },
      { name: "Breastfeeding Wellness Tests", href: "/package/breastfeeding-wellness-tests" },
      { name: "Genetic Disorder Screening", href: "/package/genetic-disorder-screening" },
    ],
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Infectious Disease Tests",
    icon: <Tag className="h-4 w-4 text-blue-500" />,
    items: [
      { name: "COVID-19 RT-PCR & Antibody Tests", href: "/package/covid-19-tests" },
      { name: "Dengue, Malaria & Typhoid Panel", href: "/package/dengue-malaria-typhoid-panel" },
      { name: "Hepatitis B & C Screening", href: "/package/hepatitis-screening" },
      { name: "HIV & STD Panel", href: "/package/hiv-std-panel" },
      { name: "Tuberculosis (TB) Screening", href: "/package/tuberculosis-screening" },
      { name: "Influenza & Viral Fever Panel", href: "/package/influenza-viral-fever-panel" },
      { name: "Food & Waterborne Disease Tests", href: "/package/food-waterborne-disease-tests" },
    ],
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Specialized & Advanced Tests",
    icon: <Star className="h-4 w-4 text-indigo-500" />,
    items: [
      { name: "Cancer Genetic Risk Panel", href: "/package/cancer-genetic-risk-panel" },
      { name: "Autoimmune Disorder Screening", href: "/package/autoimmune-disorder-screening" },
      { name: "Food Intolerance Test", href: "/package/food-intolerance-test" },
      { name: "Heavy Metal Toxicity Panel", href: "/package/heavy-metal-toxicity-panel" },
      { name: "Advanced Cardiac Risk Markers", href: "/package/advanced-cardiac-risk-markers" },
      { name: "Neurological Disorder Screening", href: "/package/neurological-disorder-screening" },
      { name: "Rare Disease Genetic Testing", href: "/package/rare-disease-genetic-testing" },
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Corporate Plans",
    icon: <Gift className="h-4 w-4 text-teal-500" />,
    items: [
      { name: "Bulk Employee Health Checkups", href: "/package/bulk-employee-health-checkups" },
      { name: "Annual Wellness Programs", href: "/package/annual-wellness-programs" },
      { name: "On-Site Health Camps", href: "/package/on-site-health-camps" },
      { name: "Remote Employee Health Packages", href: "/package/remote-employee-health-packages" },
      { name: "Custom Corporate Packages", href: "/package/custom-corporate-packages" },
      { name: "Stress & Lifestyle Management Plans", href: "/package/stress-lifestyle-management-plans" },
      { name: "Senior Executive Health Plans", href: "/package/senior-executive-health-plans" },
    ],
    image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
];

const MegaMenu = () => {
  const [activeItem, setActiveItem] = useState(menuCategories[0].title);
  
  return (
    <div className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg shadow-lg border-t border-bloodlyf-beige/30 z-50">
      <div className="bloodlyf-container py-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Left sidebar categories */}
          <div className="col-span-1 border-r border-bloodlyf-beige/30 pr-6">
            <ul className="space-y-1">
              {menuCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={cn(
                      "flex items-center justify-between p-3 rounded-md transition-all duration-200",
                      activeItem === category.title 
                        ? "bg-gradient-to-r from-purple-50 to-purple-100 text-bloodlyf-darkblue shadow-sm" 
                        : "hover:bg-bloodlyf-beige/10"
                    )}
                    onMouseEnter={() => setActiveItem(category.title)}
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeItem === category.title ? "text-bloodlyf-blue transform translate-x-1" : ""
                    )} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right content area */}
          <div className="col-span-2">
            {activeItem && (
              <div className="flex gap-6">
                {/* Subcategory items */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium mb-4 text-bloodlyf-darkblue flex items-center">
                    {menuCategories.find(cat => cat.title === activeItem)?.icon}
                    <span className="ml-2">{activeItem}</span>
                  </h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {menuCategories.find(cat => cat.title === activeItem)?.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className="flex items-center text-sm group hover:text-bloodlyf-darkblue transition-colors py-1.5"
                        >
                          <ArrowRight className="h-3 w-0 mr-0 text-bloodlyf-blue opacity-0 group-hover:w-3 group-hover:mr-1 group-hover:opacity-100 transition-all duration-200" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Category image */}
                <div className="w-1/3">
                  <div className="rounded-lg overflow-hidden h-full border border-bloodlyf-beige/30 shadow-sm transition-transform hover:scale-[1.02] duration-300">
                    <img
                      src={menuCategories.find(cat => cat.title === activeItem)?.image}
                      alt={activeItem}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
