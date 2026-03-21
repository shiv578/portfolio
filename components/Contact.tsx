import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents mailto from opening when clicking the copy icon
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
href: "https://mail.google.com/mail/?view=cm&fs=1&to=swarajrkfl22@gmail.com&su=Contact from Portfolio&body=Hi Shivam,",
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
    <section className="bg-[#020205] text-white py-24 px-6 relative overflow-hidden font-sans">
      
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Floating Light Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/5 text-[11px] tracking-[0.3em] font-bold text-primary uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online: Link Ready
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            GET IN <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-secondary animate-gradient-x">TOUCH</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed italic">
            "The best way to predict the future is to build it." <br/>
            <span className="not-italic text-sm text-white/30 tracking-widest uppercase block mt-2">— Available for global opportunities</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, idx) => (
<a
  key={idx}
  href={link.href}
  target={link.isEmail ? "_self" : "_blank"}
  rel="noreferrer"
  className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
>
              {/* Animated Border Beam */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              
              <div className="relative h-full bg-[#0a0a14]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-start gap-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} text-3xl text-primary transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}>
                  {link.icon}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] uppercase tracking-tighter text-white/40 font-bold">
                      {link.label}
                    </p>
                    {link.isEmail && (
                      <button 
                        onClick={copyEmail}
                        className="text-white/20 hover:text-primary transition-colors p-1"
                        title="Copy to clipboard"
                      >
                        {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                      </button>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-white/90 font-mono truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>

                {/* Cyberpunk Decorative Corner */}
                <div className="absolute bottom-2 right-2 opacity-20">
                    <div className="w-4 h-4 border-b border-r border-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Global Status HUD */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/5 bg-white/[0.01] rounded-2xl px-8 backdrop-blur-sm">
            <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Location</span>
                <div className="flex items-center gap-2 text-white/80">
                    <FaMapMarkerAlt className="text-secondary" />
                    Patna, Bihar, IN
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/5">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Timezone</span>
                <span className="text-white/80 font-mono">IST (UTC +5:30)</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Network Status</span>
                <span className="text-green-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Encrypted & Active
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;