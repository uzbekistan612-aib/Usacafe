'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function MobileQuickBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-fade-in">
      <div className="bg-espresso-950/95 backdrop-blur-md p-2.5 rounded-2xl border border-espresso-800 shadow-2xl flex items-center gap-2">
        <a
          href={BUSINESS_INFO.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center py-2.5 px-3 bg-caramel-500 hover:bg-caramel-400 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 mr-1.5" />
          Directions
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 inline-flex items-center justify-center py-2.5 px-3 bg-espresso-900 hover:bg-espresso-800 text-cream-50 text-xs font-bold uppercase tracking-wider rounded-xl border border-espresso-700 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 mr-1.5 text-caramel-400" />
          Call Café
        </a>
      </div>
    </div>
  );
}
