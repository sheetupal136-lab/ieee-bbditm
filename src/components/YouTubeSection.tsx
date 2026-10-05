import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, X, Calendar, Clock, Video } from 'lucide-react';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: 'Workshop' | 'Technical Session' | 'IEEE Day' | 'Hackathon' | 'Competition' | 'Expert Talk' | 'Student Activity';
  date: string;
  duration: string;
  description: string;
  thumbnail: string;
  featured?: boolean;
}

const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'nGPmXWz6ShY',
    title: 'IEEE BBDITM Annual Journey & Hackathons',
    category: 'Student Activity',
    date: 'March 2026',
    duration: '3:45',
    description: 'Documenting the vibrant student community, technical projects, and innovation culture at BBDITM Lucknow.',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'vid-2',
    youtubeId: 'nGPmXWz6ShY',
    title: 'Space Tech & Satellite Antenna Systems Masterclass',
    category: 'Expert Talk',
    date: 'February 2026',
    duration: '5:20',
    description: 'Distinguished lecture delivered by Shri Puneet Kumar Mishra (URSC ISRO / VP IEEE AESS) at BBDITM Main Auditorium.',
    thumbnail: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'vid-3',
    youtubeId: 'nGPmXWz6ShY',
    title: 'IEEEXtreme 24-Hour Competitive Coding Marathon',
    category: 'Hackathon',
    date: 'October 2026',
    duration: '4:15',
    description: 'Experience 24 hours of non-stop algorithmic problem-solving with global IEEE student teams.',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'vid-4',
    youtubeId: 'nGPmXWz6ShY',
    title: 'IEEE PES Day: Clean Energy & Solar Grid Workshop',
    category: 'Technical Session',
    date: 'April 2026',
    duration: '3:30',
    description: 'Hands-on hardware session on solar microgrid inverter design and EV power electronics.',
    thumbnail: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'vid-5',
    youtubeId: 'nGPmXWz6ShY',
    title: 'IEEE WIE #wielead Women in Tech Conclave',
    category: 'Workshop',
    date: 'June 2026',
    duration: '4:50',
    description: 'Inspiring keynote panels and professional mentoring for female engineering innovators.',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const YouTubeSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/80 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>Multimedia & Video Archives</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              IEEE BBDITM ON YOUTUBE
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore our workshops, celebrations, technical sessions, competitions and student activities.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-xl bg-slate-100 dark:bg-[#0F233D] hover:bg-slate-200 dark:hover:bg-[#163359] text-slate-700 dark:text-slate-200 transition-colors shadow-sm active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-xl bg-slate-100 dark:bg-[#0F233D] hover:bg-slate-200 dark:hover:bg-[#163359] text-slate-700 dark:text-slate-200 transition-colors shadow-sm active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Video Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {YOUTUBE_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="min-w-[300px] sm:min-w-[360px] max-w-[380px] flex-shrink-0 snap-start bg-slate-50 dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:border-[#00629B]/40 dark:hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Video Thumbnail Box */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 shadow-inner">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-red-600 transition-all duration-300">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-white/15">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Video Details */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                    <span>{video.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00629B] dark:text-cyan-400">
                <span>Watch on YouTube</span>
                <span className="group-hover:translate-x-1 transition-transform">▶ Play Video</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= VIDEO PLAYER MODAL ================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950">
              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-950/60 text-red-400 border border-red-800/50 text-[10px] font-bold uppercase">
                  {activeVideo.category}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Video Player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Description Footer */}
            <div className="p-4 sm:p-5 bg-slate-950 text-left border-t border-slate-800/80">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
