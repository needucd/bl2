
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Calendar, Home, Menu, User } from 'lucide-react';
import BlurGlass from '@/components/ui/BlurGlass';

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { label: 'Dashboard', icon: Home, path: '/dashboard' },
    { label: 'Profile', icon: User, path: '/profile' },
    { label: 'My Bookings', icon: Calendar, path: '/my-bookings' },
  ];
  
  return (
    <div className="bloodlyf-container">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-bloodlyf-taupe hover:text-bloodlyf-darkblue transition-colors"
          >
            <Menu className="h-5 w-5" />
            <span>Menu</span>
          </button>
        </div>
        
        {/* Sidebar - Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <BlurGlass className="p-4 mb-6">
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                          location.pathname === item.path
                            ? 'bg-bloodlyf-blue/10 text-bloodlyf-blue'
                            : 'text-bloodlyf-taupe hover:bg-bloodlyf-blue/5 hover:text-bloodlyf-blue'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </BlurGlass>
          </div>
        )}
        
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <BlurGlass className="p-5 sticky top-32">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-bloodlyf-beige/30">
              <div className="h-10 w-10 rounded-full bg-bloodlyf-blue/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-bloodlyf-blue" />
              </div>
              <div>
                <h2 className="font-medium text-bloodlyf-darkblue">Dashboard</h2>
                <p className="text-xs text-muted-foreground">Manage your account</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'bg-bloodlyf-blue/10 text-bloodlyf-blue'
                          : 'text-bloodlyf-taupe hover:bg-bloodlyf-blue/5 hover:text-bloodlyf-blue'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </BlurGlass>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
