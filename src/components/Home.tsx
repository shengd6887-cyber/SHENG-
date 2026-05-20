import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-rock-black"
    >
      {/* Background Breathing Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"
        />
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay grayscale"
          style={{ 
            backgroundImage: 'url(https://res.cloudinary.com/dphzmc5xy/image/upload/v1774719570/IMG_1898_li27no.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
      </div>

      {/* Central Irregular Arch */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 25, mass: 1.2 }}
        style={{ 
          x: mousePos.x, 
          y: mousePos.y,
        }}
        className="relative z-10 w-[60vw] h-[80vh] max-w-4xl flex items-center justify-center group"
      >
        <div className="absolute inset-0 border-[1px] border-champagne-gold/30 rounded-[100%_100%_0_0] rotate-[-5deg] scale-105 transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 border-[1px] border-champagne-gold/20 rounded-[80%_120%_0_0] rotate-[3deg] scale-110 transition-transform duration-1000 group-hover:scale-115" />
        
        <div className="relative w-full h-full overflow-hidden mask-arch bg-velvet-gray/5 backdrop-blur-sm border border-white/10">
          {/* Parallax Content Inside Arch */}
          <motion.div 
            style={{ 
              x: mousePos.x * -1.5, 
              y: mousePos.y * -1.5,
              scale: 1.2
            }}
            className="absolute inset-0"
          >
            <img 
              src="https://res.cloudinary.com/dphzmc5xy/image/upload/v1774719570/IMG_1898_li27no.jpg" 
              alt="Interior"
              className="w-full h-full object-cover opacity-90 transition-all duration-1000 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="absolute z-20 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-6xl md:text-8xl font-serif tracking-widest text-velvet-gray mb-8"
        >
          SHENG DESIGN
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
          className="text-sm md:text-base tracking-[0.5em] text-gold-muted uppercase"
        >
          為您量身打造<br />讓空間成聖境
        </motion.p>
      </motion.div>

      {/* Footstep Text (Bottom Info) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-12 z-20 text-[10px] tracking-[0.2em] text-velvet-gray/50 space-y-2"
      >
        <p>25.0384° N, 121.5324° E</p>
        <p>SHENG DESIGN STUDIO © 2026</p>
        <p>THE GENESIS OF SPACE</p>
      </motion.div>
    </section>
  );
}
