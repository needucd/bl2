
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Editor } from '@/components/admin/Editor';
import { Save, Eye, ArrowLeft, Plus, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import BlurGlass from '@/components/ui/BlurGlass';

interface PackageEditorProps {
  packageId: string;
  initialData: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    description: string;
    price: number;
    discountPrice?: number;
    tests: Array<{ name: string; description?: string }>;
    included: string[];
    recommendations: string[];
    featuredImage?: string;
    isThyroidPackage?: boolean;
  };
  onSave: (data: any) => void;
  onBack: () => void;
}

export const PackageEditor = ({ packageId, initialData, onSave, onBack }: PackageEditorProps) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [metaTitle, setMetaTitle] = useState(initialData.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData.metaDescription || '');
  const [keywords, setKeywords] = useState(initialData.keywords || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [price, setPrice] = useState(initialData.price || 0);
  const [discountPrice, setDiscountPrice] = useState(initialData.discountPrice || 0);
  const [tests, setTests] = useState(initialData.tests || []);
  const [included, setIncluded] = useState(initialData.included || []);
  const [recommendations, setRecommendations] = useState(initialData.recommendations || []);
  const [featuredImage, setFeaturedImage] = useState(initialData.featuredImage || '');
  const [isThyroidPackage, setIsThyroidPackage] = useState(initialData.isThyroidPackage || false);
  const [activeTab, setActiveTab] = useState('basic');

  const handleSave = () => {
    if (!title) {
      toast({
        title: "Error",
        description: "Package title is required",
        variant: "destructive",
      });
      return;
    }

    if (!description) {
      toast({
        title: "Error",
        description: "Package description is required",
        variant: "destructive",
      });
      return;
    }

    if (price <= 0) {
      toast({
        title: "Error",
        description: "Valid package price is required",
        variant: "destructive",
      });
      return;
    }

    onSave({
      id: packageId,
      title,
      metaTitle,
      metaDescription,
      keywords,
      description,
      price,
      discountPrice: discountPrice || null,
      tests,
      included,
      recommendations,
      featuredImage,
      isThyroidPackage,
      lastUpdated: new Date().toISOString(),
    });

    toast({
      title: "Success",
      description: "Package saved successfully",
    });
  };

  const handleAddTest = () => {
    setTests([...tests, { name: '', description: '' }]);
  };

  const handleRemoveTest = (index: number) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  const handleUpdateTest = (index: number, field: string, value: string) => {
    const updatedTests = [...tests];
    updatedTests[index] = { ...updatedTests[index], [field]: value };
    setTests(updatedTests);
  };

  const handleAddIncluded = () => {
    setIncluded([...included, '']);
  };

  const handleRemoveIncluded = (index: number) => {
    setIncluded(included.filter((_, i) => i !== index));
  };

  const handleUpdateIncluded = (index: number, value: string) => {
    const updatedIncluded = [...included];
    updatedIncluded[index] = value;
    setIncluded(updatedIncluded);
  };

  const handleAddRecommendation = () => {
    setRecommendations([...recommendations, '']);
  };

  const handleRemoveRecommendation = (index: number) => {
    setRecommendations(recommendations.filter((_, i) => i !== index));
  };

  const handleUpdateRecommendation = (index: number, value: string) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[index] = value;
    setRecommendations(updatedRecommendations);
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
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`/package/${packageId}`, '_blank')}
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
            Save Package
          </Button>
        </div>
      </div>
      
      <div>
        <div className="mb-4">
          <Label className="block text-sm font-medium mb-1">Package Title</Label>
          <Input
            type="text"
            className="w-full p-2 border border-bloodlyf-beige/50 rounded-md"
            placeholder="Package Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex w-full border-b border-gray-200">
            <TabsTrigger value="basic" className="flex-1">Basic Info</TabsTrigger>
            <TabsTrigger value="tests" className="flex-1">Tests & Inclusions</TabsTrigger>
            <TabsTrigger value="seo" className="flex-1">SEO Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="mt-4 space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Package Description</Label>
              <Editor
                initialValue={description}
                onChange={setDescription}
                height="200px"
                placeholder="Write the package description here..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Price (₹)</Label>
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Price in INR"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-1">Discount Price (₹) (Optional)</Label>
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Discount price in INR"
                  value={discountPrice || ''}
                  onChange={(e) => setDiscountPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <Label className="block text-sm font-medium mb-1">Featured Image URL</Label>
              <Input
                type="text"
                className="w-full"
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

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isThyroidPackage"
                checked={isThyroidPackage}
                onChange={(e) => setIsThyroidPackage(e.target.checked)}
                className="rounded border-bloodlyf-beige h-4 w-4"
              />
              <Label htmlFor="isThyroidPackage">This is a Thyroid Package</Label>
            </div>
          </TabsContent>
          
          <TabsContent value="tests" className="mt-4 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Tests Included</Label>
                <Button 
                  type="button" 
                  onClick={handleAddTest}
                  size="sm" 
                  variant="outline" 
                  className="flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add Test
                </Button>
              </div>
              
              <div className="space-y-3">
                {tests.map((test, index) => (
                  <BlurGlass key={index} className="p-3 rounded-lg relative">
                    <button 
                      type="button" 
                      onClick={() => handleRemoveTest(index)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                    <div className="space-y-2">
                      <div>
                        <Label className="text-xs">Test Name</Label>
                        <Input
                          value={test.name}
                          onChange={(e) => handleUpdateTest(index, 'name', e.target.value)}
                          placeholder="Test name"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Description (Optional)</Label>
                        <Input
                          value={test.description || ''}
                          onChange={(e) => handleUpdateTest(index, 'description', e.target.value)}
                          placeholder="Brief description"
                        />
                      </div>
                    </div>
                  </BlurGlass>
                ))}
                
                {tests.length === 0 && (
                  <div className="text-center p-4 border border-dashed border-bloodlyf-beige/50 rounded-md">
                    <p className="text-bloodlyf-taupe/60">No tests added yet</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">What's Included</Label>
                <Button 
                  type="button" 
                  onClick={handleAddIncluded}
                  size="sm" 
                  variant="outline" 
                  className="flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add Item
                </Button>
              </div>
              
              <div className="space-y-2">
                {included.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Input
                      value={item}
                      onChange={(e) => handleUpdateIncluded(index, e.target.value)}
                      placeholder="Included item"
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      onClick={() => handleRemoveIncluded(index)}
                      size="icon" 
                      variant="ghost" 
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {included.length === 0 && (
                  <div className="text-center p-4 border border-dashed border-bloodlyf-beige/50 rounded-md">
                    <p className="text-bloodlyf-taupe/60">No included items added yet</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Recommendations</Label>
                <Button 
                  type="button" 
                  onClick={handleAddRecommendation}
                  size="sm" 
                  variant="outline" 
                  className="flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add Recommendation
                </Button>
              </div>
              
              <div className="space-y-2">
                {recommendations.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Input
                      value={item}
                      onChange={(e) => handleUpdateRecommendation(index, e.target.value)}
                      placeholder="Recommendation"
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      onClick={() => handleRemoveRecommendation(index)}
                      size="icon" 
                      variant="ghost" 
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {recommendations.length === 0 && (
                  <div className="text-center p-4 border border-dashed border-bloodlyf-beige/50 rounded-md">
                    <p className="text-bloodlyf-taupe/60">No recommendations added yet</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="seo" className="mt-4 space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">SEO Title</Label>
              <Input
                type="text"
                className="w-full"
                placeholder="SEO Title (optional, uses Package Title if empty)"
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
                className="w-full"
                placeholder="keyword1, keyword2, keyword3"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Keywords separated by commas
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
