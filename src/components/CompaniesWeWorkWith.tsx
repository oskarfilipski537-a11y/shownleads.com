import React from 'react';
import { ArrowRight, DollarSign, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CompaniesWeWorkWithProps {
  onOpenQuiz?: () => void;
}

export const CompaniesWeWorkWith: React.FC<CompaniesWeWorkWithProps> = ({ onOpenQuiz }) => {
  const { t } = useLanguage();

  // All 13 specific niches from translations, split across two kinetic marquee ribbons
  const trades = t.companiesTrades || [];
  const tradesGroup1 = trades.slice(0, 7);
  const tradesGroup2 = trades.slice(7);

  const countries = [
    "United States",
    "United Kingdom",
    "Ireland",
    "Canada",
    "Australia"
  ];

  // Repeat for continuous seamless marquee streaming
  const marquee1 = [...tradesGroup1, ...tradesGroup1, ...tradesGroup1];
  const marquee2 = [...tradesGroup2, ...tradesGroup2, ...tradesGroup2];

  return (
    <section
      id="companies-we-work-with"
      className="relative py-28 sm:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Ambient background illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-14 sm:mb-20">
        
        {/* Section Header with Fundory Serif Italic Accent */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">{t.companiesTag}</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-tight">
            Companies We{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Work With
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/90 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            {t.companiesDesc}
          </p>

          {/* Qualified Geographic & Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-sans">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-200">
              <DollarSign className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium">{t.companiesBadgeTicket}</span>
            </div>

            {countries.map((c, i) => (
              <div 
                key={i} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Kinetic Infinite Ribbon 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden mb-5 sm:mb-6">
        {/* Left & Right Gradient Vignettes */}
        <div className="absolute left-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-r from-[#07080c] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-l from-[#07080c] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 w-max animate-marquee cursor-default">
          {marquee1.map((trade, idx) => (
            <div
              key={idx}
              className="px-6 py-5 rounded-2xl bg-[#0c0e17]/90 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shrink-0 shadow-xl group min-w-[280px] sm:min-w-[320px] backdrop-blur-md"
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 block mb-1">
                  {trade.category}
                </span>
                <span className="font-heading uppercase text-lg sm:text-xl text-[#fffdf9] font-medium tracking-wide block">
                  {trade.name}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/[0.06] text-xs font-sans">
                <span className="text-gray-400">Typical Value:</span>
                <span className="text-blue-300 font-mono font-medium">{trade.avgTicket}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kinetic Infinite Ribbon 2 (Right Scrolling) */}
      <div className="relative w-full overflow-hidden mb-12 sm:mb-16">
        {/* Left & Right Gradient Vignettes */}
        <div className="absolute left-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-r from-[#07080c] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-l from-[#07080c] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 w-max animate-marquee-reverse cursor-default">
          {marquee2.map((trade, idx) => (
            <div
              key={idx}
              className="px-6 py-5 rounded-2xl bg-[#0c0e17]/90 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shrink-0 shadow-xl group min-w-[280px] sm:min-w-[320px] backdrop-blur-md"
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 block mb-1">
                  {trade.category}
                </span>
                <span className="font-heading uppercase text-lg sm:text-xl text-[#fffdf9] font-medium tracking-wide block">
                  {trade.name}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/[0.06] text-xs font-sans">
                <span className="text-gray-400">Typical Value:</span>
                <span className="text-blue-300 font-mono font-medium">{trade.avgTicket}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Territory Exclusivity Banner */}
      {onOpenQuiz && (
        <div className="max-w-2xl mx-auto px-6 text-center">
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
          >
            <span>{t.companiesCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </section>
  );
};
