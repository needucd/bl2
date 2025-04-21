
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Phone, MessageCircle, ChevronDown, Plus, Package, Star, LogOut } from 'lucide-react';
import BlurGlass from './ui/BlurGlass';
import { cn } from '@/lib/utils';
import MegaMenu from './MegaMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';

// Initialize Supabase client
const supabaseUrl = 'https://uyhraagmvhsehgfgyijh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aHJhYWdtdmhzZWhnZmd5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjI5MjYsImV4cCI6MjA1OTAzODkyNn0.3b9c77yIRYDbD018EDIaw4LPGuDUI25aZSuBJdlPobs';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check for existing session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    checkUser();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  
    
  const handleLogout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      toast({
        title: 'Logged out successfully',
        description: 'You have been logged out of your account.',
      });
    } catch (error) {
      toast({
        title: 'Error signing out',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#featured-products' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#newsletter' },
  ];
  
  const seoLinks = [
    { name: 'Home Blood Collection', href: '/home-blood-collection-trivandrum' },
    { name: 'Blood Test at Home', href: '/blood-test-at-home-trivandrum' },
    { name: 'Doorstep Collection', href: '/doorstep-blood-collection-kerala' },
    { name: 'Pattom Area Services', href: '/pattom-area' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
      scrolled ? "py-2 mt-0" : "py-4 mt-8"
    )}>
      <div className="bloodlyf-container">
        <BlurGlass 
          intensity={scrolled ? "medium" : "light"}
          className={cn(
            "px-4 py-3 flex items-center justify-between",
            scrolled ? "rounded-2xl" : "rounded-2xl"
          )}
        >
          {/* Logo Text */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center transition-colors hover:opacity-90">
              <h1 className="text-bloodlyf-darkblue text-2xl font-bold" style={{ fontFamily: 'Rosmatika, serif' }}>
                Bloodlyf
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-bloodlyf-taupe hover:text-bloodlyf-darkblue transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* MegaMenu Dropdown Trigger - Enhanced UI */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm bg-gradient-to-r from-[#713699] to-[#9251c4] text-white px-4 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <Package className="h-4 w-4 group-hover:rotate-6 transition-transform" />
                <span>Packages</span>
                <ChevronDown className="h-3.5 w-3.5 ml-1 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen p-0 border-none bg-transparent shadow-none" align="center">
                <MegaMenu />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="p-1 hover:scale-110 transition-transform">
              <Search className="h-5 w-5 text-bloodlyf-taupe" />
            </button>
            
            {/* Login/User Profile Button */}
            {!loading && (
              user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1 hover:scale-110 transition-transform relative">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#713699] to-[#9251c4] flex items-center justify-center text-white">
                        {user.user_metadata?.name ? user.user_metadata.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                      </div>
                      <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md border-[#e5deff] rounded-2xl">
                    <div className="p-2">
                      <p className="font-medium">{user.user_metadata?.name || user.email}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/my-bookings" className="cursor-pointer">My Bookings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
  to="/login" 
  className="p-1 flex items-center gap-2 hover:bg-bloodlyf-beige/30 rounded-full text-sm text-bloodlyf-taupe"
>
  <User className="h-5 w-5" />
  <span>Login</span>
</Link>
              )
            )}
            
            <button className="p-1 hover:scale-110 transition-transform">
              <Phone className="h-5 w-5 text-bloodlyf-taupe" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-1 rounded-full hover:bg-bloodlyf-beige/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-bloodlyf-taupe" />
            ) : (
              <Menu className="h-6 w-6 text-bloodlyf-taupe" />
            )}
          </button>
        </BlurGlass>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 px-4 z-50">
            <BlurGlass className="py-4 px-4 space-y-4 divide-y divide-bloodlyf-beige/20 animate-fade-in rounded-2xl">
              <div className="py-2 text-center">
                <h2 className="text-xl text-bloodlyf-darkblue" style={{ fontFamily: 'Rosmatika, serif' }}>Bloodlyf</h2>
              </div>
              
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-base font-medium text-bloodlyf-taupe hover:text-bloodlyf-darkblue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4">
                <p className="text-sm font-medium mb-2 text-bloodlyf-blue flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5" /> Popular Pages
                </p>
                <div className="space-y-2">
                  {seoLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block pl-2 py-1.5 text-sm text-bloodlyf-taupe hover:text-bloodlyf-darkblue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-around pt-4">
                <button className="p-2 rounded-full bg-bloodlyf-beige/10 hover:bg-bloodlyf-beige/30 transition-colors">
                  <Search className="h-5 w-5 text-bloodlyf-taupe" />
                </button>
                
                {!loading && (
                  user ? (
                    <div className="relative">
                      <button 
                        onClick={handleLogout}
                        className="p-2 rounded-full bg-bloodlyf-beige/10 hover:bg-bloodlyf-beige/30 transition-colors flex items-center gap-2"
                      >
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-[#713699] to-[#9251c4] flex items-center justify-center text-white text-xs">
                          {user.user_metadata?.name ? user.user_metadata.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm">Logout</span>
                      </button>
                    </div>
                  ) : (
                    <Link 
  to="/login" 
  className="p-2 rounded-full bg-bloodlyf-beige/10 hover:bg-bloodlyf-beige/30 transition-colors"
>
  <User className="h-5 w-5 text-bloodlyf-taupe" />
</Link>
                  )
                )}
                
                <button className="p-2 rounded-full bg-bloodlyf-beige/10 hover:bg-bloodlyf-beige/30 transition-colors">
                  <MessageCircle className="h-5 w-5 text-bloodlyf-taupe" />
                </button>
              </div>
            </BlurGlass>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
