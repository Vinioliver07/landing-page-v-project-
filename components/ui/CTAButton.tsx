
import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, href, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-widest";
  
  const variants = {
    primary: "bg-cyan-500 text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]",
    secondary: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
    ghost: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black"
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Component 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};
