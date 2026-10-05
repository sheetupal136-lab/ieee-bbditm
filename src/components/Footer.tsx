import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#040C18] text-slate-300 border-t border-slate-800 relative z-10 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Real Logo in Footer */}
            <div className="flex items-center gap-3">
              <div className="bg-white px-2 py-1 rounded-xl border border-slate-700 shadow-sm">
                <img 
                  src="/branch-logo.png" 
                  alt="IEEE BBDITM Student Branch Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white">IEEE BBDITM</span>
                <span className="text-[10px] font-mono text-cyan-400">STUDENT BRANCH STB10214</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering undergraduate engineering innovators and researchers at Babu Banarasi Das Institute of Technology and Management through global IEEE connection.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>BBD Educational City, Faizabad Road, Lucknow, Uttar Pradesh 226028, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>ieee@bbditm.ac.in • IEEE UP Section</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white font-mono">
              Dedicated Pages
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Branch</Link></li>
              <li><Link to="/events" className="hover:text-cyan-400 transition-colors">Events & Workshops</Link></li>
              <li><Link to="/societies" className="hover:text-cyan-400 transition-colors">Societies & Chapters</Link></li>
              <li><Link to="/faculty" className="hover:text-cyan-400 transition-colors">Faculty & 2026 Team</Link></li>
              <li><Link to="/achievements" className="hover:text-cyan-400 transition-colors">Awards & Timeline</Link></li>
            </ul>
          </div>

          {/* Societies & Leadership */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white font-mono">
              Specialized Sections
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/societies" className="hover:text-cyan-400 transition-colors">IEEE Computer Society Chapter</Link></li>
              <li><Link to="/societies" className="hover:text-cyan-400 transition-colors">IEEE Power & Energy Society (PES)</Link></li>
              <li><Link to="/societies" className="hover:text-cyan-400 transition-colors">IEEE Power Electronics Society (PELS)</Link></li>
              <li><Link to="/societies" className="hover:text-cyan-400 transition-colors">IEEE Women in Engineering (WIE)</Link></li>
              <li><Link to="/faculty" className="hover:text-cyan-400 transition-colors">Faculty & 2026 Office Bearers</Link></li>
              <li><a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><span>Join on ieee.org</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

          {/* Official IEEE Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white font-mono">
              Official IEEE Resources
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="https://www.ieee.org" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span>IEEE.org Global</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://ieeexplore.ieee.org" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span>IEEE Xplore Digital Library</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.ieeer10.org" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span>IEEE Region 10 (Asia-Pacific)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.ieeeup.org" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <span>IEEE Uttar Pradesh Section</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white border border-slate-700 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Safety Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Official IEEE BBDITM Student Branch • Babu Banarasi Das Institute of Technology and Management, Lucknow</span>
          </div>

          <p className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} IEEE BBDITM. Branch Code STB10214.
          </p>
        </div>

      </div>
    </footer>
  );
};
