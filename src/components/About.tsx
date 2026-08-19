import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
                alt="Inside Coffee Land Brooklyn — warm seating and barista counter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Small offset accent image */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-40 sm:w-52 aspect-square rounded-2xl overflow-hidden border-4 border-cream-50 shadow-lift hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=85"
                alt="Cappuccino with latte art at Coffee Land"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-px bg-caramel-500" />
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
                  Coffee Land · Brooklyn
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950 leading-[1.2]">
                Your neighborhood coffee stop on Grand Ave.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-espresso-600 leading-relaxed font-light">
              Coffee Land brings together coffee, breakfast and a relaxed café atmosphere in Brooklyn. Stop by for a morning coffee, breakfast, or a casual break during the day.
            </p>

            <div className="space-y-3 text-sm text-espresso-700">
              <div className="flex items-start space-x-3">
                <span className="w-1 h-1 rounded-full bg-caramel-500 mt-2 flex-shrink-0" />
                <span>Carefully extracted espresso, cappuccinos, lattes, and ceremonial matcha</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-1 h-1 rounded-full bg-caramel-500 mt-2 flex-shrink-0" />
                <span>Beloved avocado toast, morning egg sandwiches, and fresh pastries</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-1 h-1 rounded-full bg-caramel-500 mt-2 flex-shrink-0" />
                <span>Dine-in or quick takeout on Grand Ave, daily until 6 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-espresso-900 text-cream-50 hover:bg-espresso-800 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MapPin className="w-3.5 h-3.5 mr-2 text-caramel-400" />
                Find Us on Grand Ave
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 text-espresso-900 text-xs font-semibold uppercase tracking-wider transition-colors group hover:text-caramel-700"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
