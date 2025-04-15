
import { ArrowRight } from 'lucide-react';
import BlurGlass from './ui/BlurGlass';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Blood Tests: A Complete Guide",
    excerpt: "Learn about the importance of blood tests and what different types of tests can reveal about your health.",
    category: "Health Education",
    date: "August 15, 2023",
    image: "https://images.unsplash.com/photo-1626200926749-cccc3a5d4c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "The Role of Hydration in Blood Test Accuracy",
    excerpt: "Discover how your hydration status can impact the accuracy of your blood test results and what you can do about it.",
    category: "Test Preparation",
    date: "September 2, 2023",
    image: "https://images.unsplash.com/photo-1605492523551-b5ca03055c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "How to Prepare for Fasting Blood Tests",
    excerpt: "Detailed guidelines on how to properly prepare for fasting blood tests to ensure accurate results.",
    category: "Test Preparation",
    date: "October 10, 2023",
    image: "https://images.unsplash.com/photo-1576671414121-aa2d60f1ecb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const BlogShowcase = () => {
  return (
    <section className="py-12 bg-bloodlyf-ivory">
      <div className="bloodlyf-container">
        <div className="text-center mb-8">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wide bg-bloodlyf-blue/20 text-bloodlyf-taupe mb-2">
            Latest Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight mb-2">
            Health &amp; Wellness Blog
          </h2>
          <p className="text-bloodlyf-taupe/80 max-w-xl mx-auto">
            Stay informed with our latest articles on health insights, test preparation, and wellness tips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <BlurGlass key={post.id} intensity="light" className="rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-bloodlyf-darkblue">{post.category}</span>
                  <span className="text-xs text-bloodlyf-taupe/70">{post.date}</span>
                </div>
                
                <h3 className="font-serif text-lg font-medium mb-2 line-clamp-2">
                  <a href={`/blog/${post.id}`} className="hover:text-bloodlyf-darkblue transition-colors">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-sm text-bloodlyf-taupe/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-bloodlyf-darkblue hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </BlurGlass>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/blog">
            <BlurGlass 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-bloodlyf-blue/90 text-white border border-white/30 hover:shadow-md transition-all duration-300"
            >
              View All Articles <ArrowRight className="h-4 w-4" />
            </BlurGlass>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
