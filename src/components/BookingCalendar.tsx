import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { BadmintonBird } from 'lucide-react';

type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

type TurfType = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const timeSlots: TimeSlot[] = [
  { id: 1, time: '08:00 - 09:00', available: true },
  { id: 2, time: '09:00 - 10:00', available: true },
  { id: 3, time: '10:00 - 11:00', available: false },
  { id: 4, time: '11:00 - 12:00', available: true },
  { id: 5, time: '12:00 - 13:00', available: true },
  { id: 6, time: '13:00 - 14:00', available: false },
  { id: 7, time: '14:00 - 15:00', available: true },
  { id: 8, time: '15:00 - 16:00', available: true },
  { id: 9, time: '16:00 - 17:00', available: true },
  { id: 10, time: '17:00 - 18:00', available: false },
  { id: 11, time: '18:00 - 19:00', available: true },
  { id: 12, time: '19:00 - 20:00', available: true },
  { id: 13, time: '20:00 - 21:00', available: true },
  { id: 14, time: '21:00 - 22:00', available: true },
];

const turfTypes: TurfType[] = [
  { id: 1, name: '5-a-side', price: 80, description: 'Perfect for small teams and fast games.' },
  { id: 2, name: '7-a-side', price: 100, description: 'Ideal for medium-sized games with more space.' },
  { id: 3, name: 'Full pitch', price: 150, description: 'Regulation size for official matches and tournaments.' },
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [selectedTurf, setSelectedTurf] = useState<TurfType>(turfTypes[0]);
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Incomplete Booking",
        description: "Please select both a date and time slot.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `You've booked the ${selectedTurf.name} turf on ${date.toDateString()} at ${selectedTime.time}.`,
      className: "bg-turf text-white"
    });

    setSelectedTime(null);
  };

  return (
    <Card className="neo-blur border-gray-800">
      <CardHeader>
        <CardTitle className="text-gradient text-2xl flex items-center gap-2">
          <BadmintonBird className="h-5 w-5" />
          Book Your Turf
        </CardTitle>
        <CardDescription className="text-gray-400">
          Choose a date, time slot, and turf type to secure your booking.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white mb-4 font-medium">1. Select Date</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-gray-900 rounded-md p-3"
              disabled={(date) => date < new Date()}
            />
          </div>
          <div>
            <h3 className="text-white mb-4 font-medium">2. Select Time Slot</h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot.id}
                  className={`p-2 rounded-md transition-all ${
                    slot.available 
                      ? selectedTime?.id === slot.id
                        ? 'bg-turf text-black'
                        : 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-900 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!slot.available}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-white mb-4 font-medium">3. Choose Turf Type</h3>
          <Tabs defaultValue="5-a-side" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              {turfTypes.map(turf => (
                <TabsTrigger 
                  key={turf.id}
                  value={turf.name}
                  onClick={() => setSelectedTurf(turf)}
                >
                  {turf.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {turfTypes.map(turf => (
              <TabsContent key={turf.id} value={turf.name} className="mt-0">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader className="pb-2">
                    <CardTitle>{turf.name}</CardTitle>
                    <CardDescription>{turf.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-turf">${turf.price}</p>
                    <p className="text-sm text-gray-400">per session</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleBooking} 
          className="w-full bg-turf hover:bg-turf/80 text-black"
          disabled={!date || !selectedTime}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingCalendar;
