import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import FeaturedCoffee from '@/components/FeaturedCoffee';
import Breakfast from '@/components/Breakfast';
import Menu from '@/components/Menu';
import Atmosphere from '@/components/Atmosphere';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileQuickBar from '@/components/MobileQuickBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-espresso-900 selection:bg-caramel-200 selection:text-espresso-950">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <TrustBar />
        <About />
        <FeaturedCoffee />
        <Breakfast />
        <Menu />
        <Atmosphere />
        <Gallery />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>

      {/* Deep Espresso Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
