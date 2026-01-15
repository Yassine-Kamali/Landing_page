import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (plan: string) => void;
}

const offers = [
  {
    name: "Studio",
    badge: "🎓 Idéal étudiants",
    price: "290",
    priceLabel: "À partir de",
    desc: "Parfait pour un studio ou T1. Tu as peu de meubles mais beaucoup de bazar ? C'est fait pour toi.",
    features: [
      { text: "Transport jusqu'à 10m³ (studio/T1)", included: true },
      { text: "2 déménageurs sympas", included: true },
      { text: "Cartons livrés chez toi", included: true },
      { text: "Checklist personnalisée", included: true },
      { text: "Aide au tri & conseils", included: false },
      { text: "Démarches admin", included: false },
    ],
    color: "bg-white",
    textColor: "text-stone-800"
  },
  {
    name: "Zen",
    badge: "⭐ Le préféré des Clara",
    price: "490",
    priceLabel: "À partir de",
    desc: "Tu gères ta vie, on gère ton déménagement. Zéro charge mentale.",
    features: [
      { text: "Transport jusqu'à 20m³ (T1/T2)", included: true },
      { text: "Cartons livrés ET récupérés", included: true },
      { text: "Aide au tri avec toi", included: true },
      { text: "Résiliation/ouverture contrats (box, EDF...)", included: true },
      { text: "Checklist perso + rappels", included: true },
      { text: "Hotline humaine le jour J", included: true },
    ],
    popular: true,
    color: "bg-stone-900",
    textColor: "text-white"
  },
  {
    name: "Cocon",
    badge: "💎 Full service",
    price: "790",
    priceLabel: "À partir de",
    desc: "Tu ouvres la porte de ton nouvel appart. Tout est déjà prêt à vivre.",
    features: [
      { text: "Tout le forfait Zen inclus", included: true },
      { text: "Emballage complet par nos soins", included: true },
      { text: "Déballage et rangement", included: true },
      { text: "Montage meubles IKEA/etc", included: true },
      { text: "Ménage ancien logement", included: true },
      { text: "État des lieux accompagné", included: true },
      { text: "Conciergerie 7j/7", included: true },
    ],
    color: "bg-white",
    textColor: "text-stone-800"
  }
];

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelectPlan = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
    // Scroll to form
    const formSection = document.getElementById('final-cta');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-24 bg-gradient-to-b from-white to-stone-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-4">Choisissez votre tranquillité</h2>
          <p className="text-stone-500">Des solutions adaptées à vos besoins, sans stress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl shadow-xl cursor-default transition-all duration-500 flex flex-col
                ${offer.color} ${offer.textColor}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50 blur-[1px] scale-95' : 'opacity-100 scale-100'}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold px-4 py-1.5 rounded-full ${
                offer.popular 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-stone-200 text-stone-600'
              }`}>
                {offer.badge}
              </div>

              <h3 className="text-3xl font-bold mb-2 mt-2">{offer.name}</h3>

              <div className="mb-4">
                <span className={`text-sm ${offer.textColor === 'text-white' ? 'text-stone-400' : 'text-stone-500'}`}>
                  {offer.priceLabel}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{offer.price}</span>
                  <span className="text-2xl">€</span>
                </div>
              </div>

              <p className={`text-base mb-6 ${offer.textColor === 'text-white' ? 'text-stone-400' : 'text-stone-500'}`}>
                {offer.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {offer.features.map((feat, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${!feat.included ? 'opacity-50' : ''}`}>
                    {feat.included ? (
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${offer.textColor === 'text-white' ? 'text-green-400' : 'text-green-600'}`} />
                    ) : (
                      <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${offer.textColor === 'text-white' ? 'text-red-400' : 'text-red-500'}`} />
                    )}
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                onClick={() => handleSelectPlan(offer.name)}
                className={`w-full py-4 rounded-xl font-medium transition-all
                  ${offer.textColor === 'text-white' 
                    ? 'bg-white text-stone-900 hover:bg-stone-200' 
                    : 'bg-stone-900 text-white hover:bg-stone-800'}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choisir ce forfait
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;