
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { CalendarIcon, CheckCircle, CircleDollarSign, FileText, Package, Users } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import BlurGlass from '@/components/ui/BlurGlass';

// Sample data for charts and statistics
const monthlyBookingsData = [
  { name: 'Jan', bookings: 65 },
  { name: 'Feb', bookings: 59 },
  { name: 'Mar', bookings: 80 },
  { name: 'Apr', bookings: 81 },
  { name: 'May', bookings: 56 },
  { name: 'Jun', bookings: 55 },
  { name: 'Jul', bookings: 40 },
  { name: 'Aug', bookings: 70 },
];

const packageDistributionData = [
  { name: 'Thyroid Tests', value: 35 },
  { name: 'Heart Health', value: 25 },
  { name: 'Diabetes', value: 20 },
  { name: 'Liver Function', value: 15 },
  { name: 'Others', value: 5 },
];

const COLORS = ['#713699', '#8657AB', '#9B78BD', '#B098CF', '#D0BEE0'];

const samplePages = [
  { id: 1, title: 'Home', views: 1245, lastUpdated: '2023-08-15' },
  { id: 2, title: 'About Us', views: 872, lastUpdated: '2023-08-10' },
  { id: 3, title: 'Services', views: 654, lastUpdated: '2023-08-05' },
  { id: 4, title: 'Contact', views: 432, lastUpdated: '2023-07-28' },
];

const samplePackages = [
  { id: 1, name: 'Complete Blood Count', price: 299, sales: 45, lastUpdated: '2023-08-12' },
  { id: 2, name: 'Thyroid Function Test', price: 499, sales: 32, lastUpdated: '2023-08-08' },
  { id: 3, name: 'Diabetes Screening', price: 399, sales: 28, lastUpdated: '2023-07-25' },
  { id: 4, name: 'Lipid Profile', price: 449, sales: 22, lastUpdated: '2023-08-01' },
];

const sampleBlogs = [
  { id: 1, title: 'Understanding Blood Tests', views: 342, lastUpdated: '2023-08-14' },
  { id: 2, title: 'The Role of Hydration in Blood Test Accuracy', views: 253, lastUpdated: '2023-08-05' },
  { id: 3, title: 'How to Prepare for Fasting Blood Tests', views: 187, lastUpdated: '2023-07-22' },
];

