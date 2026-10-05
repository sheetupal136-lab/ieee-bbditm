import React, { useState, useRef } from 'react';
import { Film, ExternalLink } from 'lucide-react';


export const Video3DShowcase: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10; // max 10 deg tilt
    const rY = ((x - centerX) / centerX) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative py-12 perspective-1000">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-[#00A3E0]/20 via-[#002855]/10 to-transparent blur-3xl pointer-events-none rounded-3xl" />

      {/* 3D Tilting Video Container Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative max-w-4xl mx-auto rounded-3xl bg-slate-900 border-2 border-cyan-500/40 shadow-2xl shadow-[#002855]/50 overflow-hidden group select-none"
      >
        {/* Holographic Top Banner */}
        <div className="px-6 py-3.5 bg-gradient-to-r from-[#002855] via-[#003B75] to-[#001733] border-b border-cyan-500/30 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="font-extrabold tracking-wide uppercase font-mono text-cyan-300">
              3D Interactive Media Showcase
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
              STB10214 CINEMA
            </span>
            <span className="hidden sm:inline text-slate-400">UNSTOPPABLE JOURNEY</span>
          </div>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube.com/embed/nGPmXWz6ShY?rel=0&modestbranding=1"
            title="IEEE BBDITM Unstoppable Journey Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Holographic Bottom Info Bar */}
        <div className="px-6 py-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300 text-center sm:text-left">
            <Film className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>
              <strong>UNSTOPPABLE JOURNEY</strong> — Experience the spirit of engineering leadership at IEEE BBDITM.
            </span>
          </div>

          <a
            href="https://www.youtube.com/watch?v=nGPmXWz6ShY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#002855] hover:bg-[#003B75] text-cyan-200 font-mono text-xs border border-cyan-500/30 transition-colors"
          >
            <span>Open in YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Corner Neon Holographic Reticles */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
      </div>

      <div className="text-center mt-3">
        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
          Tip: Hover and move your cursor across the video card to experience the dynamic 3D spatial tilt effect.
        </p>
      </div>
    </div>
  );
};
