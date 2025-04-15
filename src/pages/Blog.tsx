
import { useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import BlurGlass from '@/components/ui/BlurGlass';
import { Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Complete Blood Count Results',
    excerpt: 'Learn how to interpret your CBC results and what each parameter indicates about your health.',
    category: 'Health Education',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1631563019676-dade0fb61c0c?w=500&auto=format&fit=crop',
    slug: 'understanding-cbc-results'
  },
  {
    id: 2,
    title: 'The Importance of Regular Blood Sugar Monitoring',
    excerpt: 'Discover why consistent blood sugar testing is crucial, even if you haven\'t been diagnosed with diabetes.',
    category: 'Diabetes Care',
    date: 'June 2, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop',
    slug: 'importance-of-blood-sugar-monitoring'
  },
  {
    id: 3,
    title: 'Advances in Blood Testing Technology',
    excerpt: 'New developments in blood testing are making diagnosis faster, more accurate, and more convenient than ever before.',
    category: 'Medical Technology',
    date: 'June 20, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop',
    slug: 'advances-in-blood-testing'
  },
  {
    id: 4,
    title: 'How to Prepare for Your Blood Test',
    excerpt: 'Simple steps to ensure your blood test results are accurate and reliable.',
    category: 'Patient Guide',
    date: 'July 5, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop',
    slug: 'prepare-for-blood-test'
  },
  {
    id: 5,
    title: 'Anemia: Symptoms, Causes and Treatment',
    excerpt: 'Learn about the common blood disorder anemia, its symptoms, causes, and various treatment options.',
    category: 'Health Conditions',
    date: 'July 18, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1564732005956-20420ebdadde?w=500&auto=format&fit=crop',
    slug: 'anemia-symptoms-causes-treatment'
  },
  {
    id: 6,
    title: 'The Link Between Blood Tests and Preventive Healthcare',
    excerpt: 'How regular blood testing can help detect health issues before they become serious problems.',
    category: 'Preventive Care',
    date: 'August 3, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&auto=format&fit=crop',
    slug: 'blood-tests-preventive-healthcare'
  },
  {
    id: 7,
    title: 'Understanding Cholesterol Levels and Heart Health',
    excerpt: 'A comprehensive guide to interpreting cholesterol test results and their impact on cardiovascular health.',
    category: 'Heart Health',
    date: 'August 15, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1618939304347-e91db9fbc8ca?w=500&auto=format&fit=crop',
    slug: 'cholesterol-levels-heart-health'
  },
  {
    id: 8,
    title: 'Blood Donation: Benefits, Process and Eligibility',
    excerpt: 'Everything you need to know about donating blood, from preparation to recovery.',
    category: 'Blood Donation',
    date: 'September 2, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=500&auto=format&fit=crop',
    slug: 'blood-donation-benefits-process'
  },
  {
    id: 9,
    title: 'Thyroid Function Tests Explained',
    excerpt: 'How to understand your thyroid test results and what they mean for your overall health.',
    category: 'Hormonal Health',
    date: 'September 20, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9d7a99?w=500&auto=format&fit=crop',
    slug: 'thyroid-function-tests-explained'
  },
];

const Blog = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bloodlyf-ivory text-bloodlyf-taupe antialiased overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bloodlyf-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              BloodLyf <span className="text-bloodlyf-darkblue">Health Blog</span>
            </h1>
            <p className="text-bloodlyf-taupe/80 max-w-2xl mx-auto">
              Trusted insights, expert advice, and the latest news in healthcare and diagnostics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlurGlass 
                key={post.id}
                className="overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md rounded-xl border border-white/30"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                
                <div className="p-5">
                  <span className="inline-block text-xs font-medium text-bloodlyf-darkblue mb-2 bg-bloodlyf-blue/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-medium text-lg mb-2 transition-colors hover:text-bloodlyf-darkblue line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-bloodlyf-taupe/70 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <BlurGlass 
                    className="w-full justify-between flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 text-bloodlyf-blue border border-bloodlyf-blue/30 hover:bg-bloodlyf-blue/10 transition-all duration-300 text-sm"
                  >
                    <a href={`/blog/${post.slug}`} className="flex items-center justify-between w-full">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </BlurGlass>
                </div>
                
                <div className="px-5 py-3 border-t border-bloodlyf-blue/5 flex justify-between text-sm text-bloodlyf-taupe/60">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </BlurGlass>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
