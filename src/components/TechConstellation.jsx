import React, { useState } from 'react';
import { Cpu, Code, Brain, Globe, Sparkles, Layers, Zap, Radio } from 'lucide-react';

export default function TechConstellation() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedNode, setSelectedNode] = useState(null);

  const categories = [
    { id: 'ALL', label: 'ALL CONSTELLATION NODES' },
    { id: 'PROGRAMMING', label: 'PROGRAMMING' },
    { id: 'AI & DATA', label: 'AI & DATA' },
    { id: 'ELECTRONICS', label: 'ELECTRONICS' },
    { id: 'DEVELOPMENT', label: 'DEVELOPMENT' },
    { id: 'INNOVATION', label: 'INNOVATION' },
  ];

  const skillNodes = [
    {
      id: 'esp32',
      name: 'ESP32 Controller',
      category: 'ELECTRONICS',
      color: '#39FF14',
      icon: Cpu,
      level: 'Primary Controller',
      connected: ['sensors', 'cellular', 'embedded', 'thulir'],
      description: 'Dual-core 32-bit microcontroller for real-time sensor polling, power management, and cellular transmission.',
    },
    {
      id: 'cellular',
      name: 'A7670C 4G Cellular',
      category: 'ELECTRONICS',
      color: '#00F0FF',
      icon: Radio,
      level: 'Telecommunications',
      connected: ['esp32', 'flask', 'thulir'],
      description: 'Cellular modem integration delivering remote telemetry data streams from underground mining zones to cloud backends.',
    },
    {
      id: 'flask',
      name: 'Flask Backend API',
      category: 'DEVELOPMENT',
      color: '#61DAFB',
      icon: Code,
      level: 'Python Backend',
      connected: ['python', 'ai', 'thulir'],
      description: 'Lightweight REST API backend handling sensor data ingestion, database storage, and AI risk classification triggers.',
    },
    {
      id: 'java',
      name: 'Java',
      category: 'PROGRAMMING',
      color: '#F80000',
      icon: Code,
      level: 'Proficient',
      connected: ['python', 'webdev'],
      description: 'Object-oriented programming, data structures, algorithm design, and core software engineering fundamentals.',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'PROGRAMMING',
      color: '#3776AB',
      icon: Code,
      level: 'Certified & Active',
      connected: ['flask', 'ai', 'data', 'thulir'],
      description: 'Primary language for data manipulation, AI modeling, sensor data processing, and Flask backend APIs.',
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      category: 'AI & DATA',
      color: '#00F0FF',
      icon: Brain,
      level: 'Core Focus',
      connected: ['python', 'data', 'ml', 'thulir', 'smartagri'],
      description: 'Unsupervised anomaly detection (Isolation Forest) & risk classification (Random Forest) for mine safety and crop advisories.',
    },
    {
      id: 'data',
      name: 'Data Analysis',
      category: 'AI & DATA',
      color: '#FFB800',
      icon: Brain,
      level: 'Certified',
      connected: ['python', 'ai', 'sensors'],
      description: 'Processing real-time sensor streams, mine deformation telemetry, and statistical insights extraction.',
    },
    {
      id: 'ml',
      name: 'Machine Learning (Iso & Random Forest)',
      category: 'AI & DATA',
      color: '#B026FF',
      icon: Brain,
      level: 'Applied Algorithms',
      connected: ['ai', 'data', 'thulir'],
      description: 'Isolation Forest for unsupervised sensor anomaly detection and Random Forest for 4-tier risk classification.',
    },
    {
      id: 'embedded',
      name: 'Embedded Systems',
      category: 'ELECTRONICS',
      color: '#39FF14',
      icon: Cpu,
      level: 'Specialization',
      connected: ['esp32', 'sensors', 'iot'],
      description: 'Microcontroller hardware architecture, firmware development, closed-loop actuation, and circuit interfacing.',
    },
    {
      id: 'sensors',
      name: 'Sensors & IoT Arrays',
      category: 'ELECTRONICS',
      color: '#00F0FF',
      icon: Cpu,
      level: 'Practical Hardware',
      connected: ['esp32', 'embedded', 'thulir', 'smartagri'],
      description: 'Above/below ground deformation sensors, soil moisture, temperature, humidity, and atmospheric sensor telemetry.',
    },
    {
      id: 'thulir',
      name: 'THULIR (SIH 2026)',
      category: 'INNOVATION',
      color: '#FF2D95',
      icon: Sparkles,
      level: 'Major Project',
      connected: ['esp32', 'cellular', 'flask', 'ai'],
      description: 'AI-Powered T-Shaped Mine Subsidence Monitoring and Early Warning System (~₹3,035 target node cost).',
    },
    {
      id: 'smartagri',
      name: 'Smart Agriculture',
      category: 'INNOVATION',
      color: '#2E7D32',
      icon: Sparkles,
      level: 'Flagship Domain',
      connected: ['sensors', 'ai', 'embedded'],
      description: 'End-to-end smart farming frameworks (AgroPulse & HarvestIQ) combining sensors & AI for maximum crop yield.',
    },
  ];

  const filteredNodes =
    activeCategory === 'ALL'
      ? skillNodes
      : skillNodes.filter((node) => node.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>SECTION // 03</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-white tracking-tight uppercase">
          TECH <span className="text-[#00F0FF] glow-text-cyan">CONSTELLATION</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-2">
          Click or hover on any node to view connected system dependencies & tech capabilities.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#39FF14] mx-auto mt-4 rounded-full" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setSelectedNode(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#00F0FF] text-[#090D14] font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                : 'glass-panel text-gray-300 hover:text-white hover:border-white/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive Constellation Node Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {filteredNodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode?.id === node.id;
          const isConnected = selectedNode?.connected?.includes(node.id);

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(isSelected ? null : node)}
              onMouseEnter={() => setSelectedNode(node)}
              className={`glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 relative group overflow-hidden border ${
                isSelected
                  ? 'border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)] bg-[#111724] scale-105 z-20'
                  : isConnected
                  ? 'border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.2)] bg-[#111724]'
                  : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}40`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: node.color }} />
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                  {node.level}
                </span>
              </div>

              <h3 className="text-sm font-bold font-orbitron text-white group-hover:text-[#00F0FF] transition-colors mb-1">
                {node.name}
              </h3>

              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                {node.category}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Node Detail Output Window */}
      {selectedNode && (
        <div className="glass-panel p-6 rounded-2xl border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.15)] animate-fadeIn font-mono">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full animate-ping"
                style={{ backgroundColor: selectedNode.color }}
              />
              <h4 className="text-lg font-bold font-orbitron text-white">
                NODE DEEP DIVE: <span style={{ color: selectedNode.color }}>{selectedNode.name}</span>
              </h4>
            </div>
            <span className="text-xs text-gray-400">
              CATEGORY: <strong className="text-white">{selectedNode.category}</strong>
            </span>
          </div>

          <p className="text-sm text-gray-200 font-sans mb-4 leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-gray-400">CONNECTED DEPENDENCY NODES:</span>
            {selectedNode.connected.map((connId) => {
              const connNode = skillNodes.find((n) => n.id === connId);
              return (
                <span
                  key={connId}
                  className="px-2.5 py-1 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[11px] font-mono"
                >
                  ⚡ {connNode ? connNode.name : connId}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
