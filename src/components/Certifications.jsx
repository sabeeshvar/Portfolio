import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'NPTEL Certification',
      issuer: 'National Programme on Technology Enhanced Learning',
      domain: 'Engineering & Technology',
      color: '#1E88E5',
      badge: 'VERIFIED NPTEL CERTIFICATION',
    },
    {
      title: 'Salesforce Certification',
      issuer: 'Salesforce',
      domain: 'Cloud Platform & Ecosystem',
      color: '#00A1E0',
      badge: 'VERIFIED SALESFORCE',
    },
    {
      title: 'Java Certification / Skill',
      issuer: 'Software Foundations',
      domain: 'Object-Oriented Programming',
      color: '#F80000',
      badge: 'JAVA PROFICIENT',
    },
    {
      title: 'Python Certification',
      issuer: 'Programming & Data Science',
      domain: 'Python Development',
      color: '#3776AB',
      badge: 'VERIFIED PYTHON',
    },
    {
      title: 'Data Analysis Certification',
      issuer: 'Data Analytics Foundations',
      domain: 'Data Science & Telemetry',
      color: '#FFB300',
      badge: 'VERIFIED DATA ANALYSIS',
    },
  ];

  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FFB800]/30 text-xs font-mono text-[#FFB800] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
          <span>SECTION // 06</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          VERIFIED <span className="text-[#FFB800] glow-text-cyan">CERTIFICATIONS</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2">
          Validated certifications in engineering, programming languages, and cloud platforms.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FFB800] to-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${cert.color}15`,
                  borderColor: `${cert.color}40`,
                }}
              >
                <Award className="w-5 h-5" style={{ color: cert.color }} />
              </div>
              <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
            </div>

            <h3 className="text-lg font-bold font-orbitron text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs font-mono text-gray-400 mb-4">{cert.issuer}</p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-400">{cert.domain}</span>
              <span
                className="px-2 py-0.5 rounded font-semibold text-[10px]"
                style={{
                  backgroundColor: `${cert.color}15`,
                  color: cert.color,
                }}
              >
                {cert.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
