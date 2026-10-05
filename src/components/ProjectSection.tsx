import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/branchData';
import type { ProjectItem } from '../types';
import { Cpu, ArrowUpRight } from 'lucide-react';

const TiltCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = ((y - centerY) / centerY) * -4;
    const rY = ((x - centerX) / centerX) * 4;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#00629B]/50 dark:hover:border-cyan-500/40 transition-shadow duration-300 group"
    >
      <div className="space-y-4">
        
        {/* Project Real Image Frame */}
        <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative group-hover:scale-[1.01] transition-transform bg-slate-900">
          <img 
            src={project.imageUrl || "/event-conclave.jpg"} 
            alt={project.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-white/10 font-bold">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded">
              BBDITM LAB
            </span>
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white">
            <span className="font-semibold">{project.imagePlaceholder}</span>
            <span className="text-emerald-400 font-mono text-[10px]">ACTIVE PROTOTYPE</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2.5 pt-2">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technology.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#152E50] text-slate-800 dark:text-cyan-200 border border-slate-200 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Button */}
      <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => alert(`Details for "${project.title}": Technical schematic repository will be linked.`)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] dark:text-cyan-400 hover:text-[#004e7b] dark:hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
          STUDENT INITIATIVE
        </span>
      </div>

    </div>
  );
};

export const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Applied R&D</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Student Engineering Projects
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-md">
            Multidisciplinary hardware & software prototypes engineered by IEEE BBDITM student innovators.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <TiltCard key={proj.id} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
};
