
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import { CTAButton } from './ui/CTAButton';

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Ajusta a quantidade de itens visíveis com base na largura da tela
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, PORTFOLIO.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  return (
    <section id="portfolio" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-mono text-sm uppercase tracking-[0.4em] mb-4 block">/portfolio_cases</span>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter mb-10">Projetos em Produção</h2>
          <CTAButton variant="secondary" href="#portfolio">Veja todos os cases</CTAButton>
        </motion.div>

        <div className="relative group">
          {/* Navegação - Setas */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-4 rounded-full glass border-white/5 text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Projeto Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-4 rounded-full glass border-white/5 text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Próximo Projeto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Container do Carrossel */}
          <div className="overflow-visible md:overflow-hidden px-2 md:px-0">
            <motion.div
              className="flex gap-6 lg:gap-10"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(PORTFOLIO.length / itemsPerPage) * 100}%` }}
            >
              {PORTFOLIO.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-full"
                  style={{ flex: `0 0 ${100 / PORTFOLIO.length}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-8 glass border-white/5 bg-zinc-900 shadow-2xl">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100 bg-zinc-800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                      <div className="absolute bottom-10 left-10 right-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.category}</p>
                        <h3 className="text-2xl font-bold font-outfit text-white">{item.title}</h3>
                        <p className="text-zinc-400 text-xs mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicadores de Página */}
          <div className="flex justify-center mt-16 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-cyan-500' : 'w-3 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
