import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100/60 border-t border-warm-border">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center space-y-5">

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-espresso-950 tracking-tight">
          See you at Coffee Land.
        </h2>

        <p className="text-base text-espresso-600 font-light">
          Good coffee is better when shared.
        </p>

        <p className="text-xs uppercase tracking-[0.2em] text-espresso-500 font-medium">
          450 Grand Ave · Brooklyn, NY
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={BUSINESS_INFO.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-espresso-900 text-cream-50 hover:bg-espresso-800 rounded-full text-xs font-semibold uppercase tracking-wider transition-all group"
          >
            <MapPin className="w-4 h-4 mr-2 text-caramel-400" />
            Get Directions
            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center px-7 py-3.5 border border-espresso-300 text-espresso-900 hover:border-espresso-900 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-caramel-600" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
