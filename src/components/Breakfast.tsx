import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Breakfast() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Copy — left on desktop */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-px bg-caramel-500" />
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-caramel-600">
                  Breakfast · Daily
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-espresso-950 leading-[1.2]">
                Start your morning at Coffee Land.
              </h2>
            </div>

            <p className="text-base text-espresso-600 font-light leading-relaxed">
              Fresh breakfast made to order every morning. Our avocado toast on thick-cut artisanal sourdough is a neighborhood favorite — seasoned with sea salt, red pepper, and microgreens.
            </p>

            <div className="bg-cream-100/80 rounded-xl p-5 border border-warm-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-medium text-espresso-950">
                  Avocado Toast
                </h3>
                <span className="text-[10px] uppercase tracking-widest font-bold text-caramel-700 bg-caramel-100 px-2.5 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <p className="text-sm text-espresso-600 font-light leading-relaxed">
                Rustic toasted sourdough topped with ripe avocado, microgreens, flaky sea salt, and a touch of red pepper spice.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-espresso-900 hover:text-caramel-700 transition-colors group"
            >
              <span>View full breakfast menu</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image — right on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200">
              <Image
                src="https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1000&q=85"
                alt="Artisanal avocado toast on sourdough at Coffee Land Brooklyn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
