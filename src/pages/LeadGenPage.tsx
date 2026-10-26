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
    <div className="min-h-screen bg-[#000000] text-[#fffdf9] pt-24 pb-20">
      {/* Subtle ambient lighting */}
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
            <span className="text-[#2aff2a]">Lead Gen</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181d] border border-[#2e3238] shadow-sm">
            <Target className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#fffdf9]/90 font-sans font-medium">
              Pay Per Qualified Lead • Zero Monthly Retainers
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            PAY ONLY FOR LEADS THAT <br className="hidden sm:inline" />
            <span className="neon-silver-text">MEET YOUR EXACT BUYER SPECIFICATIONS</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Stop funding expensive monthly retainers with zero quality control. On our performance model, you only pay for prospects who have passed through our strict multi-point qualification filters.
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

        {/* SECTION: WHAT IS A QUALIFIED LEAD TO US? */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-[11px] uppercase tracking-[0.12em] text-[#2aff2a] font-sans mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>The ShownLeads Qualification Standard</span>
            </div>
            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal mb-3">
              What Is A “Qualified Lead” To Us?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              Most lead generation companies count an email address or cheap click as a lead. At ShownLeads, an inquiry is strictly NOT considered qualified unless it clears every single checkpoint below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualificationCriteria.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[14px] bg-[#121316] border border-[#26282e] hover:border-[#403f3f] transition-all space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#162719] text-[#2aff2a] border border-[#234827] flex items-center justify-center text-xs font-sans font-bold">
                    ✓
                  </span>
                  <span className="px-2 py-0.5 rounded-[4px] bg-[#181a1f] border border-[#2c2f36] text-[10px] text-[#2aff2a] uppercase tracking-wider font-sans">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg text-[#fffdf9] uppercase">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Lead Replacement Guarantee Banner */}
          <div className="mt-8 p-5 rounded-[12px] bg-[#14161a] border border-[#2e3238] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#2aff2a] shrink-0" />
              <div>
                <h4 className="text-sm font-sans font-semibold text-[#fffdf9]">
                  100% Lead Integrity Guarantee
                </h4>
                <p className="text-xs text-[#8e9aa8] font-sans">
                  If any delivered lead fails our qualification criteria or provides a disconnected phone number, you receive an immediate replacement credit. Zero questions asked.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenQuiz}
              className="shrink-0 px-4 py-2 rounded-[5px] bg-[#fffdf9] text-[#101010] text-xs uppercase tracking-[0.08em] font-sans font-medium hover:bg-[#eae6de] transition-colors cursor-pointer"
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
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
              Why shared aggregators and retainer agencies fail high-ticket contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shared Lead Portals */}
            <div className="p-6 rounded-[14px] bg-[#121316] border border-[#26282e] space-y-4 opacity-75">
              <div className="text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-semibold">
                Shared Platforms (Angi, Thumbtack)
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">Fierce Race-To-Bottom</h3>
              <ul className="space-y-2.5 text-xs text-[#8e9aa8] font-sans">
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
            <div className="p-6 rounded-[14px] bg-[#121316] border border-[#26282e] space-y-4 opacity-75">
              <div className="text-xs font-sans uppercase tracking-wider text-[#ff6b6b] font-semibold">
                Traditional Retainer Agencies
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">$3k–$5k Retainer Traps</h3>
              <ul className="space-y-2.5 text-xs text-[#8e9aa8] font-sans">
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
            <div className="p-6 rounded-[14px] bg-[#14161a] border-2 border-[#2aff2a] space-y-4 shadow-[0_10px_30px_rgba(42,255,42,0.1)]">
              <div className="text-xs font-sans uppercase tracking-wider text-[#2aff2a] font-semibold flex items-center justify-between">
                <span>ShownLeads Standard</span>
                <span className="px-2 py-0.5 rounded bg-[#102213] text-[#2aff2a] text-[10px]">Recommended</span>
              </div>
              <h3 className="font-heading text-xl text-[#fffdf9]">100% Exclusive &amp; Qualified</h3>
              <ul className="space-y-2.5 text-xs text-[#fffdf9]/90 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0 mt-0.5" />
                  <span>100% exclusive to your crew; never sold to competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0 mt-0.5" />
                  <span>Multi-step intake screens for scope, budget &amp; homeownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0 mt-0.5" />
                  <span>Zero monthly retainers — pay strictly per qualified outcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ESTIMATOR */}
        <div className="max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-[16px] bg-[#14161a] border border-[#26282e]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9] font-normal mb-2">
              Performance Model Economics Simulator
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8]">
              Model your prospective returns based on your average ticket size and desired monthly lead volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-sans mb-2">
                  <span className="text-[#8e9aa8] uppercase tracking-wider">Average Ticket Size:</span>
                  <span className="text-[#fffdf9] font-semibold">${selectedTicket.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  value={selectedTicket}
                  onChange={(e) => setSelectedTicket(Number(e.target.value))}
                  className="w-full accent-[#2aff2a] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#6f879c] mt-1 font-sans">
                  <span>$2,000</span>
                  <span>$8,000</span>
                  <span>$15,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans mb-2">
                  <span className="text-[#8e9aa8] uppercase tracking-wider">Target Qualified Leads / Mo:</span>
                  <span className="text-[#fffdf9] font-semibold">{leadsPerMonth} Leads</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full accent-[#2aff2a] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#6f879c] mt-1 font-sans">
                  <span>10 Leads</span>
                  <span>35 Leads</span>
                  <span>60 Leads</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[12px] bg-[#101215] border border-[#22242a] space-y-4">
              <div className="flex justify-between items-center text-xs pb-3 border-b border-[#22242a]">
                <span className="text-[#8e9aa8] font-sans">Conservative Close Rate (~25%):</span>
                <span className="text-[#fffdf9] font-semibold">{estimatedCloses} Closed Deals</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-[#22242a]">
                <span className="text-[#8e9aa8] font-sans">Projected Revenue Generated:</span>
                <span className="text-[#2aff2a] font-display text-lg">${estimatedRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-[#22242a]">
                <span className="text-[#8e9aa8] font-sans">Lead Qualification Cost ($55/lead):</span>
                <span className="text-[#8e9aa8] font-semibold">${estimatedCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-1">
                <span className="text-[#fffdf9] font-sans font-medium">Estimated Net Pipeline Value:</span>
                <span className="text-[#2aff2a] font-display text-xl font-bold">
                  ${netEstimatedProfit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[16px] bg-[#141414] border border-[#403f3f] p-8 sm:p-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans">
            <span>TERRITORY QUALIFICATION</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Claim Your Territory For <span className="neon-silver-text">Pay-Per-Qualified-Lead</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            Remember: we only partner with one business per niche in each city. Take 60 seconds to verify whether your territory slot is still available.
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
