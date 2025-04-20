import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Clock, ChevronRight, CheckCircle, Truck, HeartPulse } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import BlurGlass from '@/components/ui/BlurGlass';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const packages = [
  {
  id: "advanced-full-body-checkup",
  name: "Advanced Full Body Checkup",
  category: "Full Body Checkups",
  price: 2500,
  originalPrice: 5250,
  rating: 4.8,
  reviewCount: 124,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "BloodLyf’s Advanced Full Body Checkup includes all essential tests to monitor your complete health status. It helps in early detection of metabolic, hormonal, nutritional, and organ function-related issues — making it ideal for comprehensive screening.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Erythrocyte Sedimentation Rate (ESR)",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Lipid Profile",
    "HbA1c",
    "Thyroid Stimulating Hormone (TSH)",
    "Vitamin B12",
    "Vitamin D",
    "Calcium",
    "Phosphorus",
    "Urine Complete Examination (CUE)"
  ],
  recommendations: [
    "Recommended for individuals above 30 years",
    "Ideal for comprehensive preventive screening",
    "Suggested once every 6 to 12 months"
  ]
}

  ,
  {
    id: "basic-health-checkup",
    name: "Basic Health Checkup",
    category: "Full Body Checkups",
    price: 1100,
    originalPrice: 1580,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Our Basic Health Checkup package gives you a fundamental overview of your health status. It includes core tests like CBC, liver and kidney function, blood sugar, lipid profile, and urine analysis to detect early signs of health issues.",
    inclusions: [
      "Complete Blood Count (CBC)",
      "Blood Glucose (Fasting)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Urine Routine Examination",
      "Erythrocyte Sedimentation Rate (ESR)"
    ],
    recommendations: [
      "Recommended for adults of all ages",
      "Suggested frequency: Annual checkup",
      "Best for general health assessment"
    ]
  }
  ,

  {
    id: "executive-health-checkup",
    name: "Executive Health Checkup",
    category: "Full Body Checkups",
    price: 3200,
    originalPrice: 6000,
    rating: 4.9,
    reviewCount: 150,
    image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "BloodLyf's Executive Health Checkup is designed for working professionals, leaders, and executives who want a deep dive into their health. It includes an advanced panel of hormonal, cardiac, metabolic, and cancer markers to ensure early detection and proactive wellness management.",
    inclusions: [
      "Complete Blood Count (CBC)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Thyroid Stimulating Hormone (TSH)",
      "HbA1c",
      "Homocysteine",
      "hsCRP",
      "Apo A1",
      "Apo B",
      "Vitamin D",
      "Vitamin B12",
      "ECG",
      "PSA",
      "CA-125"
    ],
    recommendations: [
      "Ideal for working professionals, executives, and high-stress lifestyle individuals",
      "Suggested every 12 months for proactive screening",
      "Covers cardiac, hormonal, metabolic, and cancer risk markers"
    ]
  }
    ,

    {
      id: "senior-citizen-health-package",
      name: "Senior Citizen Health Package",
      category: "Full Body Checkups",
      price: 5000,
      originalPrice: 8950,
      rating: 4.9,
      reviewCount: 112,
      image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "This Senior Citizen Health Package is designed to provide a comprehensive overview of all vital health parameters in aging adults. It covers chronic condition screening, heart health, kidney and liver function, cancer markers, and bone health — making it ideal for proactive elderly care.",
      inclusions: [
        "Complete Blood Count (CBC)",
        "HbA1c",
        "Thyroid Stimulating Hormone (TSH)",
        "Kidney Function Test (KFT)",
        "Liver Function Test (LFT)",
        "Lipid Profile",
        "Calcium",
        "Vitamin D",
        "Vitamin B12",
        "ECG",
        "PSA",
        "CA-125",
        "Urine Complete Examination (CUE)",
        "Homocysteine",
        "Ferritin",
        "Bone Profile"
      ],
      recommendations: [
        "Highly recommended for individuals aged 60 and above",
        "Best suited for chronic condition monitoring and early risk detection",
        "Suggested once every 6 months or as per physician's advice"
      ]
    },
    {
      id: "womens-wellness-package",
      name: "Women's Wellness Package",
      category: "Full Body Checkups",
      price: 3500,
      originalPrice: 6650,
      rating: 4.8,
      reviewCount: 98,
      image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "The Women's Wellness Package is tailored to address essential health parameters for women of all ages. It includes a broad range of tests to monitor hormonal balance, cancer markers, vitamin levels, and organ health, providing a complete view of overall well-being.",
      inclusions: [
        "Complete Blood Count (CBC)",
        "Thyroid Stimulating Hormone (TSH)",
        "HbA1c",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Lipid Profile",
        "CA-125",
        "Vitamin D",
        "Vitamin B12",
        "Folic Acid",
        "Follicle Stimulating Hormone (FSH)",
        "Luteinizing Hormone (LH)",
        "Prolactin",
        "Urine Complete Examination (CUE)"
      ],
      recommendations: [
        "Ideal for women of all age groups",
        "Suggested once a year for hormone and health monitoring",
        "Helpful in screening for early symptoms of deficiencies, hormonal imbalance, and gynecologic conditions"
      ]
    }
