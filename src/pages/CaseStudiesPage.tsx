import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowLeft,
  X, 
  Lock, 
  Clock, 
  Target, 
  TrendingUp, 
  Quote,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';
import { TestimonialItem } from '../types';

interface CaseStudiesPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ 
  onOpenQuiz, 
  onOpenSpecialist, 
  onNavigateHome 
}) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<TestimonialItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCaseStudy]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCaseStudy(null);
      } else if (e.key === 'ArrowRight') {
        handleNextStudy();
      } else if (e.key === 'ArrowLeft') {
        handlePrevStudy();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCaseStudy]);

  const handleNextStudy = () => {
    if (!selectedCaseStudy) return;
    const currentIdx = TESTIMONIALS_DATA.findIndex((item) => item.id === selectedCaseStudy.id);
    const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
    setSelectedCaseStudy(TESTIMONIALS_DATA[nextIdx]);
  };

  const handlePrevStudy = () => {
    if (!selectedCaseStudy) return;
    const currentIdx = TESTIMONIALS_DATA.findIndex((item) => item.id === selectedCaseStudy.id);
    const prevIdx = (currentIdx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    setSelectedCaseStudy(TESTIMONIALS_DATA[prevIdx]);
  };

  const filteredStudies = TESTIMONIALS_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'partner') return item.category === 'partner';
    if (selectedCategory === 'dispatch') return item.category === 'dispatch';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20">
      {/* Background ambient lighting */}
      <div 
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 py-4 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#6f879c] font-sans">
            <span className="cursor-pointer hover:text-[#fffdf9]" onClick={onNavigateHome}>Home</span>
            <span>/</span>
            <span className="text-blue-400 font-medium">Case Studies</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-blue-200 font-mono font-medium">
              VERIFIED CONTRACTOR RESULTS • ZERO RETAINERS
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-[1.04]">
            PROVEN RESULTS <br className="hidden sm:inline" />
            <span className="text-blue-400 font-serif italic lowercase tracking-normal">&amp; real contractor stories</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Real metrics from contractors in their first 30 days on our pay-per-estimate dispatch system. Zero retainers, 100% verified homeowner sits.
          </p>

          {/* Quick Aggregate Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-[18px] bg-[#0c0e17] border border-white/10 max-w-3xl mx-auto text-left shadow-lg">
            <div className="p-2.5">
              <div className="font-display text-xl sm:text-2xl text-blue-400 leading-tight">$800k+</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-0.5">Closed Revenue</div>
            </div>
            <div className="p-2.5 border-l border-white/10">
              <div className="font-display text-xl sm:text-2xl text-white leading-tight">115+</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-0.5">Shown Estimates</div>
            </div>
            <div className="p-2.5 border-t sm:border-t-0 sm:border-l border-white/10">
              <div className="font-display text-xl sm:text-2xl text-white leading-tight">35%</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-0.5">Average Close Rate</div>
            </div>
            <div className="p-2.5 border-t sm:border-t-0 sm:border-l border-white/10">
              <div className="font-display text-xl sm:text-2xl text-blue-400 leading-tight">$0</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-0.5">Agency Retainers</div>
            </div>
          </div>
        </div>

        {/* Filter Categories Pill Capsule */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#0c0e17]/95 border border-white/10 shadow-xl backdrop-blur-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.08em] font-sans transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>All Case Studies</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'all' ? 'bg-black/10 text-black' : 'bg-white/10 text-gray-300'
              }`}>
                {TESTIMONIALS_DATA.length}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('partner')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.08em] font-sans transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                selectedCategory === 'partner'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Verified Partners</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'partner' ? 'bg-black/10 text-black' : 'bg-white/10 text-gray-300'
              }`}>
                4
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('dispatch')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.08em] font-sans transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                selectedCategory === 'dispatch'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>WhatsApp Dispatches</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'dispatch' ? 'bg-black/10 text-black' : 'bg-white/10 text-gray-300'
              }`}>
                3
              </span>
            </button>
          </div>
        </div>

        {/* Super-Optimised Case Studies Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {filteredStudies.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedCaseStudy(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCaseStudy(item);
                }
              }}
              aria-label={`Open case study for ${item.company}`}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-gradient-to-b from-[#0e111d]/95 to-[#080a11]/98 border border-white/[0.08] hover:border-blue-500/50 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl select-none"
            >
              {/* Top Hairline Glow Rim */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Ambient radial blur inside card on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/[0.08] transition-colors" />

              <div className="space-y-5 relative z-10">
                {/* Header: Photo / Screenshot Avatar & Meta Tags */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3.5">
                    {item.imageUrl ? (
                      <div className="relative shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.author}
                          referrerPolicy="no-referrer"
                          className={`object-cover ${
                            item.category === 'dispatch'
                              ? 'w-13 h-15 rounded-xl border border-emerald-500/40 shadow-sm'
                              : 'w-14 h-14 rounded-2xl border-2 border-blue-500/40 shadow-md group-hover:border-blue-400 group-hover:scale-105 transition-all duration-300'
                          }`}
                          loading="eager"
                        />
                        {item.category === 'dispatch' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0c0e17] flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-13 h-13 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-display text-sm text-blue-400 shrink-0">
                        {item.avatarInitials}
                      </div>
                    )}
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors tracking-tight">
                        {item.company}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans mt-0.5 flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <span className="text-gray-600">•</span>
                        <span>{item.region}</span>
                      </p>
                    </div>
                  </div>

                  {/* Metadata Tag */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono ${
                      item.category === 'dispatch'
                        ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-300'
                        : 'bg-blue-500/10 border border-blue-500/25 text-blue-300'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        item.category === 'dispatch' ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'
                      }`} />
                      <span>{item.industry}</span>
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {item.timeframe}
                    </span>
                  </div>
                </div>

                {/* Core Transformation Result Headline */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.14em] font-mono font-semibold text-blue-400">
                      Verified Result
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-[1.35rem] text-[#fffdf9] font-normal leading-snug tracking-normal">
                    &ldquo;{item.specificResult}&rdquo;
                  </h3>
                </div>

                {/* Minimalist Metrics Ribbon (3 High-Contrast Tiles) */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-3.5 px-3.5 rounded-2xl bg-[#121524]/90 border border-white/[0.08] group-hover:border-white/15 transition-colors">
                  <div className="text-center px-1">
                    <div className="font-display text-lg sm:text-xl font-bold text-blue-400 tracking-tight leading-none truncate">
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mt-1.5 truncate">
                      {item.metricLabel}
                    </div>
                  </div>

                  <div className="text-center border-l border-white/10 px-1">
                    <div className="font-display text-base sm:text-lg font-bold text-[#fffdf9] tracking-tight leading-none truncate">
                      {item.stats?.closedJobs ? `${item.stats.closedJobs} Closed` : 'Deposit Taken'}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mt-1.5 truncate">
                      Deals Won
                    </div>
                  </div>

                  <div className="text-center border-l border-white/10 px-1">
                    <div className="font-display text-base sm:text-lg font-bold text-[#fffdf9] tracking-tight leading-none truncate">
                      {item.stats?.shownEstimates ? `${item.stats.shownEstimates} Sits` : '100% Show'}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mt-1.5 truncate">
                      Shown Sits
                    </div>
                  </div>
                </div>

                {/* Before vs After Visual Comparison Tiles */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-red-500/[0.04] border border-red-500/15 text-xs text-gray-300">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-red-500/15 text-red-400 text-[9px] font-mono font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                      Before
                    </span>
                    <span className="leading-relaxed text-gray-300 text-xs">
                      {item.beforeStatus?.[0]}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-blue-500/[0.05] border border-blue-500/20 text-xs text-white">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[9px] font-mono font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                      After
                    </span>
                    <span className="leading-relaxed text-white font-medium text-xs">
                      {item.afterStatus?.[0]}
                    </span>
                  </div>
                </div>

                {/* Direct Quote Excerpt */}
                <div className="p-3 rounded-xl bg-white/[0.02] border-l-2 border-blue-500/50">
                  <p className="text-xs sm:text-[13px] text-gray-300 italic font-sans leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Minimalist Card Footer */}
              <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verified Contractor Record</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-sans font-semibold text-xs uppercase tracking-[0.08em] group-hover:bg-blue-400 group-hover:text-black transition-all duration-200 shadow-sm">
                  <span>Read Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* The Performance Standard Section */}
        <div className="max-w-5xl mx-auto mb-20 p-8 sm:p-12 rounded-[24px] bg-[#0c0e17] border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.12em] text-blue-400 font-mono mb-3">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Verified Performance Standard</span>
              </div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal">
                How ShownLeads Delivers Real, Measurable Results
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-md">
              Unlike traditional agencies that focus on vanity impressions, our results are tied directly to scheduled appointments, confirmed show-ups, and actual pipeline revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Real Job Deposits</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Invoices paid directly by homeowners and students to the business, verified via merchant accounting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Recorded Setter Speed</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Every lead contacted within 180 seconds with time-stamped telephony logs to maintain peak intent.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">100% Exclusivity</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We never pit clients against each other. Once a city is locked, competitors are shut out permanently.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Pay-Per-Result Model</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                You pay exclusively per qualified lead, shown appointment, or closed deal. Never a monthly retainer.
              </p>
            </div>
          </div>
        </div>

        {/* Page Bottom CTA Section */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#0c0e17] border border-white/10 p-8 sm:p-14 text-center shadow-xl">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs uppercase tracking-[0.1em] text-blue-400 font-mono">
            <span>PERFORMANCE ONBOARDING</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Ready To Become Our Next <span className="text-blue-400 font-serif italic lowercase">success story?</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            Check if your trade and city are open. Zero retainers, only pay when qualified homeowners show up for estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>See If You Qualify</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenSpecialist && (
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#181a1f] border border-white/10 text-[#fffdf9] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#202329] hover:border-white/30 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Talk to a Lead Specialist</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      {selectedCaseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl my-auto rounded-[20px] bg-[#0c0e17] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Rim Highlight */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

            {/* Modal Header Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#080910] border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-sans uppercase tracking-[0.1em] text-white font-medium">
                  Verified Case Study
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevStudy}
                  aria-label="Previous case study"
                  className="p-1.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextStudy}
                  aria-label="Next case study"
                  className="p-1.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  aria-label="Close case study"
                  className="p-1.5 ml-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
              {/* Brand & Verified Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {selectedCaseStudy.imageUrl ? (
                    <img
                      src={selectedCaseStudy.imageUrl}
                      alt={selectedCaseStudy.author}
                      referrerPolicy="no-referrer"
                      className={`object-cover shrink-0 ${
                        selectedCaseStudy.category === 'dispatch'
                          ? 'w-14 h-16 rounded-xl border border-emerald-500/40 shadow-sm'
                          : 'w-14 h-14 rounded-full border-2 border-blue-500/40 shadow-md'
                      }`}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-display text-base text-blue-400 shrink-0">
                      {selectedCaseStudy.avatarInitials}
                    </div>
                  )}
                  <div>
                    <h2
                      id="case-study-title"
                      className="font-heading text-xl sm:text-2xl text-[#fffdf9] uppercase tracking-wide"
                    >
                      {selectedCaseStudy.company}
                    </h2>
                    <div className="text-xs text-gray-400 font-sans mt-0.5">
                      {selectedCaseStudy.author} • {selectedCaseStudy.industry} • {selectedCaseStudy.region}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-sans">
                    Outcome
                  </div>
                  <div className="font-display text-2xl text-blue-400 leading-tight">
                    {selectedCaseStudy.metric}
                  </div>
                  <div className="text-[11px] text-[#fffdf9]/70 font-sans">
                    {selectedCaseStudy.metricLabel}
                  </div>
                </div>
              </div>

              {/* The Specific Result Banner */}
              <div className="p-5 rounded-2xl bg-[#10121a] border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <div className="text-[10px] uppercase tracking-[0.14em] font-sans font-semibold text-blue-400 mb-1">
                  Specific Delivered Result
                </div>
                <div className="font-heading text-xl sm:text-2xl text-[#fffdf9] leading-snug">
                  &ldquo;{selectedCaseStudy.specificResult}&rdquo;
                </div>
              </div>

              {/* Metrics Grid */}
              {selectedCaseStudy.deepDive?.metricsBreakdown && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedCaseStudy.deepDive.metricsBreakdown.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-[#10121a] border border-white/10"
                    >
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-sans truncate">
                        {stat.label}
                      </div>
                      <div className="text-sm font-semibold text-white font-sans mt-1">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Deep Dive Breakdown: Challenge -> Mechanism -> Outcome */}
              {selectedCaseStudy.deepDive && (
                <div className="space-y-4 pt-1">
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedCaseStudy.deepDive.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* The Challenge */}
                    <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>The Challenge</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-400 leading-relaxed">
                        {selectedCaseStudy.deepDive.theChallenge.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#ff6b6b]/60 text-[10px] mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Mechanism */}
                    <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-blue-400 font-medium">
                        <Target className="w-3.5 h-3.5 text-blue-400" />
                        <span>The Mechanism</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-white leading-relaxed">
                        {selectedCaseStudy.deepDive.theMechanism.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-400 text-[10px] mt-0.5">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Outcome */}
                    <div className="p-4 rounded-xl bg-[#10121a] border border-white/10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 font-medium">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>The Outcome</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-white leading-relaxed">
                        {selectedCaseStudy.deepDive.theOutcome.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-400 text-[10px] mt-0.5">★</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Founder Quote */}
              <div className="p-5 rounded-2xl bg-[#0a0b12] border border-white/10">
                <Quote className="w-5 h-5 text-gray-400 mb-2 opacity-50" />
                <blockquote className="font-sans italic text-xs sm:text-sm text-gray-200 leading-relaxed mb-3">
                  &ldquo;{selectedCaseStudy.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.06]">
                  <div>
                    <span className="text-white font-medium block">{selectedCaseStudy.author}</span>
                    <span className="text-gray-400">{selectedCaseStudy.role} • {selectedCaseStudy.company}</span>
                  </div>
                  <span className="text-blue-400 text-[11px] font-mono">
                    ✓ Verified Testimonial
                  </span>
                </div>
              </div>

              {/* Verified Record Snippet */}
              {selectedCaseStudy.verifiedSnippet && (
                <div className="py-2.5 px-3.5 rounded-xl bg-[#0a0b12] border border-white/10 flex items-center gap-2.5 text-xs text-gray-400">
                  <Lock className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>
                    <strong className="text-white font-medium">RECORD NOTE:</strong>{' '}
                    {selectedCaseStudy.verifiedSnippet}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 sm:px-8 py-4 bg-[#0a0b12] border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-gray-400 font-sans hidden sm:inline">
                Zero retainer fees. Only pay for verified shown appointments.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-full border border-white/20 text-xs font-sans uppercase tracking-[0.08em] text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
                {onOpenQuiz && (
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      onOpenQuiz();
                    }}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black font-sans font-semibold text-xs uppercase tracking-[0.08em] hover:bg-gray-100 hover:scale-[1.02] transition-all cursor-pointer shadow-md"
                  >
                    <span>Check Sector Fit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
