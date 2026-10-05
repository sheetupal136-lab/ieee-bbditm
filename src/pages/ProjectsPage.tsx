import React from 'react';
import { PROJECTS_DATA } from '../data/branchData';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Header */}
      <div className="relative py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Student R&D Engineering</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hardware & Software Projects
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Explore multidisciplinary robotics rovers, renewable microgrid telemetries, and biomedical edge devices engineered at BBDITM labs.
            </p>
          </ScrollPop>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <ScrollPop key={proj.id} direction="up" delay={idx * 0.1}>
              <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-md hover:shadow-2xl hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="space-y-5">
                  
                  {/* Real Image */}
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 relative shadow-inner">
                    <img 
                      src={proj.imageUrl || "/event-conclave.jpg"} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-white/10">
                        {proj.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-bold">{proj.imagePlaceholder}</span>
                      <span className="text-emerald-400 font-mono text-[11px] font-bold">BBDITM LAB</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Technologies & Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {proj.technology.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#152E50] text-slate-800 dark:text-cyan-200 text-xs font-mono font-semibold border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => alert(`Technical documentation and schematic diagrams for ${proj.title} will be provided.`)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00629B] dark:text-cyan-400 hover:text-[#004e7b] dark:hover:text-cyan-300"
                  >
                    <span>Inspect Schematics & Code</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md">
                    VERIFIED
                  </span>
                </div>
              </div>
            </ScrollPop>
          ))}
        </div>

      </div>
    </div>
  );
};
