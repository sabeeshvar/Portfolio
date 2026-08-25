import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CircuitCanvas from './components/CircuitCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import TechConstellation from './components/TechConstellation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import MissionLog from './components/MissionLog';
import Entrepreneurship from './components/Entrepreneurship';
import CurrentlyExploring from './components/CurrentlyExploring';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'experience',
        'achievements',
        'contact',
      ];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-[#090D14] text-[#E6EDF3] circuit-grid-pattern selection:bg-[#00F0FF] selection:text-[#090D14] font-sans">
          {/* Interactive Circuit Canvas Background */}
          <CircuitCanvas />

          {/* Navigation Bar */}
          <Navbar
            activeSection={activeSection}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="relative z-10 space-y-12">
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <AboutMe />
            <Education />
            <TechConstellation />
            <Projects onOpenModal={(proj) => setSelectedProject(proj)} />
            <Experience />
            <Certifications />
            <MissionLog />
            <Entrepreneurship />
            <CurrentlyExploring />
            <Contact />
          </main>

          {/* Footer */}
          <Footer onOpenResume={() => setIsResumeOpen(true)} />

          {/* Deep Dive Project Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}

          {/* Resume Viewer Modal */}
          {isResumeOpen && (
            <ResumeModal onClose={() => setIsResumeOpen(false)} />
          )}
        </div>
      )}
    </>
  );
}
