
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ClipboardList, Clock, Package, CalendarIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlurGlass from '@/components/ui/BlurGlass';
import { useToast } from '@/hooks/use-toast';
import UserDashboardLayout from '@/components/dashboard/UserDashboardLayout';

// Initialize Supabase client
const supabaseUrl = 'https://uyhraagmvhsehgfgyijh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aHJhYWdtdmhzZWhnZmd5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjI5MjYsImV4cCI6MjA1OTAzODkyNn0.3b9c77yIRYDbD018EDIaw4LPGuDUI25aZSuBJdlPobs';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sample data for charts
const recentBookingsData = [
  { name: 'Jan', tests: 4 },
  { name: 'Feb', tests: 3 },
  { name: 'Mar', tests: 7 },
  { name: 'Apr', tests: 5 },
  { name: 'May', tests: 9 },
  { name: 'Jun', tests: 6 },
];

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const checkUser = async () => {
      try {
        // First try to get session from Supabase
        const { data: { session } } = await supabase.auth.getSession();
        
        // If there's a Supabase session, use it
        if (session) {
          setUser(session.user);
          setLoading(false);
          return;
        }
        
        // If no Supabase session, check localStorage for admin auth
        const adminAuth = localStorage.getItem('bloodlyf-admin-auth');
        const adminEmail = localStorage.getItem('bloodlyf-admin-email');
        
        if (adminAuth === 'true' && adminEmail) {
          setUser({ email: adminEmail });
          setLoading(false);
          return;
        }
        
        // If no auth found, redirect to home
        navigate('/');
        toast({
          title: "Not authorized",
          description: "Please log in to access the dashboard",
          variant: "destructive",
        });
      } catch (error) {
        console.error("Error checking user session:", error);
        toast({
          title: "Error",
          description: "There was a problem loading your session",
          variant: "destructive",
        });
        setLoading(false);
      }
    };
    
    checkUser();
  }, [navigate, toast]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | BloodLyf</title>
        <meta name="description" content="View your dashboard and manage your account" />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20">
        <UserDashboardLayout>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, {user?.user_metadata?.name || user?.email}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BlurGlass className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-bloodlyf-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Tests</p>
                  <h3 className="text-2xl font-semibold">12</h3>
                </div>
              </BlurGlass>
              
              <BlurGlass className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming Tests</p>
                  <h3 className="text-2xl font-semibold">3</h3>
                </div>
              </BlurGlass>
              
              <BlurGlass className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed Tests</p>
                  <h3 className="text-2xl font-semibold">9</h3>
                </div>
              </BlurGlass>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BlurGlass className="p-6 overflow-hidden">
                <h3 className="text-lg font-medium mb-4">Recent Bookings</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={recentBookingsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="tests" fill="#713699" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </BlurGlass>

              <BlurGlass className="p-6">
                <h3 className="text-lg font-medium mb-4">Upcoming Tests</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-bloodlyf-blue" />
                      <div>
                        <p className="font-medium">Thyroid Profile Test</p>
                        <p className="text-sm text-muted-foreground">Scheduled for 20 Aug, 2023</p>
                      </div>
                    </div>
                    <span className="text-sm px-2 py-1 bg-purple-100 text-bloodlyf-blue rounded">Confirmed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-bloodlyf-blue" />
                      <div>
                        <p className="font-medium">Heart Health Package</p>
                        <p className="text-sm text-muted-foreground">Scheduled for 25 Aug, 2023</p>
                      </div>
                    </div>
                    <span className="text-sm px-2 py-1 bg-purple-100 text-bloodlyf-blue rounded">Confirmed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-bloodlyf-blue" />
                      <div>
                        <p className="font-medium">Diabetes Screening</p>
                        <p className="text-sm text-muted-foreground">Scheduled for 30 Aug, 2023</p>
                      </div>
                    </div>
                    <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Pending</span>
                  </div>
                </div>
              </BlurGlass>
            </div>
          </div>
        </UserDashboardLayout>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
