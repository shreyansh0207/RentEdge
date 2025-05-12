
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import Footer from '@/components/Footer';
import { Building, CheckCircle, MapPin, Home, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-realestate-600 mb-2">15k+</p>
              <p className="text-gray-600">Properties Available</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-realestate-600 mb-2">10k+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-realestate-600 mb-2">500+</p>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-realestate-600 mb-2">99%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <FeaturedProperties />
      
      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-semibold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-realestate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-realestate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Properties</h3>
              <p className="text-gray-600">
                Browse our extensive catalog of properties with advanced filters to find your perfect match.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-realestate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-realestate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Take a Tour</h3>
              <p className="text-gray-600">
                Schedule virtual or in-person tours of your favorite properties at your convenience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-realestate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-realestate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Close the Deal</h3>
              <p className="text-gray-600">
                Secure your dream property with our streamlined buying or renting process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Locations */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-semibold text-center mb-12">Featured Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'New York',
                properties: 328,
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'Los Angeles',
                properties: 265,
                image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'Miami',
                properties: 189,
                image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'Chicago',
                properties: 207,
                image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'San Francisco',
                properties: 152,
                image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'Seattle',
                properties: 118,
                image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((location, index) => (
              <div key={index} className="group relative h-72 rounded-lg overflow-hidden shadow-md">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{location.name}</h3>
                  <div className="flex items-center text-white/80">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location.properties} Properties</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-realestate-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect property with UrbanDwell.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/properties" className="btn-primary bg-white text-realestate-600 hover:bg-gray-100">
              Browse Properties
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
