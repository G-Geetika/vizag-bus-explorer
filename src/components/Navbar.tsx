
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-ocean">
                Way<span className="text-leaf">2</span>Go
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean">
              Home
            </Link>
            <Link to="/search" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean">
              Plan Journey
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean">
              About
            </Link>
          </div>
          
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      <div className={cn("sm:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/search" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Plan Journey
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ocean hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
