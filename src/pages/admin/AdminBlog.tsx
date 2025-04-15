import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, FileText, Pencil, Plus, Search, Trash, X } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { BlogPostEditor } from '@/components/admin/BlogPostEditor';
import { useToast } from '@/hooks/use-toast';
import BlurGlass from '@/components/ui/BlurGlass';

const blogPostsData = [
  {
    id: 1,
    title: 'Understanding Thyroid Function Tests: A Complete Guide',
    slug: 'understanding-thyroid-function-tests',
    excerpt: 'Learn about the different thyroid function tests, what they measure, and how to interpret your results.',
    author: 'Dr. Priya Sharma',
    publishDate: '2023-07-25',
    status: 'published',
    views: 1245,
    metaTitle: 'Thyroid Function Tests Guide: TSH, T3, T4 Explained | BloodLyf',
    metaDescription: 'Learn about thyroid function tests including TSH, T3, and T4. Understand what your results mean and when these tests are recommended.',
    content: '<h2>Understanding Thyroid Function Tests</h2><p>Thyroid function tests are blood tests that measure how well your thyroid gland is working. These tests help diagnose thyroid disorders such as hypothyroidism and hyperthyroidism.</p><h3>Common Thyroid Tests</h3><ul><li><strong>TSH (Thyroid Stimulating Hormone)</strong>: Measures how much thyroid hormone the pituitary gland is asking the thyroid to make.</li><li><strong>T4 (Thyroxine)</strong>: Measures the amount of T4 hormone in your blood.</li><li><strong>T3 (Triiodothyronine)</strong>: Measures the amount of T3 hormone in your blood.</li></ul>',
    keywords: 'thyroid test, TSH, T3, T4, hypothyroidism, hyperthyroidism',
    featuredImage: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9d7a99?w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups',
    slug: 'importance-of-regular-health-checkups',
    excerpt: 'Discover why routine health check-ups are essential for preventive care and early detection of health issues.',
    author: 'Dr. Arun Menon',
    publishDate: '2023-08-05',
    status: 'published',
    views: 987,
    metaTitle: 'Why Regular Health Check-ups Are Essential | BloodLyf',
    metaDescription: 'Discover the importance of regular health check-ups for early disease detection and preventive healthcare. Learn how often you should get tested.',
    content: '<h2>Regular Health Check-ups: An Investment in Your Wellbeing</h2><p>Regular health check-ups are one of the most effective ways to detect health issues before they become serious. By identifying risk factors early, you and your doctor can work together to set up a treatment plan or make lifestyle adjustments to improve your health.</p>',
    keywords: 'health check-up, preventive care, early detection, regular testing',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Diabetes Management: Blood Tests You Need to Know',
    slug: 'diabetes-management-blood-tests',
    excerpt: 'A comprehensive guide to essential blood tests for managing diabetes effectively.',
    author: 'Dr. Rahul Kumar',
    publishDate: '2023-08-12',
    status: 'published',
    views: 765,
    metaTitle: 'Diabetes Management: Blood Tests You Need to Know | BloodLyf',
    metaDescription: 'Learn about the different blood tests used to diagnose and monitor diabetes.',
    content: '<h2>Diabetes Management: Blood Tests You Need to Know</h2><p>Diabetes management involves regular blood tests to monitor blood sugar levels and adjust treatment as needed.</p><h3>Common Blood Tests</h3><ul><li><strong>Hemoglobin A1c</strong>: Measures average blood sugar levels over the past 2-3 months.</li><li><strong>Blood Glucose</strong>: Measures the amount of sugar in your blood at a specific time.</li><li><strong>Insulin Resistance Test</strong>: Measures how well your body responds to insulin.</li></ul>',
    keywords: 'diabetes, blood tests, management, hemoglobin a1c, blood glucose, insulin resistance',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    title: 'Heart Health Markers: Understanding Your Lipid Profile',
    slug: 'heart-health-lipid-profile',
    excerpt: 'Everything you need to know about lipid profiles and what your cholesterol numbers mean for heart health.',
    author: 'Dr. Sanjay Patel',
    publishDate: '2023-07-18',
    status: 'published',
    views: 890,
    metaTitle: 'Heart Health Markers: Understanding Your Lipid Profile | BloodLyf',
    metaDescription: 'Learn about lipid profiles and how they can help you manage your heart health.',
    content: '<h2>Heart Health Markers: Understanding Your Lipid Profile</h2><p>Lipid profiles are a series of blood tests that measure your cholesterol levels and other markers of heart health.</p><h3>Common Lipid Profile Tests</h3><ul><li><strong>Total Cholesterol</strong>: Measures the total amount of cholesterol in your blood.</li><li><strong>LDL Cholesterol</strong>: Measures the amount of LDL cholesterol in your blood.</li><li><strong>HDL Cholesterol</strong>: Measures the amount of HDL cholesterol in your blood.</li></ul>',
    keywords: 'heart health, lipid profile, cholesterol, LDL, HDL',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    title: 'Anemia Detection: Types of Blood Tests and Their Significance',
    slug: 'anemia-detection-blood-tests',
    excerpt: 'Learn about the different blood tests used to diagnose and monitor anemia.',
    author: 'Dr. Anjali Sharma',
    publishDate: '2023-06-30',
    status: 'published',
    views: 652,
    metaTitle: 'Anemia Detection: Types of Blood Tests and Their Significance | BloodLyf',
    metaDescription: 'Understand the different blood tests used to diagnose and monitor anemia.',
    content: '<h2>Anemia Detection: Types of Blood Tests and Their Significance</h2><p>Anemia is a condition where your blood has a lower than normal number of red blood cells.</p><h3>Common Blood Tests</h3><ul><li><strong>Hemoglobin</strong>: Measures the amount of hemoglobin in your blood.</li><li><strong>Red Blood Cell Count</strong>: Measures the number of red blood cells in your blood.</li><li><strong>Iron Levels</strong>: Measures the amount of iron in your blood.</li></ul>',
    keywords: 'anemia, blood tests, detection, hemoglobin, red blood cell count, iron levels',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 6,
    title: 'Nutritional Deficiencies: How Blood Tests Help Identify Them',
    slug: 'nutritional-deficiencies-blood-tests',
    excerpt: 'Understand how specialized blood tests can reveal nutritional deficiencies affecting your health.',
    author: 'Dr. Priya Sharma',
    publishDate: null,
    status: 'draft',
    views: 0,
    metaTitle: 'Nutritional Deficiencies: How Blood Tests Help Identify Them | BloodLyf',
    metaDescription: 'Learn how specialized blood tests can help identify nutritional deficiencies.',
    content: '<h2>Nutritional Deficiencies: How Blood Tests Help Identify Them</h2><p>Nutritional deficiencies can affect your health in many ways. Blood tests can help identify these deficiencies and guide treatment.</p>',
    keywords: 'nutritional deficiencies, blood tests, identification',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 7,
    title: 'Post-COVID Recovery: Essential Health Parameters to Monitor',
    slug: 'post-covid-recovery-health-parameters',
    excerpt: 'Important health parameters and tests to monitor during post-COVID recovery.',
    author: 'Dr. Rahul Kumar',
    publishDate: null,
    status: 'draft',
    views: 0,
    metaTitle: 'Post-COVID Recovery: Essential Health Parameters to Monitor | BloodLyf',
    metaDescription: 'Learn about the health parameters and tests to monitor during post-COVID recovery.',
    content: '<h2>Post-COVID Recovery: Essential Health Parameters to Monitor</h2><p>Post-COVID recovery involves monitoring certain health parameters to ensure you are recovering properly.</p><h3>Common Health Parameters</h3><ul><li><strong>Body Temperature</strong>: Measures your body temperature.</li><li><strong>Heart Rate</strong>: Measures your heart rate.</li><li><strong>Blood Pressure</strong>: Measures your blood pressure.</li></ul>',
    keywords: 'post-COVID recovery, health parameters, monitoring',
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
];

const AdminBlog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState(blogPostsData);
  const [postDetails, setPostDetails] = useState(null);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setBlogPosts(blogPostsData);
    } else {
      const filtered = blogPostsData.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBlogPosts(filtered);
    }
  }, [searchQuery]);
  
  const handleViewPost = (post) => {
    setPostDetails(post);
    setShowPostDetails(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleSavePost = (updatedPost) => {
    const updatedPosts = blogPosts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    );
    
    setBlogPosts(updatedPosts);
    setEditingPost(null);
    
    toast({
      title: "Blog post updated",
      description: "The blog post has been successfully updated.",
    });
  };

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    const updatedPosts = blogPosts.filter(post => post.id !== postToDelete.id);
    setBlogPosts(updatedPosts);
    setShowDeleteConfirmation(false);
    
    toast({
      title: "Blog post deleted",
      description: "The blog post has been successfully deleted.",
    });
  };

  const handleCreateNewPost = () => {
    const newPostTemplate = {
      id: Date.now(),
      title: '',
      slug: '',
      excerpt: '',
      author: '',
      publishDate: null,
      status: 'draft',
      views: 0,
      metaTitle: '',
      metaDescription: '',
      content: '',
      keywords: '',
      featuredImage: '',
    };
    
    setEditingPost(newPostTemplate);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Not published';
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  if (editingPost) {
    return (
      <AdminLayout>
        <BlurGlass className="p-4 md:p-6 rounded-xl">
          <BlogPostEditor 
            postId={editingPost.id}
            initialData={editingPost}
            onSave={handleSavePost}
            onBack={() => setEditingPost(null)}
          />
        </BlurGlass>
      </AdminLayout>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Blog Management | BloodLyf Admin</title>
        <meta name="description" content="Manage blog posts in the BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Blog Management</h1>
              <p className="text-gray-600">Manage blog posts and articles</p>
            </div>
            
            <Button 
              onClick={handleCreateNewPost} 
              className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Post
            </Button>
          </div>
          
          <BlurGlass className="p-4 md:p-6 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search blog posts by title or author..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
                
                <Button variant="outline">
                  Filter
                </Button>
              </div>
            </div>
          
            <div className="rounded-lg overflow-hidden border border-gray-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Published Date</TableHead>
                    <TableHead className="hidden md:table-cell">Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">
                        {truncateText(post.title, 40)}
                      </TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{formatDate(post.publishDate)}</TableCell>
                      <TableCell className="hidden md:table-cell">{post.views}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewPost(post)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditPost(post)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDeleteClick(post)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {blogPosts.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">No blog posts found</h3>
                  <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              )}
            </div>
          </BlurGlass>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{blogPosts.length}</span> of{" "}
              <span className="font-medium">{blogPostsData.length}</span> posts
            </p>
            
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </AdminLayout>
      
      <Dialog open={showPostDetails} onOpenChange={setShowPostDetails}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Blog Post Details</DialogTitle>
            <DialogDescription>
              View detailed information about this blog post.
            </DialogDescription>
          </DialogHeader>
          
          {postDetails && (
            <div className="space-y-4 py-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{postDetails.title}</h3>
                <DialogClose className="rounded-full hover:bg-gray-100 p-1">
                  <X className="h-4 w-4" />
                </DialogClose>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <p>By: {postDetails.author}</p>
                <p>Date: {formatDate(postDetails.publishDate)}</p>
                <p>Views: {postDetails.views}</p>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-1">Excerpt</h4>
                <p className="text-gray-700">{postDetails.excerpt}</p>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-1">URL Slug</h4>
                <div className="bg-gray-50 p-2 rounded text-gray-700 text-sm font-mono">
                  {postDetails.slug}
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end gap-2">
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => {
                    setShowPostDetails(false);
                    handleEditPost(postDetails);
                  }}
                  className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this blog post? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {postToDelete && (
              <p className="font-medium">{postToDelete.title}</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteConfirm} 
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminBlog;
