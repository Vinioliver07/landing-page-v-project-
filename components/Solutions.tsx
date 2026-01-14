
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CTAButton } from './ui/CTAButton';

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 relative bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-cyan-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">// o_que_construímos</span>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter">Soluções para escala.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-10 rounded-[2.5rem] border-white/5 hover:border-cyan-500/20 transition-all duration-500 group flex flex-col justify-between
                ${service.id === 'ecommerce' ? 'lg:col-span-2 lg:flex-row lg:items-center bg-gradient-to-br from-zinc-900/50 to-cyan-500/5' : ''}
              `}
            >
              <div className={service.id === 'ecommerce' ? 'lg:max-w-md' : ''}>
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{service.icon}</div>
                <h4 className="text-2xl font-bold font-outfit mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.description}</p>
              </div>

              <div className={`${service.id === 'ecommerce' ? 'lg:w-72' : 'w-full'} mt-auto`}>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <CTAButton variant="ghost" className="w-full text-[10px] py-3" href="https://wa.me/your-number">
                  CONSULTAR DISPONIBILIDADE
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
