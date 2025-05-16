
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export type TurfCardProps = {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  features: string[];
};

const TurfCard = ({ id, name, location, rating, price, image, features }: TurfCardProps) => {
  return (
    <Card className="overflow-hidden neo-blur border-gray-800 hover:border-turf/50 transition-all">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-turf text-black font-medium">
            <Star className="h-3 w-3 mr-1 fill-current" /> {rating}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-800">
              {feature}
            </Badge>
          ))}
        </div>
        <p className="text-2xl font-bold text-turf">${price}</p>
        <p className="text-sm text-gray-400">per hour</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/turfs/${id}`} className="w-1/2 mr-2">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
        <Link to="/booking" className="w-1/2">
          <Button className="w-full bg-turf text-black hover:bg-turf/80">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TurfCard;
