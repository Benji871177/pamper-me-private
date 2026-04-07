export interface ServiceOption {
  name: string;
  price: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: 'Waxing' | 'Massages' | 'Nails';
  image: string;
  price: string;
  options?: ServiceOption[];
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
    image: 'https://i.postimg.cc/bwykH7Jw/227085277-603734773930400-8113900530491352957-n.jpg',
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
    image: 'https://images.pexels.com/photos/6628806/pexels-photo-6628806.jpeg',
    price: 'R300'
  },
  // Manicures
  {
    id: 'mani-express',
    name: 'Express Manicure',
    description: 'Quick nail shaping and care for those on the go.',
    duration: '30 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg',
    price: 'R350 - R490',
    options: [
      { name: 'Buff & Shine', price: 'R350' },
      { name: 'Polish', price: 'R360' },
      { name: 'Gel', price: 'R470' },
      { name: 'French', price: 'R490' }
    ]
  },
  {
    id: 'mani-classic',
    name: 'Classic Manicure',
    description: 'Traditional nail care including cuticle work and shaping.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg',
    price: 'R410 - R560',
    options: [
      { name: 'Buff & Shine', price: 'R410' },
      { name: 'Polish', price: 'R420' },
      { name: 'Gel', price: 'R530' },
      { name: 'French', price: 'R560' }
    ]
  },
  {
    id: 'mani-signature',
    name: 'Signature Manicure',
    description: 'Our premium manicure experience with extended care and luxury finishes.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/3738377/pexels-photo-3738377.jpeg',
    price: 'R530 - R670',
    options: [
      { name: 'Buff & Shine', price: 'R530' },
      { name: 'Polish', price: 'R540' },
      { name: 'Gel', price: 'R650' },
      { name: 'French', price: 'R670' }
    ]
  },
  {
    id: 'mani-soft-gel',
    name: 'Soft Gel Tips',
    description: 'Lightweight and natural-looking nail extensions with a soft gel finish.',
    duration: '75 min',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    price: 'R440 - R690',
    options: [
      { name: 'Polish', price: 'R440' },
      { name: 'Gel', price: 'R660' },
      { name: 'French', price: 'R690' }
    ]
  },
  // Pedicures
  {
    id: 'pedi-express',
    name: 'Express Pedicure',
    description: 'Essential foot care and nail shaping for a quick refresh.',
    duration: '30 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/31091768/pexels-photo-31091768.jpeg',
    price: 'R380 - R520',
    options: [
      { name: 'Buff & Shine', price: 'R380' },
      { name: 'Polish', price: 'R390' },
      { name: 'Gel', price: 'R500' },
      { name: 'French', price: 'R520' }
    ]
  },
  {
    id: 'pedi-classic',
    name: 'Classic Pedicure',
    description: 'Complete foot care including exfoliation and nail shaping.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/34930127/pexels-photo-34930127.jpeg',
    price: 'R440 - R580',
    options: [
      { name: 'Buff & Shine', price: 'R440' },
      { name: 'Polish', price: 'R450' },
      { name: 'Gel', price: 'R560' },
      { name: 'French', price: 'R580' }
    ]
  },
  {
    id: 'pedi-signature',
    name: 'Signature Pedicure',
    description: 'Luxury foot treatment with extended massage and premium finishes.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/7755549/pexels-photo-7755549.jpeg',
    price: 'R580 - R720',
    options: [
      { name: 'Buff & Shine', price: 'R580' },
      { name: 'Polish', price: 'R590' },
      { name: 'Gel', price: 'R700' },
      { name: 'French', price: 'R720' }
    ]
  },
  {
    id: 'pedi-mediheel',
    name: 'MediHeel Pedicure',
    description: 'Advanced foot treatment targeting calluses and dry skin for smooth heels.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/34930117/pexels-photo-34930117.jpeg',
    price: 'R650 - R790',
    options: [
      { name: 'Buff & Shine', price: 'R650' },
      { name: 'Polish', price: 'R660' },
      { name: 'Gel', price: 'R770' },
      { name: 'French', price: 'R790' }
    ]
  },
  {
    id: 'pedi-maternity',
    name: 'Lucky Legs Maternity Pedicure',
    description: 'Soothing and safe foot care specifically designed for expectant mothers.',
    duration: '60 min',
    category: 'Nails',
    image: 'https://images.pexels.com/photos/5484947/pexels-photo-5484947.png',
    price: 'R540 - R680',
    options: [
      { name: 'Buff & Shine', price: 'R540' },
      { name: 'Polish', price: 'R550' },
      { name: 'Gel', price: 'R660' },
      { name: 'French', price: 'R680' }
    ]
  },
  {
    id: 'waxing-1',
    name: 'Full Body Waxing',
    description: 'Professional hair removal service for smooth, long-lasting results.',
    duration: 'Varies',
    category: 'Waxing',
    image: 'https://images.pexels.com/photos/6629603/pexels-photo-6629603.jpeg',
    price: 'Inquire'
  }
];
