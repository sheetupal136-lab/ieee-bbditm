import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/branchData';
import type { ChapterItem } from '../types';
import { 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  X, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export const ChaptersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalChapter, setActiveModalChapter] = useState<ChapterItem | null>(null);

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
    <section id="chapters" className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Specialized Technical Societies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Societies & Affinity Groups
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-md">
            7 active technical chapters operating at IEEE BBDITM. Join directly through the official IEEE.org portal to access specialized journals, travel grants, and global tracks.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
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

        {/* Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((ch) => (
            <div
              key={ch.id}
              className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 hover:shadow-blue-500/5 dark:hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div className="space-y-5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: ch.color }} 
                    />
                    <span className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                      {ch.shortName}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 font-bold border border-blue-200/60 dark:border-blue-900/40">
                    {ch.established}
                  </span>
                </div>

                {/* Tagline & Full Name */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-[#00629B] dark:text-cyan-400 uppercase tracking-wider">
                    {ch.tagline}
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {ch.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {ch.description}
                </p>

                {/* Focus Tracks Preview */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Core Focus Tracks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ch.focusTracks.slice(0, 3).map((track, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {track}
                      </span>
                    ))}
                    {ch.focusTracks.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400">
                        +{ch.focusTracks.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Actions & Official IEEE.org Link */}
              <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2">
                  {/* Primary: Official IEEE.org Join Link */}
                  <a
                    href={ch.officialJoinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00629B] hover:bg-[#004e7b] dark:bg-[#00629B] dark:hover:bg-[#007cb8] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                    title={`Join ${ch.shortName} officially on IEEE.org`}
                  >
                    <span>Join on IEEE.org</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Secondary: Inspect Details Modal */}
                  <button
                    onClick={() => setActiveModalChapter(ch)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                    title="View Society Info & Benefits"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-mono">BBDITM LUCKNOW</span>
                  <a
                    href={ch.officialWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#00629B] dark:hover:text-cyan-300 font-semibold"
                  >
                    <span>Official Portal</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Membership Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-[#002855] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official IEEE Membership Portal</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold">
              Want to Join General IEEE Student Branch STB10214?
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
              Register via the official IEEE.org membership gateway, add BBDITM Student Branch, and select your preferred technical society add-ons at student discounted rates.
            </p>
          </div>
          <a
            href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#00629B] font-bold text-sm inline-flex items-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <span>Register on IEEE.org</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Society Details Modal */}
      {activeModalChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0D1D33] rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalChapter(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeModalChapter.color }} />
                <span className="text-xs font-mono font-bold text-[#00629B] dark:text-cyan-400 uppercase">
                  {activeModalChapter.tagline}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {activeModalChapter.name}
              </h3>
            </div>

            {/* Detailed Description */}
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeModalChapter.description}
            </p>

            {/* Focus Tracks */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Active Technical Tracks at BBDITM:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalChapter.focusTracks.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Member Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Official IEEE Member Benefits:
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {activeModalChapter.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Official Join Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={activeModalChapter.officialJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-[#00629B] hover:bg-[#004e7b] text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Proceed to Official IEEE.org Join</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={activeModalChapter.officialWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Society Portal</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
