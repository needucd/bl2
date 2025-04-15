
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const PostCovidHealthCheck = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Post-COVID Health Check",
    "description": "Comprehensive post-COVID health assessment with home sample collection in Trivandrum. Evaluate recovery status and identify lingering effects.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Internal Medicine and Pulmonology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Post-COVID syndrome and complications"
    }
  };

  return (
    <PackageTemplate
      title="Post-COVID Health Check in Trivandrum"
      metaTitle="Post-COVID Health Check in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive post-COVID health assessment with home blood collection in Trivandrum. Evaluate recovery status, identify lingering effects, and monitor organ function."
      packageName="Post-COVID Health Check"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Monitor Your Recovery After COVID-19</h2>
      <p>
        COVID-19 can affect multiple organ systems, and in some cases, symptoms or complications may persist even after recovery from the acute infection. This condition, often referred to as "long COVID" or "post-COVID syndrome," can impact quality of life and overall health for weeks or months after initial recovery.
      </p>
      
      <p className="mt-4">
        BloodLyf's Post-COVID Health Check provides a comprehensive assessment of key health markers that may be affected by COVID-19, helping monitor recovery and identify any lingering effects—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Post-COVID Health Check Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Complete Blood Count:</strong> Evaluates white cells, red cells, platelets</li>
        <li><strong>Inflammatory Markers:</strong> CRP, ESR, ferritin</li>
        <li><strong>D-Dimer:</strong> Assesses risk of abnormal blood clotting</li>
        <li><strong>Cardiac Markers:</strong> Troponin, CPK-MB, LDH</li>
        <li><strong>Liver Function Tests:</strong> SGOT, SGPT, ALP, bilirubin</li>
        <li><strong>Kidney Function Tests:</strong> Creatinine, BUN, uric acid</li>
        <li><strong>Blood Glucose and HbA1c:</strong> Monitors metabolic health</li>
        <li><strong>Lipid Profile:</strong> Cholesterol markers</li>
        <li><strong>Vitamin D:</strong> Important for immune function</li>
        <li><strong>Vitamin B12:</strong> Relevant for neurological symptoms</li>
        <li><strong>Thyroid Function Tests:</strong> TSH, T3, T4</li>
        <li><strong>Electrolytes:</strong> Sodium, potassium, chloride, calcium</li>
        <li><strong>Serum Proteins:</strong> Total protein, albumin, globulin</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider a Post-COVID Health Check?</h2>
      <p>
        This comprehensive assessment is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals who have recovered from COVID-19</li>
        <li>Those experiencing persistent symptoms after COVID-19 recovery</li>
        <li>People with moderate to severe COVID-19 infections</li>
        <li>Individuals who required hospitalization for COVID-19</li>
        <li>Those with pre-existing health conditions who contracted COVID-19</li>
        <li>People experiencing fatigue, breathlessness, or reduced stamina after COVID-19</li>
        <li>Individuals with cognitive symptoms ("brain fog") after COVID-19</li>
        <li>Those wanting to establish a baseline for health markers after recovery</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Common Post-COVID Symptoms That Warrant Monitoring</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Persistent fatigue or muscle weakness</li>
        <li>Shortness of breath or difficulty breathing</li>
        <li>Joint or chest pain</li>
        <li>Memory, concentration, or sleep problems</li>
        <li>Persistent cough</li>
        <li>Headaches</li>
        <li>Heart palpitations</li>
        <li>Loss of smell or taste</li>
        <li>Depression or anxiety</li>
        <li>Fever or chills</li>
        <li>Dizziness when standing</li>
        <li>Worsened symptoms after physical or mental activities</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Analysis:</strong> Multiple markers to assess various organ systems</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Safety:</strong> Minimizes exposure for those still recovering</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of Post-COVID Health Assessment</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Identify lingering inflammation or organ effects</li>
        <li>Establish baseline values for future comparison</li>
        <li>Monitor recovery progress objectively</li>
        <li>Detect potential complications early</li>
        <li>Guide appropriate interventions or treatments</li>
        <li>Provide peace of mind during recovery</li>
        <li>Help determine readiness to resume normal activities</li>
        <li>Inform personalized recovery strategies</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your post-COVID health check report will provide:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Detailed results for each marker tested</li>
        <li>Reference ranges indicating normal levels</li>
        <li>Indications of any abnormal values</li>
        <li>Basic interpretation of findings</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help you understand your results and recommend appropriate follow-up actions, which may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Lifestyle modifications to support recovery</li>
        <li>Nutritional recommendations</li>
        <li>Appropriate supplementation if indicated</li>
        <li>Activity level guidance based on your current status</li>
        <li>Referral to specialists if needed</li>
        <li>Follow-up testing to monitor improvement</li>
      </ul>
      
      <p className="mt-4">
        COVID-19 recovery can be a journey, and understanding your body's status is an important step. Take a proactive approach to your post-COVID health with BloodLyf's comprehensive Post-COVID Health Check, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default PostCovidHealthCheck;
