import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Volleyball } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Volleyball className="h-16 w-16 mx-auto text-turf mb-6 animate-float" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-gradient">Book Your Perfect</span>
            <br />
            <span className="text-white">Football Turf</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience premium football turfs with our immersive 3D booking platform. 
            Choose your perfect pitch, time slot, and create unforgettable matches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-turf hover:bg-turf/80 text-black w-full sm:w-auto">
                Book Now
              </Button>
            </Link>
            <Link to="/turfs">
              <Button size="lg" variant="outline" className="border-turf text-turf hover:bg-turf/20 w-full sm:w-auto">
                Explore Turfs
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden bg-gray-800">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`} 
                    alt="User avatar" 
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              <span className="text-turf font-medium">500+</span> bookings this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
