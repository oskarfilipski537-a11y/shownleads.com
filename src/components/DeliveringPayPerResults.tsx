import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
      className="relative py-24 sm:py-32 bg-[#07080c] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="space-y-12 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="uppercase tracking-widest text-[11px]">{t.deliveringTag}</span>
            </div>

            <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] leading-[1.05]">
              {t.deliveringTitle1}
              <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case ml-2">
                Pay Per Estimate
              </span>
            </h2>
          </div>

          {/* Two-Column Grid: Large Image on the Left, Pure Unboxed Copywriting on the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side: Substantially Larger Image */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0c0e17] shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
                <img
                  src={contractorsImg}
                  alt="ShownLeads Delivering Pay Per Estimate"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[540px] lg:h-[600px] object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c]/90 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Side: Copywriting without Column Boxes */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6">
              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#fffdf9]/90 leading-[1.7] font-normal">
                {t.deliveringP1}
              </p>

              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#fffdf9]/90 leading-[1.7] font-normal">
                {t.deliveringP2}
              </p>

              {/* Crisp value highlights */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#fffdf9]/85 font-sans">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong className="text-white">{t.deliveringPoint1Title}</strong> {t.deliveringPoint1Desc}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong className="text-white">{t.deliveringPoint2Title}</strong> {t.deliveringPoint2Desc}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong className="text-white">{t.deliveringPoint3Title}</strong> {t.deliveringPoint3Desc}</span>
                </div>
              </div>

              {/* Action row */}
              {onOpenQuiz && (
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenQuiz}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
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
