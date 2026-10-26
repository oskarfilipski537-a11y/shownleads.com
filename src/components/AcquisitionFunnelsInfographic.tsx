import React, { useState } from 'react';
import { 
  Eye, 
  ClipboardCheck, 
  CalendarCheck, 
  Headphones, 
  UserCheck, 
  PhoneCall, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';

interface AcquisitionFunnelsInfographicProps {
  onOpenQuiz?: () => void;
}

export const AcquisitionFunnelsInfographic: React.FC<AcquisitionFunnelsInfographicProps> = ({ onOpenQuiz }) => {
  const [activeFunnel, setActiveFunnel] = useState<'funnel1' | 'funnel2' | 'both'>('both');

  const funnel1Steps = [
    {
      step: '01',
      title: 'Scroll Stopping Ad',
      badge: 'Pattern Interrupt',
      desc: 'High-contrast video ad targeting single-family homeowners in $90k+ income zip codes.',
      icon: Eye,
      tag: 'Meta & Google Ads'
    },
    {
      step: '02',
      title: 'QC Qualification Survey',
      badge: '5-Question Filter',
      desc: 'Automated survey verifies homeownership, project timeline, funding method, and roof scope.',
      icon: ClipboardCheck,
      tag: 'Zero Renters / DIYers'
    },
    {
      step: '03',
      title: 'Booking Calendar',
      badge: 'Self-Scheduled',
      desc: 'Homeowner chooses an available route slot that aligns with your senior estimator’s drive territory.',
      icon: CalendarCheck,
      tag: 'Real-Time Sync'
    },
    {
      step: '04',
      title: 'Industry Trained Call Centre',
      badge: 'Concierge Verification',
      desc: 'US-trained reps call within 90 seconds to re-verify homeowner attendance and project budget.',
      icon: Headphones,
      tag: '94.6% Sit-Down Rate'
    },
    {
      step: '05',
      title: 'In-Home Estimate',
      badge: 'Pay Per Estimate Triggered',
      desc: 'Senior sales rep sits down at the kitchen table with both decision makers present. You pay only when shown.',
      icon: UserCheck,
      tag: 'Guaranteed Show'
    }
  ];

  const funnel2Steps = [
    {
      step: '01',
      title: 'Scroll Stopping Ad',
      badge: 'Urgency Driver',
      desc: 'Direct-response ad addressing urgent storm damage, active leaks, or immediate roof needs.',
      icon: Eye,
      tag: 'Pattern Interrupt'
    },
    {
      step: '02',
      title: 'Click to Call',
      badge: 'Direct Response',
      desc: 'Homeowner taps one button on mobile to dial instantly without filling out long forms.',
      icon: PhoneCall,
      tag: 'Instant Mobile Dial'
    },
    {
      step: '03',
      title: 'Industry Trained Call Centre',
      badge: 'Live Human Intake',
      desc: 'Dedicated intake reps answer in < 3 rings, qualify property ownership, and build instant trust.',
      icon: Headphones,
      tag: 'Screened Inbound'
    },
    {
      step: '04',
      title: 'Booked Estimate',
      badge: 'Calendar Route Lock',
      desc: 'Appointment locked on the spot into your crew’s live schedule with automated SMS confirmation.',
      icon: CalendarCheck,
      tag: 'Route-Optimized'
    },
    {
      step: '05',
      title: 'In-Home Estimate',
      badge: 'Pay Per Estimate Triggered',
      desc: 'Estimator arrives to an eager homeowner with an urgent scope. $0 fee if they reschedule or no-show.',
      icon: UserCheck,
      tag: 'Guaranteed Show'
    }
  ];

  return (
    <div className="w-full mt-20 pt-16 border-t border-[#222222]">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
            ACQUISITION INFRASTRUCTURE • 2 DUAL FUNNEL PATHS
          </span>
        </div>
        <h3 className="font-heading uppercase text-2xl sm:text-4xl lg:text-[2.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-tight">
          Two high-converting conversion funnels <span className="neon-silver-text">running simultaneously</span>.
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal max-w-2xl mx-auto leading-relaxed">
          We capture both high-consideration scheduled appointments and instant high-urgency homeowner phone calls, giving your team predictable, verified estimate volume.
        </p>

        {/* Funnel Selector Tabs */}
        <div className="mt-8 inline-flex items-center p-1 rounded-[10px] bg-[#141414] border border-[#262626]">
          <button
            onClick={() => setActiveFunnel('both')}
            className={`px-4 py-1.5 rounded-[8px] text-xs font-sans transition-all cursor-pointer ${
              activeFunnel === 'both'
                ? 'bg-[#222] text-[#fffdf9] font-medium shadow-xs border border-[#333]'
                : 'text-[#6f879c] hover:text-[#fffdf9]'
            }`}
          >
            Show Both Funnels
          </button>
          <button
            onClick={() => setActiveFunnel('funnel1')}
            className={`px-4 py-1.5 rounded-[8px] text-xs font-sans transition-all cursor-pointer ${
              activeFunnel === 'funnel1'
                ? 'bg-[#222] text-[#fffdf9] font-medium shadow-xs border border-[#333]'
                : 'text-[#6f879c] hover:text-[#fffdf9]'
            }`}
          >
            1. Survey & Calendar Funnel
          </button>
          <button
            onClick={() => setActiveFunnel('funnel2')}
            className={`px-4 py-1.5 rounded-[8px] text-xs font-sans transition-all cursor-pointer ${
              activeFunnel === 'funnel2'
                ? 'bg-[#222] text-[#fffdf9] font-medium shadow-xs border border-[#333]'
                : 'text-[#6f879c] hover:text-[#fffdf9]'
            }`}
          >
            2. Click-to-Call Funnel
          </button>
        </div>
      </div>

      {/* Funnels Container */}
      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* ==================================================================== */}
        {/* FUNNEL 1: Survey & Self-Booking Calendar Funnel                      */}
        {/* ==================================================================== */}
        {(activeFunnel === 'both' || activeFunnel === 'funnel1') && (
          <div className="rounded-[16px] bg-[#111111] border border-[#242424] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Top Funnel Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1f1f1f]">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2aff2a]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#2aff2a] font-display font-semibold">
                    FUNNEL 01 • SCHEDULED APPOINTMENT PATH
                  </span>
                </div>
                <h4 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal">
                  Scroll Stopping Ad ➔ Survey ➔ Calendar ➔ Call Centre ➔ Estimate
                </h4>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6f879c]">
                <span className="text-[#fffdf9] font-medium">Ideal For:</span>
                <span>Planned Roof Replacements & Large Remodels</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#2c2c2c] text-[#2aff2a] text-[10px] font-mono">
                  32% Avg Close Rate
                </span>
              </div>
            </div>

            {/* Step Nodes Flowchart */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
              {funnel1Steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col justify-between p-4 rounded-[12px] bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all group">
                    <div>
                      {/* Step Number & Connector */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-[#6f879c] group-hover:text-[#2aff2a] transition-colors">
                          STAGE {step.step}
                        </span>
                        <div className="w-7 h-7 rounded-[8px] bg-[#1c1c1c] border border-[#2c2c2c] flex items-center justify-center text-[#fffdf9] group-hover:border-[#2aff2a]/50 group-hover:text-[#2aff2a] transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Title & Badge */}
                      <h5 className="font-display text-sm font-semibold text-[#fffdf9] mb-1 leading-snug">
                        {step.title}
                      </h5>
                      <span className="text-[10px] text-[#2aff2a] font-mono block mb-2">
                        {step.badge}
                      </span>

                      {/* Description */}
                      <p className="text-[11px] text-[#fffdf9]/60 leading-relaxed font-normal mb-3">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-2 border-t border-[#1f1f1f] flex items-center justify-between text-[10px] text-[#6f879c]">
                      <span>{step.tag}</span>
                      {idx < funnel1Steps.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-[#3a3a3a] hidden md:block" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Flow Summary Strip */}
            <div className="mt-5 p-3 rounded-[10px] bg-[#161616] border border-[#202020] flex flex-wrap items-center justify-between gap-3 text-xs text-[#fffdf9]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2aff2a] shrink-0" />
                <span>
                  <strong>Strict Quality Control:</strong> Homeowners who rent, lack insurance, or request minor patchwork are automatically disqualified before the calendar opens.
                </span>
              </div>
              <span className="text-[#2aff2a] font-mono text-[11px] shrink-0">
                Performance Rule: $0 on No-Shows
              </span>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* FUNNEL 2: Direct Response Click-to-Call Inbound Funnel               */}
        {/* ==================================================================== */}
        {(activeFunnel === 'both' || activeFunnel === 'funnel2') && (
          <div className="rounded-[16px] bg-[#111111] border border-[#242424] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Top Funnel Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1f1f1f]">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-display font-semibold">
                    FUNNEL 02 • DIRECT-CALL INBOUND PATH
                  </span>
                </div>
                <h4 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal">
                  Scroll Stopping Ad ➔ Click to Call ➔ Call Centre ➔ Booked ➔ Estimate
                </h4>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6f879c]">
                <span className="text-[#fffdf9] font-medium">Ideal For:</span>
                <span>Active Leaks, Storm Damage & Urgent Inquiries</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#2c2c2c] text-[#38bdf8] text-[10px] font-mono">
                  36% Avg Close Rate
                </span>
              </div>
            </div>

            {/* Step Nodes Flowchart */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
              {funnel2Steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col justify-between p-4 rounded-[12px] bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all group">
                    <div>
                      {/* Step Number & Connector */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-[#6f879c] group-hover:text-[#38bdf8] transition-colors">
                          STAGE {step.step}
                        </span>
                        <div className="w-7 h-7 rounded-[8px] bg-[#1c1c1c] border border-[#2c2c2c] flex items-center justify-center text-[#fffdf9] group-hover:border-[#38bdf8]/50 group-hover:text-[#38bdf8] transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Title & Badge */}
                      <h5 className="font-display text-sm font-semibold text-[#fffdf9] mb-1 leading-snug">
                        {step.title}
                      </h5>
                      <span className="text-[10px] text-[#38bdf8] font-mono block mb-2">
                        {step.badge}
                      </span>

                      {/* Description */}
                      <p className="text-[11px] text-[#fffdf9]/60 leading-relaxed font-normal mb-3">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-2 border-t border-[#1f1f1f] flex items-center justify-between text-[10px] text-[#6f879c]">
                      <span>{step.tag}</span>
                      {idx < funnel2Steps.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-[#3a3a3a] hidden md:block" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Flow Summary Strip */}
            <div className="mt-5 p-3 rounded-[10px] bg-[#161616] border border-[#202020] flex flex-wrap items-center justify-between gap-3 text-xs text-[#fffdf9]/70">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>
                  <strong>High-Speed Human Response:</strong> Inbound calls answered by specialized US-trained construction intake reps in under 3 rings to prevent homeowners from calling competitors.
                </span>
              </div>
              <span className="text-[#38bdf8] font-mono text-[11px] shrink-0">
                Instant Calendar Dispatch
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