const AdminDashboard = () => {
  const [bookingsStats, setBookingsStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
  });
  const [usersCount, setUsersCount] = useState(0);
  const [revenueStats, setRevenueStats] = useState({
    totalRevenue: 0,
    monthlyRevenue: 0,
    averageBookingValue: 0,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem('bloodlyf-admin-auth');
    const adminEmail = localStorage.getItem('bloodlyf-admin-email');
    
    if (isAuth !== 'true' || !adminEmail) {
      // If not authenticated, redirect to login
      navigate('/admin/login');
      toast({
        title: "Authentication required",
        description: "Please login to access the admin dashboard",
        variant: "destructive",
      });
      return;
    }
    
    setIsAuthenticated(true);
    
    // Mock data fetching
    const fetchDashboardData = () => {
      setBookingsStats({
        total: 230,
        pending: 42,
        completed: 188,
      });
      
      setUsersCount(854);
      
      setRevenueStats({
        totalRevenue: 397450,
        monthlyRevenue: 82500,
        averageBookingValue: 1728,
      });
      
      setLoading(false);
    };
    
    fetchDashboardData();
  }, [navigate, toast]);
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-bloodlyf-ivory">
        <BlurGlass intensity="light" className="px-8 py-4 rounded-xl flex items-center gap-3">
          <div className="animate-spin h-5 w-5 border-2 border-bloodlyf-blue border-t-transparent rounded-full"></div>
          <span>Loading dashboard...</span>
        </BlurGlass>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | BloodLyf</title>
        <meta name="description" content="BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">Dashboard</h1>
            <p className="text-bloodlyf-taupe">Welcome to the BloodLyf admin dashboard</p>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 bg-white">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <BlurGlass className="p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 rounded-full bg-blue-100">
                      <Users className="h-6 w-6 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-bloodlyf-taupe">Total Users</p>
                      <h3 className="text-2xl font-semibold text-bloodlyf-darkblue">{usersCount}</h3>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-green-600 font-medium">
                    ↑ 8.2% from last month
                  </div>
                </BlurGlass>
                
                <BlurGlass className="p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 rounded-full bg-purple-100">
                      <CalendarIcon className="h-6 w-6 text-bloodlyf-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-bloodlyf-taupe">Total Bookings</p>
                      <h3 className="text-2xl font-semibold text-bloodlyf-darkblue">{bookingsStats.total}</h3>
                    </div>
                  </div>
                  <div className="mt-4 text-xs flex justify-between">
                    <span className="text-yellow-600 font-medium">
                      {bookingsStats.pending} Pending
                    </span>
                    <span className="text-green-600 font-medium">
                      {bookingsStats.completed} Completed
                    </span>
                  </div>
                </BlurGlass>
                
                <BlurGlass className="p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 rounded-full bg-green-100">
                      <CircleDollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-bloodlyf-taupe">Revenue</p>
                      <h3 className="text-2xl font-semibold text-bloodlyf-darkblue">₹{revenueStats.totalRevenue}</h3>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-green-600 font-medium">
                    ₹{revenueStats.monthlyRevenue} this month
                  </div>
                </BlurGlass>
                
                <BlurGlass className="p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 rounded-full bg-orange-100">
                      <Package className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-bloodlyf-taupe">Avg. Booking Value</p>
                      <h3 className="text-2xl font-semibold text-bloodlyf-darkblue">₹{revenueStats.averageBookingValue}</h3>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-green-600 font-medium">
                    ↑ 3.5% from last month
                  </div>
                </BlurGlass>
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BlurGlass className="p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-bloodlyf-darkblue mb-6">Monthly Bookings</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyBookingsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #e2e8f0" }}
                        />
                        <Bar dataKey="bookings" fill="#713699" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </BlurGlass>
                
                <BlurGlass className="p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-bloodlyf-darkblue mb-6">Package Distribution</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={packageDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {packageDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </BlurGlass>
              </div>
            </TabsContent>
            
            <TabsContent value="pages">
              <BlurGlass className="p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-bloodlyf-darkblue">Website Pages</h3>
                  <Link to="/admin/pages" className="px-4 py-2 bg-bloodlyf-blue text-white rounded-md hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30">
                    Manage Pages
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-bloodlyf-beige/30">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Views</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Last Updated</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-bloodlyf-beige/30">
                      {samplePages.map((page) => (
                        <tr key={page.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">{page.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{page.views}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{page.lastUpdated}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/admin/pages/${page.id}`} className="text-bloodlyf-blue hover:text-bloodlyf-darkblue mr-4 transition-colors">
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlurGlass>
            </TabsContent>
            
            <TabsContent value="packages">
              <BlurGlass className="p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-bloodlyf-darkblue">Test Packages</h3>
                  <Link to="/admin/pages?tab=packages" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-green-500/20 hover:shadow-green-600/30">
                    Add Package
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-bloodlyf-beige/30">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Sales</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Last Updated</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-bloodlyf-beige/30">
                      {samplePackages.map((pkg) => (
                        <tr key={pkg.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">{pkg.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">₹{pkg.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{pkg.sales}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{pkg.lastUpdated}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/admin/pages?tab=packages&id=${pkg.id}`} className="text-bloodlyf-blue hover:text-bloodlyf-darkblue mr-4 transition-colors">
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlurGlass>
            </TabsContent>
            
            <TabsContent value="blogs">
              <BlurGlass className="p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-bloodlyf-darkblue">Blog Posts</h3>
                  <Link to="/admin/blog" className="px-4 py-2 bg-bloodlyf-blue text-white rounded-md hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg hover:shadow-xl shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-blue/30">
                    Manage Blogs
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-bloodlyf-beige/30">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Views</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Last Updated</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-bloodlyf-taupe uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-bloodlyf-beige/30">
                      {sampleBlogs.map((blog) => (
                        <tr key={blog.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">{blog.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{blog.views}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{blog.lastUpdated}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={`/admin/blog/${blog.id}`} className="text-bloodlyf-blue hover:text-bloodlyf-darkblue mr-4 transition-colors">
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlurGlass>
            </TabsContent>
          </Tabs>
          
          {/* Recent Activity */}
          <BlurGlass className="p-6 rounded-xl">
            <h3 className="text-lg font-medium text-bloodlyf-darkblue mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 border-b border-bloodlyf-beige/20">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-bloodlyf-blue" />
                </div>
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-bloodlyf-taupe">Rahul Kumar registered with email rahul@example.com</p>
                  <p className="text-xs text-bloodlyf-taupe/70 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 border-b border-bloodlyf-beige/20">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Package className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">New booking created</p>
                  <p className="text-sm text-bloodlyf-taupe">Heart Health Package booked by Priya Singh</p>
                  <p className="text-xs text-bloodlyf-taupe/70 mt-1">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 border-b border-bloodlyf-beige/20">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-bloodlyf-blue" />
                </div>
                <div>
                  <p className="font-medium">Test completed</p>
                  <p className="text-sm text-bloodlyf-taupe">Thyroid Profile Test completed for Arun Menon</p>
                  <p className="text-xs text-bloodlyf-taupe/70 mt-1">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3">
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <CircleDollarSign className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium">Payment received</p>
                  <p className="text-sm text-bloodlyf-taupe">₹2,499 received for Heart Health Package</p>
                  <p className="text-xs text-bloodlyf-taupe/70 mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </BlurGlass>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
