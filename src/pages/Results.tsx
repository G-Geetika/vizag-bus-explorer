
import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  getDestination, 
  getStartingPoint, 
  BusRoute,
  destinations
} from "@/data/destinations";
import { ChevronLeft, Clock, Map, Bus } from "lucide-react";
import NotFound from "./NotFound";

const Results = () => {
  const { startingPointId, destinationId } = useParams<{
    startingPointId: string;
    destinationId: string;
  }>();
  
  const destination = destinationId ? getDestination(destinationId) : undefined;
  const startingPoint = startingPointId ? getStartingPoint(startingPointId) : undefined;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // If either point doesn't exist, show NotFound
  if (!destination || !startingPoint) {
    return <NotFound />;
  }

  // Find routes in both directions
  const relevantRoutes = useMemo(() => {
    // First check if we're looking for a standard route (from railway station/airport to destination)
    let routes: BusRoute[] = [];
    const standardSourceIds = ["railway-station", "airport"];
    
    // Case 1: Standard route (from railway station/airport TO a tourist spot)
    if (standardSourceIds.includes(startingPointId)) {
      const dest = getDestination(destinationId);
      if (dest) {
        routes = dest.busRoutes.filter(
          route => route.from.toLowerCase() === startingPoint.name.toLowerCase()
        );
      }
    }
    // Case 2: Reverse route (FROM a tourist spot TO railway station/airport)
    else if (standardSourceIds.includes(destinationId)) {
      // Get all destinations that have routes to this starting point
      const allDestinations = destinations.flatMap(dest => 
        dest.busRoutes
          .filter(route => route.to.toLowerCase() === startingPoint.name.toLowerCase())
          .map(route => ({
            ...route,
            from: dest.name, // The destination becomes the starting point
            to: startingPoint.name // The starting point becomes the destination
          }))
      );
      
      // Filter for routes that go to our desired destination
      routes = allDestinations.filter(
        route => route.to.toLowerCase() === getStartingPoint(destinationId)?.name.toLowerCase()
      );
      
      // If no reverse routes, try to generate reverse routes from existing forward routes
      if (routes.length === 0) {
        const sourceDestination = getDestination(startingPointId);
        if (sourceDestination) {
          // Find routes going in the opposite direction and reverse them
          const forwardRoutes = sourceDestination.busRoutes.filter(
            route => route.from.toLowerCase() === getStartingPoint(destinationId)?.name.toLowerCase()
          );
          
          // Create reversed routes
          routes = forwardRoutes.map(route => ({
            busNumber: route.busNumber,
            from: route.to,
            to: route.from,
            via: [...route.via].reverse(),
            frequency: route.frequency,
            duration: route.duration
          }));
        }
      }
    }
    // Case 3: Between two tourist spots
    else {
      // This is more complex - we need to find connections between tourist spots
      // For simplicity, we'll just show routes that might be in the data already
      const sourceDestination = getDestination(startingPointId);
      const targetDestination = getDestination(destinationId);
      
      if (sourceDestination && targetDestination) {
        // Check if there are direct routes between these tourist spots
        routes = sourceDestination.busRoutes.filter(
          route => route.to.toLowerCase() === targetDestination.name.toLowerCase()
        );
        
        // If no direct routes, we could potentially suggest alternative routes (not implemented here)
      }
    }
    
    return routes;
  }, [startingPointId, destinationId, startingPoint.name]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="mb-4 border-[#007F91] text-[#007F91] hover:bg-[#007F91]/10"
            >
              <Link to="/search">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Search
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-[#2E2E2E]">{destination.name}</h1>
            <p className="text-gray-600 text-lg mb-4">
              Routes from {startingPoint.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-[#2E2E2E]">About {destination.name}</h2>
                  <p className="text-[#2E2E2E] mb-4">{destination.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#2E2E2E]">
                    <Bus className="mr-2 h-6 w-6 text-[#007F91]" />
                    Available Bus Routes
                  </h2>
                  
                  {relevantRoutes.length > 0 ? (
                    <div className="space-y-6">
                      {relevantRoutes.map((route: BusRoute, index: number) => (
                        <Card key={`${route.busNumber}-${index}`} className="border-[#F6EEDF]">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="bg-[#007F91] text-white font-bold text-lg rounded-full h-10 w-10 flex items-center justify-center mr-3">
                                  {route.busNumber}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-[#2E2E2E]">
                                    From {route.from} to {route.to}
                                  </h3>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">{route.duration}</span>
                              </div>
                            </div>
                            
                            <div className="border-t border-[#F6EEDF] pt-3">
                              <div className="mb-2">
                                <span className="text-sm font-medium text-[#2E2E2E]">Via: </span>
                                <span className="text-sm text-gray-600">
                                  {route.via.join(" → ")}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-[#2E2E2E]">Frequency: </span>
                                <span className="text-sm text-gray-600">{route.frequency}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 bg-[#F6EEDF]/50 rounded-lg">
                      <p className="text-[#2E2E2E] mb-2">
                        <strong>No direct bus routes available.</strong>
                      </p>
                      <p className="text-[#2E2E2E]">
                        Consider taking a taxi or auto-rickshaw. Alternatively, you might want to take a bus to an intermediate location and then change to another service.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center text-[#2E2E2E]">
                    <Map className="mr-2 h-5 w-5 text-[#007F91]" />
                    Location Map
                  </h2>
                  
                  <div className="mb-4 bg-gray-200 rounded-lg h-60 flex items-center justify-center">
                    <img 
                      src="/map-preview.jpg" 
                      alt="Map Preview" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <Button asChild className="w-full mb-4 bg-[#3DBE8B] hover:bg-[#3DBE8B]/80">
                    <a 
                      href={destination.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  
                  <div className="mt-4 pt-4 border-t border-[#F6EEDF]">
                    <h3 className="font-semibold mb-2 text-[#2E2E2E]">Travel Tips:</h3>
                    <ul className="text-sm text-[#2E2E2E] space-y-2">
                      <li>• Carry exact change for bus fare</li>
                      <li>• Buses might be crowded during peak hours</li>
                      <li>• Download an offline map before your journey</li>
                      <li>• Consider a day pass if visiting multiple locations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
