import { motion } from 'motion/react';
import { Heart, Shield, Award, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="text-brand-600" />,
    title: "Personalized Care",
    description: "Every treatment is tailored to your unique needs and preferences."
  },
  {
    icon: <Shield className="text-brand-600" />,
    title: "Trust & Safety",
    description: "We prioritize your safety with rigorous hygiene standards and certified staff."
  },
  {
    icon: <Award className="text-brand-600" />,
    title: "Premium Quality",
    description: "We use only the finest products and equipment for all our services."
  },
  {
    icon: <Users className="text-brand-600" />,
    title: "Community Focused",
    description: "We are proud to serve our local community with excellence."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Story</h1>
            <div className="space-y-6 text-brand-700 text-lg leading-relaxed">
              <p>
                Pamper me Private (PMP) was born out of a simple realization: luxury and self-care shouldn't be confined to a physical spa location. In today's fast-paced world, finding time for yourself is a challenge.
              </p>
              <p>
                We set out to redefine the wellness experience by bringing professional, high-quality spa and beauty services directly to our clients' homes. Our mission is to provide a sanctuary of relaxation and professional grooming without the stress of travel or crowded salons.
              </p>
              <p>
                Today, PMP is a leading mobile wellness provider, known for our commitment to quality, trust, and the ultimate convenience of our clients.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
                alt="Spa treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-900 text-brand-50 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-sm text-brand-300">Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Core Values</h2>
            <p className="text-brand-600 max-w-2xl mx-auto">
              These principles guide everything we do, from the products we select to the professionals we hire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-brand-100 space-y-4 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold">{value.title}</h3>
                <p className="text-brand-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="bg-brand-900 text-brand-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Our Commitment to <br /><span className="text-brand-400 italic">Quality & Safety</span></h2>
              <ul className="space-y-4 text-brand-200">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p>All equipment is medically sterilized before every appointment.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p>We use premium, hypoallergenic products from leading professional brands.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p>Our staff undergoes regular training on the latest techniques and safety protocols.</p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl aspect-square object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
