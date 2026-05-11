
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grain noise via SVG feTurbulence */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.88" numOctaves="4" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#grain-filter)" opacity="0.38"/>
        </svg>

        {/* Central glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 65% 52% at 50% 50%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.12) 38%, rgba(0,0,0,0) 72%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Horizontal scanlines */}
        <div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)',
          }}
        />

        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 38%, rgba(0,0,0,0.92) 100%)',
          }}
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
        <p className="text-[11px] md:text-[12px] lowercase tracking-[0.8em] font-medium opacity-40 select-none">
          electronic music & digital arts
        </p>
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

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
