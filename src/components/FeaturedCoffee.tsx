'use client';

import React from 'react';
import Image from 'next/image';
import { FEATURED_COFFEES } from '@/lib/data';

export default function FeaturedCoffee() {
  const hero = FEATURED_COFFEES[0];
  const supporting = FEATURED_COFFEES.slice(1, 4);
  const remaining = FEATURED_COFFEES.slice(4);

  return (
    <section id="featured" className="py-20 lg:py-32 bg-cream-100/50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-14 lg:mb-20">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-caramel-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
              Coffee & Specialty
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950">
            Crafted drinks for every morning.
          </h2>
        </div>

        {/* Asymmetric Grid: Large hero + 3 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-6">
          
          {/* Large feature */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group bg-cream-200 aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={hero.image}
              alt={hero.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-cream-50">
              <span className="text-[10px] uppercase tracking-widest text-caramel-300 font-medium">
                {hero.temp} · {hero.accent}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1">
                {hero.name}
              </h3>
              <p className="text-sm text-cream-200/80 font-light mt-1 max-w-md">
                {hero.roastNotes}
              </p>
            </div>
          </div>

          {/* 3 supporting items stacked */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5 lg:gap-6">
            {supporting.map((item) => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden group bg-cream-200 aspect-[16/7] lg:aspect-auto lg:flex-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-medium">
                      {item.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-caramel-300 bg-espresso-900/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.temp}
                    </span>
                  </div>
                  <p className="text-xs text-cream-200/70 font-light mt-0.5">{item.roastNotes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — remaining items as compact editorial pills */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {remaining.map((item) => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden group bg-cream-200 aspect-[16/7]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-medium">{item.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-caramel-300 bg-espresso-900/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.temp}
                    </span>
                  </div>
                  <p className="text-xs text-cream-200/70 font-light mt-0.5">{item.roastNotes}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
