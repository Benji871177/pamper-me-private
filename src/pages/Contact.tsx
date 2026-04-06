import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { services } from '../types';

const areas = [
  "Morningside",
  "Bryanston",
  "Rosebank",
  "Houghton Estate",
  "Atholl",
  "Rivonia",
  "Inanda",
  "Dainfern",
  "Fourways",
  "Lonehill",
  "Woodmead",
  "Lynewood",
  "Killarney",
  "Sandown",
  "Illovo",
  "Other"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappNumber = "27694513581";
    const text = `*New Booking Request - PMP*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Area:* ${formData.area}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif font-bold">Book with our Specialist</h1>
              <p className="text-brand-700 text-lg leading-relaxed">
                Ready to experience luxury at home? Fill out the form below with your details and location. We'll provide a personalized booking confirmation within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-brand-100 flex-shrink-0">
                  <Phone className="text-brand-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Call or Text</h3>
                  <p className="text-brand-600">+27 69 451 3581</p>
                  <p className="text-brand-400 text-sm">Mon - Sun, 8am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-brand-100 flex-shrink-0">
                  <Mail className="text-brand-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Email Us</h3>
                  <p className="text-brand-600">hello@pampermeprivate.co.za</p>
                  <p className="text-brand-400 text-sm">General inquiries & partnerships</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-brand-100 flex-shrink-0">
                  <MapPin className="text-brand-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Service Area</h3>
                  <p className="text-brand-600">Sandton & Surrounding Wealthy Suburbs</p>
                  <p className="text-brand-400 text-sm">We bring the spa to your location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-100 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-serif font-bold">Booking Request Sent!</h2>
                <p className="text-brand-600 max-w-sm">
                  Thank you for your interest. Your request has been sent via WhatsApp. Our team will provide a detailed confirmation shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      area: '',
                      service: '',
                      message: ''
                    });
                  }}
                  className="text-brand-900 font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-900 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-900 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-900 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 (00) 000-0000"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-900 ml-1">Area / Suburb</label>
                    <div className="relative">
                      <select 
                        required
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all appearance-none pr-12"
                      >
                        <option value="" disabled>Select your area</option>
                        {areas.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-900 ml-1">Service Interested In</label>
                  <div className="relative">
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all appearance-none pr-12"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                      <option value="Custom Package">Custom / Multiple Services</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-900 ml-1">Message / Special Requests</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferred date, time, and any specific needs..."
                    className="w-full px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all resize-none"
                  ></textarea>
                </div>

                <p className="text-xs text-brand-500 italic text-center">
                  * A 30% deposit is required to secure your appointment.
                </p>

                <button
                  type="submit"
                  className="w-full bg-brand-900 text-brand-50 py-5 rounded-2xl font-bold text-lg hover:bg-brand-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send Request <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
