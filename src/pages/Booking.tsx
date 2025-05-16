
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';
import FootballField from '@/components/3D/FootballField';
import { Volleyball } from 'lucide-react';

const Booking = () => {
  const [showFootballField, setShowFootballField] = useState(false);
  
  useEffect(() => {
    // Delay loading the 3D component to prevent initial render issues
    const timer = setTimeout(() => {
      try {
        setShowFootballField(true);
      } catch (e) {
        console.error("Could not load 3D component:", e);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFootballField && 
        <div className="football-field-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.7 }}>
          <ErrorBoundary>
            <FootballField />
          </ErrorBoundary>
        </div>
      }
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block p-2 rounded-full bg-turf/10 mb-3">
                <Volleyball className="h-6 w-6 text-turf" />
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

// Simple error boundary component to catch errors in the 3D component
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("3D component error:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return null; // Return nothing if there's an error
    }
    
    return this.props.children;
  }
}

export default Booking;
