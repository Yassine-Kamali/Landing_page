import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, DollarSign } from 'lucide-react';

interface FinalCTAProps {
  selectedPlan?: string | null;
  onChangePlan?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ selectedPlan, onChangePlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    situation: '',
    firstTime: '',
    housing: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Merci ! On te recontacte sous 24h pour tout organiser 💪');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-stone-100 to-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">
            Prête à souffler ?
          </h2>
          <p className="text-stone-500 text-lg mb-8">
            30 secondes pour vérifier ta date. Zéro engagement, promis.
          </p>

          {/* Selected Plan Display */}
          {selectedPlan && (
            <motion.div 
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-200 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="text-stone-600">Forfait sélectionné :</span>
              <span className="font-bold text-stone-900">{selectedPlan}</span>
              <button 
                onClick={onChangePlan}
                className="text-blue-600 hover:text-blue-700 text-sm underline"
              >
                Modifier
              </button>
            </motion.div>
          )}

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Ton prénom"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-stone-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:text-blue-500">
                  Ton prénom
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Ton email"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-stone-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:text-blue-500">
                  Ton email
                </label>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Téléphone (optionnel)"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-stone-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:text-blue-500">
                  Téléphone (optionnel)
                </label>
              </div>

              {/* Date Input */}
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-stone-500">
                  Date souhaitée
                </label>
              </div>
            </div>

            {/* Section persona - informations Clara */}
            <div className="border-t border-stone-100 pt-6 mt-2 mb-6">
              <p className="text-sm text-stone-400 mb-4 text-center">Pour mieux t'accompagner :</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Situation */}
                <div className="relative">
                  <select
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white text-stone-600 appearance-none cursor-pointer"
                  >
                    <option value="">Tu déménages...</option>
                    <option value="seule">Seule</option>
                    <option value="couple">En couple</option>
                    <option value="coloc">En coloc</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                </div>

                {/* First time */}
                <div className="relative">
                  <select
                    name="firstTime"
                    value={formData.firstTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white text-stone-600 appearance-none cursor-pointer"
                  >
                    <option value="">C'est ton...</option>
                    <option value="first">1er déménagement</option>
                    <option value="second">2ème ou 3ème</option>
                    <option value="expert">Je suis rodée 😅</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                </div>

                {/* Housing type */}
                <div className="relative">
                  <select
                    name="housing"
                    value={formData.housing}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white text-stone-600 appearance-none cursor-pointer"
                  >
                    <option value="">Type de logement</option>
                    <option value="studio">Studio</option>
                    <option value="t1">T1</option>
                    <option value="t2">T2</option>
                    <option value="t3+">T3 ou plus</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-stone-900 text-white rounded-xl font-medium text-lg shadow-lg hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Vérification...
                </>
              ) : (
                'Vérifier ma date →'
              )}
            </motion.button>
          </motion.form>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-stone-500">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Données sécurisées</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <Phone className="w-5 h-5" />
              <span className="text-sm">Hotline humaine</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm">Devis gratuit</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
