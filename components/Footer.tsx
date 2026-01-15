import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif mb-4">Déménagement Serein</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              On s'occupe de tout. Tu profites de ta nouvelle vie.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-stone-300">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-stone-400 hover:text-white transition-colors text-left text-sm"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-stone-400 hover:text-white transition-colors text-left text-sm"
              >
                Comment ça marche
              </button>
              <button 
                onClick={() => scrollToSection('offers')}
                className="text-stone-400 hover:text-white transition-colors text-left text-sm"
              >
                Nos offres
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-stone-400 hover:text-white transition-colors text-left text-sm"
              >
                Témoignages
              </button>
            </nav>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-stone-300">Prêt à déménager ?</h4>
            <motion.button
              onClick={() => scrollToSection('final-cta')}
              className="px-6 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-200 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vérifier ma date →
            </motion.button>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-stone-300">Contact</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              Adresse : 10 Rue de Paris, 75001 Paris, France<br />
              Téléphone : +33 1 23 45 67 89<br />
              Email : contact@zenmove.fr
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Déménagement Serein. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;