,    
{
  id: "mens-wellness-package",
  name: "Men's Wellness Package",
  category: "Full Body Checkups",
  price: 7000,
  originalPrice: 11650,
  rating: 4.8,
  reviewCount: 105,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "The Men's Wellness Package is designed to address key health concerns for men, including hormonal balance, cardiac health, organ function, and nutritional status. It enables early detection of lifestyle-related risks and supports long-term well-being.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Prostate Specific Antigen (PSA)",
    "Testosterone",
    "Thyroid Stimulating Hormone (TSH)",
    "HbA1c",
    "Lipid Profile",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Vitamin D",
    "Vitamin B12",
    "Homocysteine",
    "Apolipoprotein A1 (Apo A1)",
    "Apolipoprotein B (Apo B)"
  ],
  recommendations: [
    "Ideal for men aged 30 and above",
    "Suggested annually for preventive health tracking",
    "Helps detect early signs of hormonal, cardiac, and metabolic imbalances"
  ]
}
,
{
  id: "pre-marital-health-check",
  name: "Pre-Marital Health Check",
  category: "Full Body Checkups",
  price: 14000,
  originalPrice: 17400,
  rating: 4.9,
  reviewCount: 88,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This Pre-Marital Health Check package is tailored for couples planning marriage. It screens for genetic, infectious, and reproductive health markers to ensure informed decision-making and promote long-term wellness.",
  inclusions: [
    "Complete Blood Count (CBC)",
    "Hb Electrophoresis",
    "VDRL",
    "HIV",
    "HBsAg",
    "HCV",
    "Blood Group",
    "Urine Complete Examination (CUE)",
    "Rubella IgG",
    "Thalassemia Screening"
  ],
  recommendations: [
    "Recommended for individuals planning to get married",
    "Helps detect hereditary and infectious conditions early",
    "Ensures responsible health planning for future family life"
  ]
}
,
{
  id: "diabetes-screening",
  name: "Diabetes Screening",
  category: "Disease-Specific Tests",
  price: 1500,
  originalPrice: 3340,
  rating: 4.7,
  reviewCount: 76,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This Diabetes Screening package is designed to detect early signs of diabetes and monitor blood sugar management effectively. It includes glucose and insulin levels, long-term glycemic control markers, and kidney-related complications.",
  inclusions: [
    "Fasting Glucose",
    "Postprandial Glucose",
    "HbA1c",
    "Insulin",
    "Urine Microalbumin",
    "Creatinine",
    "Lipid Profile"
  ],
  recommendations: [
    "Recommended for individuals at risk of diabetes or with a family history",
    "Ideal for monitoring blood glucose and related kidney complications",
    "Suggested every 6–12 months based on health status"
  ]
},

