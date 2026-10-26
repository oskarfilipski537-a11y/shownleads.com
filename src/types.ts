export type AppPage = 
  | 'home' 
  | 'company' 
  | 'lead-gen' 
  | 'appointments' 
  | 'our-companies' 
  | 'our-services' 
  | 'case-studies';

export interface QuizOption {
  id: string;
  label: string;
  sublabel?: string;
  isDisqualifier?: boolean;
  isSoftDisqualifier?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'soft' | 'hard' | 'urgency';
  options: QuizOption[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, QuizOption>;
  isCompleted: boolean;
  isQualified: boolean;
  disqualificationReason?: string;
  leadEmail?: string;
  bookingDetails?: {
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    businessName: string;
  };
}

export interface ComparisonRow {
  feature: string;
  shownLeads: string;
  others: string;
  shownLeadsHighlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  region: string;
  metric: string;
  metricLabel: string;
  avatarInitials: string;
  industry?: string;
  ticketSize?: string;
  beforeStatus?: string[];
  afterStatus?: string[];
  timeframe?: string;
  verifiedSnippet?: string;
  logoUrl?: string;
  specificResult?: string;
  deepDive?: {
    overview: string;
    theChallenge: string[];
    theMechanism: string[];
    theOutcome: string[];
    metricsBreakdown: { label: string; value: string }[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PackageOption {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  headlinePrice: string;
  pricePeriod: string;
  performanceNote: string;
  setupFee: string;
  adSpendNote: string;
  isPopular?: boolean;
  features: string[];
}
