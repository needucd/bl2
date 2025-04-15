
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const ArthritisBoneHealth = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Arthritis & Bone Health Panel",
    "description": "Comprehensive arthritis and bone health assessment with home sample collection in Trivandrum. Early detection of bone disorders and risk assessment.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Rheumatology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Arthritis and bone health disorders"
    }
  };

  return (
    <PackageTemplate
      title="Arthritis & Bone Health Panel in Trivandrum"
      metaTitle="Arthritis & Bone Health Panel in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive arthritis and bone health assessment with home blood collection in Trivandrum. Includes inflammatory markers, bone density indicators, and vitamin D testing."
      packageName="Arthritis & Bone Health Panel"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Understanding Bone Health and Arthritis</h2>
      <p>
        Bone health and joint function are crucial aspects of overall well-being, particularly as we age. Our Arthritis & Bone Health Panel is designed to assess the health of your bones and joints, identify early signs of arthritis, and evaluate risk factors for osteoporosis and other bone disorders.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">What Our Arthritis & Bone Health Panel Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Calcium & Phosphorus Levels:</strong> Essential minerals for bone health</li>
        <li><strong>Vitamin D Test:</strong> Critical for calcium absorption and bone strength</li>
        <li><strong>Rheumatoid Factor (RF):</strong> Indicator for rheumatoid arthritis</li>
        <li><strong>Anti-CCP Antibody Test:</strong> Specific marker for rheumatoid arthritis</li>
        <li><strong>Erythrocyte Sedimentation Rate (ESR):</strong> Measures inflammation levels</li>
        <li><strong>C-Reactive Protein (CRP):</strong> General inflammation marker</li>
        <li><strong>Uric Acid Test:</strong> For gout assessment</li>
        <li><strong>Alkaline Phosphatase (ALP):</strong> Bone formation indicator</li>
        <li><strong>Parathyroid Hormone (PTH):</strong> Regulates calcium levels</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Our Arthritis & Bone Health Panel?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Adults over 45 years of age</li>
        <li>Postmenopausal women</li>
        <li>Individuals with a family history of osteoporosis or arthritis</li>
        <li>Those experiencing joint pain, stiffness, or swelling</li>
        <li>People with limited sun exposure or low vitamin D intake</li>
        <li>Individuals on long-term medications that affect bone health</li>
        <li>Those with calcium metabolism disorders</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of Early Detection and Monitoring</h2>
      <p>
        Regular monitoring of bone health and arthritis markers allows for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Early intervention to prevent bone loss and joint damage</li>
        <li>Appropriate supplementation of calcium and vitamin D</li>
        <li>Proper management of inflammatory conditions</li>
        <li>Lifestyle modifications to support bone and joint health</li>
        <li>Reduced risk of fractures and mobility issues</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection in Trivandrum</li>
        <li><strong>Comprehensive Analysis:</strong> Complete evaluation of bone and joint health parameters</li>
        <li><strong>Expert Interpretation:</strong> Detailed reports with explanations of results</li>
        <li><strong>Quick Turnaround:</strong> Results available within 24-48 hours</li>
        <li><strong>Professional Follow-up:</strong> Optional consultation to discuss results and recommendations</li>
      </ul>
      
      <p className="mt-4">
        Take proactive steps to protect your bone and joint health with BloodLyf's Arthritis & Bone Health Panel. Early detection and regular monitoring are key to maintaining mobility and quality of life as you age.
      </p>
    </PackageTemplate>
  );
};

export default ArthritisBoneHealth;
