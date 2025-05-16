
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedTurfs from '@/components/FeaturedTurfs';
import FootballField from '@/components/3D/FootballField';

const Index = () => {
  return (
    <>
      <FootballField />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Hero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 neo-blur rounded-lg hover:border-turf/50 transition-all">
                <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Find Your Turf</h3>
                <p className="text-gray-400">Browse through our collection of premium football turfs and find the perfect one for your game.</p>
              </div>
              
              <div className="p-6 neo-blur rounded-lg hover:border-turf/50 transition-all">
                <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Book Instantly</h3>
                <p className="text-gray-400">Select your preferred date and time slot, and secure your booking with just a few clicks.</p>
              </div>
              
              <div className="p-6 neo-blur rounded-lg hover:border-turf/50 transition-all">
                <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Play & Enjoy</h3>
                <p className="text-gray-400">Show up, play on a well-maintained turf, and create memorable football experiences.</p>
              </div>
            </div>
          </div>
          
          <FeaturedTurfs />
          
          {/* Testimonials Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">
                What Our <span className="text-gradient">Players</span> Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  team: "FC United",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  text: "The booking process was seamless and the turf quality was exceptional. Will definitely be booking again!"
                },
                {
                  name: "Sarah Williams",
                  team: "City Strikers",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  text: "I love how I can visualize the field in 3D before booking. The facilities were exactly as shown. Great experience!"
                },
                {
                  name: "Michael Chen",
                  team: "Phoenix FC",
                  image: "https://randomuser.me/api/portraits/men/52.jpg",
                  text: "Best football booking platform I've used. Real-time availability and instant confirmation made planning our match so easy."
                }
              ].map((testimonial, index) => (
                <div key={index} className="neo-blur rounded-lg p-6 hover:border-turf/50 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.team}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
