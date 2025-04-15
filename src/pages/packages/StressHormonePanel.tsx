
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const StressHormonePanel = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Stress Hormone Panel",
    "description": "Comprehensive stress hormone assessment with home sample collection in Trivandrum. Evaluate cortisol, adrenal function, and hormonal balance.",
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
      "name": "Adrenal dysfunction and stress-related disorders"
    }
  };

  return (
    <PackageTemplate
      title="Stress Hormone Panel in Trivandrum"
      metaTitle="Stress Hormone Testing in Trivandrum | Home Collection | BloodLyf"
      metaDescription="Comprehensive stress hormone assessment with home blood collection in Trivandrum. Evaluate cortisol levels, adrenal function, and hormonal balance."
      packageName="Stress Hormone Panel"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Understand Your Body's Stress Response</h2>
      <p>
        Chronic stress is increasingly recognized as a significant factor in many health conditions, from metabolic disorders and cardiovascular disease to immune dysfunction and mental health challenges. The body's response to stress involves a complex interplay of hormones that, when chronically imbalanced, can have far-reaching effects on overall health and wellbeing.
      </p>
      
      <p className="mt-4">
        BloodLyf's Stress Hormone Panel provides a comprehensive assessment of key hormones involved in the stress response, helping identify imbalances that may be affecting your health—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Stress Hormone Panel Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Morning Cortisol:</strong> Primary stress hormone, typically highest in the morning</li>
        <li><strong>Evening Cortisol:</strong> Assesses diurnal rhythm of cortisol, normally lower in the evening</li>
        <li><strong>DHEA-S:</strong> Adrenal hormone that often balances cortisol effects</li>
        <li><strong>Adrenaline (Epinephrine):</strong> "Fight or flight" hormone</li>
        <li><strong>Noradrenaline (Norepinephrine):</strong> Stress hormone that affects blood pressure and heart rate</li>
        <li><strong>Insulin:</strong> Affected by stress hormones</li>
        <li><strong>Thyroid Panel (TSH, Free T3, Free T4):</strong> Thyroid function is often affected by chronic stress</li>
        <li><strong>Prolactin:</strong> Can be elevated during stress</li>
        <li><strong>Complete Blood Count:</strong> General health assessment</li>
        <li><strong>HbA1c:</strong> Measures average blood glucose, which can be affected by stress</li>
        <li><strong>Vitamin D:</strong> Often depleted during chronic stress</li>
        <li><strong>Magnesium:</strong> Important mineral often depleted by stress</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs of Potential Hormonal Stress Imbalances</h2>
      <p>
        Consider stress hormone testing if you experience:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Persistent fatigue, even after adequate rest</li>
        <li>"Wired but tired" feeling, especially in the evening</li>
        <li>Difficulty falling or staying asleep</li>
        <li>Weight gain, particularly around the abdomen</li>
        <li>Mood changes, irritability, anxiety, or depression</li>
        <li>Poor concentration or "brain fog"</li>
        <li>Reduced stress tolerance</li>
        <li>Frequent infections or slow healing</li>
        <li>Cravings for salt, sugar, or stimulants</li>
        <li>Blood sugar fluctuations</li>
        <li>Reduced exercise tolerance or recovery</li>
        <li>Low libido or reproductive issues</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider Stress Hormone Testing?</h2>
      <p>
        This comprehensive assessment is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Individuals experiencing chronic stress</li>
        <li>Those with persistent fatigue or low energy</li>
        <li>People with sleep disturbances</li>
        <li>Individuals with unexplained weight changes</li>
        <li>Those with mood disorders or anxiety</li>
        <li>People with hormonal imbalances</li>
        <li>Individuals with autoimmune conditions</li>
        <li>Those with burnout symptoms</li>
        <li>People with metabolic issues or insulin resistance</li>
        <li>Individuals with high-stress occupations</li>
        <li>Those going through major life transitions or challenges</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Analysis:</strong> Multiple hormones and related markers</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Personalized Insights:</strong> Understanding of your unique hormonal stress response</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your stress hormone panel report will provide:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Detailed results for each hormone and marker tested</li>
        <li>Reference ranges indicating normal levels</li>
        <li>Indications of any abnormal values</li>
        <li>Basic interpretation of findings</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help you understand your results and recommend appropriate follow-up actions, which may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Stress management techniques</li>
        <li>Nutritional strategies to support adrenal function</li>
        <li>Supplementation recommendations if appropriate</li>
        <li>Sleep optimization strategies</li>
        <li>Exercise modifications</li>
        <li>Referral to specialists if indicated</li>
        <li>Follow-up testing to monitor improvement</li>
      </ul>
      
      <p className="mt-4">
        Understanding your body's stress response is key to addressing the root causes of many health issues. Take a proactive approach with BloodLyf's comprehensive Stress Hormone Panel, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default StressHormonePanel;
