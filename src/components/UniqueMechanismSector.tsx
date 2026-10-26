import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Radio,
  Filter,
  MapPin,
  Sparkles,
  Target,
  Calendar,
  Gauge,
  Bot,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Zap,
  Layers,
  ChevronRight,
  Split,
  Workflow,
  Clock,
  Sparkle
} from 'lucide-react';

interface UniqueMechanismSectorProps {
  onOpenQuiz?: () => void;
}

type ViewMode = 'blueprint' | 'matrix';
type PillarFilter = 'all' | 'pay-per-result' | 'social-media' | 'integrated';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  pillar: 'pay-per-result' | 'social-media' | 'integrated';
  category: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  contractorBenefit: string;
  spec: string;
}

const SERVICES: ServiceItem[] = [
  // PILLAR 1: PAY-PER-RESULT PAID ENGINE
  {
    id: 'perf-ads',
    number: '01',
    name: 'performance based ads.',
    pillar: 'pay-per-result',
    category: 'Pillar 1 • Paid Engine',
    badge: 'Direct ROAS',
    icon: TrendingUp,
    description: 'Contractor ad creatives running strictly on verified return-on-ad-spend.',
    contractorBenefit: 'Pay solely for verified, shown homeowner estimates.',
    spec: 'Meta Ads Manager + Custom Conversion Events'
  },
  {
    id: 'intent-targeting',
    number: '02',
    name: 'intent based targeting mechanism.',
    pillar: 'pay-per-result',
    category: 'Pillar 1 • Paid Engine',
    badge: 'In-Market Pixels',
    icon: Radio,
    description: 'Pixel tracking capturing homeowners actively searching trade services.',
    contractorBenefit: 'Filters out passive scrollers before ad dollars are spent.',
    spec: 'Search & Retargeting In-Market Signals'
  },
  {
    id: 'quiz-funnel',
    number: '03',
    name: 'quiz based qualification funnel.',
    pillar: 'pay-per-result',
    category: 'Pillar 1 • Paid Engine',
    badge: '+$2k Budget Gate',
    icon: Filter,
    description: 'Multi-step qualification filtering exclusively for +$2,000 project budgets.',
    contractorBenefit: 'Instant auto-disqualification for sub-$2k repairs and tire-kickers.',
    spec: 'Dynamic Logic Branching + Geo Validation'
  },
  {
    id: 'zip-targeting',
    number: '04',
    name: 'zip code optimised targeting system.',
    pillar: 'pay-per-result',
    category: 'Pillar 1 • Paid Engine',
    badge: 'Geo-Fenced Radius',
    icon: MapPin,
    description: 'Strict geo-fencing limited to your crew’s profitable service radius.',
    contractorBenefit: 'No travel burn or wasted truck mileage outside your zone.',
    spec: 'Postcode / Zip Radius Exclusion Matrix'
  },

  // PILLAR 2: ORGANIC SOCIAL MEDIA AUTHORITY
  {
    id: 'content-creation',
    number: '05',
    name: 'high quality content creation.',
    pillar: 'social-media',
    category: 'Pillar 2 • Authority',
    badge: 'Cinematic 4K',
    icon: Sparkles,
    description: 'Cinematic 4K short-form editing and before/after job site storytelling.',
    contractorBenefit: 'Turns raw site footage into high-ticket prestige assets.',
    spec: '4K Color-Graded Short Form + Sound Design'
  },
  {
    id: 'content-strategy',
    number: '06',
    name: 'objetive oriented content strategy.',
    pillar: 'social-media',
    category: 'Pillar 2 • Authority',
    badge: 'Local Trust',
    icon: Target,
    description: 'Territory content roadmap built solely to pull local estimate requests.',
    contractorBenefit: 'Homeowners recognize your trucks and trust you before meeting.',
    spec: 'Territory Search Intent & Social Proof Roadmap'
  },
  {
    id: 'scheduled-posting',
    number: '07',
    name: 'scheduled posting.',
    pillar: 'social-media',
    category: 'Pillar 2 • Authority',
    badge: '100% Hands-Free',
    icon: Calendar,
    description: 'Consistent publishing without pulling your crew away from project work.',
    contractorBenefit: 'Your social presence stays active 7 days a week on autopilot.',
    spec: 'Multi-Channel Omnipresence Buffer'
  },
  {
    id: 'organic-fuel',
    number: '08',
    name: 'organic fuel optimisation + auditing.',
    pillar: 'social-media',
    category: 'Pillar 2 • Authority',
    badge: 'Profile SEO',
    icon: Gauge,
    description: 'Local profile SEO, search indexing, and weekly reach velocity auditing.',
    contractorBenefit: 'Captures organic search traffic when locals search your trade.',
    spec: 'Instagram & TikTok Local SEO Architecture'
  },

  // SYNCHRONIZATION INTEGRATION
  {
    id: 'dm-setting',
    number: '09',
    name: 'instant reply dm setting automation.',
    pillar: 'integrated',
    category: 'Integrated Sync Engine',
    badge: '45s Dispatch',
    icon: Bot,
    description: 'Rapid-response setter workflows converting warm comments into booked dates.',
    contractorBenefit: 'Locks appointments before the lead cools down or messages a competitor.',
    spec: 'Human-in-the-Loop CRM + Calendar Sync'
  }
];

