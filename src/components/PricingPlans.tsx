import React from 'react';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

interface PricingPlansProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ 
  onOpenQuiz, 
  onTalkToSpecialist 
}) => {
  return (
    <section 
      id="pricing-plans" 
      className="relative py-20 sm:py-28 lg:py-32 bg-[#07080c] overflow-hidden"
    >
      {/* Luminous Sapphire Radial Aura */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none aurora-hero-glow -z-0 opacity-70" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-wider text-[11px]">Simple Pricing</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-3 leading-tight">
            Pricing{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Plans
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#fffdf9]/75 font-normal max-w-md mx-auto leading-relaxed">
            Pay only for shown appointments, or get everything done for you in our growth system.
          </p>
        </div>

        {/* The 3 Pricing Cards Grid - Super Optimized for Mobile & Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Option 1 - $97 Qualified Shown Sit */}
          <div className="rounded-[22px] sm:rounded-3xl bg-[#0c0e17]/90 border border-white/10 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-sans uppercase tracking-wider text-gray-400 font-semibold">
                  Option 1
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-300 border border-white/10">
                  Pay-Per-Sit
                </span>
              </div>

              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] tracking-wide mb-1.5">
                Qualified Shown Appointment
              </h3>

              <p className="font-sans text-xs text-gray-400 mb-5 leading-relaxed">
                Pay only when a real homeowner shows up for an estimate.
              </p>

              {/* Price Display */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9] font-normal">$97</span>
                  <span className="font-sans text-xs text-gray-400 uppercase tracking-wider">/ Shown Sit</span>
                </div>
                <div className="text-[11px] text-gray-400 font-sans mt-1">
                  Pay $0 if the homeowner no-shows.
                </div>
              </div>

              {/* Simplified Feature List (8-year-old readable) */}
              <div className="space-y-2.5 mb-6">
                {[
                  "Real homeowners only",
                  "Ready for attic insulation work",
                  "Booked straight to your calendar",
                  "Text and email reminders sent",
                  "Pay $0 if they don't show up",
                  "No long-term contract"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuiz}
              className="w-full py-3 sm:py-3.5 rounded-full bg-white text-black font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all cursor-pointer shadow-md"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: The Market Leader Growth System ($8,150/mo) - Highlighted */}
          <div className="relative rounded-[22px] sm:rounded-3xl bg-gradient-to-b from-[#10172a] via-[#0b1021] to-[#070a14] border-2 border-blue-500 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-sans uppercase tracking-wider text-blue-400 font-semibold">
                  Growth System
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-medium">
                  All-In-One
                </span>
              </div>

              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] tracking-wide mb-1.5">
                The Market Leader Growth System
              </h3>

              <p className="font-sans text-xs text-blue-200/80 mb-5 leading-relaxed">
                Everything you need to grow your attic insulation business.
              </p>

              {/* Price Display */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9] font-normal">$8,150</span>
                  <span className="font-sans text-xs text-blue-300 uppercase tracking-wider">/ Month</span>
                </div>
                <div className="text-[11px] text-blue-300/90 font-sans mt-1">
                  Advertising costs are already included.
                </div>
              </div>

              {/* Simplified Feature List */}
              <div className="space-y-2.5 mb-6">
                {[
                  "Advertising through Meta, ChatGPT, local radio, and news articles.",
                  "Recruitments",
                  "Fast 2-minute online estimate tool",
                  "Automatic text and email follow-ups",
                  "Weekly updates with your team lead",
                  "Only 1 company per city (no competitors)"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className={idx < 2 ? "font-semibold text-white" : "text-gray-200"}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onTalkToSpecialist || onOpenQuiz}
              className="w-full py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>APPLY FOR GROWTH PARTNERSHIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Option 2 - $197 Price-Educated Shown Sit */}
          <div className="rounded-[22px] sm:rounded-3xl bg-[#0c0e17]/90 border border-white/10 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-sans uppercase tracking-wider text-gray-400 font-semibold">
                  Option 2
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-300 border border-white/10">
                  Price-Educated
                </span>
              </div>

              <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] tracking-wide mb-1.5">
                Price-Educated Shown Sit
              </h3>

              <p className="font-sans text-xs text-gray-400 mb-5 leading-relaxed">
                We call homeowners first and make sure they know your prices before you visit.
              </p>

              {/* Price Display */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9] font-normal">$197</span>
                  <span className="font-sans text-xs text-gray-400 uppercase tracking-wider">/ Shown Sit</span>
                </div>
                <div className="text-[11px] text-gray-400 font-sans mt-1">
                  Pay $0 if the homeowner no-shows.
                </div>
              </div>

              {/* Simplified Feature List (8-year-old readable) */}
              <div className="space-y-2.5 mb-6">
                {[
                  "We call every homeowner first",
                  "They know your prices before you visit",
                  "Both decision-makers must be home",
                  "Booked straight to your calendar",
                  "Pay $0 if they don't show up",
                  "Listen to the call recording"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuiz}
              className="w-full py-3 sm:py-3.5 rounded-full bg-white text-black font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all cursor-pointer shadow-md"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Clean, Simple Footnote */}
        <div className="max-w-xl mx-auto mt-8 sm:mt-10 text-center text-xs text-gray-400 font-sans">
          <p>
            You only pay when a real homeowner sits down with your team. Zero long-term contracts.
          </p>
        </div>

      </div>
    </section>
  );
};
