import React from 'react';
import { SKILLS } from '../constants';

const SkillsGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark-bg/50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center relative">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter">
            TECHNICAL <span className="text-primary animate-pulse">SKILLS</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-lg border border-white/5 relative overflow-hidden group 
                         hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent"
            >
              {/* Animated Scanline Effect on Hover */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full animate-[scan_3s_linear_infinite]" />
              </div>

              {/* Top Right Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/5 group-hover:border-primary/40 transition-colors duration-500 rounded-tr-lg" />

              {/* Header */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {skill.name}
                  </h3>
                  <div className="text-[10px] text-primary/60 font-code tracking-[0.2em] uppercase mt-2">
                    System_Capacity: {skill.percentage}%
                  </div>
                </div>

                {skill.badge && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[9px] font-bold border border-primary/20 uppercase tracking-widest backdrop-blur-md">
                    {skill.badge}
                  </span>
                )}
              </div>

              {/* Details List */}
              <ul className="space-y-4 mb-10 relative z-10">
                {skill.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rotate-45 group-hover:bg-primary transition-colors duration-300 shrink-0 shadow-[0_0_8px_rgba(var(--secondary-rgb),0.4)]" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Progress HUD Footer */}
              <div className="relative pt-6 border-t border-white/5 mt-auto">
                <div className="flex justify-between text-[10px] text-white/30 mb-3 font-code tracking-widest">
                  <span className="group-hover:text-primary transition-colors">DRIVE_SYNC</span>
                  <span className="group-hover:text-white transition-colors">{skill.percentage}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px] ring-1 ring-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] rounded-full transition-all duration-1000 ease-out group-hover:animate-[shimmer_2s_linear_infinite]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;