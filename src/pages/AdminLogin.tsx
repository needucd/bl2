
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from '@/components/ui/toaster';
import BlurGlass from '@/components/ui/BlurGlass';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      // For demonstration purposes - using localStorage
      // In a real application, you would use a secure authentication service
      if (data.email === 'admin@bloodlyf.com' && data.password === 'admin123') {
        // Store admin authentication state
        localStorage.setItem('bloodlyf-admin-auth', 'true');
        localStorage.setItem('bloodlyf-admin-email', data.email);
        localStorage.setItem('bloodlyf-admin-lastLogin', new Date().toISOString());
        
        toast({
          title: "Login successful!",
          description: "Welcome to the admin dashboard",
        });
        
        // Redirect to admin dashboard
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 500);
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bloodlyf-ivory flex flex-col justify-center items-center p-4">
      <BlurGlass className="max-w-md w-full p-8 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-medium text-bloodlyf-darkblue">
            BloodLyf
          </h1>
          <h2 className="text-xl font-medium mt-2">Admin Login</h2>
          <p className="text-bloodlyf-taupe/70 mt-2">Sign in to access the admin dashboard</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="admin@bloodlyf.com" 
                        className="pl-10" 
                        {...field} 
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-bloodlyf-taupe/50" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your password" 
                        className="pl-10 pr-10" 
                        {...field} 
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-bloodlyf-taupe/50" />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-bloodlyf-taupe/50 hover:text-bloodlyf-taupe"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-bloodlyf-blue hover:bg-bloodlyf-darkblue transition-all duration-300 shadow-lg shadow-bloodlyf-blue/20 hover:shadow-bloodlyf-darkblue/30"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center text-sm text-bloodlyf-taupe/70">
          <a href="/" className="text-bloodlyf-blue hover:underline transition-colors">
            Return to website
          </a>
        </div>
        
        <div className="mt-6 text-center text-xs text-bloodlyf-taupe/50">
          <p>For demo purposes:</p>
          <p>Email: admin@bloodlyf.com</p>
          <p>Password: admin123</p>
        </div>
      </BlurGlass>
      <Toaster />
    </div>
  );
};

export default AdminLogin;
