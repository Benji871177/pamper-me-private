import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const manicureData = [
  { service: 'Express Manicure', duration: '30 min', buff: 'R350', polish: 'R360', gel: 'R470', french: 'R490' },
  { service: 'Classic Manicure', duration: '60 min', buff: 'R410', polish: 'R420', gel: 'R530', french: 'R560' },
  { service: 'Signature Manicure', duration: '60 min', buff: 'R530', polish: 'R540', gel: 'R650', french: 'R670' },
  { service: 'Soft Gel Tips', duration: '75 min', buff: '-', polish: 'R440', gel: 'R660', french: 'R690' },
];

const pedicureData = [
  { service: 'Express Pedicure', duration: '30 min', buff: 'R380', polish: 'R390', gel: 'R500', french: 'R520' },
  { service: 'Classic Pedicure', duration: '60 min', buff: 'R440', polish: 'R450', gel: 'R560', french: 'R580' },
  { service: 'Signature Pedicure', duration: '60 min', buff: 'R580', polish: 'R590', gel: 'R700', french: 'R720' },
  { service: 'MediHeel Pedicure', duration: '60 min', buff: 'R650', polish: 'R660', gel: 'R770', french: 'R790' },
  { service: 'Lucky Legs Maternity Pedicure', duration: '60 min', buff: 'R540', polish: 'R550', gel: 'R660', french: 'R680' },
];

export default function NailPricing() {
  return (
    <div className="space-y-16">
      {/* Manicure Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-100 shadow-sm bg-white"
      >
        <div className="bg-brand-900 text-brand-50 p-6">
          <h3 className="text-2xl font-serif font-bold tracking-wider uppercase">Manicure</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-50 text-brand-900 border-b border-brand-100">
                <th className="p-6 font-bold uppercase text-xs tracking-widest">Service</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Buff & Shine</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Polish</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Gel</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">French</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-50">
              {manicureData.map((row, i) => (
                <tr key={i} className="hover:bg-brand-50/30 transition-colors">
                  <td className="p-6">
                    <Link to="/contact" className="group/link">
                      <p className="font-bold text-brand-900 group-hover/link:text-brand-600 transition-colors">{row.service}</p>
                      <p className="text-xs text-brand-400">({row.duration})</p>
                    </Link>
                  </td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.buff}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.polish}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.gel}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.french}</td>
                  <td className="p-6 text-center">
                    <Link
                      to={`/contact?service=${encodeURIComponent(row.service)}`}
                      className="inline-flex items-center justify-center gap-2 bg-brand-50 text-brand-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-900 hover:text-brand-50 transition-all group"
                    >
                      Book
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Pedicure Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-100 shadow-sm bg-white"
      >
        <div className="bg-brand-900 text-brand-50 p-6">
          <h3 className="text-2xl font-serif font-bold tracking-wider uppercase">Pedicure</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-50 text-brand-900 border-b border-brand-100">
                <th className="p-6 font-bold uppercase text-xs tracking-widest">Service</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Buff & Shine</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Polish</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Gel</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">French</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-50">
              {pedicureData.map((row, i) => (
                <tr key={i} className="hover:bg-brand-50/30 transition-colors">
                  <td className="p-6">
                    <Link to="/contact" className="group/link">
                      <p className="font-bold text-brand-900 group-hover/link:text-brand-600 transition-colors">{row.service}</p>
                      <p className="text-xs text-brand-400">({row.duration})</p>
                    </Link>
                  </td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.buff}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.polish}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.gel}</td>
                  <td className="p-6 text-center text-brand-600 font-medium">{row.french}</td>
                  <td className="p-6 text-center">
                    <Link
                      to={`/contact?service=${encodeURIComponent(row.service)}`}
                      className="inline-flex items-center justify-center gap-2 bg-brand-50 text-brand-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-900 hover:text-brand-50 transition-all group"
                    >
                      Book
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
