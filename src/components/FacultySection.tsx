import React, { useState } from 'react';
import { FACULTY_DATA, TEAM_DATA_2026 } from '../data/branchData';
import type { FacultyAdvisor } from '../types';
import { GraduationCap, ShieldCheck, Info, Users, Sparkles } from 'lucide-react';


export const FacultySection: React.FC = () => {
  const [activeAdvisor, setActiveAdvisor] = useState<FacultyAdvisor | null>(null);

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Mentorship & Governance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Faculty Counselors & Advisors
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-md">
            Guiding student innovators with engineering ethics, IEEE UP Section mentorship, and academic governance.
          </p>
        </div>

        {/* Real Profile Notice */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1D33] border border-blue-200 dark:border-blue-900/40 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="font-semibold">Authentic BBDITM Faculty Leadership & Branch Counselor Office.</span>
          </div>
          <span className="hidden sm:inline font-mono text-[#002855] dark:text-cyan-300 font-bold text-[11px]">BBDITM LUCKNOW</span>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_DATA.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setActiveAdvisor(activeAdvisor?.id === fac.id ? null : fac)}
              className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#002855]/50 dark:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                
                {/* Real Photo Card */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform bg-slate-900">
                  <img 
                    src={fac.imageUrl || "/committee-photo.jpg"} 
                    alt={fac.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-cyan-300 font-bold">
                      BBDITM
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                      ADVISOR
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between text-[10px] text-white">
                    <span className="font-medium truncate">{fac.imagePlaceholder}</span>
                    <span className="text-emerald-400 font-mono">VERIFIED</span>
                  </div>
                </div>

                {/* Information */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold tracking-wide uppercase text-[#00629B] dark:text-cyan-400">
                    {fac.ieeeRole}
                  </span>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#002855] dark:group-hover:text-cyan-300 transition-colors">
                    {fac.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                    {fac.designation}
                  </div>

                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    {fac.department}
                  </div>
                </div>

                {/* Profile Bio */}
                <p className="text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800/80 leading-relaxed">
                  {fac.bio}
                </p>

              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-mono">BBDITM LUCKNOW</span>
                <span className="flex items-center gap-1 text-[#002855] dark:text-cyan-400 font-bold">
                  <span>Leadership Info</span>
                  <Info className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* 2026 OFFICIAL OFFICE BEARERS / STUDENT EXECUTIVE COMMITTEE */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Executive Committee 2026</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Official Student Office Bearers — 2026
              </h3>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-[#0D1D33] text-[#002855] dark:text-cyan-300 border border-blue-200 dark:border-blue-900">
              Verified from Branch Charter Record (STB10214)
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {TEAM_DATA_2026.map((member) => {
              const isSheetal = member.name.toLowerCase().includes('sheetal');
              return (
                <div
                  key={member.id}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isSheetal
                      ? 'bg-gradient-to-b from-blue-50 to-white dark:from-[#0f2a4a] dark:to-[#0A1A2E] border-cyan-400 dark:border-cyan-500 shadow-lg ring-2 ring-cyan-400/30'
                      : 'bg-white dark:bg-[#0D1D33] border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100/70 dark:bg-blue-900/40 text-[#002855] dark:text-cyan-300 font-bold">
                        2026 ExCom
                      </span>
                      {isSheetal && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">
                          <Sparkles className="w-3 h-3" />
                          <span>PELS Lead</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#002855] dark:text-cyan-400 mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {member.department}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
                    <span>{member.year}</span>
                    <span className="text-emerald-500 font-bold">ACTIVE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
