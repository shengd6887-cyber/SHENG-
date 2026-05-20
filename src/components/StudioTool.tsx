import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Calculator } from 'lucide-react';

export default function StudioTool() {
  const [size, setSize] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [style, setStyle] = useState<string>('minimal');

  const calculateEstimate = () => {
    const base = parseInt(size) || 0;
    const ageFactor = (parseInt(age) || 0) > 20 ? 1.15 : 1; // Old house plumbing/wiring adjustment
    let pricePerPing = 35000; // Minimalist/Standard rate (reduced to be more affordable)
    
    if (style === 'luxury') pricePerPing = 80000; // Luxury rate (reduced from 150,000)
    if (style === 'artistic') pricePerPing = 55000; // Artistic rate (reduced from 100,000)
    
    return (base * pricePerPing * ageFactor).toLocaleString();
  };

  return (
    <section id="tools" className="relative min-h-screen bg-rock-black py-32 px-8 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] whitespace-nowrap">
        <h2 className="text-[30vw] font-serif leading-none">CALCULATOR</h2>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center space-y-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 text-center"
        >
          <h2 className="text-5xl font-serif tracking-widest text-champagne-gold">創之域</h2>
          <p className="text-xs tracking-[0.4em] text-velvet-gray/50 uppercase">DECORATION CALCULATOR</p>
          <p className="text-sm text-velvet-gray/70 leading-relaxed max-w-md mx-auto">
            在預算內，定義你的「絕風」。<br />輸入空間資訊，即時獲得初步裝潢費用估算。
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 1.2 }}
          className="w-full space-y-10 glass-panel p-10 md:p-16 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] text-gold-muted uppercase font-medium">空間坪數 (PING)</label>
              <input 
                type="number" 
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="0"
                className="w-full bg-transparent border-b border-white/10 py-3 text-3xl font-serif focus:border-champagne-gold outline-none transition-all placeholder:text-white/5"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] text-gold-muted uppercase font-medium">房屋屋齡 (YEARS)</label>
              <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="0"
                className="w-full bg-transparent border-b border-white/10 py-3 text-3xl font-serif focus:border-champagne-gold outline-none transition-all placeholder:text-white/5"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] tracking-[0.3em] text-gold-muted uppercase font-medium block text-center">設計風格 (STYLE)</label>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'minimal', label: '極簡 MINIMAL' },
                { id: 'artistic', label: '藝術 ARTISTIC' },
                { id: 'luxury', label: '奢華 LUXURY' }
              ].map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStyle(s.id)}
                  className={cn(
                    "px-8 py-3 text-[10px] tracking-widest uppercase rounded-full border transition-all duration-500",
                    style === s.id 
                      ? "border-champagne-gold text-champagne-gold bg-champagne-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]" 
                      : "border-white/10 text-velvet-gray/40 hover:border-white/30"
                  )}
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] tracking-[0.2em] text-velvet-gray/40 uppercase">初步預算估計 (ESTIMATED BUDGET)</p>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-sm text-champagne-gold/60 font-serif">NT$</span>
                <motion.p 
                  key={calculateEstimate()}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15,
                    mass: 0.8
                  }}
                  className="text-5xl font-serif text-champagne-gold tracking-tighter"
                >
                  {calculateEstimate()}
                </motion.p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full border border-champagne-gold/30 flex items-center justify-center hover:bg-champagne-gold hover:text-rock-black transition-all duration-700 group shadow-lg"
            >
              <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>
          </div>
          
          <p className="text-[9px] text-center text-velvet-gray/30 tracking-widest uppercase pt-4">
            * 此估算僅供參考，實際費用依現場狀況與建材選擇為準
          </p>
        </motion.div>
      </div>
    </section>
  );
}