{
  "id": "thyroid-panel",
  "name": "Thyroid Panel",
  "category": "Disease-Specific Tests",
  "price": 550,
  "originalPrice": 600,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Thyroid Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "TSH",
    "T3",
    "T4",
    "Anti-TPO"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "heart-health-package",
  "name": "Heart Health Package",
  "category": "Preventive & Lifestyle Tests",
  "price": 12000,
  "originalPrice": 18200,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Heart Health Package package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Lipid Profile",
    "hsCRP",
    "Apo A1",
    "Apo B",
    "Homocysteine",
    "Lp(a)",
    "Troponin-I"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "kidney-function-test",
  "name": "Kidney Function Test",
  "category": "Preventive & Lifestyle Tests",
  "price": 11000,
  "originalPrice": 13035,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Kidney Function Test package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Creatinine",
    "BUN",
    "Uric Acid",
    "eGFR",
    "Calcium",
    "Phosphorus",
    "Urine Routine",
    "ACR"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "liver-function-test",
  "name": "Liver Function Test",
  "category": "Preventive & Lifestyle Tests",
  "price": 900,
  "originalPrice": 1350,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Liver Function Test package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Bilirubin",
    "SGOT",
    "SGPT",
    "ALP",
    "GGT",
    "Albumin",
    "Globulin",
    "Prothrombin Time"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "cancer-screening",
  "name": "Cancer Screening",
  "category": "Preventive & Lifestyle Tests",
  "price": 1900,
  "originalPrice": 2500,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Cancer Screening package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "CBC",
    "ESR",
    "CA-125",
    "PSA",
    "CEA",
    "AFP",
    "LDH",
    "Ferritin"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "arthritis-bone-health",
  "name": "Arthritis & Bone Health",
  "category": "Preventive & Lifestyle Tests",
  "price": 2200,
  "originalPrice": 4850,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Arthritis & Bone Health package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "RA Factor",
    "CRP",
    "ESR",
    "ANA",
    "Uric Acid",
    "Vitamin D",
    "Calcium",
    "PTH"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "vitamin-deficiency-panel",
  "name": "Vitamin Deficiency Panel",
  "category": "Disease-Specific Tests",
  "price": 3900,
  "originalPrice": 2000,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Vitamin Deficiency Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Vitamin D",
    "Vitamin B12",
    "Folic Acid",
    "Iron Studies",
    "Calcium"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},

{
  "id": "obesity-&-metabolism-test",
  "name": "Obesity & Metabolism Test",
  "category": "Preventive & Lifestyle Tests",
  "price": 0,
  "originalPrice": 0,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Obesity & Metabolism Test package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "HbA1c",
    "TSH",
    "Lipid Profile",
    "Insulin",
    "Cortisol",
    "Liver Enzymes"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "allergy-test-panel-veg&nonveg",
  "name": "Allergy Test Panel",
  "category": "Disease-Specific Tests",
  "price": 6000,
  "originalPrice": 9900,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Allergy Test Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "IgE Total",
    "Allergy Profile - Food (Veg + NonVeg)",
    "Allergy Profile  - Inhalants",
    "Allergy Drugs"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "allergy-test-panel-veg",
  "name": "Allergy Test Panel",
  "category": "Disease-Specific Tests",
  "price": 5000,
  "originalPrice": 8900,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Allergy Test Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "IgE Total",
    "Allergy Profile - Food Veg",
    "Allergy Profile  - Inhalants",
    "Allergy Drugs"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "allergy-test-panel-nonveg",
  "name": "Allergy Test Panel",
  "category": "Disease-Specific Tests",
  "price": 5000,
  "originalPrice": 8900,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Allergy Test Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "IgE Total",
    "Allergy Profile - Food Non Veg",
    "Allergy Profile  - Inhalants",
    "Allergy Drugs"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "stress-hormone-panel",
  "name": "Stress & Hormone Panel",
  "category": "Disease-Specific Tests",
  "price": 4000,
  "originalPrice": 6550,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Stress & Hormone Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Cortisol",
    "DHEA-S",
    "Prolactin",
    "TSH",
    "Testosterone",
    "LH",
    "FSH"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "sports-fitness-health-check",
  "name": "Sports & Fitness Health Check",
  "category": "Preventive & Lifestyle Tests",
  "price": 3500,
  "originalPrice": 9350,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Sports & Fitness Health Check package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "CBC",
    "Vitamin D",
    "Vitamin B12",
    "CK-MB",
    "ESR",
    "LFT",
    "KFT",
    "Testosterone",
    "TSH"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "post-covid-health-check",
  "name": "Post-COVID Health Check",
  "category": "Preventive & Lifestyle Tests",
  "price": 1600,
  "originalPrice": 2500,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Post-COVID Health Check package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "CBC",
    "D-Dimer",
    "CRP",
    "Ferritin",
    "LDH",
    "LFT",
    "KFT"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  "id": "gut-health-digestive-panel",
  "name": "Gut Health & Digestive Panel",
  "category": "Disease-Specific Tests",
  "price": 3500,
  "originalPrice": 4800,
  "rating": 4.7,
  "reviewCount": 75,
  "image": "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "description": "The Gut Health & Digestive Panel package includes vital tests to help assess specific health parameters and risks.",
  "inclusions": [
    "Stool Examination",
    "H. pylori",
    "CRP",
    "Vitamin B12",
    "Celiac Screening",
    "LFT"
  ],
  "recommendations": [
    "Recommended for individuals with specific symptoms or medical history",
    "Ideal for diagnostic screening and preventive monitoring",
    "Suggested frequency as advised by a physician"
  ]
},
{
  id: "pregnancy-health-package",
  name: "Pregnancy Health Package",
  category: "Pregnancy & Newborn Tests",
  price: 1800,
  originalPrice: 3400,
  rating: 4.8,
  reviewCount: 82,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This package covers essential tests for expecting mothers to monitor maternal and fetal health during pregnancy.",
  inclusions: [
    "CBC",
    "Blood Group & Rh Typing",
    "HbA1c",
    "TSH",
    "Fasting & Postprandial Blood Sugar",
    "Urine Routine",
    "Vitamin D",
    "Iron Profile",
    "HIV",
    "HBsAg",
    "HCV",
    "VDRL"
  ],
  recommendations: [
    "Recommended for all pregnant women, especially during the first trimester",
    "Essential for maternal and fetal well-being",
    "Includes infectious and nutritional screening"
  ]
},

