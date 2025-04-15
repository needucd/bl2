
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Editor } from '@/components/admin/Editor';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BlogPostEditorProps {
  postId?: string | number;
  initialData: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    content: string;
    excerpt: string;
    slug: string;
    keywords: string;
    author: string;
    featuredImage?: string;
    status: 'draft' | 'published';
    publishDate?: string;
  };
  onSave: (data: any) => void;
  onBack: () => void;
}

export const BlogPostEditor = ({ postId, initialData, onSave, onBack }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [metaTitle, setMetaTitle] = useState(initialData.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData.metaDescription || '');
  const [content, setContent] = useState(initialData.content || '');
  const [excerpt, setExcerpt] = useState(initialData.excerpt || '');
  const [slug, setSlug] = useState(initialData.slug || '');
  const [keywords, setKeywords] = useState(initialData.keywords || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [featuredImage, setFeaturedImage] = useState(initialData.featuredImage || '');
  const [status, setStatus] = useState(initialData.status || 'draft');
  const [activeTab, setActiveTab] = useState('content');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    // Calculate word count from HTML content
    if (content) {
      const text = content.replace(/<[^>]*>/g, ' ');
      const words = text.split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
  }, [content]);

  const handleSave = () => {
    if (!title) {
      toast({
        title: "Error",
        description: "Blog post title is required",
        variant: "destructive",
      });
      return;
    }

    if (!content) {
      toast({
        title: "Error",
        description: "Blog post content is required",
        variant: "destructive",
      });
      return;
    }

    if (!excerpt) {
      toast({
        title: "Error",
        description: "Blog post excerpt is required",
        variant: "destructive",
      });
      return;
    }

    onSave({
      id: postId,
      title,
      metaTitle,
      metaDescription,
      content,
      excerpt,
      slug: slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      keywords,
      author,
      featuredImage,
      status,
      lastUpdated: new Date().toISOString(),
    });

    toast({
      title: "Success",
      description: "Blog post saved successfully",
    });
  };

  const generateSlugFromTitle = () => {
    if (title && !slug) {
      setSlug(title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <div className="flex items-center gap-2">
          <div className={`text-xs px-2 py-1 rounded-full ${
            wordCount < 500 ? 'bg-amber-100 text-amber-800' : 
            wordCount > 1000 ? 'bg-red-100 text-red-800' : 
            'bg-green-100 text-green-800'
          }`}>
            {wordCount} words {wordCount < 500 ? '(need more content)' : 
                            wordCount > 1000 ? '(good length)' : 
                            '(ideal length)'}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`/blog/${slug}`, '_blank')}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue flex items-center gap-1 transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30"
          >
            <Save className="h-4 w-4" />
            Save Post
          </Button>
        </div>
      </div>
      
      <div>
        <div className="mb-4">
          <Label className="block text-sm font-medium mb-1">Blog Post Title</Label>
          <Input
            type="text"
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            placeholder="Blog Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={generateSlugFromTitle}
          />
        </div>
        
        <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex w-full border-b border-gray-200">
            <TabsTrigger value="content" className="flex-1">Content</TabsTrigger>
            <TabsTrigger value="seo" className="flex-1">SEO Settings</TabsTrigger>
            <TabsTrigger value="publishing" className="flex-1">Publishing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="mt-4">
            <div className="space-y-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Excerpt</Label>
                <textarea
                  className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                  placeholder="Brief summary of the post"
                  rows={3}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">
                  This will appear in blog listings. Recommended length: 100-160 characters.
                </p>
              </div>

              <div className="min-h-[500px]">
                <Label className="block text-sm font-medium mb-1">Content</Label>
                <Editor
                  initialValue={content}
                  onChange={setContent}
                  height="500px"
                  placeholder="Write your blog post content here..."
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="seo" className="mt-4 space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">URL Slug</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  /blog/
                </span>
                <Input
                  type="text"
                  className="rounded-l-none"
                  placeholder="url-slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                The URL slug for this blog post. Use lowercase letters, numbers, and hyphens only.
              </p>
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">SEO Title</Label>
              <Input
                type="text"
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="SEO Title (optional, uses Post Title if empty)"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended length: 50-60 characters. Current: {metaTitle.length} characters
              </p>
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Meta Description</Label>
              <textarea
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="Meta description for search engines"
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended length: 150-160 characters. Current: {metaDescription.length} characters
              </p>
            </div>

            <div>
              <Label className="block text-sm font-medium mb-1">Keywords</Label>
              <Input
                type="text"
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="keyword1, keyword2, keyword3"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Keywords separated by commas
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="publishing" className="mt-4 space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Author</Label>
              <Input
                type="text"
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="Author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Featured Image URL</Label>
              <Input
                type="text"
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="Enter image URL"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
              />
              {featuredImage && (
                <div className="mt-2 h-40 rounded-md overflow-hidden">
                  <img 
                    src={featuredImage} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>
              )}
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Status</Label>
              <select
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md bg-white"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
