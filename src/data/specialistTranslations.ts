export interface LocalizedSpecialistContent {
  badge: string;
  title: string;
  desc: string;
  marketSelectLabel: string;
  marketUS: string;
  marketEurope: string;
  nameLabel: string;
  companyLabel: string;
  cityLabel: string;
  emailLabel: string;
  phoneLabel: string;
  tradeLabel: string;
  volumeLabel: string;
  timeLabel: string;
  tradeOptions: string[];
  volumeOptions: string[];
  timeOptions: string[];
  submitBtn: string;
  successTitle: string;
  successDesc: string;
  successNote: string;
  closeBtn: string;
}

export const SPECIALIST_TRANSLATIONS: Record<'en' | 'sv' | 'es' | 'de', LocalizedSpecialistContent> = {
  en: {
    badge: '1-ON-1 STRATEGY CALL',
    title: 'Talk With a Senior Growth Strategist',
    desc: 'Get territory availability, custom ticket breakdown, and live funnel metrics in 15 minutes.',
    marketSelectLabel: 'Primary Target Market',
    marketUS: 'US & Canada',
    marketEurope: 'Ireland, UK & Europe',
    nameLabel: 'Full Name *',
    companyLabel: 'Business Name *',
    cityLabel: 'Operating Metro / City *',
    emailLabel: 'Work Email *',
    phoneLabel: 'Direct Phone Number *',
    tradeLabel: 'Primary Trade Specialty',
    volumeLabel: 'Current Monthly Revenue',
    timeLabel: 'Preferred Call Window',
    tradeOptions: [
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'Construction & Framing',
      'Full Home Renovation',
      'Epoxy Flooring',
      'Concrete Driveways',
      'Asphalt & Paving',
      'Metal Roof Replacement',
      'Marble / Quartz Countertops',
      'Staircase & Railing',
      'Garage Flooring',
      'HVAC & Air Conditioning',
      'Solar Energy',
      'Other High-Ticket Trade (+$3.5k ticket)'
    ],
    volumeOptions: [
      '$30k - $50k/mo',
      '$50k - $100k/mo',
      '$100k - $250k/mo',
      '$250k+/mo'
    ],
    timeOptions: [
      'Morning (9am - 12pm)',
      'Early Afternoon (12pm - 3pm)',
      'Late Afternoon (3pm - 6pm)'
    ],
    submitBtn: 'Confirm Specialist Strategy Call',
    successTitle: 'Briefing Confirmed!',
    successDesc: 'A Senior Strategist will review your territory parameters and reach out at your requested window.',
    successNote: 'We strictly onboard 1 contractor per niche in each city to guarantee 100% exclusive territory lock.',
    closeBtn: 'Close'
  },

  sv: {
    badge: '1-TILL-1 STRATEGISAMTAL',
    title: 'Prata med en Senior Tillväxtstrateg',
    desc: 'Få besked om områdestillgänglighet, skräddarsydd kalkyl och live-mätvärden på 15 minuter.',
    marketSelectLabel: 'Primär Marknad',
    marketUS: 'USA & Kanada',
    marketEurope: 'Sverige, Norden & UK',
    nameLabel: 'För- och efternamn *',
    companyLabel: 'Företagsnamn *',
    cityLabel: 'Verksamhetsort / Stad *',
    emailLabel: 'Företagsepost *',
    phoneLabel: 'Telefonnummer *',
    tradeLabel: 'Huvudsaklig Bransch / Nisch',
    volumeLabel: 'Nuvarande Månadsomsättning',
    timeLabel: 'Önskad samtalstid',
    tradeOptions: [
      'Köksrenovering',
      'Badrumsrenovering',
      'Bygg & Konstruktion',
      'Totalrenovering',
      'Epoxigolv',
      'Betonguppfarter',
      'Asfaltering & Mark',
      'Plåttak & Takbyte',
      'Marmor & Kvartsskivor',
      'Trappor & Finsnickeri',
      'Garagegolv',
      'Värmepumpar & AC',
      'Solceller & Energi',
      'Annan hantverksnisch (+25 000 kr ordervärde)'
    ],
    volumeOptions: [
      '300 000 – 500 000 kr/mån',
      '500 000 – 1 000 000 kr/mån',
      '1 000 000 – 2 500 000 kr/mån',
      'Över 2 500 000 kr/mån'
    ],
    timeOptions: [
      'Förmiddag (09:00 - 12:00)',
      'Lunch / Tidig eftermiddag (12:00 - 15:00)',
      'Sen eftermiddag (15:00 - 18:00)'
    ],
    submitBtn: 'Bekräfta strategisamtal',
    successTitle: 'Möte Bekräftat!',
    successDesc: 'En rådgivare granskar era områdesparametrar och kontaktar er under ert önskade tidsfönster.',
    successNote: 'Vi samarbetar strikt med endast 1 entreprenör per nisch och stad för att säkerställa 100% revirskydd.',
    closeBtn: 'Stäng'
  },

  es: {
    badge: 'SESIÓN ESTRATÉGICA 1-A-1',
    title: 'Habla con un Estratega Senior de Crecimiento',
    desc: 'Comprueba la disponibilidad de tu territorio, análisis de margen y métricas de conversión en 15 minutos.',
    marketSelectLabel: 'Mercado Principal',
    marketUS: 'EE.UU. y Canadá',
    marketEurope: 'España, Irlanda y Europa',
    nameLabel: 'Nombre y Apellidos *',
    companyLabel: 'Nombre de la Empresa *',
    cityLabel: 'Ciudad o Provincia Principal *',
    emailLabel: 'Correo de Empresa *',
    phoneLabel: 'Teléfono de Contacto *',
    tradeLabel: 'Especialidad Principal',
    volumeLabel: 'Facturación Mensual Actual',
    timeLabel: 'Franja Horaria Preferida',
    tradeOptions: [
      'Reformas de Cocinas',
      'Reformas de Baños',
      'Construcción y Obra',
      'Rehabilitación Integral',
      'Suelos de Resina Epoxi',
      'Entradas de Hormigón',
      'Asfalto y Viales',
      'Sustitución de Tejados',
      'Encimeras de Mármol y Cuarzo',
      'Escaleras y Carpintería',
      'Pavimentos de Garaje',
      'Climatización y Aerotermia',
      'Empresas de Energía Solar',
      'Otro oficio especializado (+3.500€ ticket)'
    ],
    volumeOptions: [
      '30.000€ - 50.000€/mes',
      '50.000€ - 100.000€/mes',
      '100.000€ - 250.000€/mes',
      'Más de 250.000€/mes'
    ],
    timeOptions: [
      'Mañanas (09:00 - 12:00)',
      'Mediodía (12:00 - 15:00)',
      'Tardes (15:00 - 18:00)'
    ],
    submitBtn: 'Confirmar Reunión con Estratega',
    successTitle: '¡Reunión Confirmada!',
    successDesc: 'Un estratega senior analizará tus datos de mercado y se pondrá en contacto contigo en el horario solicitado.',
    successNote: 'Colaboramos con solo 1 empresa por nicho en cada ciudad para garantizar exclusividad total.',
    closeBtn: 'Cerrar'
  },

  de: {
    badge: '1-ZU-1 STRATEGIEGESPRÄCH',
    title: 'Mit einem Senior-Wachstumsstrategen sprechen',
    desc: 'Erfahren Sie Gebietsverfügbarkeit, individuelle Margenanalyse und Terminstrategie in 15 Minuten.',
    marketSelectLabel: 'Hauptmarkt',
    marketUS: 'USA & Kanada',
    marketEurope: 'Deutschland, Österreich & Schweiz',
    nameLabel: 'Vollständiger Name *',
    companyLabel: 'Unternehmensname *',
    cityLabel: 'Einsatzgebiet / Stadt *',
    emailLabel: 'Geschäftliche E-Mail *',
    phoneLabel: 'Telefonnummer *',
    tradeLabel: 'Hauptgewerk / Spezialisierung',
    volumeLabel: 'Aktueller Monatsumsatz',
    timeLabel: 'Bevorzugtes Zeitfenster',
    tradeOptions: [
      'Küchenrenovierung',
      'Badsanierung',
      'Bau & Rohbau',
      'Komplettsanierung',
      'Epoxidharzböden',
      'Beton-Einfahrten',
      'Asphaltierung & Pflaster',
      'Metalldacheindeckung',
      'Marmor- & Quarzarbeitsplatten',
      'Treppenbau & Schreinerei',
      'Garagenböden',
      'Klimatechnik & Wärmepumpen',
      'Solaranlagen & Photovoltaik',
      'Anderes hochwertiges Gewerk (ab 3.500€)'
    ],
    volumeOptions: [
      '30.000€ - 50.000€/Monat',
      '50.000€ - 100.000€/Monat',
      '100.000€ - 250.000€/Monat',
      'Über 250.000€/Monat'
    ],
    timeOptions: [
      'Vormittags (09:00 - 12:00 Uhr)',
      'Mittags (12:00 - 15:00 Uhr)',
      'Nachmittags (15:00 - 18:00 Uhr)'
    ],
    submitBtn: 'Strategiegespräch bestätigen',
    successTitle: 'Termin Bestätigt!',
    successDesc: 'Ein leitender Stratege prüft Ihre Gebietsdaten und meldet sich zum gewünschten Zeitpunkt bei Ihnen.',
    successNote: 'Wir arbeiten pro Stadt und Gewerk strikt mit nur einem Fachbetrieb zusammen (100% Gebietsschutz).',
    closeBtn: 'Schließen'
  }
};