{
  id: "pcos-female-hormone-panel",
  name: "PCOS & Female Hormone Panel",
  category: "Pregnancy & Newborn Tests",
  price: 2200,
  originalPrice: 3900,
  rating: 4.7,
  reviewCount: 79,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This panel evaluates hormonal imbalances and ovarian function in women with symptoms of PCOS or irregular cycles.",
  inclusions: [
    "LH",
    "FSH",
    "Prolactin",
    "Testosterone – Total & Free",
    "DHEA-S",
    "AMH",
    "TSH",
    "Fasting Insulin",
    "SHBG"
  ],
  recommendations: [
    "Ideal for women with irregular periods or suspected PCOS",
    "Useful for fertility planning and weight-related hormonal issues",
    "Helps in customizing PCOS treatment protocols"
  ]
}
,

{
  id: "antenatal-health-check",
  name: "Antenatal Health Check",
  category: "Pregnancy & Newborn Tests",
  price: 2600,
  originalPrice: 4500,
  rating: 4.8,
  reviewCount: 84,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Antenatal check-up panel for regular monitoring of maternal health during mid to late pregnancy.",
  inclusions: [
    "CBC",
    "Urine Routine",
    "TSH",
    "HbA1c",
    "Fasting & Postprandial Blood Sugar",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Double Marker or Triple Marker (optional)",
    "Ultrasound Recommendation"
  ],
  recommendations: [
    "Recommended during second and third trimesters",
    "Essential for monitoring maternal organ functions",
    "Can help detect gestational diabetes or preeclampsia early"
  ]
}
,


