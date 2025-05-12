
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    caption: 'Find Your Dream Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    caption: 'Luxury Properties Await'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    caption: 'Your Next Address Starts Here'
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 max-w-4xl">
          {heroImages[currentImageIndex].caption}
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Buy, sell, or rent properties with ease. Find the perfect place to call home.
        </p>
        
        <div className="w-full max-w-4xl">
          <SearchBar />
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
