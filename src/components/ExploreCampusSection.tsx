import React from 'react';
import { Building2, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

import { ScrollPop } from './ScrollPop';

export const ExploreCampusSection: React.FC = () => {
  const campusCards = [
    {
      title: "IEEE Counselor Office & STB10214 Charter Wall",
      category: "Branch Headquarters",
      description: "Official counseling chamber at BBDITM Lucknow housing the framed IEEE Student Branch STB10214 charter certificate, section records, and conference publications.",
      image: "/images/WhatsApp Image 2026-10-05 at 7.23.05 PM.jpeg",
      tag: "Verified STB10214 Chamber"
    },
    {
      title: "Main Campus Auditorium & Keynote Hall",
      category: "Flagship Event Venue",
      description: "Grand auditorium venue hosting the Annual General Meetings, ISRO space technology expert lectures, and section-wide delegate assemblies with 600+ capacity.",
      image: "/images/WhatsApp Image 2026-10-05 at 7.51.04 PM (1).jpeg",
      tag: "BBDITM Auditorium"
    },
    {
      title: "Innovation Hub & Project Poster Labs",
      category: "Hardware & Research Facility",
      description: "Collaborative research and development lab where undergraduate members prototype solar microgrid nodes, agricultural telemetry, and robotics rovers.",
      image: "/images/WhatsApp Image 2026-10-05 at 7.51.03 PM (1).jpeg",
      tag: "Research & Prototyping"
    },
    {
      title: "Technical Seminar & Conclave Halls",
      category: "Student Activity Center",
      description: "High-tech seminar halls equipped for interactive workshops, IEEE PES Day technical talks, and hands-on coding bootcamps.",
      image: "/images/WhatsApp Image 2026-10-05 at 7.26.09 PM.jpeg",
      tag: "Seminar Hall 1"
    }
  ];

  return (
    <section id="explore" className="py-20 lg:py-28 bg-slate-100/70 dark:bg-[#071322] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Infrastructure & Facilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Explore BBDITM Lucknow
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
            Take an authentic visual tour of the Babu Banarasi Das Educational City campus, our branch counseling chambers, and innovation laboratories.
          </p>
        </div>

        {/* Real Campus Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campusCards.map((card, idx) => (
            <ScrollPop key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
                
                {/* Photo Container */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#002855]/90 text-white font-mono text-[11px] font-bold backdrop-blur-md border border-cyan-500/30">
                      {card.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-cyan-200 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>BBDITM Campus, Faizabad Road</span>
                    </span>
                    <span className="font-mono text-emerald-400">VERIFIED</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00629B] dark:text-cyan-400">
                    {card.category}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#002855] dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

              </div>
            </ScrollPop>
          ))}
        </div>

        {/* Location Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#002855] via-[#003B75] to-[#00629B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-cyan-300 font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Institutional Location</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold">
              Babu Banarasi Das Institute of Technology and Management
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Sector I, Dr Akhilesh Das Nagar, Faizabad Road, Lucknow, Uttar Pradesh 226028, India.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=BBDITM+Lucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#002855] hover:bg-cyan-50 font-bold text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
