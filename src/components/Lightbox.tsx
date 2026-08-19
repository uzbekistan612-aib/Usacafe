'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '@/lib/types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-espresso-900/80 hover:bg-espresso-800 text-cream-50 rounded-full transition-colors z-20 border border-espresso-700"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-espresso-900/80 hover:bg-espresso-800 text-cream-50 rounded-full transition-colors z-20 border border-espresso-700 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Image"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-espresso-900/80 hover:bg-espresso-800 text-cream-50 rounded-full transition-colors z-20 border border-espresso-700 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Box */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-espresso-900">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-cream-50 space-y-1 max-w-xl">
          <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-caramel-400 font-semibold">
            <span>{item.category}</span>
            <span>·</span>
            <span>Coffee Land</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-cream-200/80 font-light">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
