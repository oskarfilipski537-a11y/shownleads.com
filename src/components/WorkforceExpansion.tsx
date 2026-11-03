import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  Filter, 
  Award, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface WorkforceExpansionProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const WorkforceExpansion: React.FC<WorkforceExpansionProps> = ({ 
  onOpenQuiz, 
  onTalkToSpecialist 
}) => {
  const pillars = [
    {
      icon: Filter,
      title: "Recruitment Acquisition Funnels",
      desc: "Custom-built recruitment funnels designed specifically to attract experienced attic insulation installers, crew leads, and production managers in your service radius.",
      badge: "Targeted Funnels"
    },
    {
      icon: Briefcase,
      title: "Direct-Response Hiring Campaigns",
      desc: "Proven ad creatives and messaging deployed across local channels to reach both active job seekers and gainfully employed installers looking for better pay and culture.",
      badge: "Paid Campaigns"
    },
    {
      icon: UserCheck,
      title: "Candidate Pre-Screening & Vetting",
      desc: "Rigorous application questionnaires filtering for valid driver's licenses, physical stamina, safety certifications, and attic/blown-in insulation experience.",
      badge: "Filtered Candidates"
    },
    {
      icon: TrendingUp,
      title: "Organized Candidate Pipeline",
      desc: "A centralized candidate dashboard so your management team can review applicant profiles, schedule interviews, and extend offers in minutes.",
      badge: "Fast Onboarding"
    },
    {
      icon: Award,
      title: "Crew Retention & Pay Benchmarks",
      desc: "Strategic guidance on piece-rate vs hourly comp structures, production bonuses, and retention systems to keep your top crews loyal.",
      badge: "Retention Strategy"
    }
  ];

  return (
    <section 
      id="workforce-system" 
      className="relative py-24 sm:py-32 bg-[#07080c] overflow-hidden"
    >
      {/* Framer Luminous Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-25 aurora-blue-glow blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">The Critical Growth Differentiator</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-[1.05]">
            Generate More Work.{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case block sm:inline">
              Find the People
            </span>{' '}
            to Complete It.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal leading-relaxed">
            Most marketing agencies promise more leads, only to overwhelm your existing crews. In attic insulation, <strong>workforce capacity is the real growth bottleneck</strong>. The Market Leader Growth System pairs homeowner acquisition with a fully managed installer recruitment engine.
          </p>
        </div>

        {/* 5-Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#0c0e17]/85 border border-white/[0.08] hover:border-blue-500/50 p-7 sm:p-8 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading uppercase text-xl text-[#fffdf9] tracking-wide mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-[#fffdf9]/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-blue-400 font-sans font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fully Managed by ShownLeads</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Scope Boundary & Guarantee Clarity */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0e1324] to-[#0a0d16] border border-blue-500/30 p-7 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="font-heading uppercase text-xl text-[#fffdf9] tracking-wide mb-3">
                Clear Scope &amp; Compliance
              </h3>

              <p className="font-sans text-xs sm:text-sm text-blue-200/80 leading-relaxed mb-4">
                ShownLeads provides candidate acquisition funnels, vetting surveys, and recruitment marketing infrastructure. Your business retains 100% control over interview decisions, wages, and employment.
              </p>

              <div className="text-[11px] font-mono text-gray-400 border-t border-white/[0.08] pt-3">
                *ShownLeads is not an employment agency or employer of record.
              </div>
            </div>

            <button
              onClick={onTalkToSpecialist || onOpenQuiz}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-sans uppercase tracking-wider font-medium inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.35)]"
            >
              <span>Discuss Workforce Expansion</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
