import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the link when clicking the copy icon
    e.preventDefault();
    navigator.clipboard.writeText("swarajrkfl22@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: <FaGithub />,
      label: "Open Source",
      value: "github.com/shiv578",
      href: "https://github.com/shiv578",
      color: "from-cyan-500/20",
    },
    {
      icon: <FaLinkedin />,
      label: "Professional",
      value: "shivam-swaraj72",
      href: "https://www.linkedin.com/in/shivam-swaraj72/",
      color: "from-blue-600/20",
    },
    {
      icon: <FaEnvelope />,
      label: "Direct Mail",
      value: "swarajrkfl22@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=swarajrkfl22@gmail.com",
      color: "from-fuchsia-600/20",
      isEmail: true,
    },
    {
      icon: <FaPhone />,
      label: "Voice Call",
      value: "+91 7209062452",
      href: "tel:+917209062452",
      color: "from-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-[#020205] text-white py-24 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* --- CYBER BACKGROUND LAYER --- */}
      
      {/* 1. Base Cyber-Grid with Perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* 2. Animated Data Streams (Vertical Moving Lines) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-line" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-scan-line delay-1000" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-line delay-500" />
      </div>

      {/* 3. Deep Neural Orbs (Blurred Glows) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[160px] rounded-full animate-pulse-slow opacity-40" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full" />

      {/* 4. Top/Bottom Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/5 text-[11px] tracking-[0.3em] font-bold text-primary uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Connection_Status: Established
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            CONTACT<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-secondary animate-gradient-x"> ME</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed italic">
            "The best way to predict the future is to build it." <br/>
            <span className="not-italic text-sm text-white/30 tracking-widest uppercase block mt-2">— Available for new tech adventures</span>
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.isEmail ? "_self" : "_blank"}
              rel="noreferrer"
              className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              
              <div className="relative h-full bg-[#0a0a14]/90 backdrop-blur-2xl p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-start gap-8 shadow-2xl">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} text-3xl text-primary transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)]`}>
                  {link.icon}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-code">
                      {link.label}
                    </p>
                    {link.isEmail && (
                      <button 
                        onClick={copyEmail}
                        className="text-white/20 hover:text-primary transition-colors p-1"
                      >
                        {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                      </button>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-white/90 font-mono truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>

                <div className="absolute bottom-2 right-2 opacity-20">
                    <div className="w-4 h-4 border-b border-r border-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Global Status HUD */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-white/5 bg-white/[0.02] rounded-3xl px-8 backdrop-blur-xl relative overflow-hidden">
            {/* HUD scanline */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 animate-scan-hud" />
            
            <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest font-code">Satellite Location</span>
                <div className="flex items-center gap-2 text-white/80 font-semibold uppercase">
                    <FaMapMarkerAlt className="text-secondary" />
                    Patna, Bihar, IN
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/5">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest font-code">System Time</span>
                <span className="text-white/80 font-mono text-lg">IST (UTC +5:30)</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest font-code">Firewall Status</span>
                <span className="text-green-400 text-sm flex items-center gap-2 font-bold tracking-tighter">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    SECURE_AND_ACTIVE
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;