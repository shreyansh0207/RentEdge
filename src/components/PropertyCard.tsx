
import { Heart, MapPin, Bath, Bed, ArrowRight, Users, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  priceType: 'month' | 'total';
  type: string;
  purpose?: 'rent' | 'buy' | 'party';
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  swimmingPool?: boolean;
  peopleCapacity?: number;
  bhk?: number;
  className?: string;
}

const PropertyCard = ({
  id,
  title,
  price,
  priceType,
  type,
  purpose = 'buy',
  location,
  bedrooms,
  bathrooms,
  area,
  image,
  featured = false,
  swimmingPool = false,
  peopleCapacity,
  bhk,
  className
}: PropertyCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md card-hover", 
      featured ? "border-2 border-teal-500" : "border border-gray-200",
      className
    )}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
        {featured && (
          <div className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Featured
          </div>
        )}
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-white font-semibold text-xl">${price.toLocaleString()}</span>
              {priceType === 'month' && <span className="text-white text-sm">/month</span>}
            </div>
            <span className="bg-realestate-600 text-white text-xs px-2 py-1 rounded">
              {type}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex flex-wrap justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center text-gray-700 mb-1">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{bedrooms} bd</span>
            {bhk && <span className="text-sm ml-1">({bhk} BHK)</span>}
          </div>
          <div className="flex items-center text-gray-700 mb-1">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{bathrooms} ba</span>
          </div>
          <div className="flex items-center text-gray-700 mb-1">
            <span className="text-sm">{area} sqft</span>
          </div>
          
          {swimmingPool && (
            <div className="flex items-center text-gray-700 ml-2 mb-1">
              <Droplet className="w-4 h-4 mr-1 text-blue-500" />
              <span className="text-sm">Pool</span>
            </div>
          )}
          
          {peopleCapacity && (
            <div className="flex items-center text-gray-700 ml-2 mb-1">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">Fits {peopleCapacity}</span>
            </div>
          )}
        </div>
        
        <Link to={`/property/${id}`} className="flex items-center justify-center w-full mt-4 text-realestate-600 hover:text-realestate-700 font-medium transition-colors">
          View Details
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
