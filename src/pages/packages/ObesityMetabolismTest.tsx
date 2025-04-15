
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const ObesityMetabolismTest = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Obesity & Metabolism Test",
    "description": "Comprehensive obesity and metabolism assessment with home sample collection in Trivandrum. Analyze metabolic health and weight management factors.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Endocrinology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Metabolic disorders and obesity"
    }
  };

  return (
    <PackageTemplate
      title="Obesity & Metabolism Test in Trivandrum"
      metaTitle="Obesity & Metabolism Test in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive obesity and metabolism assessment with home blood collection in Trivandrum. Includes hormonal analysis, lipid profiling, and insulin resistance testing."
      packageName="Obesity & Metabolism Test"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Understanding Metabolic Health</h2>
      <p>
        Metabolic health is a crucial aspect of overall wellness that affects weight management, energy levels, and risk for various chronic diseases. Our Obesity & Metabolism Test provides a comprehensive assessment of your metabolic function, helping identify factors that may contribute to weight management challenges and metabolic disorders.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Obesity & Metabolism Test Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Fasting Blood Glucose:</strong> Measures blood sugar levels after fasting</li>
        <li><strong>HbA1c:</strong> Evaluates average blood glucose over 2-3 months</li>
        <li><strong>Insulin Levels:</strong> Assesses insulin production and sensitivity</li>
        <li><strong>HOMA-IR:</strong> Calculates insulin resistance</li>
        <li><strong>Complete Lipid Profile:</strong> Measures cholesterol and triglycerides</li>
        <li><strong>Thyroid Function Tests (TSH, T3, T4):</strong> Evaluates thyroid hormone balance</li>
        <li><strong>Cortisol Level:</strong> Measures stress hormone that affects metabolism</li>
        <li><strong>Leptin & Ghrelin Analysis:</strong> Assesses hunger and satiety hormones</li>
        <li><strong>Liver Function Tests:</strong> Evaluates fatty liver risk</li>
        <li><strong>Vitamin D Level:</strong> Important for metabolic health</li>
        <li><strong>High-Sensitivity CRP:</strong> Measures inflammation</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Our Obesity & Metabolism Test?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals struggling with weight management</li>
        <li>Those with a family history of diabetes or metabolic syndrome</li>
        <li>People experiencing unexplained weight gain or difficulty losing weight</li>
        <li>Individuals with fatigue, energy fluctuations, or mood swings</li>
        <li>Those with abdominal obesity or high waist-to-hip ratio</li>
        <li>People with high blood pressure or elevated cholesterol</li>
        <li>Individuals looking to optimize their metabolic health</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of Metabolic Testing</h2>
      <p>
        Understanding your metabolic profile can provide numerous benefits:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Identify underlying causes of weight management challenges</li>
        <li>Detect early signs of insulin resistance before diabetes develops</li>
        <li>Discover hormonal imbalances affecting metabolism</li>
        <li>Guide personalized dietary and lifestyle interventions</li>
        <li>Monitor effectiveness of weight management strategies</li>
        <li>Reduce risk for metabolic syndrome and related conditions</li>
        <li>Support long-term metabolic health</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection in Trivandrum</li>
        <li><strong>Comprehensive Analysis:</strong> Complete metabolic health assessment</li>
        <li><strong>Expert Interpretation:</strong> Detailed reports with clear explanations</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Professional Support:</strong> Optional consultation to discuss results and recommendations</li>
      </ul>
      
      <p className="mt-4">
        Take control of your metabolic health with BloodLyf's Obesity & Metabolism Test. Our comprehensive assessment provides valuable insights to help you achieve optimal weight management and overall metabolic wellness.
      </p>
    </PackageTemplate>
  );
};

export default ObesityMetabolismTest;
