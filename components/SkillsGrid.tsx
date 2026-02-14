
import React from 'react';
import { SKILLS } from '../constants';

const SkillsGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
            TECH <span className="text-primary">STACK</span>
          </h2>
          <div className="hud-line max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="glass-card p-6 rounded-lg relative overflow-hidden group hover:bg-primary/5 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                  <div className="text-[10px] text-primary/60 font-code tracking-widest uppercase mt-1">Level: {skill.level}</div>
                </div>
                {skill.badge && (
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold border border-tertiary/20 rounded-sm">
                    {skill.badge}
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {skill.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1 h-1 bg-secondary rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Progress HUD */}
              <div className="mt-6">
                <div className="flex justify-between text-[10px] text-white/40 mb-1 font-code">
                  <span>SYNC_DATA</span>
                  <span>100%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-full animate-pulse" />
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
