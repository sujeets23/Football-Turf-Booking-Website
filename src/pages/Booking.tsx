
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';
import FootballField from '@/components/3D/FootballField';
import { BadmintonBird } from 'lucide-react';

const Booking = () => {
  return (
    <>
      <FootballField />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block p-2 rounded-full bg-turf/10 mb-3">
                <BadmintonBird className="h-6 w-6 text-turf" />
              </div>
              <h1 className="text-4xl font-bold mb-3">
                <span className="text-gradient">Book</span> Your Turf
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select your preferred date, time slot, and turf type to make a booking. 
                Our seamless process ensures you can secure your spot in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <BookingCalendar />
              </div>
              <div>
                <div className="neo-blur rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-medium text-white mb-4">Booking Information</h2>
                  <div className="space-y-4 text-sm">
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Cancellation Policy</span>
                      Free cancellation up to 24 hours before your booking. 
                      Cancellations within 24 hours incur a 50% fee.
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Payment</span>
                      Payment is processed at the time of booking. 
                      We accept all major credit cards and digital wallets.
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Arrival</span>
                      Please arrive 15 minutes before your booking time. 
                      Your booking code will be sent via email.
                    </p>
                  </div>
                </div>

                <div className="neo-blur rounded-lg p-6">
                  <h2 className="text-xl font-medium text-white mb-4">Need Help?</h2>
                  <div className="space-y-4 text-sm">
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Support Line</span>
                      +1 (123) 456-7890
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Email</span>
                      support@turfbooker.com
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400 block mb-1">Hours</span>
                      Monday - Sunday: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
