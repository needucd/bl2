
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const VitaminDeficiencyPanel = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Vitamin Deficiency Panel",
    "description": "Comprehensive vitamin and mineral assessment with home sample collection in Trivandrum. Identify deficiencies affecting energy, immunity, and overall health.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Nutrition and Dietetics"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Vitamin and mineral deficiencies"
    }
  };

  return (
    <PackageTemplate
      title="Vitamin Deficiency Panel in Trivandrum"
      metaTitle="Vitamin Deficiency Testing in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive vitamin and mineral deficiency testing with home blood collection in Trivandrum. Identify nutritional gaps affecting your energy, immunity, and overall health."
      packageName="Vitamin Deficiency Panel"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Optimize Your Nutritional Health</h2>
      <p>
        Vitamins and minerals are essential micronutrients that play crucial roles in nearly every bodily function, from energy production and immune function to bone health and cognitive performance. Despite a seemingly adequate diet, many people have undetected nutritional deficiencies that can significantly impact health and well-being.
      </p>
      
      <p className="mt-4">
        BloodLyf's Vitamin Deficiency Panel provides a comprehensive assessment of key vitamins and minerals, helping identify specific nutritional gaps that may be affecting your health—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Vitamin Deficiency Panel Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Vitamin B12 (Cobalamin):</strong> Essential for nerve function, DNA synthesis, and red blood cell formation</li>
        <li><strong>Vitamin D (25-OH):</strong> Critical for bone health, immune function, and mood regulation</li>
        <li><strong>Vitamin B9 (Folate):</strong> Important for cell division, DNA synthesis, and preventing certain anemias</li>
        <li><strong>Ferritin:</strong> Reflects iron stores, necessary for oxygen transport and energy production</li>
        <li><strong>Iron:</strong> Essential mineral for hemoglobin production and oxygen transport</li>
        <li><strong>TIBC (Total Iron Binding Capacity):</strong> Helps assess iron status</li>
        <li><strong>Hemoglobin and Complete Blood Count:</strong> Screens for anemia and other blood disorders</li>
        <li><strong>Calcium:</strong> Essential for bone health, muscle function, and nerve signaling</li>
        <li><strong>Magnesium:</strong> Involved in hundreds of biochemical reactions in the body</li>
        <li><strong>Zinc:</strong> Critical for immune function, wound healing, and DNA synthesis</li>
        <li><strong>Vitamin B6 (Pyridoxine):</strong> Important for brain development and function</li>
        <li><strong>Vitamin B1 (Thiamine):</strong> Essential for energy metabolism</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs You May Have Vitamin Deficiencies</h2>
      <p>
        Common symptoms that could indicate nutritional deficiencies include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Persistent fatigue or low energy</li>
        <li>Weakness or muscle cramps</li>
        <li>Hair loss or brittle nails</li>
        <li>Slow wound healing</li>
        <li>Frequent infections or illness</li>
        <li>Numbness or tingling in hands and feet</li>
        <li>Bone or joint pain</li>
        <li>Mood changes, irritability, or depression</li>
        <li>Pale skin or unexplained bruising</li>
        <li>Dizziness or heart palpitations</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Vitamin Deficiency Testing?</h2>
      <p>
        This comprehensive assessment is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals with unexplained fatigue or weakness</li>
        <li>Those following restrictive diets (vegetarian, vegan, etc.)</li>
        <li>People with digestive disorders affecting nutrient absorption</li>
        <li>Adults over 60 years of age</li>
        <li>Pregnant or breastfeeding women</li>
        <li>Individuals with limited sun exposure (for vitamin D)</li>
        <li>Those with autoimmune conditions</li>
        <li>People taking medications that may affect nutrient levels</li>
        <li>Athletes and highly active individuals</li>
        <li>Anyone experiencing symptoms of potential deficiencies</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Analysis:</strong> Testing for multiple vitamins and minerals in one panel</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Personalized Recommendations:</strong> Guidance based on your specific results</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of Identifying and Addressing Deficiencies</h2>
      <p>
        Correcting vitamin and mineral deficiencies can lead to significant improvements in:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Energy levels and reduced fatigue</li>
        <li>Immune function and resistance to illness</li>
        <li>Bone health and fracture risk</li>
        <li>Cognitive function and mood</li>
        <li>Hair, skin, and nail health</li>
        <li>Sleep quality</li>
        <li>Physical performance and exercise recovery</li>
        <li>Overall wellbeing and quality of life</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your vitamin deficiency panel report will provide:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Detailed results for each vitamin and mineral tested</li>
        <li>Reference ranges indicating optimal levels</li>
        <li>Indications of any deficiencies or excesses</li>
        <li>Basic interpretation of findings</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help you understand your results and recommend appropriate follow-up actions, which may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Dietary modifications to increase specific nutrients</li>
        <li>Appropriate supplementation strategies</li>
        <li>Lifestyle changes to improve nutrient absorption</li>
        <li>Referral to specialists if needed</li>
        <li>Follow-up testing to monitor improvement</li>
      </ul>
      
      <p className="mt-4">
        Optimal nutrition is the foundation of good health. Take a proactive approach to your nutritional status with BloodLyf's comprehensive Vitamin Deficiency Panel, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default VitaminDeficiencyPanel;
