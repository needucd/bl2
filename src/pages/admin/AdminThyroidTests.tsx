
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, FileText, Pencil, Plus, Search, Stethoscope } from 'lucide-react';
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
import { PackageEditor } from '@/components/admin/PackageEditor';
import BlurGlass from '@/components/ui/BlurGlass';

// Sample data for thyroid packages
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
    isThyroidPackage: true,
    description: '<p>The Thyroid Profile Test is a comprehensive blood test that evaluates how well your thyroid is functioning.</p><p>This test includes measurement of key thyroid hormones including TSH, T3, and T4, which are essential for monitoring thyroid health.</p>',
    metaTitle: 'Thyroid Profile Test in Trivandrum | BloodLyf',
    metaDescription: 'Get a comprehensive thyroid profile test with home collection in Trivandrum. Check TSH, T3, T4 levels with fast results and doctor consultation.',
    keywords: 'thyroid test, thyroid profile, TSH test, T3 test, T4 test, thyroid testing Trivandrum'
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
    isThyroidPackage: true,
    description: '<p>The Thyroid Function Test is an advanced diagnostic panel that provides a detailed analysis of your thyroid gland health.</p><p>This comprehensive test measures both basic and specialized thyroid markers to help diagnose conditions like hypothyroidism, hyperthyroidism, and autoimmune thyroid disorders.</p>',
    metaTitle: 'Advanced Thyroid Function Test in Trivandrum | BloodLyf',
    metaDescription: 'Get an advanced thyroid function test with antibody testing at home in Trivandrum. Comprehensive evaluation for thyroid disorders with expert guidance.',
    keywords: 'thyroid function test, thyroid antibodies, advanced thyroid testing, thyroid disorder test, hypothyroidism test, hyperthyroidism test'
  },
  {
    id: 'thyroid-test-home-collection',
    title: 'Thyroid Test Home Collection',
    slug: '/thyroid/thyroid-test-home-collection-trivandrum',
    lastUpdated: '2023-08-10',
    status: 'published',
    views: 632,
    price: 999,
    discountPrice: 799,
    tests: [
      { name: 'TSH (Thyroid Stimulating Hormone)', description: 'Primary screening test for thyroid disorders' },
      { name: 'Total T3 & T4', description: 'Measures total thyroid hormones in blood' },
      { name: 'Free T3 & T4', description: 'Measures active thyroid hormones' }
    ],
    included: ['Home sample collection by trained phlebotomist', 'Digital report within 24 hours', 'Doctor consultation call'],
    recommendations: ['Regular monitoring for those on thyroid medication', 'Screening for those with family history of thyroid disorders'],
    isThyroidPackage: true,
    description: '<p>Our Thyroid Test Home Collection service brings convenient thyroid testing to your doorstep in Trivandrum.</p><p>We send a trained phlebotomist to collect your blood sample at your preferred time, ensuring accurate test results without the hassle of visiting a lab.</p>',
    metaTitle: 'Thyroid Test Home Collection in Trivandrum | BloodLyf',
    metaDescription: 'Book thyroid test home collection in Trivandrum. Professional phlebotomists, comfortable blood sampling, digital reports, and doctor consultation.',
    keywords: 'thyroid test home collection, thyroid blood test at home, doorstep thyroid testing, home sample collection Trivandrum, convenient thyroid test'
  }
];

const AdminThyroidTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [packages, setPackages] = useState(thyroidData);
  const [filteredPackages, setFilteredPackages] = useState(thyroidData);
  const [editingPackage, setEditingPackage] = useState(null);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter(pkg => 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPackages(filtered);
    }
  }, [searchQuery, packages]);
  
  const handleEditPackage = (pkg) => {
    setEditingPackage(pkg);
  };
  
  const handleSavePackage = (updatedPackage) => {
    // Update the package in the local state
    const updatedPackages = packages.map(pkg => 
      pkg.id === updatedPackage.id ? updatedPackage : pkg
    );
    
    setPackages(updatedPackages);
    setEditingPackage(null);
  };
  
  const handleCreateNewPackage = () => {
    const newPackage = {
      id: `thyroid-${Date.now()}`,
      title: '',
      slug: '',
      status: 'draft',
      views: 0,
      price: 0,
      tests: [],
      included: [],
      recommendations: [],
      isThyroidPackage: true,
      description: '',
      metaTitle: '',
      metaDescription: '',
      keywords: ''
    };
    
    setEditingPackage(newPackage);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // If we're editing a package, show the editor
  if (editingPackage) {
    return (
      <AdminLayout>
        <BlurGlass className="p-4 md:p-6 rounded-xl">
          <PackageEditor 
            packageId={editingPackage.id}
            initialData={editingPackage}
            onSave={handleSavePackage}
            onBack={() => setEditingPackage(null)}
          />
        </BlurGlass>
      </AdminLayout>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Thyroid Test Management | BloodLyf Admin</title>
        <meta name="description" content="Manage thyroid test packages in the BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">Thyroid Test Management</h1>
              <p className="text-bloodlyf-taupe">Manage specialized thyroid test packages and content</p>
            </div>
            
            <Button 
              onClick={handleCreateNewPackage} 
              className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Thyroid Package
            </Button>
          </div>
          
          <BlurGlass className="p-4 md:p-6 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search thyroid packages..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          
            <div className="rounded-lg overflow-hidden border border-gray-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                    <TableHead className="hidden md:table-cell">Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPackages.map((pkg) => (
                    <TableRow key={pkg.id}>
                      <TableCell className="font-medium">
                        {pkg.title}
                      </TableCell>
                      <TableCell>
                        ₹{pkg.discountPrice || pkg.price}
                        {pkg.discountPrice && <span className="text-xs text-gray-500 ml-1 line-through">₹{pkg.price}</span>}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          pkg.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {pkg.status.charAt(0).toUpperCase() + pkg.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{formatDate(pkg.lastUpdated)}</TableCell>
                      <TableCell className="hidden md:table-cell">{pkg.views}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => window.open(pkg.slug, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditPackage(pkg)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleEditPackage(pkg)}
                            className="text-bloodlyf-blue hover:bg-bloodlyf-blue/10"
                          >
                            <Stethoscope className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredPackages.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">No thyroid packages found</h3>
                  <p className="text-gray-500 mt-1">Try adjusting your search or create a new thyroid package.</p>
                </div>
              )}
            </div>
          </BlurGlass>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminThyroidTests;
