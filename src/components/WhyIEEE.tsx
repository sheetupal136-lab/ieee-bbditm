import React from 'react';
import { WHY_IEEE_POINTS } from '../data/branchData';
import { 
  GraduationCap, 
  Hammer, 
  Network, 
  Users, 
  BookOpen, 
  Trophy,
  Sparkles
} from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
};

export const WhyIEEE: React.FC = () => {
  return (
    <section id="why-ieee" className="py-20 lg:py-28 bg-white dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Member Advantages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why Join IEEE at BBDITM?
          </h2>
          <p className="text-slate-700 dark:text-slate-400 text-base sm:text-lg">
            A launchpad for engineering careers, research publications, and lifelong professional connections.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_IEEE_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-slate-50/80 dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#152E50] border border-blue-200 dark:border-blue-800 flex items-center justify-center text-[#00629B] dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {iconComponents[point.icon]}
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors mb-3">
                {point.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
