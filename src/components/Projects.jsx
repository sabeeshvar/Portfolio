import React, { useState } from 'react';
import {
  Cpu,
  Brain,
  Wifi,
  Cloud,
  Zap,
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight,
  ShieldAlert,
  Activity,
  CheckCircle,
  Database,
  Smartphone,
  Sprout,
} from 'lucide-react';

export default function Projects({ onOpenModal }) {
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  const pipelineSteps = [
    { label: 'FARM', icon: Sprout, color: '#39FF14' },
    { label: 'SENSORS', icon: Cpu, color: '#00F0FF' },
    { label: 'CLOUD DATA', icon: Cloud, color: '#61DAFB' },
    { label: 'AI ENGINE', icon: Brain, color: '#B026FF' },
    { label: 'SMART DECISION', icon: Zap, color: '#FF2D95' },
    { label: 'FARMER DASHBOARD', icon: Smartphone, color: '#FFB800' },
  ];

  const projectsData = [
    {
      id: 'agropulse',
      isFlagship: true,
      title: 'AgroPulse',
      subtitle: 'Smart Agriculture System Using Sensors & AI',
      description:
        'An intelligent agriculture solution combining sensors, AI and smart technologies to help farmers make better decisions with live telemetry, disease recognition and automated watering.',
      features: [
        'Sensor-based soil NPK & moisture monitoring',
        'AI-driven crop suitability recommendations',
        'Automated smart irrigation guidance & actuation',
        'Real-time weather forecast & climate guidance',
        'Computer vision crop disease diagnosis',
        'Farmer-focused web & mobile dashboard',
      ],
      tech: [
        'Artificial Intelligence',
        'IoT',
        'Sensors',
        'Embedded Systems',
        'Smart Agriculture',
        'Data Analysis',
      ],
      color: '#00F0FF',
      problem:
        'Traditional farming lacks real-time soil telemetry and early disease diagnosis, leading to wasted water, crop loss, and unoptimized fertilizer usage.',
      solution:
        'AgroPulse deploys IoT sensor arrays directly in fields to stream moisture and NPK data into a cloud AI engine. The AI analyzes weather forecasts and soil health to automate irrigation valves and provide real-time disease advisories.',
      role: 'Lead Architect — Developed hardware sensor interfacing, IoT telemetry pipeline, AI model integration, and the web dashboard interface.',
      futureImprovements:
        'Integrating satellite imagery analysis, autonomous drone field scanning, and multi-language voice advisories for local farmers.',
    },
    {
      id: 'harvestiq',
      isFlagship: false,
      title: 'HarvestIQ',
      subtitle: 'AI-Powered Smart Agriculture Platform',
      description:
        'An AI-powered agriculture ecosystem designed to provide intelligent farming recommendations, seed marketplace integration, and disease management tools.',
      features: [
        'AI crop & soil recommendation engine',
        'Integrated verified seed marketplace',
        'Hyper-local weather guidance & alerts',
        'Dynamic irrigation scheduling',
        'Crop disease detection interface',
        'Farmer-friendly accessible UI',
      ],
      tech: ['AI', 'Web Development', 'Agriculture', 'Data Analysis', 'Smart Farming'],
      color: '#39FF14',
      problem:
        'Smallholder farmers struggle to find verified high-quality seeds and lack accessible digital advice tailored to their specific regional soil types.',
      solution:
        'HarvestIQ provides a lightweight, accessible web platform connecting farmers to direct agronomic AI recommendations, verified seed vendors, and real-time irrigation advisories.',
      role: 'Full-stack Developer — Built the frontend user interface, seed vendor database schemas, and AI recommendation flow.',
      futureImprovements:
        'Integrating direct peer-to-peer farmer market trading and localized weather radar APIs.',
    },
    {
      id: 'embeddedlab',
      isFlagship: false,
      title: 'Embedded Systems Lab',
      subtitle: 'Hardware × Software Integration Workspace',
      description:
        'Custom microcontroller prototypes, sensor telemetry arrays, wireless IoT nodes, and hardware-level automation logic.',
      features: [
        'Arduino & Raspberry Pi hardware prototypes',
        'Wireless sensor node telemetry',
        'Real-time automated relay actuation',
        'Hardware problem solving & circuit debugging',
      ],
      tech: ['Embedded Systems', 'IoT', 'Sensors', 'Automation', 'Electronics'],
      color: '#B026FF',
      problem:
        'Connecting low-level microcontroller hardware logic seamlessly with high-level web dashboards without latency or data packet loss.',
      solution:
        'Created a modular embedded systems testing lab with custom C++ firmware, MQTT/HTTP telemetry, and responsive dashboard monitors.',
      role: 'Hardware Engineer — Designed circuit layouts, flashed microcontrollers, and calibrated sensor voltage thresholds.',
      futureImprovements:
        'Designing custom PCB boards and expanding to LoRaWAN long-range agricultural telemetry.',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
          <span>SECTION // 04 • PORTFOLIO CORE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-orbitron text-white tracking-tight uppercase">
          THINGS I'VE <span className="text-[#39FF14] glow-text-cyan">BUILT</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2 max-w-xl mx-auto">
          High-impact engineering solutions combining electronics, sensor arrays, AI engines, and hardware automation.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#39FF14] via-[#00F0FF] to-[#B026FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* FLAGSHIP HERO PROJECT: AGROPULSE */}
      <div className="mb-16">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden group">
          {/* Flagship Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/50 text-xs font-mono text-[#00F0FF] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Zap className="w-4 h-4 text-[#39FF14] animate-pulse" />
              <span>FLAGSHIP HERO PROJECT 01</span>
            </div>
            <span className="text-xs font-mono text-gray-400">IN ACTIVE DEVELOPMENT // ECE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-black font-orbitron text-white">
                AgroPulse
              </h3>
              <h4 className="text-base font-mono text-[#00F0FF] font-semibold">
                Smart Agriculture System Using Sensors & AI
              </h4>
              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                An intelligent agriculture solution combining physical sensors, AI algorithms and smart web technologies to help farmers make better decisions, optimize water usage, and detect crop diseases early.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {projectsData[0].tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 text-xs font-mono font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CUSTOM ANIMATED PIPELINE VISUAL */}
            <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-white/10 relative">
              <div className="text-xs font-mono text-gray-400 mb-4 flex items-center justify-between">
                <span className="text-[#00F0FF] font-bold">SYSTEM TELEMETRY PIPELINE</span>
                <span className="text-[10px] text-gray-500">LIVE DATA FLOW</span>
              </div>

              {/* Animated Horizontal Pipeline Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pipelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activePipelineStep === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActivePipelineStep(idx)}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                        isActive
                          ? 'border-[#00F0FF] bg-[#00F0FF]/15 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-105'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-1" style={{ color: step.color }} />
                      <span className="text-[10px] font-mono font-bold text-white">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Flow Indicator Banner */}
              <div className="mt-4 p-3 rounded-xl bg-[#090D14] border border-white/10 flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#39FF14] animate-pulse" />
                  <span>STEP 0{activePipelineStep + 1}: {pipelineSteps[activePipelineStep].label} PROCESSING</span>
                </span>
                <span className="text-[10px] text-[#00F0FF]">ACTIVE PULSE</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 border-t border-white/10">
            {projectsData[0].features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action Modal Trigger */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => onOpenModal(projectsData[0])}
              className="px-6 py-3 rounded-xl bg-[#00F0FF] text-[#090D14] font-mono font-bold text-xs hover:bg-[#00F0FF]/90 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>DEEP DIVE TECHNICAL SPECIFICATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SECONDARY PROJECTS: HARVESTIQ & EMBEDDED LAB */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.slice(1).map((proj) => (
          <div
            key={proj.id}
            className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-md text-xs font-mono font-bold border"
                  style={{
                    backgroundColor: `${proj.color}15`,
                    borderColor: `${proj.color}40`,
                    color: proj.color,
                  }}
                >
                  PROJECT {proj.id === 'harvestiq' ? '02' : '03'}
                </span>
                <span className="text-xs font-mono text-gray-500">ELECTRONICS × AI</span>
              </div>

              <h3 className="text-2xl font-bold font-orbitron text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                {proj.title}
              </h3>
              <h4 className="text-xs font-mono text-gray-400 mb-4">{proj.subtitle}</h4>

              <p className="text-sm text-gray-300 font-sans mb-6 leading-relaxed">
                {proj.description}
              </p>

              <div className="space-y-2 mb-6">
                {proj.features.slice(0, 4).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <ChevronRight className="w-3.5 h-3.5" style={{ color: proj.color }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 text-gray-300 text-[11px] font-mono border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenModal(proj)}
                className="w-full py-3 rounded-xl border border-white/15 text-white font-mono text-xs font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW ARCHITECTURE DETAILS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
