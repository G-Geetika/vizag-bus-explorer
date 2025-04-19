
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  getDestination, 
  getStartingPoint, 
  BusRoute 
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
  
  if (!destination || !startingPoint) {
    return <NotFound />;
  }

  // Filter routes by starting point
  const relevantRoutes = destination.busRoutes.filter(
    (route) => route.from.toLowerCase() === startingPoint.name.toLowerCase()
  );
  
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
              className="mb-4"
            >
              <Link to="/search">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Search
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
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
                  <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Bus className="mr-2 h-6 w-6 text-ocean" />
                    Available Bus Routes
                  </h2>
                  
                  {relevantRoutes.length > 0 ? (
                    <div className="space-y-6">
                      {relevantRoutes.map((route: BusRoute, index: number) => (
                        <Card key={`${route.busNumber}-${index}`}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="bg-ocean text-white font-bold text-lg rounded-full h-10 w-10 flex items-center justify-center mr-3">
                                  {route.busNumber}
                                </div>
                                <div>
                                  <h3 className="font-semibold">
                                    From {route.from} to {route.to}
                                  </h3>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">{route.duration}</span>
                              </div>
                            </div>
                            
                            <div className="border-t pt-3">
                              <div className="mb-2">
                                <span className="text-sm font-medium">Via: </span>
                                <span className="text-sm text-gray-600">
                                  {route.via.join(" → ")}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">Frequency: </span>
                                <span className="text-sm text-gray-600">{route.frequency}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      No direct bus routes available. Consider taking a taxi or auto-rickshaw.
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Map className="mr-2 h-5 w-5 text-ocean" />
                    Location Map
                  </h2>
                  
                  <div className="mb-4 bg-gray-200 rounded-lg h-60 flex items-center justify-center">
                    <img 
                      src="/map-preview.jpg" 
                      alt="Map Preview" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <Button asChild className="w-full mb-4" variant="default">
                    <a 
                      href={destination.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  
                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-semibold mb-2">Travel Tips:</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
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
