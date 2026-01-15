import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleText = "Déménagez l'esprit léger.";
  const words = titleText.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <img
        src="/hero-bg.png"
        alt="Déménagement"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-stone-50 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <div className="z-10 max-w-4xl px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-stone-800 leading-tight mb-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span variants={child} key={index} className="inline-block mr-2 lg:mr-4">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-stone-500 font-light mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Simplifiez votre déménagement avec style et sérénité.
        </motion.p>

        <motion.button
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-medium shadow-xl hover:bg-blue-500 transition-colors"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Vérifier ma date </span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <span className="text-stone-500 text-sm font-medium">Scroll pour comprendre</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-stone-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;