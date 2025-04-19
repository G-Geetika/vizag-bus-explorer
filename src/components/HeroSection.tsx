
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="hero-section relative min-h-[500px] flex items-center justify-center text-white py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Explore Vizag with Ease
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in">
          Discover the best bus routes from Vizag Railway Station & Airport to popular tourist destinations
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button asChild size="lg" className="bg-ocean hover:bg-ocean-dark">
            <Link to="/search">Plan Your Journey</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-gray-800">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
