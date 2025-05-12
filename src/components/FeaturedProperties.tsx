
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard, { PropertyCardProps } from './PropertyCard';

const mockProperties: PropertyCardProps[] = [
  {
    id: '1',
    title: 'Modern Apartment with City View',
    price: 2500,
    priceType: 'month',
    type: 'Apartment',
    location: 'Downtown, New York',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    price: 850000,
    priceType: 'total',
    type: 'Villa',
    location: 'Beverly Hills, LA',
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Cozy Studio in Historic District',
    price: 1200,
    priceType: 'month',
    type: 'Studio',
    location: 'French Quarter, New Orleans',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '4',
    title: 'Waterfront Property with Dock',
    price: 650000,
    priceType: 'total',
    type: 'House',
    location: 'Lake Tahoe, CA',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '5',
    title: 'Penthouse with Rooftop Terrace',
    price: 3800,
    priceType: 'month',
    type: 'Penthouse',
    location: 'South Beach, Miami',
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '6',
    title: 'Rustic Mountain Cabin',
    price: 320000,
    priceType: 'total',
    type: 'Cabin',
    location: 'Aspen, CO',
    bedrooms: 2,
    bathrooms: 1,
    area: 1050,
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

interface FeaturedPropertiesProps {
  limit?: number;
}

const FeaturedProperties = ({ limit = 6 }: FeaturedPropertiesProps) => {
  const properties = mockProperties.slice(0, limit);
  
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-display font-semibold text-gray-900">Featured Properties</h2>
          <Link to="/properties" className="text-realestate-600 hover:text-realestate-700 flex items-center font-medium">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
