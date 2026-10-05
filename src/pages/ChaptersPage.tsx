import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/branchData';
import { 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  HelpCircle
} from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';

export const ChaptersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Societies & Groups (7)' },
    { id: 'computing', label: 'Computing & Software' },
    { id: 'power', label: 'Power & Energy' },
    { id: 'robotics', label: 'Robotics & Signal' },
    { id: 'affinity', label: 'Affinity & Humanitarian' },
  ];

  const filteredChapters = CHAPTERS_DATA.filter((ch) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'computing') return ch.id === 'cs';
    if (selectedCategory === 'power') return ch.id === 'pes' || ch.id === 'pels';
    if (selectedCategory === 'robotics') return ch.id === 'ras' || ch.id === 'sps';
    if (selectedCategory === 'affinity') return ch.id === 'wie' || ch.id === 'sight';
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Header */}
      <div className="relative py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Specialized Technical Societies</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Chapters & Affinity Groups
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              IEEE BBDITM hosts 7 active technical societies and affinity groups. Each group operates under IEEE Region 10 and the IEEE Uttar Pradesh Section, connecting undergraduate engineering students with world-class journals, international conferences, and domain mentorship.
            </p>
          </ScrollPop>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#00629B] text-white shadow-md shadow-[#00629B]/20'
                  : 'bg-white dark:bg-[#0D1D33] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredChapters.map((ch, idx) => (
            <ScrollPop key={ch.id} direction="up" delay={idx * 0.08}>
              <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-3.5 h-3.5 rounded-full" 
                        style={{ backgroundColor: ch.color }} 
                      />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00629B] dark:text-cyan-400">
                        {ch.tagline}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {ch.established}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">
                      {ch.shortName}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                      {ch.name}
                    </h3>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {ch.description}
                  </p>

                  {/* Focus Tracks */}
                  <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Technical Domains at BBDITM:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                      {ch.focusTracks.map((t, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#00629B] dark:text-cyan-400 flex-shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    <div className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Society Member Privileges:
                    </div>
                    <div className="space-y-1.5">
                      {ch.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Buttons with Official IEEE.org link */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5">
                    {/* Official Join on IEEE.org Button */}
                    <a
                      href={ch.officialJoinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00629B] hover:bg-[#004e7b] text-white text-xs font-bold transition-all shadow-md active:scale-98"
                    >
                      <span>Join Society on IEEE.org</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Official Society Web Portal */}
                    <a
                      href={ch.officialWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                    >
                      <span>Official Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>IEEE BBDITM • STB10214</span>
                    <span className="text-emerald-500 font-semibold">Active Technical Chapter</span>
                  </div>
                </div>

              </div>
            </ScrollPop>
          ))}
        </div>

        {/* Step-by-Step Guide on Joining Any Society on IEEE.org */}
        <ScrollPop direction="up">
          <div className="rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-[#00629B] dark:text-cyan-400">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  How to Join a Society on the Official IEEE.org Website
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                  Follow these 3 simple official steps to link your membership with IEEE BBDITM Student Branch.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-2xl font-extrabold text-[#00629B] dark:text-cyan-400">01</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Create IEEE Account</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Visit <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-[#00629B] dark:text-cyan-400 underline font-semibold">ieee.org</a> and sign up with your university email. Choose Student Membership for a 50% discount.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-2xl font-extrabold text-[#00629B] dark:text-cyan-400">02</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Add Societies</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  During checkout or in your profile, browse Society Memberships (CS, PES, PELS, SPS, RAS, WIE) and add them at student rates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono text-2xl font-extrabold text-[#00629B] dark:text-cyan-400">03</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Select BBDITM Branch</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Enter institution as Babu Banarasi Das Institute of Technology and Management (Branch Code: STB10214 / STB99081, IEEE UP Section).
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Need guidance? Reach out to our Branch Counselor or Executive Leads on campus.
              </span>
              <a
                href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#00629B] hover:bg-[#004e7b] text-white font-bold text-xs inline-flex items-center gap-2 shadow-sm"
              >
                <span>Open IEEE.org Membership Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollPop>

      </div>
    </div>
  );
};
