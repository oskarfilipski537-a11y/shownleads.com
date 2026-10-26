import { QuizQuestion, ComparisonRow, TestimonialItem, FAQItem, PackageOption } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Where is your business located?",
    type: "hard",
    options: [
      { id: "us", label: "United States (US)", sublabel: "Licensed service area" },
      { id: "uk", label: "United Kingdom (UK)", sublabel: "Trade territory" },
      { id: "ire", label: "Ireland (IRE)", sublabel: "Regional trade coverage" },
      { id: "other_geo", label: "Other International", sublabel: "Outside core operating regions", isDisqualifier: true }
    ]
  },
  {
    id: 2,
    question: "What is your average project or service ticket value?",
    type: "hard",
    options: [
      { id: "under_2k", label: "Under $2,000", sublabel: "Low-ticket or handyman repairs", isDisqualifier: true },
      { id: "2k_5k", label: "$2,000 to $5,000", sublabel: "Standard contractor & service jobs" },
      { id: "5k_15k", label: "$5,000 to $15,000", sublabel: "High-ticket installations & remodels" },
      { id: "15k_plus", label: "$15,000+", sublabel: "Major commercial & luxury contracts" }
    ]
  },
  {
    id: 3,
    question: "What is your current monthly revenue?",
    type: "hard",
    options: [
      { id: "under_30k", label: "Under $30,000 / mo", sublabel: "Early-stage (below $30k minimum)", isDisqualifier: true },
      { id: "30k_50k", label: "$30,000 to $50,000 / mo", sublabel: "Core 5–12 crew growth bracket" },
      { id: "50k_100k", label: "$50,000 to $100,000 / mo", sublabel: "Multi-crew scaling phase" },
      { id: "100k_plus", label: "$100,000+ / mo", sublabel: "Established trade operation" }
    ]
  },
  {
    id: 4,
    question: "What is your current crew or team size?",
    type: "soft",
    options: [
      { id: "solo_small", label: "1 to 4 people", sublabel: "Solo operator / micro crew" },
      { id: "sweet_spot_crew", label: "5 to 12 people", sublabel: "Medium-sized crew (Sweet Spot)" },
      { id: "large_crew", label: "13+ people", sublabel: "Multi-crew regional operation" }
    ]
  },
  {
    id: 5,
    question: "Are you ready to fund a minimum of $35 to $50+/day in direct ad spend?",
    type: "hard",
    options: [
      { id: "yes_fund", label: "Yes, 100%", sublabel: "Ready to deploy direct ad spend under our client-owned account" },
      { id: "no_fund", label: "Not right now", sublabel: "Seeking organic leads only", isSoftDisqualifier: true }
    ]
  }
];

