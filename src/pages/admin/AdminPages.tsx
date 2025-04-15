import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, FileText, Pencil, Plus, Search, Trash, X, Filter, Tag, Package } from 'lucide-react';
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
import { PageEditor } from '@/components/admin/PageEditor';
import { PackageEditor } from '@/components/admin/PackageEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import BlurGlass from '@/components/ui/BlurGlass';

// Mock data for pages
const pagesData = [
  {
    id: 'home',
    title: 'Home',
    slug: '/',
    lastUpdated: '2023-08-15',
    status: 'published',
    views: 2345,
    type: 'page'
  },
  {
    id: 'about',
    title: 'About Us',
    slug: '/about',
    lastUpdated: '2023-08-10',
    status: 'published',
    views: 1876,
    type: 'page'
  },
  {
    id: 'services',
    title: 'Services',
    slug: '/services',
    lastUpdated: '2023-08-05',
    status: 'published',
    views: 1567,
    type: 'page'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    slug: '/contact',
    lastUpdated: null,
    status: 'draft',
    views: 567,
    type: 'page'
  }
];

// Mock data for packages
const packagesData = [
  {
    id: 'basic-health-checkup',
    title: 'Basic Health Checkup',
    slug: '/package/basic-health-checkup',
    lastUpdated: '2023-08-08',
    status: 'published',
    views: 1234,
    price: 1299,
    discountPrice: 999,
    tests: [
      { name: 'Complete Blood Count', description: 'Checks blood cell levels' },
      { name: 'Lipid Profile', description: 'Measures cholesterol levels' },
      { name: 'Liver Function Test', description: 'Assesses liver health' }
    ],
    included: ['Free home sample collection', 'Digital report within 24 hours', 'Doctor consultation'],
    recommendations: ['Recommended every 6 months', 'Ideal for adults aged 30+'],
    type: 'package'
  },
  {
    id: 'diabetes-screening',
    title: 'Diabetes Screening',
    slug: '/package/diabetes-screening',
    lastUpdated: '2023-07-25',
    status: 'published',
    views: 876,
    price: 1499,
    discountPrice: 1199,
    tests: [
      { name: 'Fasting Blood Sugar', description: 'Measures glucose levels after fasting' },
      { name: 'HbA1c', description: 'Shows average blood sugar over 3 months' },
      { name: 'Post Prandial Blood Sugar', description: 'Blood sugar after meals' }
    ],
    included: ['Free home sample collection', 'Digital report within 24 hours', 'Doctor consultation'],
    recommendations: ['Recommended annually', 'Essential for those with family history of diabetes'],
    type: 'package'
  }
];

// Mock data for thyroid packages
const thyroidData = [
  {
    id: 'thyroid-profile-test',
    title: 'Thyroid Profile Test',
    slug: '/thyroid/thyroid-profile-test',
    lastUpdated: '2023-08-01',
    status: 'published',
    views: 943,
    price: 899,
    discountPrice: 699,
    tests: [
      { name: 'TSH (Thyroid Stimulating Hormone)', description: 'Measures thyroid activity' },
      { name: 'T3 (Triiodothyronine)', description: 'Active thyroid hormone' },
      { name: 'T4 (Thyroxine)', description: 'Main thyroid hormone' }
    ],
    included: ['Free home sample collection', 'Digital report within 24 hours', 'Doctor consultation'],
    recommendations: ['Recommended annually', 'Important for those with thyroid history'],
    type: 'thyroid',
    isThyroidPackage: true
  },
  {
    id: 'thyroid-function-test',
    title: 'Thyroid Function Test',
    slug: '/thyroid/thyroid-function-test',
    lastUpdated: '2023-07-15',
    status: 'published',
    views: 756,
    price: 1099,
    discountPrice: 899,
    tests: [
      { name: 'TSH (Thyroid Stimulating Hormone)', description: 'Measures thyroid activity' },
      { name: 'Free T3', description: 'Unbound T3 hormone' },
      { name: 'Free T4', description: 'Unbound T4 hormone' },
      { name: 'Anti-Thyroid Antibodies', description: 'Checks for autoimmune thyroid conditions' }
    ],
    included: ['Free home sample collection', 'Digital report within 24 hours', 'Doctor consultation'],
    recommendations: ['Recommended for those with symptoms', 'Essential for monitoring thyroid disorders'],
    type: 'thyroid',
    isThyroidPackage: true
  }
];

