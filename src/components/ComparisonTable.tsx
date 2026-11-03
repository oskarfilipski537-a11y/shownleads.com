import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComparisonTable: React.FC = () => {
  const { t } = useLanguage();
  const rows = t.compareRows;

  return (
    <section
      id="why-us"
      className="relative py-28 sm:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Ambient background blue aurora lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header with Fundory Serif Italic Accent */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">{t.compareTag}</span>
          </div>
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            ShownLeads vs{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Traditional Agencies
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed">
            {t.compareSubhead}
          </p>
        </div>

        {/* Master Comparison Board (Desktop) */}
        <div className="hidden lg:block max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#0c0e17]/90 border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#0e111a] border-b border-white/[0.08] items-stretch text-xs uppercase tracking-[0.08em] font-sans">
            <div className="col-span-4 py-5 px-8 text-gray-400 flex items-center font-medium">
              {t.compareColCriteria}
            </div>

            {/* ShownLeads Column Header - Elevated with subtle blue glow */}
            <div className="col-span-4 py-5 px-8 bg-blue-950/40 border-x border-blue-500/30 text-[#fffdf9] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="font-heading uppercase tracking-[0.06em] text-base text-[#fffdf9]">
                  {t.compareColShownLeads}
                </span>
              </div>
              <span className="text-[10px] text-blue-400 font-mono tracking-wider font-semibold">
                {t.compareColShownLeadsBadge}
              </span>
            </div>

            {/* Traditional Column Header */}
            <div className="col-span-4 py-5 px-8 text-gray-400 flex items-center justify-between">
              <span className="font-heading uppercase tracking-[0.06em] text-base text-gray-400">
                {t.compareColOthers}
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                {t.compareColOthersBadge}
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/[0.06]">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 items-stretch hover:bg-white/[0.02] transition-colors duration-200 group"
              >
                {/* Feature Name */}
                <div className="col-span-4 py-5 px-8 flex items-center">
                  <span className="font-sans font-medium text-sm sm:text-[15px] text-[#fffdf9] leading-snug">
                    {row.feature}
                  </span>
                </div>

                {/* ShownLeads Column - Highlighted & Elevated with Blue Tone */}
                <div className="col-span-4 py-5 px-8 bg-blue-950/20 border-x border-blue-500/30 group-hover:bg-blue-950/30 transition-colors flex items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400 stroke-[2.5]" />
                    </div>
                    <span className="font-sans text-sm sm:text-[14.5px] text-[#fffdf9] font-normal leading-relaxed">
                      {row.shownLeads}
                    </span>
                  </div>
                </div>

                {/* Traditional Agency Column - Muted */}
                <div className="col-span-4 py-5 px-8 flex items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400 stroke-[2]" />
                    </div>
                    <span className="font-sans text-sm sm:text-[14px] text-gray-400 font-normal leading-relaxed">
                      {row.others}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary */}
          <div className="py-4 px-8 bg-[#0a0c14] border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400 font-sans">
            <span className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero retainers. Zero shared leads. You only pay when a vetted homeowner sits.</span>
            </span>
            <span className="text-blue-300 font-medium hidden sm:inline">
              100% Risk-Reversed
            </span>
          </div>
        </div>

        {/* Mobile / Tablet Responsive Cards */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0c0e17] p-5 sm:p-6 border border-white/[0.08] space-y-4 shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.1em] text-gray-400 font-sans font-medium pb-2 border-b border-white/[0.06]">
                {row.feature}
              </div>

              {/* ShownLeads Block */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                <div className="flex items-center justify-between gap-2 text-xs font-sans mb-2">
                  <span className="font-heading uppercase tracking-[0.06em] text-sm text-[#fffdf9] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                    SHOWNLEADS
                  </span>
                  <span className="text-[10px] text-blue-400 font-mono font-semibold">PAY PER SIT</span>
                </div>
                <p className="font-sans text-sm text-[#fffdf9] leading-relaxed">
                  {row.shownLeads}
                </p>
              </div>

              {/* Traditional Agency Block */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 text-xs font-sans mb-2">
                  <span className="font-heading uppercase tracking-[0.06em] text-sm text-gray-400 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                    TRADITIONAL
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">RETAINER</span>
                </div>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
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
