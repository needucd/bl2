
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const LiverFunctionTest = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Liver Function Test",
    "description": "Comprehensive liver function assessment with home sample collection in Trivandrum. Evaluate liver health and detect early signs of liver disease.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Hepatology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Liver disease"
    }
  };

  return (
    <PackageTemplate
      title="Liver Function Test in Trivandrum"
      metaTitle="Liver Function Test in Trivandrum | Home Blood Collection | BloodLyf"
      metaDescription="Comprehensive liver function tests with home blood collection in Trivandrum. Assess liver health, detect liver diseases early, and get same-day results."
      packageName="Liver Function Test"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Monitor Your Liver Health</h2>
      <p>
        The liver is one of your body's most vital organs, responsible for hundreds of essential functions including detoxification, protein synthesis, and digestion. Regular liver function tests are crucial for monitoring liver health and detecting potential issues before they become serious.
      </p>
      
      <p className="mt-4">
        BloodLyf offers comprehensive liver function testing with convenient home sample collection in Trivandrum. Our testing packages provide a thorough assessment of liver health parameters to help you maintain optimal health.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Liver Function Test Package Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Alanine Aminotransferase (ALT):</strong> Enzyme that indicates liver cell damage</li>
        <li><strong>Aspartate Aminotransferase (AST):</strong> Enzyme found in liver cells, elevated in liver damage</li>
        <li><strong>Alkaline Phosphatase (ALP):</strong> Enzyme that indicates bile duct obstructions</li>
        <li><strong>Gamma-Glutamyl Transferase (GGT):</strong> Sensitive indicator of liver disease and alcohol consumption</li>
        <li><strong>Total Bilirubin:</strong> Measures breakdown product of hemoglobin</li>
        <li><strong>Direct & Indirect Bilirubin:</strong> Different forms of bilirubin in blood</li>
        <li><strong>Total Protein:</strong> Measures proteins in blood, including those made by the liver</li>
        <li><strong>Albumin:</strong> Main protein produced by the liver</li>
        <li><strong>Globulin:</strong> Another group of proteins in the blood</li>
        <li><strong>Albumin/Globulin Ratio:</strong> Comparison of these proteins</li>
        <li><strong>Prothrombin Time (PT):</strong> Measures blood clotting efficiency</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Liver Function Testing?</h2>
      <p>
        Liver function testing is particularly important for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>People with symptoms of liver problems (jaundice, fatigue, abdominal pain)</li>
        <li>Those with a family history of liver disease</li>
        <li>Individuals who consume alcohol regularly</li>
        <li>People with obesity or diabetes</li>
        <li>Those taking medications that may affect liver function</li>
        <li>Individuals with known hepatitis infection or exposure</li>
        <li>People with unexplained fatigue or weakness</li>
        <li>Anyone experiencing unexplained weight loss</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs That Suggest You Need a Liver Function Test</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Yellowing of skin or eyes (jaundice)</li>
        <li>Abdominal pain or swelling</li>
        <li>Chronic fatigue</li>
        <li>Nausea or vomiting</li>
        <li>Dark urine color</li>
        <li>Pale stool color</li>
        <li>Itchy skin</li>
        <li>Easy bruising</li>
        <li>Swelling in legs and ankles</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Accuracy:</strong> Testing performed in state-of-the-art laboratories</li>
        <li><strong>Quick Results:</strong> Digital reports within 24 hours</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Affordable Pricing:</strong> Competitive rates with transparent billing</li>
        <li><strong>Comprehensive Assessment:</strong> Complete evaluation of liver health parameters</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Preparing for Your Liver Function Test</h2>
      <p>
        For the most accurate results:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Fast for 8-12 hours before the test (water is permitted)</li>
        <li>Avoid alcohol for at least 24 hours before testing</li>
        <li>Inform our healthcare professionals about any medications you're taking</li>
        <li>Maintain normal diet in the days leading up to the test</li>
        <li>Avoid strenuous exercise for 24 hours before the test</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your liver function test report will include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individual values for each enzyme and protein tested</li>
        <li>Reference ranges for normal levels</li>
        <li>Indication of any abnormal values</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help interpret your results and recommend follow-up actions if needed. Early detection of liver issues allows for timely intervention and better outcomes.
      </p>
      
      <p className="mt-4">
        Take a proactive step toward maintaining your liver health. Book BloodLyf's Liver Function Test for a comprehensive assessment with the convenience of home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default LiverFunctionTest;
