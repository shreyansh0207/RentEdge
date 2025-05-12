
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('buy');
  
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <Button 
            variant={searchType === 'buy' ? 'default' : 'outline'} 
            className={searchType === 'buy' ? 'bg-realestate-600' : ''}
            onClick={() => setSearchType('buy')}
          >
            Buy
          </Button>
          <Button 
            variant={searchType === 'rent' ? 'default' : 'outline'} 
            className={searchType === 'rent' ? 'bg-realestate-600' : ''}
            onClick={() => setSearchType('rent')}
          >
            Rent
          </Button>
          <Button 
            variant={searchType === 'party' ? 'default' : 'outline'} 
            className={searchType === 'party' ? 'bg-realestate-600' : ''}
            onClick={() => setSearchType('party')}
          >
            Party
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Enter a location"
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <div className="w-full md:w-48">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="party">Party House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-48">
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="0-500">$0 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="2000+">$2,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-48">
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="BHK" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any BHK</SelectItem>
              <SelectItem value="1">1 BHK</SelectItem>
              <SelectItem value="2">2 BHK</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="4+">4+ BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="bg-teal-600 hover:bg-teal-700">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
