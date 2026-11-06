import React from 'react';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface WorkforceExpansionProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const WorkforceExpansion: React.FC<WorkforceExpansionProps> = ({ 
  onOpenQuiz, 
  onTalkToSpecialist 
}) => {
  const steps = [
    {
      icon: Briefcase,
      title: "Hiring Ads in Your Area",
      desc: "Targeted ads to reach skilled installers and crew leads looking for steady work."
    },
    {
      icon: UserCheck,
      title: "Worker Pre-Screening",
      desc: "We check driver's licenses, attic experience, and background before you interview."
    },
    {
      icon: Users,
      title: "Ready-to-Interview List",
      desc: "You get qualified applicants sent straight to you so you can hire without the headache."
    }
  ];

  return (
    <section 
      id="workforce-system" 
      className="relative py-16 sm:py-24 bg-[#07080c] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-wider text-[11px]">Hiring Help</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl lg:text-[2.75rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-3 leading-tight">
            Get More Work.{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case block sm:inline">
              Find the Workers
            </span>{' '}
            to Finish It.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal leading-relaxed">
            Finding good installers is the hardest part of growing. We help you hire reliable crews to keep up with your homeowner jobs.
          </p>
        </div>

        {/* 3 Simple Streamlined Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
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
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onTalkToSpecialist || onOpenQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            <span>Ask About Installer Hiring</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
