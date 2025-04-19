
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Bus, MapPin, Compass } from "lucide-react";

const Index = () => {
  // Selected popular destinations for the home page
  const popularDestinations = destinations.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Way2Go Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-ocean-dark/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-ocean" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Starting Point</h3>
                <p className="text-gray-600">
                  Choose whether you're starting from Vizag Railway Station or Airport
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-ocean-dark/10 p-4 rounded-full mb-4">
                  <Compass className="h-8 w-8 text-ocean" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pick Your Destination</h3>
                <p className="text-gray-600">
                  Select from popular tourist spots in Visakhapatnam
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-ocean-dark/10 p-4 rounded-full mb-4">
                  <Bus className="h-8 w-8 text-ocean" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Bus Information</h3>
                <p className="text-gray-600">
                  Find bus numbers, routes, and maps to your destination
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Popular Destinations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover these must-visit tourist attractions in Visakhapatnam with our recommended bus routes
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  description={destination.description}
                  imageUrl={destination.imageUrl}
                  startingPoint="railway-station"
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="default" size="lg">
                <Link to="/search">View All Destinations</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About Way2Go</h2>
                <p className="text-gray-600 mb-6">
                  Way2Go is designed to help tourists navigate Visakhapatnam's public transportation system with ease. 
                  We provide comprehensive information about APSRTC bus routes connecting the railway station and 
                  airport to popular tourist destinations in Vizag.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're planning to visit beautiful beaches like RK Beach and Rushikonda, 
                  or cultural landmarks like Simhachalam Temple and Ross Hill Church, 
                  Way2Go helps you find the right bus connections to make your journey smooth and convenient.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="/vizag-skyline.jpg" 
                  alt="Visakhapatnam Skyline" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
