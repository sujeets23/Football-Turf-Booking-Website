import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TurfCard, { TurfCardProps } from '@/components/TurfCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { SoccerBall } from 'lucide-react';

// Extended turf data for the turfs page
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
  },
  {
    id: 4,
    name: "Sportlife Arena",
    location: "West End District",
    rating: 4.5,
    price: 95,
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    features: ["5-a-side", "Outdoor", "Parking", "Café"]
  },
  {
    id: 5,
    name: "Golden Goal Pitch",
    location: "Central Stadium",
    rating: 4.7,
    price: 120,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    features: ["7-a-side", "Indoor", "Premium", "Video Analysis"]
  },
  {
    id: 6,
    name: "Victory Football Hub",
    location: "South Sports Village",
    rating: 4.4,
    price: 75,
    image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
    features: ["5-a-side", "Outdoor", "Budget-friendly", "Beginner-friendly"]
  },
];

const Turfs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([50, 200]);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [filters, setFilters] = useState({
    indoor: false,
    outdoor: false,
    parking: false,
    changingRooms: false,
    floodlights: false,
    premium: false,
  });

  // Filter turfs based on search, price range, and filters
  const filteredTurfs = turfData.filter(turf => {
    // Search term filter
    if (searchTerm && !turf.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !turf.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Price range filter
    if (turf.price < priceRange[0] || turf.price > priceRange[1]) {
      return false;
    }
    
    // Size filter
    if (selectedSize !== 'all') {
      if (!turf.features.includes(selectedSize)) {
        return false;
      }
    }
    
    // Feature filters
    if (filters.indoor && !turf.features.includes('Indoor')) return false;
    if (filters.outdoor && !turf.features.includes('Outdoor')) return false;
    if (filters.parking && !turf.features.includes('Parking')) return false;
    if (filters.changingRooms && !turf.features.includes('Changing Rooms')) return false;
    if (filters.floodlights && !turf.features.includes('Floodlights')) return false;
    if (filters.premium && !turf.features.includes('Premium')) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block p-2 rounded-full bg-turf/10 mb-3">
              <SoccerBall className="h-6 w-6 text-turf" />
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-gradient">Browse</span> Football Turfs
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover and book the perfect football turf for your next match. 
              Filter by size, features, and price to find your ideal playing field.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
            {/* Filters Sidebar */}
            <div className="neo-blur rounded-lg p-6">
              <h2 className="text-xl font-medium text-white mb-6">Filters</h2>

              {/* Search input */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Search</label>
                <Input 
                  placeholder="Search by name or location" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Price Range</label>
                <div className="mt-6">
                  <Slider 
                    defaultValue={[50, 200]} 
                    max={200} 
                    min={50} 
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Turf Size */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Turf Size</label>
                <Select 
                  defaultValue="all" 
                  onValueChange={(value) => setSelectedSize(value)}
                >
                  <SelectTrigger className="bg-gray-900 border-gray-700">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="5-a-side">5-a-side</SelectItem>
                    <SelectItem value="7-a-side">7-a-side</SelectItem>
                    <SelectItem value="Full pitch">Full Pitch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Features</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox 
                      id="indoor" 
                      checked={filters.indoor}
                      onCheckedChange={(checked) => setFilters({...filters, indoor: checked === true})}
                    />
                    <Label htmlFor="indoor" className="ml-2 text-sm text-gray-300">Indoor</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="outdoor" 
                      checked={filters.outdoor}
                      onCheckedChange={(checked) => setFilters({...filters, outdoor: checked === true})}
                    />
                    <Label htmlFor="outdoor" className="ml-2 text-sm text-gray-300">Outdoor</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="parking" 
                      checked={filters.parking}
                      onCheckedChange={(checked) => setFilters({...filters, parking: checked === true})}
                    />
                    <Label htmlFor="parking" className="ml-2 text-sm text-gray-300">Parking</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="changingRooms" 
                      checked={filters.changingRooms}
                      onCheckedChange={(checked) => setFilters({...filters, changingRooms: checked === true})}
                    />
                    <Label htmlFor="changingRooms" className="ml-2 text-sm text-gray-300">Changing Rooms</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="floodlights" 
                      checked={filters.floodlights}
                      onCheckedChange={(checked) => setFilters({...filters, floodlights: checked === true})}
                    />
                    <Label htmlFor="floodlights" className="ml-2 text-sm text-gray-300">Floodlights</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="premium" 
                      checked={filters.premium}
                      onCheckedChange={(checked) => setFilters({...filters, premium: checked === true})}
                    />
                    <Label htmlFor="premium" className="ml-2 text-sm text-gray-300">Premium</Label>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <Button 
                variant="outline" 
                className="w-full border-turf text-turf"
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([50, 200]);
                  setSelectedSize('all');
                  setFilters({
                    indoor: false,
                    outdoor: false,
                    parking: false,
                    changingRooms: false,
                    floodlights: false,
                    premium: false,
                  });
                }}
              >
                Reset Filters
              </Button>
            </div>

            {/* Turfs Grid */}
            <div className="lg:col-span-3">
              {filteredTurfs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTurfs.map(turf => (
                    <TurfCard key={turf.id} {...turf} />
                  ))}
                </div>
              ) : (
                <div className="neo-blur rounded-lg p-12 text-center">
                  <SoccerBall className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No turfs found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your filters or search terms to find available turfs.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-turf text-turf"
                    onClick={() => {
                      setSearchTerm('');
                      setPriceRange([50, 200]);
                      setSelectedSize('all');
                      setFilters({
                        indoor: false,
                        outdoor: false,
                        parking: false,
                        changingRooms: false,
                        floodlights: false,
                        premium: false,
                      });
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Turfs;
