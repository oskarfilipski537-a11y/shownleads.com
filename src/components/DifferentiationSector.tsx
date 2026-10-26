import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DifferentiationSectorProps {
  onOpenQuiz?: () => void;
}

export const DifferentiationSector: React.FC<DifferentiationSectorProps> = ({ onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <section
      id="differentiation"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#000000] overflow-hidden border-y border-[#1a1a1a]"
    >
      {/* Subtle ambient lighting on dark canvas */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(207, 217, 228, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(111, 135, 156, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
            <span>{t.diffTag1}</span>
            <span aria-hidden="true">·</span>
            <span>{t.diffTag2}</span>
            <span aria-hidden="true">·</span>
            <span>{t.diffTag3}</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] leading-[1.05]">
            {t.diffTitle1}
            <span className="neon-silver-text">{t.diffTitle2}</span>
          </h2>

          <p className="font-sans text-[15px] sm:text-[17px] text-[#fffdf9]/85 font-normal max-w-2xl mx-auto leading-relaxed mt-5">
            {t.diffSubhead}
          </p>
        </div>

        {/* 3 Pure Floating Columns (Zero Background Boxes / Column Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
          
          {/* Column 01: Qualified Estimates */}
          <div className="flex flex-col space-y-4">
            <span className="font-heading text-3xl sm:text-4xl text-[#6f879c]/70 select-none">
              {t.diffCol1Num}
            </span>
            
            <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight">
              {t.diffCol1Title}
            </h3>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#fffdf9]/85 font-normal leading-[1.7]">
              {t.diffCol1Desc}
            </p>

            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#fffdf9]/80 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol1Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol1Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol1Pt3}</span>
              </div>
            </div>
          </div>

          {/* Column 02: 100% Exclusivity */}
          <div className="flex flex-col space-y-4">
            <span className="font-heading text-3xl sm:text-4xl text-[#6f879c]/70 select-none">
              {t.diffCol2Num}
            </span>
            
            <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight">
              {t.diffCol2Title}
            </h3>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#fffdf9]/85 font-normal leading-[1.7]">
              {t.diffCol2Desc}
            </p>

            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#fffdf9]/80 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol2Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol2Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol2Pt3}</span>
              </div>
            </div>
          </div>

          {/* Column 03: Proven Ads & Funnels */}
          <div className="flex flex-col space-y-4">
            <span className="font-heading text-3xl sm:text-4xl text-[#6f879c]/70 select-none">
              {t.diffCol3Num}
            </span>
            
            <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight">
              {t.diffCol3Title}
            </h3>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#fffdf9]/85 font-normal leading-[1.7]">
              {t.diffCol3Desc}
            </p>

            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#fffdf9]/80 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol3Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol3Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                <span>{t.diffCol3Pt3}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Floating CTA */}
        {onOpenQuiz && (
          <div className="mt-16 sm:mt-20 text-center">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span>{t.diffCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
