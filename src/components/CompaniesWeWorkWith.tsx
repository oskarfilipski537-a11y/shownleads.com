import React from 'react';
import { ArrowRight, DollarSign, Lock } from 'lucide-react';
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
    "Ireland",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada"
  ];

  // Repeat for continuous seamless marquee streaming
  const marquee1 = [...tradesGroup1, ...tradesGroup1, ...tradesGroup1];
  const marquee2 = [...tradesGroup2, ...tradesGroup2, ...tradesGroup2];

  return (
    <section
      id="companies-we-work-with"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Ambient background illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(207, 217, 228, 0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-14 sm:mb-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
              {t.companiesTag}
            </span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-tight">
            {t.companiesTitle1}<span className="neon-silver-text">{t.companiesTitle2}</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/90 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            {t.companiesDesc}
          </p>

          {/* Qualified Geographic & Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-sans">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-[#121418] border border-[#262a34] text-[#cfd9e4]">
              <DollarSign className="w-3.5 h-3.5 text-[#2aff2a]" />
              <span className="font-medium">{t.companiesBadgeTicket}</span>
            </div>

            {countries.map((c, i) => (
              <div 
                key={i} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#0d0e12] border border-[#22252e] text-[#8e9aa8]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a]" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Kinetic Infinite Ribbon 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden mb-5 sm:mb-6">
        {/* Left & Right Gradient Vignettes */}
        <div className="absolute left-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 w-max animate-marquee cursor-default">
          {marquee1.map((trade, idx) => (
            <div
              key={idx}
              className="px-6 py-5 rounded-[14px] bg-[#0d0f14] border border-[#222633] hover:border-[#6f879c] transition-all duration-300 flex flex-col justify-between shrink-0 shadow-xl group min-w-[280px] sm:min-w-[320px]"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-sans text-[#6f879c] mb-3 pb-2.5 border-b border-[#1c202a]">
                <span className="uppercase tracking-wider text-[11px] font-medium">{trade.category}</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#2aff2a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] animate-pulse" />
                  QUALIFIED
                </span>
              </div>

              <div className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] tracking-[0.02em] group-hover:text-[#cfd9e4] transition-colors leading-tight mb-4">
                {trade.name}
              </div>

              <div className="pt-2 border-t border-[#1c202a] flex items-center justify-between text-xs font-sans">
                <span className="text-[#8e9aa8]">Avg Ticket:</span>
                <span className="text-[#2aff2a] font-mono font-medium">{trade.avgTicket}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kinetic Infinite Ribbon 2 (Reverse Right Scrolling) */}
      <div className="relative w-full overflow-hidden mb-16 sm:mb-20">
        <div className="absolute left-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 sm:w-56 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 w-max animate-marquee-reverse cursor-default">
          {marquee2.map((trade, idx) => (
            <div
              key={idx}
              className="px-6 py-5 rounded-[14px] bg-[#0d0f14] border border-[#222633] hover:border-[#6f879c] transition-all duration-300 flex flex-col justify-between shrink-0 shadow-xl group min-w-[280px] sm:min-w-[320px]"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-sans text-[#6f879c] mb-3 pb-2.5 border-b border-[#1c202a]">
                <span className="uppercase tracking-wider text-[11px] font-medium">{trade.category}</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#cfd9e4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cfd9e4]" />
                  QUALIFIED
                </span>
              </div>

              <div className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] tracking-[0.02em] group-hover:text-[#cfd9e4] transition-colors leading-tight mb-4">
                {trade.name}
              </div>

              <div className="pt-2 border-t border-[#1c202a] flex items-center justify-between text-xs font-sans">
                <span className="text-[#8e9aa8]">Avg Ticket:</span>
                <span className="text-[#cfd9e4] font-mono font-medium">{trade.avgTicket}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Territory Lock Callout & Action Anchor (No static columns) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs text-[#8e9aa8] font-sans">
            <Lock className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span>{t.companiesBadgeLock}</span>
          </div>

          {onOpenQuiz && (
            <div>
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#101010] bg-[#fffdf9] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] rounded-[6px] transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,253,249,0.15)]"
              >
                <span>{t.companiesCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
