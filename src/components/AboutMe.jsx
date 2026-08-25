import React, { useState } from 'react';
import { Cpu, Brain, Microchip, Lightbulb, ChevronRight } from 'lucide-react';

export default function AboutMe() {
  const [activeCard, setActiveCard] = useState('electronics');

  const cards = [
    {
      id: 'electronics',
      title: 'ELECTRONICS',
      icon: Cpu,
      tagline: 'Hardware Design & Communication',
      details: [
        'Analog & Digital Circuit Fundamentals',
        'VLSI Concepts & Microelectronics',
        'Communication Systems & Telecom (BSNL Trained)',
        'Signal Processing & Sensor Integration',
      ],
    },
    {
      id: 'ai',
      title: 'ARTIFICIAL INTELLIGENCE',
      icon: Brain,
      tagline: 'Data Intelligence & Vision Models',
      details: [
        'Python & Machine Learning Foundations',
        'Data Analysis & Predictive Modeling',
        'Isolation Forest Anomaly Detection',
        'Random Forest Risk Classification',
      ],
    },
    {
      id: 'embedded',
      title: 'EMBEDDED SYSTEMS',
      icon: Microchip,
      tagline: 'Microcontrollers & IoT Arrays',
      details: [
        'ESP32 & Arduino Firmware Prototyping',
        'Real-time Sensor Data Acquisition',
        'A7670C 4G Telemetry & Cellular Protocols',
        'Closed-Loop Actuation & Automation',
      ],
    },
    {
      id: 'innovation',
      title: 'INNOVATION & STARTUP',
      icon: Lightbulb,
      tagline: 'Problem Solving & Entrepreneurship',
      details: [
        'THULIR SIH 2026 Mine Subsidence Monitoring System',
        'AgroPulse & HarvestIQ Smart Farming Platforms',
        'Smart India Hackathon (SIH) Participant',
        'Liro 2026 Innovation Challenge Participant',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 01</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          THE ENGINEER BEHIND THE <span className="text-[#00F0FF] glow-text-cyan">IDEAS</span>
        </h2>
        <div className="w-24 h-1 bg-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Bio */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none" />

            <h3 className="text-xl font-bold font-space text-white mb-4 flex items-center gap-2">
              <span className="text-[#00F0FF]">M. Sabeeshvar</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                5th Sem ECE
              </span>
            </h3>

            <p className="text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-4">
              I am an Electronics & Communication Engineering undergraduate at VSB Engineering College in Tamil Nadu, India. My core passion lies at the convergence of physical hardware circuits, embedded microcontrollers, and modern artificial intelligence.
            </p>

            <p className="text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-6">
              Rather than viewing software and hardware as isolated silos, I bridge the gap by building end-to-end intelligent systems — from soldering sensor nodes to training data models and deploying farmer and mine-safety web dashboards.
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-gray-300 pt-4 border-t border-white/10">
              <div>
                <span className="text-gray-500 block">INSTITUTION</span>
                <span className="font-semibold text-white">VSB Engineering College</span>
              </div>
              <div>
                <span className="text-gray-500 block">DEPARTMENT</span>
                <span className="font-semibold text-[#00F0FF]">ECE (Sem 5)</span>
              </div>
              <div>
                <span className="text-gray-500 block">ACADEMIC STANDING</span>
                <span className="font-semibold text-[#00F0FF]">8.0 CGPA</span>
              </div>
              <div>
                <span className="text-gray-500 block">GRADUATION</span>
                <span className="font-semibold text-white">Class of 2028</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 4-Card Cyber Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={`glass-panel p-6 rounded-2xl cursor-pointer transition-all duration-300 relative group overflow-hidden border ${
                  isSelected
                    ? 'border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)] bg-[#111726]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 bg-[#00F0FF]/10 border-[#00F0FF]/30">
                    <Icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">
                    [ INTERACTIVE ]
                  </span>
                </div>

                <h4 className="text-base font-bold font-orbitron text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs font-mono text-gray-400 mb-4">{card.tagline}</p>

                <ul className="space-y-2 text-xs text-gray-300 font-sans">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#00F0FF]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
