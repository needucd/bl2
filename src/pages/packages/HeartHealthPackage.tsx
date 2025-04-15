
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import { ScrollArea } from '@/components/ui/scroll-area';

const HeartHealthPackage = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Heart Health Package",
    "description": "Comprehensive cardiac screening and heart health assessment with home sample collection in Trivandrum. Early detection of heart disease markers and risk assessment.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Electrocardiogram and blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Cardiology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Cardiovascular disease"
    }
  };

  return (
    <ScrollArea className="h-screen w-full">
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe">
        <Helmet>
          <title>Heart Health Package in Trivandrum | Cardiac Screening | BloodLyf</title>
          <meta name="description" content="Comprehensive heart health assessment package with home blood collection in Trivandrum. Includes lipid profile, cardiac markers, and more with doctor consultation." />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>

        <Navbar />

        <main className="bloodlyf-container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue">
                Heart Health Package in Trivandrum
              </h1>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-bloodlyf-beige/30 space-y-4">
                <h2 className="text-xl font-medium text-bloodlyf-blue">Prioritize Your Cardiac Health</h2>
                <p>
                  Cardiovascular diseases remain the leading cause of mortality worldwide. Regular screening and early detection are critical for preventing severe cardiac events and maintaining heart health. BloodLyf's Heart Health Package offers a comprehensive assessment of your cardiovascular well-being through convenient home sample collection in Trivandrum.
                </p>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Heart Health Package Includes:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Complete Lipid Profile:</strong> Measures total cholesterol, HDL, LDL, VLDL, and triglycerides</li>
                  <li><strong>Cardiac Markers:</strong> Tests for troponin, CK-MB, and other indicators of cardiac damage</li>
                  <li><strong>Homocysteine Test:</strong> Assesses a risk factor for heart disease</li>
                  <li><strong>High-Sensitivity C-Reactive Protein (hs-CRP):</strong> Measures inflammation in blood vessels</li>
                  <li><strong>HbA1c Test:</strong> Checks long-term blood glucose levels (diabetes increases heart disease risk)</li>
                  <li><strong>Kidney Function Tests:</strong> Evaluates kidney health, which impacts heart function</li>
                  <li><strong>Thyroid Function Tests:</strong> Thyroid disorders can affect heart function</li>
                  <li><strong>Electrocardiogram (ECG):</strong> Records electrical activity of your heart (available with at-home technician visit)</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Why Regular Heart Health Screening is Important</h2>
                <p>
                  Heart disease often develops silently over years before causing noticeable symptoms. Regular screening allows for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Early detection of cardiac risk factors</li>
                  <li>Identification of heart disease in its initial stages</li>
                  <li>Timely intervention and treatment</li>
                  <li>Monitoring of existing heart conditions</li>
                  <li>Peace of mind about your cardiac health</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Our Heart Health Package?</h2>
                <p>
                  This comprehensive screening is particularly beneficial for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Individuals aged 40 and above</li>
                  <li>Those with a family history of heart disease</li>
                  <li>People with high blood pressure, diabetes, or obesity</li>
                  <li>Smokers or former smokers</li>
                  <li>Individuals with sedentary lifestyles</li>
                  <li>Those experiencing symptoms like chest pain, shortness of breath, or palpitations</li>
                  <li>Anyone concerned about their heart health</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Convenience:</strong> Sample collection at your home in Trivandrum</li>
                  <li><strong>Professional Service:</strong> Certified phlebotomists following strict safety protocols</li>
                  <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
                  <li><strong>Expert Interpretation:</strong> Optional consultation with a cardiologist to explain your results</li>
                  <li><strong>Comprehensive Assessment:</strong> Complete evaluation of multiple cardiac health parameters</li>
                  <li><strong>Affordable Pricing:</strong> Cost-effective compared to individual tests</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Preparing for Your Heart Health Assessment</h2>
                <p>
                  For the most accurate results:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fast for 8-12 hours before the blood collection (water is permitted)</li>
                  <li>Avoid alcohol for 24 hours before the test</li>
                  <li>Maintain normal medication routines unless advised otherwise by your doctor</li>
                  <li>Wear comfortable clothing, especially if ECG is included</li>
                  <li>Have your medical history and medication list ready</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
                <p>
                  Your comprehensive report will include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Detailed analysis of each test parameter</li>
                  <li>Normal reference ranges for comparison</li>
                  <li>Interpretation of findings</li>
                  <li>Risk assessment based on your results</li>
                </ul>
                <p className="mt-4">
                  For those who opt for a consultation, our cardiologists can provide:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Thorough explanation of your heart health status</li>
                  <li>Personalized recommendations based on your results</li>
                  <li>Guidance on lifestyle modifications if needed</li>
                  <li>Advice on follow-up testing or medical care if indicated</li>
                </ul>
                
                <p className="mt-4">
                  Take a proactive step toward heart health today. Book BloodLyf's Heart Health Package for a comprehensive assessment of your cardiovascular well-being from the comfort of your home in Trivandrum.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <HomeCollectionBooking testType="Heart Health Package" />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default HeartHealthPackage;
