'use client';

import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, XCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-32 bg-cream-50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-caramel-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
              Visit Us
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950">
            Find us in Brooklyn.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Info Card */}
          <div className="lg:col-span-5 space-y-8">

            {/* Address */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-caramel-700 font-bold">
                Address
              </p>
              <p className="font-serif text-xl font-medium text-espresso-950">
                {BUSINESS_INFO.street}
              </p>
              <p className="text-sm text-espresso-600">
                {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </p>
            </div>

            <div className="editorial-divider" />

            {/* Hours */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-caramel-700 font-bold">
                Hours
              </p>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-espresso-900" />
                <span className="font-serif text-lg font-medium text-espresso-950">
                  {BUSINESS_INFO.status}
                </span>
              </div>
            </div>

            <div className="editorial-divider" />

            {/* Phone */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-caramel-700 font-bold">
                Phone
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="font-serif text-lg font-medium text-espresso-950 hover:text-caramel-600 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="editorial-divider" />

            {/* Services */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-caramel-700 font-bold">
                Services
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 bg-cream-100 text-espresso-800 rounded-full border border-warm-border font-medium">
                  Dine-In
                </span>
                <span className="px-3 py-1.5 bg-cream-100 text-espresso-800 rounded-full border border-warm-border font-medium">
                  Takeout
                </span>
                <span className="px-3 py-1.5 bg-cream-100/50 text-espresso-400 rounded-full border border-cream-200 font-medium flex items-center">
                  <XCircle className="w-3 h-3 mr-1" />
                  No Delivery
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={BUSINESS_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-espresso-900 text-cream-50 hover:bg-espresso-800 rounded-full text-xs font-semibold uppercase tracking-wider transition-all group"
              >
                <MapPin className="w-3.5 h-3.5 mr-2 text-caramel-400" />
                Get Directions
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 border border-espresso-300 text-espresso-900 hover:border-espresso-900 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-caramel-600" />
                Call Café
              </a>
            </div>

          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-warm-border min-h-[400px] lg:min-h-0">
            <iframe
              title="Coffee Land Location Map"
              src="https://maps.google.com/maps?q=450+Grand+Ave,+Brooklyn,+NY+11238&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
