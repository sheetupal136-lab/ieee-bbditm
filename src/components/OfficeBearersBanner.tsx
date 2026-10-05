import React, { useState } from 'react';
import { Users, ShieldCheck, Maximize2, X, Download } from 'lucide-react';

import { ScrollPop } from './ScrollPop';

export const OfficeBearersBanner: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#07111E] dark:to-[#0A1726] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Official Branch Leadership 2026</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              IEEE Office Bearers — 2026
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl">
              IEEE BBDITM Student Branch Executive Committee, Society Chairs, Webmasters, and Patrons guiding STB10214.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white dark:bg-[#0D1D33] text-[#002855] dark:text-cyan-300 border border-slate-200 dark:border-slate-700 font-bold shadow-sm">
              Verified STB10214 Chart
            </span>
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-[#002855] hover:bg-[#003B75] text-white shadow-sm transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>View Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Master Chart Banner Card */}
        <ScrollPop direction="up">
          <div 
            onClick={() => setLightboxOpen(true)}
            className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700/80 shadow-2xl bg-white dark:bg-[#071322] cursor-pointer group"
          >
            <div className="w-full overflow-hidden bg-slate-950/5 relative">
              <img
                src="/images/ieee-office-bearers-2026.png"
                alt="IEEE Office Bearers - 2026 IEEE BBDITM Student Branch Executive Committee"
                className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#002855]/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-xl bg-[#002855]/90 text-white font-bold text-xs backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to Expand High-Resolution Chart</span>
                </span>
              </div>
            </div>

            {/* Banner Caption Footer */}
            <div className="p-4 sm:p-5 bg-white dark:bg-[#0D1D33] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Official Executive Committee Roster — IEEE Region 10 & UP Section
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#002855] dark:text-cyan-400 font-bold">
                <span>Mrs. Alka Das • Shri Viraj Sagar Das • Dr. Anurag Tiwari • Prof. Rafik Ahmad</span>
              </div>
            </div>
          </div>
        </ScrollPop>

      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] bg-white dark:bg-[#071529] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 bg-[#002855] text-white flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  IEEE Office Bearers - 2026
                </h3>
                <p className="text-xs text-cyan-200 font-mono">
                  IEEE BBDITM Student Branch Executive Committee Chart
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/images/ieee-office-bearers-2026.png"
                  download="IEEE-BBDITM-Office-Bearers-2026.png"
                  className="p-2 text-cyan-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  title="Download High-Res Banner"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 text-cyan-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body with Zoom */}
            <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-100 dark:bg-black/50">
              <img
                src="/images/ieee-office-bearers-2026.png"
                alt="IEEE BBDITM Office Bearers 2026 Full Chart"
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OfficeBearersBanner;

