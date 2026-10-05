import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  Bookmark, 
  Award, 
  Compass, 
  ArrowRight, 
  HeartHandshake 
} from 'lucide-react';

// Web Audio API Page-Turn Sound Synthesizer (Realistic soft paper friction & page rustle)
const playPageFlipSound = (isMuted: boolean) => {
  if (isMuted) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Create white noise buffer for realistic paper friction sound
    const bufferSize = ctx.sampleRate * 0.12;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    
    // Bandpass filter to sound like crisp book paper
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(2.0, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.11);
    
    // Gentle gain envelope
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    
    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    whiteNoise.start(ctx.currentTime);
    whiteNoise.stop(ctx.currentTime + 0.13);
  } catch {
    // Graceful fallback if Web Audio is blocked
  }
};

export interface StoryPage {
  pageNumber: number;
  chapterTitle: string;
  yearBadge?: string;
  headerTag: string;
  title: string;
  subtitle: string;
  description: string[];
  visualType: 'cover' | 'timeline-dial' | 'calendar' | 'orbit-3d' | 'bootcamp-orbit' | 'ieee-day' | 'wie-circle' | 'staircase' | 'trophy' | 'constellation' | 'tree' | 'impact' | 'people' | 'present-grid' | 'future-gateway';
  image?: string;
  imageCaption?: string;
  quote?: { text: string; author: string };
  highlights?: string[];
  awardsList?: { year: string; recipient: string; title: string }[];
  peopleList?: { name: string; role: string; designation: string; image?: string; isAdvisor?: boolean }[];
  orbitNodes?: string[];
}

