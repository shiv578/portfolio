
import React, { useEffect, useState, Suspense } from 'react';
import CyberBackground from './components/CyberBackground';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillsGrid from './components/SkillsGrid';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import AIAssistant from './components/AIAssistant';
import About from "./components/About";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#05050a] z-[999] flex flex-col items-center justify-center font-code text-primary overflow-hidden">
        <div className="text-4xl animate-pulse tracking-[0.5em] mb-4 font-black">INITIALIZING</div>
        <div className="w-64 h-1 bg-white/5 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-primary animate-[loading_2s_ease-in-out_infinite] shadow-[0_0_15px_#00f2ff]" />
        </div>
        <div className="mt-6 text-[10px] opacity-40 uppercase tracking-[1em] animate-pulse">Establishing Neural Connection...</div>
        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body scroll-smooth selection:bg-primary selection:text-darker-bg bg-[#05050a]">
      <CyberBackground />
      
      {/* Cinematic HUD Borders (Static, for perf) */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-darker-bg z-40" />
      <div className="fixed inset-0 pointer-events-none border border-primary/10 z-50" />
      
      <main className="relative z-10 gpu-accelerated">
        <Hero />
          <About />

        
        <div id="experience" className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Timeline />
        </div>
        
        <div id="skills" className="animate-in fade-in duration-1000 delay-700">
          <SkillsGrid />
        </div>
        
        <div id="projects" className="animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
          <Projects />
        </div>

        <div id="credentials">
          <Certificates />
        </div>
        <Achievements />
                <Contact />


        {/* Final CTA Card */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-16 rounded-3xl border-primary/10 relative overflow-hidden group gpu-accelerated transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-5xl font-heading font-black mb-8 relative z-10 neon-text-glow">READY TO <span className="hero-gradient-text">BUILD?</span></h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto relative z-10 font-medium">
              Architecting high-scale cloud systems and AI agents. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a href="mailto:shivam@example.com" className="btn-cyber px-10 py-5 text-primary font-heading font-bold rounded-lg shadow-[0_0_25px_rgba(0,242,255,0.2)]">
                SECURE COMMUNICATION
              </a>
              <a href="#projects" className="px-10 py-5 border border-white/10 text-white/70 font-heading font-bold rounded-lg hover:bg-white/5 transition-all duration-300">
                REVIEW ARTIFACTS
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 text-center glass-card border-x-0 border-b-0 border-white/5 bg-[#05050a]">
          <div className="text-[10px] font-code opacity-30 uppercase tracking-[0.5em] mb-4">
            Designed & Engineered by Shivam Swaraj © 2035
          </div>
          <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="mt-10 flex justify-center gap-10">
            <span className="text-[9px] text-primary/40 font-bold uppercase tracking-widest">Build_v2.5.1</span>
            <span className="text-[9px] text-secondary/40 font-bold uppercase tracking-widest">Status: Operational</span>
            <span className="text-[9px] text-tertiary/40 font-bold uppercase tracking-widest">Encr: AES-512</span>
          </div>
        </footer>
      </main>


      {/* Smooth Global Cursor (Hardware accelerated) */}
      <div 
        id="cursor-trail" 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/20 pointer-events-none z-[999] hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out gpu-accelerated bg-primary/5 blur-[2px]" 
      />
      <script dangerouslySetInnerHTML={{ __html: `
        const cursor = document.getElementById('cursor-trail');
        window.addEventListener('mousemove', (e) => {
          cursor.style.transform = \`translate3d(\${e.clientX}px, \${e.clientY}px, 0)\`;
        });
      `}} />
    </div>
  );
};

export default App;
