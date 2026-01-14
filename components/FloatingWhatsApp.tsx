
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Estendendo a interface Window para o DataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const WHATSAPP_NUMBER = "5511999999999"; 

interface ProjectOption {
  label: string;
  message: string;
  id: string;
}

const OPTIONS: ProjectOption[] = [
  { id: 'lp', label: 'Landing Page', message: 'Olá Vinícius, tenho interesse em uma Landing Page de alta conversão.' },
  { id: 'ecommerce', label: 'E-commerce', message: 'Olá Vinícius, gostaria de orçar um E-commerce robusto para meu negócio.' },
  { id: 'institutional', label: 'Site Institucional', message: 'Olá Vinícius, preciso de um site institucional de autoridade para minha empresa.' },
  { id: 'other', label: 'Outro Projeto', message: 'Olá Vinícius, gostaria de conversar sobre uma solução digital personalizada.' },
];

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função de sanitização para evitar injeção de scripts (XSS)
  const sanitizeInput = (str: string): string => {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m] || m));
  };

  const trackEvent = (option: ProjectOption) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_conversion',
        event_category: 'Lead Generation',
        event_label: sanitizeInput(option.label),
        project_type: option.id,
        value: 0
      });
    }
  };

  const handleOptionClick = (option: ProjectOption) => {
    trackEvent(option);
    // Sanitizamos a mensagem antes de codificar para a URL
    const cleanMessage = sanitizeInput(option.message);
    const encodedMessage = encodeURIComponent(cleanMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer'); // 'noopener,noreferrer' é essencial para segurança
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-72 glass p-6 rounded-[2rem] border-white/10 shadow-2xl relative"
          >
            <div className="absolute -bottom-2 right-8 w-4 h-4 glass rotate-45 border-t-0 border-l-0"></div>
            
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              // sobre_qual_projeto?
            </p>
            
            <div className="space-y-2">
              {OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all text-sm font-medium group"
                >
                  <span className="group-hover:text-cyan-400 transition-colors">{option.label}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-[10px] font-mono text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-tighter"
            >
              [ fechar_menu ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl pointer-events-none"
            >
              Vamos estruturar seu projeto? 🚀
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          id="whatsapp-trigger"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-5 rounded-[2rem] shadow-2xl transition-all duration-500 flex items-center justify-center ${
            isOpen ? 'bg-zinc-800 text-cyan-400 rotate-90' : 'bg-emerald-500 text-white shadow-[0_20px_50px_rgba(16,185,129,0.3)]'
          }`}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  );
};
