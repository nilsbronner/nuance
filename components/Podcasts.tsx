
import React from 'react';
import SectionHeader from './SectionHeader';
import { PODCASTS } from '../constants';
import { motion } from 'framer-motion';

const Podcasts: React.FC = () => {
  return (
    <section id="podcasts" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          number="04" 
          title="Podcasts" 
          subtitle="Saison 4 : Nuance s'écoute. Entretiens profonds avec les visages qui façonnent la culture."
        />

        <div className="space-y-6">
          {PODCASTS.map((podcast, idx) => (
            <motion.div 
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 border-b border-black/10 hover:bg-black/5 transition-colors group"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border border-black/5">
                <img src={podcast.imageUrl} alt={podcast.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <span className="text-[11px] uppercase tracking-widest text-black/50 mb-1 block font-bold">/// Épisode 0{podcast.episode}</span>
                <h3 className="text-2xl font-bold lowercase tracking-tighter mb-1">{podcast.title}</h3>
                <p className="text-black/70 text-[11px] uppercase tracking-widest font-bold">avec {podcast.guest}</p>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-[11px] font-medium uppercase text-black/50">{podcast.duration}</span>
                <button className="w-14 h-14 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#" className="inline-block px-10 py-4 bg-black text-white text-xs uppercase tracking-widest rounded-full hover:bg-black/80 transition-all">
              Écouter sur SoundCloud
           </a>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
