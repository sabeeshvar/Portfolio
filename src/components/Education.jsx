import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      degree: 'B.E. Electronics & Communication Engineering',
      institution: 'VSB Engineering College',
      status: 'Current Undergrad • 5th Semester',
      metrics: 'CGPA: 8.0 / 10.0',
      period: '2024 — 2028 (Expected)',
      location: 'Tamil Nadu, India',
      details: [
        'Core Specialization: ESP32, IoT Sensors, 4G Cellular Telemetry, VLSI, and Artificial Intelligence.',
        'Active member of the Electronics Club & collegiate technical symposium participant.',
        'Developing THULIR (SIH 2026 Mine Subsidence Warning) and AgroPulse Smart Agriculture Systems.',
      ],
    },
    {
      degree: 'Class 12 (Higher Secondary Certificate)',
      institution: 'Veveaham Matric Hr. Sec. School',
      status: 'HSC Passed',
      metrics: 'Scored: 81.33%',
      period: 'Completed',
      location: 'Tamil Nadu, India',
      details: [
        'Advanced Mathematics, Physics, Chemistry, and Computer Science foundation.',
        'Achieved 81.33% aggregate score demonstrating analytical academic excellence.',
      ],
    },
    {
      degree: 'Class 10 (SSLC Examination)',
      institution: 'Thebmalar Matric Hr. Sec. School',
      status: 'SSLC Passed',
      metrics: 'Scored: 81.33%',
      period: 'Completed',
      location: 'Tamil Nadu, India',
      details: [
        'Strong foundational grounding in Science, Mathematics, and Technology basics.',
        'Consistently rated top tier performer with 81.33% score.',
      ],
    },
  ];

  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          ACADEMIC <span className="text-[#00F0FF] glow-text-cyan">TIMELINE</span>
        </h2>
        <div className="w-24 h-1 bg-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090D14] border-2 border-[#00F0FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
            </div>

            {/* Glass Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <span className="px-3 py-1 rounded-md font-mono text-xs font-bold border bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]">
                  {item.status}
                </span>

                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-[#00F0FF] font-bold">
                    <Award className="w-3.5 h-3.5" />
                    {item.metrics}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-space text-white mb-1">
                {item.degree}
              </h3>
              <p className="text-sm font-mono text-gray-300 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#00F0FF]" />
                <span>{item.institution}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans pt-3 border-t border-white/10">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
