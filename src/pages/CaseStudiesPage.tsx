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
    if (selectedCategory === 'contracting') return item.id === 'cashel-home-improvement';
    if (selectedCategory === 'academy') return item.id === 'beauty-no8';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-[#fffdf9] pt-24 pb-20">
      {/* Background ambient lighting */}
      <div 
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(42, 255, 42, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(42, 127, 255, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 py-4 mb-8 border-b border-[#26282e]">
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
            <span className="text-[#2aff2a]">Case Studies</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181d] border border-[#2e3238] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2aff2a] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#fffdf9]/90 font-sans font-medium">
              Client Transformations • 100% Performance Model
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            <span className="neon-silver-text">PROVEN RESULTS</span> <br className="hidden sm:inline" />
            &amp; CLIENT CASE STUDIES
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Real customer acquisition metrics across home contracting and vocational training academies. Zero retainers, 100% fixed performance basis.
          </p>

          {/* Quick Aggregate Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-[12px] bg-[#14161a] border border-[#26282e] max-w-3xl mx-auto text-left">
            <div className="p-2.5">
              <div className="font-display text-xl sm:text-2xl text-[#2aff2a] leading-tight">25,000+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-0.5">Qualified Leads Delivered</div>
            </div>
            <div className="p-2.5 border-l border-[#26282e]">
              <div className="font-display text-xl sm:text-2xl text-[#fffdf9] leading-tight">$3,000 2x/Wk</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-0.5">Contractor Invoices</div>
            </div>
            <div className="p-2.5 border-t sm:border-t-0 sm:border-l border-[#26282e]">
              <div className="font-display text-xl sm:text-2xl text-[#fffdf9] leading-tight">15 Active</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-0.5">Academy Enrollments</div>
            </div>
            <div className="p-2.5 border-t sm:border-t-0 sm:border-l border-[#26282e]">
              <div className="font-display text-xl sm:text-2xl text-[#2aff2a] leading-tight">$0 Retainer</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-0.5">Zero Agency Retainers</div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#fffdf9] text-[#101010] shadow-sm'
                : 'bg-[#14161a] text-[#8e9aa8] border border-[#26282e] hover:text-[#fffdf9]'
            }`}
          >
            All Case Studies ({TESTIMONIALS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedCategory('contracting')}
            className={`px-4 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans font-medium transition-all cursor-pointer ${
              selectedCategory === 'contracting'
                ? 'bg-[#fffdf9] text-[#101010] shadow-sm'
                : 'bg-[#14161a] text-[#8e9aa8] border border-[#26282e] hover:text-[#fffdf9]'
            }`}
          >
            Painting &amp; Home Improvement (1)
          </button>
          <button
            onClick={() => setSelectedCategory('academy')}
            className={`px-4 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans font-medium transition-all cursor-pointer ${
              selectedCategory === 'academy'
                ? 'bg-[#fffdf9] text-[#101010] shadow-sm'
                : 'bg-[#14161a] text-[#8e9aa8] border border-[#26282e] hover:text-[#fffdf9]'
            }`}
          >
            Beauty &amp; Training Academy (1)
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
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
              className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-[16px] bg-[#121316] border border-[#26282e] hover:border-[#fffdf9]/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] cursor-pointer select-none"
            >
              {/* Top Hairline Rim Highlight */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#fffdf9]/20 to-transparent pointer-events-none" />

              <div className="space-y-6">
                {/* Header: Clean Logo Presentation & Meta Tags */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#22242a]">
                  {/* Clean Minimalist Logo Container */}
                  <div className="h-14 sm:h-16 w-auto min-w-[130px] max-w-[200px] rounded-[8px] bg-[#17191d] border border-[#2a2d33] flex items-center justify-center px-4 py-2 relative group-hover:border-[#424650] transition-colors">
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={`${item.company} Logo`}
                        referrerPolicy="no-referrer"
                        className="max-h-10 sm:max-h-11 max-w-full object-contain filter drop-shadow brightness-105"
                        loading="eager"
                      />
                    ) : (
                      <span className="font-heading text-base text-[#fffdf9] tracking-wide">{item.company}</span>
                    )}
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#181a1f] border border-[#2c2f36] text-[10px] uppercase tracking-wider text-[#8e9aa8] font-sans">
                      {item.industry}
                    </span>
                    <span className="text-[11px] text-[#6f879c] font-sans">
                      {item.region} • {item.timeframe}
                    </span>
                  </div>
                </div>

                {/* Company Name & Core Transformation Result */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a]" />
                    <span className="text-[10px] uppercase tracking-[0.14em] font-sans font-semibold text-[#2aff2a]">
                      Verified Transformation
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-[1.75rem] text-[#fffdf9] font-normal leading-snug tracking-wide">
                    &ldquo;{item.specificResult}&rdquo;
                  </h3>
                </div>

                {/* Minimalist Metrics Ribbon */}
                <div className="grid grid-cols-3 gap-3 py-4 px-4 rounded-[10px] bg-[#16181d] border border-[#26282e]">
                  <div>
                    <div className="font-display text-xl sm:text-2xl text-[#2aff2a] tracking-tight leading-none">
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-[#8e9aa8] uppercase tracking-wider font-sans mt-1.5 truncate">
                      Delivered Outcome
                    </div>
                  </div>

                  <div className="border-l border-[#26282e] pl-3">
                    <div className="font-display text-lg sm:text-xl text-[#fffdf9] tracking-tight leading-none">
                      {item.id === 'cashel-home-improvement' ? '2 Jobs/Wk' : '1 Signup'}
                    </div>
                    <div className="text-[10px] text-[#6f879c] uppercase tracking-wider font-sans mt-1.5 truncate">
                      Old Baseline
                    </div>
                  </div>

                  <div className="border-l border-[#26282e] pl-3">
                    <div className="font-display text-lg sm:text-xl text-[#fffdf9] tracking-tight leading-none">
                      {item.id === 'cashel-home-improvement' ? '92% Show' : '89% Show'}
                    </div>
                    <div className="text-[10px] text-[#6f879c] uppercase tracking-wider font-sans mt-1.5 truncate">
                      Show-Up Rate
                    </div>
                  </div>
                </div>

                {/* Before vs After Micro-Bar */}
                <div className="space-y-2 text-xs pt-1">
                  <div className="flex items-start gap-2.5 text-[#8e9aa8]">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-[3px] bg-[#221c1c] text-[#ff6b6b] border border-[#3e2525] text-[9px] font-sans font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                      Before
                    </span>
                    <span className="leading-relaxed text-[#8e9aa8] text-xs">
                      {item.beforeStatus?.[0]}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#fffdf9]">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-[3px] bg-[#142617] text-[#2aff2a] border border-[#1e3c23] text-[9px] font-sans font-semibold uppercase tracking-wider shrink-0 mt-0.5">
                      After
                    </span>
                    <span className="leading-relaxed text-[#fffdf9] font-medium text-xs">
                      {item.afterStatus?.[0]}
                    </span>
                  </div>
                </div>

                {/* Direct Authentic Quote Excerpt */}
                <p className="text-xs sm:text-[13px] text-[#8e9aa8] italic font-sans leading-relaxed border-l-2 border-[#2e3238] pl-3 py-0.5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="text-xs text-[#8e9aa8] font-sans">
                  <span className="text-[#fffdf9] font-medium">{item.author}</span> • {item.role}, {item.company}
                </div>
              </div>

              {/* Minimalist Card Footer */}
              <div className="pt-5 mt-6 border-t border-[#22242a] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-[#6f879c] font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2aff2a]" />
                  <span>Verified CRM Invoices</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-[0.08em] text-[#fffdf9] group-hover:text-[#2aff2a] transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* The Performance Standard Section */}
        <div className="max-w-5xl mx-auto mb-20 p-8 sm:p-12 rounded-[16px] bg-[#14161a] border border-[#26282e]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#26282e]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-[11px] uppercase tracking-[0.12em] text-[#2aff2a] font-sans mb-3">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Verified Performance Standard</span>
              </div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal">
                How ShownLeads Delivers Real, Measurable Results
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] max-w-md">
              Unlike traditional agencies that focus on vanity impressions, our results are tied directly to scheduled appointments, confirmed show-ups, and actual pipeline revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-[10px] bg-[#101215] border border-[#22242a] space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-[#17191d] flex items-center justify-center text-[#2aff2a]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Real Job Deposits</h3>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                Invoices paid directly by homeowners and students to the business, verified via merchant accounting.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-[#101215] border border-[#22242a] space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-[#17191d] flex items-center justify-center text-[#2aff2a]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Recorded Setter Speed</h3>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                Every lead contacted within 180 seconds with time-stamped telephony logs to maintain peak intent.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-[#101215] border border-[#22242a] space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-[#17191d] flex items-center justify-center text-[#2aff2a]">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">100% Exclusivity</h3>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                We never pit clients against each other. Once a city is locked, competitors are shut out permanently.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-[#101215] border border-[#22242a] space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-[#17191d] flex items-center justify-center text-[#2aff2a]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-sm font-semibold text-[#fffdf9]">Pay-Per-Result Model</h3>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                You pay exclusively per qualified lead, shown appointment, or closed deal. Never a monthly retainer.
              </p>
            </div>
          </div>
        </div>

        {/* Page Bottom CTA Section */}
        <div className="max-w-4xl mx-auto rounded-[16px] bg-[#141414] border border-[#403f3f] p-8 sm:p-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans">
            <span>PERFORMANCE ONBOARDING</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Ready To Become Our Next <span className="neon-silver-text">Success Story?</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            Check if your trade sector and city territory are available. Zero retainer risk, pay only when qualified prospects show up to your appointments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>See If You Qualify</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenSpecialist && (
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] bg-[#181a1f] border border-[#403f3f] text-[#fffdf9] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#202329] hover:border-[#fffdf9] transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#6f879c]" />
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
            className="relative w-full max-w-3xl my-auto rounded-[16px] bg-[#121316] border border-[#2e3238] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Rim Highlight */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#fffdf9]/30 to-transparent pointer-events-none" />

            {/* Modal Header Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#0e0f12] border-b border-[#26282e] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2aff2a]" />
                <span className="text-xs font-sans uppercase tracking-[0.1em] text-[#fffdf9] font-medium">
                  Verified Transformation Deep Dive
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevStudy}
                  aria-label="Previous case study"
                  className="p-1.5 rounded-[5px] border border-[#2c2f36] text-[#8e9aa8] hover:text-[#fffdf9] hover:border-[#fffdf9] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextStudy}
                  aria-label="Next case study"
                  className="p-1.5 rounded-[5px] border border-[#2c2f36] text-[#8e9aa8] hover:text-[#fffdf9] hover:border-[#fffdf9] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  aria-label="Close case study"
                  className="p-1.5 ml-2 rounded-[5px] border border-[#2c2f36] text-[#8e9aa8] hover:text-[#fffdf9] hover:border-[#fffdf9] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
              {/* Brand & Verified Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#22242a]">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-32 rounded-[8px] bg-[#17191d] border border-[#2a2d33] p-2 flex items-center justify-center shrink-0">
                    {selectedCaseStudy.logoUrl ? (
                      <img
                        src={selectedCaseStudy.logoUrl}
                        alt={`${selectedCaseStudy.company} Logo`}
                        referrerPolicy="no-referrer"
                        className="max-h-10 max-w-full object-contain filter drop-shadow brightness-105"
                      />
                    ) : (
                      <span className="font-heading text-sm text-[#fffdf9]">
                        {selectedCaseStudy.company}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2
                      id="case-study-title"
                      className="font-heading text-xl sm:text-2xl text-[#fffdf9] uppercase tracking-wide"
                    >
                      {selectedCaseStudy.company}
                    </h2>
                    <div className="text-xs text-[#8e9aa8] font-sans mt-0.5">
                      {selectedCaseStudy.industry} • {selectedCaseStudy.region}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[10px] uppercase tracking-wider text-[#8e9aa8] font-sans">
                    Outcome
                  </div>
                  <div className="font-display text-2xl text-[#2aff2a] leading-tight">
                    {selectedCaseStudy.metric}
                  </div>
                  <div className="text-[11px] text-[#fffdf9]/70 font-sans">
                    {selectedCaseStudy.metricLabel}
                  </div>
                </div>
              </div>

              {/* The Specific Result Banner */}
              <div className="p-4 rounded-[10px] bg-[#16181d] border border-[#2e3238]">
                <div className="text-[10px] uppercase tracking-[0.14em] font-sans font-semibold text-[#2aff2a] mb-1">
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
                      className="p-3 rounded-[8px] bg-[#15171b] border border-[#26282e]"
                    >
                      <div className="text-[10px] text-[#8e9aa8] uppercase tracking-wider font-sans truncate">
                        {stat.label}
                      </div>
                      <div className="text-sm font-semibold text-[#fffdf9] font-sans mt-1">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Deep Dive Breakdown: Challenge -> Mechanism -> Outcome */}
              {selectedCaseStudy.deepDive && (
                <div className="space-y-4 pt-1">
                  <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/80 leading-relaxed">
                    {selectedCaseStudy.deepDive.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* The Challenge */}
                    <div className="p-4 rounded-[8px] bg-[#15171b] border border-[#26282e] space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>The Challenge</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#8e9aa8] leading-relaxed">
                        {selectedCaseStudy.deepDive.theChallenge.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#ff6b6b]/60 text-[10px] mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Mechanism */}
                    <div className="p-4 rounded-[8px] bg-[#15171b] border border-[#26282e] space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#fffdf9] font-medium">
                        <Target className="w-3.5 h-3.5 text-[#2aff2a]" />
                        <span>The Mechanism</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#fffdf9]/85 leading-relaxed">
                        {selectedCaseStudy.deepDive.theMechanism.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#2aff2a] text-[10px] mt-0.5">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Outcome */}
                    <div className="p-4 rounded-[8px] bg-[#15171b] border border-[#26282e] space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#2aff2a] font-medium">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>The Outcome</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#fffdf9] leading-relaxed">
                        {selectedCaseStudy.deepDive.theOutcome.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#2aff2a] text-[10px] mt-0.5">★</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Founder Quote */}
              <div className="p-5 rounded-[10px] bg-[#0e0f12] border border-[#26282e]">
                <Quote className="w-5 h-5 text-[#8e9aa8] mb-2 opacity-50" />
                <blockquote className="font-sans italic text-xs sm:text-sm text-[#fffdf9]/90 leading-relaxed mb-3">
                  &ldquo;{selectedCaseStudy.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#22242a]">
                  <div>
                    <span className="text-[#fffdf9] font-medium block">{selectedCaseStudy.author}</span>
                    <span className="text-[#8e9aa8]">{selectedCaseStudy.role} • {selectedCaseStudy.company}</span>
                  </div>
                  <span className="text-[#2aff2a] text-[11px] font-sans">
                    ✓ Verified Testimonial
                  </span>
                </div>
              </div>

              {/* Verified Record Snippet */}
              {selectedCaseStudy.verifiedSnippet && (
                <div className="py-2.5 px-3.5 rounded-[6px] bg-[#0e0f12] border border-[#26282e] flex items-center gap-2.5 text-xs text-[#8e9aa8]">
                  <Lock className="w-3.5 h-3.5 text-[#fffdf9] shrink-0" />
                  <span>
                    <strong className="text-[#fffdf9] font-medium">RECORD NOTE:</strong>{' '}
                    {selectedCaseStudy.verifiedSnippet}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 sm:px-8 py-3.5 bg-[#0e0f12] border-t border-[#26282e] flex items-center justify-between gap-4">
              <span className="text-xs text-[#8e9aa8] font-sans hidden sm:inline">
                Zero retainer fees. Only pay for verified shown appointments.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-[6px] border border-[#2c2f36] text-xs font-sans uppercase tracking-[0.08em] text-[#fffdf9] hover:border-[#fffdf9] transition-colors cursor-pointer"
                >
                  Close
                </button>
                {onOpenQuiz && (
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      onOpenQuiz();
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] transition-all cursor-pointer shadow-sm"
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
