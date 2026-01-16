
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center font-black text-black font-outfit text-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            V
          </div>
          <span className="text-xl font-black font-outfit tracking-tighter">PROJECT</span>
        </div>

        <div className="hidden md:flex items-center space-x-12 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
          <a href="#solutions" className="hover:text-cyan-400 transition-colors">/soluções</a>
          <a href="#why" className="hover:text-cyan-400 transition-colors">/autoridade</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">/cases</a>
          <a href="https://wa.me/5537996704294" target="_blank" className="text-cyan-400 font-bold border-b border-cyan-500/30 pb-1 hover:border-cyan-500 transition-all">
            FALAR_COM_VINICIUS
          </a>
        </div>
      </div>
    </nav>
  );
};
