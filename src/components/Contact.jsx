import React, { useState } from 'react';
import { Send, Terminal, CheckCircle2, Mail, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00F0FF', '#B026FF', '#39FF14'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 09 • CONTACT CONSOLE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-orbitron text-white tracking-tight uppercase">
          LET'S BUILD <span className="text-[#00F0FF] glow-text-cyan">SOMETHING</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2">
          Have an idea, hackathon invitation, or internship opportunity? Initialize a conversation.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#39FF14] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-2">
              M. SABEESHVAR
            </h3>
            <p className="text-xs font-mono text-[#00F0FF] mb-6">
              ECE ENGINEER & SIH 2026 INNOVATOR
            </p>

            <div className="space-y-4 font-mono text-xs text-gray-300">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-[#00F0FF]" />
                <div>
                  <span className="text-[10px] text-gray-500 block">PRIMARY EMAIL</span>
                  <a href="mailto:sabeeshvar@gmail.com" className="text-white hover:text-[#00F0FF] transition-colors font-bold">
                    sabeeshvar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <GithubIcon className="w-5 h-5 text-[#39FF14]" />
                <div>
                  <span className="text-[10px] text-gray-500 block">GITHUB PROFILE</span>
                  <a href="https://github.com/sabeeshvar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#39FF14] transition-colors font-bold">
                    github.com/sabeeshvar
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <LinkedinIcon className="w-5 h-5 text-[#B026FF]" />
                <div>
                  <span className="text-[10px] text-gray-500 block">OFFICIAL LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/m-sabeeshvar-09145a31b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#B026FF] transition-colors font-bold truncate block"
                  >
                    linkedin.com/in/m-sabeeshvar-09145a31b/
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#FF2D95]" />
                <div>
                  <span className="text-[10px] text-gray-500 block">LOCATION BASE</span>
                  <span className="text-white font-bold">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Console Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-3xl border border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs">
              <span className="text-[#00F0FF] font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#39FF14]" />
                TRANSMISSION CONSOLE v2.6
              </span>
              <span className="text-gray-500">ENCRYPTED TELEMETRY</span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#39FF14]/15 border border-[#39FF14] text-[#39FF14] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-orbitron text-white">
                  TRANSMISSION RECEIVED!
                </h4>
                <p className="text-sm text-gray-300 font-sans max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-[#00F0FF]">{formData.name}</strong>. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl glass-panel text-xs font-mono text-[#00F0FF] hover:border-[#00F0FF] transition-all cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">
                    IDENTIFIER // YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">
                    COMMUNICATION ADDRESS // EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">
                    TRANSMISSION PAYLOAD // MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, hackathon collaboration, or internship opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#00F0FF] text-[#090D14] font-bold text-sm hover:bg-[#00F0FF]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'START A CONVERSATION →'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
