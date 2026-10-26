import React, { useState } from 'react';
import { 
  Building2, 
  ArrowLeft, 
  ArrowUpRight, 
  PhoneCall, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Wrench, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Sparkles,
  DollarSign
} from 'lucide-react';

interface OurCompaniesPageProps {
  onOpenQuiz: () => void;
  onOpenSpecialist?: () => void;
  onNavigateHome: () => void;
}

export const OurCompaniesPage: React.FC<OurCompaniesPageProps> = ({
  onOpenQuiz,
  onOpenSpecialist,
  onNavigateHome
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const companiesList = [
    {
      id: "gutters",
      name: "Gutters & Water Management",
      category: "trades",
      avgTicket: "$2,500 – $6,500",
      targetBuyer: "Homeowners with water damage, foundation erosion, or clogged wooden fascia",
      intentMechanism: "High-intent storm & seasonal damage hooks, seamless gutter estimator quiz",
      qualification: "Owner-occupied single-family home, 24-month roof/gutter age confirmation, active leak or upgrade requirement",
      icon: "🌧️"
    },
    {
      id: "basement-finishing",
      name: "Basement Finishing & Remodeling",
      category: "trades",
      avgTicket: "$25,000 – $65,000",
      targetBuyer: "Suburban families needing additional bedrooms, home theaters, gym spaces, or rental income",
      intentMechanism: "Square footage design calculator, 3D floor plan visualization lead magnets",
      qualification: "Dry basement with minimum 7ft ceiling clearance, pre-approved financing or minimum $25k liquid budget",
      icon: "🏠"
    },
    {
      id: "home-additions",
      name: "Home Additions & Second Stories",
      category: "trades",
      avgTicket: "$60,000 – $180,000+",
      targetBuyer: "Growing families who love their neighborhood but have outgrown their current square footage",
      intentMechanism: "Cost-to-build square foot comparisons vs moving/relocating calculators",
      qualification: "Single-family zoning clearance, structural feasibility check, verified budget over $50k",
      icon: "📐"
    },
    {
      id: "adu-builders",
      name: "ADU Builders (Accessory Dwelling Units)",
      category: "trades",
      avgTicket: "$90,000 – $250,000",
      targetBuyer: "Homeowners seeking rental cashflow ($1.5k–$3k/mo) or multigenerational housing for aging parents",
      intentMechanism: "Rental ROI calculator, local zoning lot setback eligibility pre-screeners",
      qualification: "Sufficient backyard lot setback, confirmed utility access, verified financing or equity",
      icon: "🏡"
    },
    {
      id: "custom-home-builders",
      name: "Custom Home Builders",
      category: "trades",
      avgTicket: "$350,000 – $1,200,000+",
      targetBuyer: "High-net-worth buyers and land owners ready to design their permanent legacy residence",
      intentMechanism: "Architectural blueprint showcases, luxury lifestyle video walkthroughs",
      qualification: "Lot ownership or under contract, documented proof of construction loan or liquid funds",
      icon: "🏛️"
    },
    {
      id: "modular-homes",
      name: "Modular & Manufactured Homes",
      category: "trades",
      avgTicket: "$80,000 – $220,000",
      targetBuyer: "Buyers seeking rapid, cost-effective new construction with guaranteed build timelines",
      intentMechanism: "Catalog downloads, site-prep delivery feasibility quizzes, fast-build timeline comparisons",
      qualification: "Land secured or actively shopping with verified credit score for manufactured home lending",
      icon: "📦"
    },
    {
      id: "staircase-railing",
      name: "Staircase & Railing Specialists",
      category: "trades",
      avgTicket: "$4,500 – $18,000",
      targetBuyer: "Modern luxury homeowners replacing dated wooden balusters with floating stairs, glass or iron railing",
      intentMechanism: "Modern aesthetic before-and-after photo carousels, instant photo quote requests",
      qualification: "Homeowner present, ready to measure within 7 days, visual design aesthetic preference chosen",
      icon: "🪜"
    },
    {
      id: "hardscaping",
      name: "Hardscaping & Outdoor Living",
      category: "exterior",
      avgTicket: "$12,000 – $45,000",
      targetBuyer: "Homeowners wanting paver patios, retaining walls, outdoor kitchens, fire pits & pergolas",
      intentMechanism: "Summer living inspiration guides, interactive backyard layout design estimators",
      qualification: "Property owner, yard size minimum 400 sq ft, minimum liquid budget of $10,000",
      icon: "🧱"
    },
    {
      id: "elevator",
      name: "Residential & Commercial Elevators",
      category: "trades",
      avgTicket: "$28,000 – $75,000",
      targetBuyer: "Aging-in-place seniors, multi-story luxury estate owners, and commercial facility managers",
      intentMechanism: "Shaftless vs hydraulic cost guides, mobility tax deduction & accessibility checklists",
      qualification: "Multistory residence with space audit, confirmed medical or luxury upgrade requirement",
      icon: "🛗"
    },
    {
      id: "concrete",
      name: "Concrete Contractors (Driveways & Slabs)",
      category: "exterior",
      avgTicket: "$5,000 – $20,000",
      targetBuyer: "Homeowners with cracked driveways, building garage slabs, or commercial parking pads",
      intentMechanism: "Square footage price estimator, stamped & decorative finish carousels",
      qualification: "Immediate access to site, minimum 600 sq ft poured project size, 30-day start window",
      icon: "🏗️"
    },
    {
      id: "septic-services",
      name: "Septic Services & Tank Replacement",
      category: "exterior",
      avgTicket: "$4,000 – $25,000",
      targetBuyer: "Rural and suburban property owners with failing drain fields, backup alerts, or real estate transfer mandates",
      intentMechanism: "Emergency inspection dispatch landing pages, municipal compliance replacement guides",
      qualification: "Immediate drain field or tank failure, property owner confirmed, permit eligibility check",
      icon: "💧"
    },
    {
      id: "it-sourcing",
      name: "IT Sourcing & Managed Tech Services",
      category: "professional",
      avgTicket: "$3,000 – $15,000 / mo",
      targetBuyer: "Mid-market CEOs, CTOs, and HR directors needing specialized engineering talent or managed cloud infrastructure",
      intentMechanism: "Account-based LinkedIn all-bound sequences, cybersecurity risk assessment audits",
      qualification: "20–250 employee headcount, active hiring or IT migration timeline under 60 days",
      icon: "💻"
    },
    {
      id: "mortgage",
      name: "Mortgage Brokers & Loan Officers",
      category: "professional",
      avgTicket: "$4,000 – $12,000 in loan fees",
      targetBuyer: "Pre-approved homebuyers, cash-out refi applicants, DSCR real estate investors",
      intentMechanism: "Rate comparison quiz, DSCR cashflow calculator, purchase pre-approval lead engines",
      qualification: "Minimum 640+ credit score, verified household income, active purchase contract or property equity",
      icon: "💳"
    },
    {
      id: "beauty-academies",
      name: "Beauty & Vocational Academies",
      category: "education",
      avgTicket: "$2,000 – $8,500 / student",
      targetBuyer: "Aspiring technicians seeking nail, lash, PMU, or aesthetics certifications to launch beauty businesses",
      intentMechanism: "Income potential career calculators, cohort countdowns, financing & student kit walkthroughs",
      qualification: "Target age 18–45, verified enrollment motivation, approved payment plan or upfront tuition",
      icon: "💄"
    },
    {
      id: "recruitment",
      name: "Executive & Specialist Recruitment",
      category: "professional",
      avgTicket: "$8,000 – $25,000 / placement",
      targetBuyer: "Companies struggling to fill niche technical, healthcare, engineering, or executive leadership seats",
      intentMechanism: "Targeted executive outreach, confidential talent market salary benchmark reports",
      qualification: "Authorized hiring manager, verified compensation budget over $80k, active open requisition",
      icon: "👔"
    },
    {
      id: "apartment-sellers",
      name: "Apartment & Multifamily Sellers",
      category: "real-estate",
      avgTicket: "$15,000 – $60,000 commission",
      targetBuyer: "Multifamily building owners, landlords looking to 1031 exchange, or distressed unit owners",
      intentMechanism: "Off-market valuation assessments, 1031 exchange tax-saving calculators, buyer pool syndications",
      qualification: "Title owner of 4+ unit multifamily property, verified equity, exploring exit within 90 days",
      icon: "🏢"
    },
    {
      id: "real-estate",
      name: "Residential Real Estate Teams",
      category: "real-estate",
      avgTicket: "$10,000 – $35,000 commission",
      targetBuyer: "High-equity move-up sellers and pre-approved jumbo buyers looking in specific neighborhoods",
      intentMechanism: "Instant home equity report, hyper-local pocket listing alerts, down-sizer equity guides",
      qualification: "Homeowner confirmed, equity verified, plans to list property within 30 to 90 days",
      icon: "🔑"
    }
  ];

  const filteredCompanies = companiesList.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.targetBuyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
            <span className="text-[#2aff2a]">Our Companies</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181d] border border-[#2e3238] shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#fffdf9]/90 font-sans font-medium">
              17 Specialized Verticals • 1 Partner Per City
            </span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-[1.04]">
            OUR SPECIALIZED <span className="neon-silver-text">COMPANIES &amp; NICHES</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#8e9aa8] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            We don&apos;t run generic campaigns. Each of our 17 industry verticals operates on bespoke buyer-intent funnels, localized qualification scripts, and fixed pay-per-result terms.
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-8">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#6f879c] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by trade (e.g. Gutters, ADU, Mortgage, Elevator)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-[8px] bg-[#14161a] border border-[#26282e] text-xs font-sans text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#2aff2a] transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: `All Verticals (${companiesList.length})` },
              { id: 'trades', label: 'Home & Structural' },
              { id: 'exterior', label: 'Exterior & Civil' },
              { id: 'professional', label: 'Financial & B2B' },
              { id: 'real-estate', label: 'Real Estate' },
              { id: 'education', label: 'Vocational Academies' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-[6px] text-xs uppercase tracking-[0.08em] font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#fffdf9] text-[#101010] shadow-sm'
                    : 'bg-[#14161a] text-[#8e9aa8] border border-[#26282e] hover:text-[#fffdf9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 17 Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCompanies.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-[16px] bg-[#121316] border border-[#26282e] hover:border-[#403f3f] transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[8px] bg-[#17191d] border border-[#2a2d33] flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded-[4px] bg-[#181a1f] border border-[#2c2f36] text-[10px] text-[#2aff2a] font-sans uppercase tracking-wider font-semibold">
                    {item.avgTicket}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg sm:text-xl text-[#fffdf9] uppercase">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-[#8e9aa8] mt-1 leading-relaxed">
                    {item.targetBuyer}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#22242a]">
                  <div className="text-[10px] uppercase tracking-wider text-[#6f879c] font-sans">
                    ShownLeads Qualification Screening:
                  </div>
                  <p className="font-sans text-xs text-[#fffdf9]/90 leading-relaxed bg-[#16181d] p-2.5 rounded-[6px] border border-[#26282e]">
                    {item.qualification}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#22242a] flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-[#2aff2a] font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a]" />
                  <span>1 Partner Per City</span>
                </div>

                <button
                  onClick={onOpenQuiz}
                  className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-[0.08em] font-medium text-[#fffdf9] hover:text-[#2aff2a] transition-colors cursor-pointer"
                >
                  <span>Check Territory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-4xl mx-auto rounded-[16px] bg-[#141414] border border-[#403f3f] p-8 sm:p-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#2e3238] text-xs uppercase tracking-[0.1em] text-[#6f879c] font-sans">
            <span>CITY TERRITORY LOCK</span>
          </div>

          <h2 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-tight mb-4">
            Is Your Trade &amp; City <span className="neon-silver-text">Still Available?</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8e9aa8] max-w-xl mx-auto leading-relaxed mb-8">
            Once a city territory is claimed in any of our 17 verticals, all local competitors are locked out permanently.
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
