import React from 'react';
import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06090F] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#00F0FF]" />
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-white text-base">SABEESHVAR M.</h3>
            <p className="text-xs font-mono text-gray-400">"Building technology with purpose."</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sabeeshvar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('LinkedIn Profile URL: Replace with your actual LinkedIn link');
            }}
            className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:sabeeshvar@gmail.com"
            className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#00F0FF] text-[#090D14] hover:bg-[#00F0FF]/90 transition-colors font-bold cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright Right */}
        <div className="text-xs font-mono text-gray-500 text-center md:text-right">
          <div>© 2026 Sabeeshvar M. All rights reserved.</div>
          <div className="text-[10px] text-gray-600 mt-1">
            ECE Engineering Student • VSB Engineering College
          </div>
        </div>
      </div>
    </footer>
  );
}
