
import React from 'react';
import { PRESS_KIT_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 md:pt-40 pb-20 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background decoration - scanline like line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 md:mb-40 text-center">
          <h2 className="text-[27px] logo-outline select-none leading-none mb-12">nuance</h2>
          <div className="max-w-md w-full h-px bg-white/10 mb-8"></div>
          <p className="text-white/40 leading-relaxed text-[11px] lowercase tracking-[0.4em] font-medium max-w-sm">
            collectif culturel /// indépendant <br/>
            audios visuelle minimaliste 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-20 md:mb-32 border-b border-white/5 pb-20 md:pb-32">
          <div className="space-y-8 md:space-y-12">
            <h4 className="text-[11px] lowercase tracking-[0.5em] font-bold text-white/50">signal_path</h4>
            <ul className="space-y-4 text-[11px] font-medium lowercase tracking-[0.4em] text-white/30">
              <li><a href="#vision" className="hover:text-white transition-colors">/// vision</a></li>
              <li><a href="#archives" className="hover:text-white transition-colors">/// archives</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">/// agenda</a></li>
              <li><a href="#connect" className="hover:text-white transition-colors">/// connect</a></li>
            </ul>
          </div>
          <div className="space-y-12">
            <h4 className="text-[11px] lowercase tracking-[0.5em] font-bold text-white/50">access_point</h4>
            <ul className="space-y-4 text-[11px] font-medium lowercase tracking-[0.4em] text-white/30">
              <li><a href="mailto:nuancerecording@gmail.com" className="hover:text-white transition-colors">nuancerecording@gmail.com</a></li>
              <li><a href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">press_archive_2026</a></li>
              <li><a href="https://www.instagram.com/nuance_recording" target="_blank" className="hover:text-white transition-colors">instagram</a></li>
              <li><a href="https://youtube.com/@nuance.studio" target="_blank" className="hover:text-white transition-colors">youtube</a></li>
            </ul>
          </div>
          <div className="space-y-12">
            <h4 className="text-[11px] lowercase tracking-[0.5em] font-bold text-white/50">terminal_info</h4>
            <div className="text-[11px] font-medium lowercase tracking-[0.4em] text-white/20 leading-loose">
              strasbourg /// france <br/>
              pirate broadcast <br/>
              active since 2019
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
             <div className="w-1.5 h-1.5 bg-white/20 rotate-45"></div>
             <span className="text-[10px] font-medium lowercase tracking-[0.4em] text-white/20">
               © 2026 <span className="font-gilroy-bold">nuance</span> collectif /// signal safe.
             </span>
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-medium lowercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">legal_notice</a>
            <a href="#" className="text-[10px] font-medium lowercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">privacy_vault</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
