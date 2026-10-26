import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface CaseStudiesCalloutProps {
  onNavigateToCaseStudies: () => void;
}

export const CaseStudiesCallout: React.FC<CaseStudiesCalloutProps> = ({ 
  onNavigateToCaseStudies 
}) => {
  return (
    <section className="relative py-14 sm:py-18 bg-[#000000] border-t border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-[14px] bg-[#14161a] border border-[#2e3238] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2aff2a]/30 text-[11px] uppercase tracking-[0.12em] text-[#2aff2a] font-sans">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Client Revenue Breakdowns</span>
            </div>

            <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal leading-snug">
              Looking for <span className="neon-silver-text">Client Case Studies</span> &amp; Breakdown Numbers?
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              Explore how Cashel Home Improvement scaled to $3,000 invoices twice a week and Beauty.no8 scaled to 15 active students with $0 in monthly retainers.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#6f879c] font-sans">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#2aff2a]" />
                15x Student Intake
              </span>
              <span className="text-[#3a3d45]">•</span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#2aff2a]" />
                $3k Invoices 2x / Week
              </span>
              <span className="text-[#3a3d45]">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2aff2a]" />
                100% Verified CRM Invoices
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onNavigateToCaseStudies}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
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
