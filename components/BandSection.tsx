
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BandSectionProps {
  id: string;
  title: string;
  subtitle: string;
  bgImage: string;
  children: React.ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const BandSection: React.FC<BandSectionProps> = ({ 
  id, title, subtitle, bgImage, children, index, isOpen, onToggle 
}) => {
  return (
    <section id={id} className="relative border-t border-white/5 overflow-hidden bg-black">
      {/* Visual Band Header */}
      <motion.div 
        layout
        onClick={onToggle}
        className="relative h-[30vh] md:h-[50vh] cursor-pointer group flex items-center overflow-hidden"
      >
        <motion.img 
          src={bgImage} 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.4] brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7] transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        
        {/* Color Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40 z-0"></div>

        {/* CRT Noise Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity bg-[url('https://media.giphy.com/media/oEI9uWUicG3P1d9V0T/giphy.gif')] bg-cover mix-blend-screen"></div>

        <div className="relative z-10 px-6 md:px-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div>
            <span className="text-[9px] tracking-[0.4em] lowercase text-white/20 font-bold mb-2 block">
              file_0{index + 1} /// {id}
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold lowercase tracking-nuance leading-none transition-all duration-700 select-none group-hover:tracking-widest">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <p className="text-[9px] lowercase tracking-widest text-vhs font-medium max-w-[200px] md:max-w-[240px] leading-relaxed opacity-40">
              {subtitle}
            </p>
            <motion.div 
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5"/></svg>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Bottom line */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-700 delay-100"></div>
      </motion.div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#000] band-shadow"
          >
            <div className="px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto border-l border-white/5 ml-4 md:ml-12 overflow-hidden">
              {children}
            </div>
            <div className="h-px w-full bg-white/5"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BandSection;
