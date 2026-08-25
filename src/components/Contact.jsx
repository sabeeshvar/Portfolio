import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);

  const phone = "+91 98765 43210"; // Placeholder — update with your exact mobile number
  const email = "sabeeshvar@gmail.com";
  const linkedin = "https://www.linkedin.com/in/m-sabeeshvar-09145a31b/";
  const github = "https://github.com/sabeeshvar";
  const location = "Tamil Nadu, India";

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactCards = [
    {
      id: 'phone',
      title: 'MOBILE / PHONE',
      value: phone,
      subtext: 'Available for calls & WhatsApp queries',
      icon: Phone,
      color: '#00F0FF',
      actionType: 'copy',
      actionLabel: 'Copy Phone Number',
      href: `tel:${phone.replace(/\s+/g, '')}`,
    },
    {
      id: 'email',
      title: 'PRIMARY EMAIL',
      value: email,
      subtext: 'Direct academic & project inquiries',
      icon: Mail,
      color: '#00F0FF',
      actionType: 'email',
      actionLabel: 'Send Email',
      href: `mailto:${email}`,
    },
    {
      id: 'linkedin',
      title: 'OFFICIAL LINKEDIN',
      value: 'linkedin.com/in/m-sabeeshvar-09145a31b/',
      subtext: 'Professional network & SIH collaboration',
      icon: LinkedinIcon,
      color: '#00F0FF',
      actionType: 'link',
      actionLabel: 'Visit Profile',
      href: linkedin,
    },
    {
      id: 'github',
      title: 'GITHUB REPOSITORY',
      value: 'github.com/sabeeshvar',
      subtext: 'Code repositories & hardware projects',
      icon: GithubIcon,
      color: '#00F0FF',
      actionType: 'link',
      actionLabel: 'View GitHub',
      href: github,
    },
    {
      id: 'location',
      title: 'LOCATION BASE',
      value: location,
      subtext: 'VSB Engineering College • Tamil Nadu',
      icon: MapPin,
      color: '#00F0FF',
      actionType: 'info',
      actionLabel: 'India Base',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 09 • DIRECT CONTACT HUB</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-orbitron text-white tracking-tight uppercase">
          GET IN <span className="text-[#00F0FF] glow-text-cyan">TOUCH</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2 max-w-xl mx-auto">
          Direct communication channels for hackathon invitations, engineering discussions, and project opportunities.
        </p>
        <div className="w-24 h-1 bg-[#00F0FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* DIRECT CONTACT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactCards.map((card) => {
          const Icon = card.icon;
          const isCopied = copiedField === card.id;

          return (
            <div
              key={card.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#00F0FF] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded border bg-white/5 border-white/10 text-gray-400">
                    {card.title}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-orbitron text-white mb-1 group-hover:text-[#00F0FF] transition-colors truncate">
                  {card.value}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-6">{card.subtext}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] font-mono text-xs font-bold hover:bg-[#00F0FF] hover:text-[#090D14] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  >
                    <span>{card.actionLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-xs font-bold flex items-center justify-center gap-2">
                    <span>{card.actionLabel}</span>
                  </div>
                )}

                {card.actionType === 'copy' || card.id === 'phone' ? (
                  <button
                    onClick={() => handleCopy(card.value, card.id)}
                    className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-[#39FF14]" /> : <Copy className="w-4 h-4" />}
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
