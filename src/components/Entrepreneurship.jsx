import React, { useState } from 'react';
import { Rocket, Cpu, Brain, Wifi, Sprout, Lightbulb, Zap, ShieldAlert, ChevronRight } from 'lucide-react';

export default function Entrepreneurship() {
  const [activeCoreNode, setActiveCoreNode] = useState(null);

  const coreSatellites = [
    {
      id: 'electronics',
      label: 'ELECTRONICS',
      icon: Cpu,
      color: '#00F0FF',
      role: 'Circuit design, sensor arrays, voltage telemetry & microelectronics.',
    },
    {
      id: 'ai',
      label: 'AI INTELLIGENCE',
      icon: Brain,
      color: '#B026FF',
      role: 'Predictive data models, computer vision pathogen diagnosis & decision advisories.',
    },
    {
      id: 'embedded',
      label: 'EMBEDDED SYSTEMS',
      icon: Zap,
      color: '#39FF14',
      role: 'Firmware development, microcontroller actuation & hardware control loops.',
    },
    {
      id: 'iot',
      label: 'IoT NETWORKS',
      icon: Wifi,
      color: '#FF2D95',
      role: 'Wireless telemetry, cloud synchronization & remote sensor monitoring.',
    },
    {
      id: 'agriculture',
      label: 'SMART AGRICULTURE',
      icon: Sprout,
      color: '#2E7D32',
      role: 'AgroPulse & HarvestIQ ecosystems helping farmers achieve maximum crop yields.',
    },
    {
      id: 'innovation',
      label: 'ENTREPRENEURSHIP',
      icon: Lightbulb,
      color: '#FFB800',
      role: 'Creating scalable, practical technology-driven solutions to solve real-world problems.',
    },
  ];

  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF2D95]/30 text-xs font-mono text-[#FF2D95] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D95]" />
          <span>SECTION // 08 • ENTREPRENEURIAL VISION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          BUILDING BEYOND <span className="text-[#FF2D95] glow-text-purple">CODE</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF2D95] via-[#B026FF] to-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* Vision Statement Quote */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#FF2D95]/30 shadow-[0_0_40px_rgba(255,45,149,0.15)] mb-14 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#FF2D95]" />

        <blockquote className="text-xl sm:text-2xl font-space font-bold text-white mb-4 leading-relaxed">
          "I don't want to build technology just for the sake of building projects. My goal is to create practical solutions that solve real problems and eventually build my own technology-driven company."
        </blockquote>

        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          — SABEESHVAR M. • FUTURE TECH ENTREPRENEUR
        </p>
      </div>

      {/* Central IDEA CORE Interactive Visual */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="text-center mb-8 font-mono text-xs text-gray-400">
          <span className="text-[#00F0FF] font-bold">INTERACTIVE IDEA CORE:</span> Click or hover satellite nodes to illuminate entrepreneurial connections.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSatellites.map((satellite) => {
            const Icon = satellite.icon;
            const isHovered = activeCoreNode?.id === satellite.id;

            return (
              <div
                key={satellite.id}
                onMouseEnter={() => setActiveCoreNode(satellite)}
                onClick={() => setActiveCoreNode(isHovered ? null : satellite)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative group overflow-hidden ${
                  isHovered
                    ? 'border-[#00F0FF] bg-[#111724] shadow-[0_0_25px_rgba(0,240,255,0.25)] scale-105'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${satellite.color}15`,
                      borderColor: `${satellite.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: satellite.color }} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">SATELLITE NODE</span>
                </div>

                <h3 className="text-base font-bold font-orbitron text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {satellite.label}
                </h3>

                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {satellite.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Core Focus Detail */}
        {activeCoreNode && (
          <div className="mt-8 p-6 rounded-2xl bg-[#090D14] border border-[#00F0FF]/40 font-mono text-xs text-gray-200 animate-fadeIn">
            <div className="flex items-center gap-2 text-[#00F0FF] font-bold mb-2">
              <Zap className="w-4 h-4 text-[#39FF14]" />
              <span>CORE INTEGRATION POINT: {activeCoreNode.label}</span>
            </div>
            <p className="text-gray-300 font-sans">{activeCoreNode.role}</p>
          </div>
        )}
      </div>
    </section>
  );
}
