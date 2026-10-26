import React, { useState } from 'react';
import { 
  Layers, 
  ArrowLeft, 
  ArrowUpRight, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Share2, 
  Video, 
  Compass, 
  Linkedin, 
  Mail, 
  Flame,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface OurServicesPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

export const OurServicesPage: React.FC<OurServicesPageProps> = ({
  onOpenQuiz,
  onOpenSpecialist,
  onNavigateHome
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const servicesList = [
    {
      id: "advertising",
      title: "Paid Advertising (Meta, Google & TikTok)",
      category: "paid",
      tag: "Direct Pipeline Engine",
      summary: "High-intent paid ad management that turns local homeowners and decision-makers into qualified appointment requests.",
      icon: Target,
      features: [
        "Hyper-targeted geographic fencing (radius & zip-code level)",
        "Negative keyword libraries preventing unqualified budget clicks",
        "Multi-creative split testing (video hooks, UGC, project carousels)",
        "You retain 100% ownership of your ad accounts and pixel assets"
      ],
      impact: "Feeds our 180-second setter floor with steady, high-intent daily inquiries."
    },
    {
      id: "organic-content",
      title: "Organic Content & Viral Reels",
      category: "content",
      tag: "Organic Authority",
      summary: "Short-form video hooks and transformation storylines that build trust, answer objections, and warm up local homeowners before the estimator arrives.",
      icon: Flame,
      features: [
        "Hook-first script development for contractors and trade leaders",
        "Before-and-after project transformations formatted for Reels/TikTok",
        "Direct-to-camera founder authority series positioning you as the local leader",
        "Audience retargeting pools built organically at zero ad spend"
      ],
      impact: "Increases appointment show-up rates by 24% through pre-established trust."
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      category: "content",
      tag: "Brand Authority",
      summary: "Complete channel stewardship across Instagram, Facebook, and YouTube to ensure your business looks pristine, established, and credible.",
      icon: Share2,
      features: [
        "Consistent posting schedule highlighting completed jobs and client reviews",
        "Direct message triage with inbound lead handoff to setters",
        "Highlight cover design, profile bio optimization, and link tree funnel routing",
        "Review syndication turning positive homeowner feedback into public social proof"
      ],
      impact: "Eliminates homeowner hesitation when researching your reputation online."
    },
    {
      id: "content-creation",
      title: "Content Creation & Studio Production",
      category: "content",
      tag: "Asset Studio",
      summary: "Full-scale media production guidance and on-site filming frameworks that capture your crew’s craftsmanship in crisp 4K cinematic quality.",
      icon: Video,
      features: [
        "On-site filming SOPs for job sites (timelapses, equipment showcases, walk-throughs)",
        "Professional color grading, audio leveling, and dynamic captions",
        "High-converting video sales letters (VSLs) embedded into intake funnels",
        "Client video testimonial interview protocols and remote filming setups"
      ],
      impact: "Separates your company from low-budget competitors competing on price."
    },
    {
      id: "consulting",
      title: "Revenue & Sales Operations Consulting",
      category: "strategy",
      tag: "Closing Operations",
      summary: "Direct strategic guidance on pricing structures, estimator commission plans, and one-call-close scripts to maximize your close rates.",
      icon: Compass,
      features: [
        "In-home estimator sales closing scripts and objection rebuttal playbooks",
        "Good / Better / Best tiered package pricing architectures",
        "Financing integration consultation (Hearth, Enhancify, Greensky)",
        "Pipeline audit to eliminate sales friction between appointment and deposit"
      ],
      impact: "Helps contractor partners increase their average job ticket by 18% to 35%."
    },
    {
      id: "linkedin-all-bound",
      title: "LinkedIn All-Bound (B2B Lead Engine)",
      category: "b2b",
      tag: "B2B & Partnerships",
      summary: "Account-based executive outreach for commercial contractors, IT sourcing firms, recruitment agencies, and real estate developers.",
      icon: Linkedin,
      features: [
        "Executive profile optimization positioning partners as industry keynotes",
        "Laser-targeted B2B Boolean searches targeting VP, Director & C-Suite titles",
        "Hyper-personalized conversational outreach sequences without spammy templates",
        "Direct calendar booking into your executive consultation pipeline"
      ],
      impact: "Generates high-ticket commercial accounts worth $50,000 to $250,000+."
    },
    {
      id: "email-infrastructure",
      title: "Dedicated Cold & Nurture Email Infrastructure",
      category: "b2b",
      tag: "Deliverability Engine",
      summary: "Industrial-grade email infrastructure with dedicated sending domains, warm-up automation, and 60-day multi-channel lead nurture sequences.",
      icon: Mail,
      features: [
        "Secondary sending domains with SPF, DKIM, DMARC, and MX records configured",
        "Automated mailbox warming to maintain 98%+ primary inbox deliverability",
        "60-day automated homeowner educational follow-up sequences",
        "Unresponsive lead reactivation campaigns turning dead lists into cash"
      ],
      impact: "Reclaims 15% to 20% of past unconverted leads into scheduled appointments."
    }
  ];

  const filteredServices = servicesList.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-[#fffdf9] pt-24 pb-20">
      {/* Background ambient lighting */}
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
            <span className="text-[#2aff2a]">Our Services</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181d] border border-[#2e3238] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#fffdf9]/90 font-sans font-medium">
              End-To-End Growth Architecture • 7 Core Capabilities
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            FULL-STACK CLIENT ACQUISITION <br className="hidden sm:inline" />
            <span className="neon-silver-text">&amp; PIPELINE INFRASTRUCTURE</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            We don&apos;t charge piecemeal hourly fees. All 7 disciplines are integrated into our performance engine to drive qualified, high-ticket shown appointments to your calendar.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: `All Services (${servicesList.length})` },
              { id: 'paid', label: 'Paid Acquisition' },
              { id: 'content', label: 'Content & Social' },
              { id: 'b2b', label: 'B2B & Outreach' },
              { id: 'strategy', label: 'Revenue Strategy' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#fffdf9] text-[#101010] shadow-sm'
                    : 'bg-[#14161a] text-[#8e9aa8] border border-[#26282e] hover:text-[#fffdf9]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-7 sm:p-9 rounded-[16px] bg-[#121316] border border-[#26282e] hover:border-[#403f3f] transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-[10px] bg-[#17191d] border border-[#2a2d33] flex items-center justify-center text-[#2aff2a]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#181a1f] border border-[#2c2f36] text-[10px] text-[#2aff2a] uppercase tracking-wider font-sans font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl text-[#fffdf9] uppercase">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] mt-2 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#22242a]">
                    <div className="text-[10px] uppercase tracking-wider text-[#6f879c] font-sans">
                      Core Deliverables &amp; Execution:
                    </div>
                    <ul className="space-y-2 text-xs text-[#fffdf9]/90 font-sans">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2aff2a] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 rounded-[8px] bg-[#16181d] border border-[#26282e] flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-[#2aff2a] shrink-0" />
                  <span className="text-xs text-[#8e9aa8] font-sans">
                    <strong className="text-[#fffdf9] font-medium">Pipeline Impact:</strong> {service.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[16px] bg-[#141414] border border-[#403f3f] p-8 sm:p-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans">
            <span>UNIFIED PERFORMANCE INFRASTRUCTURE</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Get All 7 Capabilities Unified Under <span className="neon-silver-text">Pay-Per-Result</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            No retainers, no nickel-and-diming for creative revisions. We invest our resources upfront and only earn when qualified buyers sit down with your team.
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
