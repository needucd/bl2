
import React from 'react';
import { CheckCircle, ArrowRight, Building, Users, CalendarCheck, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurGlass from './ui/BlurGlass';

const CorporateSection = () => {
  const benefits = [
    {
      title: 'Customized Health Packages',
      description: 'Tailor-made health screening packages based on industry, employee demographics, and risk factors',
      icon: Building
    },
    {
      title: 'On-Site Collection',
      description: 'Convenient on-site collection at your workplace, minimizing employee downtime',
      icon: Users
    },
    {
      title: 'Flexible Scheduling',
      description: 'Schedule health camps and screenings on dates that work best for your organization',
      icon: CalendarCheck
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive reports with actionable insights for both employees and management',
      icon: Activity
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-bloodlyf-beige/30 to-bloodlyf-ivory">
      <div className="bloodlyf-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-4">
              Corporate Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
              Health Solutions for <span className="text-bloodlyf-darkblue">Your Organization</span>
            </h2>
            <p className="text-bloodlyf-taupe/80 mb-6">
              Invest in your team's health with our comprehensive corporate health screening programs. 
              Our services are designed to promote wellness, reduce absenteeism, and foster a culture of health-consciousness.
            </p>
            
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-bloodlyf-darkblue">{benefit.title}</h3>
                    <p className="text-sm text-bloodlyf-taupe/80">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <Button className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue text-white">
              <span className="text-white">Get Corporate Quote</span> <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <BlurGlass 
                key={index}
                intensity="light" 
                className="p-4 rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-bloodlyf-blue/20 flex items-center justify-center mb-3">
                  <benefit.icon className="h-6 w-6 text-bloodlyf-darkblue" />
                </div>
                <h3 className="font-medium mb-2">{benefit.title}</h3>
                <p className="text-xs text-bloodlyf-taupe/80">{benefit.description}</p>
              </BlurGlass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
