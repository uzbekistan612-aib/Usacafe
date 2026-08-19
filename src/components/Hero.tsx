'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-end bg-espresso-950 overflow-hidden"
    >
      {/* Full-bleed cinematic background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80"
          alt="Warm, inviting interior of Coffee Land Brooklyn café"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic gradient overlay — dark at bottom for text, transparent at top for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/40 to-transparent" />
      </div>

      {/* Content positioned at the bottom like an editorial film frame */}
      <div className="relative z-10 w-full pb-12 sm:pb-16 lg:pb-20 pt-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl space-y-6">

            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-px bg-caramel-400" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-caramel-300">
                Brooklyn · New York
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[5.5rem] font-medium text-cream-50 leading-[1.08] tracking-tight">
              Good Coffee.<br />
              <span className="italic font-light font-display text-caramel-300">Good Food.</span><br />
              Good Mornings.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-cream-200/80 max-w-lg leading-relaxed font-light">
              {BUSINESS_INFO.shortDescription}
            </p>

            {/* Trust line — minimal, factual */}
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-cream-200/70">
              <div className="flex items-center space-x-1.5">
                <Star className="w-3.5 h-3.5 fill-caramel-400 text-caramel-400" />
                <span className="text-cream-50 font-semibold">{BUSINESS_INFO.rating}</span>
                <span>({BUSINESS_INFO.reviewCount} reviews)</span>
              </div>
              <span className="w-px h-3.5 bg-cream-200/30" />
              <span>{BUSINESS_INFO.priceRange} per person</span>
              <span className="w-px h-3.5 bg-cream-200/30 hidden sm:block" />
              <span className="hidden sm:flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-caramel-400" />
                450 Grand Ave
              </span>
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider bg-caramel-500 text-espresso-950 hover:bg-caramel-400 rounded-full transition-all duration-200 group"
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-cream-50 border border-cream-200/30 hover:border-cream-50 hover:bg-cream-50/10 rounded-full transition-all duration-200"
              >
                View Menu
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Floating info card — desktop only */}
      <div className="hidden lg:flex absolute bottom-20 right-10 z-10 bg-cream-50/95 backdrop-blur-sm p-5 rounded-2xl shadow-lift max-w-[260px] items-center space-x-4 border border-warm-border">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=300&q=85"
            alt="Avocado Toast at Coffee Land"
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <span className="text-[9px] uppercase tracking-wider font-bold text-caramel-700 bg-caramel-100 px-1.5 py-0.5 rounded">
            Popular
          </span>
          <p className="font-serif text-sm font-bold text-espresso-950 mt-0.5 leading-tight">
            Avocado Toast
          </p>
          <p className="text-[11px] text-espresso-500">House favorite · Fresh daily</p>
        </div>
      </div>
    </section>
  );
}
