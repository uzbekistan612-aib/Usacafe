import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, QUICK_NAV_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-200 pt-16 lg:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-espresso-800/60">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-xl font-bold tracking-[0.18em] text-cream-50 uppercase block">
              Coffee Land
            </span>
            <p className="text-sm text-cream-200/60 font-light max-w-xs leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <Star className="w-3.5 h-3.5 fill-caramel-400 text-caramel-400" />
              <span className="text-cream-50 font-medium">{BUSINESS_INFO.rating}</span>
              <span className="text-cream-200/50">· {BUSINESS_INFO.reviewCount} reviews</span>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-caramel-400 font-bold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {QUICK_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-caramel-400 font-bold mb-4">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-caramel-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream-50 font-medium">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-caramel-400 hover:text-caramel-300 mt-0.5 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-caramel-400 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-cream-50 font-medium hover:text-caramel-300 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <p className="text-xs text-cream-200/50">{BUSINESS_INFO.status}</p>
              <div className="flex gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-espresso-900 border border-espresso-800 rounded text-cream-200/70">
                  Dine-In
                </span>
                <span className="px-2.5 py-1 bg-espresso-900 border border-espresso-800 rounded text-cream-200/70">
                  Takeout
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/40">
          <p>© {new Date().getFullYear()} Coffee Land · 450 Grand Ave, Brooklyn, NY 11238</p>
          <a
            href="#hero"
            className="inline-flex items-center text-cream-200/50 hover:text-cream-50 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3 ml-1" />
          </a>
        </div>

      </div>
    </footer>
  );
}
