import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { Trophy, Zap } from "lucide-react";

const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      
      <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
        ACHIEVE<span className="text-primary">MENTS</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-primary" />
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-primary text-xs">
              <Zap size={12} /> Verified Achievement
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;