
import React from 'react';
import { CERTIFICATES } from '../constants';
import { ShieldCheck, ExternalLink, Zap } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
<section id="certifications" className="py-24 px-4 bg-dark-bg/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-4">
            CERTIFI<span className="text-gradient">CATIONS</span>
          </h2>
          <p className="text-white/40 font-code text-sm tracking-widest uppercase">Digital Ledger Archive | Proof of Competence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <div key={idx} className="group h-[380px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 glass-card rounded-xl p-8 flex flex-col [backface-visibility:hidden] border-white/10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ShieldCheck className="text-primary w-8 h-8" />
                    </div>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/60 font-code uppercase">
                      {cert.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-black mb-2 text-white/90 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-auto">
                    {cert.provider}
                  </p>

                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/30 font-code">DATE</span>
                      <span className="text-white/70">{cert.date}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/30 font-code">DUR.</span>
                      <span className="text-white/70">{cert.duration}</span>
                    </div>
                    <div className="h-[1px] bg-white/10 w-full" />
                    <div className="flex justify-between text-xs">
                      <span className="text-white/30 font-code">CREDENTIAL_ID</span>
                      <span className="text-white/70 font-code">{cert.credentialId.split('-').pop()}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center text-[10px] text-primary/40 font-code animate-pulse">
                    HOVER TO DECRYPT METADATA
                  </div>
                </div>

                {/* Back Side (The "Decrypted" Metadata) */}
                <div className="absolute inset-0 glass-card rounded-xl p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] border-primary/40 bg-darker-bg">
                  <div className="flex items-center gap-2 text-primary font-code text-xs mb-6">
                    <Zap size={14} /> DECRYPTED_METADATA_v1.0
                  </div>

                  <div className="space-y-4 mb-auto">
                    <div>
                      <div className="text-[10px] text-white/30 font-code uppercase mb-1">Full_Credential_ID</div>
                      <div className="text-xs font-code text-white/80">{cert.credentialId}</div>
                    </div>
                    {cert.grade && (
                      <div>
                        <div className="text-[10px] text-white/30 font-code uppercase mb-1">Performance_Grade</div>
                        <div className="text-sm font-bold text-tertiary">{cert.grade}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-[10px] text-white/30 font-code uppercase mb-2">Acquired_Competencies</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((s, i) => (
                          <span key={i} className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href={cert.verifyLink}
                    className="mt-8 w-full py-3 bg-primary text-darker-bg font-heading font-bold rounded flex items-center justify-center gap-2 hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} /> VERIFY_ON_BLOCKCHAIN
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
