import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Users, 
  Newspaper, 
  ArrowLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Award, 
  PhoneCall, 
  Calendar, 
  Lock, 
  Scale, 
  Quote, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
import { SUBPAGE_TRANSLATIONS } from '../data/subpageTranslations';

interface CompanyPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

type TabType = 'about' | 'team' | 'news' | 'principles';

export const CompanyPage: React.FC<CompanyPageProps> = ({
  onOpenQuiz,
  onOpenSpecialist,
  onNavigateHome
}) => {
  const { language } = useLanguage();
  const sub = SUBPAGE_TRANSLATIONS[language] || SUBPAGE_TRANSLATIONS.en;
  const c = sub.company;
  const common = sub.common;

  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>('all');

  const teamMembers = [
    {
      name: "Cillian Ward",
      role: "Founder & Chief Growth Architect",
      location: "Austin, TX & Dublin, IE",
      avatarInitials: "CW",
      credential: "Ex-Media Buyer · $38M+ Managed Ad Capital",
      bio: "Founded ShownLeads after watching contractors and vocational academies burn tens of thousands on empty agency retainers. Architected the proprietary intent-pixelling and pay-per-show model that aligns financial risk 100% with the client.",
      focus: "Algorithmic Ad Arbitrage & High-Ticket Unit Economics",
      quote: "If an agency truly believes in their ability to generate revenue, they will never ask for a monthly retainer upfront."
    },
    {
      name: "Marcus Vance",
      role: "Head of Setter Telephony & Operations",
      location: "Dallas, TX",
      avatarInitials: "MV",
      credential: "180s Speed-to-Lead Operations Lead",
      bio: "Leads our dedicated US and UK setter floors. Enforces the strict 180-second speed-to-lead protocol, double-decision-maker intake confirmations, and automated two-way SMS reminder workflows that sustain our 94.6% verified show rate.",
      focus: "Telephony Speed, Script Vetting & Calendar Synchronization",
      quote: "Every 60 seconds of delay after an inquiry cuts show rates by 10%. We treat every homeowner lead as a live emergency."
    },
    {
      name: "Elena Rostova",
      role: "Director of Creative & Intent Funnels",
      location: "London, UK",
      avatarInitials: "ER",
      credential: "Direct-Response Video & Hook Architect",
      bio: "Oversees dynamic video sales letters, localized trade hook engineering, and psychological intake screening. Directs our field media teams to transform messy contractor job sites into cinematic, high-trust project portfolios.",
      focus: "Visual Conversion Architecture & Intent Pixelling",
      quote: "We don't create viral dancing videos. We produce high-converting asset reels that answer customer objections before estimators knock on their door."
    },
    {
      name: "Liam O'Connor",
      role: "Lead Systems & Infrastructure Architect",
      location: "Galway, IE",
      avatarInitials: "LO",
      credential: "Cold Infrastructure & CRM API Engineer",
      bio: "Architects our multi-domain secondary email servers, dedicated IP pools, SPF/DKIM/DMARC deliverability matrix, and 60-day automated homeowner reactivation workflows. Keeps primary domains 100% insulated from burn.",
      focus: "Deliverability Protocols, Webhooks & Pipeline Automation",
      quote: "Most leads don't buy on day one. Our automated 60-day nurture infrastructure reclaims 15% to 20% of past dead leads at zero ad cost."
    }
  ];

  const operatingPrinciples = [
    {
      number: "01",
      title: "Symmetric Economic Risk",
      subtitle: "Zero Pay If Prospects Don't Show",
      desc: "Traditional marketing agencies get paid whether your calendar is packed or dead silent. ShownLeads abolishes retainer complacency. Our core compensation is strictly tied to qualified, screened prospects who sit down and conduct their consultation with your estimators.",
      metric: "$0 Upfront Retainers",
      proof: "True performance alignment where we only win when you close jobs."
    },
    {
      number: "02",
      title: "Strict Territory Sovereignty",
      subtitle: "One Contractor Per Trade, Per City",
      desc: "We refuse to pit our partners against each other in the same geographic radius. When you partner with ShownLeads for your vertical (e.g. ADUs in Denver or Basement Finishing in Chicago), all local competitors in that niche are locked out permanently.",
      metric: "100% City Exclusivity",
      proof: "Documented territory contract preventing local competitor poaching."
    },
    {
      number: "03",
      title: "Irrevocable Asset Equity",
      subtitle: "You Own Your Ad Accounts & Data",
      desc: "Agencies frequently hold pixel data and ad accounts hostage when partnerships end. At ShownLeads, every campaign runs inside your owned Meta Business Manager, your Google Ads account, and your CRM. If we ever part ways, your data and pixel stay with you forever.",
      metric: "100% Client Asset Ownership",
      proof: "Direct admin access granted to you on day one."
    },
    {
      number: "04",
      title: "180-Second Telephony SLA",
      subtitle: "Institutional-Grade Speed To Lead",
      desc: "Contractors are usually on roofs or job sites and cannot answer inbound inquiries immediately. Our dedicated setter desk dials every qualified submission in under 3 minutes, vets the budget and decision-makers, and drops the appointment directly onto your schedule.",
      metric: "< 180s Dial Time",
      proof: "Audited telephony logs with verified time-stamped call records."
    }
  ];

  const newsItems = [
    {
      id: "news-1",
      date: "September 2026",
      category: "expansion",
      categoryLabel: "Vertical Expansion",
      readTime: "3 min read",
      title: "ShownLeads Expands Performance Coverage Across 17 High-Ticket Trade & Professional Sectors",
      lead: "Following two years of rapid traction in residential painting and vocational training academies, ShownLeads officially expands its pay-per-result infrastructure into ADU builders, elevator installers, modular home builders, septic services, and commercial IT sourcing.",
      takeaways: [
        "Dedicated qualification intake funnels custom-built for 17 high-ticket trades",
        "Average ticket size requirements benchmarked between $2,500 and $350,000+",
        "Strict 1-partner-per-city territory lockout remains in effect across all 17 sectors"
      ]
    },
    {
      id: "news-2",
      date: "August 2026",
      category: "milestone",
      categoryLabel: "Milestone",
      readTime: "4 min read",
      title: "Setter Operations Benchmark: 25,000 Verified Shown Appointments Delivered",
      lead: "The ShownLeads setter network crossed a landmark operational threshold this month: over 25,000 homeowner and commercial consultations scheduled with an audited 94.6% verified show rate across the US, UK, and Ireland.",
      takeaways: [
        "Over $64,000,000 in pipeline contract value delivered to partner crews",
        "Sub-180 second median dial speed maintained across all inbound submissions",
        "Zero monthly retainers billed throughout the entire 25,000 appointment span"
      ]
    },
    {
      id: "news-3",
      date: "July 2026",
      category: "intelligence",
      categoryLabel: "Industry Analysis",
      readTime: "5 min read",
      title: "The Collapse of Monthly Retainers: Why High-Ticket Contractors Are Demanding Pay-Per-Show",
      lead: "An exhaustive field report analyzing why traditional 6-month marketing retainers have experienced an 82% churn rate in the trade sector, and how performance-based acquisition is reshaping home services economics.",
      takeaways: [
        "Retainer agencies suffer structural misalignment by decoupling billing from client show-ups",
        "Shared lead aggregators (Angi/Thumbtack) degrade margins via multi-contractor bidding wars",
        "Exclusive pay-per-shown appointments represent the only stable vector for predictable crew scale"
      ]
    }
  ];

  const filteredNews = newsItems.filter(item => {
    if (selectedNewsCategory === 'all') return true;
    return item.category === selectedNewsCategory;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-[#fffdf9] pt-24 pb-24 selection:bg-[#2aff2a]/20 selection:text-[#fffdf9]">
      {/* Precision ambient glow */}
      <div 
        className="fixed top-1/4 left-1/3 w-[650px] h-[650px] rounded-full pointer-events-none opacity-[0.07] -z-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2aff2a 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05] -z-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2a7fff 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-4 py-4 mb-10 border-b border-[#22242a]">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#6f879c] font-sans">
            <span className="cursor-pointer hover:text-[#fffdf9] transition-colors" onClick={onNavigateHome}>Home</span>
            <span className="text-[#3a3d45]">/</span>
            <span className="text-[#2aff2a] font-medium">Company</span>
          </div>
        </nav>

        {/* HERO HEADER */}
        <header className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs text-[#8e9aa8] font-sans mb-4 tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span>The ShownLeads Corporation</span>
            <span aria-hidden="true" className="text-[#3a3d45]">·</span>
            <span className="text-[#2aff2a]">Est. 2024</span>
            <span aria-hidden="true" className="text-[#3a3d45]">·</span>
            <span>Performance Architecture</span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-[1.04] text-balance">
            THE ARCHITECTURE OF <br className="hidden sm:inline" />
            <span className="neon-silver-text">ALIGNED CLIENT ACQUISITION</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-10">
            We built ShownLeads to eliminate agency retainer complacency. Our mission is to engineer the world’s most accountable client acquisition engine for high-ticket service crews.
          </p>

          {/* Institutional Benchmark Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-[12px] bg-[#121316] border border-[#22242a] max-w-3xl mx-auto text-left shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            <div className="p-2 sm:p-3">
              <div className="font-display text-2xl sm:text-3xl text-[#2aff2a] leading-none tracking-tight">
                $0
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-1.5 font-medium">
                Agency Retainers
              </div>
              <div className="text-[10px] text-[#6f879c] font-sans mt-0.5">
                100% Performance-Tied
              </div>
            </div>

            <div className="p-2 sm:p-3 border-l border-[#22242a]">
              <div className="font-display text-2xl sm:text-3xl text-[#fffdf9] leading-none tracking-tight">
                180s
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-1.5 font-medium">
                Setter Response
              </div>
              <div className="text-[10px] text-[#6f879c] font-sans mt-0.5">
                Audited Telephony SLA
              </div>
            </div>

            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-[#22242a]">
              <div className="font-display text-2xl sm:text-3xl text-[#fffdf9] leading-none tracking-tight">
                91.8%
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-1.5 font-medium">
                Verified Show Rate
              </div>
              <div className="text-[10px] text-[#6f879c] font-sans mt-0.5">
                Two-Way SMS Nurture
              </div>
            </div>

            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-[#22242a]">
              <div className="font-display text-2xl sm:text-3xl text-[#2aff2a] leading-none tracking-tight">
                1 Per City
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#8e9aa8] font-sans mt-1.5 font-medium">
                Territory Lockout
              </div>
              <div className="text-[10px] text-[#6f879c] font-sans mt-0.5">
                Strict Non-Compete
              </div>
            </div>
          </div>
        </header>

        {/* ARCHITECTURAL SEGMENTED NAVIGATION */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-between p-1.5 rounded-[10px] bg-[#14161a] border border-[#26282e] shadow-inner">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-2.5 px-3 rounded-[7px] text-xs font-sans font-medium uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'about'
                  ? 'bg-[#fffdf9] text-[#101010] shadow-sm font-semibold'
                  : 'text-[#8e9aa8] hover:text-[#fffdf9] hover:bg-[#1a1c22]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>About Us</span>
            </button>

            <button
              onClick={() => setActiveTab('principles')}
              className={`flex-1 py-2.5 px-3 rounded-[7px] text-xs font-sans font-medium uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'principles'
                  ? 'bg-[#fffdf9] text-[#101010] shadow-sm font-semibold'
                  : 'text-[#8e9aa8] hover:text-[#fffdf9] hover:bg-[#1a1c22]'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>The Covenant</span>
            </button>

            <button
              onClick={() => setActiveTab('team')}
              className={`flex-1 py-2.5 px-3 rounded-[7px] text-xs font-sans font-medium uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'team'
                  ? 'bg-[#fffdf9] text-[#101010] shadow-sm font-semibold'
                  : 'text-[#8e9aa8] hover:text-[#fffdf9] hover:bg-[#1a1c22]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Leadership</span>
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`flex-1 py-2.5 px-3 rounded-[7px] text-xs font-sans font-medium uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'news'
                  ? 'bg-[#fffdf9] text-[#101010] shadow-sm font-semibold'
                  : 'text-[#8e9aa8] hover:text-[#fffdf9] hover:bg-[#1a1c22]'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>Field Notes</span>
            </button>
          </div>
        </div>

        {/* TAB PANELS WITH ANIMATE PRESENCE */}
        <AnimatePresence mode="wait">
          {/* TAB 1: ABOUT US */}
          {activeTab === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-16"
            >
              {/* Origin Story Manifesto */}
              <div className="p-8 sm:p-12 rounded-[16px] bg-[#121316] border border-[#22242a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#2aff2a]/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-3xl space-y-6">
                  <div className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#2aff2a]">
                    Origin &amp; Mission
                  </div>

                  <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal leading-[1.1] text-balance">
                    We Ended The Predatory Era Of Paying Marketing Agencies To Learn On Your Dime
                  </h2>

                  <div className="space-y-4 font-sans text-sm sm:text-base text-[#8e9aa8] leading-relaxed">
                    <p>
                      For more than two decades, the digital marketing agency industry operated on an extractive business model. Agencies demanded $3,000 to $6,000 monthly retainers upfront, spent your ad budget recklessly, handed over spreadsheets filled with unqualified tire-kickers, and blamed your sales team when nobody showed up.
                    </p>
                    <p>
                      We founded ShownLeads on a simple ethical standard: <strong className="text-[#fffdf9] font-medium">if an agency is not willing to tie its primary revenue to actual homeowner show-ups, they do not belong in your business.</strong>
                    </p>
                    <p>
                      Today, we operate across 17 high-ticket verticals in the United States, United Kingdom, and Ireland. We engineer custom intent-pixelling funnels, deploy dedicated 180-second setter teams, and ensure our contractor partners never pay for ghost inquiries or empty calendar entries.
                    </p>
                  </div>

                  {/* Founder Quote Callout */}
                  <blockquote className="p-5 rounded-[10px] bg-[#16181d] border-l-2 border-[#2aff2a] border-y border-r border-[#26282e] space-y-2 mt-8">
                    <div className="text-xs italic text-[#fffdf9]/90 font-sans leading-relaxed">
                      &ldquo;When incentives are properly aligned, everything becomes clear. We don&apos;t celebrate website traffic or Facebook impressions. We only celebrate when a pre-screened property owner sits down at your kitchen table ready to sign a contract.&rdquo;
                    </div>
                    <div className="text-xs text-[#8e9aa8] font-sans font-medium pt-1">
                      — Cillian Ward, <span className="text-[#6f879c]">Founder &amp; Chief Growth Architect</span>
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* The Old Way vs The ShownLeads Standard */}
              <div className="space-y-6">
                <div className="text-center max-w-xl mx-auto">
                  <h3 className="font-heading uppercase text-xl sm:text-2xl text-[#fffdf9]">
                    The Structural Paradigm Shift
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] mt-1">
                    How ShownLeads systematically dismantles traditional agency failure points.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Traditional Agency */}
                  <div className="p-7 rounded-[14px] bg-[#121316] border border-[#2a2222] space-y-5">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-[#2a2222]">
                      <span className="font-sans uppercase tracking-wider text-[#ff6b6b] font-semibold">
                        The Traditional Retainer Model
                      </span>
                      <span className="text-[#ff6b6b]/80">Broken System</span>
                    </div>

                    <ul className="space-y-3.5 text-xs text-[#8e9aa8] font-sans">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#ff6b6b] font-bold mt-0.5">✕</span>
                        <span><strong>$3,000–$6,000 monthly upfront retainer</strong> billed regardless of whether you get 1 lead or 50 leads.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#ff6b6b] font-bold mt-0.5">✕</span>
                        <span><strong>Zero setter support:</strong> Leads dumped as raw form notifications into an unmonitored email inbox.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#ff6b6b] font-bold mt-0.5">✕</span>
                        <span><strong>Multiple competitors in one city:</strong> They work with your direct rivals down the street, inflating your ad costs.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#ff6b6b] font-bold mt-0.5">✕</span>
                        <span><strong>Hostage ad accounts:</strong> If you cancel, they revoke access to your pixels, creatives, and custom audiences.</span>
                      </li>
                    </ul>
                  </div>

                  {/* ShownLeads Performance */}
                  <div className="p-7 rounded-[14px] bg-[#121417] border-2 border-[#2aff2a]/80 space-y-5 shadow-[0_8px_30px_rgba(42,255,42,0.08)]">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-[#1f2b21]">
                      <span className="font-sans uppercase tracking-wider text-[#2aff2a] font-semibold">
                        The ShownLeads Aligned Standard
                      </span>
                      <span className="text-[#2aff2a]">Performance Covenant</span>
                    </div>

                    <ul className="space-y-3.5 text-xs text-[#fffdf9]/90 font-sans">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#2aff2a] font-bold mt-0.5">✓</span>
                        <span><strong>$0 monthly agency retainers:</strong> You only pay when a qualified, pre-screened buyer shows up to your meeting.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#2aff2a] font-bold mt-0.5">✓</span>
                        <span><strong>180-second setter telephony:</strong> Every inquiry is called, screened for budget and property ownership, and calendar-synced.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#2aff2a] font-bold mt-0.5">✓</span>
                        <span><strong>Strict 1-client territory exclusivity:</strong> Your competitors are permanently shut out of our acquisition engine.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#2aff2a] font-bold mt-0.5">✓</span>
                        <span><strong>100% irrevocable asset equity:</strong> All Meta ad accounts, Google tags, and customer lists belong to you forever.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: OPERATING COVENANT / PRINCIPLES */}
          {activeTab === 'principles' && (
            <motion.div
              key="principles-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#2aff2a] mb-2">
                  Operating Constitution
                </div>
                <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9]">
                  Our Four Non-Negotiable Standards
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] mt-2 leading-relaxed">
                  These four pillars govern every client partnership, employment contract, and campaign deployment at ShownLeads.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {operatingPrinciples.map((principle) => (
                  <div
                    key={principle.number}
                    className="p-8 rounded-[16px] bg-[#121316] border border-[#22242a] hover:border-[#403f3f] transition-all space-y-5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl text-[#6f879c] leading-none">
                          {principle.number}
                        </span>
                        <span className="text-[11px] font-sans font-medium text-[#2aff2a] tracking-wider uppercase">
                          {principle.metric}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading text-xl text-[#fffdf9] uppercase">
                          {principle.title}
                        </h3>
                        <div className="text-xs text-[#8e9aa8] font-sans mt-0.5 font-medium">
                          {principle.subtitle}
                        </div>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#22242a] flex items-center gap-2 text-xs text-[#6f879c] font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2aff2a] shrink-0" />
                      <span>{principle.proof}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Territory Protection Pledge */}
              <div className="p-6 rounded-[12px] bg-[#14161a] border border-[#26282e] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#17191d] border border-[#2a2d33] flex items-center justify-center text-[#2aff2a] shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading uppercase text-base text-[#fffdf9]">
                      City Territory Exclusivity Guarantee
                    </h4>
                    <p className="font-sans text-xs text-[#8e9aa8] mt-0.5">
                      We sign a formal exclusivity covenant with every partner. Once your market is locked, competing inquiries are automatically declined.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenQuiz}
                  className="shrink-0 px-5 py-2.5 rounded-[6px] bg-[#fffdf9] text-[#101010] text-xs uppercase tracking-[0.08em] font-sans font-semibold hover:bg-[#eae6de] transition-colors cursor-pointer"
                >
                  Verify Your Territory
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 3: MEET THE TEAM */}
          {activeTab === 'team' && (
            <motion.div
              key="team-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#2aff2a] mb-2">
                  Leadership &amp; Operations
                </div>
                <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9]">
                  The Operators Behind Your Pipeline
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] mt-2 leading-relaxed">
                  No junior account managers or outsourced offshore telemarketers. Your campaigns and telephony floor are run by veteran acquisition specialists.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-[16px] bg-[#121316] border border-[#22242a] hover:border-[#403f3f] transition-all space-y-5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Member Header */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-[12px] bg-[#17191d] border border-[#2a2d33] flex items-center justify-center text-[#fffdf9] font-display text-xl font-semibold shrink-0 shadow-inner">
                          {member.avatarInitials}
                        </div>
                        <div>
                          <h3 className="font-heading text-xl text-[#fffdf9] uppercase tracking-wide">
                            {member.name}
                          </h3>
                          <div className="text-xs text-[#2aff2a] font-sans font-medium">
                            {member.role}
                          </div>
                          <div className="text-[11px] text-[#6f879c] font-sans mt-0.5">
                            {member.location}
                          </div>
                        </div>
                      </div>

                      {/* Credential Tag */}
                      <div className="text-[11px] text-[#8e9aa8] font-sans bg-[#16181d] px-3 py-1.5 rounded-[6px] border border-[#26282e]">
                        <strong className="text-[#fffdf9] font-medium">Track Record:</strong> {member.credential}
                      </div>

                      {/* Bio */}
                      <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Philosophy Quote */}
                      <blockquote className="font-sans text-xs italic text-[#fffdf9]/80 border-l-2 border-[#26282e] pl-3 py-0.5">
                        &ldquo;{member.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="pt-4 border-t border-[#22242a] flex items-center justify-between text-xs">
                      <span className="text-[#6f879c] font-sans">Primary Responsibility:</span>
                      <span className="text-[#fffdf9] font-sans font-medium text-right">{member.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: NEWS & FIELD DISPATCHES */}
          {activeTab === 'news' && (
            <motion.div
              key="news-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#2aff2a] mb-2">
                  Corporate Dispatches
                </div>
                <h2 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9]">
                  News, Field Notes &amp; Market Intel
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] mt-2 leading-relaxed">
                  Official press announcements, operational milestones, and strategic commentary from the contractor customer acquisition frontline.
                </p>
              </div>

              {/* News Filter Pills */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {[
                  { id: 'all', label: 'All Dispatches' },
                  { id: 'expansion', label: '17 Niches Expansion' },
                  { id: 'milestone', label: 'Milestones (25k Shows)' },
                  { id: 'intelligence', label: 'Market Analysis' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedNewsCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-[6px] text-xs font-sans font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      selectedNewsCategory === cat.id
                        ? 'bg-[#fffdf9] text-[#101010] shadow-sm font-semibold'
                        : 'bg-[#14161a] text-[#8e9aa8] border border-[#22242a] hover:text-[#fffdf9]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredNews.map((news) => (
                  <article
                    key={news.id}
                    className="p-7 sm:p-9 rounded-[16px] bg-[#121316] border border-[#22242a] hover:border-[#403f3f] transition-all space-y-4"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#6f879c] font-sans">
                      <span className="text-[#2aff2a] font-medium uppercase tracking-wider text-[11px]">
                        {news.categoryLabel}
                      </span>
                      <span aria-hidden="true" className="text-[#3a3d45]">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#6f879c]" />
                        {news.date}
                      </span>
                      <span aria-hidden="true" className="text-[#3a3d45]">·</span>
                      <span>{news.readTime}</span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl text-[#fffdf9] uppercase leading-snug">
                      {news.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] leading-relaxed">
                      {news.lead}
                    </p>

                    <div className="p-4 rounded-[8px] bg-[#16181d] border border-[#26282e] space-y-2">
                      <div className="text-[10px] uppercase tracking-wider text-[#6f879c] font-sans font-medium">
                        Key Strategic Takeaways:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#fffdf9]/90 font-sans">
                        {news.takeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-[#2aff2a] text-[11px] mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={onOpenQuiz}
                        className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-[0.08em] text-[#fffdf9] hover:text-[#2aff2a] transition-colors cursor-pointer"
                      >
                        <span>Check Sector Availability</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM PARTNERSHIP ONBOARDING CTA */}
        <div className="max-w-4xl mx-auto mt-20 rounded-[16px] bg-[#121316] border border-[#2a2d33] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2aff2a]/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#2aff2a]">
              Direct Territory Qualification
            </div>

            <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight text-balance">
              Partner With <span className="neon-silver-text">ShownLeads</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#8e9aa8] max-w-xl mx-auto leading-relaxed">
              Verify if your trade sector and metropolitan territory are currently open. Zero retainers, strict 1-client exclusivity, and guaranteed pay-per-shown appointments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
              >
                <span>Check Territory Eligibility</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {onOpenSpecialist && (
                <button
                  onClick={onOpenSpecialist}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[6px] bg-[#17191d] border border-[#2e3238] text-[#fffdf9] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] hover:bg-[#202329] hover:border-[#fffdf9] transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#6f879c]" />
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
