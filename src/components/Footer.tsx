import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/QMbNb9w8/Chat-GPT-Image-Apr-2-2026-12-52-31-PM.png" 
              alt="PMP Logo" 
              className="w-20 h-20 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-brand-300 leading-relaxed">
            Premium mobile beauty and wellness services delivered to your doorstep. Experience luxury in the comfort of your home.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/profile.php?id=61574346029974" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-brand-300">
            <li><Link to="/" className="hover:text-brand-50 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-50 transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-50 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-50 transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-brand-300">
            <li>Facials & Skincare</li>
            <li>Massage Therapy</li>
            <li>Nail Care & Extensions</li>
            <li>Professional Waxing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-brand-300">
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+27 69 451 3581</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>hello@pampermeprivate.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Mobile Service - We come to you!</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-800 text-center text-brand-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Pamper me Private (PMP). All rights reserved.</p>
      </div>
    </footer>
  );
}
