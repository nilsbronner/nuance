
import React from 'react';
import SectionHeader from './SectionHeader';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
      <SectionHeader 
        number="05" 
        title="Connexion" 
        subtitle="Suivez l'évolution du collectif à travers nos différents canaux officiels."
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {SOCIAL_LINKS.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.url}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white group-hover:text-black transition-all mb-2">
               {/* Simplified Icons for demo */}
               <span className="text-xs font-bold uppercase">{link.name.charAt(0)}</span>
            </div>
            <span className="text-sm font-medium tracking-widest">{link.name}</span>
            <span className="text-[10px] uppercase text-white/40 group-hover:text-white transition-colors">{link.cta}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Connect;
