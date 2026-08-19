'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/lib/data';
import { GalleryItem } from '@/lib/types';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handlePrev = () => {
    if (!selectedItem) return;
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === selectedItem.id);
    setSelectedItem(GALLERY_ITEMS[(idx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === selectedItem.id);
    setSelectedItem(GALLERY_ITEMS[(idx + 1) % GALLERY_ITEMS.length]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-cream-50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-caramel-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
              Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950">
            A look inside Coffee Land.
          </h2>
        </div>

        {/* Bespoke masonry layout — hand-crafted grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, index) => {
            // Create visual rhythm with specific span patterns
            let spanClass = '';
            if (index === 0) spanClass = 'col-span-2 row-span-2';
            else if (index === 3) spanClass = 'col-span-2 row-span-1';
            else if (index === 5) spanClass = 'col-span-1 row-span-2';
            else spanClass = 'col-span-1 row-span-1';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${spanClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-espresso-950/0 group-hover:bg-espresso-950/40 transition-colors duration-300 flex items-end p-4">
                  <p className="font-serif text-sm text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
