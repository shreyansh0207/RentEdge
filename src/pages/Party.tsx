
import React, { useState, useEffect } from 'react';
import { PropertyCardProps } from '@/components/PropertyCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for party houses
const partyProperties: PropertyCardProps[] = [
  {
    id: '1',
    title: 'Miami Beach Party Villa',
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
    id: '2',
    title: 'Oceanfront Entertainment House',
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
  },
  {
    id: '3',
    title: 'Downtown Event Penthouse',
    price: 2500,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'New York, NY',
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    bhk: 3,
    peopleCapacity: 25,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '4',
    title: 'Sunset Lounge Party House',
    price: 4200,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'Los Angeles, CA',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    bhk: 4,
    swimmingPool: true,
    peopleCapacity: 35,
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '5',
    title: 'Mountain Retreat Party Cabin',
    price: 1800,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'Aspen, CO',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    bhk: 4,
    peopleCapacity: 20,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '6',
    title: 'Luxury Party Mansion',
    price: 7500,
    priceType: 'month',
    type: 'Party',
    purpose: 'party',
    location: 'Beverly Hills, LA',
    bedrooms: 8,
    bathrooms: 7,
    area: 6000,
    bhk: 8,
    swimmingPool: true,
    peopleCapacity: 100,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

// Filter interface
interface Filters {
  priceRange: [number, number];
  capacity: number;
  swimmingPool: boolean;
  city: string;
}

const Party = () => {
  const [allProperties] = useState(partyProperties);
  const [filteredProperties, setFilteredProperties] = useState(partyProperties);
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 10000],
    capacity: 0,
    swimmingPool: false,
    city: 'any'
  });
  
  // Extract unique cities for the filter
  const cities = Array.from(new Set(allProperties.map(p => p.location.split(',')[0].trim())));
  
  // Apply filters when they change
  useEffect(() => {
    const filtered = allProperties.filter(property => {
      // Price filter
      if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
        return false;
      }
      
      // Capacity filter
      if (filters.capacity > 0 && (property.peopleCapacity ?? 0) < filters.capacity) {
        return false;
      }
      
      // Swimming pool filter
      if (filters.swimmingPool && !property.swimmingPool) {
        return false;
      }
      
      // City filter
      if (filters.city !== 'any' && !property.location.toLowerCase().includes(filters.city.toLowerCase())) {
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
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Party Houses</h1>
          <p className="text-gray-600 mt-2">
            Find the perfect venue for your next event or celebration
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Price Range (per month)</Label>
                  <div className="mt-1 px-2">
                    <Slider 
                      defaultValue={[0, 10000]} 
                      max={10000} 
                      step={100}
                      onValueChange={handlePriceRangeChange}
                    />
                    <div className="flex justify-between text-sm mt-2 text-gray-500">
                      <span>${filters.priceRange[0].toLocaleString()}</span>
                      <span>${filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="capacity" className="text-sm font-medium">
                    Minimum Capacity (people)
                  </Label>
                  <Input
                    id="capacity"
                    type="number"
                    className="mt-1"
                    placeholder="Minimum capacity"
                    value={filters.capacity || ''}
                    onChange={(e) => setFilters(prev => ({ 
                      ...prev, 
                      capacity: parseInt(e.target.value) || 0 
                    }))}
                  />
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
                <h3 className="text-lg font-medium text-gray-600">No party houses found</h3>
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

export default Party;
