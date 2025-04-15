
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const CancerScreening = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Cancer Screening",
    "description": "Comprehensive cancer screening tests with home sample collection in Trivandrum. Early detection, accurate results, and professional consultation.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood testing equipment and analysis tools"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Oncology"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Cancer"
    }
  };

  return (
    <PackageTemplate
      title="Cancer Screening Tests in Trivandrum"
      metaTitle="Cancer Screening Tests in Trivandrum | Early Detection | BloodLyf"
      metaDescription="Comprehensive cancer screening tests with home sample collection in Trivandrum. Early detection tests for various cancers with accurate, confidential results."
      packageName="Cancer Screening"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">The Importance of Early Cancer Detection</h2>
      <p>
        Cancer is one of the leading causes of mortality worldwide, but early detection significantly improves treatment outcomes and survival rates. Regular cancer screening is a crucial preventive measure that can detect cancer before symptoms appear, when it is most treatable.
      </p>
      
      <p className="mt-4">
        BloodLyf offers comprehensive cancer screening packages with convenient home sample collection in Trivandrum. Our screening tests are designed to detect early signs and risk factors for various types of cancer, providing you with valuable information about your health.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Cancer Screening Package Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Tumor Marker Tests:</strong> Blood tests that detect proteins and substances associated with specific cancers</li>
        <li><strong>CEA (Carcinoembryonic Antigen):</strong> Marker for colorectal cancer and other cancers</li>
        <li><strong>AFP (Alpha-Fetoprotein):</strong> Marker for liver cancer</li>
        <li><strong>CA 125:</strong> Marker for ovarian cancer</li>
        <li><strong>CA 19-9:</strong> Marker for pancreatic cancer</li>
        <li><strong>PSA (Prostate-Specific Antigen):</strong> Marker for prostate cancer (for men)</li>
        <li><strong>CA 15-3:</strong> Marker for breast cancer</li>
        <li><strong>Complete Blood Count:</strong> Basic blood screening that can indicate blood cancers</li>
        <li><strong>LDH (Lactate Dehydrogenase):</strong> Enzyme elevated in many cancer types</li>
        <li><strong>Comprehensive Metabolic Panel:</strong> Evaluates organ function</li>
      </ul>
      
      <p className="mt-4">
        <strong>Note:</strong> Cancer screening blood tests can identify potential concerns, but they are not definitive diagnostic tools. Abnormal results require follow-up with specialized diagnostic procedures and medical consultation.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Cancer Screening?</h2>
      <p>
        Cancer screening is particularly important for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals with a family history of cancer</li>
        <li>Those with known genetic predispositions to certain cancers</li>
        <li>People with previous cancer diagnosis</li>
        <li>Individuals exposed to known carcinogens</li>
        <li>Adults reaching age-appropriate screening milestones (e.g., 45+ for colorectal cancer)</li>
        <li>Those experiencing unexplained symptoms or health changes</li>
        <li>Smokers or former smokers</li>
        <li>Anyone seeking preventive health measures</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Privacy and Comfort:</strong> Sample collection in the privacy of your home</li>
        <li><strong>Expert Handling:</strong> Samples collected by trained phlebotomists</li>
        <li><strong>Accurate Testing:</strong> Analysis performed in accredited laboratories</li>
        <li><strong>Timely Results:</strong> Digital reports delivered securely</li>
        <li><strong>Confidentiality:</strong> Complete privacy of your health information</li>
        <li><strong>Professional Consultation:</strong> Optional review of results with healthcare professionals</li>
        <li><strong>Holistic Approach:</strong> Comprehensive screening across multiple cancer types</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Cancer Screening Results</h2>
      <p>
        It's important to understand that:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Elevated tumor markers don't necessarily mean you have cancer</li>
        <li>Many non-cancerous conditions can cause elevated markers</li>
        <li>Some early cancers may not cause elevated markers</li>
        <li>Results should always be interpreted by healthcare professionals</li>
        <li>Abnormal results require appropriate follow-up testing</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">After Your Screening</h2>
      <p>
        Following your cancer screening:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>You'll receive a comprehensive report of all marker levels</li>
        <li>Results will be compared to standard reference ranges</li>
        <li>Our healthcare team can provide initial interpretation</li>
        <li>We can refer you to specialists if follow-up is needed</li>
        <li>Recommendations for future screening will be provided</li>
      </ul>
      
      <p className="mt-4">
        Early detection is your best defense against cancer. Regular screening is particularly important if you have risk factors or a family history of cancer. BloodLyf's Cancer Screening Package offers a convenient, comprehensive approach to monitoring your health and detecting potential issues early.
      </p>
      
      <p className="mt-4">
        Take a proactive step toward protecting your health. Book BloodLyf's Cancer Screening Package for thorough, convenient cancer screening with home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default CancerScreening;
