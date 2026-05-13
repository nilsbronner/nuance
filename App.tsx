
import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import BandSection from './components/BandSection';
import Footer from './components/Footer';
import { LIVESTREAMS, EVENTS, SOCIAL_LINKS, STREAM_EMBEDS, PRESS_KIT_URL, ARCHIVE_COLLECTIONS } from './constants';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import bgVision from './src/assets/images/regenerated_image_1778250332433.jpg';
import bgStreaming from './src/assets/images/regenerated_image_1778250333183.jpg';
import bgArchives from './src/assets/images/regenerated_image_1778250334116.jpg';
import bgAgenda from './src/assets/images/regenerated_image_1778250335159.jpg';
import bgConnect from './src/assets/images/regenerated_image_1778250335974.jpg';

interface GalleryItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  vimeoId: string;
}

const GalleryScroll: React.FC<{ items: GalleryItem[]; onPlay: (id: string) => void }> = ({ items, onPlay }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <div className="relative group/gallery overflow-hidden">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-white hover:text-black"
        aria-label="précédent"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-white hover:text-black"
        aria-label="suivant"
      >
        ›
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onPlay(item.vimeoId)}
            className="flex-none w-[280px] md:w-[420px] aspect-video relative snap-start cursor-pointer group/item overflow-hidden border border-white/5 shrink-0"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover/item:opacity-90 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-full border border-white/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5" />
                </div>
                <span className="text-[10px] font-bold lowercase tracking-widest opacity-50">{item.duration}</span>
              </div>
              <h5 className="text-base md:text-lg font-bold lowercase tracking-tighter leading-tight">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSectionId, setOpenSectionId] = useState<string | null>('vision');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpenSectionId(id);
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const toggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  const menuItems = ['vision', 'streaming', 'archives', 'agenda', 'connect'];

  return (
    <div className="relative antialiased bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-white z-[100] origin-left" style={{ scaleX }} />

      <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-700 py-6 md:py-8 px-6 md:px-12 flex items-center justify-between ${isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent'}`}>
        <div 
          className="text-[19px] h-[17px] logo-outline cursor-pointer select-none hover:opacity-100 transition-opacity font-gilroy-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          nuance
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12 text-[29px] leading-[80px]">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <button 
                key={item} 
                onClick={() => scrollToSection(id)}
                className={`text-[17px] font-medium lowercase tracking-[0.4em] transition-opacity ${openSectionId === id ? 'opacity-100 text-white' : 'opacity-20 hover:opacity-100'}`}
              >
                {item}
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={PRESS_KIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-[14px] md:text-[18px] font-bold lowercase tracking-widest px-4 md:px-6 py-2 border border-white/10 hover:bg-white hover:text-black transition-all"
          >
            presse
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[75] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 px-6">
              {menuItems.map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item)}
                  className={`text-2xl font-bold lowercase tracking-[0.2em] transition-all ${openSectionId === item ? 'text-white' : 'text-white/40'}`}
                >
                  {item}
                </button>
              ))}
              <a 
                href={PRESS_KIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-xl font-bold lowercase tracking-widest px-8 py-4 border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                presse
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />

        <BandSection 
          index={0} 
          id="vision" 
          title="vision" 
          isOpen={openSectionId === 'vision'}
          onToggle={() => toggleSection('vision')}
          subtitle="manifeste audiovisuel minimaliste."
          bgImage={bgVision}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8 space-y-12 lg:space-y-16">
               <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                     <h3 className="text-[11px] lowercase font-bold tracking-[0.4em] text-white/40">/// manifesto</h3>
                    <p className="text-xl md:text-3xl font-bold lowercase tracking-tight leading-[1.3] max-w-3xl text-vhs">
                      <span className="font-gilroy-bold">nuance</span> is a cultural association and independent label. we release music we believe in and build community around it — through the records, through the events, through the spaces in between. sound made with intention, for the people it was always meant for.
                    </p>
                 </div>
                 <div 
                   className="space-y-4 pt-6 lg:pt-8 border-t border-white/5"
                   style={{ lineHeight: '10px', height: '200px', width: '716.98px' }}
                 >
                    <p className="text-xs md:text-sm font-medium lowercase tracking-widest text-texture leading-relaxed max-w-2xl italic">
                      <span className="font-gilroy-bold">nuance</span> est une association culturelle et un label indépendant. nous diffusons la musique en laquelle nous croyons et construisons une communauté tout autour — à travers les disques, les événements, et les espaces entre les deux. un son créé avec intention, pour les personnes auxquelles il a toujours été destiné.
                    </p>
                  </div>
               </div>
               <div className="pt-4 lg:pt-8 flex flex-wrap gap-4 lg:gap-6 text-[10px] md:text-[11px] font-medium lowercase tracking-[0.3em] md:tracking-[0.4em] text-white/40">
                  <span>electronic music</span>
                  <span>digital arts</span>
                  <span>pirate archive</span>
               </div>
            </div>
            <div className="lg:col-span-4 border border-white/10 p-6 md:p-8 flex flex-col justify-end bg-texture/5 aspect-square lg:aspect-auto min-h-[250px] lg:min-h-0">
               <span className="text-[11px] lowercase font-bold tracking-widest block mb-4 opacity-50">signal source</span>
               <p className="text-[11px] lowercase tracking-widest leading-loose text-white/40">
                 collectif culturel <br/>
                 strasbourg /// fr <br/>
                 depuis 2019
               </p>
            </div>
          </div>
        </BandSection>

        <BandSection 
          index={1} 
          id="streaming" 
          title="streaming" 
          isOpen={openSectionId === 'streaming'}
          onToggle={() => toggleSection('streaming')}
          subtitle="youtube / soundcloud / bandcamp."
          bgImage={bgStreaming}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[SOCIAL_LINKS[1], SOCIAL_LINKS[2], SOCIAL_LINKS[3]].map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black py-16 md:py-32 flex flex-col items-center justify-center group hover:bg-white transition-all"
              >
                <span className="text-5xl font-bold mb-6 group-hover:text-black transition-all">
                  {link.name === 'youtube' ? 'Y' : link.name === 'soundcloud' ? 'S' : 'B'}
                </span>
                <span className="text-[11px] font-bold lowercase tracking-[0.8em] opacity-40 group-hover:opacity-100 group-hover:text-black mb-4">
                  {link.name}
                </span>
                <span className="text-[11px] lowercase tracking-widest font-medium text-white/20 group-hover:text-black/40">
                  {link.cta.toLowerCase()}
                </span>
              </a>
            ))}
          </div>
        </BandSection>

        <BandSection 
          index={2} 
          id="archives" 
          title="archives" 
          isOpen={openSectionId === 'archives'}
          onToggle={() => toggleSection('archives')}
          subtitle="captures vidéos / studio & outdoor performances."
          bgImage={bgArchives}
        >
          <div className="space-y-16 md:space-y-32">
            {ARCHIVE_COLLECTIONS.map((collection) => (
              <div key={collection.id} className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between px-2 gap-6sm:gap-0">
                  <div className="space-y-2">
                    <h4 className="text-3xl md:text-4xl font-bold lowercase tracking-tighter">{collection.title}</h4>
                    <p className="text-[10px] md:text-[11px] lowercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 font-medium">{collection.description}</p>
                  </div>
                  <a 
                    href={collection.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] font-bold lowercase tracking-widest border border-white/10 px-6 py-2 hover:bg-white hover:text-black transition-all self-start sm:self-auto"
                  >
                    tout voir
                  </a>
                </div>

                <GalleryScroll items={collection.items} onPlay={setActiveVideoId} />
              </div>
            ))}

            {LIVESTREAMS.length > 0 && (
              <div className="pt-12 md:pt-20 border-t border-white/5">
                <h5 className="text-[11px] font-bold lowercase tracking-[0.5em] text-white/30 mb-8 md:mb-12">/// sessions_individuelles</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {LIVESTREAMS.map((ls) => (
                    <div key={ls.id} className="group cursor-pointer">
                      <div className="relative aspect-[16/9] overflow-hidden mb-4 md:mb-6 border border-white/5">
                        <img src={ls.thumbnail} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="flex justify-between items-start">
                         <div>
                            <h4 className="text-2xl font-bold lowercase tracking-tighter">{ls.artist}</h4>
                            <p className="text-[11px] lowercase tracking-widest opacity-40 font-medium">{ls.title}</p>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </BandSection>

        <BandSection 
          index={3} 
          id="agenda" 
          title="agenda" 
          isOpen={openSectionId === 'agenda'}
          onToggle={() => toggleSection('agenda')}
          subtitle="manifestations culturelles & engagements."
          bgImage={bgAgenda}
        >
          <div className="space-y-1">
            {EVENTS.map((event) => (
              <div key={event.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 md:py-12 px-2 md:px-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                 <div className="md:col-span-2 flex flex-col font-bold">
                    <span className="text-3xl md:text-4xl tracking-tighter">{event.date.split('.')[0]}.{event.date.split('.')[1]}</span>
                    <span className="text-[10px] md:text-[11px] lowercase tracking-widest opacity-30">20{event.date.split('.')[2]}</span>
                 </div>
                 <div className="md:col-span-7">
                    <h4 className="text-2xl md:text-4xl font-bold lowercase tracking-tighter mb-2 md:mb-4">{event.title}</h4>
                    <p className="text-[10px] md:text-[11px] lowercase tracking-[0.3em] md:tracking-[0.4em] font-medium text-white/30">{event.location}</p>
                 </div>
                 <div className="md:col-span-3 flex flex-col justify-center">
                    <p className="text-[10px] md:text-[11px] font-bold lowercase tracking-tight text-white/30 italic group-hover:text-white/60 transition-colors">
                      {event.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </BandSection>

        <BandSection 
          index={4} 
          id="connect" 
          title="connect" 
          isOpen={openSectionId === 'connect'}
          onToggle={() => toggleSection('connect')}
          subtitle={<span>suivez la vague <span className="font-gilroy-bold">nuance</span>.</span>}
          bgImage={bgConnect}
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 mb-16 md:mb-20">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} target="_blank" className="bg-black py-10 md:py-20 flex flex-col items-center justify-center group hover:bg-white transition-all">
                <span className="text-3xl font-bold mb-4 group-hover:text-black transition-all">{link.name.charAt(0)}</span>
                <span className="text-[11px] font-bold lowercase tracking-[0.6em] opacity-40 group-hover:opacity-100 group-hover:text-black">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-12 items-center justify-center">
             <div className="text-center md:text-left space-y-4">
                <h4 className="text-3xl md:text-4xl font-bold lowercase tracking-tighter">instagram_feed</h4>
                <p className="text-[11px] lowercase tracking-[0.4em] opacity-40 max-w-sm font-medium">
                   les derniers visuels, les coulisses du studio et les annonces de signal.
                </p>
                <a href={SOCIAL_LINKS[0].url} target="_blank" className="inline-block text-[11px] font-bold lowercase tracking-[0.3em] border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all mt-4">
                   ouvrir @nuance_recording
                </a>
             </div>
             <div className="w-40 h-40 md:w-48 md:h-48 border border-white/10 p-4">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${SOCIAL_LINKS[0].url}`} alt="qr code instagram" className="w-full invert opacity-40 grayscale contrast-200" />
             </div>
          </div>
        </BandSection>
      </main>

      <Footer />

      {/* Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveVideoId(null)}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 text-white hover:bg-white hover:text-black transition-all rounded-full"
            >
              ✕
            </button>
            <iframe 
              src={`https://player.vimeo.com/video/${activeVideoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`} 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default App;
