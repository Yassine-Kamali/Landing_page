import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, FileWarning, Clock, Users, Brain, Key } from 'lucide-react';

const ChaosItem = ({ icon: Icon, label, x, y, rotate, delay }: any) => {
  return (
    <motion.div 
      className="absolute flex flex-col items-center justify-center p-4 bg-white shadow-lg border border-red-50 rounded-lg text-red-400 z-10 w-32 md:w-40"
      style={{ left: x, top: y, rotate: rotate }}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.5, duration: 1.5, delay: delay }}
    >
      <Icon className="w-8 h-8 mb-2 opacity-80" />
      <span className="text-xs font-semibold uppercase tracking-wider text-center">{label}</span>
    </motion.div>
  );
};

const Chaos: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-stone-100 overflow-hidden py-24">
      {/* Visual Noise Background */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 opacity-5 bg-[radial-gradient(#cc2222_1px,transparent_1px)] [background-size:16px_16px]" 
      />

      <div className="relative container mx-auto px-6 h-full flex flex-col items-center">
        <motion.h2 
          style={{ opacity: opacityText }}
          className="text-3xl md:text-5xl font-bold text-stone-800 text-center mb-6 mt-20 max-w-2xl"
        >
          Premier appart, première galère ?<br/>
          <span className="text-red-400 font-serif italic text-2xl md:text-4xl">(On connaît trop bien ce film)</span>
        </motion.h2>
        
        <motion.p
          style={{ opacity: opacityText }}
          className="text-stone-500 text-center mb-16 max-w-lg"
        >
          Spoiler : tes potes vont annuler au dernier moment.
        </motion.p>

        <div className="relative w-full max-w-4xl h-[600px] border-l-2 border-r-2 border-stone-200/50 rounded-3xl bg-stone-50/50 backdrop-blur-sm overflow-hidden">
          {/* Falling Items - adaptés au persona Clara */}
          <ChaosItem icon={Users} label="Potes indispos" x="10%" y="15%" rotate="-12deg" delay={0.1} />
          <ChaosItem icon={FileWarning} label="Résiliation box" x="60%" y="20%" rotate="15deg" delay={0.3} />
          <ChaosItem icon={Brain} label="Charge mentale" x="70%" y="55%" rotate="10deg" delay={0.7} />
          <ChaosItem icon={Box} label="Bazar partout" x="15%" y="70%" rotate="-20deg" delay={0.9} />
          <ChaosItem icon={Clock} label="Deadline stress" x="75%" y="75%" rotate="8deg" delay={1.1} />
          
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
             <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-red-100 max-w-md text-center">
                <p className="text-lg text-stone-600 italic">
                  "Par où je commence ?"<br/>
                  "J'ai oublié quoi d'autre ?"<br/>
                  "Je vais jamais y arriver seule..."
                </p>
                <div className="mt-4 w-full h-1 bg-red-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-red-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                </div>
                <p className="text-xs text-red-500 mt-2 font-bold uppercase">Charge mentale : Maximum</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chaos;