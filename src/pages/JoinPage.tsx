import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, Sparkles, ChevronDown } from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';

export const JoinPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const perks = [
    { title: "IEEE Xplore Digital Access", desc: "Access 5+ million research papers, IEEE standards, and conference proceedings at massive student discounts." },
    { title: "Special India Student Dues", desc: "Eligible for developing nation student member discounts, saving over 60% compared to standard professional dues." },
    { title: "IEEE @ieee.org Email Alias", desc: "Receive a professional @ieee.org email forwarder with integrated Google Workspace services." },
    { title: "Conference Travel & Project Grants", desc: "Apply for IEEE UP Section and Region 10 student travel grants to present your papers worldwide." },
    { title: "IEEEXtreme 24h Global Hackathon", desc: "Participate in the legendary worldwide 24-hour virtual coding competition exclusive to IEEE members." },
    { title: "Leadership & Chapter Positions", desc: "Gain executive leadership credentials by chairing chapters, organizing conclaves, and managing branch budgets." },
  ];

  const faqs = [
    { q: "Who can join IEEE BBDITM?", a: "Any undergraduate or postgraduate student enrolled in engineering, computer science, or technology disciplines at BBDITM can join as a student member." },
    { q: "How much does IEEE student membership cost in India?", a: "IEEE offers a special regional discount for students in India (approximately $14 USD for half-year or $27 USD for full-year), plus optional society add-ons." },
    { q: "What is the BBDITM branch code?", a: "Our official branch code is STB10214 / STB99081 (Babu Banarasi Das Institute of Technology and Management, Lucknow)." },
    { q: "How do I get involved with technical projects?", a: "Once you receive your 8-digit IEEE Member Number, share it with our branch secretary to be added to project labs and SIG groups." },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#07111E] transition-colors duration-300">
      
      {/* Header */}
      <div className="relative py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollPop direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-[#0F233D] text-[#00629B] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Membership Drive 2026</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Join IEEE BBDITM Student Branch
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Unlock global research resources, connect with 420,000+ engineers worldwide, and launch your engineering leadership career in Lucknow.
            </p>
          </ScrollPop>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Real Student Member Photography Frame */}
        <ScrollPop direction="up">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative group border border-slate-200 dark:border-slate-800 bg-slate-900">
            <div className="aspect-[21/9] w-full relative">
              <img src="/auditorium-session.jpg" alt="IEEE BBDITM Student Members in Auditorium" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-300 font-bold">ANNUAL MEMBER CONCLAVE</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">Be Part of the Student Community</h3>
                </div>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00629B] text-white font-bold text-sm shadow-lg hover:bg-[#004e7b] transition-all flex-shrink-0"
                >
                  <span>Register on IEEE.org</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollPop>

        {/* 6 Core Member Benefits Grid */}
        <div className="space-y-8">
          <ScrollPop direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                What You Gain as an IEEE Member
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Tangible academic and career benefits available exclusively to verified IEEE student members.
              </p>
            </div>
          </ScrollPop>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, idx) => (
              <ScrollPop key={idx} direction="up" delay={idx * 0.08}>
                <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#152E50] flex items-center justify-center text-[#00629B] dark:text-cyan-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollPop>
            ))}
          </div>
        </div>

        {/* 4-Step Registration Guide */}
        <ScrollPop direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] dark:text-cyan-400">
                Roadmap to Join
              </span>
              <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                4 Steps to Complete Your Membership
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Create IEEE Account', desc: 'Visit ieee.org/join and sign up with your college email address.' },
                { step: '02', title: 'Select Student Status', desc: 'Choose Undergraduate Student Member for discounted India dues.' },
                { step: '03', title: 'Enter Branch STB10214', desc: 'Affiliate with Babu Banarasi Das Institute of Technology and Management.' },
                { step: '04', title: 'Confirm with Secretary', desc: 'Send your 8-digit IEEE ID to our branch executive council for onboarding.' },
              ].map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071529] border border-slate-200 dark:border-slate-800 space-y-2 relative">
                  <span className="font-display font-extrabold text-3xl text-[#00629B]/30 dark:text-cyan-400/30">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{s.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollPop>

        {/* Frequently Asked Questions */}
        <div className="space-y-6">
          <ScrollPop direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Got questions about joining IEEE BBDITM? Here are common answers.
              </p>
            </div>
          </ScrollPop>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <ScrollPop key={idx} direction="up" delay={idx * 0.05}>
                <div 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0D1D33] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 cursor-pointer transition-all hover:border-[#00629B]/40"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-base">
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#00629B] dark:text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === idx && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">{faq.a}</p>
                  )}
                </div>
              </ScrollPop>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
