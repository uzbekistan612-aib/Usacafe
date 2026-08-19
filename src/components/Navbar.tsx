'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, QUICK_NAV_LINKS } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-warm-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#hero"
            className="group flex items-baseline space-x-2 focus-visible:outline-none"
            aria-label="Coffee Land Home"
          >
            <span className={`font-serif text-lg sm:text-xl font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-espresso-950' : 'text-cream-50'
            }`}>
              Coffee Land
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {QUICK_NAV_LINKS.filter(l => l.name !== 'Home').map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-[13px] font-medium tracking-wide rounded-full transition-colors duration-200 ${
                  isScrolled
                    ? 'text-espresso-700 hover:text-espresso-950 hover:bg-cream-200/60'
                    : 'text-cream-100/80 hover:text-cream-50 hover:bg-cream-50/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={BUSINESS_INFO.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-5 py-2 text-[12px] font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'bg-espresso-900 text-cream-50 hover:bg-espresso-800'
                  : 'bg-cream-50/15 backdrop-blur-sm text-cream-50 border border-cream-50/30 hover:bg-cream-50/25'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 mr-1.5 ${isScrolled ? 'text-caramel-400' : 'text-caramel-300'}`} />
              Directions
            </a>
          </div>

          {/* Mobile Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-espresso-900' : 'text-cream-50'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-0 bg-cream-50 z-50 flex flex-col transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream-200">
          <span className="font-serif text-lg font-bold tracking-[0.18em] text-espresso-950 uppercase">
            Coffee Land
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-espresso-900"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <div className="space-y-1">
            {QUICK_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3.5 font-serif text-2xl text-espresso-950 border-b border-cream-200/60 transition-colors hover:text-caramel-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="p-5 border-t border-cream-200 space-y-3">
          <p className="text-xs text-espresso-600">
            {BUSINESS_INFO.address}
          </p>
          <div className="flex gap-2">
            <a
              href={BUSINESS_INFO.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center py-3 bg-espresso-900 text-cream-50 text-xs uppercase tracking-wider font-semibold rounded-xl"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-caramel-400" />
              Directions
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex-1 inline-flex items-center justify-center py-3 bg-cream-100 text-espresso-900 border border-espresso-200 text-xs uppercase tracking-wider font-semibold rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-caramel-600" />
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
