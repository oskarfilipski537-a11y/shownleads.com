export type LanguageCode = 'en' | 'sv' | 'es' | 'de';
export type CurrencyCode = 'usd' | 'eur' | 'sek';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
  shortLabel: string;
}

export interface CurrencyOption {
  code: CurrencyCode;
  symbol: string;
  name: string;
  label: string;
  shortCode: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', shortLabel: 'EN' },
  { code: 'sv', label: 'Swedish', nativeLabel: 'Svenska', flag: '🇸🇪', shortLabel: 'SV' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸', shortLabel: 'ES' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', flag: '🇩🇪', shortLabel: 'DE' },
];

export const CURRENCIES: CurrencyOption[] = [
  { code: 'usd', symbol: '$', name: 'Dollars', label: '$ USD (Dollars)', shortCode: 'USD' },
  { code: 'eur', symbol: '€', name: 'Euros', label: '€ EUR (Euros)', shortCode: 'EUR' },
  { code: 'sek', symbol: 'kr', name: 'Swedish Krona', label: 'kr SEK (Krona)', shortCode: 'SEK' },
];

export interface FAQTranslationItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonRowTranslation {
  feature: string;
  shownLeads: string;
  others: string;
}

export interface TradeNicheTranslation {
  name: string;
  category: string;
  avgTicket: string;
}

export interface FitCheckItem {
  title: string;
  desc: string;
}

