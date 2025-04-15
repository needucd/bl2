
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { Save, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlurGlass from '@/components/ui/BlurGlass';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import UserDashboardLayout from '@/components/dashboard/UserDashboardLayout';

// Initialize Supabase client
const supabaseUrl = 'https://uyhraagmvhsehgfgyijh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aHJhYWdtdmhzZWhnZmd5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjI5MjYsImV4cCI6MjA1OTAzODkyNn0.3b9c77yIRYDbD018EDIaw4LPGuDUI25aZSuBJdlPobs';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
  });
  
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
            description: "Please log in to access your profile",
            variant: "destructive",
          });
          return;
        }
        
        setUser(session.user);
        
        // Set initial profile data from user metadata
        setProfile(prev => ({
          ...prev,
          fullName: session.user.user_metadata?.name || '',
          email: session.user.email || '',
        }));
        
        // Fetch profile data from profiles table
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
        
        if (profileData) {
          setProfile(prev => ({
            ...prev,
            phone: profileData.phone || '',
            address: profileData.address || '',
            city: profileData.city || '',
            pincode: profileData.pincode || '',
            gender: profileData.gender || '',
            bloodGroup: profileData.blood_group || '',
            dateOfBirth: profileData.date_of_birth || '',
          }));
        } else if (error && error.code !== 'PGRST116') {
          // PGRST116 is the error code for "no rows returned"
          console.error("Error fetching profile:", error);
        }
        
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
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { name: profile.fullName }
      });
      
      if (updateError) throw updateError;
      
      // Upsert profile data
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          phone: profile.phone,
          address: profile.address,
          city: profile.city,
          pincode: profile.pincode,
          gender: profile.gender,
          blood_group: profile.bloodGroup,
          date_of_birth: profile.dateOfBirth,
          updated_at: new Date(),
        });
      
      if (profileError) throw profileError;
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "There was a problem updating your profile",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
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
        <title>Profile | BloodLyf</title>
        <meta name="description" content="Manage your profile and personal information" />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20">
        <UserDashboardLayout>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-bloodlyf-darkblue">My Profile</h1>
            </div>

            <BlurGlass className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="h-24 w-24 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="h-12 w-12 text-bloodlyf-blue" />
                  </div>
                  <h2 className="text-xl font-medium">{profile.fullName || user?.email}</h2>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      value={profile.email}
                      readOnly
                      disabled
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input 
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={profile.dateOfBirth}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <select
                      id="gender"
                      name="gender"
                      value={profile.gender}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-white/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <select
                      id="bloodGroup"
                      name="bloodGroup"
                      value={profile.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-white/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city"
                      name="city"
                      value={profile.city}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input 
                      id="pincode"
                      name="pincode"
                      value={profile.pincode}
                      onChange={handleInputChange}
                      className="bg-white/50"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={saving}
                    className="bg-bloodlyf-blue hover:bg-bloodlyf-darkblue"
                  >
                    {saving ? (
                      <>
                        <span className="animate-spin h-4 w-4 mr-2 border-2 border-t-transparent rounded-full"></span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </BlurGlass>
          </div>
        </UserDashboardLayout>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
