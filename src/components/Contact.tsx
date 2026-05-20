import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Copy, Check, ExternalLink, Send } from 'lucide-react';

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `聖設計：來自 ${formState.name} 的空間規劃需求`,
            from_name: "聖設計網站",
            name: formState.name,
            phone: formState.phone || '未提供',
            "LINE ID": formState.email,
            projectType: formState.projectType === 'residential' ? '住宅空間' : formState.projectType === 'villa' ? '獨棟豪墅' : '商業空間',
            message: formState.message
          })
        });

        const data = await response.json();
        if (data.success) {
          setIsSuccess(true);
          setFormState({
            name: '',
            phone: '',
            email: '',
            projectType: 'residential',
            message: ''
          });
        } else {
          setErrorMessage(data.message || '傳送失敗，請稍後再試，或使用 LINE 與我們聯繫。');
        }
      } catch (error) {
        console.error('Error submitting form', error);
        setErrorMessage('傳送發生錯誤，請檢查您的網路連接，或透過 LINE 立即與我們諮詢。');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulation / Fallback mode when VITE_WEB3FORMS_ACCESS_KEY is not defined
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        console.log('模擬傳送表單資料:', formState);
        setFormState({
          name: '',
          phone: '',
          email: '',
          projectType: 'residential',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 8000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative bg-rock-black py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Decorative ultra-premium background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] filter blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(191,163,126,0.07)_0%,transparent_70%)] filter blur-3xl" />
        
        {/* Architectural subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Soft elegant horizontal gold separator */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-champagne-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Title & Concept Header - Redesigned to be extremely high-end & editorial */}
        <div className="text-center space-y-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-1.5 h-[1px] bg-champagne-gold/40" />
            <p className="text-[10px] tracking-[0.5em] text-gold-muted uppercase font-sans font-semibold">
              SECURE CONSULTATION
            </p>
            <span className="w-1.5 h-[1px] bg-champagne-gold/40" />
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              className="text-5xl md:text-6xl font-serif text-white tracking-[0.35em] uppercase font-light leading-tight"
            >
              聯 <span className="text-champagne-gold/90 font-serif italic tracking-[0.2em] font-light">之</span> 契
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[9px] font-mono tracking-[0.3em] uppercase text-white"
            >
              — ARCHITECTURAL SPACE ARCHIVE & INQUIRY —
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "160px" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.3 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-champagne-gold/40 to-transparent mx-auto pt-1"
          />
        </div>

        {/* Content Bento Grid - Dynamic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Column 1: Info & LINE (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            
            {/* Studio Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.25)", boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)" }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="flex-1 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 space-y-10 transition-all duration-500 bg-[#0d0d0d]/80 relative overflow-hidden"
            >
              {/* Premium Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-champagne-gold/40 to-transparent" />
              
              <div className="space-y-3">
                <span className="text-[9px] tracking-[0.3em] font-mono text-gold-muted/80 uppercase">BRAND HEADQUARTERS</span>
                <h3 className="text-2xl font-serif tracking-[0.2em] text-white font-medium flex items-center gap-2">
                  聖設計團隊
                </h3>
                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-mono">Sheng Design Studio</p>
              </div>

              {/* Classic contact links */}
              <div className="space-y-8 text-sm">
                
                {/* Location */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-champagne-gold/40 text-champagne-gold/60 group-hover:text-champagne-gold transition-all duration-300 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <p className="font-light tracking-widest text-white/95 text-xs text-gold-muted uppercase font-mono">STUDIO LOCATION</p>
                    <p className="text-sm text-white/80 leading-relaxed font-light font-sans">
                      高雄市美術南三路317號
                    </p>
                    <div className="text-[10px] text-white/35 tracking-widest flex items-center gap-1.5 font-mono mt-1">
                      <span className="inline-block w-1 h-1 rounded-full bg-champagne-gold/60" />
                      <span>22.6548° N, 120.2848° E</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.a 
                  whileHover={{ scale: 1.01, x: 6 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  href="tel:+886956760609" 
                  className="flex items-start gap-5 group cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-champagne-gold/40 text-champagne-gold/60 group-hover:text-champagne-gold transition-all duration-300 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1 pt-1.5">
                    <p className="font-light tracking-widest text-white/95 text-xs text-gold-muted uppercase font-mono">DIRECT INQUIRY</p>
                    <p className="text-base text-white hover:text-champagne-gold transition-colors font-mono tracking-wider">
                      0956760609
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider">點按立即撥打電話諮詢 / Tap to Call</p>
                  </div>
                </motion.a>

                {/* Service Hours */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-champagne-gold/60 shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <p className="font-light tracking-widest text-white/95 text-xs text-gold-muted uppercase font-mono">SERVICE HOURS</p>
                    <p className="text-sm text-white/80 leading-relaxed font-light">
                      週一 至 週五 09:30 - 18:30 <span className="text-xs text-white/40 block sm:inline sm:ml-2">(國定假日公休)</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* LINE Dedicated Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: "rgba(34,197,94,0.35)", boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)" }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
              className="bg-gradient-to-br from-green-950/20 to-[#050b07] glass-panel p-8 rounded-3xl border border-green-500/10 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden"
            >
              {/* Subtle line background element */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-green-500/5 filter blur-2xl pointer-events-none" />

              {/* Stylized QR Code Frame */}
              <motion.a 
                whileHover={{ scale: 1.06, rotate: -0.5, boxShadow: "0 0 30px rgba(34,197,94,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                href="https://lin.ee/Rt0udQe"
                target="_blank"
                rel="noopener noreferrer"
                title="點擊前往 LINE 官方帳號"
                className="relative w-32 h-32 bg-[#090d0b]/90 p-3 rounded-2xl border border-green-500/20 hover:border-green-400 flex items-center justify-center shrink-0 transition-colors duration-400 group/qr shadow-inner"
              >
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500/60" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500/60" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-green-500/60" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500/60" />
                
                {/* Real Scannable QR Code */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Flin.ee%2FRt0udQe&color=22c55e&bgcolor=0c140f" 
                  alt="LINE QR Code" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </motion.a>

              {/* LINE CTA info */}
              <div className="space-y-4 text-center sm:text-left flex-1 w-full">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] tracking-[0.2em] text-green-400 uppercase font-mono font-medium">
                    <MessageSquare className="w-3 h-3" /> OFFICIAL LINE
                  </div>
                  <h4 className="text-lg font-serif text-white tracking-[0.1em] mt-1.5 font-light">線 上 即 時 諮 詢</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    加好友預約現場諮詢或索取規劃案例簡報
                  </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 14 }}
                    onClick={() => handleCopy('@339xitiz', 'line')}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider flex items-center justify-center gap-2 outline-none text-white/80 transition-all hover:text-white"
                  >
                    {copiedId === 'line' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-medium font-sans">ID已複製</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/30" />
                        <span>ID: @339xitiz</span>
                      </>
                    )}
                  </motion.button>
                  
                  <motion.a 
                    whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 25px rgba(34,197,94,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 350, damping: 13 }}
                    href="https://lin.ee/Rt0udQe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-black text-[11px] font-semibold tracking-widest flex items-center justify-center gap-1.5 duration-300"
                  >
                    <span>加入好友</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Pure Architect Reservation Web Form (7 cols) */}
          <div className="lg:col-span-7 flex">
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgba(212,175,55,0.22)", boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)" }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.15 }}
              className="flex-1 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 transition-all duration-500 bg-[#0d0d0d]/80 relative overflow-hidden flex flex-col"
            >
              {/* Luxury gold top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-champagne-gold/50 to-transparent" />
              
              <div className="mb-10 space-y-3">
                <span className="text-[9px] tracking-[0.3em] font-mono text-gold-muted/80 uppercase">RESERVATION FORM</span>
                <h3 className="text-2xl font-serif tracking-[0.2em] text-[#F3F4F6] font-light">
                  預約現場空間規劃
                </h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  若有室內設計、老屋改造、獨棟別墅等空間規劃需求，精緻填寫以下要儀檔案，我們將由資深總監親自為您量身對談。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input - Architecture Style under line animation */}
                    <div className="space-y-2 relative group-input">
                      <label className="text-[9px] tracking-[0.25em] text-gold-muted uppercase font-semibold block">
                        您的姓名 (NAME) *
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="陳先生 / 廖小姐"
                          className="w-full bg-white/[0.01] border-b border-white/10 hover:border-white/30 focus:border-champagne-gold/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-white/10 rounded-t-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne-gold transition-all duration-300 focus-within:w-full" />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-2 relative group-input">
                      <label className="text-[9px] tracking-[0.25em] text-gold-muted uppercase font-semibold block">
                        聯絡電話 (PHONE)
                      </label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                          placeholder="0912-345-678"
                          className="w-full bg-white/[0.01] border-b border-white/10 hover:border-white/30 focus:border-champagne-gold/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-white/10 rounded-t-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* LINE ID Input */}
                  <div className="space-y-2 relative group-input">
                    <label className="text-[9px] tracking-[0.25em] text-gold-muted uppercase font-semibold block">
                      LINE ID *
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="請輸入您的 LINE ID (例如 @339xitiz)"
                        className="w-full bg-white/[0.01] border-b border-white/10 hover:border-white/30 focus:border-champagne-gold/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-white/10 rounded-t-lg"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-3.5">
                    <label className="text-[9px] tracking-[0.25em] text-gold-muted uppercase font-semibold block">
                      規劃類型 (PROJECT TYPE)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'residential', label: '住宅空間' },
                        { id: 'villa', label: '獨棟豪墅' },
                        { id: 'commercial', label: '商業空間' }
                      ].map((type) => {
                        const isSelected = formState.projectType === type.id;
                        return (
                          <motion.button
                            key={type.id}
                            type="button"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            onClick={() => setFormState({...formState, projectType: type.id})}
                            className={`py-3 px-2 rounded-xl border text-[11px] tracking-widest transition-all duration-300 outline-none font-medium relative ${
                              isSelected 
                                ? 'border-champagne-gold/50 bg-champagne-gold/10 text-champagne-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                                : 'border-white/10 bg-white/[0.01] text-white/50 hover:border-white/20 hover:text-white/80'
                            }`}
                          >
                            {isSelected && (
                              <motion.span
                                layoutId="activeTypeGlow"
                                className="absolute inset-0 rounded-xl border border-champagne-gold/40 pointer-events-none"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                            {type.label}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-[0.25em] text-gold-muted uppercase font-semibold block">
                      需求描述 (PROJECT HIGHLIGHTS) *
                    </label>
                    <div className="relative">
                      <textarea 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="請簡述您的案件地點、屋況、格局需求及理想預算..."
                        className="w-full bg-white/[0.01] border border-white/10 hover:border-white/20 focus:border-champagne-gold/80 rounded-2xl px-5 py-4 text-sm outline-none transition-all placeholder:text-white/10 resize-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button with layout line frame */}
                <div className="pt-6 border-t border-white/5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Subtle security notifier */}
                  <div className="text-[10px] text-white/30 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
                    <span>聖規劃團隊將於 24 小時內與您聯繫</span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 35px rgba(212,175,55,0.25)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 350, damping: 14 }}
                    className="relative overflow-hidden px-10 py-3.5 rounded-full bg-champagne-gold hover:bg-amber-400 text-black text-[11px] font-bold tracking-[0.25em] flex items-center gap-2 shadow-lg disabled:opacity-50 shrink-0 duration-300 cursor-pointer outline-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>檔案送出中...</span>
                      </>
                    ) : (
                      <>
                        <span>送出空間規劃需求</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Success Notification overlay inside the card with motion */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    className="absolute inset-0 bg-[#080808]/98 backdrop-blur-md flex flex-col items-center justify-center p-10 text-center rounded-3xl z-20"
                  >
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold mb-8 shadow-inner"
                    >
                      <Check className="w-10 h-10" />
                    </motion.div>
                    
                    {(import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY ? (
                      <div className="space-y-4">
                        <h4 className="text-2xl font-serif text-white tracking-widest leading-normal">您的規劃需求已安全送出</h4>
                        <p className="text-xs text-white/50 max-w-sm mx-auto leading-loose font-light">
                          感謝您的預約。我們已透過 Web3Forms 安全轉寄您的案件檔案至團隊郵箱。我們將於 24 小時內聯絡您，提供極緻卓越的空間對談。
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h4 className="text-xl font-serif text-white tracking-widest">【專用規劃系統傳送成功】</h4>
                        <p className="text-xs text-white/50 max-w-sm mx-auto leading-loose font-light">
                          專案已經完美集成了安全且強大的 <span className="text-champagne-gold">Web3Forms</span> 傳遞渠道。
                        </p>
                        <p className="text-[10px] text-white/35 max-w-xs mx-auto leading-normal border border-white/5 bg-white/[0.01] p-3 rounded-xl mt-3">
                          只要在系統加入您的免費 API Access Key，客戶所有的專案檔案就將隨時<strong className="text-green-400">一秒鐘直達您的 Gmail 郵箱</strong>！
                        </p>
                      </div>
                    )}
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 350, damping: 15 }}
                      onClick={() => setIsSuccess(false)}
                      className="mt-10 text-[10px] tracking-[0.3em] text-champagne-gold uppercase hover:underline cursor-pointer outline-none font-bold"
                    >
                      確定 CONFIRM & CLOSE
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

        {/* Column 3: Redesigned Google Maps Integration (Full width below) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgba(212,175,55,0.22)", boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)" }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="w-full glass-panel p-4 md:p-6 rounded-3xl border border-white/5 shadow-2xl overflow-hidden group/map transition-all duration-500 bg-[#0d0d0d]/80"
        >
          {/* Header over map */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 px-4 md:px-6 py-4 border-b border-white/5 mb-4">
            <div className="space-y-1.5">
              <span className="text-[9px] tracking-[0.3em] text-champagne-gold font-mono block font-semibold">INTERACTIVE MAPS</span>
              <h4 className="text-base font-serif tracking-[0.1em] text-[#E5E5E5] flex items-center gap-2">
                <span>聖之境 空間設計規劃中心 (高雄美學基地)</span>
              </h4>
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.03, y: -1, boxShadow: "0 4px 15px rgba(212,175,55,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              href="https://maps.google.com/?q=22.6548,120.2848" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-champagne-gold/10 hover:text-champagne-gold border border-white/10 text-[10px] tracking-[0.2em] font-semibold uppercase flex items-center gap-2 transition-all duration-300 text-white/80"
            >
              <span>開啟外部安全地圖導航</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Map Frame wrapper with high-end editorial overlay */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 shadow-inner">
            {/* Embedded maps iframe representing the coordinates */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.4074218314125!2d120.2826113!3d22.6548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e045c71a396bb%3A0xc47b952a65fe09ef!2zODA06auY6ZuE5biC6byT5bGx5Y2A576O6KGT5Y2X5LiJ6LevMzE36Jmf!5e0!3m2!1szh-TW!2stw!4v1716300000000!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="grayscale brightness-[70%] contrast-[115%] opacity-80 group-hover/map:opacity-95 group-hover/map:grayscale-[20%] group-hover/map:brightness-[85%] transition-all duration-[1200ms] ease-out select-none"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
