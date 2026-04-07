import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../types';
import ServiceCard from '../components/ServiceCard';
import NailPricing from '../components/NailPricing';
import { cn } from '../lib/utils';

const categories = ['All', 'Massages', 'Nails', 'Waxing'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Services</h1>
          <p className="text-brand-600 text-lg leading-relaxed">
            Explore our curated selection of premium mobile spa and beauty treatments. Each service is performed by certified professionals using high-quality products.
          </p>
          <p className="text-brand-500 font-medium italic bg-brand-100/50 py-2 px-6 rounded-full inline-block text-sm border border-brand-200">
            ✨ A 30% deposit is required to secure your appointment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border",
                activeCategory === category
                  ? "bg-brand-900 text-brand-50 border-brand-900 shadow-lg"
                  : "bg-white text-brand-600 border-brand-200 hover:border-brand-400"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {activeCategory === 'Nails' && (
            <NailPricing />
          )}
          
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            activeCategory === 'Nails' && "hidden"
          )}>
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="bg-white border border-brand-100 rounded-3xl p-10 md:p-16 space-y-10 mt-20 shadow-sm">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-serif font-bold">Terms & Conditions</h3>
            <p className="text-brand-600">Important information regarding your booking</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">🤲🏾</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-brand-900">Booking Information</p>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    Please contact Gia @ +2769 451 3581 for more information concerning bookings and appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">🤲🏾</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-brand-900">Deposit Policy</p>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    A 30% deposit is requested to secure your appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">🤲🏾</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-brand-900">Cancellation Policy</p>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    Cancellation or Rebooking must be made 48 to 24 hours prior to the appointment date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">🤲🏾</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-brand-900">Other Services</p>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    Other services are available, please feel free to inquire.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-brand-50">
            <p className="text-brand-900 font-serif italic text-lg">Looking forward to being part of your tension release 🫂</p>
          </div>
        </div>
      </div>
    </div>
  );
}