export const TRANSLATIONS = {
  en: {
    // Nav
    navHome: 'Home',
    navCompany: 'Company',
    navLeadGen: 'Lead Gen',
    navAppointments: 'Appointments',
    navOurCompanies: 'Our Companies',
    navOurServices: 'Our Services',
    navCaseStudies: 'Case Studies',
    navSeeIfYouQualify: 'See If You Qualify',
    navQualify: 'Qualify',
    navNiches: 'Niches',
    languageLabel: 'Language',
    currencyLabel: 'Currency',

    // Hero
    heroHeadlinePart1: 'WE GENERATE, QUALIFY, CALL, BOOK THE ESTIMATE, AND MAKE SURE THEY SHOW UP. YOU ONLY ',
    heroHeadlineSpan: 'PAY PER SHOWN ESTIMATE',
    heroSubhead: 'ShownLeads delivers guaranteed, pre-qualified in-home and on-site estimate appointments for home improvement companies across Ireland, the United States, and the United Kingdom. You only pay per estimate when a vetted homeowner actually sits down with your team—zero monthly retainers, zero wasted ad spend, and zero empty clicks. If they cancel or no-show, you owe $0.',
    heroBtnQualify: 'see if you qualify',
    heroBtnSpecialist: 'talk to a specialist',

    // Delivering Pay Per Estimate
    deliveringTag: 'APPOINTMENT-SETTING MODEL',
    deliveringTitle1: 'DELIVERING ',
    deliveringTitle2: 'PAY PER ESTIMATE',
    deliveringP1: 'Traditional marketing retainers charge thousands upfront before a single appointment hits your calendar. When unscreened inquiries go cold, contractors absorb wasted ad spend and drive time.',
    deliveringP2: 'Built for attic insulation contractors and business owners: we run the ads, qualify homeowners and book estimate appointments on your calendar, and you pay per appointment that shows. If they cancel or no-show, you owe $0.',
    deliveringPoint1Title: 'Pay Per Shown Appointment:',
    deliveringPoint1Desc: 'Zero monthly retainers, zero long-term contracts.',
    deliveringPoint2Title: 'Exclusive City Territory:',
    deliveringPoint2Desc: 'We partner with only 1 attic insulation contractor per city.',
    deliveringPoint3Title: '100% Retained Revenue:',
    deliveringPoint3Desc: 'You keep every dollar from every attic insulation job you close.',
    deliveringCta: 'Check City Availability',

    // Differentiation (What makes ShownLeads different)
    diffTag1: 'APPOINTMENT SETTING',
    diffTag2: 'NO SHARED LISTS',
    diffTag3: 'NO RETAINERS',
    diffTitle1: 'WHY CONTRACTORS CHOOSE SHOWNLEADS OVER ',
    diffTitle2: 'TRADITIONAL LEAD LISTS',
    diffSubhead: 'We do not sell contact lists. We run the ads, qualify homeowners and book estimate appointments on your calendar, and you pay per appointment that shows.',
    diffCol1Num: '01',
    diffCol1Title: 'QUALIFIED BOOKED ESTIMATE APPOINTMENTS',
    diffCol1Desc: 'Instead of handing over raw contact details that never pick up, we qualify homeowners through our screening steps and place booked estimate appointments directly on your calendar.',
    diffCol1Pt1: 'Homeowner & attic scope qualification',
    diffCol1Pt2: 'Direct calendar integration',
    diffCol1Pt3: 'You just show up for the estimate',
    diffCol2Num: '02',
    diffCol2Title: '100% EXCLUSIVE TO YOUR COMPANY',
    diffCol2Desc: 'Every booked estimate appointment goes strictly to your attic insulation company—never sent out to three local competitors at the same time.',
    diffCol2Pt1: 'Never shared with local competitors',
    diffCol2Pt2: 'Avoids multi-bid price-shopping',
    diffCol2Pt3: 'Protects your margins & schedule',
    diffCol3Num: '03',
    diffCol3Title: 'TARGETED ADS & HOMEOWNER FOLLOW-UP',
    diffCol3Desc: 'We run localized attic insulation ad campaigns and handle follow-up with interested homeowners, screening out renters before scheduling an appointment.',
    diffCol3Pt1: 'Localized attic insulation campaigns',
    diffCol3Pt2: 'Filters out renters and low-fit inquiries',
    diffCol3Pt3: '$0 retainers — pay per shown appointment',
    diffCta: 'Check City Availability',

    // How Pay Per Result Works
    howTitle1: 'HOW DOES PAY PER RESULT WORK WITH ',
    howTitle2: 'SHOWNLEADS',
    howP1: 'Built for attic insulation contractors and business owners. We run localized ad campaigns to reach homeowners actively looking for attic insulation estimates in your service area.',
    howP2: 'When an inquiry comes in, we follow up to confirm single-family homeownership, attic scope, and pricing fit—then place the booked estimate appointment straight onto your estimator’s calendar.',
    howPt1Title: 'Direct Follow-Up:',
    howPt1Desc: 'We qualify homeowners and coordinate scheduling for your team.',
    howPt2Title: 'Direct Calendar Sync:',
    howPt2Desc: 'Booked estimate appointments drop straight into your schedule.',
    howPt3Title: '$0 Fee on No-Shows:',
    howPt3Desc: 'You only pay when a booked estimate appointment actually shows.',
    howCta: 'Check If Your City Is Available',

    // Pay Per Result Sector / iPhone preview
    pprTag: 'BOOKED ESTIMATE APPOINTMENTS',
    pprTitle1: 'HOW IT ',
    pprTitle2: 'ACTUALLY WORKS',
    pprSubtitle: 'Booked estimate appointments placed straight onto your calendar. Here is how the workflow runs from ad to appointment.',
    pprTerritoryLocked: 'TERRITORY LOCKED',
    pprConfirmedStatus: 'BOOKED ESTIMATE APPOINTMENT',
    pprMapDisclaimer: 'Map figures and route schedule are illustrative examples.',

    // Calculator
    calcHeaderTag: 'EXAMPLE • MONTH',
    calcTitle: 'Estimate Volume Planner.',
    calcLanguageTool: 'Language Changing Tool',
    calcCurrencyTool: 'Currency Changing Tool',
    estimatesPerMonth: 'Booked estimate appointments / mo',
    payPerEstimateSubtitle: 'Illustrative monthly volume',
    dailyAdSpend: 'Daily ad spend',
    aboutPerMonth: 'About {amount} a month',
    averageJobValue: 'Average job value',
    closeRate: 'Close rate',
    closeRateSubtitle: 'Example close rate on shown sits',
    jobMargin: 'Job margin',
    jobMarginSubtitle: 'After materials and labor',
    monthlyRevenue: 'EXAMPLE MONTHLY REVENUE',
    dealsAt: '{deals} deals at {value} (interactive example)',
    netProfit: 'EXAMPLE NET PROFIT',
    totalMarketing: 'TOTAL MARKETING',
    costPerDeal: 'COST PER DEAL',
    roi: 'EXAMPLE MULTIPLIER',
    legendNetProfit: 'Net profit',
    legendMaterialsLabor: 'Materials + labor',
    legendAdSpend: 'Ad spend',
    legendEstFee: 'Est. fee (pay per shown sit)',
    lockInTerritory: 'Check your city availability',
    needMoreThan60: 'Need a custom monthly volume?',
    checkAvailability: 'Check availability.',

    // FitCheck (Caliber of partner)
    fitCheckTag: 'PARTNER CRITERIA',
    fitCheckTitle1: 'BUILT FOR ATTIC ',
    fitCheckTitle2: 'INSULATION CONTRACTORS.',
    fitCheckSubtitle: 'We partner with attic insulation contractors and business owners who have active installation crews ready for booked estimate appointments.',
    fitCheckForYouHeader: 'WHO THIS IS FOR',
    fitCheckForYouBadge: 'B2B CONTRACTORS',
    fitCheckNotForYouHeader: 'WHO THIS IS NOT FOR',
    fitCheckNotForYouBadge: 'NOT A FIT',
    fitCheckForYouList: [
      { title: 'Attic Insulation Contractors & Owners', desc: 'Established insulation companies serving homeowners in a defined city' },
      { title: 'Active Crew & Estimator Capacity', desc: 'Teams ready to attend booked estimate appointments and complete installs' },
      { title: '15 to 40+ Monthly Estimate Capacity', desc: 'Prepared to handle steady weekly estimate appointments' },
      { title: 'Exclusive City Partnership', desc: 'Looking to be the only partner we work with in your city' },
      { title: 'Direct Client-Owned Ad Spend', desc: 'Running ad campaigns directly in your own ad account' }
    ],
    fitCheckNotForYouList: [
      { title: 'Homeowners or Consumers', desc: 'ShownLeads is strictly a B2B service for contractors and business owners' },
      { title: 'Territories Already Taken', desc: 'Cities already partnered with another attic insulation contractor' },
      { title: 'Solo Operators Without Capacity', desc: 'Operators unable to attend scheduled estimate visits reliably' },
      { title: 'Looking to Buy Raw Contact Lists', desc: 'We set booked estimate appointments rather than selling unscreened lists' },
      { title: 'Unwilling to Fund Ad Campaigns', desc: 'Ad spend is funded directly in your own advertising account' }
    ],
    fitCheckCta: 'Check If Your Territory Is Open',

    // Numbers Proof
    numbersTag: 'HOW PRICING & POLICY WORK',
    numbersTitle1: 'CLEAR ',
    numbersTitle2: 'TERMS',
    numbersSubtitle: 'Transparent pay-per-show pricing and territory policy for attic insulation contractors.',
    stat1Number: '$97',
    stat1Label: 'Qualified Shown Sit',
    stat1Desc: 'Booked estimate appointment where the qualified homeowner attends',
    stat2Number: '$197',
    stat2Label: 'Price-Educated Shown Sit',
    stat2Desc: 'Homeowner spoken with beforehand so pricing expectations are clear',
    stat3Number: '1',
    stat3Label: 'Contractor Per City',
    stat3Desc: 'We partner with one attic insulation company per designated city',
    stat4Number: '$0',
    stat4Label: 'Retainer & No-Show Fee',
    stat4Desc: 'If a homeowner cancels or does not show up, you owe nothing',

    // Comparison Table
    compareTag: 'HOW WE COMPARE',
    compareTitle1: 'ShownLeads vs ',
    compareTitle2: 'Traditional Agencies',
    compareSubhead: 'Traditional agencies charge flat monthly retainers regardless of attendance. We only charge per booked estimate appointment that shows.',
    compareColCriteria: 'CRITERIA',
    compareColShownLeads: 'ShownLeads',
    compareColShownLeadsBadge: 'PAY-PER-SHOW',
    compareColOthers: 'Traditional Retainer',
    compareColOthersBadge: 'FLAT FEE',
    compareRows: [
      {
        feature: 'City Exclusivity',
        shownLeads: '1 attic insulation contractor per city. Once claimed, competitors in your area are not onboarded.',
        others: 'May work with multiple competing contractors or share inquiries across buyers.'
      },
      {
        feature: 'Pricing Model',
        shownLeads: 'Pay per appointment that shows. If the homeowner cancels or no-shows, you pay $0.',
        others: 'Monthly retainers charged regardless of whether estimate appointments show up.'
      },
      {
        feature: 'Appointment Qualification',
        shownLeads: 'Homeowners are screened on location, property ownership, and attic scope before booking.',
        others: 'Unscreened inquiry forms left for your office staff to sort through.'
      },
      {
        feature: 'Follow-Up & Scheduling',
        shownLeads: 'We handle follow-up and place booked estimate appointments directly onto your calendar.',
        others: 'Exports raw spreadsheets for you to chase after hours.'
      },
      {
        feature: 'No-Show Protection',
        shownLeads: 'Appointment confirmations and reminders beforehand, plus $0 charged on no-shows.',
        others: 'No attendance protection—you absorb the cost when homeowners are not home.'
      },
      {
        feature: 'Account Ownership',
        shownLeads: 'You keep full ownership of your ad accounts and campaign assets.',
        others: 'Agencies often manage campaigns inside agency-owned accounts.'
      }
    ],

    // Companies We Work With
    companiesTag: 'HIGH-TICKET TRADE VERTICALS',
    companiesTitle1: 'COMPANIES WE ',
    companiesTitle2: 'WORK WITH',
    companiesDesc: 'We work with sub-companies within the home improvement industry, exclusively partnering with companies with an average ticket value of minimum +$3.5k based in Ireland, US, UK, Australia, and Canada.',
    companiesBadgeTicket: 'Avg Ticket: +$3.5k Min',
    companiesBadgeLock: 'Exclusivity: 1 Partner Per Trade',
    companiesBadgeCountries: 'Ireland · US · UK · Australia · Canada',
    companiesCta: 'Check If Your Trade Is Available',
    companiesTrades: [
      { name: 'Kitchen Remodelling', category: 'Interior Remodeling', avgTicket: '$15k–$45k' },
      { name: 'Bathroom Remodelling', category: 'Interior Remodeling', avgTicket: '$8k–$25k' },
      { name: 'Construction', category: 'General Contracting', avgTicket: '$35k–$150k+' },
      { name: 'Renovation', category: 'Full Home Renovation', avgTicket: '$20k–$80k+' },
      { name: 'Epoxy Flooring', category: 'Surface Coatings', avgTicket: '$3.5k–$12k' },
      { name: 'Concrete Driveways', category: 'Concrete & Flatwork', avgTicket: '$4.5k–$18k' },
      { name: 'Asphalt', category: 'Paving & Commercial', avgTicket: '$4k–$15k' },
      { name: 'Metal Roof Replacement', category: 'Roofing & Exteriors', avgTicket: '$12k–$38k' },
      { name: 'Marble / Quartz Countertops', category: 'Stone & Countertops', avgTicket: '$4.5k–$16k' },
      { name: 'Staircase', category: 'Architectural Millwork', avgTicket: '$5k–$22k' },
      { name: 'Garage Flooring', category: 'Specialty Flooring', avgTicket: '$3.5k–$9k' },
      { name: 'Air Conditioning', category: 'HVAC & Mechanical', avgTicket: '$6k–$18k' },
      { name: 'Solar Companies', category: 'Solar Energy', avgTicket: '$18k–$45k' },
    ],

    // FAQ
    faqTag: 'COMMON QUESTIONS',
    faqTitle1: 'Frequently Asked ',
    faqTitle2: 'Questions',
    faqSubhead: 'How our high-ticket targeting, setters, and pay-per-show model work.',
    faqList: [
      {
        id: 'faq-exclusivity',
        question: '“Why do you strictly partner with only one business per niche per city?”',
        answer: 'Competing against our own clients is unethical. Once you lock in your city territory, all competitors in your trade are locked out. We never sell shared leads.'
      },
      {
        id: 'faq-territory-taken',
        question: '“What happens if a competitor in my city has already claimed our niche?”',
        answer: 'If your territory is claimed, your application cannot be accepted and you are placed on our confidential waitlist until that partner relinquishes exclusivity.'
      },
      {
        id: 'faq-1',
        question: '“Will we get low-intent tire-kickers wanting cheap quotes?”',
        answer: 'No. We target $90k+ household income zip codes and require homeowners to complete a 5-question qualification survey before an appointment can be booked.'
      },
      {
        id: 'faq-2',
        question: '“What prevents homeowners from no-showing or cancelling?”',
        answer: 'Our US-trained call center confirms every appointment within 180 seconds, followed by automated day-before and morning-of SMS reminders. We achieve a 94.6% sit-down rate.'
      },
      {
        id: 'faq-3',
        question: '“How does your targeting work?”',
        answer: 'We deploy geo-fenced intent pixels tracking homeowners actively researching roof replacements, remodels, and contractor bids in your exact driving radius.'
      },
      {
        id: 'faq-4',
        question: '“Does my crew have to chase and call leads?”',
        answer: 'Zero chasing. Our industry-trained call center handles lead intake, screening, and calendar scheduling. Your estimator simply shows up to the sit-down and quotes.'
      },
      {
        id: 'faq-5',
        question: '“How do you guarantee I won’t waste money?”',
        answer: 'You only pay per estimate when a qualified homeowner actually shows up for the estimate. If they cancel or no-show, you pay $0.'
      },
      {
        id: 'faq-6',
        question: '“What happens to leads who don’t book immediately?”',
        answer: 'Every unbooked inquiry enters an automated 60-day multi-channel nurture sequence (SMS and retargeting ads) to convert delayed projects.'
      },
      {
        id: 'faq-7',
        question: '“How is this different from traditional retainer agencies?”',
        answer: 'Traditional agencies charge $3,000–$5,000/mo whether you close jobs or not. With ShownLeads, you pay $0 retainers and only pay per estimate when a confirmed estimate takes place.'
      },
      {
        id: 'faq-8',
        question: '“What ad spend is required to get started?”',
        answer: 'A minimum of $35–$50/day directly in your client-owned ad account. Since your average job ticket is $2,000 to $15,000+, a single closed contract covers multiple months of media.'
      }
    ],

    // Footer
    footerBrandDesc: 'ShownLeads is a B2B appointment-setting service for attic insulation contractors and business owners. We run the ads, qualify homeowners and book estimate appointments on your calendar, and you pay per appointment that shows.',
    footerOperatingBadge: 'Serving Attic Insulation Contractors · US · UK · Ireland · Australia · Canada',
    footerColModels: 'Navigation',
    footerColNiches: 'Attic insulation focus',
    footerColLegal: 'Legal & Terms',
    footerColGeos: 'Operating Regions',
    footerColPartnerTitle: 'One Contractor Per City',
    footerColPartnerDesc: 'We partner with attic insulation contractors and business owners who have active installation crews ready for booked estimate appointments.',
    footerLinkHome: 'Home',
    footerLinkDelivering: 'Pay Per Estimate Model',
    footerLinkDiff: 'Why Booked Appointments',
    footerLinkHow: 'How It Works',
    footerLinkCaliber: 'Partner Qualification',
    footerLinkMetrics: 'Pricing & Terms',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions',
    footerSecurity: 'Data Security',
    footerAllRights: 'All rights reserved.',

    // Modals
    modalClose: 'Close',
    specialistTitle: 'Talk With a Senior Growth Strategist',
    specialistDesc: 'Get territory availability, custom ticket breakdown, and live funnel metrics in 15 minutes.',
    specialistNameLabel: 'Full Name',
    specialistCompanyLabel: 'Business Name',
    specialistPhoneLabel: 'Phone Number',
    specialistEmailLabel: 'Work Email',
    specialistSubmit: 'Confirm Specialist Call',
    quizStep: 'Question {current} of {total}',
    quizQualifiedTitle: 'Territory Available!',
    quizQualifiedDesc: 'Your responses match our minimum criteria ($30k+/mo, +$2k ticket, active field crew).',
    quizDisqualifiedTitle: 'Territory Currently Ineligible',
    quizDisqualifiedDesc: 'Based on your selections, we cannot offer territory exclusivity at this time.',
  },

  sv: {
    // Nav
    navHome: 'Hem',
    navCompany: 'Företag',
    navLeadGen: 'Leadgenerering',
    navAppointments: 'Bokade Möten',
    navOurCompanies: 'Våra Företag',
    navOurServices: 'Våra Tjänster',
    navCaseStudies: 'Kundcase',
    navSeeIfYouQualify: 'Se om du kvalificerar dig',
    navQualify: 'Kvalificera',
    navNiches: 'Nischer',
    languageLabel: 'Språk',
    currencyLabel: 'Valuta',

    // Hero
    heroHeadlinePart1: 'VI GENERERAR, KVALIFICERAR, RINGER, BOKAR OFFERTEN OCH SÄKERSTÄLLER ATT KUNDEN KOMMER. DU BETALAR ENDAST ',
    heroHeadlineSpan: 'PER GENOMFÖRD OFFERT',
    heroSubhead: 'ShownLeads levererar garanterade, förkvalificerade hembesök och offertbesök för hantverks- och renoveringsföretag. Du betalar endast per genomförd offert när en verifierad husägare faktiskt sätter sig ner med ditt team—inga månatliga fasta arvoden, ingen bortkastad annonsbudget och inga tomma klick. Uteblir kunden betalar du 0 kr.',
    heroBtnQualify: 'se om du kvalificerar dig',
    heroBtnSpecialist: 'prata med en specialist',

    // Delivering Pay Per Estimate
    deliveringTag: 'PRESTATIONSBASERAD MODELL',
    deliveringTitle1: 'LEVERERAR ',
    deliveringTitle2: 'BETALNING PER OFFERT',
    deliveringP1: 'Traditionella marknadsföringsbyråer kräver tiotusentals kronor i förskott varje månad innan de ens levererat ett enda jobb. När delade leads svalnar eller inte konverterar bär du hela den ekonomiska risken. Vi har eliminerat den risken fullständigt.',
    deliveringP2: 'Med ShownLeads betalar du uteslutande per genomförd offert när en verifierad villaägare sätter sig ner med er kalkylator. Uteblir eller avbokar kunden betalar du 0 kr.',
    deliveringPoint1Title: 'Betala per offert:',
    deliveringPoint1Desc: 'Noll fasta månadsarvoden, inga bindningstider.',
    deliveringPoint2Title: 'Exklusivt revirskydd:',
    deliveringPoint2Desc: 'Vi samarbetar strikt med endast 1 företag per nisch i varje stad.',
    deliveringPoint3Title: '100% behållen omsättning:',
    deliveringPoint3Desc: 'Du behåller varje enskild krona från alla vunna entreprenadavtal.',
    deliveringCta: 'Kontrollera ditt område',

    // Differentiation (What makes ShownLeads different)
    diffTag1: 'PRESTATIONSMODELL',
    diffTag2: 'INGA DELADE LEADS',
    diffTag3: 'INGA FASTA ARVODEN',
    diffTitle1: 'VAD GÖR SHOWNLEADS ANNORLUND MOT ',
    diffTitle2: 'TRADITIONELLA LEADSBOLAG',
    diffSubhead: 'Vi säljer inte leads, vi säljer kvalificerade offertmöten. Vi gör grovjobbet med förkvalificering och bokning så att du slipper jaga oseriösa offertsamlare eller kriga om pressade marginaler.',
    diffCol1Num: '01',
    diffCol1Title: 'VI SÄLJER INTE LEADS, VI SÄLJER KVALIFICERADE OFFERTER',
    diffCol1Desc: 'Till skillnad från vanliga leadsbolag som levererar kalla kontaktuppgifter som aldrig leder till jobb, gör vi grovjobbet åt dig. Vi filtrerar varje husägare genom en 2-stegs kvalificering innan de bokas direkt i din kalender för offertbesök.',
    diffCol1Pt1: '2-stegs mänsklig screeningprocess',
    diffCol1Pt2: 'Direkt synkning till din kalender',
    diffCol1Pt3: 'Du åker bara ut och räknar hem jobbet',
    diffCol2Num: '02',
    diffCol2Title: '100% EXKLUSIVT FÖR DITT FÖRETAG',
    diffCol2Desc: 'Våra offerter är 100% exklusiva för ditt bolag. Vi delar aldrig ut samma förfrågan till tre konkurrenter samtidigt vilket annars leder till prispress och priskrig.',
    diffCol2Pt1: 'Skickas aldrig till dina konkurrenter',
    diffCol2Pt2: 'Stoppar destruktiv prispress',
    diffCol2Pt3: 'Skyddar din vinstmarginal och prissättning',
    diffCol3Num: '03',
    diffCol3Title: 'BEPRÖVAD ANNONSERING & KÖPKLARA FUNNELS',
    diffCol3Desc: 'Vi använder beprövade annonskoncept och köpoptimerade trattar som attraherar rätt villaägare redan från början. Vi kör inget clickbait—varje kampanj attraherar seriösa husägare med bekräftad budget.',
    diffCol3Pt1: 'Lokalanpassat annonsmaterial av hög kvalitet',
    diffCol3Pt2: 'Filtrerar bort gör-det-självare och fönstershoppare',
    diffCol3Pt3: '0 kr fast månadsavgift — betala endast vid möte',
    diffCta: 'Kontrollera ditt område',

    // How Pay Per Result Works
    howTitle1: 'HUR FUNGERAR PAY PER RESULT MED ',
    howTitle2: 'SHOWNLEADS',
    howP1: 'För entreprenörer och företagare inom vindsisolering. Vi kör lokala annonskampanjer som når husägare som aktivt söker offert på vindsisolering i ditt område.',
    howP2: 'När en förfrågan kommer in följer vi upp för att bekräfta fastighetsägande, omfattning och prisbild—och bokar därefter offertbesöket direkt i din kalender.',
    howPt1Title: 'Direkt uppföljning:',
    howPt1Desc: 'Vi kvalificerar husägaren och samordnar bokningen för ditt team.',
    howPt2Title: 'Direkt kalendersynkronisering:',
    howPt2Desc: 'Färdiggranskade offerter läggs direkt i ditt schema.',
    howPt3Title: '0 kr avgift vid uteblivet besök:',
    howPt3Desc: 'Du betalar endast när ett bekräftat möte faktiskt äger rum.',
    howCta: 'Se om din bransch är ledig',

    // Pay Per Result Sector / iPhone preview
    pprTag: 'GARANTERAD OFFERTDISPATCH',
    pprTitle1: 'SÅ HÄR FUNGERAR DET ',
    pprTitle2: 'I PRAKTIKEN',
    pprSubtitle: 'Ett stabilt flöde av verifierade villaägare skickade direkt till din kalender. Så här ser din säljares schema ut varje morgon.',
    pprTerritoryLocked: 'REVIR LÅST',
    pprConfirmedStatus: 'BEKRÄFTAT OFFERTBESÖK',
    pprMapDisclaimer: 'Kartsiffror och körscheman är illustrativa exempel.',

    // Calculator
    calcHeaderTag: 'SLR • MÅNAD',
    calcTitle: 'Så ser en månad ut.',
    calcLanguageTool: 'Språkval / Language Tool',
    calcCurrencyTool: 'Valutaväljare / Currency Tool',
    estimatesPerMonth: 'Offerter / möten per månad',
    payPerEstimateSubtitle: 'Betala per genomförd offert',
    dailyAdSpend: 'Daglig annonsbudget',
    aboutPerMonth: 'Cirka {amount} i månaden',
    averageJobValue: 'Genomsnittligt ordervärde',
    closeRate: 'Avslutningsfrekvens (close rate)',
    closeRateSubtitle: 'Av genomförda hembesök',
    jobMargin: 'Vinstmarginal per jobb',
    jobMarginSubtitle: 'Efter material- och arbetskostnad',
    monthlyRevenue: 'MÅNADSINTÄKT',
    dealsAt: '{deals} vunna jobb á {value}',
    netProfit: 'NETTOVINST',
    totalMarketing: 'TOTAL MARKNADSFÖRING',
    costPerDeal: 'KOSTNAD PER VUNNET JOBB',
    roi: 'ROI (AVKASTNING)',
    legendNetProfit: 'Nettovinst',
    legendMaterialsLabor: 'Material + arbete',
    legendAdSpend: 'Annonskostnad',
    legendEstFee: 'Offertavgift (pay per estimate)',
    lockInTerritory: 'Lås ditt exklusiva område',
    needMoreThan60: 'Behöver du mer än 60 offerter i månaden?',
    checkAvailability: 'Kontrollera tillgänglighet.',

    // FitCheck (Caliber of partner)
    fitCheckTag: 'KRAVPROFIL OCH EXKLUSIVITETSKRAV',
    fitCheckTitle1: 'BYGGT FÖR EN SPECIFIK ',
    fitCheckTitle2: 'KALIBER AV PARTNER.',
    fitCheckSubtitle: 'Vi är mycket noggranna med vilka hantverksföretag vi samarbetar med för att skydda exklusiviteten. Vi samarbetar endast med etablerade företag som har kapacitet att hantera kontinuerliga offertvolymer.',
    fitCheckForYouHeader: 'VEM DETTA ÄR FÖR',
    fitCheckForYouBadge: 'KVALIFICERADE KRAV',
    fitCheckNotForYouHeader: 'VEM DETTA INTE ÄR FÖR',
    fitCheckNotForYouBadge: 'DISKVALIFICERING',
    fitCheckForYouList: [
      { title: 'Etablerade hantverksbolag', desc: 'Renoverings- och byggföretag med genomsnittligt ordervärde över 20 000 kr' },
      { title: 'Omsättning över 300 000 kr/mån', desc: 'Dokumenterad stabil verksamhet och pågående projektflöden' },
      { title: 'Kapacitet för 15–40+ offerter', desc: 'Aktiva team i fält redo att genomföra möten löpande' },
      { title: 'Krav på exklusivt område', desc: 'Vill vara den ENDA partnern inom sitt yrke i sin stad' },
      { title: 'Egen direkt annonsbudget', desc: 'Beredda att avsätta minst 350–500 kr/dag i eget annonskonto' }
    ],
    fitCheckNotForYouList: [
      { title: 'Områden som redan är låsta', desc: 'Städer som redan har en aktiv ShownLeads-partner i branschen' },
      { title: 'Ordervärden under 20 000 kr', desc: 'Småreparationer, vaktmästartjänster eller lågmarginaljobb' },
      { title: 'Ensamföretagare utan kapacitet', desc: 'Nystartade soloföretagare som inte hinner åka på offerter' },
      { title: 'Nöjda med att köpa delade leads', desc: 'Företag som accepterar att kriga mot 4 andra om samma lead' },
      { title: 'Ovilliga att investera i annonsering', desc: 'Söker gratistjänster utan egen kontrollerad annonssatsning' }
    ],
    fitCheckCta: 'Se om ditt område är ledigt',

    // Numbers Proof
    numbersTag: 'VILLKOR & PRISSÄTTNING',
    numbersTitle1: 'TYDLIGA ',
    numbersTitle2: 'VILLKOR',
    numbersSubtitle: 'Tydlig prissättning per genomfört besök för företag inom vindsisolering.',
    stat1Number: '$97',
    stat1Label: 'Kvalificerat Besök',
    stat1Desc: 'Bokat offertbesök där en kvalificerad husägare deltar',
    stat2Number: '$197',
    stat2Label: 'Prisinformerat Besök',
    stat2Desc: 'Husägaren har informerats om prisbilden i förväg',
    stat3Number: '1',
    stat3Label: 'Partner Per Stad',
    stat3Desc: 'Endast ett vindsisoleringsföretag per tilldelad stad',
    stat4Number: '$0',
    stat4Label: 'Fast Avgift / Vid Bom',
    stat4Desc: 'Uteblir husägaren eller avbokar betalar du ingenting',

    // Comparison Table
    compareTag: 'JÄMFÖRELSE',
    compareTitle1: 'ShownLeads mot ',
    compareTitle2: 'Traditionella Byråer',
    compareSubhead: 'Traditionella byråer tar fasta månadsarvoden oavsett resultat. Du betalar per bokat offertbesök som genomförs.',
    compareColCriteria: 'KRITERIER',
    compareColShownLeads: 'ShownLeads',
    compareColShownLeadsBadge: 'PAY-PER-SHOW',
    compareColOthers: 'Traditionell Byrå',
    compareColOthersBadge: 'FAST ARVODE',
    compareRows: [
      {
        feature: 'Områdesskydd',
        shownLeads: '1 vindsisoleringsföretag per stad. När området är bokat tar vi inte in konkurrenter.',
        others: 'Kan arbeta med flera konkurrenter eller dela förfrågningar.'
      },
      {
        feature: 'Prismodell',
        shownLeads: 'Betala per besök som blir av. Uteblir kunden betalar du $0.',
        others: 'Månadsarvoden tas ut oavsett om möten blir av eller inte.'
      },
      {
        feature: 'Kvalificering',
        shownLeads: 'Husägare kontrolleras kring fastighet, plats och vindsisolering före bokning.',
        others: 'Okvalificerade kontaktformulär som ni själva får sortera.'
      },
      {
        feature: 'Uppföljning & Bokning',
        shownLeads: 'Vi sköter uppföljning och bokar offertbesök direkt i din kalender.',
        others: 'Skickar kontaktlistor som du själv måste ringa efter jobbet.'
      },
      {
        feature: 'Skydd vid uteblivet besök',
        shownLeads: 'Bekräftelser och SMS-påminnelser i förväg samt 0 kr vid uteblivande.',
        others: 'Inget skydd om kunden inte är hemma.'
      },
      {
        feature: 'Kontoägarskap',
        shownLeads: 'Du äger dina egna annonskonton och kampanjtillgångar.',
        others: 'Hanteras ofta i byråägda annonskonton.'
      }
    ],

    // Companies We Work With
    companiesTag: 'LÖNSAMMA ENTREPRENADBRANSCHER',
    companiesTitle1: 'FÖRETAG VI ',
    companiesTitle2: 'SAMARBETAR MED',
    companiesDesc: 'Vi arbetar med underleverantörer och hantverksföretag inom hemförbättring, uteslutande med företag som har ett genomsnittligt ordervärde på minst 35 000 kr i Sverige, Irland, USA, Storbritannien, Australien och Kanada.',
    companiesBadgeTicket: 'Ordervärde: Minst 35 000 kr+',
    companiesBadgeLock: 'Exklusivitet: 1 Partner Per Bransch',
    companiesBadgeCountries: 'Sverige · Irland · USA · Storbritannien · Australien · Kanada',
    companiesCta: 'Se om din bransch är ledig',
    companiesTrades: [
      { name: 'Köksrenovering', category: 'Invändig renovering', avgTicket: '150 000–450 000 kr' },
      { name: 'Badrumsrenovering', category: 'Invändig renovering', avgTicket: '80 000–250 000 kr' },
      { name: 'Bygg & Konstruktion', category: 'Totalentreprenad', avgTicket: '350 000–1 500 000 kr+' },
      { name: 'Totalrenovering', category: 'Helhusrenovering', avgTicket: '200 000–800 000 kr+' },
      { name: 'Epoxigolv', category: 'Ytbeläggningar', avgTicket: '35 000–120 000 kr' },
      { name: 'Betonguppfarter', category: 'Mark & Betong', avgTicket: '45 000–180 000 kr' },
      { name: 'Asfaltering', category: 'Beläggning & Uppfart', avgTicket: '40 000–150 000 kr' },
      { name: 'Plåttak & Takbyte', category: 'Takentreprenad', avgTicket: '120 000–380 000 kr' },
      { name: 'Marmor & Kvartsskivor', category: 'Sten & Bänkskivor', avgTicket: '45 000–160 000 kr' },
      { name: 'Trappor & Finsnickeri', category: 'Specialsnickeri', avgTicket: '50 000–220 000 kr' },
      { name: 'Garagegolv', category: 'Specialbeläggningar', avgTicket: '35 000–90 000 kr' },
      { name: 'Värmepumpar & AC', category: 'VVS & Klimatteknik', avgTicket: '60 000–180 000 kr' },
      { name: 'Solceller & Energi', category: 'Solenergi', avgTicket: '180 000–450 000 kr' },
    ],

    // FAQ
    faqTag: 'VANLIGA FRÅGOR',
    faqTitle1: 'Vanliga ',
    faqTitle2: 'Frågor',
    faqSubhead: 'Hur vår lokala målgruppsinriktning, mötesbokare och pay-per-estimate modell fungerar.',
    faqList: [
      {
        id: 'faq-exclusivity',
        question: '”Varför samarbetar ni strikt med endast ett företag per nisch per stad?”',
        answer: 'Att konkurrera mot våra egna kunder är helt oetiskt. När du har säkrat ditt stadsområde är alla konkurrenter i samma bransch uteslutna. Vi säljer aldrig delade leads.'
      },
      {
        id: 'faq-territory-taken',
        question: '”Vad händer om en konkurrent i min stad redan har tagit vårt område?”',
        answer: 'Om ditt område redan är bokat kan vi tyvärr inte acceptera din ansökan. Du placeras då på vår konfidentiella väntelista tills den aktiva partnern eventuellt avsäger sig exklusiviteten.'
      },
      {
        id: 'faq-1',
        question: '”Kommer vi att få oseriösa förfrågningar som bara jagar lägsta pris?”',
        answer: 'Nej. Vi riktar in oss mot villaområden med hög köpkraft och kräver att villaägaren fyller i ett 5-frågors kvalificeringsformulär innan en offert kan bokas.'
      },
      {
        id: 'faq-2',
        question: '”Vad hindrar villaägare från att utebli eller avboka?”',
        answer: 'Våra utbildade mötesbokare bekräftar varje bokning inom 180 sekunder, följt av automatiska SMS-påminnelser dagen innan och på morgonen. Vi uppnår 94.6% närvarograd.'
      },
      {
        id: 'faq-3',
        question: '”Hur fungerar er annonsinriktning?”',
        answer: 'Vi placerar geostyrda pixlar som spårar husägare som aktivt söker efter takbyten, renoveringar och offerter inom din exakta körradie.'
      },
      {
        id: 'faq-4',
        question: '”Måste mitt team sitta och ringa kalla leads?”',
        answer: 'Absolut inte. Vårt team hanterar hela intaget, sållningen och kalenderbokningen. Din kalkylator eller säljare åker bara ut till det bokade mötet och räknar på jobbet.'
      },
      {
        id: 'faq-5',
        question: '”Hur garanterar ni att vi inte kastar bort pengar?”',
        answer: 'Du betalar endast per genomförd offert när en godkänd husägare faktiskt sitter i mötet. Uteblir kunden eller avbokar betalar du 0 kr.'
      },
      {
        id: 'faq-6',
        question: '”Vad händer med förfrågningar som inte bokar direkt?”',
        answer: 'Alla förfrågningar som inte bokas omedelbart går in i en automatiserad 60-dagars uppföljningssekvens (SMS och retargeting-annonser) för att fånga upp framtida projekt.'
      },
      {
        id: 'faq-7',
        question: '”Hur skiljer sig detta från traditionella byråer med fast arvode?”',
        answer: 'Traditionella byråer tar 30 000–50 000 kr i månaden oavsett om du säljer något eller inte. Hos ShownLeads har du 0 kr i fast arvode och betalar uteslutande vid genomförda offertmöten.'
      },
      {
        id: 'faq-8',
        question: '”Vilken annonsbudget krävs för att komma igång?”',
        answer: 'Ett minimum på cirka 350–500 kr/dag direkt i ert eget annonskonto. Eftersom ditt genomsnittliga ordervärde ligger på 35 000 kr till över 200 000 kr täcker ett enda vunnet kontrakt flera månaders annonsering.'
      }
    ],

    // Footer
    footerBrandDesc: 'ShownLeads är en B2B-tjänst för mötesbokning åt företag och entreprenörer inom vindsisolering. Vi sköter annonsering, kvalificerar husägare och bokar offertbesök i din kalender, och du betalar per besök som genomförs.',
    footerOperatingBadge: 'För företag inom vindsisolering · USA · UK · Irland · Australien · Kanada · Sverige',
    footerColModels: 'Navigation',
    footerColNiches: 'Fokus på vindsisolering',
    footerColLegal: 'Villkor & Integritet',
    footerColGeos: 'Områden',
    footerColPartnerTitle: 'Ett Företag Per Stad',
    footerColPartnerDesc: 'Vi samarbetar med entreprenörer och företagare inom vindsisolering som har aktiva team redo för bokade offertbesök.',
    footerLinkHome: 'Hem',
    footerLinkDelivering: 'Betalning per offert',
    footerLinkDiff: 'Varför bokade besök',
    footerLinkHow: 'Så fungerar det',
    footerLinkCaliber: 'Partnerkvalificering',
    footerLinkMetrics: 'Villkor & Prissättning',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions',
    footerSecurity: 'Datasäkerhet',
    footerAllRights: 'Alla rättigheter förbehållna.',

    // Modals
    modalClose: 'Stäng',
    specialistTitle: 'Prata med en tillväxtspecialist',
    specialistDesc: 'Få besked om tillgänglighet i ditt område, anpassad kalkyl och direkt rådgivning på 15 minuter.',
    specialistNameLabel: 'Fullständigt namn',
    specialistCompanyLabel: 'Företagsnamn',
    specialistPhoneLabel: 'Telefonnummer',
    specialistEmailLabel: 'E-postadress',
    specialistSubmit: 'Bekräfta rådgivningssamtal',
    quizStep: 'Fråga {current} av {total}',
    quizQualifiedTitle: 'Området är ledigt!',
    quizQualifiedDesc: 'Ditt företag matchar våra kriterier (omsättning över 300k/mån, höga ordervärden och aktivt team).',
    quizDisqualifiedTitle: 'Området ej tillgängligt för närvarande',
    quizDisqualifiedDesc: 'Baserat på dina svar kan vi tyvärr inte erbjuda exklusivt revirskydd i dagsläget.',
  },

  es: {
    // Nav
    navHome: 'Inicio',
    navCompany: 'Empresa',
    navLeadGen: 'Captación',
    navAppointments: 'Citas',
    navOurCompanies: 'Nuestras Empresas',
    navOurServices: 'Servicios',
    navCaseStudies: 'Casos de Éxito',
    navSeeIfYouQualify: 'Descubre si calificas',
    navQualify: 'Calificar',
    navNiches: 'Nichos',
    languageLabel: 'Idioma',
    currencyLabel: 'Moneda',

    // Hero
    heroHeadlinePart1: 'GENERAMOS, CALIFICAMOS, LLAMAMOS, AGENDAMOS EL PRESUPUESTO Y ASEGURAMOS QUE ASISTAN. SOLO ',
    heroHeadlineSpan: 'PAGAS POR PRESUPUESTO REALIZADO',
    heroSubhead: 'ShownLeads ofrece visitas de presupuesto a domicilio garantizadas y precalificadas para empresas de reformas del hogar. Solo pagas por presupuesto cuando un propietario verificado se sienta con tu equipo—sin cuotas mensuales, sin gasto publicitario desperdiciado y sin clics vacíos. Si cancelan o no asisten, pagas 0€.',
    heroBtnQualify: 'descubre si calificas',
    heroBtnSpecialist: 'habla con un especialista',

    // Delivering Pay Per Estimate
    deliveringTag: 'MODELO DE RENDIMIENTO',
    deliveringTitle1: 'ENTREGANDO ',
    deliveringTitle2: 'PAGO POR PRESUPUESTO',
    deliveringP1: 'Las agencias tradicionales exigen miles de euros por adelantado antes de entregar un solo trabajo. Cuando los leads compartidos se enfrían o no convierten, tú absorbes el 100% del riesgo financiero. Nosotros eliminamos ese riesgo por completo.',
    deliveringP2: 'Con ShownLeads, solo pagas por presupuesto cuando un propietario verificado se reúne con tu tasador. Si cancelan o no asisten, debes 0€.',
    deliveringPoint1Title: 'Pago por presupuesto:',
    deliveringPoint1Desc: 'Cero cuotas mensuales fijas, cero contratos forzados.',
    deliveringPoint2Title: 'Bloqueo territorial exclusivo:',
    deliveringPoint2Desc: 'Solo nos asociamos con 1 empresa por nicho en cada ciudad.',
    deliveringPoint3Title: '100% de ingresos retenidos:',
    deliveringPoint3Desc: 'Te quedas con cada euro de cada contrato cerrado.',
    deliveringCta: 'Comprobar disponibilidad del sector',

    // Differentiation (What makes ShownLeads different)
    diffTag1: 'MODELO DE RENDIMIENTO',
    diffTag2: 'SIN LEADS COMPARTIDOS',
    diffTag3: 'SIN RETENEDORES MENSUALES',
    diffTitle1: 'QUÉ HACE DIFERENTE A SHOWNLEADS DE LAS ',
    diffTitle2: 'EMPRESAS DE PAGO POR LEAD',
    diffSubhead: 'No vendemos leads fríos, vendemos presupuestos cualificados. Hacemos el trabajo duro de filtrado y agenda para que nunca pierdas horas persiguiendo curiosos ni compitiendo con márgenes reducidos.',
    diffCol1Num: '01',
    diffCol1Title: 'NO VENDEMOS LEADS, VENDEMOS PRESUPUESTOS CUALIFICADOS',
    diffCol1Desc: 'A diferencia de las empresas de leads que solo entregan contactos que no convierten, hacemos el trabajo duro por ti: sometemos a los propietarios a un proceso de calificación de 2 pasos antes de agendarlos en tu calendario.',
    diffCol1Pt1: 'Proceso de calificación humana en 2 pasos',
    diffCol1Pt2: 'Integración directa con tu calendario',
    diffCol1Pt3: 'Tú solo asistes y cierras la venta',
    diffCol2Num: '02',
    diffCol2Title: '100% EXCLUSIVO PARA TU EMPRESA',
    diffCol2Desc: 'Mantenemos nuestros presupuestos exclusivos para tu empresa, a diferencia de las empresas que revenden el mismo contacto a 3 competidores, desatando guerras de precios.',
    diffCol2Pt1: 'Nunca se comparte con competidores',
    diffCol2Pt2: 'Evita guerras de precios a la baja',
    diffCol2Pt3: 'Protege tus márgenes y poder de fijación de precios',
    diffCol3Num: '03',
    diffCol3Title: 'ANUNCIOS PROBADOS Y EMBUDOS DE ALTA CONVERSIÓN',
    diffCol3Desc: 'Utilizamos anuncios y embudos de alta conversión que atraen a los clientes adecuados desde el primer clic. No usamos anuncios engañosos: cada campaña atrae a propietarios con presupuesto real.',
    diffCol3Pt1: 'Creatividades localizadas de alta intención',
    diffCol3Pt2: 'Filtra curiosos y personas sin presupuesto',
    diffCol3Pt3: '0€ en cuotas fijas — solo pagas por visita confirmada',
    diffCta: 'Comprobar disponibilidad del sector',

    // How Pay Per Result Works
    howTitle1: 'CÓMO FUNCIONA EL PAGO POR RESULTADO CON ',
    howTitle2: 'SHOWNLEADS',
    howP1: 'Para contratistas y propietarios de empresas de aislamiento de áticos. Publicamos anuncios locales para llegar a propietarios que buscan presupuestos en tu zona.',
    howP2: 'Cuando entra una solicitud, hacemos seguimiento para confirmar la titularidad, el alcance del ático y el presupuesto, y agendamos la cita directamente en tu calendario.',
    howPt1Title: 'Seguimiento directo:',
    howPt1Desc: 'Calificamos al propietario y coordinamos la cita para tu equipo.',
    howPt2Title: 'Sincronización directa de agenda:',
    howPt2Desc: 'Los presupuestos precalificados caen en tu calendario.',
    howPt3Title: '0€ en cancelaciones:',
    howPt3Desc: 'Solo pagas cuando la visita confirmada se lleva a cabo.',
    howCta: 'Comprobar si tu sector califica',

    // Pay Per Result Sector / iPhone preview
    pprTag: 'DESPACHO DE PRESUPUESTOS GARANTIZADO',
    pprTitle1: 'CÓMO FUNCIONA ',
    pprTitle2: 'EN LA PRÁCTICA',
    pprSubtitle: 'Un flujo continuo de propietarios verificados en tu calendario. Esto es lo que ve tu tasador cada mañana.',
    pprTerritoryLocked: 'TERRITORIO BLOQUEADO',
    pprConfirmedStatus: 'PRESUPUESTO CONFIRMADO',
    pprMapDisclaimer: 'Las cifras del mapa y rutas son ejemplos ilustrativos.',

    // Calculator
    calcHeaderTag: 'SLR • MES',
    calcTitle: 'Cómo se ve un mes.',
    calcLanguageTool: 'Herramienta de Idioma',
    calcCurrencyTool: 'Selector de Moneda',
    estimatesPerMonth: 'Presupuestos por mes',
    payPerEstimateSubtitle: 'Pago por presupuesto',
    dailyAdSpend: 'Gasto publicitario diario',
    aboutPerMonth: 'Aproximadamente {amount} al mes',
    averageJobValue: 'Valor promedio por trabajo',
    closeRate: 'Tasa de cierre',
    closeRateSubtitle: 'De visitas completadas',
    jobMargin: 'Margen del trabajo',
    jobMarginSubtitle: 'Después de materiales y mano de obra',
    monthlyRevenue: 'INGRESOS MENSUALES',
    dealsAt: '{deals} ventas cerradas a {value}',
    netProfit: 'BENEFICIO NETO',
    totalMarketing: 'MARKETING TOTAL',
    costPerDeal: 'COSTE POR VENTA',
    roi: 'ROI',
    legendNetProfit: 'Beneficio neto',
    legendMaterialsLabor: 'Materiales + mano de obra',
    legendAdSpend: 'Gasto en anuncios',
    legendEstFee: 'Tarifa (pago por presupuesto)',
    lockInTerritory: 'Bloquea tu territorio',
    needMoreThan60: '¿Necesitas más de 60 presupuestos?',
    checkAvailability: 'Consultar disponibilidad.',

    // FitCheck (Caliber of partner)
    fitCheckTag: 'PERFIL DE CLIENTE Y CUALIFICACIÓN TERRITORIAL',
    fitCheckTitle1: 'CREADO PARA UN ',
    fitCheckTitle2: 'CALIBRE ESPECÍFICO DE SOCIO.',
    fitCheckSubtitle: 'Filtramos estrictamente con quién trabajamos para proteger la exclusividad territorial. Solo nos asociamos con empresas serias capaces de gestionar un volumen constante de visitas.',
    fitCheckForYouHeader: 'PARA QUIÉN ES ESTO',
    fitCheckForYouBadge: 'REQUISITOS',
    fitCheckNotForYouHeader: 'PARA QUIÉN NO ES ESTO',
    fitCheckNotForYouBadge: 'DESCALIFICACIÓN',
    fitCheckForYouList: [
      { title: 'Contratistas y empresas consolidadas', desc: 'Empresas de reformas con proyectos mínimos superiores a 2.000€' },
      { title: 'Facturación superior a 30.000€/mes', desc: 'Ingresos operativos demostrables con proyectos continuos' },
      { title: 'Capacidad para 15 a 40+ presupuestos', desc: 'Equipos activos listos para atender visitas de forma continua' },
      { title: 'Exclusividad territorial total', desc: 'Buscando ser el ÚNICO socio en su oficio y ciudad' },
      { title: 'Inversión publicitaria directa', desc: 'Comprometidos a destinar un mínimo de 35€–50€/día en su propia cuenta' }
    ],
    fitCheckNotForYouList: [
      { title: 'Territorios ya ocupados', desc: 'Ciudades ya asignadas a un socio activo de ShownLeads' },
      { title: 'Proyectos inferiores a 2.000€', desc: 'Trabajos de manitas o reparaciones menores' },
      { title: 'Profesionales individuales sin equipo', desc: 'Trabajadores individuales sin capacidad para escalar visitas' },
      { title: 'Conformes con comprar leads compartidos', desc: 'Empresas dispuestas a competir con otros 4 profesionales' },
      { title: 'Reacios a invertir en publicidad directa', desc: 'Buscando clientes gratis sin inversión publicitaria propia' }
    ],
    fitCheckCta: 'Comprobar si tu territorio está libre',

    // Numbers Proof
    numbersTag: 'PRECIOS Y CONDICIONES',
    numbersTitle1: 'CONDICIONES ',
    numbersTitle2: 'CLARAS',
    numbersSubtitle: 'Modelo transparente de pago por cita realizada para contratistas de aislamiento de áticos.',
    stat1Number: '$97',
    stat1Label: 'Cita Calificada Realizada',
    stat1Desc: 'Cita de presupuesto agendada donde asiste el propietario calificado',
    stat2Number: '$197',
    stat2Label: 'Cita con Precio Informado',
    stat2Desc: 'Hablamos antes con el propietario para que conozca tus precios',
    stat3Number: '1',
    stat3Label: 'Contratista Por Ciudad',
    stat3Desc: 'Trabajamos solo con un contratista de aislamiento por ciudad',
    stat4Number: '$0',
    stat4Label: 'Cuota Fija / Inasistencia',
    stat4Desc: 'Si el propietario cancela o no asiste, no pagas nada',

    // Comparison Table
    compareTag: 'COMPARATIVA',
    compareTitle1: 'ShownLeads frente a ',
    compareTitle2: 'Agencias Tradicionales',
    compareSubhead: 'Las agencias tradicionales cobran cuotas fijas independientemente de la asistencia. Solo pagas por cada cita agendada que se realiza.',
    compareColCriteria: 'CRITERIO',
    compareColShownLeads: 'ShownLeads',
    compareColShownLeadsBadge: 'PAGO POR CITA',
    compareColOthers: 'Agencia Tradicional',
    compareColOthersBadge: 'CUOTA FIJA',
    compareRows: [
      {
        feature: 'Exclusividad en la Ciudad',
        shownLeads: '1 contratista de aislamiento de áticos por ciudad. No trabajamos con competidores locales.',
        others: 'Pueden trabajar con varios competidores o vender contactos repetidos.'
      },
      {
        feature: 'Modelo de Precios',
        shownLeads: 'Pagas por cita realizada. Si el propietario cancela o no asiste, pagas $0.',
        others: 'Cuotas mensuales fijas sin responsabilidad sobre la asistencia.'
      },
      {
        feature: 'Cualificación de Citas',
        shownLeads: 'Verificamos ubicación, titularidad y alcance del ático antes de agendar.',
        others: 'Formularios sin filtrar para que tu equipo los revise.'
      },
      {
        feature: 'Seguimiento y Agenda',
        shownLeads: 'Gestionamos el seguimiento y agendamos citas directamente en tu calendario.',
        others: 'Envían hojas de cálculo para que llames después de trabajar.'
      },
      {
        feature: 'Protección por Inasistencia',
        shownLeads: 'Confirmaciones y recordatorios previos por SMS, y $0 si no asiste.',
        others: 'Sin protección: asumes el coste si el propietario no está.'
      },
      {
        feature: 'Propiedad de las Cuentas',
        shownLeads: 'Conservas la propiedad total de tu cuenta publicitaria.',
        others: 'Suelen gestionar las campañas en cuentas de la agencia.'
      }
    ],

    // Companies We Work With
    companiesTag: 'NICHOS DE ALTO VALOR',
    companiesTitle1: 'EMPRESAS CON LAS QUE ',
    companiesTitle2: 'TRABAJAMOS',
    companiesDesc: 'Trabajamos con empresas especializadas del sector de reformas y mejoras del hogar, colaborando exclusivamente con compañías con un ticket promedio de al menos +3.500€ en España, Irlanda, EE. UU., Reino Unido, Australia y Canadá.',
    companiesBadgeTicket: 'Ticket Promedio: Mínimo +3.500€',
    companiesBadgeLock: 'Exclusividad: 1 Socio Por Oficio',
    companiesBadgeCountries: 'España · Irlanda · EE. UU. · Reino Unido · Australia · Canadá',
    companiesCta: 'Comprobar si tu especialidad está disponible',
    companiesTrades: [
      { name: 'Reformas de Cocinas', category: 'Reformas Interiores', avgTicket: '15.000€–45.000€' },
      { name: 'Reformas de Baños', category: 'Reformas Interiores', avgTicket: '8.000€–25.000€' },
      { name: 'Construcción y Obra', category: 'Contratación General', avgTicket: '35.000€–150.000€+' },
      { name: 'Rehabilitación Integral', category: 'Rehabilitación de Viviendas', avgTicket: '20.000€–80.000€+' },
      { name: 'Suelos de Resina Epoxi', category: 'Pavimentos Continuos', avgTicket: '3.500€–12.000€' },
      { name: 'Entradas de Hormigón', category: 'Pavimentación Exterior', avgTicket: '4.500€–18.000€' },
      { name: 'Asfalto y Viales', category: 'Pavimentación Comercial', avgTicket: '4.000€–15.000€' },
      { name: 'Sustitución de Tejados', category: 'Cubiertas y Tejados', avgTicket: '12.000€–38.000€' },
      { name: 'Encimeras de Mármol y Cuarzo', category: 'Piedra y Encimeras', avgTicket: '4.500€–16.000€' },
      { name: 'Escaleras y Carpintería', category: 'Carpintería de Diseño', avgTicket: '5.000€–22.000€' },
      { name: 'Pavimentos de Garaje', category: 'Suelos Especializados', avgTicket: '3.500€–9.000€' },
      { name: 'Climatización y Aerotermia', category: 'HVAC y Climatización', avgTicket: '6.000€–18.000€' },
      { name: 'Empresas de Energía Solar', category: 'Energía Fotovoltaica', avgTicket: '18.000€–45.000€' },
    ],

    // FAQ
    faqTag: 'PREGUNTAS FRECUENTES',
    faqTitle1: 'Preguntas ',
    faqTitle2: 'Frecuentes',
    faqSubhead: 'Cómo funciona nuestra segmentación de alta intención, llamadas de confirmación y modelo de pago por visita realizada.',
    faqList: [
      {
        id: 'faq-exclusivity',
        question: '“¿Por qué trabajan estrictamente con solo una empresa por nicho en cada ciudad?”',
        answer: 'Competir contra nuestros propios clientes es poco ético. Una vez que aseguras tu territorio, todos los competidores de tu sector quedan bloqueados. Nunca vendemos contactos compartidos.'
      },
      {
        id: 'faq-territory-taken',
        question: '“¿Qué ocurre si un competidor en mi ciudad ya ha reservado nuestro sector?”',
        answer: 'Si tu territorio ya está ocupado, no podemos aceptar tu solicitud y se te incluye en nuestra lista de espera confidencial hasta que dicho socio renuncie a la exclusividad.'
      },
      {
        id: 'faq-1',
        question: '“¿Recibiremos personas poco cualificadas que solo buscan presupuestos baratos?”',
        answer: 'No. Dirigimos las campañas a zonas residenciales con ingresos familiares superiores a 90.000€ y exigimos que los propietarios completen un cuestionario de calificación de 5 preguntas.'
      },
      {
        id: 'faq-2',
        question: '“¿Qué evita que los propietarios cancelen o no asistan a la visita?”',
        answer: 'Nuestro equipo de confirmación contacta en menos de 180 segundos, seguido de recordatorios automatizados por SMS el día anterior y la mañana de la visita. Logramos un 94.6% de asistencia.'
      },
      {
        id: 'faq-3',
        question: '“¿Cómo funciona su sistema de captación?”',
        answer: 'Implementamos píxeles de intención geolocalizados que detectan a propietarios que investigan activamente sustitución de tejados, reformas e instalaciones en tu radio de servicio.'
      },
      {
        id: 'faq-4',
        question: '“¿Tendrá mi equipo que perseguir y llamar a los contactos?”',
        answer: 'Cero llamadas frías. Nuestro equipo cualificado gestiona la recepción, el filtrado y la agenda en el calendario. Tu tasador simplemente asiste a la reunión y elabora el presupuesto.'
      },
      {
        id: 'faq-5',
        question: '“¿Cómo garantizan que no tiraré el dinero?”',
        answer: 'Solo pagas por presupuesto cuando un propietario verificado asiste a la visita. Si cancelan o no están en el domicilio, pagas 0€.'
      },
      {
        id: 'faq-6',
        question: '“¿Qué ocurre con las personas que no reservan de inmediato?”',
        answer: 'Cada consulta no agendada entra en una secuencia automatizada de seguimiento multicanal durante 60 días (SMS y anuncios de retargeting) para recuperar proyectos aplazados.'
      },
      {
        id: 'faq-7',
        question: '“¿En qué se diferencia esto de las agencias tradicionales con cuota fija?”',
        answer: 'Las agencias tradicionales cobran de 3.000€ a 5.000€ al mes consigas clientes o no. Con ShownLeads pagas 0€ en cuotas fijas y solo abonas cuando se realiza la visita presupuestaria.'
      },
      {
        id: 'faq-8',
        question: '“¿Qué inversión publicitaria se necesita para empezar?”',
        answer: 'Un mínimo de 35€–50€/día directamente en tu propia cuenta publicitaria. Dado que el ticket medio de tus trabajos oscila entre 2.000€ y más de 15.000€, un solo contrato cerrado cubre varios meses de inversión.'
      }
    ],

    // Footer
    footerBrandDesc: 'ShownLeads es un servicio B2B de concertación de citas para contratistas y propietarios de empresas de aislamiento de áticos. Gestionamos los anuncios, calificamos propietarios y agendamos citas de presupuesto en tu calendario, y pagas por cita realizada.',
    footerOperatingBadge: 'Para contratistas de aislamiento de áticos · EE. UU. · UK · Irlanda · Australia · Canadá · España',
    footerColModels: 'Navegación',
    footerColNiches: 'Enfoque en aislamiento de áticos',
    footerColLegal: 'Términos y Privacidad',
    footerColGeos: 'Zonas Operativas',
    footerColPartnerTitle: 'Un Contratista Por Ciudad',
    footerColPartnerDesc: 'Trabajamos con contratistas y propietarios de empresas de aislamiento de áticos con equipos activos listos para atender citas agendadas.',
    footerLinkHome: 'Inicio',
    footerLinkDelivering: 'Pago por presupuesto',
    footerLinkDiff: 'Por qué citas agendadas',
    footerLinkHow: 'Cómo funciona',
    footerLinkCaliber: 'Cualificación de socios',
    footerLinkMetrics: 'Precios y condiciones',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions',
    footerSecurity: 'Seguridad de Datos',
    footerAllRights: 'Todos los derechos reservados.',

    // Modals
    modalClose: 'Cerrar',
    specialistTitle: 'Habla con un estratega senior de crecimiento',
    specialistDesc: 'Consulta disponibilidad en tu zona, desglose de rentabilidad y asesoramiento directo en 15 minutos.',
    specialistNameLabel: 'Nombre y apellidos',
    specialistCompanyLabel: 'Nombre de la empresa',
    specialistPhoneLabel: 'Teléfono',
    specialistEmailLabel: 'Correo electrónico profesional',
    specialistSubmit: 'Confirmar llamada con especialista',
    quizStep: 'Pregunta {current} de {total}',
    quizQualifiedTitle: '¡Territorio disponible!',
    quizQualifiedDesc: 'Tu empresa cumple nuestros criterios (+30.000€/mes, proyectos superiores a 2.000€ y equipo activo).',
    quizDisqualifiedTitle: 'Territorio no disponible actualmente',
    quizDisqualifiedDesc: 'Según las respuestas seleccionadas, no podemos ofrecer exclusividad territorial en este momento.',
  },

  de: {
    // Nav
    navHome: 'Startseite',
    navCompany: 'Unternehmen',
    navLeadGen: 'Lead-Generierung',
    navAppointments: 'Termine',
    navOurCompanies: 'Partnerbetriebe',
    navOurServices: 'Leistungen',
    navCaseStudies: 'Fallstudien',
    navSeeIfYouQualify: 'Prüfen Sie Ihre Eignung',
    navQualify: 'Eignung',
    navNiches: 'Branchen',
    languageLabel: 'Sprache',
    currencyLabel: 'Währung',

    // Hero
    heroHeadlinePart1: 'WIR GENERIEREN, QUALIFIZIEREN, RUFEN AN, BUCHEN DEN TERMIN UND STELLEN SICHER, DASS SIE ERSCHEINEN. SIE ZAHLEN NUR ',
    heroHeadlineSpan: 'PRO KOSTENVORANSCHLAG',
    heroSubhead: 'ShownLeads liefert garantierte, vorqualifizierte Vor-Ort-Besichtigungstermine für Handwerks- und Renovierungsunternehmen. Sie zahlen nur pro Kostenvoranschlag, wenn ein geprüfter Hauseigentümer tatsächlich mit Ihrem Team am Tisch sitzt – keine monatlichen Retainer, kein verbranntes Werbebudget und keine leeren Klicks. Bei Nichterscheinen zahlen Sie 0€.',
    heroBtnQualify: 'eignung prüfen',
    heroBtnSpecialist: 'mit experten sprechen',

    // Delivering Pay Per Estimate
    deliveringTag: 'PERFORMANCE-MODELL',
    deliveringTitle1: 'VERGÜTUNG ',
    deliveringTitle2: 'PRO KOSTENVORANSCHLAG',
    deliveringP1: 'Klassische Marketingagenturen verlangen tausende Euro monatlich im Voraus, bevor auch nur ein einziger Auftrag zustande kommt. Wenn geteilte Leads kalt werden, tragen Sie das volle finanzielle Risiko. Wir haben dieses Risiko komplett abgeschafft.',
    deliveringP2: 'Mit ShownLeads zahlen Sie ausschließlich pro Kostenvoranschlag, wenn ein qualifizierter Hauseigentümer tatsächlich mit Ihrem Bauleiter am Tisch sitzt. Erscheint der Kunde nicht, zahlen Sie 0€.',
    deliveringPoint1Title: 'Zahlung pro Kostenvoranschlag:',
    deliveringPoint1Desc: 'Keine monatlichen Fixgebühren, keine Knebelverträge.',
    deliveringPoint2Title: 'Exklusiver Gebietsschutz:',
    deliveringPoint2Desc: 'Wir arbeiten pro Stadt und Gewerk strikt mit nur 1 Fachbetrieb zusammen.',
    deliveringPoint3Title: '100% eigener Umsatz:',
    deliveringPoint3Desc: 'Sie behalten jeden einzelnen Euro jedes abgeschlossenen Auftrags.',
    deliveringCta: 'Gebietseignung prüfen',

    // Differentiation (What makes ShownLeads different)
    diffTag1: 'PERFORMANCE-MODELL',
    diffTag2: 'KEINE GETEILTEN LEADS',
    diffTag3: 'KEINE MONATLICHEN FIXGEBÜHREN',
    diffTitle1: 'WAS UNTERSCHEIDET SHOWNLEADS VON ',
    diffTitle2: 'HERKÖMMLICHEN LEAD-PORTALEN',
    diffSubhead: 'Wir verkaufen keine Leads, sondern qualifizierte Vor-Ort-Termine. Wir übernehmen die aufwändige Vorqualifizierung und Terminbuchung, damit Sie keine Zeit mit Preistouristen oder Billigangeboten verschwenden.',
    diffCol1Num: '01',
    diffCol1Title: 'KEINE LEADS, SONDERN QUALIFIZIERTE TERMINE',
    diffCol1Desc: 'Im Gegensatz zu Lead-Verkäufern, die wertlose Kontakte liefern, übernehmen wir die Vorarbeit: Wir filtern jeden Eigentümer in einem 2-Stufen-Verfahren, bevor der Termin direkt in Ihren Kalender eingetragen wird.',
    diffCol1Pt1: '2-stufige persönliche Qualifizierung',
    diffCol1Pt2: 'Direkte Kalendersynchronisierung',
    diffCol1Pt3: 'Sie fahren nur hin und schließen den Auftrag ab',
    diffCol2Num: '02',
    diffCol2Title: '100% EXKLUSIV FÜR IHREN BETRIEB',
    diffCol2Desc: 'Unsere Termine sind absolut exklusiv für Ihren Betrieb. Wir verkaufen niemals dieselbe Anfrage an drei Konkurrenten gleichzeitig, was sonst unweigerlich zu ruinösem Preisdumping führt.',
    diffCol2Pt1: 'Wird niemals an Wettbewerber weitergegeben',
    diffCol2Pt2: 'Stoppt destruktiven Preiskampf',
    diffCol2Pt3: 'Schützt Ihre Marge und Preishoheit',
    diffCol3Num: '03',
    diffCol3Title: 'BEWÄHRTE ANZEIGEN & HOCHKONVERTIERENDE FUNNELS',
    diffCol3Desc: 'Wir setzen auf praxiserprobte Kampagnen, die kaufkräftige Hauseigentümer von Anfang an gezielt ansprechen. Keine Clickbait-Anzeigen – jede Kampagne filtert Eigentümer mit echtem Projektbudget heraus.',
    diffCol3Pt1: 'Hochwertige, lokal optimierte Werbemittel',
    diffCol3Pt2: 'Filtert Heimwerker und reine Preissucher aus',
    diffCol3Pt3: '0€ monatlicher Retainer – Zahlung nur bei Termin',
    diffCta: 'Gebietseignung prüfen',

    // How Pay Per Result Works
    howTitle1: 'WIE FUNKTIONIERT PAY-PER-RESULT MIT ',
    howTitle2: 'SHOWNLEADS',
    howP1: 'Für Fachbetriebe und Inhaber im Bereich Dachbodendämmung. Wir schalten lokale Anzeigen für Hauseigentümer in Ihrem Einsatzgebiet.',
    howP2: 'Geht eine Anfrage ein, übernehmen wir die Nachfassung, prüfen Eigentum und Projektumfang und tragen den gebuchten Kostenvoranschlagstermin direkt in Ihren Kalender ein.',
    howPt1Title: 'Direkte Nachfassung:',
    howPt1Desc: 'Wir qualifizieren Eigentümer und koordinieren die Terminbuchung.',
    howPt2Title: 'Direkte Terminsynchronisation:',
    howPt2Desc: 'Geprüfte Besichtigungen landen direkt in Ihrem Arbeitskalender.',
    howPt3Title: '0€ Gebühr bei Nichterscheinen:',
    howPt3Desc: 'Sie zahlen nur, wenn die Vor-Ort-Besichtigung tatsächlich stattfindet.',
    howCta: 'Prüfen Sie Ihre Branche',

    // Pay Per Result Sector / iPhone preview
    pprTag: 'GARANTIERTE TERMINABWICKLUNG',
    pprTitle1: 'SO FUNKTIONIERT ES ',
    pprTitle2: 'IN DER PRAXIS',
    pprSubtitle: 'Ein planbarer Strom geprüfter Hauseigentümer direkt in Ihrem Kalender. So startet Ihr Bauleiter jeden Morgen in den Tag.',
    pprTerritoryLocked: 'GEBIET GESICHERT',
    pprConfirmedStatus: 'TERMIN BESTÄTIGT',
    pprMapDisclaimer: 'Kartendaten und Routenplanung sind illustrative Beispiele.',

    // Calculator
    calcHeaderTag: 'SLR • MONAT',
    calcTitle: 'So sieht ein Monat aus.',
    calcLanguageTool: 'Sprachauswahl-Tool',
    calcCurrencyTool: 'Währungsauswahl',
    estimatesPerMonth: 'Kostenvoranschläge pro Monat',
    payPerEstimateSubtitle: 'Zahlung pro Kostenvoranschlag',
    dailyAdSpend: 'Tägliches Werbebudget',
    aboutPerMonth: 'Etwa {amount} im Monat',
    averageJobValue: 'Durchschnittlicher Auftragswert',
    closeRate: 'Abschlussquote',
    closeRateSubtitle: 'Der durchgeführten Vor-Ort-Termine',
    jobMargin: 'Auftragsmarge',
    jobMarginSubtitle: 'Nach Material- und Arbeitskosten',
    monthlyRevenue: 'MONATLICHER UMSATZ',
    dealsAt: '{deals} Aufträge zu je {value}',
    netProfit: 'NETTOGEWINN',
    totalMarketing: 'MARKETING GESAMT',
    costPerDeal: 'KOSTEN PRO AUFTRAG',
    roi: 'ROI',
    legendNetProfit: 'Nettogewinn',
    legendMaterialsLabor: 'Material + Arbeit',
    legendAdSpend: 'Werbeausgaben',
    legendEstFee: 'Termingebühr (Pay-per-Estimate)',
    lockInTerritory: 'Exklusivgebiet sichern',
    needMoreThan60: 'Benötigen Sie mehr als 60 Kostenvoranschläge?',
    checkAvailability: 'Verfügbarkeit prüfen.',

    // FitCheck (Caliber of partner)
    fitCheckTag: 'ANFORDERUNGSPROFIL & GEBIETSSCHUTZ',
    fitCheckTitle1: 'FÜR EINE BESTIMMTE ',
    fitCheckTitle2: 'KLASSE VON PARTNERBETRIEBEN.',
    fitCheckSubtitle: 'Wir wählen unsere Partnerbetriebe sehr sorgfältig aus, um den Gebietsschutz zu garantieren. Wir kooperieren ausschließlich mit Betrieben, die ein kontinuierliches Terminvolumen professionell abwickeln können.',
    fitCheckForYouHeader: 'FÜR WEN DIES GEEIGNET IST',
    fitCheckForYouBadge: 'QUALIFIZIERT',
    fitCheckNotForYouHeader: 'FÜR WEN DIES NICHT GEEIGNET IST',
    fitCheckNotForYouBadge: 'AUSSCHLUSSKRITERIEN',
    fitCheckForYouList: [
      { title: 'Etablierte Meister- & Fachbetriebe', desc: 'Handwerksunternehmen mit durchschnittlichen Auftragswerten ab 2.000€' },
      { title: 'Monatsumsatz ab 30.000€', desc: 'Nachweisbare Betriebsleistung mit aktiver Auftragspipeline' },
      { title: 'Kapazität für 15 bis 40+ Vor-Ort-Termine', desc: 'Aktive Montageteams bereit für stetigen Neukundenzulauf' },
      { title: 'Anspruch auf exklusiven Gebietsschutz', desc: 'Ziel, der EINZIGE Partnerbetrieb im eigenen Gewerk vor Ort zu sein' },
      { title: 'Eigenes direktes Werbebudget', desc: 'Bereitschaft, mindestens 35€–50€/Tag im eigenen Werbekonto einzusetzen' }
    ],
    fitCheckNotForYouList: [
      { title: 'Bereits vergebene Gebiete', desc: 'Städte, in denen bereits ein aktiver ShownLeads-Partner tätig ist' },
      { title: 'Auftragswerte unter 2.000€', desc: 'Reine Kleinreparaturen oder Hausmeisterdienste' },
      { title: 'Einzelkämpfer ohne Montagekapazität', desc: 'Soloselbstständige ohne personelle Kapazitäten für neue Termine' },
      { title: 'Zufrieden mit geteilten Portal-Leads', desc: 'Betriebe, die bereit sind, mit 4 Mitbewerbern um dieselbe Anfrage zu streiten' },
      { title: 'Keine Bereitschaft für Werbeinvestitionen', desc: 'Suche nach kostenlosen Vermittlungen ohne eigene Werbekontrolle' }
    ],
    fitCheckCta: 'Prüfen Sie, ob Ihr Gebiet frei ist',

    // Numbers Proof
    numbersTag: 'PREISE & KONDITIONEN',
    numbersTitle1: 'KLARE ',
    numbersTitle2: 'KONDITIONEN',
    numbersSubtitle: 'Transparente Konditionen pro wahrgenommenem Termin für Fachbetriebe der Dachbodendämmung.',
    stat1Number: '$97',
    stat1Label: 'Qualifizierter Termin',
    stat1Desc: 'Gebuchter Kostenvoranschlagstermin, den der Eigentümer wahrnimmt',
    stat2Number: '$197',
    stat2Label: 'Preisaufgeklärter Termin',
    stat2Desc: 'Eigentümer wird vorab über Ihren Preisrahmen informiert',
    stat3Number: '1',
    stat3Label: 'Partner Pro Stadt',
    stat3Desc: 'Pro Stadt arbeiten wir nur mit einem Betrieb für Dachbodendämmung',
    stat4Number: '$0',
    stat4Label: 'Retainer & Ausfallgebühr',
    stat4Desc: 'Bei Absage oder Nichterscheinen zahlen Sie nichts',

    // Comparison Table
    compareTag: 'DER DIREKTE VERGLEICH',
    compareTitle1: 'ShownLeads im Vergleich zu ',
    compareTitle2: 'Klassischen Agenturen',
    compareSubhead: 'Klassische Agenturen berechnen monatliche Pauschalen unabhängig vom Erscheinen. Bei uns zahlen Sie pro wahrgenommenem Kostenvoranschlagstermin.',
    compareColCriteria: 'KRITERIEN',
    compareColShownLeads: 'ShownLeads',
    compareColShownLeadsBadge: 'PAY-PER-SHOW',
    compareColOthers: 'Klassische Agentur',
    compareColOthersBadge: 'FIXE GEBÜHR',
    compareRows: [
      {
        feature: 'Stadtexklusivität',
        shownLeads: '1 Fachbetrieb für Dachbodendämmung pro Stadt – keine lokalen Mitbewerber.',
        others: 'Arbeiten häufig mit mehreren Wettbewerbern in derselben Region.'
      },
      {
        feature: 'Vergütungsmodell',
        shownLeads: 'Zahlung pro stattfindendem Termin. Bei Absage oder Nichterscheinen zahlen Sie $0.',
        others: 'Monatliche Fixgebühren unabhängig von der tatsächlichen Terminwahrnehmung.'
      },
      {
        feature: 'Terminqualifizierung',
        shownLeads: 'Eigentümer werden vor Buchung auf Standort, Eigentum und Umfang geprüft.',
        others: 'Ungeprüfte Kontaktformulare zum Selbst-Aussortieren.'
      },
      {
        feature: 'Nachfassung & Buchung',
        shownLeads: 'Wir übernehmen die Nachfassung und tragen Termine direkt in Ihren Kalender ein.',
        others: 'Übergabe von Tabellen zum selbstständigen Abtelefonieren.'
      },
      {
        feature: 'Schutz bei Nichterscheinen',
        shownLeads: 'Vorab-Bestätigungen und Erinnerungen per SMS sowie $0 Gebühr bei Ausfall.',
        others: 'Kein Schutz bei Abwesenheit des Eigentümers.'
      },
      {
        feature: 'Konto- und Datenhoheit',
        shownLeads: 'Sie behalten die volle Inhaberschaft Ihrer eigenen Werbekonten.',
        others: 'Kampagnen laufen häufig über agentureigene Konten.'
      }
    ],

    // Companies We Work With
    companiesTag: 'HOCHWERTIGE GEWERKE',
    companiesTitle1: 'BETRIEBE, MIT DENEN WIR ',
    companiesTitle2: 'ZUSAMMENARBEITEN',
    companiesDesc: 'Wir arbeiten mit Fachbetrieben aus dem Ausbau- und Sanierungsgewerbe zusammen – ausschließlich mit Unternehmen mit einem durchschnittlichen Auftragswert von mindestens +3.500€ in Deutschland, Irland, den USA, Großbritannien, Australien und Kanada.',
    companiesBadgeTicket: 'Auftragswert: Mind. +3.500€',
    companiesBadgeLock: 'Exklusivität: 1 Partner Pro Gewerk',
    companiesBadgeCountries: 'Deutschland · Irland · USA · UK · Australien · Kanada',
    companiesCta: 'Prüfen Sie, ob Ihr Gewerk frei ist',
    companiesTrades: [
      { name: 'Küchenrenovierung', category: 'Innenausbau', avgTicket: '15.000€–45.000€' },
      { name: 'Badsanierung', category: 'Innenausbau & Sanitär', avgTicket: '8.000€–25.000€' },
      { name: 'Bau & Rohbau', category: 'Generalbauunternehmen', avgTicket: '35.000€–150.000€+' },
      { name: 'Komplettsanierung', category: 'Gebäuderenovierung', avgTicket: '20.000€–80.000€+' },
      { name: 'Epoxidharzböden', category: 'Oberflächenbeschichtung', avgTicket: '3.500€–12.000€' },
      { name: 'Beton-Einfahrten', category: 'Betonbau & Außenanlagen', avgTicket: '4.500€–18.000€' },
      { name: 'Asphaltierung', category: 'Straßen- & Pflasterbau', avgTicket: '4.000€–15.000€' },
      { name: 'Metalldacheindeckung', category: 'Dach- & Fassadenbau', avgTicket: '12.000€–38.000€' },
      { name: 'Marmor- & Quarzarbeitsplatten', category: 'Steinmetz & Naturstein', avgTicket: '4.500€–16.000€' },
      { name: 'Treppenbau & Schreinerei', category: 'Bauschreinerei', avgTicket: '5.000€–22.000€' },
      { name: 'Garagenböden', category: 'Spezialbeschichtung', avgTicket: '3.500€–9.000€' },
      { name: 'Klimatechnik & Wärmepumpen', category: 'TGA & Klimatechnik', avgTicket: '6.000€–18.000€' },
      { name: 'Solaranlagen & Photovoltaik', category: 'Erneuerbare Energien', avgTicket: '18.000€–45.000€' },
    ],

    // FAQ
    faqTag: 'HÄUFIG GESTELLTE FRAGEN',
    faqTitle1: 'Häufig gestellte ',
    faqTitle2: 'Fragen',
    faqSubhead: 'Wie unsere lokale Zielgruppenansprache, Disponenten und das Pay-per-Estimate Modell funktionieren.',
    faqList: [
      {
        id: 'faq-exclusivity',
        question: '„Warum arbeiten Sie pro Stadt und Gewerk strikt mit nur einem Betrieb zusammen?“',
        answer: 'Gegen unsere eigenen Partnerbetriebe zu konkurrieren ist unethisch. Sobald Sie Ihr Gebiet gesichert haben, sind alle Wettbewerber Ihres Gewerks ausgeschlossen. Wir verkaufen niemals geteilte Leads.'
      },
      {
        id: 'faq-territory-taken',
        question: '„Was passiert, wenn ein Mitbewerber in meiner Stadt unsere Branche bereits besetzt hat?“',
        answer: 'Ist Ihr Gebiet bereits vergeben, können wir Ihre Bewerbung nicht annehmen. Sie werden auf unsere vertrauliche Warteliste gesetzt, bis der Partner die Exklusivität abgibt.'
      },
      {
        id: 'faq-1',
        question: '„Erhalten wir unqualifizierte Anfragen von Billigsuchern?“',
        answer: 'Nein. Wir zielen auf Postleitzahlen mit Haushaltseinkommen ab 90.000€ ab und verlangen von Hauseigentümern das Ausfüllen eines 5-Fragen-Qualifizierungsfragebogens vor der Terminbuchung.'
      },
      {
        id: 'faq-2',
        question: '„Was verhindert, dass Eigentümer nicht zum Termin erscheinen?“',
        answer: 'Unser geschultes Team bestätigt jeden Termin innerhalb von 180 Sekunden, gefolgt von automatischen SMS-Erinnerungen am Vortag und Morgen des Termins. Wir erreichen 94.6% Termintreue.'
      },
      {
        id: 'faq-3',
        question: '„Wie funktioniert die Zielgruppenansprache genau?“',
        answer: 'Wir setzen standortbezogene Absichts-Pixel ein, die Eigentümer erfassen, die in Ihrem direkten Umkreis aktiv nach Sanierungen, Bedachungen oder Handwerkerangeboten suchen.'
      },
      {
        id: 'faq-4',
        question: '„Muss mein Team kalte Leads nachtelefonieren?“',
        answer: 'Null Telefonakquise für Sie. Unser Team übernimmt Annahme, Prüfung und Kalendereintragung. Ihr Bauleiter fährt einfach zum Termin und berät vor Ort.'
      },
      {
        id: 'faq-5',
        question: '„Wie garantieren Sie, dass ich kein Geld verschwende?“',
        answer: 'Sie zahlen nur pro Kostenvoranschlag, wenn ein qualifizierter Hauseigentümer tatsächlich am Tisch sitzt. Sagt der Kunde ab oder ist nicht da, zahlen Sie 0€.'
      },
      {
        id: 'faq-6',
        question: '„Was passiert mit Interessenten, die nicht sofort einen Termin buchen?“',
        answer: 'Jede Anfrage durchläuft eine automatisierte 60-Tage-Nachfasssequenz (SMS und Retargeting-Anzeigen), um auch später startende Projekte zu sichern.'
      },
      {
        id: 'faq-7',
        question: '„Wie unterscheidet sich das von klassischen Agenturen?“',
        answer: 'Klassische Agenturen verlangen 3.000€–5.000€ im Monat, ganz gleich, ob Aufträge entstehen oder nicht. Bei ShownLeads zahlen Sie 0€ Retainer und nur bei stattfindenden Besichtigungen.'
      },
      {
        id: 'faq-8',
        question: '„Welches Werbebudget ist für den Start erforderlich?“',
        answer: 'Mindestens 35€–50€/Tag direkt in Ihrem eigenen Werbekonto. Da Ihr durchschnittlicher Auftragswert bei 2.000€ bis über 15.000€ liegt, deckt ein einziger Vertrag mehrere Monate Werbekosten.'
      }
    ],

    // Footer
    footerBrandDesc: 'ShownLeads ist ein B2B-Terminvereinbarungsservice für Fachbetriebe und Inhaber im Bereich Dachbodendämmung. Wir schalten Anzeigen, qualifizieren Hauseigentümer und buchen Kostenvoranschlagstermine direkt in Ihren Kalender – Sie zahlen pro stattfindendem Termin.',
    footerOperatingBadge: 'Für Fachbetriebe der Dachbodendämmung · USA · UK · Irland · Australien · Kanada · Deutschland',
    footerColModels: 'Navigation',
    footerColNiches: 'Fokus Dachbodendämmung',
    footerColLegal: 'Rechtliches & Datenschutz',
    footerColGeos: 'Einsatzgebiete',
    footerColPartnerTitle: 'Ein Partner Pro Stadt',
    footerColPartnerDesc: 'Wir arbeiten mit Fachbetrieben und Inhabern im Bereich Dachbodendämmung zusammen, die aktive Teams für gebuchte Termine haben.',
    footerLinkHome: 'Startseite',
    footerLinkDelivering: 'Zahlung pro Kostenvoranschlag',
    footerLinkDiff: 'Warum gebuchte Termine',
    footerLinkHow: 'So funktioniert es',
    footerLinkCaliber: 'Partnerqualifizierung',
    footerLinkMetrics: 'Preise & Bedingungen',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions',
    footerSecurity: 'Datensicherheit',
    footerAllRights: 'Alle Rechte vorbehalten.',

    // Modals
    modalClose: 'Schließen',
    specialistTitle: 'Mit einem Senior-Wachstumsstrategen sprechen',
    specialistDesc: 'Erfahren Sie Gebietsverfügbarkeit, individuelle Margenanalyse und Terminstrategie in 15 Minuten.',
    specialistNameLabel: 'Vollständiger Name',
    specialistCompanyLabel: 'Unternehmensname',
    specialistPhoneLabel: 'Telefonnummer',
    specialistEmailLabel: 'Geschäftliche E-Mail',
    specialistSubmit: 'Termin mit Experten bestätigen',
    quizStep: 'Frage {current} von {total}',
    quizQualifiedTitle: 'Gebiet verfügbar!',
    quizQualifiedDesc: 'Ihr Betrieb erfüllt unsere Kriterien (über 30k€ Monatsumsatz, hohe Auftragswerte und aktive Montagekapazität).',
    quizDisqualifiedTitle: 'Gebiet derzeit nicht verfügbar',
    quizDisqualifiedDesc: 'Basierend auf Ihren Angaben können wir derzeit leider keinen Gebietsschutz anbieten.',
  },
};
