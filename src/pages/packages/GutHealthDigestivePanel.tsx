
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const GutHealthDigestivePanel = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Gut Health & Digestive Panel",
    "description": "Comprehensive gut health and digestive system assessment with home sample collection in Trivandrum. Evaluate digestive function and identify issues affecting gut health.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood and stool analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Gastroenterology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Digestive disorders and gut health issues"
    }
  };

  return (
    <PackageTemplate
      title="Gut Health & Digestive Panel in Trivandrum"
      metaTitle="Gut Health & Digestive Testing in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive gut health and digestive system assessment with home sample collection in Trivandrum. Evaluate digestive function and identify issues affecting gut health."
      packageName="Gut Health & Digestive Panel"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Optimize Your Digestive Health</h2>
      <p>
        The digestive system and gut health are increasingly recognized as central to overall wellbeing, impacting everything from nutrient absorption and immune function to mental health and chronic disease risk. Digestive issues are among the most common health complaints, yet many people suffer unnecessarily due to undiagnosed or misdiagnosed conditions.
      </p>
      
      <p className="mt-4">
        BloodLyf's Gut Health & Digestive Panel provides a comprehensive assessment of key markers related to digestive function and gut health—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Gut Health & Digestive Panel Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Complete Blood Count:</strong> Screens for anemia and inflammation</li>
        <li><strong>Liver Function Tests:</strong> SGOT, SGPT, ALP, GGT, bilirubin</li>
        <li><strong>Pancreatic Enzymes:</strong> Amylase, lipase</li>
        <li><strong>Inflammatory Markers:</strong> CRP, ESR</li>
        <li><strong>Celiac Disease Screening:</strong> Anti-tissue transglutaminase antibodies (tTG)</li>
        <li><strong>H. pylori Antibody Test:</strong> Screens for stomach ulcer-causing bacteria</li>
        <li><strong>Vitamin B12:</strong> Often low with digestive absorption issues</li>
        <li><strong>Folate:</strong> Can be affected by digestive health</li>
        <li><strong>Ferritin:</strong> Iron stores often affected by gut issues</li>
        <li><strong>Stool Analysis (optional):</strong> Tests for parasites, pathogenic bacteria, blood, fat content</li>
        <li><strong>Calprotectin (optional):</strong> Marker for intestinal inflammation</li>
        <li><strong>Vitamin D:</strong> Important for gut barrier function</li>
        <li><strong>Zinc:</strong> Essential for digestive enzyme production and gut repair</li>
      </ul>
      
      <p className="mt-4">
        <strong>Note:</strong> Stool tests require a separate collection kit that will be provided with instructions.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs of Digestive Issues</h2>
      <p>
        Consider gut health testing if you experience:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Persistent abdominal pain or discomfort</li>
        <li>Bloating, gas, or excessive burping</li>
        <li>Irregular bowel movements (diarrhea, constipation, or alternating)</li>
        <li>Heartburn or acid reflux</li>
        <li>Nausea or vomiting</li>
        <li>Unexplained weight loss</li>
        <li>Food intolerances or sensitivities</li>
        <li>Fatigue after eating</li>
        <li>Skin issues like eczema or unexplained rashes</li>
        <li>Nutritional deficiencies despite adequate diet</li>
        <li>Joint pain or inflammation</li>
        <li>Mood disorders or brain fog</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Gut Health Testing?</h2>
      <p>
        This comprehensive assessment is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals with persistent digestive symptoms</li>
        <li>Those with suspected food intolerances</li>
        <li>People with autoimmune conditions</li>
        <li>Individuals with skin conditions like eczema or psoriasis</li>
        <li>Those with unexplained fatigue or nutrient deficiencies</li>
        <li>People with a family history of celiac disease or inflammatory bowel disease</li>
        <li>Individuals seeking to optimize digestive health and nutrition</li>
        <li>Those experiencing unexplained weight changes</li>
        <li>People on restricted diets or with limited food variety</li>
        <li>Individuals with frequent infections or immune system concerns</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Analysis:</strong> Multiple markers to assess various aspects of digestive health</li>
        <li><strong>Privacy:</strong> Discreet collection of sensitive samples</li>
        <li><strong>Quick Results:</strong> Digital reports within 2-4 days</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your gut health and digestive panel report will provide:
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
        <li>Dietary modifications to support gut health</li>
        <li>Lifestyle changes to improve digestive function</li>
        <li>Appropriate supplementation if indicated</li>
        <li>Further specialized testing if needed</li>
        <li>Referral to gastroenterologists or other specialists</li>
        <li>Follow-up testing to monitor improvement</li>
      </ul>
      
      <p className="mt-4">
        Digestive health is fundamental to overall wellbeing. Take a proactive approach to your gut health with BloodLyf's comprehensive Gut Health & Digestive Panel, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default GutHealthDigestivePanel;
