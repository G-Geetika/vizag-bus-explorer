
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Way<span className="text-leaf">2</span>Go
            </h3>
            <p className="text-gray-300 text-sm">
              Helping tourists navigate Vizag's public transportation system with ease.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white text-sm">
                  Plan Journey
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">
              Have questions or suggestions?
            </p>
            <p className="text-gray-300 text-sm">
              Email: contact@way2go.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Way2Go. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
