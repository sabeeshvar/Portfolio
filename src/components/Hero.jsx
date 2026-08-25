import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Cpu,
  Sparkles,
  Zap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow Orbs background backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#B026FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
          <span>STATUS: AVAILABLE FOR HACKATHONS & INTERNSHIPS</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-300">SEM 4 • CGPA 7.8</span>
        </div>

        {/* Big Name Banner */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight text-white mb-4 leading-none uppercase">
          SABEESHVAR <span className="text-[#00F0FF] glow-text-cyan">M.</span>
        </h1>

        {/* Sub-header Roles Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8 font-mono text-xs sm:text-sm">
          <span className="px-3.5 py-1.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold">
            ECE ENGINEER
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#B026FF]/10 text-[#B026FF] border border-[#B026FF]/30 font-semibold">
            AI BUILDER
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#FF2D95]/10 text-[#FF2D95] border border-[#FF2D95]/30 font-semibold">
            EMBEDDED SYSTEMS ENTHUSIAST
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-space text-gray-100 max-w-4xl mx-auto leading-tight mb-6">
          "Turning <span className="text-[#00F0FF]">Electronics</span>,{' '}
          <span className="text-[#B026FF]">Intelligence</span> & Ideas into{' '}
          <span className="text-[#39FF14]">Real-World Solutions</span>."
        </h2>

        {/* Detailed Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          Electronics & Communication Engineering student at VSB Engineering College passionate about AI, embedded systems, smart agriculture and building technology that creates real-world impact.
        </p>

        {/* CTA Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 font-mono">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3.5 rounded-xl bg-[#00F0FF] text-[#090D14] font-bold text-sm hover:bg-[#00F0FF]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2.5 cursor-pointer group hover:scale-[1.02]"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl glass-panel text-white font-semibold text-sm hover:border-[#00F0FF]/60 transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:bg-white/5"
          >
            <FileText className="w-4 h-4 text-[#00F0FF]" />
            <span>DOWNLOAD RESUME</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3.5 rounded-xl border border-white/15 text-gray-300 font-medium text-sm hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer"
          >
            CONTACT ME
          </button>
        </div>

        {/* Social Icons & Quick Metrics Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sabeeshvar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('LinkedIn Profile URL: Replace with your actual LinkedIn link');
              }}
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:sabeeshvar@gmail.com"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#00F0FF]" />
              <span>VSB Engineering College (ECE)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#39FF14]" />
              <span>7.8 CGPA • Class of 2028</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF2D95]" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