export const PACKAGE_OPTIONS: PackageOption[] = [
  {
    id: "package-a",
    name: "Option A",
    badge: "ALL-IN-ONE",
    tagline: "Social Media Management + Pay-Per-Result Ads",
    headlinePrice: "$1,000",
    pricePeriod: "/ mo management",
    performanceNote: "+ Pay per estimate",
    setupFee: "Setup: $1,800 – $4,000",
    adSpendNote: "Ad Budget: Min $35 – $50+/day",
    isPopular: true,
    features: [
      "Profiles managed: Instagram, Facebook, LinkedIn & TikTok",
      "Content creation & video editing",
      "Daily social management & posting",
      "High-intent ad campaigns",
      "Trained setters booking your calendar",
      "Live personal dashboard"
    ]
  },
  {
    id: "package-b",
    name: "Option B",
    badge: "PERFORMANCE ONLY",
    tagline: "Pay-Per-Result Model",
    headlinePrice: "$0",
    pricePeriod: "upfront retainer",
    performanceNote: "Pay per estimate ($0 on no-shows)",
    setupFee: "Setup: $0 upfront",
    adSpendNote: "Ad Budget: Min $35 – $50+/day",
    features: [
      "$0 monthly retainer or contracts",
      "Geo-fenced $90k+ income zip targeting",
      "Multi-stage qualification survey",
      "US-trained setters booking directly into route slots",
      "100% of closed contract revenue is yours"
    ]
  },
  {
    id: "package-c",
    name: "Social Media Management & Content Operation",
    badge: "ORGANIC GROWTH",
    tagline: "End-to-End Content Creation & DM Booking",
    headlinePrice: "$1,000",
    pricePeriod: "/ mo management",
    performanceNote: "$0 performance fee",
    setupFee: "Setup: $1,800 – $4,000+",
    adSpendNote: "$0 ad spend required",
    features: [
      "Profiles managed: Instagram, Facebook, LinkedIn & TikTok",
      "Full content creation & short-form video editing",
      "High-ticket ICP scriptwriting tailored to your niche",
      "Daily social management & multi-platform posting",
      "DM setter booking inbound chats into calls",
      "Monthly strategy & growth review"
    ]
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Territory Exclusivity",
    shownLeads: "Strict 1 partner per niche per city. Once claimed, all local competitors are locked out.",
    others: "Zero exclusivity. Sells the exact same lead list to 3–5 competing contractors.",
    shownLeadsHighlight: true
  },
  {
    feature: "Pricing Model",
    shownLeads: "Pay per estimate. If the homeowner no-shows or cancels, you pay $0.",
    others: "$3,000–$5,000 flat monthly retainers with zero show-up accountability.",
    shownLeadsHighlight: true
  },
  {
    feature: "Lead Quality",
    shownLeads: "5-question survey vetting homeownership, budget, and project scope.",
    others: "Auto-fill forms full of renters, DIYers, and low-ticket tire-kickers.",
    shownLeadsHighlight: true
  },
  {
    feature: "Speed to Lead",
    shownLeads: "Trained setters call in under 180 seconds while your crew is on-site.",
    others: "Dumps raw spreadsheets for you to cold-call after 10 hours on the job site.",
    shownLeadsHighlight: true
  },
  {
    feature: "Show-Up Guarantee",
    shownLeads: "94.6% sit-down rate with automated SMS reminders and route-lock confirmation.",
    others: "Zero show-up guarantee. You pay whether the homeowner is home or not.",
    shownLeadsHighlight: true
  },
  {
    feature: "Account Ownership",
    shownLeads: "100% contractor ownership of ad accounts, pixels, and customer data.",
    others: "Holds accounts and pixel data hostage upon contract cancellation.",
    shownLeadsHighlight: true
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "beauty-no8",
    company: "Beauty.no8 Training Academy",
    logoUrl: "https://res.cloudinary.com/pskmrw71/image/upload/v1789859731/beauty_at_logo.png",
    specificResult: "From 1 signup for the become a nail tech course to 15 active students",
    quote: "We were struggling to fill cohorts with just 1 signup. ShownLeads completely transformed our student intake — we scaled directly to 15 active students enrolled in our nail tech course and recurring waiting lists.",
    author: "Emma Higgins",
    role: "Founder & Master Educator",
    region: "Dublin, Ireland",
    metric: "15 Students",
    metricLabel: "Active Course Enrollments (From 1)",
    avatarInitials: "B8",
    industry: "Beauty & Training Academy",
    ticketSize: "€1,200 – €2,500 / Seat",
    timeframe: "45-Day Sprint",
    beforeStatus: [
      "Stuck at only 1 signup for the nail tech course",
      "Relying on scattered social inquiries with zero show rate",
      "Wasted spend on traditional agencies with no student guarantees"
    ],
    afterStatus: [
      "15 active, fully committed students enrolled",
      "Pre-qualified through intent-screening & financing check",
      "Full cohort classes booked out with active waiting list"
    ],
    verifiedSnippet: "Student Enrollment Record: 15 active certified trainees registered in CRM.",
    deepDive: {
      overview: "How Beauty.no8 Training Academy used ShownLeads' intent-pixelling and speed-to-lead qualification system to scale from 1 sluggish enrollment to 15 fully committed active students in their flagship nail technician certification program.",
      theChallenge: [
        "The academy's flagship nail technician certification had high local interest but was stuck at just 1 committed signup per cohort.",
        "Previous agency campaigns delivered cheap clicks and unqualified tire-kickers who ghosted when asked about course fees and schedule commitment.",
        "Academy instructors spent hours answering repetitive DMs instead of teaching and enrolling qualified students."
      ],
      theMechanism: [
        "Seasonal Intent Pixelling: Deployed hyper-targeted ad creatives reaching candidates actively researching beauty careers, career change options, and nail technician certifications.",
        "Quality Control Intake Form: Filtered applicants by schedule availability, career intent, and financing eligibility before scheduling.",
        "3-Minute Setter Speed-to-Lead: ShownLeads trained setter called applicants within 180 seconds, answering syllabus questions and confirming academy visit dates."
      ],
      theOutcome: [
        "Scaled from 1 solitary signup to 15 active, fully committed students within a single 45-day enrollment sprint.",
        "Achieved an 89% consultation show-up rate with students ready to pay or initiate course payment plans.",
        "Created a recurring intake system now generating predictable waiting lists for subsequent masterclasses."
      ],
      metricsBreakdown: [
        { label: "Course Enrollments", value: "15 Active Students (15x scale)" },
        { label: "Setter Response Time", value: "Under 3 Minutes" },
        { label: "Show-Up & Conversion Rate", value: "89% Attendance" },
        { label: "Cohort Pipeline Generated", value: "€24,500+" }
      ]
    }
  },
  {
    id: "cashel-home-improvement",
    company: "Cashel Home Improvement",
    logoUrl: "https://res.cloudinary.com/pskmrw71/image/upload/v1789859657/Gemini_Generated_Image_bbk9n3bbk9n3bbk9-Photoroom.png",
    specificResult: "From 2 small painting jobs per week to $3000 invoices twice a week",
    quote: "We used to scrape by with 2 small painting jobs a week and endless tire-kickers. ShownLeads set up our pay-per-result system and now we are locking in $3,000 invoices twice a week like clockwork.",
    author: "Sean O'Donnell",
    role: "Owner & Lead Contractor",
    region: "Cashel & Regional",
    metric: "$3,000 2x / Wk",
    metricLabel: "Invoices Twice A Week (From 2 Small Jobs)",
    avatarInitials: "CH",
    industry: "Painting & Home Improvement",
    ticketSize: "$3,000 Invoices Twice A Week",
    timeframe: "60-Day Sprint",
    beforeStatus: [
      "Constrained to 2 small painting jobs per week ($200–$500)",
      "Driving hours for free on-site quotes for bargain hunters",
      "Unpredictable cash flow with empty calendar weeks"
    ],
    afterStatus: [
      "Steady $3,000 invoices twice a week for qualified painting & renovation projects",
      "Homeowners pre-screened for budget and decision-maker presence",
      "Installation calendar locked 3 to 4 weeks in advance"
    ],
    verifiedSnippet: "Contractor CRM & Invoicing Record: Consistent $3,000 invoices twice a week logged with 0 empty weeks.",
    deepDive: {
      overview: "How Cashel Home Improvement transitioned from surviving on 2 small painting jobs per week to securing steady $3,000 invoices twice a week through ShownLeads' exclusive Pay-Per-Result qualification engine.",
      theChallenge: [
        "The business was constrained by 2 small, low-margin painting jobs per week ($200–$500 average), leaving crews underutilized.",
        "Owner spent weekends driving across the county quoting jobs for homeowners who never moved forward or were shopping bottom-dollar quotes.",
        "Traditional marketing agencies charged steep monthly retainers while delivering low-quality homeowner inquiries."
      ],
      theMechanism: [
        "Homeowner Intent Targeting: Targeted homeowners in specific postal codes searching for residential painting, exterior finishes, and renovations on Google and Meta.",
        "Strict Scope & Budget Filters: Form qualification required project scopes above $2,500 and homeownership confirmation before allowing an appointment to be booked.",
        "Immediate Setter Verification: ShownLeads appointment setters called within 3 minutes to confirm both decision-makers would be present for the on-site quote visit."
      ],
      theOutcome: [
        "Eliminated low-ticket tire-kickers and replaced them with steady $3,000 invoices twice a week contracted consistently.",
        "Secured full contractor calendar visibility 4 weeks in advance, allowing optimal crew scheduling and material bulk purchasing.",
        "Paid strictly on verified, qualified shown appointments with zero retainer overhead."
      ],
      metricsBreakdown: [
        { label: "Invoice Frequency", value: "$3,000 Twice A Week" },
        { label: "Previous Baseline", value: "2 Small Painting Jobs / Wk" },
        { label: "Quote Visit Show Rate", value: "92% Verified Show" },
        { label: "Advance Booking Horizon", value: "3-4 Weeks Out" }
      ]
    }
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-exclusivity",
    question: "“Why do you strictly partner with only one business per niche per city?”",
    answer: "Competing against our own clients is unethical. Once you lock in your city territory, all competitors in your trade are locked out. We never sell shared leads."
  },
  {
    id: "faq-territory-taken",
    question: "“What happens if a competitor in my city has already claimed our niche?”",
    answer: "If your territory is claimed, your application cannot be accepted and you are placed on our confidential waitlist until that partner relinquishes exclusivity."
  },
  {
    id: "faq-1",
    question: "“Will we get low-intent tire-kickers wanting cheap quotes?”",
    answer: "No. We target $90k+ household income zip codes and require homeowners to complete a 5-question qualification survey before an appointment can be booked."
  },
  {
    id: "faq-2",
    question: "“What prevents homeowners from no-showing or cancelling?”",
    answer: "Our US-trained call center confirms every appointment within 180 seconds, followed by automated day-before and morning-of SMS reminders. We achieve a 94.6% sit-down rate."
  },
  {
    id: "faq-3",
    question: "“How does your targeting work?”",
    answer: "We deploy geo-fenced intent pixels tracking homeowners actively researching roof replacements, remodels, and contractor bids in your exact driving radius."
  },
  {
    id: "faq-4",
    question: "“Does my crew have to chase and call leads?”",
    answer: "Zero chasing. Our industry-trained call center handles lead intake, screening, and calendar scheduling. Your estimator simply shows up to the sit-down and quotes."
  },
  {
    id: "faq-5",
    question: "“How do you guarantee I won't waste money?”",
    answer: "You only pay per estimate when a qualified homeowner actually shows up for the estimate. If they cancel or no-show, you pay $0."
  },
  {
    id: "faq-6",
    question: "“What happens to leads who don't book immediately?”",
    answer: "Every unbooked inquiry enters an automated 60-day multi-channel nurture sequence (SMS and retargeting ads) to convert delayed projects."
  },
  {
    id: "faq-7",
    question: "“How is this different from traditional retainer agencies?”",
    answer: "Traditional agencies charge $3,000–$5,000/mo whether you close jobs or not. With ShownLeads, you pay $0 retainers and only pay per estimate when a confirmed estimate takes place."
  },
  {
    id: "faq-8",
    question: "“What ad spend is required to get started?”",
    answer: "A minimum of $35–$50/day directly in your client-owned ad account. Since your average job ticket is $2,000 to $15,000+, a single closed contract covers multiple months of media."
  }
];

export const PLATFORMS_MARQUEE = [
  { name: "Meta Ads", detail: "High-Intent Video" },
  { name: "Reels & TikTok", detail: "Bespoke Content" },
  { name: "AI Search Signals", detail: "Active Buyer Cues" },
  { name: "Call Setters", detail: "Speed to Lead" },
  { name: "Target Metros", detail: "US • UK • Ireland" },
  { name: "60-Day Nurture", detail: "SMS & Retargeting" }
];

