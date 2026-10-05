import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data/branchData';
import { Trophy, Award, Calendar } from 'lucide-react';

export const AchievementTimeline: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-white dark:bg-[#07111E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Recognitions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Branch Achievement Timeline
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-md">
            Milestones, national hackathon podiums, and IEEE UP Section awards achieved by BBDITM innovators.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[#00629B] via-[#00A3E0]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {ACHIEVEMENTS_DATA.map((ach, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={ach.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Timeline Milestone Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0D1D33] border-4 border-[#00629B] dark:border-cyan-400 items-center justify-center shadow-lg z-10 text-xs font-bold text-slate-800 dark:text-white">
                    <Award className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                  </div>

                  {/* Content Column */}
                  <div className="w-full md:w-1/2 px-0 md:px-10">
                    <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-all duration-300 group">
                      
                      {/* Year & Category Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#00629B] dark:bg-[#152E50] dark:text-cyan-300 text-xs font-bold font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>YEAR {ach.year}</span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {ach.category}
                        </span>
                      </div>

                      {/* Real Achievement Image */}
                      <div className="mb-5 aspect-[16/9] rounded-xl overflow-hidden relative group-hover:scale-[1.01] transition-transform bg-slate-900 shadow-sm">
                        <img 
                          src={ach.imageUrl || "/award-ceremony.jpg"} 
                          alt={ach.title}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2 left-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-300 backdrop-blur-md">
                            VERIFIED RECORD
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white truncate">
                          {ach.imagePlaceholder}
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {ach.title}
                      </h3>

                      <div className="text-xs font-bold text-[#00629B] dark:text-cyan-400 mt-1 mb-3">
                        Awarding Body: {ach.organization}
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {ach.description}
                      </p>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Grid */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
