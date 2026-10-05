import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Maximize2, 
  X, 
  Play, 
  Pause 
} from 'lucide-react';

export const IEEE3DLettersBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAutoMoving, setIsAutoMoving] = useState<boolean>(true);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Track mouse coordinates over the banner for realistic 3D perspective tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;  // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* 3D Campus Stage Container */}
      <div 
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border-2 border-cyan-500/30 dark:border-cyan-400/40 shadow-2xl group transition-all duration-300"
        style={{
          perspective: '1400px',
        }}
      >
        {/* Real Campus Background Image with subtle zoom & depth */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
          <img 
            src="/images/bbditm-campus-ieee-hero.jpg" 
            alt="BBDITM Lucknow Campus with 3D IEEE Monument" 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
          />

          {/* Cyber Vignette & Depth Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none" />
          <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none mix-blend-overlay" />

          {/* Dynamic Light Sweep Beam across Campus */}
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent -skew-x-25 animate-beam-sweep pointer-events-none" />

          {/* Top Floating Controls */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-end pointer-events-auto">
            <div className="flex items-center gap-2">
              {/* Auto-Move Toggle */}
              <button
                onClick={() => setIsAutoMoving(!isAutoMoving)}
                className="px-3 py-1 rounded-full bg-black/60 hover:bg-[#002855] text-cyan-300 hover:text-white backdrop-blur-md border border-cyan-400/30 text-xs font-mono font-semibold transition-all shadow-md flex items-center gap-1.5"
                title={isAutoMoving ? "Pause Left-Right Animation" : "Resume Left-Right Animation"}
              >
                {isAutoMoving ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-green-400" />}
                <span className="hidden sm:inline">{isAutoMoving ? "3D Moving" : "Paused"}</span>
              </button>

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="p-2 rounded-full bg-black/60 hover:bg-[#002855] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-md"
                title="View Full Resolution Image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* =========================================================
              3D FLOATING "IEEE" LETTERS MOVING LEFT & RIGHT
          ========================================================= */}
          <div 
            className="absolute inset-x-0 bottom-6 sm:bottom-10 z-20 flex flex-col items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 10}deg) translateZ(40px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 3D Container with horizontal animation */}
            <div 
              className={`flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 pointer-events-auto ${
                isAutoMoving ? 'animate-float-horizontal' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {['I', 'E', 'E', 'E'].map((letter, idx) => (
                <div
                  key={idx}
                  className="relative group/letter"
                  style={{
                    transform: `translateZ(${30 + idx * 8}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Glowing Backlight Aura */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-[#00A3E0]/40 rounded-2xl blur-lg opacity-80 group-hover/letter:opacity-100 transition-opacity" />

                  {/* 3D Extruded Letter */}
                  <div className="relative ieee-3d-letter shadow-2xl">
                    {/* Front Surface */}
                    <span className="relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-black">
                      {letter}
                    </span>

                    {/* Laser Reflection Top Line */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 opacity-90 rounded-t-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Campus Detail Bar */}
        <div className="p-4 bg-white dark:bg-[#0D1D33] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
            <span className="font-bold text-slate-900 dark:text-white">
              Babu Banarasi Das Institute of Technology & Management, Lucknow
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <span className="text-[#00629B] dark:text-cyan-400 font-bold">
              STB10214 • UP Section
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              Region 10 (Asia-Pacific)
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-[#071322] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#002855] text-white">
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <span>BBDITM Campus & 3D IEEE Monument</span>
                </h3>
                <p className="text-xs text-cyan-200 font-mono">
                  Official Landmark • Student Branch STB10214 • Lucknow
                </p>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 flex items-center justify-center max-h-[80vh] overflow-hidden bg-black">
              <img 
                src="/images/bbditm-campus-ieee-hero.jpg" 
                alt="BBDITM Campus with IEEE Fullscreen" 
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
