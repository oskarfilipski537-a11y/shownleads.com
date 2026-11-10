import React from 'react';
import { 
  CalendarCheck, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles, 
  MessageSquare, 
  UserCheck, 
  Calendar, 
  Repeat, 
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface AppointmentsPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

export const AppointmentsPage: React.FC<AppointmentsPageProps> = ({
  onOpenQuiz,
  onOpenSpecialist,
  onNavigateHome
}) => {
  const setterWorkflowSteps = [
    {
      step: "01",
      time: "Within 180s",
      title: "Immediate Telephony Contact",
      desc: "Our dedicated setter calls the prospect in under 3 minutes while their buying intent and problem awareness are at peak velocity.",
      icon: Clock
    },
    {
      step: "02",
      time: "Minute 4",
      title: "Multi-Point Vetting Protocol",
      desc: "Setter screens for project budget, timeframe, property ownership, and confirms both homeowners/decision-makers will be present.",
      icon: UserCheck
    },
    {
      step: "03",
      time: "Minute 6",
      title: "Direct Calendar Synchronization",
      desc: "The appointment is booked directly into your Google, Outlook, or CRM calendar based on your real-time crew availability.",
      icon: Calendar
    },
    {
      step: "04",
      time: "Day -1 & Day 0",
      title: "Two-Way SMS Nurture & Show Confirmation",
      desc: "Automated two-way conversational reminders are dispatched 24 hours and 2 hours prior to ensure 90%+ show attendance.",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20">
      {/* Aurora Ambient Glows */}
      <div 
        className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 py-4 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#6f879c] font-sans">
            <span className="cursor-pointer hover:text-[#fffdf9]" onClick={onNavigateHome}>Home</span>
            <span>/</span>
            <span className="text-blue-400 font-medium">Appointments</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-sm">
            <CalendarCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-blue-200 font-mono font-medium">
              Performance Model • Pay Per Appointment &amp; Shown Appointment
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            NEVER PAY FOR GHOSTS. <br className="hidden sm:inline" />
            <span className="text-blue-400 font-serif italic lowercase tracking-normal">pay per shown appointment.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Why pay marketing agencies for empty calendar entries? With ShownLeads&apos; hybrid show model, our primary fee is strictly tied to qualified prospects actually showing up to meet your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/10"
            >
              <span>See If You Qualify</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenSpecialist && (
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-white/[0.12] transition-all cursor-pointer backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Talk to a Lead Specialist</span>
              </button>
            )}
          </div>
        </div>

        {/* TWO CORE SHOWN SIT OFFERS: $97 AND $197 */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-3">
              Understanding Our Shown Appointment Options
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              Pay strictly per shown appointment. If the homeowner does not show up, you owe $0.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TIER 1: Qualified Shown Appointment ($97) */}
            <div className="p-7 rounded-[22px] bg-[#0c0e17] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] uppercase tracking-wider text-gray-400 font-sans font-medium">
                    Option 1
                  </span>
                  <span className="text-xs text-blue-400 font-sans font-semibold">Pay-Per-Sit</span>
                </div>

                <h3 className="font-heading text-2xl text-[#fffdf9] uppercase">
                  Qualified Shown Appointment
                </h3>
                <div className="font-display text-3xl sm:text-4xl text-[#fffdf9] mt-2">
                  $97 <span className="text-xs font-sans text-[#8e9aa8]">/ Shown Sit</span>
                </div>

                <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed mt-3">
                  Pay only when a real homeowner shows up for an estimate.
                </p>

                <ul className="space-y-2.5 text-xs text-[#fffdf9]/90 font-sans border-t border-white/10 pt-5 mt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Real homeowners only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Ready for attic insulation work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Booked straight to your calendar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Pay $0 if they don't show up</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenQuiz}
                className="w-full py-3.5 rounded-full bg-white text-black hover:bg-gray-100 text-xs font-sans uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                Apply for $97 Sits •
              </button>
            </div>

            {/* TIER 2: Price-Educated Shown Appointment ($197) */}
            <div className="p-7 rounded-[22px] bg-[#0c0e17] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] uppercase tracking-wider text-gray-400 font-sans font-medium">
                    Option 2
                  </span>
                  <span className="text-xs text-blue-400 font-sans font-semibold">Price-Educated</span>
                </div>

                <h3 className="font-heading text-2xl text-[#fffdf9] uppercase">
                  Price-Educated Shown Sit
                </h3>
                <div className="font-display text-3xl sm:text-4xl text-[#fffdf9] mt-2">
                  $197 <span className="text-xs font-sans text-[#8e9aa8]">/ Shown Sit</span>
                </div>

                <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed mt-3">
                  We call homeowners first and make sure they know your prices before you visit.
                </p>

                <ul className="space-y-2.5 text-xs text-[#fffdf9]/90 font-sans border-t border-white/10 pt-5 mt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>We call every homeowner first</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>They know your prices ahead of time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Both decision-makers must be home</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Pay $0 if they don't show up</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenQuiz}
                className="w-full py-3.5 rounded-full bg-white text-black hover:bg-gray-100 text-xs font-sans uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                Apply for $197 Sits •
              </button>
            </div>
          </div>
        </div>

        {/* SECTION: THE 180-SECOND SETTER WORKFLOW */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.12em] text-blue-400 font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Speed-To-Lead Infrastructure</span>
            </div>
            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-3">
              How We Maintain A 91.8% Show Rate
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              When a homeowner fills out an inquiry, every minute that elapses reduces show-up probability by 10%. Here is the exact workflow our setters execute:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setterWorkflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[18px] bg-[#0c0e17] border border-white/10 space-y-3 relative hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-gray-500">{step.step}</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-400 font-mono">
                      {step.time}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-heading text-lg text-[#fffdf9] uppercase">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#0c0e17] border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs uppercase tracking-[0.1em] text-blue-300 font-mono">
              <span>SHOW-UP GUARANTEE</span>
            </div>

            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
              Lock Your Territory For <span className="text-blue-400 font-serif italic lowercase tracking-normal">pay-per-shown appointments</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              We strictly limit partnerships to one business per niche in each city. Take 60 seconds to verify whether your territory slot is still open.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/10"
              >
                <span>See If You Qualify</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {onOpenSpecialist && (
                <button
                  onClick={onOpenSpecialist}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] border border-white/10 text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-white/[0.12] transition-all cursor-pointer backdrop-blur-md"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Talk to a Lead Specialist</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
