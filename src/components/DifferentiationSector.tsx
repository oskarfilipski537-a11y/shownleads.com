import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DifferentiationSectorProps {
  onOpenQuiz?: () => void;
}

export const DifferentiationSector: React.FC<DifferentiationSectorProps> = ({ onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <section
      id="differentiation"
      className="relative py-24 sm:py-32 bg-[#07080c] overflow-hidden"
    >
      {/* Subtle ambient lighting on dark canvas */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">The ShownLeads Advantage</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] leading-[1.05]">
            What Makes ShownLeads{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Different
            </span>{' '}
            to Pay-Per-Lead Companies
          </h2>

          <p className="font-sans text-[15px] sm:text-[17px] text-[#fffdf9]/85 font-normal max-w-2xl mx-auto leading-relaxed mt-5">
            {t.diffSubhead}
          </p>
        </div>

        {/* 3 Pure Floating Columns matching Fundory step aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          
          {/* Column 01: Qualified Estimates */}
          <div className="rounded-3xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-sm">
            <div>
              <span className="font-heading text-4xl text-blue-400/80 font-mono select-none block mb-4">
                01
              </span>
              
              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight mb-3">
                {t.diffCol1Title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal leading-relaxed mb-6">
                {t.diffCol1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-2.5 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol1Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol1Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol1Pt3}</span>
              </div>
            </div>
          </div>

          {/* Column 02: 100% Exclusivity */}
          <div className="rounded-3xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-sm">
            <div>
              <span className="font-heading text-4xl text-blue-400/80 font-mono select-none block mb-4">
                02
              </span>
              
              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight mb-3">
                {t.diffCol2Title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal leading-relaxed mb-6">
                {t.diffCol2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-2.5 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol2Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol2Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol2Pt3}</span>
              </div>
            </div>
          </div>

          {/* Column 03: Proven Ads & Funnels */}
          <div className="rounded-3xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-blue-500/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-sm">
            <div>
              <span className="font-heading text-4xl text-blue-400/80 font-mono select-none block mb-4">
                03
              </span>
              
              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal tracking-[0.02em] leading-tight mb-3">
                {t.diffCol3Title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal leading-relaxed mb-6">
                {t.diffCol3Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-2.5 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol3Pt1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol3Pt2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{t.diffCol3Pt3}</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        {onOpenQuiz && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
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