export const UniqueMechanismSector: React.FC<UniqueMechanismSectorProps> = ({ onOpenQuiz }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('blueprint');
  const [activeFilter, setActiveFilter] = useState<PillarFilter>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const pillar1Services = SERVICES.filter(s => s.pillar === 'pay-per-result');
  const pillar2Services = SERVICES.filter(s => s.pillar === 'social-media');
  const automationService = SERVICES.find(s => s.pillar === 'integrated')!;

  const filteredServices = SERVICES.filter(s => {
    if (activeFilter === 'all') return true;
    return s.pillar === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.52, 0.01, 0, 1] },
    },
  };

  return (
    <section
      id="unique-mechanism"
      className="relative py-32 sm:py-44 bg-[#000000] overflow-hidden border-t border-[#403f3f]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-[#141414] border border-[#403f3f]"
          >
            <Layers className="w-3.5 h-3.5 text-[#fffdf9]" />
            <span className="text-xs uppercase tracking-[0.12em] text-[#6f879c] font-sans font-medium">
              THE ALL-IN-ONE OFFER PACKAGE
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.25rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight"
          >
            The ShownLeads <span className="neon-silver-text">Unique Mechanism</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-xl mx-auto leading-relaxed"
          >
            Pay-per-result acquisition and organic social media management unified into one single, high-margin package for 5–12 person crews doing $30k+/mo.
          </motion.p>

          {/* Architectural View Mode Toggle */}
          <motion.div
            variants={itemVariants}
            className="mt-8 inline-flex items-center p-1 rounded-[8px] bg-[#141414] border border-[#403f3f]"
          >
            <button
              onClick={() => setViewMode('blueprint')}
              className={`flex items-center gap-2 px-4 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans transition-all cursor-pointer ${
                viewMode === 'blueprint'
                  ? 'bg-[#fffdf9] text-[#101010] font-semibold shadow-sm'
                  : 'text-[#6f879c] hover:text-[#fffdf9] font-medium'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Dual-Pillar Blueprint</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-2 px-4 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[#fffdf9] text-[#101010] font-semibold shadow-sm'
                  : 'text-[#6f879c] hover:text-[#fffdf9] font-medium'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Interactive 9-Service Matrix</span>
            </button>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* STRUCTURAL VIEW 1: DUAL-PILLAR BLUEPRINT (Clean 2-Column)    */}
        {/* ============================================================ */}
        {viewMode === 'blueprint' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Top Operational Formula Banner */}
            <div className="mb-8 p-4 sm:p-5 rounded-[12px] bg-[#141414] border border-[#403f3f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-display">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2aff2a] animate-pulse shrink-0" />
                <span className="text-[#fffdf9]/90">
                  <strong className="text-[#fffdf9]">The Core Disconnect:</strong> Most agencies run ads to dead profiles or post content with zero ad spend. ShownLeads fuses both into one synchronized pipeline.
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#6f879c] shrink-0 uppercase tracking-wider text-[11px]">
                <span>9 Synchronized Components</span>
                <span>•</span>
                <span className="text-[#2aff2a]">Zero Retainer Splitting</span>
              </div>
            </div>

            {/* Clean Two-Column Layout (Side-by-Side Balanced Pillars) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* PILLAR 1: PAY-PER-RESULT PAID ENGINE */}
              <div className="rounded-[15px] bg-[#141414] border border-[#403f3f] p-6 sm:p-8 flex flex-col justify-between hover:border-[#fffdf9]/30 transition-colors">
                <div>
                  {/* Pillar 1 Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#403f3f] mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#6f879c] font-display block mb-1">
                        PILLAR 01
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-[#fffdf9] font-normal">
                        Paid Performance Engine
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#181818] border border-[#333] text-[10px] text-[#2aff2a] uppercase font-display tracking-wider">
                      Demand Surge
                    </span>
                  </div>

                  <p className="text-xs text-[#fffdf9]/70 mb-6 leading-relaxed">
                    Cold homeowner demand filtered strictly for +$2,000 budgets and concentrated exclusively within your crew’s service radius.
                  </p>

                  {/* 4 Paid Services List */}
                  <div className="space-y-3.5">
                    {pillar1Services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.id}
                          className="p-4 rounded-[10px] bg-[#000000] border border-[#403f3f] hover:border-[#fffdf9]/40 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-[6px] bg-[#181818] border border-[#333] flex items-center justify-center text-[#fffdf9] shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-display text-sm text-[#fffdf9] font-normal lowercase first-letter:capitalize">
                                {service.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[#6f879c] shrink-0">
                              {service.number}
                            </span>
                          </div>
                          <p className="text-xs text-[#fffdf9]/65 pl-9 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="mt-2 pl-9 flex items-center gap-1.5 text-[10px] text-[#2aff2a] font-display">
                            <span>↳ {service.badge}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar 1 Footnote */}
                <div className="mt-6 pt-4 border-t border-[#262626] text-[11px] text-[#6f879c] font-display flex items-center justify-between">
                  <span>Guaranteed Scope: $2k+ Jobs</span>
                  <span className="text-[#fffdf9]">4 Systems Active</span>
                </div>
              </div>

              {/* PILLAR 2: ORGANIC SOCIAL MEDIA AUTHORITY */}
              <div className="rounded-[15px] bg-[#141414] border border-[#403f3f] p-6 sm:p-8 flex flex-col justify-between hover:border-[#fffdf9]/30 transition-colors">
                <div>
                  {/* Pillar 2 Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#403f3f] mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#6f879c] font-display block mb-1">
                        PILLAR 02
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-[#fffdf9] font-normal">
                        Organic Social Authority
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#181818] border border-[#333] text-[10px] text-[#fffdf9] uppercase font-display tracking-wider">
                      Trust Moat
                    </span>
                  </div>

                  <p className="text-xs text-[#fffdf9]/70 mb-6 leading-relaxed">
                    Cinematic, hands-free video storytelling that establishes brand prestige so homeowners never price-shop you against cheap handymen.
                  </p>

                  {/* 4 Social Services List */}
                  <div className="space-y-3.5">
                    {pillar2Services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.id}
                          className="p-4 rounded-[10px] bg-[#000000] border border-[#403f3f] hover:border-[#fffdf9]/40 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-[6px] bg-[#181818] border border-[#333] flex items-center justify-center text-[#fffdf9] shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-display text-sm text-[#fffdf9] font-normal lowercase first-letter:capitalize">
                                {service.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[#6f879c] shrink-0">
                              {service.number}
                            </span>
                          </div>
                          <p className="text-xs text-[#fffdf9]/65 pl-9 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="mt-2 pl-9 flex items-center gap-1.5 text-[10px] text-[#6f879c] font-display">
                            <span>↳ {service.badge}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar 2 Footnote */}
                <div className="mt-6 pt-4 border-t border-[#262626] text-[11px] text-[#6f879c] font-display flex items-center justify-between">
                  <span>Hands-Free Storytelling</span>
                  <span className="text-[#fffdf9]">4 Systems Active</span>
                </div>
              </div>
            </div>

            {/* Full-Width Integrated Synchronization Row (Module 09) */}
            <div className="mt-6 p-5 sm:p-6 rounded-[15px] bg-[#141414] border border-[#403f3f] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-[#fffdf9]/40 transition-colors">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 rounded-[8px] bg-[#000000] border border-[#403f3f] flex items-center justify-center text-[#fffdf9] shrink-0 mt-0.5 sm:mt-0">
                  <Bot className="w-5 h-5 text-[#2aff2a]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-[#6f879c]">MODULE 09</span>
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#000000] border border-[#333] text-[9px] uppercase tracking-wider text-[#2aff2a] font-display">
                      {automationService.badge}
                    </span>
                    <span className="text-xs text-[#6f879c] font-display hidden sm:inline">• {automationService.category}</span>
                  </div>
                  <h4 className="font-display text-base text-[#fffdf9] font-normal lowercase first-letter:capitalize mb-1">
                    {automationService.name}
                  </h4>
                  <p className="text-xs text-[#fffdf9]/70 leading-relaxed max-w-2xl">
                    {automationService.description} Rapid-response setter workflows convert both warm ad clicks and profile interactions into booked dates before leads cool down.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <div className="text-right hidden lg:block">
                  <span className="text-[10px] uppercase tracking-wider text-[#6f879c] font-display block">Calendar Lock</span>
                  <span className="text-xs text-[#fffdf9] font-display">Google / Outlook Sync</span>
                </div>
                <div className="px-3 py-1.5 rounded-[6px] bg-[#000000] border border-[#2aff2a]/40 text-[#2aff2a] text-xs font-display flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>&lt;45s Speed to Lead</span>
                </div>
              </div>
            </div>

            {/* Bottom Synthesis & Qualification Bar */}
            <div className="mt-8 p-6 sm:p-8 rounded-[15px] bg-[#141414] border border-[#403f3f] flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#000000] border border-[#403f3f] flex items-center justify-center text-[#2aff2a] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base text-[#fffdf9] font-normal mb-1">
                    The Result: Consistent $2k+ booked jobs with zero retainer fragmentation.
                  </h4>
                  <p className="text-xs text-[#fffdf9]/70">
                    Specifically designed for 5–12 person crews doing $30k+/mo in the US, UK, and Ireland.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.08em] font-normal text-[#101010] bg-[#fffdf9] hover:bg-transparent hover:text-[#fffdf9] border border-[#fffdf9] rounded-[5px] transition-all duration-500 cursor-pointer shrink-0 shadow-md"
              >
                <span>Check Territory Eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STRUCTURAL VIEW 2: INTERACTIVE 9-SERVICE MATRIX              */}
        {/* ============================================================ */}
        {viewMode === 'matrix' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Filter Pills & Live Metric Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#141414] border border-[#403f3f] rounded-[12px] p-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'all', label: 'All 9 Services' },
                  { key: 'pay-per-result', label: 'Paid Engine (4)' },
                  { key: 'social-media', label: 'Social Authority (4)' },
                  { key: 'integrated', label: 'Integrated Sync (1)' }
                ].map((pill) => (
                  <button
                    key={pill.key}
                    onClick={() => setActiveFilter(pill.key as PillarFilter)}
                    className={`px-3 py-1.5 rounded-[6px] text-xs uppercase tracking-[0.06em] font-display transition-all cursor-pointer border ${
                      activeFilter === pill.key
                        ? 'bg-[#fffdf9] text-[#101010] border-[#fffdf9] font-medium shadow-sm'
                        : 'bg-[#000000] text-[#6f879c] border-[#403f3f] hover:text-[#fffdf9] hover:border-[#6f879c]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#6f879c] font-display flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2aff2a] animate-pulse" />
                <span>Showing {filteredServices.length} of 9 components</span>
              </div>
            </div>

            {/* 3x3 Dynamic Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  const isExpanded = expandedId === service.id;
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="p-6 rounded-[12px] bg-[#141414] border border-[#403f3f] hover:border-[#fffdf9]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                    >
                      <div>
                        {/* Card Header: Icon, Number, Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="w-10 h-10 rounded-[8px] bg-[#000000] border border-[#403f3f] group-hover:border-[#fffdf9]/40 flex items-center justify-center text-[#fffdf9] shrink-0 transition-colors">
                            <Icon className="w-5 h-5 stroke-[1.75]" />
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-[#181818] border border-[#333] text-[#2aff2a] font-display">
                              {service.badge}
                            </span>
                            <span className="text-xs font-mono text-[#6f879c]">
                              {service.number}
                            </span>
                          </div>
                        </div>

                        {/* Exact Service Name */}
                        <h4 className="font-display text-base text-[#fffdf9] font-normal leading-snug mb-2 lowercase first-letter:capitalize group-hover:text-[#fffdf9] transition-colors">
                          {service.name}
                        </h4>

                        {/* Functional Description */}
                        <p className="text-xs text-[#fffdf9]/70 font-normal leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Contractor Business Benefit */}
                        <div className="p-3 rounded-[8px] bg-[#000000] border border-[#2b2b2b] mb-3">
                          <span className="text-[10px] uppercase tracking-wider text-[#6f879c] font-display block mb-1">
                            Contractor Outcome
                          </span>
                          <p className="text-xs text-[#fffdf9]/90 font-normal leading-relaxed">
                            {service.contractorBenefit}
                          </p>
                        </div>
                      </div>

                      {/* Technical Spec Drawer Indicator */}
                      <div className="mt-2 pt-3 border-t border-[#262626] flex items-center justify-between text-[10px] text-[#6f879c] font-display uppercase tracking-wider">
                        <span>{service.spec}</span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#6f879c] transition-transform ${isExpanded ? 'rotate-90 text-[#fffdf9]' : 'group-hover:translate-x-0.5'}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Bottom Callout & Qualification CTA */}
            <div className="mt-10 p-6 rounded-[15px] bg-[#141414] border border-[#403f3f] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3 text-xs text-[#fffdf9]/80">
                <CheckCircle2 className="w-4 h-4 text-[#2aff2a] shrink-0" />
                <span>All 9 services bundled into one transparent performance agreement.</span>
              </div>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 text-xs uppercase tracking-[0.08em] font-normal text-[#101010] bg-[#fffdf9] hover:bg-transparent hover:text-[#fffdf9] border border-[#fffdf9] rounded-[5px] transition-all duration-500 cursor-pointer shrink-0 shadow-md"
              >
                <span>Check Territory Eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
