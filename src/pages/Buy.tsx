
import React, { useState, useEffect } from 'react';
import { PropertyCardProps } from '@/components/PropertyCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for buy properties
const buyProperties: PropertyCardProps[] = [
  {
    id: '1',
    title: 'Luxury Villa with Pool',
    price: 850000,
    priceType: 'total',
    type: 'Villa',
    purpose: 'buy',
    location: 'Beverly Hills, LA',
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    bhk: 5,
    swimmingPool: true,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    title: 'Waterfront Property with Dock',
    price: 650000,
    priceType: 'total',
    type: 'House',
    purpose: 'buy',
    location: 'Lake Tahoe, CA',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    bhk: 3,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    title: 'Rustic Mountain Cabin',
    price: 320000,
    priceType: 'total',
    type: 'Cabin',
    purpose: 'buy',
    location: 'Aspen, CO',
    bedrooms: 2,
    bathrooms: 1,
    area: 1050,
    bhk: 2,
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '4',
    title: 'Modern Downtown Condo',
    price: 425000,
    priceType: 'total',
    type: 'Condo',
    purpose: 'buy',
    location: 'Seattle, WA',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    bhk: 2,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '5',
    title: 'Beachfront Property',
    price: 1200000,
    priceType: 'total',
    type: 'Villa',
    purpose: 'buy',
    location: 'Malibu, CA',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    bhk: 4,
    swimmingPool: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '6',
    title: 'Suburban Family Home',
    price: 520000,
    priceType: 'total',
    type: 'House',
    purpose: 'buy',
    location: 'Portland, OR',
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2400,
    bhk: 4,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '7',
    title: 'Luxury Party Villa',
    price: 3500,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'Miami Beach, FL',
    bedrooms: 6,
    bathrooms: 5,
    area: 4200,
    bhk: 6,
    swimmingPool: true,
    peopleCapacity: 50,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '8',
    title: 'Oceanfront Party House',
    price: 5800,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'San Diego, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    bhk: 5,
    swimmingPool: true,
    peopleCapacity: 40,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

// Filter types
interface Filters {
  priceRange: [number, number];
  bhk: string;
  propertyType: string;
  city: string;
  swimmingPool: boolean;
  purpose: string;
}

const Buy = () => {
  const [allProperties] = useState(buyProperties);
  const [filteredProperties, setFilteredProperties] = useState(buyProperties);
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 2000000],
    bhk: 'any',
    propertyType: 'any',
    city: 'any',
    swimmingPool: false,
    purpose: 'any'
  });
  
  // Extract unique cities for the filter
  const cities = Array.from(new Set(allProperties.map(p => p.location.split(',')[0].trim())));
  
  // Apply filters when filter state changes
  useEffect(() => {
    const filtered = allProperties.filter(property => {
      // Price filter
      if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
        return false;
      }
      
      // BHK filter
      if (filters.bhk !== 'any' && property.bhk !== parseInt(filters.bhk)) {
        return false;
      }
      
      // Property type filter
      if (filters.propertyType !== 'any' && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
        return false;
      }
      
      // City filter
      if (filters.city !== 'any' && !property.location.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }
      
      // Swimming pool filter
      if (filters.swimmingPool && !property.swimmingPool) {
        return false;
      }
      
      // Purpose filter
      if (filters.purpose !== 'any' && property.purpose !== filters.purpose) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProperties(filtered);
  }, [filters, allProperties]);
  
  const handlePriceRangeChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, priceRange: [value[0], value[1]] }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container-custom py-8">
        <h1 className="text-3xl font-semibold mb-6">Properties for Sale & Party</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Purpose</Label>
                  <Select 
                    value={filters.purpose}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, purpose: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Purpose</SelectItem>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="party">Party House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Price Range</Label>
                  <div className="mt-1 px-2">
                    <Slider 
                      defaultValue={[0, 2000000]} 
                      max={2000000} 
                      step={10000}
                      onValueChange={handlePriceRangeChange}
                    />
                    <div className="flex justify-between text-sm mt-2 text-gray-500">
                      <span>${filters.priceRange[0].toLocaleString()}</span>
                      <span>${filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">BHK</Label>
                  <Select 
                    value={filters.bhk}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, bhk: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select BHK" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any BHK</SelectItem>
                      <SelectItem value="1">1 BHK</SelectItem>
                      <SelectItem value="2">2 BHK</SelectItem>
                      <SelectItem value="3">3 BHK</SelectItem>
                      <SelectItem value="4">4 BHK</SelectItem>
                      <SelectItem value="5">5+ BHK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Property Type</Label>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, propertyType: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Type</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="cabin">Cabin</SelectItem>
                      <SelectItem value="party">Party House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">City</Label>
                  <Select
                    value={filters.city}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, city: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any City</SelectItem>
                      {cities.map((city, index) => (
                        <SelectItem key={index} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="swimmingPool" 
                    checked={filters.swimmingPool}
                    onCheckedChange={(checked) => 
                      setFilters(prev => ({ ...prev, swimmingPool: checked === true }))
                    }
                  />
                  <Label htmlFor="swimmingPool">Swimming Pool</Label>
                </div>
              </div>
            </div>
          </aside>
          
          <div className="w-full lg:w-3/4">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-600">No properties found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Buy;
