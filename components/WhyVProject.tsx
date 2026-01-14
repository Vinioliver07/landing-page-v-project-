
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

export const WhyVProject: React.FC = () => {
  return (
    <section id="why" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6">/technical_manifesto</h2>
            <h3 className="text-5xl md:text-7xl font-bold font-outfit mb-10 tracking-tighter">Onde a performance encontra o faturamento.</h3>
            <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-lg">
              Minha engenharia não se limita ao visual. Construo arquiteturas escaláveis em <strong>Next.js</strong> e <strong>Tailwind</strong>, focadas no carregamento instantâneo e na conversão do usuário.
            </p>
            
            <div className="flex gap-8 items-center border-t border-white/5 pt-12">
              <div className="text-center">
                <span className="block text-4xl font-bold font-outfit text-cyan-500">100</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">PageSpeedScore</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold font-outfit text-emerald-500">∞</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Uptime Ready</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl flex items-start space-x-6 hover:bg-white/5 transition-all group border-white/5"
              >
                <div className="text-3xl p-4 bg-zinc-900 rounded-2xl group-hover:text-cyan-400 transition-colors duration-500">
                  {feat.icon}
                </div>
                <div>
                  <h5 className="text-xl font-bold font-outfit mb-2">{feat.title}</h5>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
