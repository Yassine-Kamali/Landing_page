import React from 'react';
import Hero from './components/Hero';
import Chaos from './components/Chaos';
import Calm from './components/Calm';
import Solution from './components/Solution';
import BeforeAfter from './components/BeforeAfter';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <main className="w-full relative selection:bg-stone-200 selection:text-stone-900">
      {/* Hero Section */}
      <Hero />

      {/* Chaos and Calm Sections */}
      <section id="chaos-calm" className="bg-gradient-to-b from-white to-stone-100 py-16 relative">
        <img src="/images/moving-boxes.jpg" alt="Cartons de déménagement" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <Chaos />
        <Calm />
      </section>

      {/* Solution Section */}
      <section id="solution" className="bg-stone-50 py-16 relative">
        <img src="/images/solution.jpg" alt="Solution de déménagement" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <Solution />
      </section>

      {/* Before and After Section */}
      <section id="before-after" className="bg-gradient-to-b from-stone-50 to-white py-16 relative">
        <img src="/images/before-after.jpg" alt="Avant et après déménagement" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <BeforeAfter />
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="bg-white py-16 relative">
        <img src="/images/testimonials.jpg" alt="Témoignages clients" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <SocialProof />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-stone-50 py-16 relative">
        <img src="/images/pricing.jpg" alt="Tarifs déménagement" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <Pricing />
      </section>

      {/* Final Call to Action */}
      <section id="final-cta" className="bg-gradient-to-b from-stone-50 to-white py-16">
        <FinalCTA />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Call to Action */}
      <FloatingCTA />
    </main>
  );
}