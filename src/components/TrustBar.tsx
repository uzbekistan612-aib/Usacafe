import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function TrustBar() {
  return (
    <section className="bg-cream-50 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="editorial-divider mb-10" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Rating */}
          <div>
            <div className="flex items-center space-x-1.5 mb-1">
              <Star className="w-4 h-4 fill-caramel-500 text-caramel-500" />
              <span className="font-serif text-3xl lg:text-4xl font-medium text-espresso-950">
                {BUSINESS_INFO.rating}
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-espresso-500 font-medium">
              {BUSINESS_INFO.reviewCount} Google Reviews
            </p>
          </div>

          {/* Price */}
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-medium text-espresso-950 mb-1">
              {BUSINESS_INFO.priceRange}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-espresso-500 font-medium">
              Per Person
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-medium text-espresso-950 mb-1">
              Dine-In
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-espresso-500 font-medium">
              & Takeout Available
            </p>
          </div>

          {/* Status */}
          <div>
            <p className="font-serif text-2xl lg:text-3xl font-medium text-espresso-950 mb-1">
              Open Now
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-espresso-500 font-medium">
              Closes at 6:00 PM
            </p>
          </div>
        </div>

        <div className="editorial-divider mt-10" />
      </div>
    </section>
  );
}