const IEEE_BBDITM_PAGES: StoryPage[] = [
  // Page 01: Cover
  {
    pageNumber: 1,
    chapterTitle: "Cover",
    headerTag: "CHRONICLE EDITION",
    title: "THE IEEE BBDITM STORY",
    subtitle: "A journey of technology, leadership, learning and impact.",
    description: [
      "Welcome to the official living chronicle of the IEEE Student Branch at Babu Banarasi Das Institute of Technology & Management, Lucknow.",
      "Explore verified milestones, student triumphs, prestigious section recognitions, and the evolution of engineering excellence."
    ],
    visualType: 'cover',
    image: "/images/bbditm-campus-ieee-hero.jpg"
  },

  // Page 02: The Beginning
  {
    pageNumber: 2,
    chapterTitle: "The Beginning",
    headerTag: "WHERE THE JOURNEY BEGAN",
    title: "Genesis of Student Branch STB10214",
    subtitle: "IEEE BBDITM Student Branch • Uttar Pradesh Section",
    description: [
      "The branch was established to provide students with opportunities to engage with the global IEEE community, technical learning, professional development, and innovation.",
      "Under the affiliation of IEEE Uttar Pradesh Section in Region 10 (Asia-Pacific), the branch became an epicenter of technological curiosity at BBD Educational City."
    ],
    visualType: 'timeline-dial',
    image: "/dist/technical-meeting.jpg",
    imageCaption: "Foundational assembly of student technocrats and faculty mentors at BBDITM.",
    highlights: [
      "Official Student Branch ID: STB10214",
      "Affiliated with IEEE UP Section (Region 10)",
      "Focus on multidisciplinary engineering standards"
    ]
  },

  // Page 03: First Milestones (March 2020)
  {
    pageNumber: 3,
    chapterTitle: "First Milestones",
    yearBadge: "March 2020",
    headerTag: "THE FIRST STEPS",
    title: "IEEE Awareness & Technical Quiz",
    subtitle: "Igniting Student Participation Across Campus",
    description: [
      "In March 2020, the student branch initiated widespread engagement through its flagship IEEE Awareness & Quiz Competition.",
      "A structured programme focused on introducing students to IEEE global resources, student digital libraries, IEEE Xplore, and career benefits, combined with an intense technical & general engineering quiz."
    ],
    visualType: 'calendar',
    image: "/dist/student-activities.jpg",
    imageCaption: "Students participating in technical problem-solving and awareness sessions.",
    highlights: [
      "Over 100+ student registrations across engineering departments",
      "Interactive briefing on IEEE Xplore & Digital Library access",
      "Fast-paced competitive quiz in computing and electronics"
    ]
  },

  // Page 04: 2020 (Virtual SPAx - July 2020)
  {
    pageNumber: 4,
    chapterTitle: "2020 Era",
    yearBadge: "July 2020",
    headerTag: "A NEW DIGITAL ERA",
    title: "Virtual SPAx Conclave (3-Day Event)",
    subtitle: "Adapting to the Digital Transition with Rigor",
    description: [
      "On 9 July 2020, the BBDNITM/BBDITM IEEE Student Branch conducted a landmark 3-day Virtual SPAx event.",
      "Focused on quality improvement for the engineering and technology community, featuring live expert keynotes, technical tracks, and interactive Q&A sessions."
    ],
    visualType: 'orbit-3d',
    orbitNodes: [
      "Day 01: Quality Improvement",
      "Day 02: Signal Processing",
      "Day 03: Power Systems & Microgrids"
    ],
    quote: {
      text: "Transforming digital constraints into unprecedented opportunities for student collaboration.",
      author: "SPAx 2020 Organizing Team"
    }
  },

  // Page 05: IEEE Virtual Boot Camp
  {
    pageNumber: 5,
    chapterTitle: "Virtual Boot Camp",
    yearBadge: "R-10 SAC",
    headerTag: "LEARN. LEAD. CONNECT.",
    title: "IEEE R-10 SAC Leadership Boot Camp",
    subtitle: "Membership Development & Leadership Training",
    description: [
      "The branch documented an IEEE Region 10 SAC Membership Development & Leadership Training / Virtual Boot Camp.",
      "The branch's activity records show comprehensive sessions covering professional development, counselling, WIE initiatives, student-committee interaction, and an expansive membership drive."
    ],
    visualType: 'bootcamp-orbit',
    orbitNodes: [
      "Professional Development",
      "Career Counselling",
      "Women in Engineering (WIE)",
      "Membership Growth",
      "Leadership Training"
    ]
  },

  // Page 06: IEEE Day 2020
  {
    pageNumber: 6,
    chapterTitle: "IEEE Day",
    yearBadge: "October 2020",
    headerTag: "LEVERAGING TECHNOLOGY FOR A BETTER TOMORROW",
    title: "Global IEEE Day Celebration",
    subtitle: "25+ Student Members Assembled Online",
    description: [
      "In October 2020, IEEE BBDNITM joined the worldwide celebration of IEEE Day under the global theme 'Leveraging Technology for a Better Tomorrow'.",
      "A creative poster-making and photography competition saw more than 25 active IEEE student members joining online to create a commemorative IEEE Day collage."
    ],
    visualType: 'ieee-day',
    image: "/dist/images/WhatsApp Image 2026-10-05 at 7.23.01 PM.jpeg",
    imageCaption: "IEEE Day celebratory assembly with student innovators and faculty leads.",
    highlights: [
      "Creative technical collage and photo competition",
      "Worldwide synchronization with IEEE Region 10",
      "Spotlight on technological solutions for societal challenges"
    ]
  },

  // Page 07: Women in Engineering (Dec 2020)
  {
    pageNumber: 7,
    chapterTitle: "Women in Engineering",
    yearBadge: "December 2020",
    headerTag: "MY STORY: PASSION INTO ACTION",
    title: "IEEE WIE Affinity Group Inauguration",
    subtitle: "Distinguished Lecture & Leadership Series",
    description: [
      "In December 2020, IEEE BBDITM's Women in Engineering (WIE) Affinity Group launched the 'My Story: Passion into Action' distinguished lecture series.",
      "IEEE vTools records BBDITM's WIE event activity, emphasizing female participation in STEM, technical mentorship, and career acceleration for women engineers."
    ],
    visualType: 'wie-circle',
    image: "/dist/images/WhatsApp Image 2026-10-05 at 7.32.30 PM.jpeg",
    imageCaption: "IEEE WIE Affinity Group Conclave and technical seminar at BBDITM.",
    highlights: [
      "Inauguration of dedicated WIE Affinity Group",
      "Distinguished female guest lectures in core technology",
      "Mentorship pipeline for junior STEM undergraduate students"
    ]
  },

  // Page 08: 2021 (Leadership & IIT Kanpur Collaboration)
  {
    pageNumber: 8,
    chapterTitle: "2021 Leadership",
    yearBadge: "2021",
    headerTag: "FROM EVENTS TO LEADERSHIP",
    title: "Virtual Leadership Training Week",
    subtitle: "Technical Collaboration with IEEE IIT Kanpur Student Branch",
    description: [
      "The branch conducted a multi-track Virtual Leadership Training Week, including sessions on COVID-19 awareness, business models, WIE, professional development, and intense debate/quiz activities.",
      "A key verified milestone was the technical collaboration with the IEEE IIT Kanpur Student Branch, fostering inter-institutional research and knowledge exchange."
    ],
    visualType: 'staircase',
    highlights: [
      "Step 1: Learn — COVID-19 health tech & business model sessions",
      "Step 2: Collaborate — Joint initiatives with IEEE IIT Kanpur",
      "Step 3: Lead — Empowering student chairs with governance skills"
    ]
  },

  // Page 09: Recognition (Section Awards)
  {
    pageNumber: 9,
    chapterTitle: "Recognitions",
    yearBadge: "2021 – 2023",
    headerTag: "RECOGNITION THAT MATTERED",
    title: "Verified IEEE UP Section Awards",
    subtitle: "Independent Accolades by Section Leadership",
    description: [
      "Independent IEEE Uttar Pradesh Section records document landmark recognitions awarded to BBDITM faculty counselors and student volunteers for outstanding leadership and service:"
    ],
    visualType: 'trophy',
    awardsList: [
      { year: "2021", recipient: "Dr. Rafik Ahamad", title: "Outstanding Branch Counselor / Chapter / AG Advisor" },
      { year: "2021", recipient: "Dr. Khadim Moin Siddiqui", title: "Branch Chapter Advisor" },
      { year: "2021", recipient: "Mr. Srikant Singh", title: "Outstanding Section Student Volunteer" },
      { year: "2022", recipient: "Ms. Shambhavi", title: "Outstanding Section Student Volunteer" },
      { year: "2023", recipient: "Dr. Rafik Ahmad", title: "Outstanding Section Volunteer" }
    ]
  },

  // Page 10: Growing Community (2021–2023)
  {
    pageNumber: 10,
    chapterTitle: "Growing Community",
    yearBadge: "2021 – 2023",
    headerTag: "A BRANCH THAT KEPT BUILDING",
    title: "Expanding Horizons & Innovation",
    subtitle: "AI/ML, Solar Energy, E-Mobility & Branch Office",
    description: [
      "By 2021–2023, IEEE BBDITM records show a rapidly expanding portfolio: technical workshops, design thinking, AI/ML masterclasses, startup incubations, sports tech collaborations, e-mobility, solar energy talks, and the official dedication of the IEEE Student Branch Office on campus."
    ],
    visualType: 'constellation',
    orbitNodes: [
      "Artificial Intelligence & ML",
      "Clean Energy & Solar Power",
      "Electric Mobility (EV)",
      "Design Thinking",
      "Startup Incubation",
      "Campus IEEE Office"
    ]
  },

  // Page 11: Societies & Chapters
  {
    pageNumber: 11,
    chapterTitle: "Societies & Chapters",
    headerTag: "FROM ONE BRANCH TO MANY COMMUNITIES",
    title: "Verified Societies & Chapters",
    subtitle: "Domain-Specific Technical Excellence",
    description: [
      "Public IEEE event records verify active BBDITM technical chapters and affinity groups. Each group operates specialized international symposiums, webinars, and hackathons:"
    ],
    visualType: 'tree',
    highlights: [
      "IEEE Computer Society (CS / C16): AI/ML, full-stack, cloud & hackathons",
      "IEEE Women in Engineering (WIE): Diversity in STEM & leadership",
      "IEEE Signal Processing Society (SPS): Audio/Image DSP & algorithms",
      "IEEE Power & Energy Society (PES): Solar microgrids & PES Day"
    ]
  },

  // Page 12: Impact & Village Adoption
  {
    pageNumber: 12,
    chapterTitle: "Community Impact",
    yearBadge: "October 2021",
    headerTag: "BEYOND THE CAMPUS",
    title: "Humanitarian Tech & Village Adoption",
    subtitle: "Technology + Humanity in Action",
    description: [
      "In October 2021, IEEE BBDITM collaborated with WEAG to adopt local villages including Papanamau and Jhinauli.",
      "The mission focused on practical grassroots upliftment: STEM digital education for rural youth, employment skill training, and women's technological empowerment."
    ],
    visualType: 'impact',
    image: "/dist/images/WhatsApp Image 2026-10-05 at 7.25.59 PM.jpeg",
    imageCaption: "Humanitarian engagement and grassroots outreach led by BBDITM student volunteers.",
    highlights: [
      "Adoption of Papanamau & Jhinauli villages",
      "Digital literacy drives & skill-building workshops",
      "Advancing IEEE's core mission: Technology for Humanity"
    ]
  },

  // Page 13: The People Behind The Journey
  {
    pageNumber: 13,
    chapterTitle: "The People",
    headerTag: "THE PEOPLE BEHIND THE JOURNEY",
    title: "Faculty Mentors & Student Leaders",
    subtitle: "The Visionaries Steering STB10214",
    description: [
      "The success of IEEE BBDITM is powered by dedicated faculty advisors recognized across the UP Section, and dynamic student executive committees who lead from the front:"
    ],
    visualType: 'people',
    peopleList: [
      { name: "Dr. Rafik Ahamad", role: "Branch Counselor / Advisor", designation: "UP Section Outstanding Counselor", isAdvisor: true },
      { name: "Dr. Khadim Moin Siddiqui", role: "Chapter Advisor", designation: "UP Section Branch Chapter Advisor", isAdvisor: true },
      { name: "Prof. (Dr.) S.S. Chauhan", role: "Director, BBDITM", designation: "Patron & Academic Head", isAdvisor: true },
      { name: "Mr. Srikant Singh", role: "Student Leader", designation: "2021 Outstanding Section Student Volunteer", isAdvisor: false },
      { name: "Ms. Shambhavi", role: "Student Leader", designation: "2022 Outstanding Section Student Volunteer", isAdvisor: false }
    ]
  },

  // Page 14: The Present (2026 Today)
  {
    pageNumber: 14,
    chapterTitle: "The Present",
    yearBadge: "2026",
    headerTag: "WHERE WE ARE TODAY",
    title: "A Vibrant Technology Powerhouse",
    subtitle: "Connected with the Redesigned Digital Platform",
    description: [
      "Today, IEEE BBDITM STB10214 stands as one of the most active student chapters in the IEEE UP Section. Our revamped digital hub empowers 120+ active engineers with real-time event registrations, interactive 3D tools, and research links."
    ],
    visualType: 'present-grid',
    image: "/dist/images/ieee-bbditm-team-2025-2026.png",
    imageCaption: "Official 2025–2026 Student Branch Executive Committee.",
    highlights: [
      "120+ Verified Active Student & Graduate Members",
      "48+ Technical Workshops, Conclaves & Hackathons",
      "7 Specialized Societies & Affinity Groups",
      "30+ Student Innovation Projects & Published Papers"
    ]
  },

  // Page 15: The Future
  {
    pageNumber: 15,
    chapterTitle: "The Future",
    yearBadge: "Tomorrow",
    headerTag: "THE NEXT CHAPTER HASN'T BEEN WRITTEN YET",
    title: "Write Your Legacy With IEEE",
    subtitle: "We learn from the past. We build in the present. We shape what comes next.",
    description: [
      "The next breakthroughs in Quantum Computing, Generative AI, Sustainable Energy Grids, and Autonomous Robotics will be pioneered by students in this very room.",
      "Your journey as a global technology innovator begins here. Join the official IEEE worldwide network today."
    ],
    visualType: 'future-gateway',
    quote: {
      text: "The future belongs to those who build it today with curiosity, ethics, and engineering rigor.",
      author: "IEEE BBDITM Executive Council"
    }
  }
];

