import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Home as HomeIcon, Clock, ShieldCheck, ArrowRight, Star, Send, User, LogIn, X } from 'lucide-react';
import { services } from '../types';
import ServiceCard from '../components/ServiceCard';
import { cn } from '../lib/utils';
import { db, auth } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';

const features = [
  {
    icon: <HomeIcon className="text-brand-600" size={24} />,
    title: "At Your Doorstep",
    description: "Experience luxury spa and salon services in the comfort and privacy of your own home."
  },
  {
    icon: <Clock className="text-brand-600" size={24} />,
    title: "Flexible Scheduling",
    description: "Book appointments that fit your busy lifestyle, including evenings and weekends."
  },
  {
    icon: <ShieldCheck className="text-brand-600" size={24} />,
    title: "Certified Professionals",
    description: "Our therapists and technicians are highly trained, certified, and background-checked."
  }
];

interface Review {
  id: string;
  uid?: string;
  name: string;
  avatar?: string;
  content: string;
  rating: number;
  createdAt: Timestamp;
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', content: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribeReviews = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(reviewsData);
    }, (error) => {
      console.error("Error fetching reviews:", error);
    });

    return () => {
      unsubscribeReviews();
    };
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.content.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        name: newReview.name,
        content: newReview.content,
        rating: newReview.rating,
        createdAt: serverTimestamp()
      });
      setNewReview({ name: '', content: '', rating: 5 });
      setShowReviewForm(false);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920"
            alt="Spa background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-brand-50 to-brand-50" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-start gap-8">
              <motion.img 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                src="https://i.postimg.cc/QMbNb9w8/Chat-GPT-Image-Apr-2-2026-12-52-31-PM.png" 
                alt="PMP Logo" 
                className="w-24 h-24 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-200 rounded-full text-brand-900 text-sm font-bold tracking-wide uppercase">
                <Sparkles size={16} />
                <span>Premium Mobile Wellness</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-[1.1] text-brand-900">
              Luxury Spa <br />
              <span className="text-brand-500 italic">At Your Doorstep</span>
            </h1>
            <p className="text-xl text-brand-700 leading-relaxed max-w-lg">
              Pamper me Private brings professional beauty and wellness services directly to you. From soothing massages to expert nail care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-900 text-brand-50 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Book Your Session
              </Link>
              <Link
                to="/services"
                className="bg-white text-brand-900 border border-brand-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-100 transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
                alt="Massage therapy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-300 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Why Choose PMP?</h2>
            <p className="text-brand-600 max-w-2xl mx-auto">
              We redefine luxury by bringing the spa experience to you, ensuring maximum comfort and professional quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-brand-50 border border-brand-100 space-y-6 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{feature.title}</h3>
                <p className="text-brand-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Signature Services</h2>
              <p className="text-brand-600 max-w-xl">
                From head to toe, we offer a comprehensive range of treatments designed to rejuvenate your mind and body.
              </p>
              <p className="text-sm font-medium text-brand-500 italic">
                * A 30% deposit is required to secure your appointment. Pricing depends on treatments, location, and group size.
              </p>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-brand-900 font-bold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-brand-900 text-brand-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">What Our Clients Say</h2>
              <div className="flex justify-center md:justify-start gap-1 text-brand-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
            </div>
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-brand-50 text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-brand-200 transition-all flex items-center gap-2"
            >
              Leave a Review <Sparkles size={18} />
            </button>
          </div>

          <AnimatePresence>
            {showReviewForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-16 overflow-hidden"
              >
                <div className="bg-brand-800/50 backdrop-blur-md p-8 rounded-[2rem] border border-brand-700 relative">
                  <button 
                    onClick={() => setShowReviewForm(false)}
                    className="absolute top-6 right-6 text-brand-400 hover:text-brand-50"
                  >
                    <X size={24} />
                  </button>
                  <form onSubmit={handleSubmitReview} className="space-y-6 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-center">Share Your Experience</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-200 ml-1">Your Name</label>
                        <input
                          required
                          type="text"
                          value={newReview.name}
                          onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Jane Doe"
                          className="w-full px-6 py-4 rounded-2xl bg-brand-900/50 border border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all text-brand-50"
                        />
                      </div>

                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                            className={cn(
                              "transition-all hover:scale-110",
                              newReview.rating >= star ? "text-brand-400" : "text-brand-700"
                            )}
                          >
                            <Star size={32} fill={newReview.rating >= star ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-200 ml-1">Your Review</label>
                        <textarea
                          required
                          rows={4}
                          value={newReview.content}
                          onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                          placeholder="How was your experience with Pamper me Private?"
                          className="w-full px-6 py-4 rounded-2xl bg-brand-900/50 border border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-all resize-none text-brand-50"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-50 text-brand-900 py-4 rounded-2xl font-bold text-lg hover:bg-brand-200 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Post Review"} <Send size={20} />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-800/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-700 space-y-6 flex flex-col"
                >
                  <div className="flex gap-1 text-brand-400">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-brand-200 leading-relaxed flex-grow">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-brand-700">
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-brand-400">
                        <User size={24} />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-xs text-brand-400">
                        {review.createdAt?.toDate().toLocaleDateString() || 'Just now'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-brand-400 italic">
                No reviews yet. Be the first to share your experience!
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-200 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-900 leading-tight">
              Ready for Your <br />
              <span className="italic">Private Pampering?</span>
            </h2>
            <p className="text-xl text-brand-700 max-w-2xl mx-auto">
              Book your appointment today and let us bring the ultimate spa experience to your home.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand-900 text-brand-50 px-12 py-5 rounded-full text-xl font-bold hover:bg-brand-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Now
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
