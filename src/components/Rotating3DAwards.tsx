import React, { useState, useEffect, useRef } from 'react';
import { Trophy, ChevronLeft, ChevronRight, Pause, Play, Sparkles, X, ShieldCheck } from 'lucide-react';
import { ScrollPop } from './ScrollPop';

interface AwardItem {
  id: string;
  title: string;
  category: string;
  year: string;
  organization: string;
  description: string;
  image: string;
}

const AWARD_ITEMS: AwardItem[] = [
  {
    id: 'a-kochi',
    title: 'Outstanding Student Branch — India Council Plaque 2022',
    category: 'National Council Plaque',
    year: '2022',
    organization: 'IEEE India Council (Presented 25th Nov 2022 at Kochi)',
    description: 'Silver-embossed commemorative metal plaque presented to Babu Banarsi Das Institute of Technology and Management (STB10214), Lucknow at IEEE India Council Awards Night held at Kochi.',
    image: '/images/awards/award-india-council-2022-plaque.jpg',
  },
  {
    id: 'a-u10',
    title: 'U10 Initiative 2022: Certificate of Appreciation',
    category: '30+ Events Milestone',
    year: '2022',
    organization: 'IEEE Uttar Pradesh Section',
    description: 'Certificate presented to IEEE STB BBDITM, Lucknow (STB10214) for successfully organising more than 30 IEEE events in the year 2022 towards "Advancing Technology for Humanity".',
    image: '/images/awards/award-u10-initiative-2022-cert.png',
  },
  {
    id: 'a-growth',
    title: 'Branch Membership Growth / Retention Award 2022',
    category: 'Section Growth Award',
    year: '2022',
    organization: 'IEEE UP Section (IIT BHU Varanasi AGM)',
    description: 'Presented to IEEE Babu Banarsi Das Institute of Technology and Management Student Branch (STB10214) at the IEEE UP Section AGM held at IIT (BHU) Varanasi.',
    image: '/images/awards/award-membership-retention-2022-cert.png',
  },
  {
    id: 'a-counselor',
    title: 'Outstanding Branch Counselor Award — Dr. Rafik Ahamad',
    category: 'Leadership Honor',
    year: '2021',
    organization: 'IEEE UP Section (SRMCEM Lucknow AGM)',
    description: 'Presented to Dr. Rafik Ahamad, BBDITM Lucknow at the IEEE UP Section AGM held at Shri Ramswaroop Memorial College of Engineering and Management, Lucknow.',
    image: '/images/awards/award-rafik-ahamad-counselor-2021-cert.png',
  },
  {
    id: 'a-newsletter',
    title: 'Certificate of Appreciation: Periodic Newsletter Convener',
    category: 'Editorial Service',
    year: '2022',
    organization: 'IEEE UP Section (BHU Varanasi AGM)',
    description: 'Presented to Rafik Ahamad, BBD Institute of Technology & Management, Lucknow, for exemplary service as convener in IEEE Periodic Section Newsletter in 2022.',
    image: '/images/awards/award-rafik-ahamad-newsletter-2022-cert.png',
  },
  {
    id: 'a1',
    title: 'Outstanding Student Branch of the Year 2023',
    category: 'IEEE India Council Award',
    year: '2023',
    organization: 'IEEE INDIA Council (Hyderabad Awards Night)',
    description: 'BBDITM Student Branch (STB10214) awarded as the IEEE INDIA Council "Outstanding Student Branch of the Year Award 2023" held at Hyderabad.',
    image: '/images/awards/award-india-council-branch-poster.png',
  },
  {
    id: 'a3',
    title: 'Outstanding Student Volunteer Award 2023',
    category: 'Volunteer Distinction',
    year: '2023',
    organization: 'IEEE INDIA Council',
    description: 'Hitansh Dwivedi (Chairperson, IEEE BBDITM STB10214) awarded as IEEE INDIA Council "Outstanding Student Volunteers Award 2023".',
    image: '/images/awards/award-hitansh-volunteer-poster.jpg',
  },
  {
    id: 'a5',
    title: 'Best Student Branch / Branch Chapter Award',
    category: 'IEEE UP Section Certificate',
    year: 'UP Section',
    organization: 'IEEE Uttar Pradesh Section (IIIT Allahabad AGM)',
    description: 'Presented to BBD Institute of Technology & Management, Lucknow (STB10214) at the IEEE U.P. Section Annual General Meeting held at IIIT Allahabad.',
    image: '/images/awards/award-best-branch-up-section-cert.jpg',
  },
];


export const Rotating3DAwards: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<AwardItem | null>(null);
  const [radius, setRadius] = useState(380);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius calculation
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(240);
      } else if (window.innerWidth < 1024) {
        setRadius(320);
      } else {
        setRadius(420);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Continuous smooth 3D circular rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.25);
    }, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Drag-to-spin interaction
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    setRotation(startRotation.current + deltaX * 0.4);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const spinLeft = () => setRotation((prev) => prev + 60);
  const spinRight = () => setRotation((prev) => prev - 60);

  return (
    <div className="py-16 relative overflow-hidden select-none">
      <ScrollPop direction="up">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Interactive 3D Award Circle</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hall of Achievements & Awards
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Watch our student branch milestones rotate in 3D space. Drag or click any trophy card to inspect.
          </p>
        </div>
      </ScrollPop>

      {/* 3D Circular Stage Container */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full h-[480px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
        style={{ perspective: '1200px' }}
      >
        {/* Central Core Ambient Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#00629B]/25 to-cyan-400/20 blur-3xl pointer-events-none" />

        {/* 3D Carousel Cylinder */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(-6deg) rotateY(${rotation}deg)`,
          }}
        >
          {AWARD_ITEMS.map((item, index) => {
            const angle = (360 / AWARD_ITEMS.length) * index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute w-[240px] sm:w-[280px] h-[320px] sm:h-[360px] rounded-2xl bg-white dark:bg-[#0D1D33] border-2 border-slate-200 dark:border-slate-700/80 shadow-2xl p-4 flex flex-col justify-between cursor-pointer group hover:border-[#00629B] dark:hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'visible',
                }}
              >
                {/* Photo in 3D Card */}
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 relative shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-cyan-300 font-bold">
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{item.category}</span>
                  </div>
                </div>

                {/* Information */}
                <div className="space-y-1.5 pt-2">
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#00629B] dark:text-cyan-400 truncate">
                    {item.organization}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>CLICK TO INSPECT</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Buttons for 3D Carousel */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={spinLeft}
          aria-label="Rotate awards circle left"
          className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Resume rotation' : 'Pause rotation'}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md text-xs font-bold transition-all"
        >
          {isPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4 text-amber-500" />}
          <span>{isPaused ? 'Resume 3D Spin' : 'Pause 3D Spin'}</span>
        </button>

        <button
          onClick={spinRight}
          aria-label="Rotate awards circle right"
          className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-all active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Detailed Modal on Card Click */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-slate-900 relative">
              <img src={activeModalItem.image} alt={activeModalItem.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 font-bold">
                YEAR {activeModalItem.year} • {activeModalItem.category}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {activeModalItem.title}
              </h3>
              <div className="text-sm font-semibold text-[#00629B] dark:text-cyan-400">
                Awarded by: {activeModalItem.organization}
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {activeModalItem.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Official Branch Honor STB10214</span>
              </div>
              <span className="font-mono text-slate-500">IEEE UP SECTION</span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#00629B] text-white text-xs font-bold hover:bg-[#004e7b] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
