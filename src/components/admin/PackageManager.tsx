
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Save, Trash2, Image, Plus, X } from 'lucide-react';

interface PackageItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  isPopular: boolean;
}

interface PackageManagerProps {
  initialData?: PackageItem;
  onSave: (data: PackageItem) => void;
  onCancel: () => void;
}

const PackageManager = ({ initialData, onSave, onCancel }: PackageManagerProps) => {
  const [packageData, setPackageData] = useState<PackageItem>(
    initialData || {
      id: Date.now(),
      name: '',
      price: 0,
      description: '',
      image: '',
      isPopular: false,
    }
  );
  
  const [includedTests, setIncludedTests] = useState<string[]>(
    ['Complete Blood Count', 'Hemoglobin Test']
  );
  const [newTest, setNewTest] = useState('');

  const handleChange = (field: keyof PackageItem, value: string | number | boolean) => {
    setPackageData({ ...packageData, [field]: value });
  };

  const handleAddTest = () => {
    if (newTest && !includedTests.includes(newTest)) {
      setIncludedTests([...includedTests, newTest]);
      setNewTest('');
    }
  };

  const handleRemoveTest = (index: number) => {
    setIncludedTests(includedTests.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!packageData.name) {
      toast({
        title: "Error",
        description: "Package name is required",
        variant: "destructive",
      });
      return;
    }
    
    if (!packageData.price || packageData.price <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return;
    }
    
    if (!packageData.description) {
      toast({
        title: "Error",
        description: "Package description is required",
        variant: "destructive",
      });
      return;
    }
    
    onSave(packageData);
    
    toast({
      title: "Success",
      description: "Package saved successfully",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">
          {initialData ? 'Edit Package' : 'Add New Package'}
        </h2>
        <Button variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Package Name</Label>
            <Input
              id="name"
              value={packageData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Complete Health Checkup"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price (₹)</Label>
            <Input
              id="price"
              type="number"
              value={packageData.price}
              onChange={(e) => handleChange('price', Number(e.target.value))}
              placeholder="499"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={packageData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Comprehensive health package that includes 30+ tests"
            rows={4}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <div className="flex gap-2">
            <Input
              id="image"
              value={packageData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-grow"
            />
            <Button type="button" variant="outline" size="icon">
              <Image className="h-4 w-4" />
            </Button>
          </div>
          
          {packageData.image && (
            <div className="mt-2 relative w-32 h-32 rounded-md overflow-hidden border">
              <img 
                src={packageData.image} 
                alt="Package" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            checked={packageData.isPopular}
            onCheckedChange={(checked) => handleChange('isPopular', checked)}
            id="isPopular"
          />
          <Label htmlFor="isPopular">Mark as Popular</Label>
        </div>
        
        <div className="space-y-2">
          <Label>Included Tests</Label>
          <div className="border rounded-md p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {includedTests.map((test, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                >
                  <span className="text-sm">{test}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTest(index)}
                    className="ml-1 text-gray-500 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={newTest}
                onChange={(e) => setNewTest(e.target.value)}
                placeholder="Add test"
                className="flex-grow"
              />
              <Button 
                type="button" 
                onClick={handleAddTest} 
                variant="outline" 
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-4 pt-4 border-t">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Package
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PackageManager;
