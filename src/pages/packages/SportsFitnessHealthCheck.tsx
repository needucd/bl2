
import React from 'react';
import PackageTemplate from '@/components/PackageTemplate';

const SportsFitnessHealthCheck = () => {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "name": "Sports & Fitness Health Check",
    "description": "Comprehensive sports and fitness assessment with home sample collection in Trivandrum. Optimize performance, recovery, and training with personalized health insights.",
    "usesDevice": {
      "@type": "MedicalDevice",
      "name": "Blood analysis equipment"
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Sports Medicine"
    },
    "usedToDiagnose": {
      "@type": "MedicalCondition",
      "name": "Sports-related health conditions and fitness optimization"
    }
  };

  return (
    <PackageTemplate
      title="Sports & Fitness Health Check in Trivandrum"
      metaTitle="Sports & Fitness Health Check in Trivandrum | BloodLyf"
      metaDescription="Comprehensive sports and fitness assessment with home blood collection in Trivandrum. Optimize athletic performance, recovery, and training with personalized health insights."
      packageName="Sports & Fitness Health Check"
      schemaData={schemaData}
    >
      <h2 className="text-xl font-medium text-bloodlyf-blue">Optimize Your Athletic Performance</h2>
      <p>
        Whether you're a competitive athlete, fitness enthusiast, or someone beginning a new exercise program, understanding your body's biochemistry and physiology is crucial for optimizing performance, preventing injuries, and ensuring safe, effective training.
      </p>
      
      <p className="mt-4">
        BloodLyf's Sports & Fitness Health Check provides a comprehensive assessment of key health markers relevant to athletic performance and fitness—all with the convenience of home sample collection in Trivandrum.
      </p>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Our Sports & Fitness Health Check Includes:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Complete Blood Count:</strong> Evaluates overall health and oxygen-carrying capacity</li>
        <li><strong>Iron Panel (Iron, Ferritin, TIBC):</strong> Critical for oxygen transport and energy production</li>
        <li><strong>Vitamin D:</strong> Essential for bone health, muscle function, and recovery</li>
        <li><strong>B Vitamins (B12, Folate):</strong> Important for energy metabolism</li>
        <li><strong>Electrolytes (Sodium, Potassium, Chloride, Magnesium):</strong> Critical for muscle function and hydration</li>
        <li><strong>Calcium and Phosphate:</strong> Essential for bone health and muscle contraction</li>
        <li><strong>Testosterone (for men) or Estrogen/Progesterone (for women):</strong> Sex hormones affecting performance and recovery</li>
        <li><strong>Cortisol:</strong> Stress hormone that impacts recovery and adaptation</li>
        <li><strong>CK (Creatine Kinase):</strong> Muscle damage marker</li>
        <li><strong>Liver Function Tests:</strong> SGOT, SGPT, GGT</li>
        <li><strong>Kidney Function Tests:</strong> Creatinine, BUN, GFR</li>
        <li><strong>Lipid Profile:</strong> Cholesterol markers</li>
        <li><strong>Inflammatory Markers:</strong> hs-CRP, ESR</li>
        <li><strong>Thyroid Panel:</strong> TSH, Free T3, Free T4</li>
        <li><strong>Glucose and HbA1c:</strong> Blood sugar regulation</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Who Should Consider a Sports & Fitness Health Check?</h2>
      <p>
        This comprehensive assessment is particularly beneficial for:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Competitive athletes looking to optimize performance</li>
        <li>Fitness enthusiasts wanting to maximize workout effectiveness</li>
        <li>Individuals starting a new exercise program</li>
        <li>Those experiencing decreased performance or unusual fatigue</li>
        <li>Athletes with prolonged recovery times</li>
        <li>People with recurrent injuries or slow healing</li>
        <li>Individuals with specific fitness goals (muscle gain, fat loss, endurance)</li>
        <li>Those following specialized diets for sports performance</li>
        <li>Masters athletes (40+ years)</li>
        <li>Anyone interested in science-based fitness optimization</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Signs That Suggest You Need a Sports Health Assessment</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Unexplained decrease in performance</li>
        <li>Excessive fatigue or prolonged recovery after workouts</li>
        <li>Recurrent injuries or slow healing</li>
        <li>Muscle cramps or unusual soreness</li>
        <li>Decreased motivation for training</li>
        <li>Performance plateaus despite consistent training</li>
        <li>Sleep disturbances</li>
        <li>Changes in mood or energy levels</li>
        <li>Irregular heart rate or breathing issues during exercise</li>
        <li>Unusual weight changes despite consistent training and nutrition</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">The BloodLyf Advantage</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Convenience:</strong> Home sample collection by skilled phlebotomists</li>
        <li><strong>Comprehensive Analysis:</strong> Multiple markers specifically relevant to sports and fitness</li>
        <li><strong>Quick Results:</strong> Digital reports within 24-48 hours</li>
        <li><strong>Expert Interpretation:</strong> Optional consultation with healthcare professionals</li>
        <li><strong>Personalized Insights:</strong> Understanding of your unique physiological profile</li>
        <li><strong>Accuracy:</strong> Testing performed in accredited laboratories</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Benefits of Regular Sports Health Assessment</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Identify nutritional deficiencies affecting performance</li>
        <li>Optimize recovery strategies based on your unique physiology</li>
        <li>Monitor impact of training on health markers</li>
        <li>Detect overtraining or inadequate recovery early</li>
        <li>Personalize nutrition and supplementation strategies</li>
        <li>Establish baseline values for future comparison</li>
        <li>Identify health issues that might affect safe exercise</li>
        <li>Make data-driven training and recovery decisions</li>
      </ul>
      
      <h2 className="text-xl font-medium text-bloodlyf-blue mt-6">Understanding Your Results</h2>
      <p>
        Your sports and fitness health report will provide:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Detailed results for each marker tested</li>
        <li>Reference ranges indicating normal levels</li>
        <li>Indications of any abnormal values</li>
        <li>Basic interpretation of findings relevant to fitness and performance</li>
      </ul>
      <p className="mt-4">
        Our healthcare professionals can help you understand your results and recommend appropriate follow-up actions, which may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Nutritional adjustments to support performance</li>
        <li>Training modifications based on your physiological profile</li>
        <li>Recovery strategy optimization</li>
        <li>Appropriate supplementation if indicated</li>
        <li>Referral to sports medicine specialists if needed</li>
        <li>Follow-up testing to monitor improvement and training adaptations</li>
      </ul>
      
      <p className="mt-4">
        Elite athletes know that small optimizations can make big differences in performance. Take a scientific approach to your fitness and athletic goals with BloodLyf's comprehensive Sports & Fitness Health Check, available with convenient home sample collection in Trivandrum.
      </p>
    </PackageTemplate>
  );
};

export default SportsFitnessHealthCheck;
