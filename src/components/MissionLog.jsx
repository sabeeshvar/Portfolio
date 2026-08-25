import React from 'react';
import { Terminal, Shield, Trophy, Activity, Users, Star, Flame } from 'lucide-react';

export default function MissionLog() {
  const logs = [
    {
      code: 'LOG_01',
      title: 'SMART INDIA HACKATHON',
      type: 'NATIONAL PARTICIPATION',
      status: 'EXECUTED',
      icon: Trophy,
      color: '#39FF14',
      description:
        'Engaged in national-level problem solving, tackling real-world challenges through technology innovation.',
    },
    {
      code: 'LOG_02',
      title: 'LIRO 2026',
      type: 'INNOVATION CHALLENGE',
      status: 'EXECUTED',
      icon: Activity,
      color: '#00F0FF',
      description:
        'Participated in engineering innovation competitions, presenting sustainable technology models.',
    },
    {
      code: 'LOG_03',
      title: 'HANDBALL ATHLETICS',
      type: 'SPORTS ACHIEVEMENT',
      status: 'ACTIVE',
      icon: Flame,
      color: '#FF2D95',
      description:
        'Represented college team in handball tournaments, demonstrating leadership, endurance, and team strategy.',
    },
    {
      code: 'LOG_04',
      title: 'KABADDI ATHLETICS',
      type: 'SPORTS ACHIEVEMENT',
      status: 'ACTIVE',
      icon: Flame,
      color: '#FFB800',
      description:
        'Active player in collegiate Kabaddi tournaments, highlighting resilience, discipline, and quick tactical execution.',
    },
    {
      code: 'LOG_05',
      title: 'ELECTRONICS CLUB',
      type: 'COLLEGIATE MEMBER',
      status: 'ACTIVE MEMBER',
      icon: Users,
      color: '#B026FF',
      description:
        'Active member contributing to hardware workshops, technical symposiums, and peer electronics learning.',
    },
    {
      code: 'LOG_06',
      title: 'TECHNICAL SYMPOSIUMS',
      type: 'EVENT PARTICIPATION',
      status: 'CONTINUOUS',
      icon: Star,
      color: '#00F0FF',
      description:
        'Participated in technical paper presentations, circuit debugging events, and hardware symposium competitions.',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
          <span>SECTION // 07</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          MISSION <span className="text-[#39FF14] glow-text-cyan">LOG</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2">
          Hackathon entries, athletic achievements, and collegiate leadership milestones.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#39FF14] to-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logs.map((log, idx) => {
          const Icon = log.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#39FF14]/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Mission Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
                <span className="text-gray-500 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#39FF14]" />
                  {log.code}
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    backgroundColor: `${log.color}15`,
                    color: log.color,
                    border: `1px solid ${log.color}40`,
                  }}
                >
                  {log.status}
                </span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${log.color}15`,
                    borderColor: `${log.color}40`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: log.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-orbitron text-white group-hover:text-[#39FF14] transition-colors">
                    {log.title}
                  </h3>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    {log.type}
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {log.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
