import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../types';
import ServiceCard from '../components/ServiceCard';
import { cn } from '../lib/utils';

const categories = ['All', 'Facials', 'Massages', 'Nails', 'Waxing'];

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
          <p className="text-brand-500 font-medium italic bg-brand-100/50 py-2 px-4 rounded-full inline-block text-sm">
            Note: Pricing depends on your selected treatments, location, and group size. Book with our specialist for a custom quote.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Request Section */}
        <div className="bg-brand-100 rounded-3xl p-12 text-center space-y-6 mt-20">
          <h3 className="text-3xl font-serif font-bold">Don't see what you're looking for?</h3>
          <p className="text-brand-700 max-w-2xl mx-auto">
            We offer customized packages for groups, events, and special occasions. Contact us to discuss your specific needs.
          </p>
          <button className="bg-brand-900 text-brand-50 px-10 py-4 rounded-full font-bold hover:bg-brand-800 transition-all">
            Inquire About Custom Packages
          </button>
        </div>
      </div>
    </div>
  );
}
