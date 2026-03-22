import React from 'react';

const SOFT_SKILLS = [
  {
    name: 'Adaptability',
    desc: 'Quickly learning new technologies and adjusting to changing requirements in high-pressure environments.',
    tag: 'FLEX_MOD'
  },
  {
    name: 'Teamwork',
    desc: 'Collaborating effectively with team members via distributed systems to achieve shared project goals.',
    tag: 'SYNC_MOD'
  },
  {
    name: 'Time Management',
    desc: 'Efficiently managing complex tasks, strict deadlines, and priority queuing for maximum output.',
    tag: 'LATENCY_CTRL'
  }
];

const SoftSkills: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark-bg/40 relative overflow-hidden group/section">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter">
            SOFT <span className="text-primary animate-pulse-slow">SKILLS</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-primary/60 font-code text-xs tracking-[0.3em] uppercase">Neural_Core_Processes</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOFT_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="group relative h-full transition-all duration-500 hover:-translate-y-2"
            >
              {/* Outer Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-500" />
              
              {/* Inner Card Body */}
              <div className="relative h-full bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 rounded-2xl overflow-hidden">
                
                {/* HUD Decoration */}
                <div className="absolute top-4 right-4 font-code text-[10px] text-white/20 group-hover:text-primary/50 transition-colors">
                  {skill.tag}
                </div>

                {/* Animated "Icon" - Geometric HUD elements */}
                <div className="relative w-16 h-16 mb-8 mx-auto">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-lg group-hover:rotate-180 transition-transform duration-1000" />
                  <div className="absolute inset-2 border border-secondary/30 rounded-full group-hover:animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {idx === 0 ? '⚡' : idx === 1 ? '🤝' : '⏱️'}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-white/50 leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  {skill.desc}
                </p>

                {/* Progress-style Dots */}
                <div className="flex justify-center gap-1.5 pt-6 border-t border-white/5">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 w-6 rounded-full transition-all duration-500 ${
                        i < 4 
                          ? 'bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]' 
                          : 'bg-white/5'
                      }`}
                      style={{ transitionDelay: `${i * 75}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;