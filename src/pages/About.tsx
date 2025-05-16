import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Football } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block p-2 rounded-full bg-turf/10 mb-3">
              <Football className="h-6 w-6 text-turf" />
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-gradient">About</span> Us
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn more about TurfBooker, our mission, and our commitment to providing exceptional football turf booking experiences.
            </p>
          </div>
          
          {/* Rest of the About page content */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
