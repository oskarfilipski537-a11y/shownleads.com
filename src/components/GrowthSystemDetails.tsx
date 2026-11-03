import React from 'react';
import { 
  Megaphone, 
  Bot, 
  Users, 
  Workflow, 
  TrendingUp, 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface GrowthSystemDetailsProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const GrowthSystemDetails: React.FC<GrowthSystemDetailsProps> = ({ 
  onOpenQuiz, 
  onTalkToSpecialist 
}) => {
  const capabilities = [
    {
      icon: Megaphone,
      title: "Multi-Channel Customer Acquisition",
      badge: "Ad Spend Included",
      description: "Coordinated marketing to attract high-intent attic insulation homeowners across Meta (Facebook & Instagram), local media/radio opportunities, and search/AI-search visibility initiatives. Complete direct-response messaging, ad creatives, and high-converting territory funnels.",
      features: [
        "Meta Ads (Facebook & Instagram) fully managed",
        "Direct-response copywriting & creative asset production",
        "Local radio & news media features where appropriate",
        "All paid advertising costs included in monthly package"
      ]
    },
    {
      icon: Bot,
      title: "Proprietary AI Estimator Tool Access",
      badge: "Instant 2-Min Bids",
      description: "Provide homeowners with a complete, customized attic insulation estimate in approximately two minutes instead of making them wait two days. Vetting criteria are built directly into the estimating flow to capture validated homeowner contact info.",
      features: [
        "Embedded into your custom landing pages & funnels",
        "Pre-qualifies attic square footage & existing insulation type",
        "Captures verified phone numbers with SMS authorization",
        "Dramatically increases conversion from cold traffic"
      ]
    },
    {
      icon: Users,
      title: "Recruitment & Crew Hiring System",
      badge: "Key Differentiator",
      description: "Overcome the installer bottleneck. We design and manage dedicated recruitment funnels, candidate screening forms, and targeted hiring ads to bring you experienced attic insulation installers, crew leads, and production staff.",
      features: [
        "Targeted installer & crew lead recruitment funnels",
        "Multi-step application questionnaires vetting experience",
        "Organized applicant pipeline dashboard for rapid hiring",
        "Strategic crew compensation & retention playbooks"
      ]
    },
    {
      icon: Workflow,
      title: "Enterprise CRM & Pipeline Infrastructure",
      badge: "Full Automation",
      description: "A centralized CRM tailored to attic insulation sales operations. Automated appointment booking, 2-way SMS/email follow-up sequences, instant lead notifications, and pipeline tracking from initial click to paid invoice.",
      features: [
        "Direct calendar synchronization for sales reps & estimators",
        "Automated 60-day multi-channel nurture sequences",
        "Real-time dispatch alerts to mobile & desktop",
        "Comprehensive staff training on the platform"
      ]
    },
    {
      icon: TrendingUp,
      title: "Ongoing Strategic Growth Partnership",
      badge: "Weekly Strategy",
      description: "We don't set it and forget it. You get regular strategic reviews to optimize appointment quality, close rates, and hiring progress, coupled with market-level intelligence and seasonal campaign adjustments.",
      features: [
        "Dedicated senior growth strategist and account manager",
        "Continuous creative refreshes for seasonal spikes",
        "Competitor analysis & local territory market intelligence",
        "Priority communication channel for rapid execution"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Strict Single-Contractor Territory Lock",
      badge: "100% Exclusive",
      description: "We only partner with one attic insulation contractor per market. Once your city or service radius is secured, all local competitors are locked out. We never sell shared leads or run competing campaigns.",
      features: [
        "Zero shared leads—all customer data belongs to you",
        "100% contractor ownership of ad accounts and funnels",
        "Full protection against local competitors in your niche",
        "Strict market exclusivity backed by agreement"
      ]
    }
  ];

  return (
    <section 
      id="growth-system-details" 
      className="relative py-24 sm:py-32 bg-[#07080c] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">The Complete Architecture</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-tight">
            What the Market Leader{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Growth System
            </span>{' '}
            Includes
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal leading-relaxed">
            Most marketing companies focus on getting you leads. We focus on helping you <strong>build a bigger, more valuable business</strong>. Everything is included under one managed monthly partnership.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:shadow-[0_10px_35px_rgba(37,99,235,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-blue-300 font-medium">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="font-heading uppercase text-xl text-[#fffdf9] tracking-wide mb-3">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {cap.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner matching Fundory screenshot: "Ready to scale? Get your Custom Marketing Roadmap" */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#0d1428] via-[#090d1a] to-[#0d1428] border border-blue-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-4">
            Ready to{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              scale
            </span>
            ? Get Your Custom{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Market Leader Roadmap
            </span>
          </h3>

          <p className="font-sans text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            $8,150/month with advertising costs included. 50% ($4,075) upfront, 50% ($4,075) upon launch &amp; infrastructure build. Zero setup fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 transition-all cursor-pointer shadow-lg"
            >
              Check Territory Qualification
            </button>
            <button
              onClick={onTalkToSpecialist || onOpenQuiz}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:scale-105 transition-all cursor-pointer shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              Book Strategy Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