export const IEEEHistory3DBook: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const bookContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = IEEE_BBDITM_PAGES.length; // 15 pages

  const goToNext = () => {
    if (currentPage < totalPages && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      playPageFlipSound(isMuted);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 420);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      playPageFlipSound(isMuted);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 420);
    }
  };

  const jumpToPage = (pageNum: number) => {
    if (pageNum === currentPage || isFlipping) return;
    setFlipDirection(pageNum > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    playPageFlipSound(isMuted);
    setTimeout(() => {
      setCurrentPage(pageNum);
      setIsFlipping(false);
    }, 420);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping]);

  const activePage = IEEE_BBDITM_PAGES[currentPage - 1];

  return (
    <div 
      ref={bookContainerRef}
      className={`relative w-full max-w-5xl mx-auto select-none ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#050C16]/98 backdrop-blur-2xl p-4 sm:p-8 flex flex-col justify-center max-w-none overflow-y-auto' : ''
      } ${className}`}
    >
      {/* Top Header & Interactive Utility Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#00629B] to-[#002855] text-cyan-300 shadow-lg border border-cyan-400/40">
            <BookOpen className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>The IEEE BBDITM Story</span>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-extrabold uppercase rounded-full bg-[#00629B]/20 text-[#00629B] dark:text-cyan-300 border border-cyan-500/30">
                  Page {currentPage} of {totalPages}
                </span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verified historical chronicle reconstructed from IEEE UP Section & BBDITM institutional records
            </p>
          </div>
        </div>

        {/* Audio Toggle & Fullscreen Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-all shadow-sm flex items-center gap-1.5 text-xs font-semibold"
            title={isMuted ? "Unmute Page-Turn Sound" : "Mute Page-Turn Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            <span className="hidden sm:inline">{isMuted ? "Muted" : "Sound ON"}</span>
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-all shadow-sm flex items-center gap-1.5 text-xs font-semibold"
            title="Toggle Immersive Fullscreen View"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4 text-cyan-400" />}
            <span className="hidden sm:inline">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </button>
        </div>
      </div>

      {/* Chapter Bookmark Quick Pills (Horizontal Scroller) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none text-xs">
        {IEEE_BBDITM_PAGES.map((page) => (
          <button
            key={page.pageNumber}
            onClick={() => jumpToPage(page.pageNumber)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex-shrink-0 flex items-center gap-1.5 ${
              currentPage === page.pageNumber
                ? 'bg-gradient-to-r from-[#002855] to-[#00629B] text-white shadow-md border border-cyan-400/40 ring-2 ring-cyan-400/30'
                : 'bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <Bookmark className={`w-3 h-3 ${currentPage === page.pageNumber ? 'text-cyan-300' : 'text-slate-400'}`} />
            <span className="font-mono text-[10px]">{String(page.pageNumber).padStart(2, '0')}.</span>
            <span>{page.chapterTitle}</span>
          </button>
        ))}
      </div>

      {/* 3D BOOK STAGE CONTAINER */}
      <div 
        className="relative w-full min-h-[560px] sm:min-h-[600px] flex items-center justify-center"
        style={{ perspective: '2000px' }}
      >
        {/* Book Outer Shadow Depth */}
        <div className="absolute inset-x-8 bottom-0 h-12 bg-black/40 dark:bg-black/90 blur-2xl rounded-full transform translate-y-6 pointer-events-none" />

        {/* ========================================================
            REAL 3D DIGITAL BOOK PAGE RENDERER
        ======================================================== */}
        <div 
          className={`w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-500/30 dark:border-cyan-500/40 bg-slate-900 transition-all duration-500 transform-style-3d relative ${
            isFlipping ? (flipDirection === 'next' ? 'rotate-y-[-12deg] scale-[0.98]' : 'rotate-y-[12deg] scale-[0.98]') : 'rotate-y-0'
          }`}
          style={{
            boxShadow: '0 30px 75px -20px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Book Spine Texture Illusion */}
          <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-30 pointer-events-none" />

          {/* =========================================================
              COVER PAGE (PAGE 1)
          ========================================================= */}
          {activePage.visualType === 'cover' && (
            <div 
              onClick={goToNext}
              className="cursor-pointer p-6 sm:p-12 min-h-[540px] flex flex-col justify-between text-white relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #021226 0%, #002855 50%, #001530 100%)'
              }}
            >
              {/* Royal Gold Embossed Borders */}
              <div className="absolute inset-3 sm:inset-5 border-2 border-amber-400/30 rounded-2xl pointer-events-none" />
              <div className="absolute inset-4 sm:inset-6 border border-dashed border-amber-400/20 rounded-xl pointer-events-none" />

              {/* Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-amber-400/10 text-amber-300 border border-amber-400/30 shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>STB10214 • Official Living Chronicle</span>
                </span>
                <span className="font-mono text-xs text-amber-300/80 font-bold">Region 10</span>
              </div>

              {/* Center Emblem & Title */}
              <div className="relative z-10 text-center space-y-4 my-auto">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-amber-400/20 via-cyan-500/10 to-transparent border-2 border-amber-400/50 shadow-xl shadow-amber-500/10 group-hover:scale-105 transition-transform duration-500 p-4 mx-auto">
                  <img 
                    src="/dist/branch-logo.png" 
                    alt="IEEE Emblem" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-400 font-extrabold">
                    Chronicle of Innovation & Leadership
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                    THE IEEE BBDITM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                      STORY
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-cyan-200 font-medium max-w-lg mx-auto">
                    A journey of technology, leadership, learning and impact.
                  </p>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-amber-400/20 text-xs text-amber-200/80">
                <span className="font-semibold">IEEE Uttar Pradesh Section</span>
                <div className="flex items-center gap-1.5 text-amber-300 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Click to Open Page 02</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              INNER STORY PAGES (PAGES 2 TO 15)
          ========================================================= */}
          {activePage.visualType !== 'cover' && (
            <div className="p-6 sm:p-10 bg-slate-50 dark:bg-[#071322] min-h-[540px] flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00629B]/10 text-[#00629B] dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                      <span>{activePage.headerTag}</span>
                    </span>

                    {activePage.yearBadge && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        {activePage.yearBadge}
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-bold">
                    Page {activePage.pageNumber} / {totalPages}
                  </span>
                </div>

                {/* Main Heading & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {activePage.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#00629B] dark:text-cyan-400 font-mono">
                    {activePage.subtitle}
                  </div>
                </div>

                {/* Paragraph Content */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {activePage.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* ================= DYNAMIC 3D VISUAL SECTIONS ================= */}

                {/* Visual 1: Timeline Dial (Page 02) */}
                {activePage.visualType === 'timeline-dial' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-2">
                    {activePage.image && (
                      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                        <img src={activePage.image} alt={activePage.title} className="w-full h-44 object-cover" />
                        {activePage.imageCaption && (
                          <div className="p-2 bg-slate-900 text-slate-300 text-[11px] font-mono">{activePage.imageCaption}</div>
                        )}
                      </div>
                    )}
                    <div className="p-4 rounded-2xl bg-[#002855]/10 dark:bg-[#002855]/40 border border-cyan-500/30 text-center space-y-2">
                      <div className="w-16 h-16 rounded-full border-4 border-dashed border-cyan-400 flex items-center justify-center mx-auto animate-spin-slow">
                        <Compass className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="font-mono text-sm font-bold text-slate-900 dark:text-white">STB10214 Verified Charter</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Region 10 • IEEE Uttar Pradesh Section</div>
                    </div>
                  </div>
                )}

                {/* Visual 2: Calendar Object (Page 03) */}
                {activePage.visualType === 'calendar' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-2">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-blue-500/10 border border-amber-500/30 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-500 flex flex-col items-center justify-center font-bold font-mono">
                        <span className="text-[10px] uppercase">MAR</span>
                        <span className="text-lg">2020</span>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">Awareness & Quiz</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Earliest verified digital initiative</div>
                      </div>
                    </div>
                    {activePage.image && (
                      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                        <img src={activePage.image} alt={activePage.title} className="w-full h-36 object-cover" />
                      </div>
                    )}
                  </div>
                )}

                {/* Visual 3: 3D Digital Orbit (Page 04) */}
                {activePage.visualType === 'orbit-3d' && activePage.orbitNodes && (
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-white space-y-3">
                    <div className="text-center font-mono text-xs uppercase tracking-widest text-cyan-300 font-bold">
                      3D DIGITAL ORBIT — VIRTUAL SPAX
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
                      {activePage.orbitNodes.map((node, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#002855] border border-cyan-400/40 text-cyan-200">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual 4: Bootcamp Orbit (Page 05) */}
                {activePage.visualType === 'bootcamp-orbit' && activePage.orbitNodes && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#002855]/20 to-[#00629B]/20 border border-cyan-500/30 space-y-3">
                    <div className="text-center font-bold text-sm text-[#002855] dark:text-cyan-300 font-mono">
                      CENTER: VIRTUAL BOOT CAMP (R-10 SAC)
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {activePage.orbitNodes.map((node, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-cyan-500/30 text-xs font-semibold text-slate-800 dark:text-cyan-200 shadow-sm">
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual 5: IEEE Day (Page 06) */}
                {activePage.visualType === 'ieee-day' && activePage.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                    <img src={activePage.image} alt={activePage.title} className="w-full h-44 object-cover" />
                    {activePage.imageCaption && (
                      <div className="p-2 bg-slate-900 text-slate-300 text-[11px] font-mono">{activePage.imageCaption}</div>
                    )}
                  </div>
                )}

                {/* Visual 6: WIE Circle (Page 07) */}
                {activePage.visualType === 'wie-circle' && activePage.image && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <img src={activePage.image} alt={activePage.title} className="w-full h-40 object-cover" />
                    </div>
                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-1.5 text-xs">
                      <div className="font-bold text-purple-700 dark:text-purple-300 font-mono uppercase">WIE Timeline Track</div>
                      <div className="text-slate-700 dark:text-slate-300">Inauguration → Stories → STEM Mentorship → Career Acceleration</div>
                    </div>
                  </div>
                )}

                {/* Visual 7: 3D Staircase (Page 08) */}
                {activePage.visualType === 'staircase' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center">
                      <div className="font-mono text-xs font-bold text-blue-400">STEP 1</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">LEARN</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">COVID-19 & Business Models</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                      <div className="font-mono text-xs font-bold text-cyan-400">STEP 2</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">COLLABORATE</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">IEEE IIT Kanpur Branch</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
                      <div className="font-mono text-xs font-bold text-amber-400">STEP 3</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">LEAD</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Section Volunteering</div>
                    </div>
                  </div>
                )}

                {/* Visual 8: Trophy Gallery (Page 09) */}
                {activePage.visualType === 'trophy' && activePage.awardsList && (
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono font-bold uppercase text-amber-500 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>Documented IEEE Uttar Pradesh Section Awards</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activePage.awardsList.map((a, i) => (
                        <div key={i} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-0.5">
                          <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                            <span>{a.year}</span>
                            <span className="text-[10px] uppercase">UP Section</span>
                          </div>
                          <div className="font-bold text-slate-900 dark:text-white text-xs">{a.recipient}</div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400">{a.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual 9: Constellation (Page 10) */}
                {activePage.visualType === 'constellation' && activePage.orbitNodes && (
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-white space-y-2">
                    <div className="text-xs font-mono text-cyan-300 font-bold text-center uppercase">3D Activity Constellation</div>
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                      {activePage.orbitNodes.map((n, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#002855] border border-cyan-400/40 text-xs font-mono text-cyan-200">
                          ✦ {n}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual 10: Branching Tree (Page 11) */}
                {activePage.visualType === 'tree' && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#002855]/20 to-[#00629B]/20 border border-cyan-500/30 space-y-3">
                    <div className="text-center font-mono font-bold text-xs text-cyan-400">
                      IEEE BBDITM STUDENT BRANCH (STB10214)
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
                      <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-300">Computer Society</div>
                      <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-600 dark:text-purple-300">WIE Affinity</div>
                      <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-600 dark:text-blue-300">Signal Processing</div>
                      <div className="p-2.5 rounded-xl bg-green-500/15 border border-green-500/40 text-green-600 dark:text-green-300">Power & Energy</div>
                    </div>
                  </div>
                )}

                {/* Visual 11: Impact (Page 12) */}
                {activePage.visualType === 'impact' && activePage.image && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <img src={activePage.image} alt={activePage.title} className="w-full h-40 object-cover" />
                    </div>
                    <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 space-y-1 text-xs">
                      <div className="font-bold text-green-700 dark:text-green-300 font-mono flex items-center gap-1.5">
                        <HeartHandshake className="w-4 h-4" />
                        <span>Village Adoption: Papanamau & Jhinauli</span>
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">Collaborative outreach with WEAG for women's digital empowerment and education.</div>
                    </div>
                  </div>
                )}

                {/* Visual 12: People (Page 13) */}
                {activePage.visualType === 'people' && activePage.peopleList && (
                  <div className="space-y-2 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {activePage.peopleList.map((p, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-0.5">
                          <div className="text-[10px] font-mono font-bold uppercase text-[#00629B] dark:text-cyan-400">
                            {p.role}
                          </div>
                          <div className="font-bold text-slate-900 dark:text-white text-xs">{p.name}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{p.designation}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual 13: Present (Page 14) */}
                {activePage.visualType === 'present-grid' && activePage.image && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <img src={activePage.image} alt={activePage.title} className="w-full h-40 object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-[#002855]/20 border border-cyan-500/30">
                        <div className="text-lg font-black text-cyan-400">120+</div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Members</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#002855]/20 border border-cyan-500/30">
                        <div className="text-lg font-black text-cyan-400">48+</div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Events</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual 14: Future Gateway (Page 15) */}
                {activePage.visualType === 'future-gateway' && (
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-[#002855] via-[#003875] to-[#00629B] text-white text-center space-y-4 shadow-xl border border-cyan-400/40">
                    <div className="space-y-1">
                      <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">The Next Horizon</div>
                      <h4 className="font-display text-xl sm:text-2xl font-black">Ready to Lead with IEEE BBDITM?</h4>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://www.ieee.org/membership/join/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#002855] hover:bg-cyan-50 font-bold text-sm shadow-md transition-all active:scale-95"
                      >
                        <span>JOIN IEEE BBDITM</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Quote Box (if present) */}
                {activePage.quote && (
                  <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-[#002855]/30 border-l-4 border-[#00629B] dark:border-cyan-400 space-y-0.5">
                    <p className="text-xs italic font-medium text-slate-800 dark:text-slate-200">
                      "{activePage.quote.text}"
                    </p>
                    <p className="text-[11px] font-bold text-[#00629B] dark:text-cyan-300 font-mono">
                      — {activePage.quote.author}
                    </p>
                  </div>
                )}

                {/* Highlights List (if present) */}
                {activePage.highlights && (
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-4 list-disc marker:text-[#00629B] dark:marker:text-cyan-400">
                      {activePage.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Bottom Page Navigation Footer */}
              <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <button
                  onClick={goToPrev}
                  disabled={currentPage === 1 || isFlipping}
                  className={`flex items-center gap-1 font-bold ${
                    currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-[#00629B] dark:text-cyan-400 hover:underline'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Page</span>
                </button>

                <span className="font-mono text-[11px] font-bold">
                  {activePage.chapterTitle}
                </span>

                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages || isFlipping}
                  className={`flex items-center gap-1 font-bold ${
                    currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-[#00629B] dark:text-cyan-400 hover:underline'
                  }`}
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* BOTTOM CONTROL CONTROLS & NAVIGATION DOTS */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6 px-2">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1 || isFlipping}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 ${
            currentPage === 1
              ? 'opacity-40 bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Page Dots Indicator */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-none py-1">
          {IEEE_BBDITM_PAGES.map((page) => (
            <button
              key={page.pageNumber}
              onClick={() => jumpToPage(page.pageNumber)}
              className={`h-2.5 rounded-full transition-all ${
                currentPage === page.pageNumber
                  ? 'w-7 bg-[#00629B] dark:bg-cyan-400'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
              title={`Page ${page.pageNumber}: ${page.chapterTitle}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages || isFlipping}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all shadow-md active:scale-95 ${
            currentPage === totalPages
              ? 'opacity-40 bg-slate-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#002855] via-[#003875] to-[#00629B] hover:from-[#001D3D] hover:to-[#004e7b] border border-cyan-400/30'
          }`}
        >
          <span>{currentPage === 1 ? "Open Chronicle" : "Next Page"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Helpful Hint */}
      <div className="text-center mt-3 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2 font-medium">
        <span>Tip: Click bookmark tabs above, or use Left / Right keyboard arrow keys to turn pages</span>
      </div>
    </div>
  );
};
