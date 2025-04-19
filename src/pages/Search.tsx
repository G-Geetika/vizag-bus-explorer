
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { startingPoints, destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import { MapPin, ArrowRight } from "lucide-react";

const Search = () => {
  const navigate = useNavigate();
  const [selectedStartingPoint, setSelectedStartingPoint] = useState<string | undefined>();
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>();

  const handlePlanJourney = () => {
    if (selectedStartingPoint && selectedDestination) {
      navigate(`/results/${selectedStartingPoint}/${selectedDestination}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Plan Your Journey</h1>
          
          <Card className="mb-12 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium mb-3">Select your journey details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Starting Point
                      </label>
                      <Select onValueChange={setSelectedStartingPoint} value={selectedStartingPoint}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select starting point" />
                        </SelectTrigger>
                        <SelectContent>
                          {startingPoints.map((point) => (
                            <SelectItem key={point.id} value={point.id}>
                              {point.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Destination
                      </label>
                      <Select 
                        onValueChange={setSelectedDestination}
                        value={selectedDestination}
                        disabled={!selectedStartingPoint}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={
                            selectedStartingPoint 
                              ? "Select destination" 
                              : "First select starting point"
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          {destinations.map((destination) => (
                            <SelectItem key={destination.id} value={destination.id}>
                              {destination.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full"
                    disabled={!selectedStartingPoint || !selectedDestination}
                    onClick={handlePlanJourney}
                  >
                    Find Bus Routes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* All Destinations */}
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6">All Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  description={destination.description}
                  imageUrl={destination.imageUrl}
                  startingPoint={selectedStartingPoint || "railway-station"}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
