'use client';

import React, { useRef } from 'react';
import { Star, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS_LIST, BUSINESS_INFO } from '@/lib/data';

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-cream-100/50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-px bg-caramel-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
                What People Say
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950">
              Loved by our neighbors.
            </h2>
          </div>

          {/* Rating summary */}
          <div className="flex items-center space-x-5">
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1.5">
                <span className="font-serif text-4xl font-medium text-espresso-950">
                  {BUSINESS_INFO.rating}
                </span>
                <div className="flex text-caramel-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(BUSINESS_INFO.rating) ? 'fill-caramel-500' : 'fill-cream-300 text-cream-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-espresso-500 uppercase tracking-wider mt-0.5">
                {BUSINESS_INFO.reviewCount} Google Reviews
              </p>
            </div>

            {/* Scroll controls — desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous reviews"
                className="w-10 h-10 rounded-full border border-espresso-200 flex items-center justify-center text-espresso-700 hover:bg-espresso-900 hover:text-cream-50 hover:border-espresso-900 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next reviews"
                className="w-10 h-10 rounded-full border border-espresso-200 flex items-center justify-center text-espresso-700 hover:bg-espresso-900 hover:text-cream-50 hover:border-espresso-900 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scrolling review cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
        >
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="flex-shrink-0 w-[300px] sm:w-[340px] bg-cream-50 rounded-2xl p-6 border border-warm-border snap-start flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-caramel-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-caramel-500" />
                  ))}
                </div>
                {rev.highlight && (
                  <p className="font-serif text-base font-medium text-espresso-950 leading-snug">
                    &ldquo;{rev.highlight}&rdquo;
                  </p>
                )}
                <p className="text-sm text-espresso-600 font-light leading-relaxed">
                  {rev.text}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-cream-200/80 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-caramel-100 text-caramel-800 font-serif font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-espresso-950">{rev.author}</p>
                    <p className="text-[10px] text-espresso-400">{rev.relativeTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="mt-8 text-center">
          <a
            href={BUSINESS_INFO.googleMapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-espresso-700 hover:text-caramel-600 transition-colors group"
          >
            See all reviews on Google
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
