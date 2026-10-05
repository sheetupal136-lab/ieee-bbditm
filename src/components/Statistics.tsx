import React, { useState, useEffect, useRef } from 'react';
import { STATISTICS_DATA } from '../data/branchData';
import { ShieldCheck } from 'lucide-react';

const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        const duration = 1600; // ms
        const startTime = performance.now();

        const step = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
      {count}{suffix}
    </span>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-[#081528] border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification banner line */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Verified Branch Metrics
            </span>
            <span className="text-slate-400 font-mono text-[11px]">[STB10214 METRIC DATA]</span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px]">BBDITM LUCKNOW • ANNUAL REPORT</span>
        </div>

        {/* Horizontal Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {STATISTICS_DATA.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col space-y-1.5 p-4 rounded-2xl transition-all duration-200 hover:bg-slate-50 dark:hover:bg-[#0D1D33]/70 group"
            >
              <div className="flex items-baseline gap-1">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {item.label}
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {item.note}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
