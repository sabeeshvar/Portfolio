import React from 'react';
import { X, Printer, Download, GraduationCap, Briefcase, Award, Cpu, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D14]/90 backdrop-blur-xl animate-fadeIn font-sans overflow-y-auto">
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] max-w-4xl w-full relative my-8 text-white max-h-[90vh] overflow-y-auto">
        {/* Controls Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
            <FileText className="w-4 h-4" />
            <span>RESUME // CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#00F0FF] text-[#090D14] font-mono text-xs font-bold hover:bg-[#00F0FF]/90 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-panel text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans text-gray-200">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-black font-orbitron text-white">M. SABEESHVAR</h1>
            <p className="text-xs font-mono text-[#00F0FF] mt-1">
              ECE Student • Embedded Systems & IoT • AI/ML Anomaly Detection • SIH 2026 Innovator
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mt-3">
              <span>Email: sabeeshvar@gmail.com</span>
              <span>•</span>
              <span>GitHub: github.com/sabeeshvar</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/m-sabeeshvar-09145a31b/</span>
              <span>•</span>
              <span>Location: Tamil Nadu, India</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-mono text-[#00F0FF] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> ACADEMIC EDUCATION
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">B.E. Electronics & Communication Engineering</h4>
                  <p className="text-gray-400 text-xs">VSB Engineering College • 4th Semester (Graduation 2028)</p>
                </div>
                <span className="font-mono text-[#39FF14] font-bold text-xs">CGPA: 8.0</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">Class 12 (Higher Secondary)</h4>
                  <p className="text-gray-400 text-xs">Veveaham Matric Hr. Sec. School</p>
                </div>
                <span className="font-mono text-[#00F0FF] font-bold text-xs">81.33%</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">Class 10 (SSLC)</h4>
                  <p className="text-gray-400 text-xs">Thebmalar Matric Hr. Sec. School</p>
                </div>
                <span className="font-mono text-[#00F0FF] font-bold text-xs">81.33%</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-sm font-mono text-[#39FF14] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> FEATURED INNOVATION PROJECTS
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white">THULIR (SIH 2026 Major Project)</h4>
                <p className="text-gray-400 text-xs mb-2">AI-Powered T-Shaped Mine Subsidence Monitoring & Early Warning System</p>
                <p className="text-gray-300 text-xs">
                  Built ESP32 + A7670C 4G solar-powered field nodes (~₹3,035 target prototype cost), streaming deformation data to Flask backend with Isolation Forest anomaly detection & Random Forest risk classification.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white">AgroPulse</h4>
                <p className="text-gray-400 text-xs mb-2">Smart Agriculture System Using Sensors & AI</p>
                <p className="text-gray-300 text-xs">
                  Built sensor-based field monitoring, AI crop recommendations, smart irrigation guidance, and real-time disease diagnosis dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-mono text-[#B026FF] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> INTERNSHIPS
              </h3>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <strong className="text-white">BSNL Internship Experience</strong>
                  <br />Telecom infrastructure & networking hardware operations.
                </li>
                <li className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <strong className="text-white">MICROSUN Technology Internship</strong>
                  <br />Electronics engineering workflows & practical implementation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#FF2D95] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> CERTIFICATIONS
              </h3>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> NPTEL Certification
                </li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> Salesforce Certification
                </li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> Java & Python Certifications
                </li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> Data Analysis Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
