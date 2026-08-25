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
  Radio,
  RadioTower,
  Flame,
  Sun,
} from 'lucide-react';

export default function Projects({ onOpenModal }) {
  const [activeThulirStep, setActiveThulirStep] = useState(0);

  const thulirPipelineSteps = [
    { label: 'T-SENSORS', icon: Cpu, color: '#00F0FF' },
    { label: 'ESP32 CONTROLLER', icon: Zap, color: '#39FF14' },
    { label: 'A7670C 4G CELLULAR', icon: Radio, color: '#B026FF' },
    { label: 'FLASK BACKEND API', icon: Cloud, color: '#61DAFB' },
    { label: 'AI (ISO & RANDOM FOREST)', icon: Brain, color: '#FF2D95' },
    { label: 'GIS DASHBOARD & ALERTS', icon: Smartphone, color: '#FFB800' },
  ];

  const projectsData = [
    {
      id: 'thulir',
      isFlagship: true,
      badgeText: 'SIH 2026 MAJOR PROJECT 01',
      title: 'THULIR',
      subtitle: 'AI-Powered T-Shaped Mine Subsidence Monitoring & Early Warning System',
      description:
        'A low-cost, real-time mine subsidence monitoring and early warning system designed for underground coal mining safety. Integrates T-shaped above & below ground sensors, ESP32, A7670C 4G telemetry, Flask backend, GIS mapping, and dual AI models (Isolation Forest + Random Forest).',
      features: [
        'Continuous T-shaped above-ground & below-ground deformation sensing',
        'ESP32 controller + A7670C 4G cellular transmission for remote mines',
        'Isolation Forest unsupervised anomaly detection algorithm',
        'Random Forest 4-tier risk classifier (NORMAL → WARNING → HIGH RISK → CRITICAL)',
        'Real-time GIS map dashboard & multi-channel emergency alerts',
        'Solar powered field node (~₹3,035 target prototype cost per node)',
      ],
      tech: [
        'ESP32',
        'A7670C 4G',
        'Flask API',
        'Isolation Forest',
        'Random Forest',
        'IoT Sensors',
        'GIS Dashboard',
        'Solar Power',
      ],
      color: '#00F0FF',
      problem:
        'Underground coal mining causes land subsidence that threatens worker lives, local communities, roads, and environmental infrastructure. Traditional manual field surveys are periodic, slow, and provide post-facto damage assessments rather than proactive early warnings.',
      solution:
        'THULIR deploys scalable, solar-powered T-shaped sensor nodes in mining zones. Data streams over 4G cellular to a Flask backend where Isolation Forest identifies abnormal sensor patterns and Random Forest classifies real-time subsidence risk, updating a live GIS dashboard with automated alerts.',
      role: 'Project Architect & Hardware-Software Lead — Designed ESP32 firmware, A7670C 4G cellular telemetry integration, sensor interface circuits, Flask API endpoints, and AI risk classification models.',
      futureImprovements:
        'Custom PCB integration for bulk manufacturing, LoRaWAN mesh fallbacks for deep remote shafts, and satellite radar cross-validation.',
    },
    {
      id: 'agropulse',
      isFlagship: false,
      badgeText: 'FLAGSHIP AGRICULTURE PROJECT',
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
      color: '#39FF14',
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
      badgeText: 'AI AGRI PLATFORM',
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
      color: '#B026FF',
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
      badgeText: 'HARDWARE WORKSPACE',
      title: 'Embedded Systems Lab',
      subtitle: 'Hardware × Software Integration Workspace',
      description:
        'Custom microcontroller prototypes, sensor telemetry arrays, wireless IoT nodes, and hardware-level automation logic.',
      features: [
        'ESP32 & Arduino hardware prototypes',
        'Wireless sensor node telemetry',
        'Real-time automated relay actuation',
        'Hardware problem solving & circuit debugging',
      ],
      tech: ['Embedded Systems', 'IoT', 'Sensors', 'Automation', 'Electronics'],
      color: '#FF2D95',
      problem:
        'Connecting low-level microcontroller hardware logic seamlessly with high-level web dashboards without latency or data packet loss.',
      solution:
        'Created a modular embedded systems testing lab with custom C++ firmware, 4G/HTTP telemetry, and responsive dashboard monitors.',
      role: 'Hardware Engineer — Designed circuit layouts, flashed microcontrollers, and calibrated sensor voltage thresholds.',
      futureImprovements:
        'Designing custom PCB boards and expanding to LoRaWAN long-range telemetry.',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 04 • FEATURED INNOVATIONS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-orbitron text-white tracking-tight uppercase">
          THINGS I'VE <span className="text-[#00F0FF] glow-text-cyan">BUILT</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2 max-w-xl mx-auto">
          Hardware + Embedded + 4G Telemetry + AI/ML Anomaly Detection + Real-World Impact.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] via-[#39FF14] to-[#B026FF] mx-auto mt-4 rounded-full" />
      </div>

      {/* MAJOR SIH 2026 FEATURED PROJECT: THULIR */}
      <div className="mb-16">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-[#00F0FF]/50 shadow-[0_0_50px_rgba(0,240,255,0.2)] relative overflow-hidden group">
          {/* Flagship Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/50 text-xs font-mono text-[#00F0FF] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Zap className="w-4 h-4 text-[#39FF14] animate-pulse" />
              <span>SIH 2026 MAJOR PROJECT • FEATURED 01</span>
            </div>
            <span className="text-xs font-mono text-[#39FF14] font-bold">
              TARGET NODE COST: ~₹3,035 PER NODE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-black font-orbitron text-white">
                THULIR
              </h3>
              <h4 className="text-base font-mono text-[#00F0FF] font-semibold">
                AI-Powered T-Shaped Mine Subsidence Monitoring System
              </h4>
              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                An affordable, continuous mine subsidence monitoring solution for underground coal mining safety. Integrates T-shaped above/below ground sensor arrays, ESP32, A7670C 4G cellular transmission, Flask APIs, GIS live mapping, and dual ML risk engines (Isolation Forest + Random Forest).
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

            {/* THULIR ANIMATED TELEMETRY PIPELINE */}
            <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-white/10 relative">
              <div className="text-xs font-mono text-gray-400 mb-4 flex items-center justify-between">
                <span className="text-[#00F0FF] font-bold">THULIR DATA TELEMETRY PIPELINE</span>
                <span className="text-[10px] text-[#39FF14]">SOLAR OPERATIONAL</span>
              </div>

              {/* Animated Horizontal Pipeline Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {thulirPipelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeThulirStep === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveThulirStep(idx)}
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
                  <span>STEP 0{activeThulirStep + 1}: {thulirPipelineSteps[activeThulirStep].label}</span>
                </span>
                <span className="text-[10px] text-[#00F0FF]">4G CELLULAR ACTIVE</span>
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

      {/* SECONDARY PROJECTS: AGROPULSE, HARVESTIQ, EMBEDDED LAB */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  {proj.badgeText}
                </span>
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
