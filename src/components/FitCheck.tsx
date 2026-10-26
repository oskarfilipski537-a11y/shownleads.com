import React from 'react';
import { Check, X, ArrowRight, ShieldCheck, Lock, AlertCircle } from 'lucide-react';
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
      className="relative py-28 sm:py-36 lg:py-44 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(207, 217, 228, 0.09) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(42, 255, 42, 0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
              {t.fitCheckTag}
            </span>
          </div>
          
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            {t.fitCheckTitle1}<span className="neon-silver-text">{t.fitCheckTitle2}</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed">
            {t.fitCheckSubtitle}
          </p>
        </div>

        {/* 2-Column High-Contrast Qualification Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: WHO THIS IS FOR (The Qualified Partner) */}
          <div className="rounded-[16px] bg-[#0d0f13] border border-[#262a34] hover:border-[#6f879c] transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#222631]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[8px] bg-[#141820] border border-[#2e3442] flex items-center justify-center text-[#2aff2a] shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-base uppercase tracking-[0.06em] text-[#fffdf9] font-heading block">
                      {t.fitCheckForYouHeader}
                    </span>
                    <span className="text-xs text-[#6f879c] font-sans">
                      {t.fitCheckForYouBadge}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-[4px] bg-[#2aff2a]/10 text-[#2aff2a] border border-[#2aff2a]/30">
                  {t.fitCheckForYouBadge}
                </span>
              </div>

              {/* Criteria List */}
              <div className="space-y-4">
                {isForYouList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-[8px] bg-[#13161c] border border-[#222631] hover:border-[#353b49] transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#2aff2a]/15 text-[#2aff2a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="font-sans font-medium text-sm sm:text-[14.5px] text-[#fffdf9] leading-snug">
                        {item.title}
                      </div>
                      <div className="font-sans text-xs text-[#8e9aa8] leading-relaxed mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="mt-8 pt-6 border-t border-[#222631] flex items-center justify-between text-xs text-[#6f879c] font-sans">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#2aff2a]" />
                <span className="uppercase tracking-[0.08em] font-medium text-[#fffdf9]">Exclusive Territory</span>
              </span>
              <span className="text-[#2aff2a] font-mono">1 Partner Per Niche / City</span>
            </div>
          </div>

          {/* Card 2: WHO THIS IS NOT FOR (Incompatible Operations) */}
          <div className="rounded-[16px] bg-[#0d0d10] border border-[#282121] hover:border-[#3a2828] transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#241c1c]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[8px] bg-[#171212] border border-[#332222] flex items-center justify-center text-[#ff6666] shrink-0">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-base uppercase tracking-[0.06em] text-[#8e9aa8] font-heading block">
                      {t.fitCheckNotForYouHeader}
                    </span>
                    <span className="text-xs text-[#6f879c] font-sans">
                      {t.fitCheckNotForYouBadge}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-[4px] bg-[#ff4d4d]/10 text-[#ff6666] border border-[#ff4d4d]/30">
                  {t.fitCheckNotForYouBadge}
                </span>
              </div>

              {/* Criteria List */}
              <div className="space-y-4">
                {isNotForYouList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-[8px] bg-[#141212] border border-[#241c1c] flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ff4d4d]/15 text-[#ff6666] flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="font-sans font-medium text-sm sm:text-[14.5px] text-[#8e9aa8] leading-snug">
                        {item.title}
                      </div>
                      <div className="font-sans text-xs text-[#6f879c] leading-relaxed mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="mt-8 pt-6 border-t border-[#241c1c] flex items-center justify-between text-xs text-[#6f879c] font-sans">
              <span className="flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#ff6666]" />
                <span className="uppercase tracking-[0.08em] font-medium text-[#8e9aa8]">Conflict Policy</span>
              </span>
              <span className="text-[#ff6666] font-mono">Zero Competitor Overlap</span>
            </div>
          </div>

        </div>

        {/* Clean Bottom Action Bar */}
        {onOpenQuiz && (
          <div className="text-center">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#101010] bg-[#fffdf9] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] rounded-[6px] transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,253,249,0.15)]"
            >
              <span>{t.fitCheckCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
