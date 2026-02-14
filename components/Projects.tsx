
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Activity } from 'lucide-react';
import fitnationPreview from "./assest/fitnation-preview.png";
import propertyPreview from "./assest/property.png";


const Projects: React.FC = () => {
  return (
<section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-center">
          PROJ<span className="text-secondary">ECTS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="glass-card rounded-xl overflow-hidden flex flex-col group border-white/5 hover:border-secondary/40 transition-all duration-700">
              <div className="relative h-64 overflow-hidden">
   <img 
  src={
    project.title === "Fit Nation"
      ? fitnationPreview
      : project.title === "Property Management"
      ? propertyPreview
      : `https://picsum.photos/800/600?random=${idx + 10}`
  }
  alt={project.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
/>


                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-code text-secondary-light bg-secondary/20 px-2 py-1 rounded-sm border border-secondary/30 uppercase tracking-widest">
                    {project.status}
                  </span>
                  <h3 className="text-3xl font-heading font-black mt-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-code px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-white/50">
                      #{t.toUpperCase()}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-accent font-bold text-secondary">{m.value}</div>
                      <div className="text-[10px] text-white/40 uppercase font-code">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      className="flex items-center gap-2 text-sm font-heading font-bold text-white hover:text-secondary transition-colors"
                    >
                      {link.label === 'GitHub' ? <Github size={16} /> : <ExternalLink size={16} />}
                      {link.label}
                    </a>
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

export default Projects;
