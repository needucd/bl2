
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  FileText, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  Package, 
  Search, 
  Settings, 
  ShoppingCart, 
  User, 
  Users, 
  X,
  Stethoscope
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import BlurGlass from '@/components/ui/BlurGlass';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const checkAdmin = () => {
      try {
        // Check if admin is authenticated via localStorage
        const isAuth = localStorage.getItem('bloodlyf-admin-auth');
        const adminEmail = localStorage.getItem('bloodlyf-admin-email');
        
        if (isAuth !== 'true' || !adminEmail) {
          navigate('/admin/login');
          return;
        }
        
        // Set user information
        setUser({ 
          email: adminEmail,
          name: adminEmail.split('@')[0],
          lastLogin: localStorage.getItem('bloodlyf-admin-lastLogin') || new Date().toISOString()
        });
      } catch (error) {
        console.error("Error checking admin session:", error);
        navigate('/admin/login');
      } finally {
        setLoading(false);
      }
    };
    
    checkAdmin();
  }, [navigate]);
  
  const handleLogout = async () => {
    try {
      // Remove auth data from localStorage
      localStorage.removeItem('bloodlyf-admin-auth');
      localStorage.removeItem('bloodlyf-admin-email');
      localStorage.removeItem('bloodlyf-admin-lastLogin');
      
      navigate('/admin/login');
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "There was a problem signing out",
        variant: "destructive",
      });
    }
  };
  
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
  
  const menuItems = [
    { 
      category: "Dashboard",
      items: [
        { label: 'Overview', icon: LayoutDashboard, path: '/admin/dashboard' },
        { label: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
      ]
    },
    {
      category: "Management",
      items: [
        { label: 'Users', icon: Users, path: '/admin/users' },
        { label: 'Bookings', icon: Calendar, path: '/admin/bookings' },
        { label: 'Test Packages', icon: Package, path: '/admin/packages' },
        { label: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
      ]
    },
    {
      category: "Content",
      items: [
        { label: 'Pages', icon: FileText, path: '/admin/pages' },
        { label: 'Blog', icon: FileText, path: '/admin/blog' },
      ]
    },
    {
      category: "Specialized Tests",
      items: [
        { label: 'Thyroid Tests', icon: Stethoscope, path: '/admin/thyroid-tests' },
      ]
    },
    {
      category: "Settings",
      items: [
        { label: 'Settings', icon: Settings, path: '/admin/settings' },
      ]
    },
  ];
  
  return (
    <div className="min-h-screen flex bg-bloodlyf-ivory">
      {/* Sidebar */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white backdrop-blur-md bg-opacity-90 border-r border-bloodlyf-beige/30 shadow-lg text-bloodlyf-taupe transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-bloodlyf-beige/30">
          <Link to="/admin/dashboard" className="flex items-center">
            <span className="text-xl font-serif text-bloodlyf-darkblue">BloodLyf Admin</span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-bloodlyf-taupe hover:text-bloodlyf-darkblue"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] px-2">
          <nav className="py-4">
            {menuItems.map((category, index) => (
              <div key={index} className="mb-4">
                <h3 className="px-4 text-xs font-semibold text-bloodlyf-taupe/60 uppercase tracking-wider mb-2">
                  {category.category}
                </h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300
                          ${location.pathname === item.path
                            ? 'bg-bloodlyf-blue/20 text-bloodlyf-darkblue font-medium'
                            : 'text-bloodlyf-taupe hover:bg-bloodlyf-blue/10 hover:text-bloodlyf-darkblue'
                          }`}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-bloodlyf-beige/30 flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-bloodlyf-taupe hover:text-bloodlyf-darkblue lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="ml-4 lg:ml-0 relative flex items-center">
              <Search className="absolute left-2 h-4 w-4 text-bloodlyf-taupe/50" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 bg-bloodlyf-ivory/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="border-2 border-bloodlyf-beige/30">
                <AvatarFallback className="bg-bloodlyf-blue text-white">
                  {user?.email?.charAt(0).toUpperCase() || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.name || user?.email}</p>
                <p className="text-xs text-bloodlyf-taupe/70">Administrator</p>
              </div>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center text-bloodlyf-taupe hover:text-bloodlyf-darkblue"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden md:inline ml-2">Logout</span>
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-bloodlyf-ivory p-4">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
