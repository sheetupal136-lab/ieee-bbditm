import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/branchData';
import type { EventItem } from '../types';
import { Calendar, MapPin, ChevronRight, X, Filter } from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Flagship', 'Workshop', 'Seminar', 'Hackathon'];

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Page Header */}
      <div className="relative py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Official IEEE Technical Calendar 2026</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Flagship Events, Workshops & Hackathons
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Explore global IEEE Day observances, IEEEXtreme 20.0 24-hour coding challenge, PES clean energy conclaves, and space tech talks with ISRO scientists at BBDITM.
            </p>
          </ScrollPop>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Category Filters */}
        <ScrollPop direction="up">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-[#002855] text-white shadow-[#002855]/25'
                    : 'bg-white dark:bg-[#0D1D33] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollPop>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt, idx) => (
            <ScrollPop key={evt.id} direction="up" delay={idx * 0.08}>
              <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 h-full group">
                <div className="space-y-4">
                  
                  {/* Real Image */}
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 relative">
                    <img 
                      src={evt.imageUrl || "/event-conclave.jpg"} 
                      alt={evt.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-white/10">
                        {evt.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00629B] dark:text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {evt.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] dark:text-cyan-400 hover:text-[#004e7b] dark:hover:text-cyan-300"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="px-4 py-2 rounded-xl bg-[#00629B] text-white text-xs font-bold hover:bg-[#004e7b] transition-colors"
                  >
                    Register
                  </button>
                </div>
              </div>
            </ScrollPop>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900">
              <img src={selectedEvent.imageUrl || "/event-conclave.jpg"} alt={selectedEvent.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#00629B] dark:bg-[#152E50] dark:text-cyan-300">
                {selectedEvent.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {selectedEvent.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <Calendar className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                <span className="font-semibold">{selectedEvent.date}</span>
              </div>
              {selectedEvent.location && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{selectedEvent.location}</span>
                </div>
              )}
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Registration confirmed for ${selectedEvent.title}!`);
                  setSelectedEvent(null);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#00629B] hover:bg-[#004e7b] rounded-xl shadow-md"
              >
                Complete Registration
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
