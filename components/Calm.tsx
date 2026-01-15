import React from 'react';
import { motion } from 'framer-motion';

const Calm: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-stone-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 leading-relaxed">
            Respire.<br />
            <span className="text-blue-500">Ce n'est pas à toi de tout porter.</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-md mx-auto">
            Pas besoin de demander aux potes. Pas besoin de faire des listes à 3h du mat. 
            On est là.
          </p>
          <motion.div 
            className="w-16 h-1 bg-blue-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Calm;