import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Awards from './components/Awards';
import StudioTool from './components/StudioTool';
import Contact from './components/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative bg-rock-black min-h-screen selection:bg-champagne-gold selection:text-rock-black">
      <ScrollToTop />
      
      {/* Custom Cursor */}
      <motion.div 
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-8 h-8 border border-champagne-gold rounded-full z-[100] pointer-events-none mix-blend-difference hidden md:block"
      />
      <motion.div 
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 35, stiffness: 300, mass: 0.2 }}
        className="fixed top-0 left-0 w-2 h-2 bg-champagne-gold rounded-full z-[100] pointer-events-none mix-blend-difference hidden md:block"
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-rock-black flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl font-serif tracking-[0.5em] text-champagne-gold mb-4"
            >
              SHENG DESIGN
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-champagne-gold/30 w-24"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
                <Process />
                <StudioTool />
                <Contact />
              </motion.div>
            } />
            <Route path="/portfolio" element={
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="pt-24"
              >
                <Portfolio />
              </motion.div>
            } />
            <Route path="/awards" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="pt-24"
              >
                <Awards />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-12 border-t border-white/5 bg-[#0A0A0A] relative z-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] text-white/20 uppercase font-serif">
          <div className="flex items-center gap-4">
            <span>© SHENG DESIGN. WABI-SABI AESTHETICS.</span>
          </div>
          
          <div className="flex items-center gap-12">
            <a 
              href="https://www.instagram.com/sheng__d?igsh=bDdsbTE3ZjkwM3Bm&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM</span>
            </a>
            <a 
              href="https://www.facebook.com/share/1JTs9Vvzr7/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>FACEBOOK</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>22.6548° N, 120.2848° E</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
