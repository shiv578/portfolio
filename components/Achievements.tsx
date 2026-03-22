import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { Trophy, Zap, ChevronRight, Award } from "lucide-react";

const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Heading with Cyberpunk Subtitle */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter">
             ACHIEVE<span className="text-primary">MENTS</span>
          </h2>
          <div className="flex items-center justify-center gap-3 font-code text-xs tracking-[0.4em] text-white/30 uppercase">
            <div className="h-px w-8 bg-white/20" />
            <span>Milestones_Detected</span>
            <div className="h-px w-8 bg-white/20" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
            >
              {/* Border Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-500" />
              
              {/* Main Card Body */}
              <div className="relative bg-[#0d0d0f]/90 backdrop-blur-xl p-8 rounded-2xl h-full flex flex-col">
                
                {/* Top Row: Icon and Index */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                    <Trophy className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-code text-[10px] text-white/20 tracking-widest uppercase">
                    ID: 00{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Footer UI */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-code text-primary uppercase tracking-widest">
                    <Zap size={14} className="animate-pulse" />
                    <span>Verified_Record</span>
                  </div>
                  
                  {/* Decorative "Arrow" that slides in on hover */}
                  <div className="flex items-center gap-1 text-white/20 group-hover:text-primary transition-all translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] font-bold">DETAILS</span>
                    <ChevronRight size={14} />
                  </div>
                </div>

                {/* Rare Effect: Inner Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;