import React, { useState, useRef } from 'react';
import { STORY_SLIDES } from '../data/branchData';
import { ChevronLeft, ChevronRight, Sparkles, Building2, Users2, Cpu, GraduationCap, Award, Globe2, ShieldCheck } from 'lucide-react';

const iconsMap: Record<string, React.ReactNode> = {
  campus: <Building2 className="w-4 h-4" />,
  activities: <Users2 className="w-4 h-4" />,
  projects: <Cpu className="w-4 h-4" />,
  mentorship: <GraduationCap className="w-4 h-4" />,
  achievements: <Award className="w-4 h-4" />,
  global: <Globe2 className="w-4 h-4" />,
};

export const ScrollStorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = STORY_SLIDES[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % STORY_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-slate-100/80 dark:bg-[#06101D] border-y border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Story Series</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              The IEEE BBDITM Journey
            </h2>
            <p className="text-slate-700 dark:text-slate-400 text-base max-w-xl">
              An inside look into our student branch culture, campus engineering initiatives, and global impact.
            </p>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-sm font-mono text-slate-500 dark:text-slate-400 mr-2">
              <span className="text-[#00629B] dark:text-cyan-400 font-bold">{activeIndex + 1}</span> / {STORY_SLIDES.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous story slide"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next story slide"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {STORY_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-left ${
                  isActive
                    ? 'bg-[#00629B] text-white shadow-md shadow-[#00629B]/25'
                    : 'bg-white dark:bg-[#0D1D33] text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#152e50] border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span className={isActive ? 'text-cyan-200' : 'text-slate-400'}>
                  {iconsMap[slide.id]}
                </span>
                <span className="truncate">{slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Story Card Container */}
        <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* Story Text Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 dark:bg-[#152E50] text-[#00629B] dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                    CHAPTER {activeSlide.stepNumber}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                    {activeSlide.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {activeSlide.title}
                </h3>

                <h4 className="text-base font-semibold text-[#00629B] dark:text-cyan-300">
                  {activeSlide.subtitle}
                </h4>

                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeSlide.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSlide.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00629B] dark:bg-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Real Photography Frame */}
            <div className="lg:col-span-6 relative bg-slate-950 flex items-center justify-center p-6 sm:p-10 overflow-hidden min-h-[320px]">
              
              {/* Actual Real Image */}
              {activeSlide.imageUrl ? (
                <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                  <img 
                    src={activeSlide.imageUrl} 
                    alt={activeSlide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-semibold">{activeSlide.imagePlaceholder}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-300 bg-black/60 px-2 py-1 rounded-lg">
                      BBDITM LUCKNOW
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 w-full max-w-md aspect-[4/3] rounded-2xl border border-white/15 bg-slate-900/80 p-6 flex flex-col justify-between">
                  <div className="font-mono text-xs text-cyan-300">{activeSlide.imagePlaceholder}</div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
