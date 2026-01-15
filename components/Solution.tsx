import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Package, Truck, FileCheck, Home } from 'lucide-react';

const steps = [
  { icon: CalendarCheck, title: "On planifie", desc: "Date bloquée, inventaire fait." },
  { icon: Package, title: "On emballe", desc: "Matériel fourni, cartons sécurisés." },
  { icon: Truck, title: "On transporte", desc: "Camion adapté, chauffeurs pros." },
  { icon: FileCheck, title: "Administratif", desc: "Assurance et contrats gérés." },
  { icon: Home, title: "Tu t’installes", desc: "Tout est là où ça doit être." },
];

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Du chaos à la clarté</h2>
          <p className="text-stone-500">Un processus linéaire. Une fin prévisible.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-stone-200 -z-0" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative bg-white p-4 rounded-full shadow-md border-2 border-transparent z-10 transition-colors duration-500 hover:border-blue-400 group">
                  <motion.div 
                    className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                    style={{ zIndex: -1 }}
                  />
                  <step.icon className="w-8 h-8 text-stone-700 group-hover:text-blue-600 transition-colors" />
                </div>
                
                {/* Connecting Line (Mobile) - vertical */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-16 bottom-[-32px] w-0.5 bg-stone-200" />
                )}

                <h3 className="mt-6 text-lg font-bold text-stone-800">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{step.desc}</p>
                
                {/* Glow effect on appear */}
                <motion.div 
                   className="absolute top-4 w-8 h-8 rounded-full bg-blue-400 blur-xl opacity-0"
                   animate={{ opacity: [0, 0.5, 0] }}
                   transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;