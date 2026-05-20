import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState, useRef } from 'react';
import { AWARDS } from '../constants';
import { cn } from '../lib/utils';

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null);

  const accolades = [
    { title: 'MUSE', description: 'SILVER WINNER', year: '2024' },
    { title: 'French Design', description: 'SILVER WINNER', year: '2024' },
    { title: 'A DESIGN', description: 'BRONZE', year: '2024-2025' },
    { title: '第21屆中國國際建築亞太華人', description: '2025 金鑽獎', year: '2025' },
    { title: '中國空間設計大賽', description: '銀獎', year: '2025' },
    { title: 'APDC', description: '亞太設計 2025 AWARDS', year: '2025' },
    { title: 'TID Award', description: 'TAIWAN INTERIOR DESIGN AWARD', year: '2022' },
  ];

  return (
    <div className="bg-[#121212] pt-0 min-h-screen text-white pb-32">
      <section className="relative pt-0 pb-24 px-6 md:px-24">
        {/* Header */}
        <div className="text-center mb-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.6em] text-gold-muted mb-4 uppercase font-serif italic ml-0 -mt-[19px] pl-0"
          >
            RECOGNITION OF EXCELLENCE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[7rem] font-serif tracking-[0.2em] text-[#d8bb50] ml-0 mt-0 pl-0 pt-[34px]"
          >
            譽 之 光
          </motion.h2>
        </div>

        {/* Philosophy & Principle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
          <div className="text-center space-y-4 ml-0 pl-0 pt-[5px]">
            <h4 className="text-[10px] tracking-[0.4em] text-gold-muted uppercase font-serif">PHILOSOPHY</h4>
            <p className="text-xl md:text-2xl font-serif italic text-white/80">Structural Aesthetics</p>
          </div>
          <div className="text-center space-y-4 pt-[5px]">
            <h4 className="text-[10px] tracking-[0.4em] text-gold-muted uppercase font-serif">PRINCIPLE</h4>
            <p className="text-xl md:text-2xl font-serif italic text-white/80">Interaction Design</p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-48">
          {AWARDS.map((award, index) => (
            <AwardNiche 
              key={award.id} 
              award={award} 
              index={index} 
            />
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-64"
        >
          <p className="text-lg md:text-xl text-white/80 font-serif leading-relaxed mb-12 tracking-wide">
            We believe great design deserves to be acknowledged—not as an endpoint, but as a measure of our commitment to timelessness
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-12 bg-gold-muted/30" />
            <span className="text-[10px] tracking-[0.4em] text-gold-muted uppercase font-serif">SAINT DESIGN COLLECTIVE</span>
            <div className="h-[1px] w-12 bg-gold-muted/30" />
          </div>
        </motion.div>

        {/* Geometry of Silence Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto mb-64">
          <ImageWithGlow src="/src/assets/images/regenerated_image_1779092906179.jpg" alt="Staircase" />
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.4em] text-gold-muted uppercase font-serif">STRUCTURAL AESTHETICS</h4>
              <h2 className="text-5xl md:text-[63px] font-serif text-white tracking-wide">
                尤聖賢・設計總監<br />
                <span className="text-3xl md:text-5xl block mt-4 opacity-80">築光者</span>
              </h2>
            </div>
            <p className="text-sm text-white/40 leading-relaxed tracking-widest font-light">
              十年匠心，以空間為譽，以作品為光<br />
              每一筆結構，每一縫光影，都是他對居住者生活的理解與回應<br />
              設計的榮耀，不在獎盃上，而在住戶踏入空間時，那一瞬的安定與共鳴
            </p>
            <button className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-colors group">
              VIEW CASE STUDIES <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        {/* Detailed Accolades List (Archive) */}
        <div className="border-t border-white/5 pt-24 max-w-4xl mx-auto">
          <h3 className="text-[14px] tracking-[0.5em] text-gold-muted mb-16 text-center uppercase font-serif">歷年殊榮 ARCHIVE</h3>
          <div className="grid grid-cols-1 gap-4">
            {accolades.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-gold-muted/30 transition-colors"
              >
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base font-serif tracking-widest text-white/80 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-[8px] md:text-[10px] text-white/20 tracking-[0.2em] uppercase">{item.description}</p>
                </div>
                <span className="text-[10px] text-white/20 tracking-[0.2em] font-serif">{item.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ImageWithGlow({ src, alt }: { src: string, alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const glowX = useTransform(springX, [0, 1], ['30%', '70%']);
  const glowY = useTransform(springY, [0, 1], ['85%', '105%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.9);
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square group cursor-pointer"
    >
      {/* Dynamic Yellow Light Effect (Positioned UNDERNEATH) */}
      <motion.div 
        style={{
          left: glowX,
          top: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, rgba(255, 184, 0, 0) 75%)',
        }}
        className="absolute w-[180%] h-[100%] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
      />

      <img 
        src={src} 
        alt={alt} 
        className="relative z-10 w-full h-full object-cover transition-all duration-1000 rounded-2xl shadow-2xl"
        referrerPolicy="no-referrer"
      />
      
      {/* Subtle bottom edge overlay highlight */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FFB800]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 rounded-b-2xl" />
    </motion.div>
  );
}

function AwardNiche({ award, index }: { award: any, index: number, key?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1 
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 10 }
      }}
      className="relative group cursor-pointer flex flex-col items-center"
    >
      <div className="relative aspect-[3/4] w-full bg-[#1A1A1A] rounded-[50%_50%_45%_45%/70%_70%_30%_30%] border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-2xl">
        {/* Glow effect */}
        <div className="absolute inset-x-0 -top-1/2 h-full bg-gold-muted/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 mb-6 md:mb-12">
            <img 
              src={award.icon} 
              alt={award.title}
              className="w-full h-full object-contain grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h3 className="text-[10px] md:text-sm font-serif tracking-[0.2em] text-white/90 mb-2">{award.title}</h3>
          <p className="text-[8px] md:text-[10px] tracking-[0.2em] text-white/40 uppercase">{award.year}</p>
        </div>
      </div>
    </motion.div>
  );
}