{
  id: "genetic-disorder-screening",
  name: "Genetic Disorder Screening",
  category: "Pregnancy & Newborn Tests",
  price: 4800,
  originalPrice: 6700,
  rating: 4.9,
  reviewCount: 64,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "This package screens for inherited and chromosomal disorders in individuals or couples planning for a child. It includes a comprehensive genetic and hematological evaluation to assess potential risks.",
  inclusions: [
    "CBC",
    "Thalassemia Screening (Hemoglobin Electrophoresis)",
    "Karyotyping",
    "CFTR Mutation Panel (Cystic Fibrosis)",
    "SMA Carrier Screening",
    "Fragile X Testing",
    "HBA1 & HBA2 Gene Testing",
    "Genetic Counseling Session"
  ],
  recommendations: [
    "Highly recommended for couples with a family history of genetic disorders",
    "Best done pre-conception or early in pregnancy",
    "Includes counseling for interpretation and next steps"
  ]
}
,
{
  id: "fertility-hormone-panel",
  name: "Fertility Hormone Panel",
  category: "Pregnancy & Newborn Tests",
  price: 2100,
  originalPrice: 3900,
  rating: 4.7,
  reviewCount: 73,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A comprehensive hormone panel to assess reproductive health and fertility status in men and women.",
  inclusions: [
    "LH",
    "FSH",
    "Estradiol (E2)",
    "Prolactin",
    "AMH (Anti-Mullerian Hormone)",
    "Testosterone – Total",
    "TSH",
    "DHEA-S",
    "SHBG"
  ],
  recommendations: [
    "Recommended for couples facing difficulty conceiving",
    "Ideal for fertility clinics and pre-IVF evaluation",
    "Includes ovarian reserve and thyroid/hormone screening"
  ]
}
,
{
  id: "newborn-screening-package",
  name: "Newborn Screening Package",
  category: "Pregnancy & Newborn Tests",
  price: 3200,
  originalPrice: 4800,
  rating: 4.9,
  reviewCount: 89,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Detects metabolic and congenital disorders in newborns to prevent long-term complications through early intervention.",
  inclusions: [
    "TSH (Congenital Hypothyroidism)",
    "17-OHP (Congenital Adrenal Hyperplasia)",
    "G6PD Deficiency",
    "Galactosemia",
    "Phenylketonuria (PKU)",
    "Biotinidase Deficiency",
    "Hemoglobinopathy Panel"
  ],
  recommendations: [
    "Should be done within first 72 hours of birth",
    "Can detect critical but treatable disorders early",
    "Usually recommended in all modern maternity hospitals"
  ]
}
,

{
  id: "breastfeeding-wellness-tests",
  name: "Breastfeeding Wellness Tests",
  category: "Pregnancy & Newborn Tests",
  price: 1600,
  originalPrice: 2900,
  rating: 4.6,
  reviewCount: 68,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Evaluates maternal nutrient levels and hormonal balance during lactation to ensure both mother and baby's well-being.",
  inclusions: [
    "CBC",
    "Vitamin B12",
    "Vitamin D",
    "Calcium",
    "Iron Profile",
    "TSH",
    "Prolactin"
  ],
  recommendations: [
    "Ideal for postpartum mothers to monitor recovery and milk production",
    "Useful in fatigue, poor lactation, or nutrient deficiency symptoms",
    "Helps build a strong nutritional foundation while breastfeeding"
  ]
}
,
{
  id: "covid-19-tests",
  name: "COVID-19 RT-PCR & Antibody Tests",
  category: "Infectious Disease Tests",
  price: 1100,
  originalPrice: 1800,
  rating: 4.8,
  reviewCount: 90,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A complete COVID-19 diagnostic and antibody panel to detect current or past infection and immune response.",
  inclusions: [
    "COVID-19 RT-PCR (Swab)",
    "COVID-19 IgG Antibody Test",
    "COVID-19 Total Antibodies",
    "CBC",
    "CRP"
  ],
  recommendations: [
    "Ideal for symptomatic individuals, travelers, or return-to-work screening",
    "Useful for post-infection antibody tracking",
    "Sample: Nasopharyngeal swab + blood"
  ]
}
,

{
  id: "dengue-malaria-typhoid-panel",
  name: "Dengue, Malaria & Typhoid Panel",
  category: "Infectious Disease Tests",
  price: 1400,
  originalPrice: 2200,
  rating: 4.7,
  reviewCount: 88,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A bundled package for rapid diagnosis of fever-related illnesses common in tropical regions.",
  inclusions: [
    "Dengue NS1 Antigen",
    "Dengue IgM & IgG",
    "Malaria Antigen Test (Pf/Pv)",
    "Typhoid (Widal Test)",
    "CBC",
    "CRP"
  ],
  recommendations: [
    "Recommended for individuals with high fever, chills, and travel history",
    "Quick ruling out of vector-borne infections",
    "Helps avoid unnecessary antibiotic usage"
  ]
}
,

