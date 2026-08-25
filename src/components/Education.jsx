import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      degree: 'B.E. Electronics & Communication Engineering',
      institution: 'VSB Engineering College',
      status: 'Current Undergrad • 4th Semester',
      metrics: 'CGPA: 7.8 / 10.0',
      period: '2024 — 2028 (Expected)',
      location: 'Tamil Nadu, India',
      color: '#00F0FF',
      details: [
        'Core Specialization: Embedded Systems, Sensors, VLSI, and Artificial Intelligence.',
        'Active member of the Electronics Club & collegiate technical symposium participant.',
        'Developing AgroPulse — Smart Agriculture System as Flagship ECE project.',
      ],
    },
    {
      degree: 'Class 12 (Higher Secondary Certificate)',
      institution: 'Veveaham Matric Hr. Sec. School',
      status: 'HSC Passed',
      metrics: 'Scored: 88.8%',
      period: 'Completed',
      location: 'Tamil Nadu, India',
      color: '#B026FF',
      details: [
        'Advanced Mathematics, Physics, Chemistry, and Computer Science foundation.',
        'Achieved 88.8% aggregate score demonstrating analytical academic excellence.',
      ],
    },
    {
      degree: 'Class 10 (SSLC Examination)',
      institution: 'Thebmalar Matric Hr. Sec. School',
      status: 'SSLC Passed',
      metrics: 'Scored: 88.8%',
      period: 'Completed',
      location: 'Tamil Nadu, India',
      color: '#39FF14',
      details: [
        'Strong foundational grounding in Science, Mathematics, and Technology basics.',
        'Consistently rated top tier performer with 88.8% score.',
      ],
    },
  ];

  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#B026FF]/30 text-xs font-mono text-[#B026FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B026FF]" />
          <span>SECTION // 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          ACADEMIC <span className="text-[#B026FF] glow-text-purple">TIMELINE</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#B026FF] to-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing Timeline Node */}
            <div
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090D14] border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
              style={{
                borderColor: item.color,
                boxShadow: `0 0 15px ${item.color}80`,
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            </div>

            {/* Glass Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <span
                  className="px-3 py-1 rounded-md font-mono text-xs font-bold border"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.status}
                </span>

                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-[#39FF14] font-bold">
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
