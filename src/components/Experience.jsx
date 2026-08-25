import React from 'react';
import { Briefcase, Radio, Cpu, Trophy, Activity, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'BSNL (Bharat Sanchar Nigam Limited)',
      role: 'Internship Experience',
      category: 'TELECOM & INDUSTRIAL TRAINING',
      icon: Radio,
      details: [
        'Gained direct industrial exposure to telecommunications infrastructure and data transmission systems.',
        'Studied network switching systems, optical fiber communications, and hardware exchange architecture.',
        'Observed industrial networking hardware maintenance and telecommunication protocol workflows.',
      ],
    },
    {
      company: 'MICROSUN Technology',
      role: 'Internship Experience',
      category: 'ELECTRONICS & INDUSTRIAL WORKFLOWS',
      icon: Cpu,
      details: [
        'Practical exposure to industrial technology workflows and real-world engineering practices.',
        'Observed electronic circuit manufacturing processes, hardware assembly, and product testing.',
        'Engaged with senior engineers on practical implementation of electronic components.',
      ],
    },
    {
      company: 'Smart India Hackathon (SIH 2026)',
      role: 'Participant & THULIR Lead',
      category: 'NATIONAL HACKATHON',
      icon: Trophy,
      details: [
        'Developing THULIR — AI-powered mine subsidence monitoring system for SIH 2026.',
        'Collaborated with student engineers to prototype hardware-software SIH solutions.',
      ],
    },
    {
      company: 'Liro 2026',
      role: 'Innovation Challenge Participant',
      category: 'ENGINEERING COMPETITION',
      icon: Activity,
      details: [
        'Engaged in regional technology & engineering innovation events.',
        'Demonstrated practical problem solving and engineering project prototypes.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 05</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          INDUSTRY <span className="text-[#00F0FF] glow-text-cyan">EXPOSURE</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2">
          Industrial internships, telecom training, and national engineering hackathons.
        </p>
        <div className="w-24 h-1 bg-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 bg-[#00F0FF]/10 border-[#00F0FF]/30">
                  <Icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]">
                  {exp.category}
                </span>
              </div>

              <h3 className="text-xl font-bold font-space text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                {exp.company}
              </h3>
              <h4 className="text-xs font-mono text-gray-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{exp.role}</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-sans border-t border-white/10 pt-4">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#00F0FF]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
