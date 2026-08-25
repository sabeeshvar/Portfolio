import React from 'react';
import { Brain, Cpu, Wifi, Layers, Globe, BarChart2, Sprout, Zap, Sparkles } from 'lucide-react';

export default function CurrentlyExploring() {
  const items = [
    { name: 'Artificial Intelligence', icon: Brain, color: '#00F0FF', desc: 'Deep learning & vision algorithms' },
    { name: 'Embedded Systems', icon: Cpu, color: '#39FF14', desc: 'Real-time firmware & microcontrollers' },
    { name: 'IoT Networks', icon: Wifi, color: '#B026FF', desc: 'Wireless sensor telemetry streams' },
    { name: 'VLSI Circuits', icon: Layers, color: '#FF2D95', desc: 'Semiconductor architecture concepts' },
    { name: 'Web Development', icon: Globe, color: '#61DAFB', desc: 'Modern responsive dashboards' },
    { name: 'Data Analysis', icon: BarChart2, color: '#FFB800', desc: 'Statistical telemetry extraction' },
    { name: 'Smart Agriculture', icon: Sprout, color: '#2E7D32', desc: 'Closed-loop automated farming' },
    { name: 'Advanced Electronics', icon: Zap, color: '#00F0FF', desc: 'Signal processing & circuit design' },
  ];

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
          <span>ACTIVE RESEARCH RADAR</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-orbitron text-white tracking-tight uppercase">
          CURRENTLY <span className="text-[#00F0FF] glow-text-cyan">EXPLORING</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 border transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}40`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="text-sm font-bold font-orbitron text-white group-hover:text-[#00F0FF] transition-colors mb-1">
                {item.name}
              </h3>
              <p className="text-[11px] font-mono text-gray-400">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
