
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const KidneyFunctionTest = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Kidney Function Test",
    "description": "Comprehensive kidney function assessment with home sample collection in Trivandrum. Evaluate kidney health and detect early signs of kidney disease.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood and urine analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Nephrology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Kidney disease"
    }
  };

  return (
    <PackageTemplate
      title="Kidney Function Test in Trivandrum"
      metaTitle="Kidney Function Test in Trivandrum | Home Blood Collection | BloodLyf"
      metaDescription="Comprehensive kidney function tests with home blood collection in Trivandrum. Assess kidney health, detect kidney disease early, and get same-day results."
      packageName="Kidney Function Test"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Why Regular Kidney Function Tests Matter</h2>
      <p>
        Your kidneys play a crucial role in filtering waste products, balancing electrolytes, and maintaining overall health. Regular kidney function tests are essential for monitoring kidney health and detecting potential problems early when treatment is most effective.
      </p>
      
      <p className="mt-4">
        At BloodLyf, we offer comprehensive kidney function testing with the convenience of home sample collection in Trivandrum. Our testing packages provide accurate assessment of kidney health parameters for preventive care or ongoing monitoring.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Kidney Function Test Package Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Blood Urea Nitrogen (BUN):</strong> Measures nitrogen levels in the blood to assess kidney function</li>
        <li><strong>Serum Creatinine:</strong> Key indicator of kidney filtration function</li>
        <li><strong>eGFR (estimated Glomerular Filtration Rate):</strong> Calculation of kidney filtration capacity</li>
        <li><strong>Electrolyte Panel:</strong> Sodium, potassium, chloride, and bicarbonate levels</li>
        <li><strong>Uric Acid:</strong> Evaluates levels that may affect kidney health</li>
        <li><strong>Complete Urinalysis:</strong> Checks for protein, blood cells, and other markers in urine</li>
        <li><strong>Microalbumin Test:</strong> Detects small amounts of protein in urine, an early sign of kidney damage</li>
        <li><strong>Cystatin C:</strong> Alternative marker for kidney function</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Kidney Function Testing?</h2>
      <p>
        Kidney function testing is particularly important for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals with diabetes</li>
        <li>Those with high blood pressure</li>
        <li>People with a family history of kidney disease</li>
        <li>Adults over 60 years of age</li>
        <li>Individuals with recurrent urinary tract infections</li>
        <li>Those experiencing symptoms like changes in urination, swelling, or fatigue</li>
        <li>People on medications that may affect kidney function</li>
        <li>Anyone with cardiovascular disease</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs That Suggest You Need a Kidney Function Test</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Changes in urination patterns (frequency, color, or amount)</li>
        <li>Swelling in feet, ankles, hands, or face</li>
        <li>Fatigue or weakness</li>
        <li>Shortness of breath</li>
        <li>Persistent itching</li>
        <li>Nausea or vomiting</li>
        <li>Back pain near kidneys</li>
        <li>High blood pressure that's difficult to control</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by experienced phlebotomists</li>
        <li><strong>Accuracy:</strong> Testing performed in NABL-accredited laboratories</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Expert Guidance:</strong> Optional consultation to explain your results</li>
        <li><strong>Affordable Pricing:</strong> Competitive rates with no hidden costs</li>
        <li><strong>Comprehensive Assessment:</strong> Complete evaluation of kidney health parameters</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Preparing for Your Kidney Function Test</h2>
      <p>
        For the most accurate results:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Fast for 8-12 hours before the test (water is permitted)</li>
        <li>Avoid high-protein meals the day before testing</li>
        <li>Inform our healthcare professionals about any medications you're taking</li>
        <li>Maintain normal hydration (don't overhydrate or dehydrate)</li>
        <li>Avoid strenuous exercise for 24 hours before the test</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your kidney function test report will include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individual values for each parameter tested</li>
        <li>Reference ranges for comparison</li>
        <li>Indication of any abnormal values</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help interpret your results and recommend follow-up actions if needed. Early detection of kidney issues allows for timely intervention and better outcomes.
      </p>
      
      <p className="mt-4">
        Take a proactive step toward monitoring your kidney health. Book BloodLyf's Kidney Function Test for a comprehensive assessment with the convenience of home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default KidneyFunctionTest;
