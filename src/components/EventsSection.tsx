import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/branchData';
import type { EventItem } from '../types';
import { Calendar, Clock, MapPin, ChevronRight, X, ShieldCheck } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const featuredEvent = EVENTS_DATA.find((e) => e.featured) || EVENTS_DATA[0];
  const standardEvents = EVENTS_DATA.filter((e) => e.id !== featuredEvent.id);

  return (
    <section id="events" className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#002855] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Official IEEE Technical Calendar 2026</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Flagship Events & Technical Calendar
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-sm sm:text-base max-w-md">
            Global IEEE flagship observances, 24-hour virtual programming challenge (IEEEXtreme 20.0), sustainable energy symposiums (PES Day), and ISRO guest masterclasses at BBDITM.
          </p>
        </div>

        {/* FEATURED EVENT CARD WITH REAL PHOTOGRAPHY */}
        {featuredEvent && (
          <div className="mb-10 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Featured Image Canvas Slot with Real Image */}
              <div className="lg:col-span-5 relative overflow-hidden min-h-[280px] bg-slate-900">
                <img 
                  src={featuredEvent.imageUrl || "/event-conclave.jpg"} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    FEATURED FLAGSHIP
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-300 backdrop-blur-md">
                    BBDITM LKO
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real Branch Conclave</span>
                  </div>
                  <span className="text-cyan-300 font-mono text-[11px]">CERTIFICATE INCLUDED</span>
                </div>
              </div>

              {/* Featured Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-blue-100 text-[#00629B] dark:bg-[#152E50] dark:text-cyan-300 font-bold">
                      {featuredEvent.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                      {featuredEvent.date}
                    </span>
                    {featuredEvent.time && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {featuredEvent.time}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors">
                    {featuredEvent.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {featuredEvent.location && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-400 pt-2">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEvent(featuredEvent)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00629B] dark:text-cyan-400 hover:text-[#004e7b] dark:hover:text-cyan-300"
                  >
                    <span>View Event Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedEvent(featuredEvent)}
                    className="px-5 py-2.5 rounded-xl bg-[#002855] hover:bg-[#003B75] text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    Register / Details
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ADDITIONAL EVENTS ROW WITH REAL IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standardEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white dark:bg-[#0D1D33] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#00629B]/50 dark:hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Real Image Box */}
                <div className="aspect-[16/10] w-full rounded-xl bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                  <img 
                    src={evt.imageUrl || "/auditorium-session.jpg"} 
                    alt={evt.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300">
                      {evt.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-medium text-white truncate">
                    {evt.imagePlaceholder}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#00629B] dark:text-cyan-400" />
                    <span>{evt.date}</span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {evt.title}
                  </h4>

                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedEvent(evt)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] dark:text-cyan-400 hover:text-[#004e7b] dark:hover:text-cyan-300"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {evt.registrationOpen ? (
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Open
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* QUICK VIEW DETAILS MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0D1D33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#00629B] dark:bg-[#152E50] dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                {selectedEvent.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {selectedEvent.title}
              </h3>
            </div>

            {selectedEvent.imageUrl && (
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900">
                <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <Calendar className="w-4 h-4 text-[#00629B] dark:text-cyan-400" />
                <span className="font-semibold">{selectedEvent.date}</span>
              </div>
              {selectedEvent.time && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{selectedEvent.time}</span>
                </div>
              )}
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

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Registration request for "${selectedEvent.title}" noted. Link will connect to official Google Form/portal.`);
                  setSelectedEvent(null);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#00629B] hover:bg-[#004e7b] rounded-xl shadow-md"
              >
                Proceed to Register
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
