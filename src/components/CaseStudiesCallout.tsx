import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface CaseStudiesCalloutProps {
  onNavigateToCaseStudies: () => void;
}

export const CaseStudiesCallout: React.FC<CaseStudiesCalloutProps> = ({ 
  onNavigateToCaseStudies 
}) => {
  return (
    <section className="relative py-14 sm:py-18 bg-[#07080c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-[24px] bg-[#0c0e17] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.12)] backdrop-blur-xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.12em] text-blue-400 font-sans font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Client Revenue Breakdowns</span>
            </div>

            <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal leading-snug">
              Looking for <span className="neon-silver-text font-serif italic lowercase">client case studies</span> &amp; breakdown numbers?
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              Explore how attic insulation contractors scaled to predictable $3,000+ invoices and booked calendars with $0 in monthly retainers.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#6f879c] font-sans">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                15x Intake Rate
              </span>
              <span className="text-[#3a3d45]">•</span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                $3k+ Invoices Weekly
              </span>
              <span className="text-[#3a3d45]">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                100% Verified CRM Invoices
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onNavigateToCaseStudies}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
