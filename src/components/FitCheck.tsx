import React from 'react';
import { Check, X, ArrowUpRight, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FitCheckProps {
  onOpenQuiz?: () => void;
}

export const FitCheck: React.FC<FitCheckProps> = ({ onOpenQuiz }) => {
  const { t } = useLanguage();

  const isForYouList = t.fitCheckForYouList;
  const isNotForYouList = t.fitCheckNotForYouList;

  return (
    <section
      id="fit-check"
      className="relative py-28 sm:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Block with Fundory Serif Italic Accent */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">{t.fitCheckTag}</span>
          </div>
          
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            Built for a Specific{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Caliber of Partner
            </span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed">
            {t.fitCheckSubtitle}
          </p>
        </div>

        {/* 2-Column High-Contrast Qualification Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: WHO THIS IS FOR (The Qualified Partner) */}
          <div className="rounded-3xl bg-[#0c0e17]/90 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group backdrop-blur-md">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-base uppercase tracking-[0.06em] text-[#fffdf9] font-heading block">
                      {t.fitCheckForYouHeader}
                    </span>
                    <span className="text-xs text-blue-300/80 font-sans">
                      {t.fitCheckForYouBadge}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 font-semibold">
                  {t.fitCheckForYouBadge}
                </span>
              </div>

              {/* Criteria List */}
              <div className="space-y-3.5">
                {isForYouList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 hover:border-blue-400/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="font-sans font-medium text-sm sm:text-[14.5px] text-[#fffdf9] leading-snug">
                        {item.title}
                      </div>
                      <div className="font-sans text-xs text-gray-300 leading-relaxed mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400 font-sans">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase tracking-[0.08em] font-medium text-[#fffdf9]">Exclusive Territory</span>
              </span>
              <span className="text-blue-300 font-mono font-medium">1 Partner Per Niche / City</span>
            </div>
          </div>

          {/* Card 2: WHO THIS IS NOT FOR (Incompatible Operations) */}
          <div className="rounded-3xl bg-[#0c0e17]/80 border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative backdrop-blur-md">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-base uppercase tracking-[0.06em] text-gray-300 font-heading block">
                      {t.fitCheckNotForYouHeader}
                    </span>
                    <span className="text-xs text-gray-500 font-sans">
                      {t.fitCheckNotForYouBadge}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 font-semibold">
                  {t.fitCheckNotForYouBadge}
                </span>
              </div>

              {/* Criteria List */}
              <div className="space-y-3.5">
                {isNotForYouList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="font-sans font-medium text-sm sm:text-[14.5px] text-gray-300 leading-snug">
                        {item.title}
                      </div>
                      <div className="font-sans text-xs text-gray-500 leading-relaxed mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-500 font-sans">
              <span className="uppercase tracking-[0.08em] font-medium text-gray-400">Strict Quality Filters</span>
              <span className="font-mono text-gray-500">Applications Screened Daily</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        {onOpenQuiz && (
          <div className="text-center">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
            >
              <span>{t.fitCheckCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
