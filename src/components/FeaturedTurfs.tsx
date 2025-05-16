
import React from 'react';
import TurfCard, { TurfCardProps } from './TurfCard';

const turfData: TurfCardProps[] = [
  {
    id: 1,
    name: "Green Valley Turf",
    location: "Downtown Sports Center",
    rating: 4.8,
    price: 85,
    image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    features: ["5-a-side", "Indoor", "Floodlights", "Changing Rooms"]
  },
  {
    id: 2,
    name: "Urban Football Arena",
    location: "City Sports Complex",
    rating: 4.6,
    price: 110,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    features: ["7-a-side", "Outdoor", "Floodlights", "Parking"]
  },
  {
    id: 3,
    name: "Premier Football Center",
    location: "Eastside Recreation Park",
    rating: 4.9,
    price: 150,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: ["Full pitch", "Premium", "Spectator Areas", "Pro Equipment"]
  }
];

const FeaturedTurfs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          <span className="text-gradient">Featured</span> Turfs
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our premium selection of football turfs available for booking, 
          equipped with top-notch facilities and excellent playing surfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {turfData.map(turf => (
          <TurfCard key={turf.id} {...turf} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTurfs;
