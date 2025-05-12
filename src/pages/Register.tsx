
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Home, User, Mail, Lock, EyeOff, Eye, UserPlus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'buyer',
    agreeTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleUserTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle user registration
    console.log(formData);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center justify-center">
                <Home className="h-8 w-8 text-realestate-600" />
                <span className="ml-2 text-2xl font-display font-bold">UrbanDwell</span>
              </Link>
              <h1 className="text-2xl font-display font-bold mt-4">Create an Account</h1>
              <p className="text-gray-600 mt-2">Join our community today</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Password should be at least 8 characters with letters, numbers, and special characters.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="userType">I am a</Label>
                  <Select value={formData.userType} onValueChange={handleUserTypeChange}>
                    <SelectTrigger id="userType">
                      <SelectValue placeholder="Select your user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buyer">Buyer/Renter</SelectItem>
                      <SelectItem value="seller">Property Owner</SelectItem>
                      <SelectItem value="agent">Real Estate Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center">
                  <Checkbox
                    id="agree-terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: !!checked }))}
                    required
                  />
                  <Label htmlFor="agree-terms" className="ml-2 text-sm">
                    I agree to the{' '}
                    <a href="/terms" className="text-realestate-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-realestate-600 hover:underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-realestate-600 hover:bg-realestate-700 flex items-center justify-center">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Create Account
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-realestate-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