{
  id: "hepatitis-screening",
  name: "Hepatitis B & C Screening",
  category: "Infectious Disease Tests",
  price: 850,
  originalPrice: 1500,
  rating: 4.6,
  reviewCount: 72,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Essential viral hepatitis screening to detect or monitor Hepatitis B and C infections.",
  inclusions: [
    "HBsAg (ELISA)",
    "Hepatitis B Core Total Antibody (Anti-HBc)",
    "HCV Antibody (Anti-HCV)",
    "Liver Function Test (LFT)"
  ],
  recommendations: [
    "Recommended for liver health monitoring, pre-surgical testing, or medical staff",
    "Vital before blood donation or organ transplant",
    "Non-fasting, blood test only"
  ]
}
,

{
  id: "hiv-std-panel",
  name: "HIV & STD Panel",
  category: "Infectious Disease Tests",
  price: 1600,
  originalPrice: 2700,
  rating: 4.7,
  reviewCount: 81,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Comprehensive screening for HIV and common sexually transmitted infections (STIs).",
  inclusions: [
    "HIV 1 & 2 Antibody Test (ELISA)",
    "HIV p24 Antigen",
    "VDRL / RPR (Syphilis)",
    "HBsAg",
    "HCV Antibody",
    "Herpes Simplex Virus (HSV) 1 & 2 IgG/IgM",
    "Urine Routine",
    "CRP"
  ],
  recommendations: [
    "Recommended for sexually active individuals or routine STI screening",
    "Confidential and NABL certified",
    "Blood + urine samples required"
  ]
}
,

{
  id: "tuberculosis-screening",
  name: "Tuberculosis (TB) Screening",
  category: "Infectious Disease Tests",
  price: 1250,
  originalPrice: 2000,
  rating: 4.6,
  reviewCount: 67,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Basic TB screening panel for latent or active tuberculosis infection.",
  inclusions: [
    "ESR",
    "Chest X-Ray (if advised)",
    "CBC",
    "Tuberculin Skin Test (Mantoux)",
    "IGRA (Interferon Gamma Release Assay, optional)",
    "CRP"
  ],
  recommendations: [
    "Advised for prolonged cough, night sweats, or known TB exposure",
    "Can assist with visa screening or pre-employment clearance",
    "Follow-up with pulmonologist is advised"
  ]
},

{
  id: "influenza-viral-fever-panel",
  name: "Influenza & Viral Fever Panel",
  category: "Infectious Disease Tests",
  price: 1100,
  originalPrice: 1900,
  rating: 4.7,
  reviewCount: 78,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A panel designed to identify common viral infections causing fever, fatigue, and respiratory symptoms.",
  inclusions: [
    "Influenza A/B Rapid Test",
    "CRP",
    "CBC",
    "ESR",
    "NS1 Antigen",
    "Throat Swab (if advised)"
  ],
  recommendations: [
    "Recommended for seasonal flu-like symptoms",
    "Helps avoid antibiotic misuse",
    "Can detect early-stage viral fever before complications"
  ]
},

{
  id: "food-waterborne-disease-tests",
  name: "Food & Waterborne Disease Tests",
  category: "Infectious Disease Tests",
  price: 950,
  originalPrice: 1700,
  rating: 4.6,
  reviewCount: 69,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A package for detecting infections caused by contaminated food or water, such as gastroenteritis or food poisoning.",
  inclusions: [
    "Stool Routine Examination",
    "Stool Culture & Sensitivity",
    "Widal Test",
    "CBC",
    "CRP",
    "Electrolytes (Na/K/Cl)"
  ],
  recommendations: [
    "Best suited for symptoms like diarrhea, vomiting, or abdominal pain",
    "Early diagnosis helps prevent dehydration and complications",
    "Includes both blood and stool tests"
  ]
}
,

