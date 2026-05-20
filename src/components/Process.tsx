import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { MessageSquare, Layout, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: '初步溝通',
    subtitle: 'INITIAL CONSULTATION',
    description: '深度了解您的生活習慣、審美偏好與空間機能需求，界定設計核心靈魂。',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: '02',
    title: '丈量與佈局',
    subtitle: 'SPACE MEASUREMENT & LAYOUT',
    description: '從丈量、佈局到提案，為您的理想空間，畫下第一筆輪廓。',
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: '03',
    title: '細部設計',
    subtitle: 'TECHNICAL DRAWING',
    description: '精確的施工圖紙與材質選樣，確保藝術美感能精準地轉化為實體結構。',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: '04',
    title: '工程監造',
    subtitle: 'CONSTRUCTION',
    description: '頂尖工藝團隊進場，全程專業監修，嚴格把關每一道曲線與陰影的處理。',
    icon: <Hammer className="w-6 h-6" />
  },
  {
    id: '05',
    title: '完工交屋',
    subtitle: 'FINAL HANDOVER',
    description: '最終質感微調，將淬鍊完成的純粹境域正式交付到您的手中。',
    icon: <Key className="w-6 h-6" />
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-rock-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] border-[1px] border-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-gold-muted mb-4 uppercase">Sequence of Prologue</p>
            <h2 className="text-5xl md:text-7xl font-serif tracking-widest text-velvet-gray">序之曲</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            className="text-xs text-velvet-gray/40 tracking-[0.2em] max-w-sm uppercase leading-relaxed text-right"
          >
            從零到一的秩序建構，我們將抽象的渴望轉化為實體的純粹。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 15, 
                delay: index * 0.15 
              }}
              className="group relative"
            >
              <div className="glass-panel p-8 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] h-full border border-white/5 group-hover:border-champagne-gold/30 transition-all duration-700">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-3xl font-serif text-white/5 group-hover:text-champagne-gold/20 transition-colors">
                    {step.id}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-champagne-gold group-hover:bg-champagne-gold group-hover:text-rock-black transition-all duration-500">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif tracking-widest mb-2 text-velvet-gray group-hover:text-champagne-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-[9px] tracking-[0.3em] text-gold-muted mb-6 uppercase">
                  {step.subtitle}
                </p>
                <p className="text-xs text-velvet-gray/40 leading-relaxed group-hover:text-velvet-gray/70 transition-colors">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/5 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Background Text */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute -bottom-24 left-0 w-full overflow-hidden pointer-events-none opacity-5"
      >
        <span className="text-[25vw] font-serif tracking-tighter whitespace-nowrap leading-none select-none">
          SYSTEMATIC ESSENCE
        </span>
      </motion.div>
    </section>
  );
}