const AdminPages = () => {
  const [activeTab, setActiveTab] = useState('pages');
  const [searchQuery, setSearchQuery] = useState('');
  const [allItems, setAllItems] = useState([...pagesData, ...packagesData, ...thyroidData]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemDetails, setItemDetails] = useState(null);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();
  
  useEffect(() => {
    filterItems();
  }, [searchQuery, activeTab, statusFilter]);
  
  const filterItems = () => {
    let items;
    
    // Filter by type first
    switch (activeTab) {
      case 'pages':
        items = allItems.filter(item => item.type === 'page');
        break;
      case 'packages':
        items = allItems.filter(item => item.type === 'package');
        break;
      case 'thyroid':
        items = allItems.filter(item => item.type === 'thyroid');
        break;
      default:
        items = allItems;
    }
    
    // Then filter by status if needed
    if (statusFilter !== 'all') {
      items = items.filter(item => item.status === statusFilter);
    }
    
    // Finally filter by search term
    if (searchQuery.trim()) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredItems(items);
  };
  
  const handleViewItem = (item) => {
    setItemDetails(item);
    setShowItemDetails(true);
  };
  
  const handleEditItem = (item) => {
    setEditingItem(item);
  };
  
  const handleSaveItem = (updatedItem) => {
    // In a real app, this would send the data to your backend
    // For now, we'll update the local state
    const updatedItems = allItems.map(item => 
      item.id === updatedItem.id ? { ...updatedItem, type: item.type } : item
    );
    
    setAllItems(updatedItems);
    setEditingItem(null);
    filterItems();
    
    toast({
      title: "Item updated",
      description: "The content has been successfully updated.",
    });
  };
  
  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };
  
  const handleDeleteConfirm = () => {
    // In a real app, this would send a delete request to your backend
    // For now, we'll update the local state
    const updatedItems = allItems.filter(item => item.id !== itemToDelete.id);
    setAllItems(updatedItems);
    setShowDeleteConfirmation(false);
    filterItems();
    
    toast({
      title: "Item deleted",
      description: "The content has been successfully deleted.",
    });
  };
  
  const handleCreateNewItem = () => {
    let newItemTemplate;
    
    // Create different templates based on the active tab
    switch (activeTab) {
      case 'packages':
        newItemTemplate = {
          id: `new-package-${Date.now()}`,
          title: '',
          slug: '',
          status: 'draft',
          views: 0,
          price: 0,
          tests: [],
          included: [],
          recommendations: [],
          type: 'package'
        };
        break;
      case 'thyroid':
        newItemTemplate = {
          id: `new-thyroid-${Date.now()}`,
          title: '',
          slug: '',
          status: 'draft',
          views: 0,
          price: 0,
          tests: [],
          included: [],
          recommendations: [],
          type: 'thyroid',
          isThyroidPackage: true
        };
        break;
      default: // pages
        newItemTemplate = {
          id: `new-page-${Date.now()}`,
          title: '',
          slug: '',
          status: 'draft',
          views: 0,
          content: '',
          metaTitle: '',
          metaDescription: '',
          type: 'page'
        };
    }
    
    setEditingItem(newItemTemplate);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  // If we're editing an item, show the appropriate editor
  if (editingItem) {
    if (editingItem.type === 'page') {
      return (
        <AdminLayout>
          <BlurGlass className="p-4 md:p-6 rounded-xl">
            <PageEditor 
              pageId={editingItem.id}
              initialData={editingItem}
              onSave={handleSaveItem}
              onBack={() => setEditingItem(null)}
            />
          </BlurGlass>
        </AdminLayout>
      );
    } else {
      return (
        <AdminLayout>
          <BlurGlass className="p-4 md:p-6 rounded-xl">
            <PackageEditor 
              packageId={editingItem.id}
              initialData={editingItem}
              onSave={handleSaveItem}
              onBack={() => setEditingItem(null)}
            />
          </BlurGlass>
        </AdminLayout>
      );
    }
  }
  
  return (
    <>
      <Helmet>
        <title>Content Management | BloodLyf Admin</title>
        <meta name="description" content="Manage website content in the BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">Content Management</h1>
              <p className="text-bloodlyf-taupe">Manage website pages, packages, and specialized content</p>
            </div>
            
            <Button 
              onClick={handleCreateNewItem} 
              className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New {activeTab === 'pages' ? 'Page' : activeTab === 'packages' ? 'Package' : 'Thyroid Package'}
            </Button>
          </div>
          
          <Tabs defaultValue="pages" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white mb-4">
              <TabsTrigger value="pages" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Pages</span>
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                <span>Packages</span>
              </TabsTrigger>
              <TabsTrigger value="thyroid" className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>Thyroid</span>
              </TabsTrigger>
            </TabsList>
            
            <BlurGlass className="p-4 md:p-6 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder={`Search ${activeTab}...`}
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <select 
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                  
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-1" 
                    onClick={filterItems}
                  >
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-gray-100">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead className="hidden md:table-cell">Status</TableHead>
                      <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                      <TableHead className="hidden md:table-cell">Views</TableHead>
                      {(activeTab === 'packages' || activeTab === 'thyroid') && (
                        <TableHead className="hidden md:table-cell">Price</TableHead>
                      )}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {truncateText(item.title, 40)}
                        </TableCell>
                        <TableCell className="text-sm">{item.slug}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm">{formatDate(item.lastUpdated)}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.views}</TableCell>
                        {(activeTab === 'packages' || activeTab === 'thyroid') && (
                          <TableCell className="hidden md:table-cell">
                            ₹{item.discountPrice || item.price}
                            {item.discountPrice && <span className="text-xs text-gray-500 ml-1 line-through">₹{item.price}</span>}
                          </TableCell>
                        )}
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleViewItem(item)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleEditItem(item)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleDeleteClick(item)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                {filteredItems.length === 0 && (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">No items found</h3>
                    <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </div>
            </BlurGlass>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredItems.length}</span> items
              </p>
            </div>
          </Tabs>
        </div>
      </AdminLayout>
      
      {/* View Item Details Dialog */}
      <Dialog open={showItemDetails} onOpenChange={setShowItemDetails}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Content Details</DialogTitle>
            <DialogDescription>
              View detailed information about this {itemDetails?.type}.
            </DialogDescription>
          </DialogHeader>
          
          {itemDetails && (
            <div className="space-y-4 py-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{itemDetails.title}</h3>
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${
                    itemDetails.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {itemDetails.status.charAt(0).toUpperCase() + itemDetails.status.slice(1)}
                  </span>
                  <DialogClose className="rounded-full hover:bg-gray-100 p-1">
                    <X className="h-4 w-4" />
                  </DialogClose>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <p>Last Updated: {formatDate(itemDetails.lastUpdated)}</p>
                <p>Views: {itemDetails.views}</p>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-1">URL Slug</h4>
                <div className="bg-gray-50 p-2 rounded text-gray-700 text-sm font-mono">
                  {itemDetails.slug}
                </div>
              </div>
              
              {(itemDetails.type === 'package' || itemDetails.type === 'thyroid') && (
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Price</h4>
                  <p className="font-medium text-lg">
                    ₹{itemDetails.discountPrice || itemDetails.price}
                    {itemDetails.discountPrice && (
                      <span className="text-sm text-gray-500 ml-2 line-through">₹{itemDetails.price}</span>
                    )}
                  </p>
                </div>
              )}
              
              {(itemDetails.type === 'package' || itemDetails.type === 'thyroid') && itemDetails.tests && (
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Tests Included</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {itemDetails.tests.map((test, index) => (
                      <li key={index}>{test.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end gap-2">
                <Button 
                  variant="outline"
                  onClick={() => window.open(itemDetails.slug, '_blank')}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => {
                    setShowItemDetails(false);
                    handleEditItem(itemDetails);
                  }}
                  className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {itemToDelete?.type}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {itemToDelete && (
              <p className="font-medium">{itemToDelete.title}</p>
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

export default AdminPages;