{
  id: "cancer-genetic-risk-panel",
  name: "Cancer Genetic Risk Panel",
  category: "Specialized & Advanced Tests",
  price: 7500,
  originalPrice: 11000,
  rating: 4.9,
  reviewCount: 62,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Screens for inherited mutations that increase the risk of cancers such as breast, ovarian, colon, and prostate.",
  inclusions: [
    "BRCA1 & BRCA2 Gene Testing",
    "Lynch Syndrome Panel (MLH1, MSH2, MSH6, PMS2)",
    "TP53 Mutation Analysis",
    "CDH1, STK11, PTEN (if family history)",
    "Genetic Counseling"
  ],
  recommendations: [
    "Ideal for those with family history of cancer",
    "Recommended pre-symptomatically for early detection",
    "Includes expert interpretation and guidance"
  ]
}
,

{
  id: "food-intolerance-test",
  name: "Food Intolerance Test",
  category: "Specialized & Advanced Tests",
  price: 3800,
  originalPrice: 5800,
  rating: 4.7,
  reviewCount: 70,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Identifies delayed food sensitivities that may contribute to bloating, skin issues, headaches, and fatigue.",
  inclusions: [
    "IgG Antibodies against 100+ Food Items (Veg/Non-Veg)",
    "Lactose & Gluten Sensitivity Markers",
    "Consultation with Clinical Nutritionist"
  ],
  recommendations: [
    "Recommended for chronic symptoms with no clear cause",
    "Helpful in elimination diet planning",
    "Blood sample, no fasting required"
  ]
}
,

{
  id: "advanced-cardiac-risk-markers",
  name: "Advanced Cardiac Risk Markers",
  category: "Specialized & Advanced Tests",
  price: 2400,
  originalPrice: 4000,
  rating: 4.8,
  reviewCount: 86,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A deeper analysis of heart-related biomarkers for individuals at high risk of cardiovascular events.",
  inclusions: [
    "hsCRP (High Sensitivity C-Reactive Protein)",
    "Homocysteine",
    "Apo A1 & Apo B",
    "Lp(a)",
    "Troponin I",
    "NT-proBNP"
  ],
  recommendations: [
    "Ideal for diabetics, hypertensives, or family history of CVD",
    "More predictive than standard lipid profile",
    "Best done fasting with follow-up consult"
  ]
}
,

{
  id: "rare-disease-genetic-testing",
  name: "Rare Disease Genetic Testing",
  category: "Specialized & Advanced Tests",
  price: 13500,
  originalPrice: 18000,
  rating: 4.9,
  reviewCount: 58,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Analyzes specific genes associated with rare inherited disorders and developmental conditions.",
  inclusions: [
    "Whole Exome Sequencing (WES)",
    "Targeted Gene Panel (based on symptoms)",
    "Genetic Counseling",
    "Interpretation with clinical correlation",
    "Family pedigree mapping (if applicable)"
  ],
  recommendations: [
    "Ideal for undiagnosed syndromes or unexplained symptoms",
    "Includes pre/post test counseling",
    "Done once in a lifetime, with optional family testing"
  ]
}
,

{
  id: "autoimmune-disorder-screening",
  name: "Autoimmune Disorder Screening",
  category: "Specialized & Advanced Tests",
  price: 2700,
  originalPrice: 4600,
  rating: 4.6,
  reviewCount: 71,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "A set of markers that help detect autoimmune conditions like lupus, RA, thyroiditis, and celiac disease.",
  inclusions: [
    "ANA (Antinuclear Antibody)",
    "RA Factor",
    "Anti-CCP",
    "CRP & ESR",
    "Anti-TPO",
    "tTG IgA/IgG"
  ],
  recommendations: [
    "For those with chronic joint pain, fatigue, or suspected autoimmune conditions",
    "First step toward rheumatology evaluation",
    "Blood test, no special preparation needed"
  ]
}
,

{
  id: "heavy-metal-toxicity-panel",
  name: "Heavy Metal Toxicity Panel",
  category: "Specialized & Advanced Tests",
  price: 3100,
  originalPrice: 5200,
  rating: 4.7,
  reviewCount: 65,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Evaluates the presence of toxic metals in the body which can cause neurological, renal, or immune problems.",
  inclusions: [
    "Blood Lead Level",
    "Mercury",
    "Arsenic",
    "Cadmium",
    "Chromium",
    "Urine Creatinine (for normalization)"
  ],
  recommendations: [
    "Advised for industrial workers, children with neurodevelopmental delay, or unexplained symptoms",
    "Requires EDTA-free blood sample or 24hr urine",
    "Avoid seafood 72 hrs prior"
  ]
}
,

