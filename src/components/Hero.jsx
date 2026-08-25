import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenResume }) {
  const fullName = "M. SABEESHVAR";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText.length < fullName.length) {
      // Typing phase: reveal letter by letter
      timer = setTimeout(() => {
        setDisplayText(fullName.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === fullName.length) {
      // Hold phase: remain on screen for 2.8 seconds
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(55); // Faster speed for vanishing
      }, 2800);
    } else if (isDeleting && displayText.length > 0) {
      // Vanishing phase: erase letter by letter
      timer = setTimeout(() => {
        setDisplayText(fullName.substring(0, displayText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Pause before starting loop again
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTypingSpeed(110);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Formal, elegant ambient backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00F0FF]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-8 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all duration-300 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>STATUS: SIH 2026 INNOVATOR & ECE BUILDER</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">SEM 5 • CGPA 8.0</span>
        </div>

        {/* RADIANT WHITE & MEDIUM-BRIGHT TYPEWRITER NAME BANNER */}
        <div className="min-h-[90px] sm:min-h-[120px] flex items-center justify-center mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight text-white uppercase select-none">
            <span className="text-white glow-text-white tracking-widest font-extrabold">
              {displayText}
            </span>
            <span className="typewriter-cursor" />
          </h1>
        </div>

        {/* Sub-header Roles Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8 font-mono text-xs sm:text-sm">
          <span className="px-3.5 py-1.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 cursor-pointer">
            ECE ENGINEER
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-white/5 text-gray-200 border border-white/10 font-semibold hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 cursor-pointer">
            EMBEDDED & IoT BUILDER
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-white/5 text-gray-200 border border-white/10 font-semibold hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 cursor-pointer">
            AI/ML INNOVATOR
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 cursor-pointer">
            FUTURE ENTREPRENEUR
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-space text-gray-100 max-w-4xl mx-auto leading-tight mb-6">
          "Building <span className="text-[#00F0FF] glow-text-cyan">Intelligent Technology</span> that Connects Electronics, AI and Real-World Impact."
        </h2>

        {/* Detailed Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          Electronics & Communication Engineering undergraduate at VSB Engineering College specializing in ESP32, IoT sensor networks, 4G telemetry, AI anomaly detection, smart agriculture, and SIH 2026 mine safety innovations.
        </p>

        {/* CTA Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 font-mono">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3.5 rounded-xl bg-[#00F0FF] text-[#090D14] font-bold text-sm hover:bg-[#00F0FF]/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.35)] flex items-center gap-2.5 cursor-pointer group hover:scale-[1.02]"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl glass-panel text-white font-semibold text-sm hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#00F0FF]" />
            <span>DOWNLOAD RESUME</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3.5 rounded-xl border border-white/15 text-gray-300 font-medium text-sm hover:text-white hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 cursor-pointer"
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
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-sabeeshvar-09145a31b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:sabeeshvar@gmail.com"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
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
              <Award className="w-4 h-4 text-[#00F0FF]" />
              <span>8.0 CGPA • Class of 2028</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00F0FF]" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
