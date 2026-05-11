
import React from 'react';
import { motion } from 'framer-motion';
import posterImage from '../src/assets/images/regenerated_image_1778250332433.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Overlay layers to unify the visual with the Noir & Blanc DA */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-70"></div>
        
        {/* Video Element - Focused on light and movement to match "nuance" sessions */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1] scale-105"
          poster={posterImage}
        >
          {/* Note: Remplacer cette URL par le lien direct .mp4 de l'un de vos lives YouTube */}
          <source 
            src="https://cdn.pixabay.com/video/2021/04/12/70878-537443834_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
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

      {/* Navigation shortcuts (Pirate Archive Style) */}
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

      {/* Bottom bar decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
