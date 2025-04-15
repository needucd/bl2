import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { Calendar, FileText, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlurGlass from '@/components/ui/BlurGlass';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import UserDashboardLayout from '@/components/dashboard/UserDashboardLayout';

const supabaseUrl = 'https://uyhraagmvhsehgfgyijh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aHJhYWdtdmhzZWhnZmd5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjI5MjYsImV4cCI6MjA1OTAzODkyNn0.3b9c77yIRYDbD018EDIaw4LPGuDUI25aZSuBJdlPobs';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const upcomingBookings = [
  { 
    id: 1, 
    testName: 'Thyroid Profile Test', 
    bookingDate: '2023-08-20', 
    bookingTime: '09:00 AM', 
    status: 'confirmed',
    price: 1299,
  },
  { 
    id: 2, 
    testName: 'Heart Health Package', 
    bookingDate: '2023-08-25', 
    bookingTime: '10:30 AM', 
    status: 'confirmed',
    price: 2499,
  },
  { 
    id: 3, 
    testName: 'Diabetes Screening', 
    bookingDate: '2023-08-30', 
    bookingTime: '08:00 AM', 
    status: 'pending',
    price: 1899,
  },
];

const completedBookings = [
  { 
    id: 4, 
    testName: 'Complete Blood Count', 
    bookingDate: '2023-07-15', 
    bookingTime: '09:30 AM', 
    status: 'completed',
    price: 899,
    reportUrl: '#',
  },
  { 
    id: 5, 
    testName: 'Liver Function Test', 
    bookingDate: '2023-07-22', 
    bookingTime: '11:00 AM', 
    status: 'completed',
    price: 1599,
    reportUrl: '#',
  },
  { 
    id: 6, 
    testName: 'Vitamin D Test', 
    bookingDate: '2023-08-01', 
    bookingTime: '08:30 AM', 
    status: 'completed',
    price: 1199,
    reportUrl: '#',
  },
  { 
    id: 7, 
    testName: 'Kidney Function Test', 
    bookingDate: '2023-08-05', 
    bookingTime: '10:00 AM', 
    status: 'completed',
    price: 1499,
    reportUrl: null,
  },
];

const MyBookings = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate('/');
          toast({
            title: "Not authorized",
            description: "Please log in to access your bookings",
            variant: "destructive",
          });
          return;
        }
        setUser(session.user);
      } catch (error) {
        console.error("Error checking user session:", error);
        toast({
          title: "Error",
          description: "There was a problem loading your session",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, [navigate, toast]);

  const formatDate = (dateString) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
        <title>My Bookings | BloodLyf</title>
        <meta name="description" content="View and manage your test bookings" />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20">
        <UserDashboardLayout>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">My Bookings</h1>
            </div>

            <BlurGlass className="p-6">
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-6">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="space-y-4">
                  {upcomingBookings.length === 0 ? (
                    <div className="text-center py-10">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No upcoming bookings</h3>
                      <p className="text-sm text-muted-foreground mb-4">You don't have any upcoming test bookings.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {upcomingBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col md:flex-row justify-between p-4 bg-white/40 rounded-lg transition-all hover:bg-white/60">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="h-12 w-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                              <Package className="h-6 w-6 text-bloodlyf-blue" />
                            </div>
                            <div>
                              <h3 className="font-medium">{booking.testName}</h3>
                              <p className="text-sm text-muted-foreground">
                                <span className="inline-flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" /> 
                                  {formatDate(booking.bookingDate)} at {booking.bookingTime}
                                </span>
                              </p>
                              <p className="text-sm font-medium mt-1">₹{booking.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm px-3 py-1 rounded-full 
                              ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                                booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                                'bg-blue-100 text-blue-700'}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-4">
                  {completedBookings.length === 0 ? (
                    <div className="text-center py-10">
                      <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No completed bookings</h3>
                      <p className="text-sm text-muted-foreground mb-4">You don't have any completed test bookings yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {completedBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col md:flex-row justify-between p-4 bg-white/40 rounded-lg transition-all hover:bg-white/60">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                              <Package className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">{booking.testName}</h3>
                              <p className="text-sm text-muted-foreground">
                                <span className="inline-flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" /> 
                                  {formatDate(booking.bookingDate)} at {booking.bookingTime}
                                </span>
                              </p>
                              <p className="text-sm font-medium mt-1">₹{booking.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                              Completed
                            </span>
                            {booking.reportUrl && (
                              <a 
                                href={booking.reportUrl} 
                                className="inline-flex items-center text-sm px-3 py-1 rounded-full bg-bloodlyf-blue text-white hover:bg-bloodlyf-darkblue transition-colors"
                              >
                                <FileText className="h-3 w-3 mr-1" /> View Report
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </BlurGlass>
          </div>
        </UserDashboardLayout>
      </main>

      <Footer />
    </>
  );
};

export default MyBookings;
