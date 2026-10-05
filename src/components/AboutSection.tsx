import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Building2, 
  Calendar, 
  ArrowRight,
  Maximize2,
  X,
  Users,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-slate-50/60 dark:bg-[#07111E] transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00629B]/10 dark:bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002855]/10 dark:bg-[#002855]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: OFFICIAL TEAM PHOTO ================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative w-full max-w-[500px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 dark:border-slate-700/80 shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-cyan-500/15 hover:-translate-y-1"
            >
              {/* Official Team Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img 
                  src="/images/ieee-bbditm-team-2025-2026.png" 
                  alt="IEEE BBDITM Official Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#002855]/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 shadow-md flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Executive Committee</span>
                  </span>
                </div>

                {/* Expand Fullscreen Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxOpen(true);
                    }}
                    className="p-2 rounded-full bg-black/60 hover:bg-[#002855] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-md"
                    title="Expand Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Caption inside image */}
                <div className="absolute bottom-4 inset-x-5 text-left z-10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold mb-0.5">
                    Student Branch • STB10214
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Executive Committee & Society Chairs
                  </h3>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-4 bg-white dark:bg-[#0D1D33] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  BBD Educational City Campus, Lucknow
                </span>
                <span className="font-mono text-[#00629B] dark:text-cyan-400 font-bold">
                  STB10214 • Region 10
                </span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ABOUT CONTENT & 4 INFO CARDS ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-[#0f233d]/90 border border-blue-200 dark:border-[#1e3a5f] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#002855] dark:text-cyan-300">
                ABOUT IEEE BBDITM
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                MORE THAN A STUDENT BRANCH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002855] via-[#00629B] to-[#00A3E0] dark:from-[#38BDF8] dark:via-[#60A5FA] dark:to-[#38BDF8]">
                  IT'S A LAUNCHPAD.
                </span>
              </h2>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              The IEEE Student Branch at <strong>BBDITM Lucknow (STB10214)</strong> is a premier student technology community dedicated to hands-on engineering, multidisciplinary innovation, robotics, space technology dialogues with ISRO scientists, and published research. We bridge undergraduate talent with the global IEEE network through 7 specialized societies, competitive hackathons, and world-class mentorship.
            </p>

            {/* 4 Small Premium Info Cards (Grid 2x2) */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              
              {/* Card 1: Branch ID */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                  <span>Branch ID</span>
                </div>
                <div className="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  STB10214
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  IEEE Uttar Pradesh Section
                </div>
              </div>

              {/* Card 2: Institution */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                  <Building2 className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                  <span>Institution</span>
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate">
                  BBDITM, Lucknow
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  AKTU Affiliated • BBD Group
                </div>
              </div>

              {/* Card 3: Charter Status */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                  <Calendar className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                  <span>Charter Status</span>
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Active Charter
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Region 10 (Asia-Pacific)
                </div>
              </div>

              {/* Card 4: Location */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                  <span>Location</span>
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Lucknow, India
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  BBD Educational City
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#002855] via-[#003875] to-[#00629B] hover:from-[#001D3D] hover:to-[#004e7b] rounded-xl shadow-md transition-all active:scale-95 group"
              >
                <BookOpen className="w-4 h-4 text-cyan-300" />
                <span>Explore 3D History Chronicle</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0F233D]/80 hover:bg-slate-100 dark:hover:bg-[#152e50] border border-slate-300 dark:border-slate-700/80 rounded-xl transition-all shadow-sm group"
              >
                <span>Join IEEE Official</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#071322] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#002855] text-white">
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <span>IEEE BBDITM Official Team</span>
                </h3>
                <p className="text-xs text-cyan-200 font-mono">
                  Student Branch Executive Committee • STB10214
                </p>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 flex items-center justify-center max-h-[75vh] overflow-hidden bg-black">
              <img 
                src="/images/ieee-bbditm-team-2025-2026.png" 
                alt="IEEE BBDITM Team Fullscreen" 
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
