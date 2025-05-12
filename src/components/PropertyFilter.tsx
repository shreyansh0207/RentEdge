
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Filter, Check, Home, Waves, Users } from 'lucide-react';

const PropertyFilter = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Filter className="mr-2 h-5 w-5 text-realestate-600" />
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Property Type</h4>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Price Range ($/month)</h4>
          <div className="px-2">
            <Slider 
              defaultValue={[500, 5000]} 
              min={0} 
              max={10000} 
              step={100}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as number[])}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Purpose</h4>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Home className="mr-1 h-4 w-4" />
              Rent
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Check className="mr-1 h-4 w-4" />
              Buy
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              Party
            </Button>
          </div>
        </div>
        
        {expanded && (
          <>
            <div>
              <h4 className="text-sm font-medium mb-2">Bedrooms</h4>
              <div className="flex gap-2">
                {[1, 2, 3, 4, '5+'].map((num) => (
                  <Button key={num} variant="outline" size="sm" className="min-w-[40px]">
                    {num}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Bathrooms</h4>
              <div className="flex gap-2">
                {[1, 2, 3, '4+'].map((num) => (
                  <Button key={num} variant="outline" size="sm" className="min-w-[40px]">
                    {num}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pool" />
                  <Label htmlFor="pool" className="flex items-center">
                    <Waves className="h-4 w-4 mr-1" />
                    Pool
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ac" />
                  <Label htmlFor="ac">A/C</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="parking" />
                  <Label htmlFor="parking">Parking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <Label htmlFor="furnished">Furnished</Label>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">People Capacity</h4>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any capacity</SelectItem>
                  <SelectItem value="1-5">1-5 people</SelectItem>
                  <SelectItem value="5-10">5-10 people</SelectItem>
                  <SelectItem value="10-20">10-20 people</SelectItem>
                  <SelectItem value="20+">20+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        
        <div className="pt-2 flex gap-2">
          <Button className="w-full bg-realestate-600 hover:bg-realestate-700">
            Apply Filters
          </Button>
          <Button variant="outline" className="w-1/3">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
