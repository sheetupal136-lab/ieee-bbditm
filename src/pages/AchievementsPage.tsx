import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/branchData';
import { 
  Trophy, 
  ShieldCheck, 
  ExternalLink, 
  Maximize2, 
  X, 
  Award,
  Medal,
  Building2,
  Sparkles
} from 'lucide-react';
import { Rotating3DAwards } from '../components/Rotating3DAwards';
import { ScrollPop } from '../components/ScrollPop';

// Gallery items representing all prestigious awards using exclusively authentic certificate & plaque assets
const OTHER_AWARDS_GALLERY = [
  {
    id: 'g-kochi-plaque',
    title: 'IEEE India Council Award — Outstanding Student Branch (National Plaque)',
    category: 'National Council Plaque',
    date: '25th November 2022 • Kochi',
    image: '/images/awards/award-india-council-2022-plaque.jpg',
    description: 'Silver-embossed commemorative metal plaque presented to Babu Banarsi Das Institute of Technology and Management (STB10214), Lucknow at IEEE India Council Awards Night held at Kochi.'
  },
  {
    id: 'g-u10-cert',
    title: 'U10 Initiative 2022: Certificate of Appreciation (30+ Events)',
    category: 'IEEE UP Section Certificate',
    date: 'Year 2022 Milestone',
    image: '/images/awards/award-u10-initiative-2022-cert.png',
    description: 'Presented to IEEE STB BBDITM, Lucknow (STB10214) for successfully completing the U10 initiative by organising more than 30 IEEE events in the year 2022.'
  },
  {
    id: 'g-membership-growth',
    title: 'Branch Membership Growth / Retention Award 2022',
    category: 'Section Growth Award',
    date: '20th January 2023 • IIT (BHU) Varanasi',
    image: '/images/awards/award-membership-retention-2022-cert.png',
    description: 'Presented to IEEE Babu Banarsi Das Institute of Technology and Management Student Branch (STB10214) at the IEEE UP Section AGM held at IIT (BHU) Varanasi.'
  },
  {
    id: 'g-rafik-counselor',
    title: 'Outstanding Branch Counselor Award — Dr. Rafik Ahamad',
    category: 'Leadership Honor',
    date: '16th January 2022 • SRMCEM Lucknow',
    image: '/images/awards/award-rafik-ahamad-counselor-2021-cert.png',
    description: 'Presented to Dr. Rafik Ahamad, BBDITM Lucknow at the IEEE UP Section AGM held at Shri Ramswaroop Memorial College of Engineering and Management, Lucknow.'
  },
  {
    id: 'g-rafik-newsletter',
    title: 'Certificate of Appreciation: Convener IEEE Periodic Newsletter — Dr. Rafik Ahamad',
    category: 'Section Editorial Service',
    date: '20th January 2023 • BHU Varanasi',
    image: '/images/awards/award-rafik-ahamad-newsletter-2022-cert.png',
    description: 'Presented to Rafik Ahamad, BBD Institute of Technology & Management, Lucknow, at the IEEE UP Section AGM held at Banaras Hindu University, Varanasi, for exemplary service as convener.'
  },
  {
    id: 'g1',
    title: 'Outstanding Student Branch of the Year 2023 — IEEE India Council',
    category: 'National Council Honor',
    date: '15th December 2023 • Hyderabad',
    image: '/images/awards/award-india-council-branch-poster.png',
    description: 'Babu Banarasi Das Institute of Technology & Management (STB10214) awarded Outstanding Student Branch of the Year Award 2023 at IEEE India Council Awards Night held at Hyderabad.'
  },
  {
    id: 'g2',
    title: 'IEEE India Council Award — Branch Certificate of Merit',
    category: 'Official Council Certificate',
    date: '15th December 2023 • Hyderabad',
    image: '/images/awards/award-india-council-branch-cert.jpg',
    description: 'Official framed certificate presented during IEEE India Council Awards Night held at Hyderabad, signed by Prof. Sudip Misra and Prof. Debabrata Das.'
  },
  {
    id: 'g3',
    title: 'Outstanding Student Volunteer of the Year 2023 — Mr. Hitansh Dwivedi',
    category: 'Student Volunteer Honor',
    date: '15th December 2023 • Hyderabad',
    image: '/images/awards/award-hitansh-volunteer-poster.jpg',
    description: 'Hitansh Dwivedi (Chairperson, IEEE BBDITM STB10214) awarded as IEEE INDIA Council Outstanding Student Volunteers Award 2023.'
  },
  {
    id: 'g4',
    title: 'Outstanding Student Volunteer of the Year — Official Certificate',
    category: 'Official Volunteer Certificate',
    date: '15th December 2023 • Hyderabad',
    image: '/images/awards/award-hitansh-volunteer-cert.png',
    description: 'Official certificate presented during IEEE India Council Awards Night held at Hyderabad to Hitansh Dwivedi for selfless volunteer commitment.'
  },
  {
    id: 'g5',
    title: 'Best Student Branch / Branch Chapter Award — IEEE UP Section',
    category: 'IEEE UP Section Gold Frame Certificate',
    date: '28th February 2021 • IIIT Allahabad AGM',
    image: '/images/awards/award-best-branch-up-section-cert.jpg',
    description: 'Presented to BBD Institute of Technology & Management, Lucknow (STB10214) at the IEEE U.P. Section Annual General Meeting held at IIIT Allahabad, signed by Dr. J. Ramkumar and Dr. Asheesh K Singh.'
  }
];

