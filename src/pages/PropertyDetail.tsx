
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyPayment from '@/components/PropertyPayment';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Heart,
  Share,
  Bed,
  Bath as BathIcon,
  Square,
  MapPin,
  Calendar,
  User,
  PhoneCall,
  Mail as MailIcon,
  Home,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Users,
  Droplet,
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data for property details
const propertyData = {
  id: '1',
  title: 'Modern Apartment with City View',
  description: 'This beautiful modern apartment offers stunning city views, high-end finishes, and an open floor plan. Perfect for professionals or small families looking for luxury in the heart of downtown.',
  price: 2500,
  priceType: 'month',
  type: 'Apartment',
  purpose: 'rent',
  status: 'For Rent',
  bhk: 2,
  swimmingPool: true,
  peopleCapacity: 4,
  location: {
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    neighborhood: 'Downtown',
    coordinates: {
      lat: 40.712776,
      lng: -74.005974
    }
  },
  details: {
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    yearBuilt: 2018,
    propertyType: 'Apartment',
    stories: 1,
    parking: '1 Garage',
    lotSize: 'N/A',
    basement: 'No',
  },
  features: [
    'Central Air Conditioning',
    'High-Speed Internet',
    'In-Unit Laundry',
    'Hardwood Floors',
    'Stainless Steel Appliances',
    'Granite Countertops',
    'Walk-in Closet',
    'Balcony',
    'Gym Access',
    'Pool Access',
    'Doorman',
    'Elevator',
  ],
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  ],
  agent: {
    name: 'Jane Smith',
    phone: '(555) 123-4567',
    email: 'jane.smith@urbandwell.com',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  availableFrom: '2023-12-01'
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();
  
  // In a real app, you would fetch the property data based on the ID
  // For this example, we're using the mock data
  const property = propertyData;
  
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };
  
  const handlePaymentSuccess = (transactionId: string) => {
    // In a real app, this would update the database
    console.log(`Payment successful for property ${id}, transaction ID: ${transactionId}`);
    toast({
      title: "Property secured!",
      description: "You'll receive a confirmation email shortly.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-realestate-600">Home</a>
            <span className="mx-2">/</span>
            <a href="/properties" className="hover:text-realestate-600">Properties</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{property.title}</span>
          </div>
          
          {/* Property Title and Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location.address}, {property.location.city}, {property.location.state} {property.location.zip}</span>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button 
                variant="outline"
                className={`flex items-center ${liked ? 'text-red-500' : ''}`}
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                {liked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" className="flex items-center">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="relative rounded-lg overflow-hidden h-[500px] mb-4">
              <img
                src={property.images[activeImageIndex]}
                alt={`Property ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                <ArrowLeft className="h-5 w-5 text-white" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 right-4 bg-realestate-600 text-white px-3 py-1 rounded-md">
                {property.status}
              </div>
              
              {property.swimmingPool && (
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md flex items-center">
                  <Droplet className="h-4 w-4 mr-1" />
                  Pool
                </div>
              )}
            </div>
            
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 h-20 w-32 rounded-md overflow-hidden ${
                    index === activeImageIndex ? 'ring-2 ring-realestate-600' : ''
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-semibold">Overview</h2>
                  <div className="text-2xl font-bold text-realestate-600">
                    ${property.price}
                    {property.priceType === 'month' && <span className="text-sm text-gray-500">/month</span>}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <Bed className="h-6 w-6 text-realestate-600 mb-2" />
                    <span className="text-sm text-gray-500">Bedrooms</span>
                    <span className="font-semibold">{property.details.bedrooms} ({property.bhk} BHK)</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <BathIcon className="h-6 w-6 text-realestate-600 mb-2" />
                    <span className="text-sm text-gray-500">Bathrooms</span>
                    <span className="font-semibold">{property.details.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <Square className="h-6 w-6 text-realestate-600 mb-2" />
                    <span className="text-sm text-gray-500">Area</span>
                    <span className="font-semibold">{property.details.area} sqft</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <Users className="h-6 w-6 text-realestate-600 mb-2" />
                    <span className="text-sm text-gray-500">Capacity</span>
                    <span className="font-semibold">{property.peopleCapacity} people</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="flex items-center text-realestate-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Available from {new Date(property.availableFrom).toLocaleDateString()}</span>
                </div>
              </div>
              
              {/* Property Details Tabs */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <Tabs defaultValue="details">
                  <TabsList className="w-full border-b">
                    <TabsTrigger className="flex-1" value="details">Details</TabsTrigger>
                    <TabsTrigger className="flex-1" value="features">Features & Amenities</TabsTrigger>
                    <TabsTrigger className="flex-1" value="location">Location</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(property.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="location" className="p-6">
                    <div className="h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Map will be displayed here</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-gray-700">
                        {property.location.address}, {property.location.neighborhood}, {property.location.city}, {property.location.state} {property.location.zip}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Nearby Amenities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <span className="bg-realestate-100 p-1 rounded text-xs text-realestate-600 mr-2">0.2 mi</span>
                          <span>Central Park</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-realestate-100 p-1 rounded text-xs text-realestate-600 mr-2">0.5 mi</span>
                          <span>Downtown Shopping Center</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-realestate-100 p-1 rounded text-xs text-realestate-600 mr-2">1.0 mi</span>
                          <span>Public Transportation</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-realestate-100 p-1 rounded text-xs text-realestate-600 mr-2">1.2 mi</span>
                          <span>Elementary School</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column - Agent Contact & Actions */}
            <div>
              {/* Contact Agent */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{property.agent.name}</h4>
                    <p className="text-sm text-gray-500">Listing Agent</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-realestate-600 mr-2" />
                    <a href={`tel:${property.agent.phone}`} className="text-gray-700 hover:text-realestate-600">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="h-5 w-5 text-realestate-600 mr-2" />
                    <a href={`mailto:${property.agent.email}`} className="text-gray-700 hover:text-realestate-600">
                      {property.agent.email}
                    </a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <PropertyPayment
                    propertyId={property.id}
                    propertyTitle={property.title}
                    amount={property.price}
                    onSuccess={handlePaymentSuccess}
                  />
                  
                  <Button variant="outline" className="w-full">
                    Schedule a Tour
                  </Button>
                </div>
              </div>
              
              {/* Mortgage Calculator */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Mortgage Calculator</h3>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Home Price</label>
                    <input
                      type="text"
                      defaultValue="$450,000"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Down Payment</label>
                    <input
                      type="text"
                      defaultValue="$90,000"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Loan Term</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>30 years</option>
                      <option>15 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Interest Rate</label>
                    <input
                      type="text"
                      defaultValue="5.5%"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-semibold mb-2">Estimated Monthly Payment</h4>
                  <p className="text-2xl font-bold text-realestate-600">$2,043</p>
                  <p className="text-sm text-gray-500">Principal & Interest</p>
                </div>
                
                <Button variant="outline" className="w-full">
                  Get Pre-Approved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
