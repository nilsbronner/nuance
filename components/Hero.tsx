
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import coverImage from '../src/assets/images/compilation-cover.jpg';
import SoundCloudPlayer from './SoundCloudPlayer';
import { EVENTS, MIXTAPES } from '../constants';

const Hero: React.FC = () => {
  const [selectedMixtapeIdx, setSelectedMixtapeIdx] = useState(0);
  const currentMixtape = MIXTAPES[selectedMixtapeIdx];

  const nextEvent = EVENTS
    .filter(e => e.type === 'upcoming')
    .sort((a, b) => {
      const parse = (d: string) => {
        const [day, month, year] = d.split('.');
        return new Date(2000 + parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();
      };
      return parse(a.date) - parse(b.date);
    })[0];

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cover image */}
        <img
          src={coverImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />

        {/* Top/bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 text-center"
      >
        <h1
          className="logo-outline select-none mb-12"
          style={{ fontSize: '52.88px', lineHeight: '69.88px', textAlign: 'center' }}
        >
          nuance
        </h1>
      </motion.div>

      {/* Navigation shortcuts */}
      <div className="absolute bottom-8 md:bottom-12 w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 gap-8 md:gap-8 z-30">
        <div className="flex flex-col items-start gap-1 border-l border-white/10 pl-4 md:pl-6">
          <span className="text-[10px] md:text-[14px] lowercase tracking-widest font-medium opacity-40">prochain événement</span>
          {nextEvent ? (
            <span className="text-[11px] md:text-[17px] lowercase font-bold tracking-tight text-white/50">
              {nextEvent.date} /// {nextEvent.location}
            </span>
          ) : (
            <span className="text-[11px] md:text-[17px] lowercase font-bold tracking-tight text-white/30 italic">à venir</span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          {['vision', 'archives', 'agenda'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[12px] md:text-[17px] lowercase tracking-[0.4em] md:tracking-[0.5em] font-medium opacity-40 hover:opacity-100 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/5"></div>
            <span className="text-[14px] font-medium lowercase tracking-[0.5em] text-white/40">strasbourg /// france /// 2026</span>
          </div>
        </div>
      </div>

      {/* SoundCloud Player + actus strip */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
        <SoundCloudPlayer
          key={currentMixtape.id}
          title={currentMixtape.title}
          artist={currentMixtape.artist}
          scEmbedUrl={currentMixtape.scEmbedUrl}
        />
        {/* Actus — sélecteur de sorties */}
        {MIXTAPES.length > 1 && (
          <div className="flex gap-2 flex-wrap justify-center">
            {MIXTAPES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setSelectedMixtapeIdx(i)}
                className={`text-[8px] uppercase tracking-[0.3em] px-3 py-1.5 border transition-all ${
                  selectedMixtapeIdx === i
                    ? 'border-white/40 text-white bg-white/5'
                    : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                }`}
              >
                {m.title} — {m.artist}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
