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
    id: "callahan-custom-kitchens",
    company: "Callahan Custom Kitchens",
    author: "Mark Callahan",
    role: "Owner & Craftsman",
    region: "Denver, CO",
    industry: "Kitchen Remodelling",
    category: "partner",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg",
    metric: "$285,000",
    metricLabel: "Closed in First 30 Days",
    avatarInitials: "MC",
    specificResult: "32 shown estimates · 11 closed jobs ($285k acquired)",
    quote: "ShownLeads completely filled our calendar with high-budget homeowners. We closed 11 full kitchen renovations in our first month without touching a cold lead.",
    ticketSize: "$25,000+ Average Kitchen",
    timeframe: "First 30 Days",
    stats: {
      shownEstimates: 32,
      closedJobs: 11,
      ticketValue: "$285,000"
    },
    beforeStatus: [
      "Wasted hours calling internet leads who never picked up the phone",
      "Drove to houses only to find out people had zero budget to renovate"
    ],
    afterStatus: [
      "32 qualified homeowners met Mark at their kitchen tables",
      "Closed 11 full kitchen jobs worth $285,000 in just one month"
    ],
    verifiedSnippet: "Contractor CRM record: 32 shown sit-downs, 11 signed renovation contracts.",
    deepDive: {
      overview: "Mark wanted serious homeowners ready to remodel their kitchens. ShownLeads filled his calendar with 32 confirmed sit-downs in 30 days.",
      theChallenge: [
        "Spent evenings calling bad online leads who never answered.",
        "Drove long distances for free quotes to people who could not afford the work.",
        "Paid other marketing agencies big fees with zero guaranteed meetings."
      ],
      theMechanism: [
        "Targeted homeowners who own nice houses and want a new kitchen.",
        "Asked 5 simple questions before anyone could book a time on the calendar.",
        "Our phone team called every homeowner right away to make sure they were ready."
      ],
      theOutcome: [
        "Mark attended 32 confirmed in-home meetings with zero no-shows.",
        "Closed 11 kitchen renovation jobs worth $285,000 in one month.",
        "Paid $0 in upfront retainers—only paid for meetings that actually happened."
      ],
      metricsBreakdown: [
        { label: "Shown Estimates", value: "32 In-Home Sits" },
        { label: "Closed Jobs", value: "11 Renovation Deals" },
        { label: "Closed Revenue", value: "$285,000" },
        { label: "Close Rate", value: "34.4%" }
      ]
    }
  },
  {
    id: "miller-roofing",
    company: "Miller Roofing & Exteriors",
    author: "David Miller",
    role: "Owner",
    region: "Columbus, OH",
    industry: "Metal Roof Replacement",
    category: "partner",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg",
    metric: "$198,000",
    metricLabel: "Locked in 4 Weeks",
    avatarInitials: "DM",
    specificResult: "26 shown estimates · 9 closed jobs ($198k acquired)",
    quote: "Every single appointment showed up prepared with their budget ready. We locked in 9 high-ticket metal roof replacements within 4 weeks.",
    ticketSize: "$22,000 Average Roof",
    timeframe: "First 4 Weeks",
    stats: {
      shownEstimates: 26,
      closedJobs: 9,
      ticketValue: "$198,000"
    },
    beforeStatus: [
      "Bought shared leads where 5 roofers fought for the exact same homeowner",
      "Spent time chasing small $300 shingle patches that barely paid for gas"
    ],
    afterStatus: [
      "26 homeowners showed up ready with their budgets approved",
      "Signed 9 high-ticket metal roofs worth $198,000 in 4 weeks"
    ],
    verifiedSnippet: "Permit & CRM verification: 9 metal roof replacement contracts signed.",
    deepDive: {
      overview: "David wanted big metal roof replacement jobs instead of small patch repairs. In 4 weeks, he locked in 9 major roof replacements.",
      theChallenge: [
        "Old lead sites sold the same homeowner number to 5 different roofers.",
        "Estimators drove for miles just to quote cheap gutter fixes.",
        "Installation crew had empty days on the schedule."
      ],
      theMechanism: [
        "Filtered specifically for houses with roofs older than 15 years.",
        "Survey asked if both decision-makers would be present at the home.",
        "Sent text reminders 24 hours and 2 hours before the appointment."
      ],
      theOutcome: [
        "David completed 26 confirmed homeowner meetings.",
        "Closed 9 complete metal roof jobs for $198,000 in 4 weeks.",
        "Filled the crew's installation calendar for the next 6 weeks straight."
      ],
      metricsBreakdown: [
        { label: "Confirmed Sits", value: "26 In-Person Visits" },
        { label: "Closed Roofs", value: "9 Metal Roofs" },
        { label: "Contract Value", value: "$198,000" },
        { label: "Average Job", value: "$22,000 / Roof" }
      ]
    }
  },
  {
    id: "vance-luxury-design",
    company: "Vance Luxury Design",
    author: "Thomas & Elena Vance",
    role: "Co-Founders & Designers",
    region: "Phoenix, AZ",
    industry: "Bathroom Remodelling",
    category: "partner",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg",
    metric: "$152,000",
    metricLabel: "Master Bathrooms in 30 Days",
    avatarInitials: "TV",
    specificResult: "21 shown estimates · 8 closed jobs ($152k acquired)",
    quote: "The human setters are a game changer. We got 21 vetted sit-downs and converted 8 luxury master bathroom remodels immediately.",
    ticketSize: "$19,000 Average Bath",
    timeframe: "First 30 Days",
    stats: {
      shownEstimates: 21,
      closedJobs: 8,
      ticketValue: "$152,000"
    },
    beforeStatus: [
      "People booked free design visits online and then were not home",
      "Arrived at houses where one spouse had no idea what the remodel cost"
    ],
    afterStatus: [
      "21 vetted sit-downs with both spouses present and ready",
      "Converted 8 luxury master bathroom remodels immediately ($152k)"
    ],
    verifiedSnippet: "Project ledger: 8 luxury master bathroom contracts executed.",
    deepDive: {
      overview: "Thomas and Elena design luxury bathrooms. They used ShownLeads to meet 21 serious homeowners and closed 8 master bathroom remodels.",
      theChallenge: [
        "Homeowners booked free quotes just to get free decorating ideas.",
        "One partner was often not home, so no decision could be made.",
        "Wasted time on people who had $2,000 budgets for a $20,000 job."
      ],
      theMechanism: [
        "Our phone team called every homeowner to confirm the project budget.",
        "Confirmed both homeowners would be at the kitchen table together.",
        "Targeted homeowners living in neighborhoods with high property values."
      ],
      theOutcome: [
        "21 out of 21 homeowners welcomed them into the house ready to hire.",
        "Closed 8 luxury master bathroom projects worth $152,000.",
        "Completely stopped wasting time on tire-kickers."
      ],
      metricsBreakdown: [
        { label: "Home Sits", value: "21 Shown Visits" },
        { label: "Closed Remodels", value: "8 Master Baths" },
        { label: "Contract Revenue", value: "$152,000" },
        { label: "Average Deal", value: "$19,000 / Job" }
      ]
    }
  },
  {
    id: "apex-surface-flatwork",
    company: "Apex Surface & Flatwork",
    author: "Robert Kowalski",
    role: "Owner & Operations Lead",
    region: "Charlotte, NC",
    industry: "Epoxy & Concrete Driveways",
    category: "partner",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg",
    metric: "$134,000",
    metricLabel: "Concrete & Epoxy Projects",
    avatarInitials: "RK",
    specificResult: "34 shown estimates · 12 closed jobs ($134k acquired)",
    quote: "Zero tire-kickers or bargain hunters. 34 confirmed homeowner sits resulted in 12 concrete driveway and epoxy projects on our books.",
    ticketSize: "$11,000+ Average Job",
    timeframe: "First 30 Days",
    stats: {
      shownEstimates: 34,
      closedJobs: 12,
      ticketValue: "$134,000"
    },
    beforeStatus: [
      "Driving all weekend giving free quotes to people looking for cheap deals",
      "Renters and DIYers booking estimates with no money to spend"
    ],
    afterStatus: [
      "34 confirmed homeowner sits with zero tire-kickers",
      "Added 12 concrete driveway and epoxy projects to the books ($134k)"
    ],
    verifiedSnippet: "Operations log: 12 concrete driveway and epoxy coating jobs booked.",
    deepDive: {
      overview: "Robert needed homeowners who wanted professional concrete and epoxy floors, not cheap patch jobs. He closed 12 jobs in his first 30 days.",
      theChallenge: [
        "Drove 50 miles a day giving free quotes to people shopping for the lowest price.",
        "People failed to show up for appointments after Robert drove out.",
        "Spent more time driving and estimating than actually laying concrete."
      ],
      theMechanism: [
        "Ran ads specifically in neighborhoods with 2-car and 3-car garages.",
        "Filtered out renters before anyone could book on Robert's calendar.",
        "Clustered meetings along Robert's route so drive time was under 15 minutes."
      ],
      theOutcome: [
        "Completed 34 confirmed homeowner meetings with zero no-shows.",
        "Closed 12 concrete and epoxy jobs, adding $134,000 in new work.",
        "Cut driving time in half while doubling closed monthly sales."
      ],
      metricsBreakdown: [
        { label: "Total Sits", value: "34 Shown Estimates" },
        { label: "Jobs Won", value: "12 Closed Projects" },
        { label: "Total Booked", value: "$134,000" },
        { label: "Close Rate", value: "35.3%" }
      ]
    }
  },
  {
    id: "dallas-field-dispatch",
    company: "Dallas Remodel & Roofing",
    author: "Dallas Field Partner",
    role: "Lead Contractor (Thread #1)",
    region: "Dallas, TX",
    industry: "Renovation & Roofing",
    category: "dispatch",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg",
    metric: "$32,500",
    metricLabel: "Signed On The Spot",
    avatarInitials: "DF",
    specificResult: "Signed contract on the spot · Deposit received",
    quote: "Walked in, the homeowner had blueprints on the table and checkbook open. Contract signed and full deposit collected on visit one.",
    ticketSize: "$32,500 Single Job",
    timeframe: "Live Field Dispatch",
    stats: {
      shownEstimates: 1,
      closedJobs: 1,
      ticketValue: "$32,500"
    },
    beforeStatus: [
      "Waiting 2 to 3 weeks chasing homeowners after sending an estimate",
      "Phone calls and follow-ups going straight to voicemail"
    ],
    afterStatus: [
      "Homeowner pre-screened with budget ready at the first meeting",
      "Contract signed on the spot with deposit check collected immediately"
    ],
    verifiedSnippet: "Live WhatsApp Dispatch: Signed contract and check collected at estimate visit.",
    deepDive: {
      overview: "A real WhatsApp message sent straight from the kitchen table in Dallas, TX. The homeowner signed the contract and handed over the deposit on visit one.",
      theChallenge: [
        "Contractors usually wait weeks just to find out if a homeowner wants to do the job.",
        "Homeowners often shop around with 4 other contractors after receiving a quote.",
        "Estimators waste hours playing phone tag to get a decision."
      ],
      theMechanism: [
        "Both husband and wife were confirmed to be present together before the visit.",
        "Project budget was vetted before our phone team scheduled the appointment.",
        "Homeowner received friendly SMS reminders so they were ready for the estimator."
      ],
      theOutcome: [
        "Zero chasing and zero awkward price negotiations.",
        "Homeowner signed the contract immediately and wrote a deposit check for $32,500.",
        "Job was booked into the crew schedule that same afternoon."
      ],
      metricsBreakdown: [
        { label: "Meeting Type", value: "Pre-Screened In-Home Sit" },
        { label: "Time To Close", value: "First Visit (Zero Chasing)" },
        { label: "Contract Value", value: "$32,500 Project" },
        { label: "Status", value: "Deposit Received" }
      ]
    }
  },
  {
    id: "chicago-field-dispatch",
    company: "Chicago Premier Contracting",
    author: "Chicago Field Partner",
    role: "Operations Lead (Thread #2)",
    region: "Chicago, IL",
    industry: "Master Remodelling",
    category: "dispatch",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg",
    metric: "$48,000",
    metricLabel: "Single Remodel Agreement",
    avatarInitials: "CP",
    specificResult: "Full master remodel quote closed · Route locked",
    quote: "Full master quote closed this morning. That locks our installation crew route solid for the entire next month.",
    ticketSize: "$48,000 Master Remodel",
    timeframe: "Live Field Dispatch",
    stats: {
      shownEstimates: 1,
      closedJobs: 1,
      ticketValue: "$48,000"
    },
    beforeStatus: [
      "Empty weeks in the crew calendar between major renovation jobs",
      "Workers sitting around waiting for permits and new projects to sign"
    ],
    afterStatus: [
      "Full $48,000 master remodel closed on the very first meeting",
      "Installation route locked solid for the entire upcoming month"
    ],
    verifiedSnippet: "Live WhatsApp Dispatch: $48k master remodel confirmed, calendar route locked.",
    deepDive: {
      overview: "Live dispatch from a Chicago partner who closed a $48,000 master remodel on the first visit, locking his entire installation crew's route for the month.",
      theChallenge: [
        "Gaps in the schedule meant skilled workers sat idle waiting for new work.",
        "Driving across 3 different counties burned fuel and tired out crews.",
        "Small handyman jobs did not make enough money to cover payroll."
      ],
      theMechanism: [
        "Targeted large master bedroom and bathroom remodeling projects.",
        "Focused exclusively within 20 miles of the contractor's headquarters.",
        "Verified homeownership and ready financing before booking the visit."
      ],
      theOutcome: [
        "Homeowner approved the full remodeling project on the spot.",
        "Signed a $48,000 contract with zero discounting.",
        "Crew calendar locked for 4 weeks straight with full material orders placed."
      ],
      metricsBreakdown: [
        { label: "Job Type", value: "Full Master Remodel" },
        { label: "Contract Value", value: "$48,000 Project" },
        { label: "Route Status", value: "4 Weeks Locked" },
        { label: "Travel Distance", value: "12 Miles from Shop" }
      ]
    }
  },
  {
    id: "austin-field-dispatch",
    company: "Austin Exterior Works",
    author: "Austin Field Partner",
    role: "Owner & Estimator (Thread #3)",
    region: "Austin, TX",
    industry: "Exterior Living & Siding",
    category: "dispatch",
    imageUrl: "https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg",
    metric: "2 in 1 Day",
    metricLabel: "Deposits Taken in One Afternoon",
    avatarInitials: "AE",
    specificResult: "3 sit-downs completed in 1 day · 2 deposits taken",
    quote: "Did 3 sit-downs along the same route today. Took 2 signed deposits before dinner. The best day we've had all year.",
    ticketSize: "$19,000 Average Job",
    timeframe: "Live Field Dispatch",
    stats: {
      shownEstimates: 3,
      closedJobs: 2,
      ticketValue: "$38,000"
    },
    beforeStatus: [
      "Closing 1 job every two weeks after fighting hours of traffic",
      "Arriving at houses only to find out the homeowner forgot or canceled"
    ],
    afterStatus: [
      "Visited 3 pre-screened homes in the exact same neighborhood",
      "Took 2 signed deposits before dinner, locking $38,000 in work"
    ],
    verifiedSnippet: "Live WhatsApp Dispatch: 3 visits completed, 2 signed deposits collected same day.",
    deepDive: {
      overview: "Live WhatsApp dispatch from an Austin contractor who completed 3 neighborhood visits in one afternoon and signed 2 project deposits before dinner.",
      theChallenge: [
        "Estimator spent 3 hours in Texas traffic driving between distant houses.",
        "Often arrived at a house only to find nobody answered the door.",
        "Had to work long evenings just to get a single contract signed."
      ],
      theMechanism: [
        "Grouped all 3 appointments inside the same neighborhood on the same day.",
        "Automated SMS alerts reminded homeowners in the morning and 30 minutes before.",
        "Estimator only had to drive 10 minutes between visits."
      ],
      theOutcome: [
        "All 3 homeowners were at home, expecting the estimator.",
        "2 homeowners signed contracts and paid deposits that same afternoon.",
        "Generated $38,000 in new work in under 4 hours of field time."
      ],
      metricsBreakdown: [
        { label: "Appointments", value: "3 Sits Completed" },
        { label: "Signed Deals", value: "2 Deposits Taken" },
        { label: "Daily Revenue", value: "$38,000 in 1 Day" },
        { label: "Total Drive Time", value: "25 Minutes" }
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

