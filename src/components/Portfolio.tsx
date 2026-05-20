import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { cn } from '../lib/utils';
import { X, ArrowRight, Play } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-rock-black min-h-screen text-velvet-gray selection:bg-champagne-gold selection:text-rock-black pb-32">
      {/* Editorial Header */}
      <section className="px-6 md:px-24 pt-8 pb-4 overflow-hidden" style={{ height: '200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-7xl md:text-[8rem] font-serif tracking-tight leading-none text-white overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block"
              style={{ fontSize: '40px' }}
            >
              幻之跡
            </motion.span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-white/5">
            <p className="text-xs tracking-[0.4em] uppercase text-gold-muted font-light italic">
              PORTFOLIO | The Shifting Perspective
            </p>
            <div className="flex items-center gap-12 text-[10px] tracking-[0.2em] text-white/20">
              <span className="hover:text-champagne-gold transition-colors cursor-pointer">INSTAGRAM</span>
              <span className="hover:text-champagne-gold transition-colors cursor-pointer">BEHANCE</span>
              <span className="hover:text-champagne-gold transition-colors cursor-pointer">ARCHDAILY</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Case Study Section 01 & 02 (Paired Blobs) */}
      <section className="px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-48 items-start mb-64">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 40, damping: 20, delay: idx * 0.2 }}
            className={cn(
              "group relative cursor-pointer",
              idx === 1 ? "md:mt-64" : ""
            )}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative mb-12">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={cn(
                  "relative aspect-[4/5] overflow-hidden bg-white/5 border border-white/5 shadow-2xl transition-all duration-1000",
                  idx === 0 ? "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" : "rounded-[30%_70%_70%_30%/50%_50%_50%_50%]"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-40 group-hover:opacity-0 transition-opacity duration-1000" />
                
                <div className="absolute bottom-12 left-12">
                  <p 
                    className="text-[10px] tracking-[0.3em] text-champagne-gold uppercase mb-2 font-serif"
                    style={idx === 0 ? { marginLeft: '55px' } : idx === 1 ? { marginLeft: '8px' } : undefined}
                  >
                    {project.category}
                  </p>
                  <h3 
                    className="text-3xl font-serif text-white"
                    style={idx === 0 ? { marginLeft: '114px' } : idx === 1 ? { marginLeft: '34px' } : undefined}
                  >
                    {idx === 0 && project.id === '1' ? "淨隅" : project.title.split(' | ')[0]}
                  </h3>
                </div>
              </motion.div>
            </div>
            
            <div className="flex items-center gap-6 group/line">
              <div className="h-[1px] w-12 bg-white/10 group-hover/line:w-24 transition-all duration-500" />
              <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase group-hover/line:text-champagne-gold transition-colors">
                {idx === 0 ? "QUIET SANCTUM" : idx === 1 ? "SHADOW NARRATIVE" : "MATHEMATICAL DEPTH"}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Masterpiece Showcase (Large Lone Blob) */}
      <section className="px-6 md:px-24 mb-64 flex flex-col md:flex-row items-center gap-24 md:gap-48">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5"
          onClick={() => setSelectedProject(PROJECTS[2])}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-white/5 rounded-[60%_40%_70%_30%/40%_50%_30%_60%] cursor-pointer group"
          >
            <img 
              src={PROJECTS[2].image} 
              alt="Masterpiece"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 space-y-12"
        >
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.8em] text-champagne-gold uppercase font-serif">{PROJECTS[2].category}</p>
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-widest leading-tight">{PROJECTS[2].title.split(' | ')[0]}</h2>
          </div>
          <div className="space-y-8">
            <p className="text-sm text-white/40 leading-relaxed font-light tracking-widest">
              光的對話，影的軌跡。在虛實之間，為空間鋪陳溫柔的邊界
            </p>
            <div className="pl-8 border-l border-champagne-gold/30">
              <p className="text-xs italic text-gold-muted/60 leading-loose">
                "Dialogue between light and shadow is the purest form of architectural language."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Small Snapshots Grid */}
      <section className="px-6 md:px-24 mb-64 text-center">
        <div className="mb-24 space-y-4">
          <h3 className="text-3xl font-serif text-white tracking-[0.5em]">跡 遇 日 常</h3>
          <p className="text-[10px] tracking-[0.3em] text-gold-muted italic uppercase">Traces of daily life</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {[
            { img: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777458090/IMG_0732_hikzdz.jpg', label: 'PRIMITIVE STONE' },
            { img: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777455774/IMG_6267_sj9m5v.jpg', label: 'AGED TIMBER' },
            { img: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777455773/IMG_6259_x4s8al.jpg', label: 'OXIDIZED IRON' },
            { img: 'https://res.cloudinary.com/dphzmc5xy/image/upload/v1777455774/IMG_6265_plllvq.jpg', label: 'ZEN RIPPLE' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-white/5 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] mb-8 border border-white/5 group-hover:border-champagne-gold/20 transition-all duration-700">
                <img 
                  src={`${item.img}?auto=format&fit=crop&q=80&w=600`} 
                  alt="Snapshot"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[8px] tracking-[0.4em] text-white/20 group-hover:text-champagne-gold transition-colors font-mono uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-width Immersive Blob Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-24" onClick={() => setSelectedProject(PROJECTS[3])}>
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 brightness-50"
        >
          <img 
            src={PROJECTS[3].image} 
            alt="Background" 
            className="w-full h-full object-cover blur-[2px] opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          className="relative z-10 w-full max-w-4xl aspect-[21/9] border border-white/5 rounded-[60%_40%_70%_30%/50%_30%_60%_40%] flex flex-col items-center justify-center p-12 text-center group cursor-pointer overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          {/* HD Clear View Portal */}
          <div className="absolute inset-0 z-0">
            <img 
              src={PROJECTS[3].image} 
              alt="Clear view" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3s] ease-out shadow-inner"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
          </div>

          <div className="relative z-10">
            <p className="text-[10px] tracking-[0.8em] text-champagne-gold uppercase mb-8 font-serif">{PROJECTS[3].category}</p>
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-widest mb-12 group-hover:scale-110 transition-transform duration-1000">
              {PROJECTS[3].title.split(' | ')[0]}
            </h2>
            <div className="flex items-center gap-4 justify-center">
              <div className="h-[1px] w-12 bg-champagne-gold/30" />
              <p className="text-xs text-white/40 tracking-[0.5em] uppercase">當空間隱去，意識便開始延伸</p>
              <div className="h-[1px] w-12 bg-champagne-gold/30" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Decorative Text Section */}
      <section className="px-6 md:px-24 mb-48 text-center -mt-12">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h2 
            className="text-[32px] md:text-[45px] font-serif text-white uppercase tracking-[0.4em] [writing-mode:vertical-rl] mx-auto"
            style={{ marginTop: '-1px', paddingTop: '0px', paddingLeft: '0px', paddingRight: '67px' }}
          >
            留 白 之 境
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 flex flex-col items-center text-center">
            <p className="text-xs tracking-[0.6em] text-white/40 leading-relaxed uppercase">
              留白，給光線與日常，留足呼吸的餘地
            </p>
            <p className="text-[10px] tracking-[0.3em] text-champagne-gold font-serif italic uppercase pt-2">
              Stillness in the Void
            </p>
          </div>
          <motion.div 
            animate={{ height: [0, 80] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="h-24 w-[1px] bg-champagne-gold/30 mx-auto mt-16" 
          />
        </div>
      </section>

      {/* Masterpiece 06 Section */}
      <section className="px-6 md:px-24 mb-64 flex flex-col md:flex-row-reverse items-center gap-24 md:gap-48">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-3/5"
          onClick={() => setSelectedProject(PROJECTS[4])}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square md:aspect-[4/3] overflow-hidden bg-white/5 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] cursor-pointer group shadow-2xl"
          >
            <img 
              src={PROJECTS[4].image} 
              alt="Return to White"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-2/5 space-y-12"
        >
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.8em] text-champagne-gold uppercase font-serif">{PROJECTS[4].category}</p>
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-widest leading-tight">{PROJECTS[4].title.split(' | ')[0]}</h2>
          </div>
          <div className="space-y-8">
            <p className="text-sm text-white/40 leading-relaxed font-light tracking-widest">
              從繁華回歸簡淨，從紛雜走向留白
            </p>
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-champagne-gold" 
              />
              <p className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-serif">
                The presence of everything
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Digital Manifesto (Large Immersive Ripple Section) */}
      <section className="px-6 md:px-24 mb-64 -mt-32 text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto aspect-square flex flex-col items-center justify-center group"
          onClick={() => setSelectedProject(PROJECTS[5])}
        >
          {/* Water Ripple Layers */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[80%] h-[80%] border border-champagne-gold/10 rounded-full animate-wave" />
            <div className="absolute w-[80%] h-[80%] border border-champagne-gold/5 rounded-full animate-wave [animation-delay:1s]" />
            <div className="absolute w-[80%] h-[80%] border border-champagne-gold/5 rounded-full animate-wave [animation-delay:2s]" />
          </div>

          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl animate-slow-blob opacity-30" />
          
          {/* The Large Frame for the Start Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative z-10 flex flex-col items-center justify-center space-y-16"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-48 h-48 md:w-96 md:h-96 rounded-full border border-champagne-gold/20 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur-3xl shadow-[0_0_100px_rgba(212,175,55,0.1)] group-hover:border-champagne-gold/50 transition-all duration-1000 overflow-hidden relative"
            >
              <img 
                src="https://res.cloudinary.com/dphzmc5xy/image/upload/v1777458125/IMG_0748_liszix.jpg"
                alt="Manifesto"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute inset-0 rounded-full animate-wave opacity-50 pointer-events-none" />
              <Play className="relative z-10 w-12 h-12 md:w-24 md:h-24 text-champagne-gold fill-champagne-gold group-hover:scale-110 transition-transform duration-1000" />
            </motion.div>

            <div className="space-y-6">
              <p className="text-[10px] md:text-xs tracking-[1em] text-gold-muted uppercase font-serif">Digital Manifesto</p>
              <h2 className="text-4xl md:text-7xl font-serif text-white tracking-[0.4em] uppercase leading-none">
                {PROJECTS[5].title.split(' | ')[0]}
              </h2>
              <p className="text-[10px] tracking-[0.6em] text-white/20 uppercase font-light">A Journey through the Ark</p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8 pt-12"
            >
              <div className="h-[1px] w-24 bg-white/10" />
              <p className="text-[8px] tracking-[0.5em] text-white/40 uppercase font-mono italic">Click to enter the meditation</p>
              <div className="h-[1px] w-24 bg-white/10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <section className="px-6 md:px-24 py-32 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] tracking-[0.5em] text-white/10 font-serif uppercase">
        <p>© SHENG DESIGN INTERIOR ARCHITECTURE</p>
        <div className="flex gap-12">
          <span className="hover:text-champagne-gold cursor-pointer transition-colors">FLIP@DESIGN</span>
          <span className="hover:text-champagne-gold cursor-pointer transition-colors">INSTAGRAM</span>
          <span className="hover:text-champagne-gold cursor-pointer transition-colors">PINTEREST</span>
        </div>
        <p className="text-champagne-gold/30 italic uppercase">Member of elite</p>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <GalleryModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const galleryShapes = [
    "rounded-[30%_70%_70%_30%/50%_50%_50%_50%]",
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[50%_50%_20%_80%/40%_60%_40%_60%]",
    "rounded-[80%_20%_50%_50%/50%_50%_50%_50%]",
    "rounded-[40%_60%_40%_60%/70%_30%_70%_30%]",
    "rounded-[70%_30%_30%_70%/30%_70%_70%_30%]",
    "rounded-[20%_80%_80%_20%/40%_60%_60%_40%]",
    "rounded-[50%_50%_50%_50%/20%_80%_80%_20%]",
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[150] bg-rock-black overflow-y-auto scrollbar-hide"
    >
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 right-0 text-[30vw] font-serif leading-none -translate-y-1/4 translate-x-1/4 select-none uppercase">
          {project.title.charAt(0)}
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-[160] mix-blend-difference">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] text-champagne-gold uppercase">{project.category}</span>
          <span className="text-2xl font-serif tracking-widest text-white uppercase leading-none">{project.title.split(' | ')[0]}</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-champagne-gold hover:text-rock-black transition-all bg-black/20 backdrop-blur-sm"
        >
          <X className="w-8 h-8" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-64">
        <motion.div 
          initial={{ opacity: 0.2, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          className="mb-48"
        >
          <p className="text-xl md:text-3xl text-velvet-gray/60 leading-relaxed max-w-4xl font-light italic border-l-2 border-champagne-gold/30 pl-12 uppercase tracking-wide">
            「每一位居住者，都是這場空間敘事的主角。我們不只是設計空間，我們在建構一段尋回內心秩序的旅程。」
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {project.gallery?.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 15, 
                mass: 1.5,
                delay: idx * 0.1 
              }}
              className={cn(
                "group relative overflow-hidden bg-white/5",
                galleryShapes[idx % galleryShapes.length],
                idx % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/5]",
                idx % 4 === 1 ? "md:translate-y-24" : ""
              )}
            >
              <img 
                src={img} 
                alt={`${project.title} ${idx + 1}`} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/5 group-hover:border-champagne-gold/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-64 text-center space-y-8"
        >
          <div className="h-[1px] w-48 bg-champagne-gold/20 mx-auto" />
          <p className="text-[10px] tracking-[0.5em] text-gold-muted uppercase">End of Revelation</p>
          <motion.button 
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            className="text-xs tracking-[0.5em] text-velvet-gray/40 hover:text-champagne-gold transition-colors font-serif uppercase pt-4"
          >
            Return to Archive
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
