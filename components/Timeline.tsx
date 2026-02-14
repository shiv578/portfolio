
import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { GraduationCap, Award, BookOpen, MapPin, Building, Trophy, Zap } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-7xl font-heading font-black mb-4 tracking-tighter">
          ACADEMIC <span className="text-primary">GENESIS</span>
        </h2>
        <div className="hud-line max-w-md mx-auto opacity-50" />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-primary opacity-20 hidden md:block" />

        <div className="space-y-32">
          {TIMELINE_DATA.map((item, idx) => {
            const isSchool = item.id === 'ccds';
            const accentColor = isSchool ? '#ff00ff' : '#00f2ff'; // Custom pink accent for school
            
            return (
              <div key={item.id} className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full z-10 hidden md:block"
                  style={{ 
                    backgroundColor: accentColor,
                    boxShadow: `0 0 15px ${accentColor}`
                  }}
                />

                {/* Detail Card */}
                <div className="w-full md:w-[48%] group perspective-1000">
                  <div className="glass-card p-8 rounded-xl relative overflow-hidden transition-all duration-700 hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]">
                    
                    {/* Institutional Heritage Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-heading font-black group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary font-medium text-sm mt-1">
                          <Building size={14} />
                          {item.institution}
                        </div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-primary/10 transition-colors">
                        {item.type === 'SCHOOL' ? <GraduationCap className="text-primary" /> : item.type === 'DIPLOMA' ? <Award className="text-primary" /> : <BookOpen className="text-primary" /> }
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-card bg-white/5 p-3 rounded-lg">
                        <div className="text-[10px] text-white/40 uppercase font-code">Academic Performance</div>
                        <div className="text-lg font-accent font-bold text-tertiary">{item.performance}</div>
                      </div>
                      <div className="glass-card bg-white/5 p-3 rounded-lg">
                        <div className="text-[10px] text-white/40 uppercase font-code">Duration</div>
                        <div className="text-lg font-accent font-bold text-white/80">{item.period}</div>
                      </div>
                    </div>

                    <p className="text-white/60 font-body text-sm leading-relaxed mb-8 italic">
                      "{item.description}"
                    </p>

                    {/* Institutional Profile Section */}
                    <div className="border-t border-white/10 pt-6 space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-code text-primary tracking-widest uppercase mb-2">
                        <Trophy size={10} /> Institutional_Heritage
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs">
                        {item.detailedProfile && Object.entries(item.detailedProfile).map(([key, val]) => (
                          <div key={key} className="flex justify-between pr-4">
                            <span className="text-white/40 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="text-white/80 font-medium">{val as string}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements List */}
                    <div className="mt-8 space-y-2">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-white/70 bg-primary/5 p-2 rounded border border-primary/10">
                          <div 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: accentColor, boxShadow: `0 0 5px ${accentColor}` }}
                          />
                          {ach}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Frame - Optimized for the Pink Neon School Image */}
                <div className={`w-full md:w-[48%] relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-700 ${isSchool ? 'hover:border-[#ff00ff]/50' : 'hover:border-primary/50'}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
              <img 
  src={item.visuals} 
  alt={item.institution} 
  className="w-full h-full object-cover  opacity-90 group-hover:grayscale-0 group-hover:opacity-150 group-hover:scale-105 transition-all duration-1000"
/>

                    
                    {/* Retro-Synth/Cyber Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-darker-bg via-transparent to-transparent opacity-80`} />
                    
                    {/* Dynamic HUD Scanline for the specific school image */}
                    {isSchool && (
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[length:100%_4px] animate-pulse opacity-30" />
                    )}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card px-4 py-3 rounded border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-[10px] font-code mb-1" style={{ color: accentColor }}>
                        <MapPin size={10} /> SYSTEM_LOCATOR
                      </div>
                      <div className="text-xs font-heading text-white/80 tracking-wide flex justify-between items-center">
                        <span>{item.institution.split(',')[1] || 'Patna, Bihar'}</span>
                        {isSchool && <Zap size={12} className="animate-pulse" style={{ color: accentColor }} />}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
