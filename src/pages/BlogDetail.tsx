
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';

// Sample blog posts data
const blogPostsData = [
  {
    id: 1,
    title: 'Understanding Your Complete Blood Count Results',
    slug: 'understanding-cbc-results',
    category: 'Health Education',
    author: 'Dr. Sarah Johnson',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    content: `
      <p>A Complete Blood Count (CBC) is one of the most commonly ordered blood tests. It provides valuable information about your overall health and can help detect a wide range of disorders, including anemia, infection, and certain cancers.</p>
      
      <h2>What Does a CBC Measure?</h2>
      
      <p>A CBC measures several components and features of your blood, including:</p>
      
      <ul>
        <li><strong>Red Blood Cells (RBCs):</strong> These cells carry oxygen from your lungs to the rest of your body. The CBC measures the number of RBCs, as well as their size, shape, and hemoglobin content.</li>
        <li><strong>White Blood Cells (WBCs):</strong> These cells help fight infections. The CBC counts the total number of WBCs and the percentages of each type of WBC.</li>
        <li><strong>Platelets:</strong> These cell fragments help your blood clot. The CBC measures the number and size of platelets.</li>
        <li><strong>Hemoglobin:</strong> This is the protein in RBCs that carries oxygen. The CBC measures the amount of hemoglobin in your blood.</li>
        <li><strong>Hematocrit:</strong> This is the proportion of your blood that is made up of RBCs. The CBC measures your hematocrit as a percentage.</li>
      </ul>
      
      <h2>Understanding Your Results</h2>
      
      <p>Your CBC results will include several values, each with its own normal range. These ranges can vary slightly from lab to lab. Here's what some of the key values mean:</p>
      
      <h3>Red Blood Cell Count (RBC)</h3>
      
      <p>A low RBC count could indicate anemia, bleeding, or nutritional deficiencies. A high RBC count could indicate dehydration, lung disease, or certain types of heart disease.</p>
      
      <h3>White Blood Cell Count (WBC)</h3>
      
      <p>A high WBC count often indicates infection, inflammation, or certain types of leukemia. A low WBC count could indicate bone marrow problems, autoimmune disorders, or certain medications.</p>
      
      <h3>Platelet Count</h3>
      
      <p>A low platelet count could indicate a bone marrow problem, an autoimmune disorder, or certain medications. A high platelet count could indicate inflammation, infection, or certain types of cancer.</p>
      
      <h3>Hemoglobin</h3>
      
      <p>Low hemoglobin levels could indicate anemia, bleeding, or nutritional deficiencies. High hemoglobin levels could indicate dehydration, lung disease, or certain types of heart disease.</p>
      
      <h3>Hematocrit</h3>
      
      <p>Low hematocrit could indicate anemia, bleeding, or nutritional deficiencies. High hematocrit could indicate dehydration, lung disease, or certain types of heart disease.</p>
      
      <h2>When to Consult a Doctor</h2>
      
      <p>If any of your CBC results are outside the normal range, it doesn't necessarily mean you have a medical condition. Many factors can affect your blood test results, including your age, gender, medications, and even the time of day the blood was drawn.</p>
      
      <p>However, if your results are significantly outside the normal range, or if you're experiencing symptoms, it's important to consult with a healthcare provider. They can interpret your results in the context of your overall health and determine if further testing is needed.</p>
      
      <h2>Conclusion</h2>
      
      <p>A CBC provides a wealth of information about your health. By understanding what each component of your CBC measures, you can better interpret your results and have more informed discussions with your healthcare provider.</p>
      
      <p>Remember, regular blood testing is an important part of preventive healthcare. It can help detect potential health issues before they become serious and guide your healthcare provider in providing the most appropriate care.</p>
    `
  },
  // Add more blog posts data as needed
  {
    id: 2,
    title: 'The Importance of Regular Blood Sugar Monitoring',
    slug: 'importance-of-blood-sugar-monitoring',
    category: 'Diabetes Care',
    author: 'Dr. Michael Chen',
    date: 'June 2, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    content: `
      <p>Regular blood sugar monitoring is a critical aspect of managing diabetes and maintaining overall health. Whether you have diabetes or are at risk for developing it, understanding your blood sugar levels can provide valuable insights into your health.</p>
      
      <h2>Why Monitor Blood Sugar?</h2>
      
      <p>Blood sugar monitoring helps you:</p>
      
      <ul>
        <li>Track how diet, exercise, and medication affect your blood sugar levels</li>
        <li>Identify blood sugar levels that are too high or too low</li>
        <li>Prevent long-term complications of diabetes</li>
        <li>Make informed decisions about food, physical activity, and medications</li>
      </ul>
      
      <h2>Who Should Monitor Blood Sugar?</h2>
      
      <p>While blood sugar monitoring is essential for people with diabetes, it's also beneficial for:</p>
      
      <ul>
        <li>People with prediabetes</li>
        <li>Individuals with a family history of diabetes</li>
        <li>Those who are overweight or obese</li>
        <li>People with high blood pressure or high cholesterol</li>
        <li>Individuals over 45 years of age</li>
      </ul>
      
      <h2>How to Monitor Blood Sugar</h2>
      
      <p>There are several methods for monitoring blood sugar:</p>
      
      <h3>Glucometers</h3>
      
      <p>Glucometers are portable devices that measure blood sugar levels from a small drop of blood, usually obtained by pricking a finger with a lancet. They provide immediate results and are commonly used for daily monitoring.</p>
      
      <h3>Continuous Glucose Monitoring (CGM)</h3>
      
      <p>CGM systems use a tiny sensor inserted under the skin to measure blood sugar levels every few minutes. They provide a more comprehensive picture of blood sugar patterns over time and can alert you to high or low blood sugar levels.</p>
      
      <h3>Laboratory Tests</h3>
      
      <p>Laboratory tests, such as the fasting blood glucose test and the A1C test, provide a more detailed analysis of blood sugar levels. They are typically performed by healthcare providers to diagnose diabetes or assess long-term blood sugar control.</p>
      
      <h2>When to Check Blood Sugar</h2>
      
      <p>The frequency of blood sugar monitoring depends on various factors, including the type of diabetes you have, your treatment plan, and your overall health. However, common times to check blood sugar include:</p>
      
      <ul>
        <li>Before meals</li>
        <li>After meals</li>
        <li>Before and after exercise</li>
        <li>Before bedtime</li>
        <li>When you suspect low blood sugar</li>
      </ul>
      
      <h2>Understanding Blood Sugar Results</h2>
      
      <p>Normal blood sugar levels vary depending on when you last ate:</p>
      
      <ul>
        <li><strong>Fasting (before meals):</strong> Less than 100 mg/dL (5.6 mmol/L)</li>
        <li><strong>2 hours after a meal:</strong> Less than 140 mg/dL (7.8 mmol/L)</li>
        <li><strong>A1C:</strong> Less than 5.7%</li>
      </ul>
      
      <p>If your blood sugar levels are consistently above these ranges, it could indicate prediabetes or diabetes. Consult with a healthcare provider for proper diagnosis and treatment.</p>
      
      <h2>Conclusion</h2>
      
      <p>Regular blood sugar monitoring is an essential tool for managing diabetes and maintaining overall health. By understanding your blood sugar patterns, you can make informed decisions about your lifestyle and treatment plan, ultimately reducing the risk of diabetes-related complications.</p>
      
      <p>Remember, blood sugar monitoring is just one aspect of a comprehensive diabetes management plan. Work closely with your healthcare team to develop a plan that's right for you.</p>
    `
  }
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post based on the slug
  const blogPost = blogPostsData.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="bloodlyf-container text-center">
            <h1 className="text-3xl font-serif">Blog Post Not Found</h1>
            <p className="mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button className="mt-8" asChild>
              <a href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bloodlyf-container">
          <Button variant="outline" className="mb-8" asChild>
            <a href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</a>
          </Button>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-none overflow-hidden shadow-md mb-8">
              <AspectRatio ratio={16/9}>
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              
              <CardContent className="p-6">
                <span className="inline-block text-xs font-medium text-bloodlyf-darkblue mb-4 bg-bloodlyf-blue/10 px-2 py-1 rounded-full">
                  {blogPost.category}
                </span>
                
                <h1 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                  {blogPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-bloodlyf-taupe/70 mb-8 pb-8 border-b border-bloodlyf-blue/10">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPost.readTime}
                  </div>
                </div>
                
                <div 
                  className="prose prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
