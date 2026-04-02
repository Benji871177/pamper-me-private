import React from 'react';
import { motion } from 'motion/react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-100 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900">
          {service.category}
        </div>
      </div>
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-xl font-bold leading-tight">{service.name}</h3>
        </div>
        <p className="text-brand-600 text-sm leading-relaxed line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center gap-4 pt-2 border-t border-brand-50">
          <div className="flex items-center gap-1.5 text-xs text-brand-500">
            <Clock size={14} />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-brand-500">
            <Tag size={14} />
            <span>Mobile Service</span>
          </div>
        </div>
        <div className="pt-4 mt-auto">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-50 text-brand-900 py-3 rounded-xl text-sm font-bold hover:bg-brand-900 hover:text-brand-50 transition-all group/btn"
          >
            Book with our Specialist
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
