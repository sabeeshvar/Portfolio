import React from 'react';
import { X, Cpu, CheckCircle2, ShieldAlert, Lightbulb, UserCheck, Rocket } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D14]/85 backdrop-blur-xl animate-fadeIn font-sans overflow-y-auto">
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] max-w-3xl w-full relative my-8 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full glass-panel border border-white/20 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Subtitle Header */}
        <div className="pr-12 mb-6">
          <span
            className="px-3 py-1 rounded-md text-xs font-mono font-bold border inline-block mb-2"
            style={{
              backgroundColor: `${project.color}15`,
              borderColor: `${project.color}40`,
              color: project.color,
            }}
          >
            SYSTEM ARCHITECTURE DEEP DIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-orbitron text-white">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-[#00F0FF] mt-1">{project.subtitle}</p>
        </div>

        {/* Problem Statement */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-xs font-mono text-[#FF2D95] font-bold mb-1 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" />
            PROBLEM STATEMENT
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Engineering Solution */}
        <div className="mb-6 p-4 rounded-2xl bg-[#00F0FF]/5 border border-[#00F0FF]/30">
          <h4 className="text-xs font-mono text-[#00F0FF] font-bold mb-1 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#39FF14]" />
            ENGINEERING SOLUTION
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Role & Key Contribution */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-xs font-mono text-[#39FF14] font-bold mb-1 flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            MY SPECIFIC ROLE & IMPLEMENTATION
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {project.role}
          </p>
        </div>

        {/* Key Capabilities / Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
            KEY CAPABILITIES & FEATURES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-xs font-mono text-[#B026FF] font-bold mb-1 flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            FUTURE DEVELOPMENT ROADMAP
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {project.futureImprovements}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-mono border border-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
