
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CorporateEnquiryForm from '@/components/CorporateEnquiryForm';
import { ScrollArea } from '@/components/ui/scroll-area';

const EmployeeHealthCheckup = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Employee Health Checkup",
    "description": "Comprehensive health checkup packages for corporate employees in Trivandrum. On-site or home collection services.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "BloodLyf Diagnostics"
    },
    "areaServed": {
      "@type": "City",
      "name": "Trivandrum"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Corporate organizations"
    }
  };

  return (
    <ScrollArea className="h-screen w-full">
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe">
        <Helmet>
          <title>Corporate Employee Health Checkup | Workplace Wellness | BloodLyf</title>
          <meta name="description" content="Comprehensive employee health checkup packages for corporate organizations in Trivandrum. Flexible plans, on-site collection, and detailed health reports." />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>

        <Navbar />

        <main className="bloodlyf-container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue">
                Corporate Employee Health Checkup
              </h1>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-bloodlyf-beige/30 space-y-4">
                <h2 className="text-xl font-medium text-bloodlyf-blue">Invest in Your Team's Health</h2>
                <p>
                  At BloodLyf, we understand that a healthy workforce is a productive workforce. Our comprehensive Employee Health Checkup packages are designed specifically for corporate organizations looking to prioritize their employees' wellbeing while enhancing productivity and reducing healthcare costs.
                </p>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Corporate Health Solutions</h2>
                <p>
                  We offer flexible, customizable health checkup packages that can be tailored to meet your organization's specific needs, budget, and schedule. Whether you're a small startup or a large enterprise, we have solutions that work for you.
                </p>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Key Features of Our Employee Health Checkup Programs:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Flexible Collection Options:</strong> On-site camps at your workplace or individual home collection appointments</li>
                  <li><strong>Comprehensive Health Screening:</strong> Basic to advanced test panels covering all essential health parameters</li>
                  <li><strong>Digital Reports:</strong> Easy-to-access digital reports for employees and consolidated data for HR</li>
                  <li><strong>Doctor Consultations:</strong> Optional follow-up consultations with healthcare specialists</li>
                  <li><strong>Health Awareness Sessions:</strong> Educational workshops on preventive healthcare and wellness</li>
                  <li><strong>Confidential Health Assessment:</strong> Private and secure handling of all health information</li>
                  <li><strong>Volume Discounts:</strong> Competitive pricing based on the number of employees</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Available Package Options:</h2>
                
                <div className="mt-4 space-y-6">
                  <div className="border border-bloodlyf-beige/50 rounded-lg p-4">
                    <h3 className="font-medium text-bloodlyf-darkblue">Essential Health Package</h3>
                    <p className="text-sm mt-1">Basic screening covering fundamental health parameters</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Complete Blood Count</li>
                      <li>Liver Function Test</li>
                      <li>Kidney Function Test</li>
                      <li>Blood Sugar Test (Fasting)</li>
                      <li>Lipid Profile</li>
                      <li>Urine Routine Examination</li>
                    </ul>
                  </div>
                  
                  <div className="border border-bloodlyf-beige/50 rounded-lg p-4">
                    <h3 className="font-medium text-bloodlyf-darkblue">Comprehensive Wellness Package</h3>
                    <p className="text-sm mt-1">Thorough assessment for complete health evaluation</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>All tests in Essential Package</li>
                      <li>Thyroid Profile</li>
                      <li>HbA1c (Diabetes Marker)</li>
                      <li>Vitamin B12 and D3</li>
                      <li>ECG</li>
                      <li>Chest X-Ray</li>
                      <li>Doctor Consultation</li>
                    </ul>
                  </div>
                  
                  <div className="border border-bloodlyf-beige/50 rounded-lg p-4">
                    <h3 className="font-medium text-bloodlyf-darkblue">Executive Health Package</h3>
                    <p className="text-sm mt-1">Premium screening for senior management and executives</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>All tests in Comprehensive Package</li>
                      <li>Cardiac Risk Markers</li>
                      <li>PSA for Men / Pap Smear for Women</li>
                      <li>Ultrasound Abdomen</li>
                      <li>Stress Test</li>
                      <li>Detailed Health Report with Recommendations</li>
                      <li>Follow-up Specialist Consultation</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits for Your Organization:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Reduced Absenteeism:</strong> Early detection and prevention of health issues leads to fewer sick days</li>
                  <li><strong>Enhanced Productivity:</strong> Healthier employees are more energetic and focused</li>
                  <li><strong>Improved Employee Satisfaction:</strong> Demonstrates your commitment to employee wellbeing</li>
                  <li><strong>Lower Healthcare Costs:</strong> Preventive care reduces the need for expensive treatments</li>
                  <li><strong>Strengthened Company Culture:</strong> Promotes a wellness-oriented workplace environment</li>
                  <li><strong>Valuable Health Insights:</strong> Aggregate (anonymized) data helps identify health trends in your organization</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Process:</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Initial Consultation:</strong> We discuss your organization's needs and objectives</li>
                  <li><strong>Custom Package Design:</strong> We create a tailored health program for your team</li>
                  <li><strong>Schedule Coordination:</strong> We plan the logistics that work best for your calendar</li>
                  <li><strong>Implementation:</strong> We conduct the health checkups with minimal disruption</li>
                  <li><strong>Reporting:</strong> We provide individual reports and organizational insights</li>
                  <li><strong>Follow-up Support:</strong> We offer guidance on addressing identified health concerns</li>
                </ol>
                
                <p className="mt-6">
                  Partner with BloodLyf for your corporate health needs and experience the difference a proactive approach to employee wellness can make. Fill out the enquiry form to receive a customized quote for your organization.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <CorporateEnquiryForm packageType="Employee Health Checkup" />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default EmployeeHealthCheckup;
