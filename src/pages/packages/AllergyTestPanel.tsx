
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const AllergyTestPanel = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Allergy Test Panel",
    "description": "Comprehensive allergy testing with home sample collection in Trivandrum. Identify allergic triggers and sensitivities with accurate blood testing.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Allergy and Immunology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Allergies and hypersensitivities"
    }
  };

  return (
    <PackageTemplate
      title="Allergy Test Panel in Trivandrum"
      metaTitle="Allergy Test Panel in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive allergy testing with home blood collection in Trivandrum. Identify food, environmental, and seasonal allergies with accurate blood tests."
      packageName="Allergy Test Panel"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Identify Your Allergic Triggers</h2>
      <p>
        Allergies affect millions of people worldwide, causing symptoms ranging from mildly annoying to severely debilitating or even life-threatening. An allergy occurs when your immune system reacts to a foreign substance that doesn't cause a reaction in most people. Identifying specific allergic triggers is crucial for effective management and symptom relief.
      </p>
      
      <p className="mt-4">
        BloodLyf's Allergy Test Panel provides comprehensive blood testing to identify specific allergens triggering your immune response—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Allergy Test Panel Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Total IgE:</strong> Measures overall levels of allergy antibodies</li>
        <li><strong>Specific IgE Tests for Common Allergens:</strong></li>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li><strong>Food Allergens:</strong> Milk, eggs, wheat, soy, peanuts, tree nuts, fish, shellfish</li>
          <li><strong>Environmental Allergens:</strong> Dust mites, pet dander (cat, dog), molds</li>
          <li><strong>Seasonal Allergens:</strong> Various pollens (grass, trees, weeds)</li>
          <li><strong>Insect Venom:</strong> Bee, wasp</li>
          <li><strong>Other Common Allergens:</strong> Latex, certain medications</li>
        </ul>
        <li><strong>Eosinophil Count:</strong> White blood cells often elevated in allergic conditions</li>
        <li><strong>Complete Blood Count:</strong> Provides overall picture of blood cell levels</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs You May Have Allergies</h2>
      <p>
        Common symptoms of allergies include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Sneezing and runny or stuffy nose</li>
        <li>Itchy, watery eyes</li>
        <li>Wheezing, coughing, or shortness of breath</li>
        <li>Skin rashes, hives, or eczema</li>
        <li>Swelling of lips, tongue, face, or throat</li>
        <li>Digestive symptoms after eating certain foods</li>
        <li>Frequent headaches or fatigue</li>
        <li>Chronic sinus infections</li>
        <li>Persistent cough or throat clearing</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Allergy Testing?</h2>
      <p>
        Allergy testing is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals with recurring or chronic allergy-like symptoms</li>
        <li>Those with suspected food allergies or intolerances</li>
        <li>People with seasonal symptoms that occur at the same time each year</li>
        <li>Individuals with skin conditions like eczema or chronic hives</li>
        <li>Those with respiratory conditions like asthma</li>
        <li>People who have experienced severe allergic reactions</li>
        <li>Individuals planning to start immunotherapy (allergy shots)</li>
        <li>Those who want to identify specific triggers to avoid</li>
        <li>People with a family history of allergies</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Advantages of Blood Testing for Allergies</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Safe for all ages, including infants and elderly</li>
        <li>No risk of allergic reactions during testing</li>
        <li>Ability to test for numerous allergens with a single blood sample</li>
        <li>Can be performed regardless of skin condition (unlike skin prick tests)</li>
        <li>No need to stop antihistamines before testing</li>
        <li>Quantitative results showing severity of allergic sensitization</li>
        <li>Convenient home sampling without multiple clinic visits</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Testing:</strong> Multiple allergens from various categories</li>
        <li><strong>Quick Results:</strong> Digital reports within 2-3 business days</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
        <li><strong>Comfort:</strong> Avoids the discomfort of skin prick testing</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your allergy test panel report will provide:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Total IgE level and reference range</li>
        <li>Specific IgE levels for each allergen tested</li>
        <li>Classification of sensitivity level (from 0-6 or similar scale)</li>
        <li>Basic interpretation of findings</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help you understand your results and recommend appropriate follow-up actions, which may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Allergen avoidance strategies</li>
        <li>Lifestyle modifications to reduce exposure</li>
        <li>Appropriate medication options</li>
        <li>Referral to allergists for further evaluation or treatment</li>
        <li>Information about immunotherapy if appropriate</li>
        <li>Emergency preparedness for severe allergies</li>
      </ul>
      
      <p className="mt-4">
        Identifying your specific allergens is the first step toward effective allergy management and symptom relief. Take control of your allergies with BloodLyf's comprehensive Allergy Test Panel, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default AllergyTestPanel;
