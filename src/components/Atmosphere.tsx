import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function Atmosphere() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
          alt="Warm café atmosphere at Coffee Land Brooklyn"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso-950/65" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-cream-50 tracking-tight leading-[1.1]">
          Coffee, breakfast, and a little time for yourself.
        </h2>
        <p className="text-base sm:text-lg text-cream-200/80 font-light max-w-xl mx-auto">
          Drop in for your morning coffee, meet someone for breakfast, or slow down for a while.
        </p>
        <div className="pt-4">
          <a
            href={BUSINESS_INFO.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-caramel-500 hover:bg-caramel-400 text-espresso-950 font-semibold uppercase tracking-wider text-xs rounded-full transition-all group"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Visit Coffee Land
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
