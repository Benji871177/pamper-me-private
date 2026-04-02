export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: 'Facials' | 'Waxing' | 'Massages' | 'Nails';
  image: string;
}

export const services: Service[] = [
  {
    id: 'facial-1',
    name: 'Deep Cleansing Facial',
    description: 'A thorough cleansing, exfoliation, and hydration treatment tailored to your skin type.',
    duration: '60 min',
    category: 'Facials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'massage-sports',
    name: 'Sports Massage',
    description: 'Targeted deep tissue work to relieve muscle tension and improve athletic performance.',
    duration: '60 min',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'massage-aroma',
    name: 'Aroma Therapy Massage',
    description: 'Gentle massage combined with essential oils for ultimate relaxation and stress relief.',
    duration: '60 min',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'massage-deep',
    name: 'Deep Tissue Massage',
    description: 'Intense pressure applied to deeper layers of muscle and connective tissue.',
    duration: '75 min',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'massage-pregnancy',
    name: 'Pregnancy Massage',
    description: 'Safe and soothing massage designed specifically for expectant mothers.',
    duration: '60 min',
    category: 'Massages',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mani-pedi-1',
    name: 'Luxury Manicure',
    description: 'Complete nail care including shaping, cuticle work, and premium polish.',
    duration: '45 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg'
  },
  {
    id: 'mani-pedi-2',
    name: 'Deluxe Pedicure',
    description: 'Relaxing foot soak, exfoliation, and nail care for perfectly groomed feet.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nail-ext-1',
    name: 'Soft Gel Tips',
    description: 'Lightweight and natural-looking nail extensions with a soft gel finish.',
    duration: '90 min',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nail-ext-2',
    name: 'Acrylic Extensions',
    description: 'Durable and versatile nail extensions for a classic, long-lasting look.',
    duration: '100 min',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waxing-1',
    name: 'Full Body Waxing',
    description: 'Professional hair removal service for smooth, long-lasting results.',
    duration: 'Varies',
    category: 'Waxing',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800'
  }
];
