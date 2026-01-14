
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CTAButton } from './ui/CTAButton';
import { CodeTerminal } from './ui/CodeTerminal';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  
  // Captura o progresso do scroll especificamente para esta seção
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Transformações parallax sutis
  // O texto sobe mais devagar que o terminal, criando profundidade
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const terminalY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden tech-gradient"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ y: textY, opacity }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="font-mono text-cyan-500 text-sm mb-6 flex items-center">
            <span className="opacity-50 mr-2">01.</span>
            <span>import { '{ Performance }' } from 'v-project'</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-outfit leading-[1.1] mb-8 tracking-tighter">
            Transforme sua visão em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Autoridade Digital.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light">
            Construímos ativos digitais de alta performance onde a engenharia de ponta encontra o design estratégico para acelerar seu faturamento.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <CTAButton href="https://wa.me/your-number">Bora estruturar seu projeto?</CTAButton>
            <CTAButton variant="secondary" href="#portfolio">Conhecer o trabalho</CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: terminalY }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group z-0"
        >
          {/* Efeito de brilho de fundo que também reage ao scroll de forma suave */}
          <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
            className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"
          ></motion.div>
          <CodeTerminal />
        </motion.div>
      </div>

      {/* Indicador visual de scroll para guiar o usuário */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
