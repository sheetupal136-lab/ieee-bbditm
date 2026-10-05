import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Calendar, Cpu, Layers, ArrowRight } from 'lucide-react';
import { EVENTS_DATA, CHAPTERS_DATA, FACULTY_DATA, TEAM_DATA_2026 } from '../data/branchData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle ESC key and Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredEvents = EVENTS_DATA.filter(
    (e) => e.title.toLowerCase().includes(q) || e.category.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
  );

  const filteredFaculty = [
    ...FACULTY_DATA.map(f => ({ id: f.id, name: f.name, role: f.ieeeRole, dept: f.department })),
    ...TEAM_DATA_2026.map(t => ({ id: t.id, name: t.name, role: t.role, dept: t.department }))
  ].filter(
    (p) => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.dept.toLowerCase().includes(q)
  );

  const filteredChapters = CHAPTERS_DATA.filter(
    (c) => c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)
  );

  const totalResults = filteredEvents.length + filteredFaculty.length + filteredChapters.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search events, projects, chapters, or technologies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {query === '' ? (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <p className="text-sm">Type keywords like "AI", "Workshop", "Computer Society", or "Rover"</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Workshop', 'Hackathon', 'Computer Society', 'IoT', 'WIE'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-[#152e50] text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          ) : (
            <>
              {/* Events Results */}
              {filteredEvents.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                    <span>Events ({filteredEvents.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredEvents.map((evt) => (
                      <Link
                        key={evt.id}
                        to="/events"
                        onClick={onClose}
                        className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 flex items-center justify-between transition-colors block"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{evt.title}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{evt.date} • {evt.category}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty & Leadership Results */}
              {filteredFaculty.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                    <span>Faculty & Leadership ({filteredFaculty.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredFaculty.map((member) => (
                      <Link
                        key={member.id}
                        to="/faculty"
                        onClick={onClose}
                        className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 flex items-center justify-between transition-colors block"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{member.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{member.role} • {member.dept}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapters Results */}
              {filteredChapters.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                    <span>Chapters & Societies ({filteredChapters.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredChapters.map((ch) => (
                      <Link
                        key={ch.id}
                        to="/chapters"
                        onClick={onClose}
                        className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 flex items-center justify-between transition-colors block"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{ch.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{ch.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
