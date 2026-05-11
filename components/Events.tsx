
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { EVENTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = EVENTS.filter(e => e.type === filter);

  return (
    <section id="events" className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <SectionHeader 
          number="03" 
          title="Agenda" 
          subtitle="Rencontrez-nous lors de nos prochaines résidences ou revivez nos moments forts."
        />
        
        <div className="flex bg-white/5 p-1 rounded-full mb-8 md:mb-24 self-start md:self-auto">
          <button 
            onClick={() => setFilter('upcoming')}
            className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${filter === 'upcoming' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
          >
            À venir
          </button>
          <button 
            onClick={() => setFilter('past')}
            className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${filter === 'past' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
          >
            Archives
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence mode="wait">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[11px] uppercase tracking-widest">{event.date}</span>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold">{event.location}</span>
                <h3 className="text-3xl font-bold lowercase tracking-tighter">{event.title}</h3>
                <p className="text-white/70 text-[11px] uppercase tracking-widest font-bold max-w-md">{event.description}</p>
                <div className="pt-4">
                   <button className="text-[11px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">
                      {filter === 'upcoming' ? 'Réserver une place' : 'Voir le report'}
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
