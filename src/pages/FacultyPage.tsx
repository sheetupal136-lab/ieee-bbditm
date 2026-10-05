import React from 'react';
import { FACULTY_DATA, TEAM_DATA_2026 } from '../data/branchData';
import { GraduationCap, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';
import { OfficeBearersBanner } from '../components/OfficeBearersBanner';

export const FacultyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Header */}
      <div className="relative py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Leadership & Governance</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Faculty Counselors & 2026 Office Bearers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Meet the distinguished professors, branch counselors, and student leaders steering IEEE BBDITM (STB10214) with technological innovation and executive rigor.
            </p>
          </ScrollPop>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Verification Alert */}
        <ScrollPop direction="up">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1D33] border border-blue-200 dark:border-blue-900/50 shadow-sm flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">Official Leadership Hierarchy — IEEE Uttar Pradesh Section Recognized.</span>
            </div>
            <span className="font-mono text-[#002855] dark:text-cyan-400 font-bold hidden sm:inline">STB10214 LUCKNOW</span>
          </div>
        </ScrollPop>

        {/* Faculty Grid */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#002855] dark:text-cyan-400" />
            <span>Faculty Advisory Board & Counselors</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACULTY_DATA.map((fac, idx) => (
              <ScrollPop key={fac.id} direction="up" delay={idx * 0.1}>
                <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-md hover:shadow-xl hover:border-[#002855]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Photo */}
                  <div className="w-full sm:w-48 aspect-square sm:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 relative flex-shrink-0 shadow-lg border border-slate-200/40 dark:border-slate-700/60">
                    <img 
                      src={fac.imageUrl || "/committee-photo.jpg"} 
                      alt={fac.name} 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 inset-x-2 text-[10px] font-mono text-cyan-300 text-center font-bold tracking-wider uppercase bg-[#002855]/80 backdrop-blur-sm py-1 rounded-md border border-cyan-400/30">
                      {fac.name.includes('Rafik') ? 'Branch Counselor' :
                       fac.name.includes('Alka') ? 'Chief Patron' :
                       fac.name.includes('Anurag') ? 'BBDITM Faculty & Advisor' :
                       'Institutional Patron'}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#00629B] dark:text-cyan-400">
                      {fac.ieeeRole}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {fac.name}
                    </h3>

                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {fac.designation}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {fac.department}
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
                      {fac.bio}
                    </p>
                  </div>
                </div>
              </ScrollPop>
            ))}
          </div>
        </div>

        {/* 2026 Student Executive Committee Section */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Student Leadership</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white">
                Official Office Bearers — 2026
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-[#0D1D33] text-[#002855] dark:text-cyan-300 border border-blue-200 dark:border-blue-900">
              STB10214 Executive Council
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {TEAM_DATA_2026.map((member, idx) => {
              const isSheetal = member.name.toLowerCase().includes('sheetal');
              return (
                <ScrollPop key={member.id} direction="up" delay={idx * 0.05}>
                  <div
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                      isSheetal
                        ? 'bg-gradient-to-b from-blue-50 to-white dark:from-[#0f2a4a] dark:to-[#0A1A2E] border-cyan-400 dark:border-cyan-500 shadow-xl ring-2 ring-cyan-400/30'
                        : 'bg-white dark:bg-[#0D1D33] border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-[#002855] dark:text-cyan-300 font-bold">
                          2026 Office Bearer
                        </span>
                        {isSheetal && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">
                            <Sparkles className="w-3 h-3" />
                            <span>PELS Lead</span>
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#002855] dark:text-cyan-400 mt-0.5">
                          {member.role}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {member.department}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
                      <span>{member.year}</span>
                      <span className="text-emerald-500 font-bold">VERIFIED</span>
                    </div>
                  </div>
                </ScrollPop>
              );
            })}
          </div>
        </div>

        {/* Master Chart Banner at Bottom of Team Page */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <OfficeBearersBanner />
        </div>

      </div>
    </div>
  );
};
