import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import contractorsImg from '../assets/images/contractors_vans_crew_1791762519900.jpg';
import { useLanguage } from '../context/LanguageContext';

interface DeliveringPayPerResultsProps {
  onOpenQuiz?: () => void;
}

export const DeliveringPayPerResults: React.FC<DeliveringPayPerResultsProps> = ({ onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <section
      id="delivering-pay-per-results"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#000000] overflow-hidden border-y border-[#1a1a1a]"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(42, 255, 42, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[450px] h-[450px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(42, 127, 255, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="space-y-10 lg:space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] leading-[1.05]">
              {t.deliveringTitle1}<span className="neon-silver-text">{t.deliveringTitle2}</span>
            </h2>
          </div>

          {/* Two-Column Grid: Large Image on the Left, Pure Unboxed Copywriting on the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side: Substantially Larger Image */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative rounded-[16px] overflow-hidden border border-[#403f3f] bg-[#141414] shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
                <img
                  src={contractorsImg}
                  alt="ShownLeads Delivering Pay Per Estimate"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[540px] lg:h-[620px] object-cover object-center filter brightness-[0.94] contrast-[1.05]"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e10]/90 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Side: Copywriting without Column Boxes */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5">
              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#fffdf9]/90 leading-[1.65] font-normal">
                {t.deliveringP1}
              </p>

              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#fffdf9]/90 leading-[1.65] font-normal">
                {t.deliveringP2}
              </p>

              {/* Crisp value highlights */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#fffdf9]/80 font-sans">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                  <span><strong>{t.deliveringPoint1Title}</strong> {t.deliveringPoint1Desc}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                  <span><strong>{t.deliveringPoint2Title}</strong> {t.deliveringPoint2Desc}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] shrink-0" />
                  <span><strong>{t.deliveringPoint3Title}</strong> {t.deliveringPoint3Desc}</span>
                </div>
              </div>

              {/* Action row */}
              {onOpenQuiz && (
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenQuiz}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <span>{t.deliveringCta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
