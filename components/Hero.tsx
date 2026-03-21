 import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, Rocket, Award, ShieldCheck, Cpu, Mail } from 'lucide-react';
import profile from './assest/profile3.png';

const ROLES = [
  "Backend Architect",
  "C++ Problem Solver",
  "AI Learner",
  "Cloud Explorer"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 30 : 60;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) setTimeout(() => setIsDeleting(true), 2500);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
<section className="relative min-h-screen w-full flex items-center justify-center px-6 py-12 lg:py-0 lg:px-24 overflow-hidden">
  <div className="absolute inset-0 -z-10 
  bg-[radial-gradient(circle_at_20%_30%,rgba(0,242,255,0.15),transparent_40%),
      radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]" />

{/* 🔥 Floating Light Orbs */}
<div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full -z-10 animate-pulse" />
<div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full -z-10 animate-pulse" />

{/* 🔥 Subtle Cyber Grid */}
<div className="absolute inset-0 -z-10 opacity-10
  bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
      linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
  bg-[size:3rem_3rem]" />
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
        
        {/* TOP FOR MOBILE / RIGHT FOR DESKTOP: Profile Photo */}
        <div 
          className="relative flex justify-center items-center order-1 lg:order-2 transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        >
          <div className="relative group">
            {/* Pulsing Back Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] lg:blur-[120px] animate-pulse-slow opacity-60" />
            
            {/* Spinning Rings */}
            <div className="absolute -inset-6 lg:-inset-12 rounded-full border border-primary/10 animate-spin-slow opacity-40" />
            <div className="absolute -inset-4 lg:-inset-8 rounded-full border border-secondary/20 animate-[spin_12s_linear_infinite_reverse] opacity-50" />
            
            {/* Main Image Container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-tr from-primary via-transparent to-secondary animate-float shadow-[0_0_50px_rgba(0,242,255,0.3)] p-1">
              <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                <img 
                  src={profile}
                  alt="Shivam Swaraj Profile"
                  className="w-full h-full object-cover scale-110 transition-all duration-1000 ease-out group-hover:scale-125 brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Float Labels - Hidden on small mobile to avoid clutter, visible on sm+ */}
            <div className="hidden sm:flex absolute -top-2 -right-2 lg:-top-4 lg:-right-4 glass-card px-3 py-1.5 rounded border border-primary/30 items-center gap-2 animate-float delay-700">
              <Cpu size={14} className="text-primary animate-pulse" />
              <span className="text-[9px] lg:text-[10px] font-code text-primary uppercase tracking-widest font-bold">Neural_Node</span>
            </div>
          </div>
        </div>

        {/* BOTTOM FOR MOBILE / LEFT FOR DESKTOP: Content */}
        <div className="flex flex-col space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom lg:slide-in-from-left duration-1000 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/5 border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#00f2ff]" />
              <span className="text-primary font-code text-[12px] lg:text-[15px] tracking-[0.3em] lg:tracking-[0.4em] uppercase font-bold"> Welcome to My Universe</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-heading font-black tracking-tighter leading-[0.85] py-2">
              <span className="hero-gradient-text neon-text-glow block">Shivam</span>
              <span className="text-white block">Swaraj</span>
            </h1>
          </div>

          <div className="space-y-4 w-full">
            <div className="text-md sm:text-xl font-body text-white/80 font-semibold tracking-wide flex items-center justify-center lg:justify-start gap-3">
              <div className="hidden lg:block w-8 h-[1px] bg-secondary/50" />
              Full Stack Developer | AI Enthusiast
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-3 font-code text-primary text-xl lg:text-2xl h-10">
              <Terminal size={18} className="text-secondary animate-pulse" />
              <span className="font-bold drop-shadow-[0_0_10px_rgba(0,242,255,0.7)]">{displayText}</span>
              <span className="w-1 h-6 lg:h-7 bg-primary animate-pulse shadow-[0_0_15px_#00f2ff]"></span>
            </div>

          
          </div>

          {/* HUD BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-cyber px-8 py-4 text-primary font-heading font-bold flex items-center justify-center gap-3 text-xs sm:text-sm hover:scale-105 transition-all duration-300"
            >
              <Rocket size={18} /> VIEW PROJECTS
            </button>

            <button
              onClick={() => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-cyber px-8 py-4 text-secondary font-heading font-bold flex items-center justify-center gap-3 text-xs sm:text-sm border-secondary/30 hover:border-secondary hover:scale-105 transition-all duration-300"
            >
              <Award size={18} /> CERTIFICATIONS
            </button>
            
            <a 
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-heading font-bold rounded-md shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              ⬇ Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-white/30">
            <a href="https://github.com/shiv578" className="hover:text-primary transition-all duration-300 hover:scale-110"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shivam-swaraj72/" className="hover:text-primary transition-all duration-300 hover:scale-110"><Linkedin size={24} /></a>
            <a href="mailto:swarajrkfl22@gmail.com" className="hover:text-primary transition-all duration-300 hover:scale-110"><Mail size={24} /></a>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default Hero;
