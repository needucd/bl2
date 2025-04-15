
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeCollectionBooking from '@/components/HomeCollectionBooking';
import { ScrollArea } from '@/components/ui/scroll-area';

const DiabetesScreening = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Diabetes Screening",
    "description": "Comprehensive diabetes screening tests with home sample collection in Trivandrum. Early detection, accurate results, and affordable rates.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood glucose monitoring system"
    },
    "normalRange": "Fasting glucose: 70-100 mg/dL; HbA1c: Less than 5.7%",
    "affectedBy": [
      "Diet",
      "Exercise",
      "Genetic factors",
      "Age",
      "Obesity"
    ],
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Diabetes mellitus"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Endocrinology"
    }
  };

  return (
    <ScrollArea className="h-screen w-full">
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe">
        <Helmet>
          <title>Diabetes Screening Test in Trivandrum | Home Blood Collection | BloodLyf</title>
          <meta name="description" content="Book comprehensive diabetes screening with home blood collection in Trivandrum. Fasting glucose, HbA1c, glucose tolerance testing with accurate results within 24 hours." />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>

        <Navbar />

        <main className="bloodlyf-container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-bloodlyf-darkblue">
                Diabetes Screening Test in Trivandrum
              </h1>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-bloodlyf-beige/30 space-y-4">
                <h2 className="text-xl font-medium text-bloodlyf-blue">Why Get a Diabetes Screening Test?</h2>
                <p>
                  Diabetes is a chronic condition affecting millions of individuals worldwide, often developing silently without noticeable symptoms in its early stages. Regular diabetes screening is essential for early detection, which allows for timely intervention and management to prevent complications.
                </p>
                
                <p>
                  At BloodLyf, we offer comprehensive diabetes screening services with the convenience of home sample collection in Trivandrum. Our testing packages are designed to provide accurate, reliable results that help you take control of your health.
                </p>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Diabetes Screening Package Includes:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fasting Blood Glucose</li>
                  <li>Hemoglobin A1c (HbA1c)</li>
                  <li>Post-prandial Blood Glucose</li>
                  <li>Lipid Profile</li>
                  <li>Kidney Function Tests</li>
                  <li>Urine Microalbumin</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of BloodLyf's Diabetes Screening:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Convenient home collection – no need to visit a lab</li>
                  <li>Professional phlebotomists following strict safety protocols</li>
                  <li>Results available within 24 hours</li>
                  <li>Digital reports accessed through your email or WhatsApp</li>
                  <li>Affordable rates with no hidden charges</li>
                  <li>Optional doctor consultation to interpret your results</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">When Should You Consider Diabetes Screening?</h2>
                <p>
                  You should consider getting screened for diabetes if:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You are over 45 years of age</li>
                  <li>You are overweight or obese</li>
                  <li>You have a family history of diabetes</li>
                  <li>You lead a sedentary lifestyle</li>
                  <li>You have high blood pressure or high cholesterol</li>
                  <li>You've had gestational diabetes during pregnancy</li>
                  <li>You experience symptoms like frequent urination, increased thirst, unexplained weight loss, or extreme fatigue</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Preparing for Your Diabetes Test</h2>
                <p>
                  For accurate results, it's important to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fast for 8-12 hours before the test (for fasting glucose test)</li>
                  <li>Stay hydrated by drinking water</li>
                  <li>Avoid alcohol consumption for 24 hours before the test</li>
                  <li>Inform your healthcare provider about any medications you're taking</li>
                </ul>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Test Results</h2>
                <p>
                  Your test results will typically include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Normal:</strong> Fasting glucose below 100 mg/dL, HbA1c below 5.7%</li>
                  <li><strong>Prediabetes:</strong> Fasting glucose 100-125 mg/dL, HbA1c 5.7-6.4%</li>
                  <li><strong>Diabetes:</strong> Fasting glucose 126 mg/dL or higher, HbA1c 6.5% or higher</li>
                </ul>
                
                <p className="mt-4">
                  Our team can help you interpret your results and provide guidance on next steps if needed. We also offer follow-up testing and monitoring services for individuals with prediabetes or diabetes.
                </p>
                
                <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Why Choose BloodLyf for Diabetes Screening in Trivandrum?</h2>
                <p>
                  BloodLyf is Trivandrum's trusted partner for home blood collection and diagnostic services. We pride ourselves on:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Experienced phlebotomists and healthcare professionals</li>
                  <li>State-of-the-art testing equipment and facilities</li>
                  <li>Commitment to accuracy and reliability</li>
                  <li>Affordable pricing and transparent billing</li>
                  <li>Exceptional customer service and support</li>
                </ul>
                
                <p className="mt-4">
                  Don't wait until symptoms appear – early detection through regular screening is key to managing diabetes effectively and preventing complications. Book your diabetes screening test with BloodLyf today for convenient, reliable, and affordable healthcare from the comfort of your home.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <HomeCollectionBooking testType="Diabetes Screening" />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
};

export default DiabetesScreening;
