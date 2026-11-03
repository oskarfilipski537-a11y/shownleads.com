import React, { useState } from 'react';
import { 
  Target, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  XCircle, 
  PhoneCall, 
  DollarSign, 
  Clock, 
  MapPin, 
  Sliders, 
  FileCheck2,
  Sparkles,
  Layers
} from 'lucide-react';

interface LeadGenPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

export const LeadGenPage: React.FC<LeadGenPageProps> = ({
  onOpenQuiz,
  onOpenSpecialist,
  onNavigateHome
}) => {
  const [selectedTicket, setSelectedTicket] = useState<number>(3500);
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(20);

  // Simple ROI estimate
  const estimatedCloses = Math.max(1, Math.round(leadsPerMonth * 0.25));
  const estimatedRevenue = estimatedCloses * selectedTicket;
  const estimatedCost = leadsPerMonth * 55;
  const netEstimatedProfit = estimatedRevenue - estimatedCost;

  const qualificationCriteria = [
    {
      title: "1. Verified Identity & Active Contact",
      desc: "Every applicant provides a verified mobile number and email. We eliminate bots, fake test submissions, and unreachable numbers.",
      tag: "100% Reachable"
    },
    {
      title: "2. Confirmed Property Owner / Decision Maker",
      desc: "For residential trades, we filter out renters or tenants. For commercial services, we require executive or operational purchasing authority.",
      tag: "Direct Authority"
    },
    {
      title: "3. Project Budget Threshold Met",
      desc: "Prospects must confirm an active budget matching your minimum ticket requirements (typically $2,000 to $10,000+). Zero discount shoppers.",
      tag: "Pre-Priced Scope"
    },
    {
      title: "4. Immediate Buying Timeframe",
      desc: "We screen out casual scrollers browsing for next year. Prospects must intend to initiate work or enroll within the next 14 to 60 days.",
      tag: "Active Intent"
    },
    {
      title: "5. Within Your Exact Territory Radius",
      desc: "Every lead is geo-filtered strictly to your active zip codes or travel boundaries. You never waste time on projects outside your zone.",
      tag: "Geo-Fenced"
    },
    {
      title: "6. Scope & Need Pre-Outlined",
      desc: "Leads specify exact requirements, square footage, or service goals so your estimators enter conversations fully informed.",
      tag: "Detailed Scope"
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20">
      {/* Subtle ambient lighting */}
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
            <span className="text-blue-400 font-medium">Lead Gen</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-sm">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-blue-200 font-mono font-medium">
              Pay Per Qualified Lead • Zero Monthly Retainers
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            PAY ONLY FOR LEADS THAT <br className="hidden sm:inline" />
            <span className="text-blue-400 font-serif italic lowercase tracking-normal">meet your exact buyer specifications</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Stop funding expensive monthly retainers with zero quality control. On our performance model, you only pay for prospects who have passed through our strict multi-point qualification filters.
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

        {/* SECTION: WHAT IS A QUALIFIED LEAD TO US? */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.12em] text-blue-400 font-mono mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>The ShownLeads Qualification Standard</span>
            </div>
            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-3">
              What Is A “Qualified Lead” To Us?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              Most lead generation companies count an email address or cheap click as a lead. At ShownLeads, an inquiry is strictly NOT considered qualified unless it clears every single checkpoint below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualificationCriteria.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[20px] bg-[#0c0e17] border border-white/10 hover:border-blue-500/40 transition-all space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-sans font-bold">
                    ✓
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 uppercase tracking-wider font-mono">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg text-[#fffdf9] uppercase">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Lead Replacement Guarantee Banner */}
          <div className="mt-8 p-5 rounded-[18px] bg-[#0c0e17] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
              <div>
                <h4 className="text-sm font-sans font-semibold text-[#fffdf9]">
                  100% Lead Integrity Guarantee
                </h4>
                <p className="text-xs text-gray-400 font-sans">
                  If any delivered lead fails our qualification criteria or provides a disconnected phone number, you receive an immediate replacement credit. Zero questions asked.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenQuiz}
              className="shrink-0 px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-[0.08em] font-sans font-semibold hover:bg-gray-100 transition-colors cursor-pointer shadow-md"
            >
              Verify Your Territory
            </button>
          </div>
        </div>

        {/* COMPARISON SECTION: SHOWNLEADS VS TRADITIONAL VS SHARED */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal mb-3">
              How ShownLeads Compares
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              Why shared aggregators and retainer agencies fail high-ticket contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shared Lead Portals */}
            <div className="p-6 rounded-[20px] bg-[#0c0e17] border border-white/10 space-y-4 opacity-75">
              <div className="text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-semibold">
                Shared Platforms (Angi, Thumbtack)
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">Fierce Race-To-Bottom</h3>
              <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>Sold simultaneously to 4–6 local competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>Bargain hunters shopping solely for cheapest price</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>You build zero long-term brand equity or pixel data</span>
                </li>
              </ul>
            </div>

            {/* Traditional Marketing Agencies */}
            <div className="p-6 rounded-[20px] bg-[#0c0e17] border border-white/10 space-y-4 opacity-75">
              <div className="text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-semibold">
                Traditional Retainer Agencies
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">$3k–$5k Retainer Traps</h3>
              <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>Large upfront monthly fees regardless of results</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>Blame your sales team when tire-kickers ghost calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span>Long 6–12 month contract lock-ins</span>
                </li>
              </ul>
            </div>

            {/* ShownLeads Performance */}
            <div className="p-6 rounded-[20px] bg-gradient-to-b from-[#0f172a] to-[#0a0d18] border-2 border-blue-500 space-y-4 shadow-[0_10px_40px_rgba(37,99,235,0.25)]">
              <div className="text-xs font-sans uppercase tracking-wider text-blue-400 font-semibold flex items-center justify-between">
                <span>ShownLeads Standard</span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono">Recommended</span>
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">100% Exclusive &amp; Qualified</h3>
              <ul className="space-y-2.5 text-xs text-white/90 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>100% exclusive to your crew; never sold to competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Multi-step intake screens for scope, budget &amp; homeownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Zero monthly retainers — pay strictly per qualified outcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ESTIMATOR */}
        <div className="max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-[24px] bg-[#0c0e17] border border-white/10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal mb-2">
              Performance Model Economics Simulator
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-400">
              Model your prospective returns based on your average ticket size and desired monthly lead volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-sans mb-2">
                  <span className="text-gray-400 uppercase tracking-wider">Average Ticket Size:</span>
                  <span className="text-white font-semibold">${selectedTicket.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  value={selectedTicket}
                  onChange={(e) => setSelectedTicket(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>$2,000</span>
                  <span>$8,000</span>
                  <span>$15,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans mb-2">
                  <span className="text-gray-400 uppercase tracking-wider">Target Qualified Leads / Mo:</span>
                  <span className="text-white font-semibold">{leadsPerMonth} Leads</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>10 Leads</span>
                  <span>35 Leads</span>
                  <span>60 Leads</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[20px] bg-[#08090f] border border-white/10 space-y-4 shadow-inner">
              <div className="flex justify-between items-center text-xs pb-3 border-b border-white/[0.06]">
                <span className="text-gray-400 font-sans">Conservative Close Rate (~25%):</span>
                <span className="text-white font-semibold">{estimatedCloses} Closed Deals</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-white/[0.06]">
                <span className="text-gray-400 font-sans">Projected Revenue Generated:</span>
                <span className="text-blue-400 font-display text-lg">${estimatedRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-white/[0.06]">
                <span className="text-gray-400 font-sans">Lead Qualification Cost ($55/lead):</span>
                <span className="text-gray-300 font-semibold">${estimatedCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-1">
                <span className="text-white font-sans font-medium">Estimated Net Pipeline Value:</span>
                <span className="text-blue-400 font-display text-xl font-bold">
                  ${netEstimatedProfit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#0c0e17] border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs uppercase tracking-[0.1em] text-blue-300 font-mono">
              <span>TERRITORY QUALIFICATION</span>
            </div>

            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
              Claim Your Territory For <span className="text-blue-400 font-serif italic lowercase tracking-normal">pay-per-qualified-lead</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              Remember: we only partner with one business per niche in each city. Take 60 seconds to verify whether your territory slot is still available.
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
