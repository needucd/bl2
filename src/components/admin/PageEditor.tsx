
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Editor } from '@/components/admin/Editor';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PageEditorProps {
  pageId: string;
  initialData: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    content: string;
    featuredImage?: string;
  };
  onSave: (data: any) => void;
  onBack: () => void;
}

export const PageEditor = ({ pageId, initialData, onSave, onBack }: PageEditorProps) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [metaTitle, setMetaTitle] = useState(initialData.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData.metaDescription || '');
  const [content, setContent] = useState(initialData.content || '');
  const [featuredImage, setFeaturedImage] = useState(initialData.featuredImage || '');
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
        description: "Page title is required",
        variant: "destructive",
      });
      return;
    }

    if (!content) {
      toast({
        title: "Error",
        description: "Page content is required",
        variant: "destructive",
      });
      return;
    }

    onSave({
      id: pageId,
      title,
      metaTitle,
      metaDescription,
      content,
      featuredImage,
      lastUpdated: new Date().toISOString(),
      isThyroidSubpage: pageId.startsWith('thyroid/')
    });

    toast({
      title: "Success",
      description: "Page saved successfully",
    });
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
            wordCount < 1000 ? 'bg-amber-100 text-amber-800' : 
            wordCount > 1300 ? 'bg-red-100 text-red-800' : 
            'bg-green-100 text-green-800'
          }`}>
            {wordCount} words {wordCount < 1000 ? '(need more content)' : 
                            wordCount > 1300 ? '(too long)' : 
                            '(ideal length)'}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`/${pageId}`, '_blank')}
            className="flex items-center gap-1"
          >
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue flex items-center gap-1"
          >
            <Save className="h-4 w-4" />
            Save Page
          </Button>
        </div>
      </div>
      
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Page Title</label>
          <input
            type="text"
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            placeholder="Page Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="seo">SEO Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="mt-4">
            <div className="min-h-[500px]">
              <Editor
                initialValue={content}
                onChange={setContent}
                height="500px"
                placeholder="Write your page content here..."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="seo" className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">SEO Title</label>
              <input
                type="text"
                className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
                placeholder="SEO Title (optional, uses Page Title if empty)"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended length: 50-60 characters. Current: {metaTitle.length} characters
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Meta Description</label>
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
              <label className="block text-sm font-medium mb-1">Featured Image URL</label>
              <input
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
