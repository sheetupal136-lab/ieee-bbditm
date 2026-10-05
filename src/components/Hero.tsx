import React, { useState } from 'react';
import { Interactive3D } from './Interactive3D';
import { ShieldCheck, MapPin, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onJoinClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick: _onJoinClick }) => {
  const [dropKey, setDropKey] = useState(0);

  const handleReDrop = () => {
    setDropKey((prev) => prev + 1);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden transition-colors duration-300"
    >
      {/* ================= FULLSCREEN BACKGROUND COVER IMAGE ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img 
          src="/images/bbditm-campus-daytime-ieee.jpg" 
          alt="Babu Banarasi Das NITM Campus with 3D IEEE Monument" 
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Day/Night Multi-Stop Glass Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/88 to-blue-50/75 dark:from-[#060D17]/96 dark:via-[#071322]/90 dark:to-[#081729]/80 backdrop-blur-[2px]" />
        
        {/* Subtle Ambient Radial Lighting Gradient */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00629B]/15 dark:bg-[#00A3E0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#002855]/15 dark:bg-[#002855]/40 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT & 3D DROPPING LETTERS ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Attractive Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0f233d]/95 border border-[#002855]/20 dark:border-cyan-500/30 shadow-md backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#002855] dark:text-cyan-300">
                ADVANCING TECHNOLOGY FOR HUMANITY • STB10214
              </span>
            </div>

            {/* 3D DROPPING IEEE ALPHABETS DISPLAY */}
            <div className="pt-2 pb-1">

              {/* 3D Letters Falling Stage */}
              <div 
                key={dropKey}
                style={{ perspective: '1000px' }}
                className="flex items-center gap-2 sm:gap-3.5 select-none"
              >
                <div 
                  onClick={handleReDrop} 
                  className="ieee-3d-letter animate-letter-drop-1 group"
                  title="Letter I — IEEE STB10214"
                >
                  <span>I</span>
                </div>
                <div 
                  onClick={handleReDrop} 
                  className="ieee-3d-letter animate-letter-drop-2 group"
                  title="Letter E — IEEE STB10214"
                >
                  <span>E</span>
                </div>
                <div 
                  onClick={handleReDrop} 
                  className="ieee-3d-letter animate-letter-drop-3 group"
                  title="Letter E — IEEE STB10214"
                >
                  <span>E</span>
                </div>
                <div 
                  onClick={handleReDrop} 
                  className="ieee-3d-letter animate-letter-drop-4 group"
                  title="Letter E — IEEE STB10214"
                >
                  <span>E</span>
                </div>
              </div>
            </div>

            {/* Main Heading with Vibrant Gradient */}
            <div className="space-y-1">
              <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-[#001D3D] dark:text-white leading-[1.08]">
                INNOVATING THE FUTURE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002855] via-[#00629B] to-[#00A3E0] dark:from-[#38BDF8] dark:via-[#60A5FA] dark:to-[#38BDF8]">
                  POWERED BY IEEE BBDITM.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              Welcome to the premier student technology community at <strong className="text-[#001D3D] dark:text-white font-semibold">Babu Banarasi Das Institute of Technology and Management</strong>, Lucknow. Fostering multidisciplinary engineering, robotics, space technology dialogues with ISRO scientists, and published research across the global IEEE network.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#002855] via-[#003875] to-[#00629B] hover:from-[#001D3D] hover:to-[#004e7b] dark:from-[#00629B] dark:to-[#0095D9] rounded-xl shadow-xl shadow-blue-950/20 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-95 group"
              >
                <span>Join IEEE on official portal</span>
                <ExternalLink className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/societies"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-[#002855] dark:text-slate-200 bg-white/90 dark:bg-[#0F233D]/90 hover:bg-white dark:hover:bg-[#152e50] border-2 border-[#002855]/20 dark:border-slate-700/80 rounded-xl transition-all duration-200 shadow-md group backdrop-blur-md"
              >
                <Layers className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                <span>Explore 7 Technical Societies</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Institutional Trust Indicators - Sleek Modern Chips */}
            <div className="pt-4 border-t border-[#002855]/10 dark:border-slate-800/80 flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#0D1D33] border border-blue-100 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">IEEE UP Section (Region 10)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-[#0D1D33] border border-blue-100 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                <span className="text-slate-700 dark:text-slate-300">BBD Educational City, Lucknow</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/90 dark:bg-[#0F233D] border border-blue-200/80 dark:border-blue-900/60 shadow-sm backdrop-blur-md">
                <span className="font-mono font-bold text-[#002855] dark:text-cyan-300">Code: STB10214</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3D ROTATING GLOBE ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full aspect-square max-w-[480px]">
              
              {/* Subtle Real Campus Photo Underlay frame */}
              <div className="absolute inset-2 sm:inset-4 rounded-3xl overflow-hidden opacity-35 dark:opacity-20 pointer-events-none border-2 border-[#002855]/20 dark:border-cyan-500/20 shadow-2xl">
                <img 
                  src="/images/bbditm-campus-3d-ieee.png" 
                  alt="IEEE BBDITM 3D Landmark"
                  className="w-full h-full object-cover filter blur-[0.5px]" 
                />
              </div>

              {/* The Photorealistic 3D Earth Globe with Web Imagery */}
              <Interactive3D className="w-full h-full" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