{
  id: "neurological-disorder-screening",
  name: "Neurological Disorder Screening",
  category: "Specialized & Advanced Tests",
  price: 3700,
  originalPrice: 6000,
  rating: 4.8,
  reviewCount: 80,
  image: "https://images.unsplash.com/photo-1588777244972-8574525caec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Tests for common metabolic and autoimmune causes of neuropathy, seizures, or cognitive decline.",
  inclusions: [
    "Vitamin B12",
    "Vitamin D",
    "Thyroid Profile",
    "HbA1c",
    "Anti-NMDA Receptor Antibodies",
    "MRI Referral (if clinically needed)"
  ],
  recommendations: [
    "Helpful for patients with seizures, weakness, brain fog, or memory issues",
    "Should be reviewed alongside neurologist's findings",
    "Fasting not required"
  ]
}



];

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const [packageData, setPackageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const selectedPackage = packages.find(p => p.id === packageId) || packages[0];
      setPackageData(selectedPackage);
      setLoading(false);
    }, 300);
  }, [packageId]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${packageData?.name} added to your cart.`,
      variant: "default",
    });
  };

  const handleBookNow = () => {
    toast({
      title: "Test scheduled!",
      description: `Your ${packageData?.name} has been scheduled. Our team will contact you shortly.`,
      variant: "default",
    });
  };

  if (loading || !packageData) {
    return (
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased">
        <AnnouncementBar />
        <Navbar />
        <div className="bloodlyf-container py-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-bloodlyf-beige/30 w-1/3 mx-auto rounded-lg mb-4"></div>
            <div className="h-4 bg-bloodlyf-beige/30 w-2/3 mx-auto rounded-lg mb-2"></div>
            <div className="h-4 bg-bloodlyf-beige/30 w-1/2 mx-auto rounded-lg"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased">
      <AnnouncementBar />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bloodlyf-container">
          <div className="flex items-center text-sm mb-8">
            <a href="/" className="hover:text-bloodlyf-darkblue">Home</a>
            <ChevronRight className="h-3 w-3 mx-2" />
            <a href="/packages" className="hover:text-bloodlyf-darkblue">Packages</a>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-bloodlyf-darkblue">{packageData.name}</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src={packageData.image} 
                  alt={packageData.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <BlurGlass className="p-4 rounded-xl">
                <h3 className="text-lg font-medium mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {packageData.inclusions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </BlurGlass>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="text-sm text-bloodlyf-taupe/70 mb-1">{packageData.category}</div>
                <h1 className="text-3xl font-serif font-medium mb-2">{packageData.name}</h1>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn("h-4 w-4", i < Math.floor(packageData.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300")} 
                      />
                    ))}
                  </div>
                  <span className="text-sm">
                    {packageData.rating} ({packageData.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                   <span className="text-2xl font-medium">₹{packageData.price}</span>
                  {packageData.originalPrice && (
                  <span className="text-lg text-bloodlyf-taupe/70 line-through">₹{packageData.originalPrice}</span>
                  )}
                    {packageData.originalPrice && (
                    <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                     Save {Math.round(100 - (packageData.price / packageData.originalPrice) * 100)}%
                    </span>
                     )}
                </div>

                
                <p className="text-bloodlyf-taupe/80 mb-6">{packageData.description}</p>
                
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Available 7 days a week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Results in 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-bloodlyf-blue" />
                    <span>Free home sample collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartPulse className="h-5 w-5 text-bloodlyf-blue" />
                    <span>NABH certified laboratories</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="flex items-center border border-bloodlyf-beige/50 rounded-md overflow-hidden">
                    <button 
                      className="px-3 py-2 hover:bg-bloodlyf-beige/10"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </button>
                    <span className="px-3 py-2 border-x border-bloodlyf-beige/50">{quantity}</span>
                    <button 
                      className="px-3 py-2 hover:bg-bloodlyf-beige/10"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    className="w-full bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              
              <BlurGlass className="p-4 rounded-xl">
                <h3 className="text-lg font-medium mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {packageData.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </BlurGlass>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default PackageDetail;
