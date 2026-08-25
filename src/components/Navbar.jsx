import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Terminal, FileText } from 'lucide-react';

export default function Navbar({ activeSection, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#090D14]/85 backdrop-blur-xl border-b border-[#00F0FF]/20 shadow-[0_4px_30px_rgba(0,240,255,0.08)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_#00F0FF] transition-all">
            <Cpu className="w-5 h-5 text-[#00F0FF]" />
          </div>
          <div>
            <span className="font-orbitron font-bold text-base tracking-wider text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1.5">
              SABEESHVAR M.
              <span className="inline-block w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
            </span>
            <span className="text-[10px] font-mono text-gray-400 block tracking-widest">
              ECE ENGINEER // LAB
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111724]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#00F0FF] font-bold bg-[#00F0FF]/10 border border-[#00F0FF]/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Resume Modal Trigger */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#00F0FF] border border-[#00F0FF]/40 bg-[#00F0FF]/10 hover:bg-[#00F0FF] hover:text-[#090D14] transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME CV
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg border border-white/10 bg-[#111724] text-gray-300 hover:text-[#00F0FF] transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl glass-panel border border-[#00F0FF]/30 shadow-2xl flex flex-col gap-3 font-mono animate-fadeIn">
          <div className="text-[11px] text-[#00F0FF] pb-2 border-b border-white/10 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#39FF14]" />
            NAVIGATION DIRECTORY
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-2.5 px-3 rounded-lg text-sm transition-all flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] font-bold border border-[#00F0FF]/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="text-[10px] text-[#39FF14]">ACTIVE</span>
              )}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mt-2 w-full py-3 rounded-lg text-xs font-bold text-[#090D14] bg-[#00F0FF] hover:bg-[#00F0FF]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <FileText className="w-4 h-4" />
            VIEW RESUME CV
          </button>
        </div>
      )}
    </header>
  );
}
