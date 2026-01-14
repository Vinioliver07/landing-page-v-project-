
import React from 'react';

export const CodeTerminal: React.FC = () => (
  <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full max-w-lg relative z-10">
    <div className="bg-white/5 px-6 py-4 flex items-center space-x-2 border-b border-white/5">
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
      </div>
      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-4">vproject.config.ts</span>
    </div>
    <div className="p-8 font-mono text-sm leading-7">
      <p className="text-purple-400">export const <span className="text-cyan-400">Solution</span> = {'{'}</p>
      <p className="pl-6 text-zinc-500"><span className="text-emerald-400">performance</span>: "MAX_GRADE",</p>
      <p className="pl-6 text-zinc-500"><span className="text-emerald-400">cleanCode</span>: true,</p>
      <p className="pl-6 text-zinc-500"><span className="text-emerald-400">customDesign</span>: true,</p>
      <p className="pl-6 text-zinc-500"><span className="text-emerald-400">roiFocused</span>: true</p>
      <p className="text-purple-400">{'}'};</p>
      <div className="mt-6 flex items-center">
        <span className="text-cyan-500 animate-pulse">_</span>
      </div>
    </div>
  </div>
);
