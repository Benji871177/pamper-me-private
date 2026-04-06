export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: 'Facials' | 'Waxing' | 'Massages' | 'Nails';
  image: string;
  price: string;
}

export const services: Service[] = [
  {
    id: 'massage-full-1',
    name: 'Full Body Massage',
    description: 'A comprehensive full body massage to release tension and promote relaxation.',
    duration: '1 Hour',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    price: 'R800'
  },
  {
    id: 'massage-full-2',
    name: 'Full Body Massage',
    description: 'Extended full body massage for deeper relaxation and muscle relief.',
    duration: '1 Hour & 30 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    price: 'R950'
  },
  {
    id: 'massage-scrub-combo',
    name: 'Full Body Massage / Full Body Scrub',
    description: 'The ultimate pampering combination of a full body massage and exfoliating scrub.',
    duration: '1 Hour',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    price: 'R1200'
  },
  {
    id: 'scrub-full',
    name: 'Full Body Scrub',
    description: 'Exfoliating treatment for the entire body, leaving skin smooth and rejuvenated.',
    duration: '1 Hour',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    price: 'R1000'
  },
  {
    id: 'scrub-back',
    name: 'Back Scrub',
    description: 'Targeted exfoliation for the back area to remove dead skin cells.',
    duration: '30 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    price: 'R500'
  },
  {
    id: 'massage-back-neck-1',
    name: 'Back & Neck Massage',
    description: 'Focused massage targeting common areas of tension in the back and neck.',
    duration: '30 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    price: 'R500'
  },
  {
    id: 'massage-back-neck-2',
    name: 'Back & Neck Massage',
    description: 'Extended focus on the back and neck to alleviate persistent tightness.',
    duration: '45 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    price: 'R650'
  },
  {
    id: 'massage-back-neck-scrub',
    name: 'Back & Neck Massage / Back Scrub',
    description: 'Combination of targeted massage and exfoliating scrub for the back and neck.',
    duration: '45 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    price: 'R700'
  },
  {
    id: 'massage-sports',
    name: 'Sports Massage',
    description: 'Targeted deep tissue work to relieve muscle tension and improve athletic performance.',
    duration: 'Varies',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    price: 'R700 - R1200'
  },
  {
    id: 'massage-foot',
    name: 'Foot Massage',
    description: 'Relaxing and therapeutic massage focused entirely on the feet.',
    duration: '30 Minutes',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    price: 'R300'
  },
  {
    id: 'facial-1',
    name: 'Deep Cleansing Facial',
    description: 'A thorough cleansing, exfoliation, and hydration treatment tailored to your skin type.',
    duration: '60 min',
    category: 'Facials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    price: 'Inquire'
  },
  {
    id: 'mani-pedi-1',
    name: 'Luxury Manicure',
    description: 'Complete nail care including shaping, cuticle work, and premium polish.',
    duration: '45 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg',
    price: 'Inquire'
  },
  {
    id: 'mani-pedi-2',
    name: 'Deluxe Pedicure',
    description: 'Relaxing foot soak, exfoliation, and nail care for perfectly groomed feet.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    price: 'Inquire'
  },
  {
    id: 'waxing-1',
    name: 'Full Body Waxing',
    description: 'Professional hair removal service for smooth, long-lasting results.',
    duration: 'Varies',
    category: 'Waxing',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800',
    price: 'Inquire'
  }
];
