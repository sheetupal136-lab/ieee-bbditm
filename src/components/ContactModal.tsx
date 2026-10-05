import React from 'react';
import { X, Phone, Mail, MapPin, ShieldCheck, MessageCircle, ExternalLink, GraduationCap, Users } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#071529] border border-slate-200 dark:border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#002855] via-[#003B75] to-[#00629B] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <Phone className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Contact IEEE BBDITM Leadership
              </h3>
              <p className="text-xs text-blue-200 font-mono">
                Branch Counselor & Executive Committee • STB10214
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-blue-200 hover:text-white hover:bg-white/15 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Direct Contact Cards (No Form) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Top Info Banner */}
          <div className="p-3 rounded-2xl bg-blue-50 dark:bg-[#0D1D33] border border-blue-200 dark:border-blue-900/50 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold">Direct Communication Channels for Inquiries & Mentorship</span>
            </div>
            <span className="font-mono text-[#00629B] dark:text-cyan-400 font-bold hidden sm:inline">STB10214 LUCKNOW</span>
          </div>

          {/* Card 1: Branch Counselor (Prof. Rafik Ahmad) */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#0D1D33] border-2 border-slate-200 dark:border-slate-800 shadow-md hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
            {/* Photo */}
            <div className="w-full sm:w-32 aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative flex-shrink-0 shadow-lg border border-slate-200/40 dark:border-slate-700/60">
              <img 
                src="/images/prof-rafik-ahmad.png" 
                alt="Prof. Rafik Ahmad" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 inset-x-1.5 text-[9px] font-mono text-cyan-300 text-center font-bold uppercase bg-[#002855]/85 backdrop-blur-sm py-0.5 rounded border border-cyan-400/30">
                Counselor
              </div>
            </div>

            {/* Information */}
            <div className="space-y-2 flex-1 w-full">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#00629B] dark:text-cyan-400 bg-blue-100/70 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/50 flex items-center gap-1">
                  <GraduationCap className="w-3 h-3" />
                  <span>Branch Counselor</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-bold">Dept. of ECE</span>
              </div>

              <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Prof. Rafik Ahmad
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Professor & Senior Faculty Member, BBDITM. Guiding the student branch in technical roadmap execution, IEEE Uttar Pradesh Section liaison, and student research integrity.
              </p>

              {/* Contact Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href="tel:+919450026899"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#002855] hover:bg-[#003B75] text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-300" />
                  <span>+91 94500 26899</span>
                </a>

                <a
                  href="https://wa.me/919450026899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Student Branch President (Mohammed Saif) */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#0D1D33] border-2 border-slate-200 dark:border-slate-800 shadow-md hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
            {/* Photo */}
            <div className="w-full sm:w-32 aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative flex-shrink-0 shadow-lg border border-slate-200/40 dark:border-slate-700/60">
              <img 
                src="/images/mohammed-saif.png" 
                alt="Mohammed Saif" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 inset-x-1.5 text-[9px] font-mono text-cyan-300 text-center font-bold uppercase bg-[#002855]/85 backdrop-blur-sm py-0.5 rounded border border-cyan-400/30">
                President
              </div>
            </div>

            {/* Information */}
            <div className="space-y-2 flex-1 w-full">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#00629B] dark:text-cyan-400 bg-blue-100/70 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/50 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>Student Branch President / Chair</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-bold">2026 Executive Council</span>
              </div>

              <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Mohammed Saif
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Chairperson & President, IEEE BBDITM Student Branch. Overseeing all 7 technical societies, membership drives, hackathon delegations, and student collaborations.
              </p>

              {/* Contact Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href="tel:+917275241800"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#002855] hover:bg-[#003B75] text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-300" />
                  <span>+91 72752 41800</span>
                </a>

                <a
                  href="https://wa.me/917275241800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Branch Headquarters & Official Email */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                <MapPin className="w-4 h-4 text-[#00629B] dark:text-cyan-400 flex-shrink-0" />
                <span>BBD Educational City, Faizabad Road, Lucknow, UP 226028</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 pl-6">
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                <a href="mailto:ieee@bbditm.ac.in" className="hover:text-[#00629B] dark:hover:text-cyan-400 underline">
                  ieee@bbditm.ac.in
                </a>
                <span>•</span>
                <span>IEEE UP Section (Region 10)</span>
              </div>
            </div>

            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0D1D33] border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm flex-shrink-0"
            >
              <span>Join IEEE Portal</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 dark:bg-[#0D1D33] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">
            IEEE Branch Code: STB10214
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
