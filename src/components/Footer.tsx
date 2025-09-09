import React from 'react';
import { Link } from 'react-router-dom';
import { Volleyball } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="neo-blur py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Volleyball className="h-8 w-8 text-turf" />
              <span className="text-xl font-bold text-gradient">TurfBooker</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The premier football turf booking platform with immersive 3D visualization.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-turf text-sm">Home</Link></li>
              <li><Link to="/turfs" className="text-gray-400 hover:text-turf text-sm">Turfs</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-turf text-sm">Book Now</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-turf text-sm">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Email: contact@turfbooker.com</li>
              <li className="text-gray-400 text-sm">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-400 text-sm">Address: 123 Sports Avenue</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-turf">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-turf">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204.013-3.583.07-4.849-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-turf">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TurfBooker. All rights reserved. Developed By Sujeet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
