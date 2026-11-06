import React from 'react';
import { 
  Megaphone, 
  Bot, 
  Users, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
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
  const items = [
    {
      icon: Megaphone,
      title: "Ads That Bring Homeowners",
      desc: "We run ads on Facebook, Instagram, local radio, and news so homeowners call you first."
    },
    {
      icon: Users,
      title: "Recruitments",
      desc: "We help you find and hire skilled installers so you have the crew to do the work."
    },
    {
      icon: Bot,
      title: "Instant 2-Minute Estimator",
      desc: "Homeowners get a price estimate on your website in 2 minutes instead of waiting 2 days."
    },
    {
      icon: Workflow,
      title: "Automatic Reminders",
      desc: "Automatic texts and emails make sure homeowners remember your appointment."
    },
    {
      icon: TrendingUp,
      title: "Weekly Updates",
      desc: "A dedicated team manager checks in with you every week to keep jobs flowing."
    },
    {
      icon: ShieldCheck,
      title: "City Territory Lock",
      desc: "Only one attic insulation company per city. We never work with your competitors."
    }
  ];

  return (
    <section 
      id="growth-system-details" 
      className="relative py-16 sm:py-24 bg-[#07080c] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-wider text-[11px]">Included in Growth System</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl lg:text-[2.75rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-3 leading-tight">
            What You Get in the{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Growth System
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal leading-relaxed">
            Everything is done for you under one monthly package. Ad costs are included.
          </p>
        </div>

        {/* 6 Clean Streamlined Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0c0e17] border border-white/10 hover:border-blue-500/40 p-5 sm:p-6 transition-all duration-300 shadow-md flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-base text-[#fffdf9] tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onTalkToSpecialist || onOpenQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            <span>Ask About The Growth System</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
