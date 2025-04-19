
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bus, Map, MessageCircle, PhoneCall } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">About Way2Go</h1>
          
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Way2Go is dedicated to helping tourists navigate Visakhapatnam's public transportation system with ease. 
                We provide comprehensive and up-to-date information about APSRTC bus routes connecting the railway 
                station and airport to popular tourist destinations in Vizag.
              </p>
              <p className="text-gray-600">
                Our goal is to make public transportation accessible to visitors, reducing reliance on expensive taxis 
                while promoting a more sustainable and authentic way to experience the beautiful city of Visakhapatnam.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose Way2Go?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-ocean/10 p-2 rounded-full mr-3">
                      <Bus className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-semibold">Accurate Bus Information</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    We provide verified bus numbers, routes, and schedules to help you plan your journey effectively.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-ocean/10 p-2 rounded-full mr-3">
                      <Map className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-semibold">Map Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Direct links to Google Maps for each destination make navigation simple and hassle-free.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-ocean/10 p-2 rounded-full mr-3">
                      <MessageCircle className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-semibold">Travel Tips</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Helpful advice and insider tips to make your public transportation experience smoother.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About Visakhapatnam</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Visakhapatnam, often called Vizag, is a port city on the southeast coast of India. 
                    Known for its beautiful beaches, hills, and ancient Buddhist sites, it's one of the 
                    fastest-growing cities in India and an emerging tourist destination.
                  </p>
                  <p className="text-gray-600">
                    The city offers a blend of natural beauty, industrial prominence, and cultural heritage. 
                    From RK Beach and Kailasagiri to Simhachalam Temple and Ross Hill Church, there's something 
                    for every kind of traveler. Public transportation, especially APSRTC buses, is an efficient 
                    and economical way to explore these attractions.
                  </p>
                </div>
                
                <div className="md:w-1/3">
                  <img 
                    src="/vizag-city.jpg" 
                    alt="Visakhapatnam City" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  Have questions, suggestions, or corrections about our bus route information? 
                  We'd love to hear from you!
                </p>
                
                <div className="flex items-center mb-3">
                  <MessageCircle className="h-5 w-5 text-ocean mr-3" />
                  <span>Email: contact@way2go.com</span>
                </div>
                
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-ocean mr-3" />
                  <span>Phone: +91-123-456-7890</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
