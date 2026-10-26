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
    <div className="min-h-screen bg-[#000000] text-[#fffdf9] pt-24 pb-20">
      {/* Ambient caustics */}
      <div 
        className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(42, 255, 42, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(42, 127, 255, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 py-4 mb-8 border-b border-[#26282e]">
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
            <span className="text-[#2aff2a]">Appointments</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181d] border border-[#2e3238] shadow-sm">
            <CalendarCheck className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#fffdf9]/90 font-sans font-medium">
              Performance Model • Pay Per Appointment &amp; Shown Appointment
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            NEVER PAY FOR GHOSTS. <br className="hidden sm:inline" />
            <span className="neon-silver-text">PAY PER SHOWN APPOINTMENT.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Why pay marketing agencies for empty calendar entries? With ShownLeads&apos; hybrid show model, our primary fee is strictly tied to qualified prospects actually showing up to meet your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>See If You Qualify</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenSpecialist && (
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[6px] bg-[#181a1f] border border-[#403f3f] text-[#fffdf9] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#202329] hover:border-[#fffdf9] transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#6f879c]" />
                <span>Talk to a Lead Specialist</span>
              </button>
            )}
          </div>
        </div>

        {/* TWO TIERS: PAY PER APPOINTMENT vs PAY PER SHOWN APPOINTMENT */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-3">
              Understanding The Two Performance Tiers
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              We align our incentives with your estimators and sales reps. Choose the structure that fits your sales cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TIER 1: Pay Per Qualified Appointment */}
            <div className="p-8 rounded-[16px] bg-[#121316] border border-[#26282e] hover:border-[#403f3f] transition-all space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#17191d] border border-[#2c2f36] text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans font-medium">
                  Option 1
                </span>
                <span className="text-xs text-[#2aff2a] font-sans font-semibold">Pre-Vetted Calendar Slot</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl text-[#fffdf9] uppercase">
                  Pay-Per-Appointment
                </h3>
                <div className="font-display text-3xl sm:text-4xl text-[#fffdf9] mt-2">
                  $55 <span className="text-sm font-sans text-[#8e9aa8]">/ Booked Qualified Slot</span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
                Ideal for established contractors with robust internal dispatchers who prefer handling the pre-appointment reminders and confirmation calls in-house.
              </p>

              <ul className="space-y-3 text-xs text-[#fffdf9]/90 font-sans border-t border-[#22242a] pt-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>Lead screened for project scope, budget &amp; property ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>Booked directly onto your designated sales team calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>Full recording &amp; setter intake notes attached to appointment</span>
                </li>
              </ul>
            </div>

            {/* TIER 2: Pay Per SHOWN Appointment (Hybrid Flagship) */}
            <div className="p-8 rounded-[16px] bg-[#14161a] border-2 border-[#2aff2a] shadow-[0_12px_36px_rgba(42,255,42,0.12)] space-y-6 relative">
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-[#2aff2a] text-[#101010] text-[10px] uppercase font-sans font-bold tracking-wider">
                Most Popular • Zero Risk
              </div>

              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#172219] border border-[#214324] text-[11px] uppercase tracking-wider text-[#2aff2a] font-sans font-semibold">
                  Option 2 (Flagship)
                </span>
                <span className="text-xs text-[#2aff2a] font-sans font-semibold">Zero Cost If No-Show</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl text-[#fffdf9] uppercase">
                  Pay-Per-Shown Estimate
                </h3>
                <div className="font-display text-2xl sm:text-3xl text-[#2aff2a] mt-2">
                  Pay Per Estimate <span className="text-sm font-sans text-[#8e9aa8]">/ Verified Attended Show</span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
                The gold standard in performance marketing: you only pay when a qualified single-family homeowner sits down with your estimator. If they cancel or no-show, you pay $0.
              </p>

              <ul className="space-y-3 text-xs text-[#fffdf9] font-sans border-t border-[#22242a] pt-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span><strong>Zero cost</strong> if the homeowner cancels or doesn&apos;t answer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>Automated multi-touch SMS &amp; call dispatch confirmations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>Route-optimized calendar booking synced to your sales team</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span>94.6% average in-home sit-down show rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION: THE 180-SECOND SETTER WORKFLOW */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-[11px] uppercase tracking-[0.12em] text-[#2aff2a] font-sans mb-3">
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
                  className="p-6 rounded-[14px] bg-[#121316] border border-[#26282e] space-y-3 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[#6f879c]">{step.step}</span>
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#181a1f] border border-[#2c2f36] text-[10px] text-[#2aff2a] font-sans">
                      {step.time}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-[6px] bg-[#17191d] flex items-center justify-center text-[#2aff2a]">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-heading text-lg text-[#fffdf9] uppercase">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[16px] bg-[#141414] border border-[#403f3f] p-8 sm:p-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans">
            <span>SHOW-UP GUARANTEE</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Lock Your Territory For <span className="neon-silver-text">Pay-Per-Shown Appointments</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            We strictly limit partnerships to one business per niche in each city. Take 60 seconds to verify whether your territory slot is still open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>See If You Qualify</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenSpecialist && (
              <button
                onClick={onOpenSpecialist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] bg-[#181a1f] border border-[#403f3f] text-[#fffdf9] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#202329] hover:border-[#fffdf9] transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#6f879c]" />
                <span>Talk to a Lead Specialist</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
