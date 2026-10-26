import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComparisonTable: React.FC = () => {
  const { t } = useLanguage();
  const rows = t.compareRows;

  return (
    <section
      id="why-us"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Ambient background lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(207, 217, 228, 0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
              {t.compareTag}
            </span>
          </div>
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            {t.compareTitle1}<span className="neon-silver-text">{t.compareTitle2}</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed">
            {t.compareSubhead}
          </p>
        </div>

        {/* Master Comparison Board (Desktop) */}
        <div className="hidden lg:block max-w-5xl mx-auto rounded-[16px] overflow-hidden bg-[#0d0e11] border border-[#26282f] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#121317] border-b border-[#26282f] items-stretch text-xs uppercase tracking-[0.08em] font-sans">
            <div className="col-span-4 py-5 px-8 text-[#6f879c] flex items-center font-medium">
              {t.compareColCriteria}
            </div>

            {/* ShownLeads Column Header - Elevated with subtle glow */}
            <div className="col-span-4 py-5 px-8 bg-[#171920] border-x border-[#2d303a] text-[#fffdf9] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2aff2a] animate-pulse" />
                <span className="font-heading uppercase tracking-[0.06em] text-base text-[#fffdf9]">
                  {t.compareColShownLeads}
                </span>
              </div>
              <span className="text-[10px] text-[#2aff2a] font-mono tracking-wider">
                {t.compareColShownLeadsBadge}
              </span>
            </div>

            {/* Traditional Column Header */}
            <div className="col-span-4 py-5 px-8 text-[#6f879c] flex items-center justify-between">
              <span className="font-heading uppercase tracking-[0.06em] text-base text-[#6f879c]">
                {t.compareColOthers}
              </span>
              <span className="text-[10px] text-[#6f879c]/80 font-mono tracking-wider">
                {t.compareColOthersBadge}
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#1e2026]">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 items-stretch hover:bg-[#14151a] transition-colors duration-200 group"
              >
                {/* Feature Name */}
                <div className="col-span-4 py-5 px-8 flex items-center">
                  <span className="font-sans font-medium text-sm sm:text-[15px] text-[#fffdf9] leading-snug">
                    {row.feature}
                  </span>
                </div>

                {/* ShownLeads Column - Highlighted & Elevated */}
                <div className="col-span-4 py-5 px-8 bg-[#171920]/80 border-x border-[#2d303a] group-hover:bg-[#1a1c24] transition-colors flex items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2aff2a]/10 border border-[#2aff2a]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#2aff2a] stroke-[2.5]" />
                    </div>
                    <span className="font-sans text-sm sm:text-[14.5px] text-[#fffdf9] font-normal leading-relaxed">
                      {row.shownLeads}
                    </span>
                  </div>
                </div>

                {/* Traditional Agency Column - Muted */}
                <div className="col-span-4 py-5 px-8 flex items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/25 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-[#ff6666] stroke-[2]" />
                    </div>
                    <span className="font-sans text-sm sm:text-[14px] text-[#8e9aa8] font-normal leading-relaxed">
                      {row.others}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary */}
          <div className="py-4 px-8 bg-[#101115] border-t border-[#26282f] flex items-center justify-between text-xs text-[#6f879c] font-sans">
            <span className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#cfd9e4]" />
              <span>Zero retainers. Zero shared leads. You only pay when a vetted homeowner sits.</span>
            </span>
            <span className="text-[#cfd9e4] font-medium hidden sm:inline">
              100% Risk-Reversed
            </span>
          </div>
        </div>

        {/* Mobile / Tablet Responsive Cards */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-[14px] bg-[#0d0e11] p-5 sm:p-6 border border-[#26282f] space-y-4 shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans font-medium pb-2 border-b border-[#22242a]">
                {row.feature}
              </div>

              {/* ShownLeads Block */}
              <div className="p-4 rounded-[10px] bg-[#171920] border border-[#2d303a]">
                <div className="flex items-center justify-between gap-2 text-xs font-sans mb-2">
                  <span className="font-heading uppercase tracking-[0.06em] text-sm text-[#fffdf9] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#2aff2a]" />
                    SHOWNLEADS
                  </span>
                  <span className="text-[10px] text-[#2aff2a] font-mono">PAY PER SIT</span>
                </div>
                <p className="font-sans text-sm text-[#fffdf9] leading-relaxed">
                  {row.shownLeads}
                </p>
              </div>

              {/* Traditional Agency Block */}
              <div className="p-4 rounded-[10px] bg-[#121316] border border-[#22242a]">
                <div className="flex items-center justify-between gap-2 text-xs font-sans mb-2">
                  <span className="font-heading uppercase tracking-[0.06em] text-sm text-[#6f879c] flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-[#ff6666]" />
                    TRADITIONAL
                  </span>
                  <span className="text-[10px] text-[#6f879c] font-mono">RETAINER</span>
                </div>
                <p className="font-sans text-sm text-[#8e9aa8] leading-relaxed">
                  {row.others}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
