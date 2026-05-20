import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: '聖之境', id: 'home', path: '/' },
    { name: '幻之跡', id: 'portfolio', path: '/portfolio' },
    { name: '序之曲', id: 'process', path: '/' },
    { name: '譽之光', id: 'awards', path: '/awards' },
    { name: '創之域', id: 'tools', path: '/' },
    { name: '聯之契', id: 'contact', path: '/' },
  ];

  const handleNavClick = (path: string, id: string) => {
    if (location.pathname === path) {
      if (id === 'home' && path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      // Wait for navigation and then scroll if it's a section on home
      if (path === '/' && id !== 'home') {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 px-8 pt-[25px] pb-6 flex justify-between items-center mix-blend-difference"
    >
      <motion.div 
        whileHover={{ scale: 1.1, x: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="text-xl font-serif tracking-[0.2em] text-champagne-gold cursor-pointer" 
        onClick={() => handleNavClick('/', 'home')}
      >
        SHENG DESIGN
      </motion.div>
      <div className="flex space-x-12">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ y: -2, color: '#D4AF37' }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleNavClick(item.path, item.id)}
            className={cn(
              "text-xs uppercase tracking-[0.3em] transition-colors duration-300",
              (location.pathname === item.path && item.path !== '/') || (location.pathname === '/' && item.path === '/') 
                ? "text-champagne-gold" 
                : "text-velvet-gray"
            )}
          >
            {item.name}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
