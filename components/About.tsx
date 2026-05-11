
import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
      <SectionHeader 
        number="01" 
        title="Le Manifeste" 
        subtitle="Plus qu’une association, Nuance est une plateforme de rencontre entre les disciplines."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Née de la volonté d'explorer les interstices de la création, Nuance agit comme un catalyseur pour la scène émergente.
          </p>
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] leading-relaxed">
            Depuis 2019, nous produisons des contenus audiovisuels immersifs, des événements intimistes et des formats éditoriaux qui placent l'artiste au cœur d'un dispositif sensoriel complet. Notre mission est simple : révéler les nuances qui font la richesse de la culture contemporaine.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <span className="block text-3xl font-bold mb-1 uppercase tracking-tighter">12k+</span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest font-bold">Auditeurs mensuels</span>
            </div>
            <div>
              <span className="block text-3xl font-bold mb-1 uppercase tracking-tighter">50+</span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest font-bold">Artistes produits</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
<img 
            src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000" 
            alt="Vision" 
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
