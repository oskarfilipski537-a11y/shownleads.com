import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface PricingPlansProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ 
  onOpenQuiz, 
  onTalkToSpecialist 
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'performance'>('monthly');

  return (
    <section 
      id="pricing-plans" 
      className="relative py-28 sm:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Framer Luminous Blue Radial Aura */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none aurora-hero-glow -z-0 opacity-80" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header with Framer Serif Italic Accent */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">Investment &amp; Engagement Models</span>
          </div>

          <h2 className="font-heading uppercase text-4xl sm:text-6xl lg:text-[4rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            Pricing{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Plans
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed">
            Choose between pay-per-sit appointments or our all-inclusive comprehensive market leader growth partnership.
          </p>
        </div>

        {/* The 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Option 1 - Qualified Shown Appointment */}
          <div className="rounded-3xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-white/20 p-8 sm:p-9 flex flex-col justify-between backdrop-blur-md transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">
                  Starter / Option 1
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-gray-300 border border-white/[0.08]">
                  Pay-Per-Sit
                </span>
              </div>

              <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] tracking-wide mb-2">
                Qualified Shown Appointment
              </h3>

              <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
                Direct pay-per-appointment model for contractors who only want pre-vetted homeowner sits without broader scaling infrastructure.
              </p>

              {/* Price Display */}
              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9]">$97</span>
                  <span className="font-sans text-xs text-gray-400 uppercase tracking-wider">/ Shown Appointment</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 mt-2">
                  • Ad spend funded separately by contractor<br />
                  • Standard replacement credits if homeowner fails to attend
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  "Single-family homeowner verification",
                  "Confirmed project scope and intent",
                  "Automated calendar booking into your route",
                  "SMS & email attendance reminders",
                  "Show-up guarantee (no charge on verified no-show)",
                  "No long-term retainer commitment"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuiz}
              className="w-full py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 (Center - Highlighted): The Market Leader Growth System ($8,150/mo) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0f172a] via-[#0b1021] to-[#070a14] border-2 border-[#2563eb] p-8 sm:p-9 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_60px_rgba(37,99,235,0.35)] lg:-translate-y-4 transition-all duration-300">
            {/* "MOST POPULAR" Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2563eb] text-white text-[11px] uppercase font-sans font-bold tracking-widest shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOST POPULAR • FULL PARTNERSHIP</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="text-xs font-sans uppercase tracking-widest text-blue-400 font-semibold">
                  Comprehensive Growth Partnership
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Ad Spend Included
                </span>
              </div>

              <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] tracking-wide mb-2">
                The Market Leader Growth System
              </h3>

              <p className="font-sans text-xs text-blue-200/80 mb-6 leading-relaxed">
                Our flagship all-inclusive growth partnership: customer acquisition, recruitment funnels, proprietary AI estimator tool, and scalable CRM infrastructure.
              </p>

              {/* Price Display */}
              <div className="mb-6 pb-6 border-b border-white/[0.12]">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9]">$8,150</span>
                  <span className="font-sans text-xs text-blue-300 uppercase tracking-wider">/ Month</span>
                </div>
                
                {/* 2-Stage Payment Structure */}
                <div className="mt-3 p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-left">
                  <div className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-1">
                    Two-Stage Split Implementation:
                  </div>
                  <div className="text-[11px] font-sans text-gray-300 space-y-1">
                    <div>• <strong>50% upfront: $4,075</strong> to begin onboarding, planning, and infrastructure development.</div>
                    <div>• <strong>50%: $4,075</strong> when campaigns are live and agreed infrastructure has been built.</div>
                    <div className="text-[10px] text-blue-300/90 font-mono mt-1 pt-1 border-t border-blue-500/20">
                      Zero setup fee. Advertising spend is included.
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  "Advertising spend INCLUDED in package price",
                  "Multi-channel ads: Meta (FB & IG), local media & news",
                  "Recruitment & Workforce Expansion: Installer hiring funnels",
                  "Candidate pre-screening forms & applicant pipeline",
                  "Proprietary AI Estimator Tool: 2-minute instant homeowner quote",
                  "Full CRM, pipeline tracking & multi-touch SMS automation",
                  "Dedicated senior account strategist & weekly performance reviews",
                  "Strict 1-contractor territory lock per city"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className={idx < 5 ? "font-medium text-white" : ""}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onTalkToSpecialist || onOpenQuiz}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>APPLY FOR MARKET LEADER PARTNERSHIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Option 2 - Price-Educated Shown Appointment */}
          <div className="rounded-3xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-white/20 p-8 sm:p-9 flex flex-col justify-between backdrop-blur-md transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-gray-400 font-semibold">
                  Premium Sit / Option 2
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-gray-300 border border-white/[0.08]">
                  Price-Conditioned
                </span>
              </div>

              <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] tracking-wide mb-2">
                Price-Educated Shown Appointment
              </h3>

              <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
                Enhanced pay-per-sit model with deep US call-center pre-conditioning to ensure homeowners understand investment levels before you drive out.
              </p>

              {/* Price Display */}
              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl sm:text-5xl text-[#fffdf9]">$197</span>
                  <span className="font-sans text-xs text-gray-400 uppercase tracking-wider">/ Shown Appointment</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 mt-2">
                  • + $197 one-time onboarding and qualification setup fee<br />
                  • Ad spend funded separately by contractor
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  "Dedicated US call setter phone screening",
                  "Homeowners educated on insulation budget ranges",
                  "Vetted for homeowner presence & decision-maker attendance",
                  "Direct calendar dispatch to estimator route",
                  "Replacement credits if homeowner fails to attend",
                  "Audio recording of screening call provided"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuiz}
              className="w-full py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footnote on Scope & Differences */}
        <div className="max-w-3xl mx-auto mt-12 text-center text-xs text-gray-400 font-sans leading-relaxed">
          <p>
            *The lower-priced $97 and $197 options provide qualified homeowner appointments on a pay-per-shown-appointment basis. The Market Leader Growth System ($8,150/mo) is a comprehensive growth partnership combining customer acquisition (ad spend included), workforce recruitment funnels, proprietary AI estimator integration, and enterprise CRM infrastructure.
          </p>
        </div>

      </div>
    </section>
  );
};
