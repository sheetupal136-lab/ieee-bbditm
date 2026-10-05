import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { ContactModal } from './ContactModal';

interface JoinSectionProps {
  onJoinClick?: () => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onJoinClick: _onJoinClick }) => {

  const [contactOpen, setContactOpen] = useState(false);

  const perks = [
    "Discounted student registration rates for IEEE international conferences & publications",
    "Full access to IEEE Spectrum, IEEE Xplore digital papers, and technical standards",
    "Eligibility for Google Summer of Code, IEEE IEEEXtreme 24h, and branch hardware grants",
    "Personal @ieee.org professional alias email with Google suite integration",
    "Direct mentorship from senior researchers and engineers across IEEE UP Section",
  ];

  return (
    <section id="join" className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#002855] via-[#003875] to-[#00629B] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Pattern */}
          <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00A3E0]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-bold uppercase tracking-wider border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Student Membership Drive 2026</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                BUILD YOUR FUTURE <br />
                <span className="text-cyan-300">WITH IEEE BBDITM.</span>
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-xl leading-relaxed">
                Unlock career-defining engineering opportunities, global conferences, published research citations, and technical community leadership at BBDITM Lucknow.
              </p>

              {/* Perks Checklist */}
              <div className="space-y-2.5 pt-2">
                {perks.slice(0, 3).map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#002855] bg-white hover:bg-cyan-50 rounded-xl shadow-lg transition-all active:scale-95"
                >
                  <span>Join IEEE (Official ieee.org)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4 text-cyan-300" />
                  <span>Send Branch Inquiry</span>
                </button>
              </div>

            </div>

            {/* Right: Real Student Branch Photography */}
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group border border-white/20 bg-slate-900">
                <img 
                  src="/images/WhatsApp Image 2026-10-05 at 7.51.02 PM (1).jpeg" 
                  alt="IEEE BBDITM Student Members and 2026 Executive Council" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold">
                    BBDITM LUCKNOW
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/80 text-white font-mono text-[11px] font-bold">
                    STB10214
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-white z-10">
                  <div className="font-semibold text-cyan-200">2026 Core Executive Committee</div>
                  <div className="text-[11px] text-blue-200 font-mono">Babu Banarasi Das Institute of Technology & Management</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Inquiry Form Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
};
