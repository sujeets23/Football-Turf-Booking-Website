
import React, { useRef, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Soccer, MapPin, Phone, Mail } from 'lucide-react';
import * as THREE from 'three';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 1, 25);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x10b981, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create football
    const ballGeometry = new THREE.SphereGeometry(1, 32, 32);
    const ballMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.2
    });
    
    // Create football pattern with pentagons
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ball);
    
    // Add black pentagon patches to the ball
    const pentagonGeometry = new THREE.CircleGeometry(0.35, 5);
    const pentagonMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    
    // Add 12 pentagons at specific positions
    const pentagonPositions = [
      [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1],
      [0.7, 0.7, 0], [-0.7, 0.7, 0], [0.7, -0.7, 0], [-0.7, -0.7, 0],
      [0, 0.7, 0.7], [0, -0.7, 0.7]
    ];
    
    pentagonPositions.forEach(pos => {
      const pentagon = new THREE.Mesh(pentagonGeometry, pentagonMaterial);
      pentagon.position.set(pos[0], pos[1], pos[2]);
      pentagon.lookAt(0, 0, 0);
      pentagon.position.normalize().multiplyScalar(1.001); // Slightly outside the ball
      ball.add(pentagon);
    });
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      ball.rotation.x += 0.005;
      ball.rotation.y += 0.008;
      
      renderer.render(scene, camera);
    }
    
    // Handle resize
    function handleResize() {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    }
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block p-2 rounded-full bg-turf/10 mb-3">
                  <Soccer className="h-6 w-6 text-turf" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">About</span> TurfBooker
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                  We're revolutionizing how football enthusiasts book and experience playing fields. 
                  Our platform combines cutting-edge 3D visualization with a seamless booking system 
                  to provide the ultimate turf booking experience.
                </p>
                <p className="text-gray-400 mb-8">
                  Founded in 2023 by a team of football enthusiasts and tech innovators, 
                  TurfBooker aims to solve the common frustrations faced when booking sports facilities.
                </p>
                <Link to="/booking">
                  <Button className="bg-turf hover:bg-turf/80 text-black">
                    Book a Turf
                  </Button>
                </Link>
              </div>
              <div className="aspect-square w-full relative">
                <canvas ref={canvasRef} className="w-full h-full object-cover rounded-lg"/>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-3">Our <span className="text-gradient">Mission</span></h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              To provide football enthusiasts with the most immersive and convenient way to discover, 
              visualize, and book premium football turfs for their games.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="neo-blur border-gray-800">
                <div className="p-6">
                  <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Quality Assurance</h3>
                  <p className="text-gray-400">
                    We personally verify all turfs on our platform to ensure they meet our high standards for quality and maintenance.
                  </p>
                </div>
              </Card>
              
              <Card className="neo-blur border-gray-800">
                <div className="p-6">
                  <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Secure Booking</h3>
                  <p className="text-gray-400">
                    Our platform uses state-of-the-art security to protect your personal and payment information.
                  </p>
                </div>
              </Card>
              
              <Card className="neo-blur border-gray-800">
                <div className="p-6">
                  <div className="h-14 w-14 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-turf" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Instant Confirmation</h3>
                  <p className="text-gray-400">
                    Receive immediate booking confirmation and all the details you need for your game.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Our <span className="text-gradient">Team</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the passionate individuals behind TurfBooker who are dedicated to 
                revolutionizing the football turf booking experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Rodriguez",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  bio: "Former professional footballer with a passion for technology."
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  bio: "3D visualization expert with 10+ years in sports tech."
                },
                {
                  name: "Michael Chen",
                  role: "Head of Operations",
                  image: "https://randomuser.me/api/portraits/men/52.jpg",
                  bio: "Sports facility management specialist and business strategist."
                },
                {
                  name: "Emily Wilson",
                  role: "Customer Experience Lead",
                  image: "https://randomuser.me/api/portraits/women/65.jpg",
                  bio: "Dedicated to ensuring seamless booking experiences for users."
                }
              ].map((member, index) => (
                <div key={index} className="neo-blur rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-white text-lg">{member.name}</h3>
                    <p className="text-turf text-sm mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Get in <span className="text-gradient">Touch</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you. 
                Reach out to our team using any of the methods below.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="neo-blur border-gray-800">
                  <div className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-turf" />
                    </div>
                    <h3 className="font-medium text-white mb-2">Address</h3>
                    <p className="text-gray-400">
                      123 Sports Avenue<br />
                      Tech District<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </Card>
                
                <Card className="neo-blur border-gray-800">
                  <div className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-turf" />
                    </div>
                    <h3 className="font-medium text-white mb-2">Phone</h3>
                    <p className="text-gray-400">
                      +1 (123) 456-7890<br />
                      Monday - Sunday<br />
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </Card>
                
                <Card className="neo-blur border-gray-800">
                  <div className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-turf/20 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-turf" />
                    </div>
                    <h3 className="font-medium text-white mb-2">Email</h3>
                    <p className="text-gray-400">
                      info@turfbooker.com<br />
                      support@turfbooker.com<br />
                      partnerships@turfbooker.com
                    </p>
                  </div>
                </Card>
              </div>
              
              <div className="neo-blur rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-6 text-center">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-sm text-gray-400 mb-2 block">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <textarea 
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white min-h-[150px]"
                    placeholder="Type your message here..."
                  />
                </div>
                <Button className="w-full bg-turf hover:bg-turf/80 text-black">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
