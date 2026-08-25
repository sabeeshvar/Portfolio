import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Zap, ShieldCheck } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING HARDWARE CORE...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next > 30 && next < 60) {
          setStatusText('CONNECTING SENSOR ARRAYS & AI ENGINES...');
        } else if (next >= 60 && next < 90) {
          setStatusText('LOADING DIGITAL ENGINEERING LAB...');
        } else if (next >= 90) {
          setStatusText('SYSTEM ONLINE // READY.');
        }
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#090D14] flex flex-col items-center justify-center p-6 text-white font-mono circuit-grid-pattern">
      <div className="relative flex flex-col items-center max-w-md w-full glass-panel p-8 rounded-2xl border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)]">
        {/* Animated Central Reactor Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/40 animate-pulse">
            <Cpu className="w-8 h-8 text-[#00F0FF] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <div className="absolute -inset-2 rounded-full border border-[#B026FF]/30 animate-radar" />
        </div>

        <h1 className="text-xl font-bold tracking-wider font-orbitron text-center mb-1 text-white">
          SABEESHVAR M.
        </h1>
        <p className="text-xs text-[#00F0FF] tracking-widest uppercase mb-6 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#39FF14]" />
          Digital Engineering Lab
        </p>

        {/* Status Line */}
        <div className="w-full bg-[#0D1117] p-2.5 rounded-lg border border-white/10 mb-4 flex items-center justify-between text-xs text-gray-300">
          <span className="flex items-center gap-2 truncate text-[#00F0FF]">
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            {statusText}
          </span>
          <span className="font-bold text-[#39FF14] ml-2 shrink-0">{progress}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#0D1117] h-2 rounded-full overflow-hidden border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-[#00F0FF] via-[#B026FF] to-[#39FF14] transition-all duration-200 shadow-[0_0_10px_#00F0FF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#39FF14]" />
          System Status: Operational • VSB ECE Department
        </div>
      </div>
    </div>
  );
}