export const AchievementsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImg, setLightboxImg] = useState<{ image: string; title: string; desc: string; cat: string } | null>(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(OTHER_AWARDS_GALLERY.length / itemsPerPage);
  const displayedGallery = OTHER_AWARDS_GALLERY.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Header & Quick Resource Links */}
      <div className="relative py-14 lg:py-18 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A1726]">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          
          {/* Breadcrumb Path */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <a href="/" className="hover:text-[#00629B] dark:hover:text-cyan-400 font-bold transition-colors">Home</a>
            <span>»</span>
            <span className="text-[#002855] dark:text-cyan-300 font-bold">Awards & Recognition</span>
          </div>

          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
              <span>Official Awards & Recognition Dossier</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Awards & Recognition
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              Official institutional awards, IEEE India Council national trophies, Section honors, and individual volunteer distinctions earned by IEEE BBDITM Student Branch (STB10214).
            </p>
          </ScrollPop>

          {/* Official IEEE External Portal Quick Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-slate-200">IEEE Resources:</span>
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00629B] dark:hover:text-cyan-400 inline-flex items-center gap-1 transition-colors">
              <span>IEEE.org</span><ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span>•</span>
            <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00629B] dark:hover:text-cyan-400 inline-flex items-center gap-1 transition-colors">
              <span>IEEE Xplore Digital Library</span><ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span>•</span>
            <a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00629B] dark:hover:text-cyan-400 inline-flex items-center gap-1 transition-colors">
              <span>IEEE Standards</span><ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span>•</span>
            <a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00629B] dark:hover:text-cyan-400 inline-flex items-center gap-1 transition-colors">
              <span>IEEE Spectrum</span><ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <span>•</span>
            <a href="https://ieeeup.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00629B] dark:hover:text-cyan-400 inline-flex items-center gap-1 transition-colors">
              <span>IEEE UP Section</span><ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* ================= 1. PREMIER 3D ROTATING AWARDS CAROUSEL ================= */}
        <div className="p-4 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-xl">
          <Rotating3DAwards />
        </div>

        {/* ================= 2. MAJOR AUTHENTIC AWARDS & RECOGNITIONS ================= */}
        <div className="space-y-10">
          <ScrollPop direction="up">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Medal className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                <span>Verified Historical Honors</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Major Branch Honors & Institutional Recognitions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Verifiable awards received by IEEE BBDITM from the IEEE India Council, IEEE Uttar Pradesh Section, and Region 10.
              </p>
            </div>
          </ScrollPop>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <ScrollPop key={ach.id} direction="up" delay={idx * 0.08}>
                <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md hover:shadow-2xl hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-5">
                    
                    {/* Real Award Image with Lightbox Trigger */}
                    <div 
                      onClick={() => setLightboxImg({ image: ach.imageUrl || '/award-ceremony.jpg', title: ach.title, desc: ach.description, cat: ach.category })}
                      className="aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 relative shadow-inner cursor-pointer group/img border border-slate-200/40 dark:border-slate-700/60"
                    >
                      <img 
                        src={ach.imageUrl || "/award-ceremony.jpg"} 
                        alt={ach.title} 
                        className="w-full h-full object-contain p-2 bg-slate-950/80 group-hover/img:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg bg-[#002855]/90 backdrop-blur-md text-cyan-300 border border-cyan-400/40 shadow-sm">
                          {ach.year}
                        </span>
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20">
                          {ach.category}
                        </span>
                      </div>

                      {/* Expand Icon */}
                      <div className="absolute top-3 right-3 opacity-80 group-hover/img:opacity-100 transition-opacity">
                        <span className="p-2 rounded-lg bg-black/60 backdrop-blur-md text-white inline-flex items-center justify-center">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>

                      {/* Bottom Caption inside image */}
                      <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-slate-200 truncate">
                        {ach.imagePlaceholder}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                        {ach.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-bold text-[#00629B] dark:text-cyan-400 bg-blue-50 dark:bg-[#071529] px-3 py-1.5 rounded-xl border border-blue-100 dark:border-slate-800">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Awarding Body: {ach.organization}</span>
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line font-normal">
                        {ach.description}
                      </p>
                    </div>

                  </div>

                  {/* Verification Footer Bar */}
                  <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Verified Official Award
                    </span>
                    <span className="font-mono text-slate-500 font-bold">STB10214 • UP Section</span>
                  </div>

                </div>
              </ScrollPop>
            ))}
          </div>
        </div>

        {/* ================= 3. ALL OTHER PRESTIGIOUS AWARDS (GALLERY & PAGINATION) ================= */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
          <ScrollPop direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                  <span>Archival & Photographic Evidence</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  All Other Prestigious Awards of IEEE BBDITM
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                  Explore high-resolution photographs, award plaques, citations, and stage felicitations from the official archives.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-500">
                  Page {currentPage} of {totalPages} ({OTHER_AWARDS_GALLERY.length} Total Records)
                </span>
              </div>
            </div>
          </ScrollPop>

          {/* Paginated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImg({ image: item.image, title: item.title, desc: item.description, cat: item.category })}
                className="bg-white dark:bg-[#0D1D33] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/11] w-full rounded-xl overflow-hidden bg-slate-950 relative border border-slate-200/40 dark:border-slate-700/60 p-1.5 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-cyan-300">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <span className="p-1.5 rounded-lg bg-black/60 text-white inline-flex">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white line-clamp-2 group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.date}</span>
                  <span className="text-[#00629B] dark:text-cyan-400 font-bold flex items-center gap-1">
                    <span>ENLARGE</span>
                    <Sparkles className="w-3 h-3 text-amber-400" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Pagination Controls [1] [2] [3] [Previous] [Next] */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1D33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 rounded-xl text-xs font-mono font-bold transition-all ${
                  currentPage === pageNum
                    ? 'bg-[#002855] text-white shadow-md'
                    : 'bg-white dark:bg-[#0D1D33] border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1D33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next →
            </button>
          </div>

        </div>

      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#071322] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#002855] text-white">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                  {lightboxImg.cat} • STB10214 RECORD
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {lightboxImg.title}
                </h3>
              </div>

              <button
                onClick={() => setLightboxImg(null)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 sm:p-6 flex flex-col items-center justify-center bg-black">
              <img 
                src={lightboxImg.image} 
                alt={lightboxImg.title} 
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl" 
              />
              <p className="text-xs sm:text-sm text-slate-300 text-center max-w-2xl mt-4 leading-relaxed">
                {lightboxImg.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
