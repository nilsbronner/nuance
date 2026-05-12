
import React from 'react';
import { motion } from 'framer-motion';
import coverImage from '../src/assets/images/cover.jpg.png';

const Hero: React.FC = () => {
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
          <span className="text-[10px] md:text-[14px] lowercase tracking-widest font-medium opacity-40">prochain signal</span>
          <span className="text-[11px] md:text-[17px] lowercase font-bold tracking-tight text-white/50">20.06.26 /// forêt du neuhof</span>
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

      {/* SoundCloud Player — bottom center vignette */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-40 w-[320px] md:w-[420px]">
        <div className="bg-black/70 backdrop-blur-md border border-white/10 px-3 pt-2 pb-1 rounded-sm">
          <p className="text-[8px] uppercase tracking-[0.35em] text-white/20 mb-1 pl-1">ciel noir /// stream</p>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameBorder={0}
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cyprien_nuance/sets/ciel-noir&color=%23ffffff&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false"
          />
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
