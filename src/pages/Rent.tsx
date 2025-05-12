
import React, { useState } from 'react';
import { PropertyCardProps } from '@/components/PropertyCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';

// Mock data for rental properties
const rentalProperties: PropertyCardProps[] = [
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
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
    title: 'Luxury Apartment with Pool Access',
    price: 2800,
    priceType: 'month',
    type: 'Apartment',
    location: 'Upper East Side, Manhattan',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '5',
    title: 'Family Home with Garden',
    price: 3200,
    priceType: 'month',
    type: 'House',
    location: 'Brooklyn, New York',
    bedrooms: 4,
    bathrooms: 2,
    area: 2200,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '6',
    title: 'Party Villa with Ocean View',
    price: 4500,
    priceType: 'month',
    type: 'Villa',
    location: 'Malibu, California',
    bedrooms: 5,
    bathrooms: 4,
    area: 3600,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

const Rent = () => {
  const [filteredProperties, setFilteredProperties] = useState(rentalProperties);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container-custom py-8">
        <h1 className="text-3xl font-semibold mb-6">Properties for Rent</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/4">
            <PropertyFilter />
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

export default Rent;
