
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, Rocket, Award, ShieldCheck, Code2, Cpu, ExternalLink ,Mail} from 'lucide-react';
import profile from './assest/profile.png';


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
    <section className="relative h-screen w-full flex items-center justify-center px-10 lg:px-24 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT SIDE: Identity & HUD */}
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000 premium">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/5 border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#00f2ff]" />
              <span className="text-primary font-code text-[15px] tracking-[0.4em] uppercase font-bold"> Welcome to My Universe</span>
            </div>
            
            <h1 className="text-7xl lg:text-[10rem] font-heading font-black tracking-tighter leading-[0.85] py-2 relative">
              <span className="hero-gradient-text neon-text-glow block hover:animate-glitch transition-all duration-500 cursor-default">
                Shivam
              </span>
              <span className="text-white block hover:animate-glitch transition-all duration-500 cursor-default">
                Swaraj
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <div className="text-lg md:text-xl font-body text-white/80 font-semibold tracking-wide flex items-center gap-3">
              <div className="w-8 h-[1px] bg-secondary/50" />
              Full Stack Developer | AI Enthusiast
            </div>
            
            <div className="flex items-center gap-4 font-code text-primary text-2xl h-10 group">
              <Terminal size={20} className="text-secondary animate-pulse" />
              <span className="font-bold drop-shadow-[0_0_10px_rgba(0,242,255,0.7)]">{displayText}</span>
              <span className="w-1 h-7 bg-primary animate-pulse shadow-[0_0_15px_#00f2ff]"></span>
            </div>

            <p className="max-w-lg text-white/50 font-body leading-relaxed text-sm md:text-base">
              Architecting the next generation of scalable systems. Transforming complex hardware logic from Mechatronics into seamless software ecosystems.
            </p>
          </div>

          {/* HUD BUTTONS */}
    {/* HUD BUTTONS */}
<div className="flex flex-wrap gap-4 pt-4">
  
  <button
    onClick={() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="btn-cyber px-8 py-4 text-primary font-heading font-bold flex items-center gap-3 text-sm hover:scale-105 transition-all duration-300"
  >
    <Rocket size={18} /> VIEW PROJECTS
  </button>

  <button
    onClick={() => {
      document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="btn-cyber px-8 py-4 text-secondary font-heading font-bold flex items-center gap-3 text-sm border-secondary/30 hover:border-secondary hover:scale-105 transition-all duration-300"
  >
    <Award size={18} /> CERTIFICATIONS
  </button>
  <a 
  href="/resume.pdf"
  download
  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-heading font-bold rounded-md shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300"
>
  ⬇ Download Resume
</a>


</div>


          <div className="flex items-center gap-8 pt-4 text-white/20">
            <a href="https://github.com/shiv578" className="hover:text-primary transition-all duration-300 hover:scale-110"><Github size={30} /></a>
            <a href="https://www.linkedin.com/in/shivam-swaraj72/" className="hover:text-primary transition-all duration-300 hover:scale-110"><Linkedin size={30} /></a>
 <a 
  href="https://mail.google.com/mail/?view=cm&to=swarajrkfl22@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-primary transition-all duration-300 hover:scale-110"
>
  <Mail size={30} />
</a>

     
          </div>

        </div>

        {/* RIGHT SIDE: Optimized for the provided Neon Profile Photo */}
        <div 
          className="relative flex justify-center items-center lg:justify-end transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        >
          <div className="relative">
            {/* Pulsing Back Glow - Tinted to match the Blue/Pink in your image */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow opacity-60" />
            
            {/* Minimal Spinning Rings to enhance the image's existing neon ring */}
            <div className="absolute -inset-12 rounded-full border border-primary/10 animate-spin-slow opacity-40" />
            <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-[spin_12s_linear_infinite_reverse] opacity-50" />
            
            {/* Main Image Container */}
            <div className="relative w-80 h-80 md:w-[540px] md:h-[540px] rounded-full p-0 bg-gradient-to-tr from-primary via-transparent to-secondary animate-float shadow-[0_0_60px_rgba(0,242,255,0.2)]">
              <div className="w-full h-full rounded-full bg-darker-bg overflow-hidden relative border-0 border-dark-bg/">
              <img 
  src={profile}
  alt="Shivam Swaraj Profile"
  className="w-full h-full object-cover scale-110 transition-all duration-1000 ease-out hover:scale-125 brightness-110 contrast-110"
 />

                
                {/* Subtle Digital Overlay to match the HUD screens in your image */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,10,0.4)_100%)]" />
              </div>
            </div>

            {/* Float Labels */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded border-primary/30 flex items-center gap-3 animate-float delay-700">
              <Cpu size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-code text-primary uppercase tracking-widest font-bold">Neural_Node</span>
            </div>
            <div className="absolute bottom-10 -left-10 glass-card px-4 py-2 rounded border-secondary/30 flex items-center gap-3 animate-float delay-1000">
              <ShieldCheck size={14} className="text-secondary" />
              <span className="text-[10px] font-code text-secondary uppercase tracking-widest font-bold">Secure_Host</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-200%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(500%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
