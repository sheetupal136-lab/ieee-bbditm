import React from 'react';
import { BRANCH_INFO } from '../data/branchData';
import { 
  ShieldCheck, 
  ChevronRight, 
  Award, 
  Target, 
  Eye, 
  Building2, 
  Layers 
} from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';
import { Video3DShowcase } from '../components/Video3DShowcase';
import { IEEE3DLettersBanner } from '../components/IEEE3DLettersBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* ========================================================
          1. TOP HERO BANNER (RIGHT BELOW NAVBAR)
      ======================================================== */}
      <div className="relative pt-6 pb-12 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-[#040D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <ScrollPop direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                About IEEE BBDITM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  Student Branch (STB10214)
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                Official institutional dossier of technology, student leadership, and societal impact at Babu Banarasi Das Educational City, Lucknow.
              </p>
            </div>
          </ScrollPop>

          {/* 3D Model with Left-Right Moving IEEE Letters */}
          <ScrollPop direction="up" delay={0.1}>
            <IEEE3DLettersBanner />
          </ScrollPop>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ========================================================
            2. CORE INSTITUTIONAL DOSSIER (REAL CAMPUS BUILDING PHOTO)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <ScrollPop direction="right">
              <div className="rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl relative group bg-slate-900">
                <img 
                  src="/images/bbditm-campus-real-aerial.png" 
                  alt="BBDITM Academic Campus Building" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-5 bg-white dark:bg-[#0D1D33] space-y-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                      BBDITM Main Academic Block
                    </span>
                    <span className="font-mono text-[#00629B] dark:text-cyan-400 font-bold">STB10214</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Babu Banarasi Das Educational City, Faizabad Road, Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>
            </ScrollPop>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <ScrollPop direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Branch Dossier</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                Technical Leadership & Student Innovation
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {BRANCH_INFO.aboutShort}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#002855] dark:text-cyan-400">STB10214</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Official Branch Code</div>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#002855] dark:text-cyan-400">UP Section</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Region 10 (Asia-Pacific)</div>
                </div>
              </div>
            </ScrollPop>
          </div>
        </div>

        {/* ========================================================
            3. VERIFIED AWARDS & RECOGNITION (ACHIEVEMENTS FIRST)
        ======================================================== */}
        <ScrollPop direction="up">
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Documented Section Honors</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  IEEE Uttar Pradesh Section Awards
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Verified Section Records
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { year: "2021", recipient: "Dr. Rafik Ahamad", award: "Outstanding Branch Counselor / Chapter / AG Advisor", badge: "Branch Counselor" },
                { year: "2021", recipient: "Dr. Khadim Moin Siddiqui", award: "Branch Chapter Advisor Award", badge: "Chapter Advisor" },
                { year: "2021", recipient: "Mr. Srikant Singh", award: "Outstanding Section Student Volunteer", badge: "Student Volunteer" },
                { year: "2022", recipient: "Ms. Shambhavi", award: "Outstanding Section Student Volunteer", badge: "Student Volunteer" },
                { year: "2023", recipient: "Dr. Rafik Ahmad", award: "Outstanding Section Volunteer Award", badge: "Section Volunteer" },
                { year: "Active", recipient: "IEEE BBDITM Branch", award: "Active Student Chapter & Society Excellence", badge: "STB10214" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">{item.badge}</span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {item.recipient}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollPop>

        {/* ========================================================
            4. REAL CAMPUS ACTIVITIES & REVOLUTION GALLERY
        ======================================================== */}
        <div className="space-y-8">
          <ScrollPop direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Authentic Photo Archive</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Life & Innovation at IEEE BBDITM
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Authentic photographs from society inaugurations, technical conclaves, and student assemblies.
              </p>
            </div>
          </ScrollPop>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                img: '/images/ieee-bbditm-robotics-inauguration.png', 
                title: 'Robotics Club & Society Launch', 
                subtitle: 'Official Inaugural Session & Technical Talk' 
              },
              { 
                img: '/images/ieee-bbditm-wie-conclave.png', 
                title: 'IEEE WIE #wielead Conclave', 
                subtitle: 'Women in Engineering Felicitation Ceremony' 
              },
              { 
                img: '/images/bbditm-campus-real-aerial.png', 
                title: 'BBDITM Academic Campus', 
                subtitle: 'Faizabad Road, Lucknow' 
              },
              { 
                img: '/images/WhatsApp Image 2026-10-05 at 7.23.04 PM (1).jpeg', 
                title: 'Space Tech & AI with ISRO Dignitary', 
                subtitle: 'Distinguished Lecture Series' 
              },
              { 
                img: '/images/ieee-bbditm-team-2025-2026.png', 
                title: 'Student Branch Executive Council', 
                subtitle: 'Core Committee & Society Leads' 
              },
              { 
                img: '/images/WhatsApp Image 2026-10-05 at 7.26.09 PM.jpeg', 
                title: 'IEEE PES Clean Energy Talk', 
                subtitle: 'Power & Energy Student Symposium' 
              },
            ].map((item, idx) => (
              <ScrollPop key={idx} direction="up" delay={idx * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-md group hover:shadow-xl transition-all">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-[#002855] dark:text-cyan-400 font-semibold mt-0.5 truncate">{item.subtitle}</p>
                  </div>
                </div>
              </ScrollPop>
            ))}
          </div>
        </div>

        {/* ========================================================
            5. MISSION & VISION DUAL CARDS
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollPop direction="up" delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#152E50] flex items-center justify-center text-[#002855] dark:text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {BRANCH_INFO.mission}
              </p>
            </div>
          </ScrollPop>

          <ScrollPop direction="up" delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#152E50] flex items-center justify-center text-[#002855] dark:text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {BRANCH_INFO.vision}
              </p>
            </div>
          </ScrollPop>
        </div>

        {/* ========================================================
            6. VIDEO JOURNEY SHOWCASE
        ======================================================== */}
        <ScrollPop direction="up">
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Unstoppable Journey Video
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Watch student engineers innovate, compete in hackathons, and collaborate on campus.
              </p>
            </div>

            <Video3DShowcase />
          </div>
        </ScrollPop>

        {/* ========================================================
            7. FAST ACTION CTA
        ======================================================== */}
        <ScrollPop direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#002855] to-[#00629B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-cyan-500/30">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">Ready to Join IEEE BBDITM?</h3>
              <p className="text-blue-100 text-sm max-w-xl">
                Be part of India's vibrant IEEE community, author research papers, and compete in global hackathons.
              </p>
            </div>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#002855] hover:bg-cyan-50 font-bold text-sm shadow-md transition-all flex-shrink-0"
            >
              <span>Join on official portal (ieee.org)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollPop>

      </div>
    </div>
  );
};
