
import React from 'react';
import { CTAButton } from './ui/CTAButton';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-10 max-w-4xl leading-tight">
            Seu próximo nível digital começa com uma <span className="text-cyan-400 tracking-tighter italic">conversa estratégica</span>.
          </h2>
          <CTAButton href="https://wa.me/5537996704294">Vamos estruturar seu projeto?</CTAButton>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-cyan-400 font-outfit">V</div>
              <span className="text-lg font-bold font-outfit tracking-tighter">PROJECT</span>
            </div>
            <p className="text-zinc-600 text-[11px] font-mono uppercase tracking-widest">
              Engenhando ativos digitais de alto impacto <br /> © {new Date().getFullYear()} Vinícius de Oliveira
            </p>
          </div>

          <div className="flex space-x-12">
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Redes</span>
              <a href="#" className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors">GitHub</a>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Contato</span>
              <a href="mailto:contato@vproject.com" className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors">E-mail</a>
              <a href="https://wa.me/5537996704294" className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
