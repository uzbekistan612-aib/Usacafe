'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Coffee, Utensils, CupSoda, Leaf, Cake, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '@/lib/data';

type CategoryType = 'all' | 'coffee' | 'breakfast' | 'cold-drinks' | 'tea' | 'bakery';

const CATEGORIES: { id: CategoryType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'coffee', label: 'Coffee', icon: Coffee },
  { id: 'breakfast', label: 'Breakfast', icon: Utensils },
  { id: 'cold-drinks', label: 'Cold Drinks', icon: CupSoda },
  { id: 'tea', label: 'Tea', icon: Leaf },
  { id: 'bakery', label: 'Bakery', icon: Cake },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-32 bg-cream-50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-caramel-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
              The Menu
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950">
            Something good is always brewing.
          </h2>
          <p className="text-sm sm:text-base text-espresso-600 font-light">
            Handcrafted coffee, fresh breakfast, and baked goods made daily at our Grand Ave café.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center overflow-x-auto pb-1 mb-10 gap-1.5 no-scrollbar -mx-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-espresso-900 text-cream-50'
                    : 'text-espresso-600 hover:text-espresso-900 hover:bg-cream-200/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured Item (first house favorite or first popular) — large editorial card */}
        {filteredItems.length > 0 && filteredItems[0] && (
          <div className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-cream-100/80 rounded-2xl overflow-hidden border border-warm-border">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={filteredItems[0].image}
                  alt={filteredItems[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {filteredItems[0].isHouseFavorite && (
                  <span className="absolute top-4 left-4 bg-caramel-500 text-espresso-950 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    House Favorite
                  </span>
                )}
                {filteredItems[0].isPopular && !filteredItems[0].isHouseFavorite && (
                  <span className="absolute top-4 left-4 bg-espresso-900 text-cream-50 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950">
                  {filteredItems[0].name}
                </h3>
                <p className="text-sm text-espresso-600 font-light leading-relaxed">
                  {filteredItems[0].description}
                </p>
                <span className="text-xs text-espresso-500 uppercase tracking-wider font-medium">
                  {filteredItems[0].priceNote}
                </span>
                {filteredItems[0].dietary && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {filteredItems[0].dietary.map((tag) => (
                      <span key={tag} className="text-[10px] text-espresso-600 bg-cream-50 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Remaining items — clean list layout, NOT identical cards */}
        <div className="space-y-0 divide-y divide-cream-200">
          {filteredItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="group py-6 sm:py-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-8"
            >
              {/* Thumbnail */}
              <div className="relative w-full sm:w-28 sm:h-28 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden bg-cream-200 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.isPopular && (
                  <span className="absolute top-2 left-2 bg-espresso-900 text-cream-50 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-espresso-950">
                    {item.name}
                  </h3>
                  <span className="text-xs text-espresso-500 whitespace-nowrap flex-shrink-0">
                    {item.priceNote}
                  </span>
                </div>
                <p className="text-sm text-espresso-600 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                {item.dietary && item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.dietary.map((tag) => (
                      <span key={tag} className="text-[10px] text-espresso-500 bg-cream-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 lg:mt-18 text-center space-y-4">
          <div className="editorial-divider" />
          <p className="text-sm text-espresso-600 font-light pt-6">
            All items prepared fresh. Prices <strong className="font-medium text-espresso-900">{BUSINESS_INFO.priceRange}</strong> per person. Ask our barista for today&apos;s specials.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-espresso-900 text-cream-50 hover:bg-espresso-800 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Visit the Café
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-caramel-400" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center px-6 py-3 text-espresso-700 hover:text-espresso-950 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Call for Specials
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
