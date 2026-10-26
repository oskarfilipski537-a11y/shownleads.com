import { QuizQuestion } from '../types';

export interface LocalizedQuizContent {
  badge: string;
  headlinePart1: string;
  headlineSpan: string;
  subhead: string;
  startBtn: string;
  stepIndicator: string; // e.g. "Step {current} of {total}"
  completedLabel: string; // e.g. "{percent}% completed"
  questions: QuizQuestion[];
  disqualificationReasons: {
    ticket: string;
    revenue: string;
    geo: string;
    adSpend: string;
    general: string;
  };
  qualified: {
    badge: string;
    title: string;
    desc: string;
    bookingTitle: string;
    bookingSubhead: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    cityPlaceholder: string;
    submitBtn: string;
    confirmedTitle: string;
    confirmedDesc: string;
  };
  disqualified: {
    badge: string;
    title: string;
    desc: string;
    waitlistTitle: string;
    waitlistDesc: string;
    emailPlaceholder: string;
    submitWaitlistBtn: string;
    confirmedWaitlist: string;
    resetBtn: string;
  };
}

export const QUIZ_TRANSLATIONS: Record<'en' | 'sv' | 'es' | 'de', LocalizedQuizContent> = {
  en: {
    badge: '60-SECOND ICP DIAGNOSTIC',
    headlinePart1: 'Check Your ',
    headlineSpan: 'Territory Eligibility',
    subhead: 'For contractor sub-niches & service crews doing $30k+/mo with +$2k ticket values in the US, UK, Ireland, Australia, or Canada.',
    startBtn: 'Start Eligibility Check',
    stepIndicator: 'Step {current} of {total}',
    completedLabel: '{percent}% completed',
    questions: [
      {
        id: 1,
        question: 'Where is your business located?',
        type: 'hard',
        options: [
          { id: 'us', label: 'United States (US)', sublabel: 'Licensed service area' },
          { id: 'uk', label: 'United Kingdom (UK)', sublabel: 'Trade territory' },
          { id: 'ire', label: 'Ireland (IRE)', sublabel: 'Regional trade coverage' },
          { id: 'ca_au', label: 'Canada or Australia', sublabel: 'Metro coverage' },
          { id: 'other_geo', label: 'Other International', sublabel: 'Outside core operating regions', isDisqualifier: true }
        ]
      },
      {
        id: 2,
        question: 'What is your average project or service ticket value?',
        type: 'hard',
        options: [
          { id: 'under_2k', label: 'Under $2,000', sublabel: 'Low-ticket or handyman repairs', isDisqualifier: true },
          { id: '2k_5k', label: '$2,000 to $5,000', sublabel: 'Standard contractor & service jobs' },
          { id: '5k_15k', label: '$5,000 to $15,000', sublabel: 'High-ticket installations & remodels' },
          { id: '15k_plus', label: '$15,000+', sublabel: 'Major commercial & luxury contracts' }
        ]
      },
      {
        id: 3,
        question: 'What is your current monthly revenue?',
        type: 'hard',
        options: [
          { id: 'under_30k', label: 'Under $30,000 / mo', sublabel: 'Early-stage (below $30k minimum)', isDisqualifier: true },
          { id: '30k_50k', label: '$30,000 to $50,000 / mo', sublabel: 'Core 5–12 crew growth bracket' },
          { id: '50k_100k', label: '$50,000 to $100,000 / mo', sublabel: 'Multi-crew scaling phase' },
          { id: '100k_plus', label: '$100,000+ / mo', sublabel: 'Established trade operation' }
        ]
      },
      {
        id: 4,
        question: 'What is your current crew or team size?',
        type: 'soft',
        options: [
          { id: 'solo_small', label: '1 to 4 people', sublabel: 'Solo operator / micro crew' },
          { id: 'sweet_spot_crew', label: '5 to 12 people', sublabel: 'Medium-sized crew (Sweet Spot)' },
          { id: 'large_crew', label: '13+ people', sublabel: 'Multi-crew regional operation' }
        ]
      },
      {
        id: 5,
        question: 'Are you ready to fund a minimum of $35 to $50+/day in direct ad spend?',
        type: 'hard',
        options: [
          { id: 'yes_fund', label: 'Yes, 100%', sublabel: 'Ready to deploy direct ad spend under our client-owned account' },
          { id: 'no_fund', label: 'Not right now', sublabel: 'Seeking organic leads only', isSoftDisqualifier: true }
        ]
      }
    ],
    disqualificationReasons: {
      ticket: 'Our performance model requires a minimum $2,000+ ticket value to ensure a positive return on ad spend.',
      revenue: 'Our system is optimized for established teams generating at least $30,000/mo in existing revenue.',
      geo: 'We currently only operate across licensed contractor territories in Ireland, the US, the UK, Australia, and Canada.',
      adSpend: 'Direct client-owned ad spend is required to run high-intent homeowner acquisition in your service territory.',
      general: 'Our performance ad system requires a minimum of $30k/mo revenue and +$2k ticket value.'
    },
    qualified: {
      badge: 'TERRITORY OPEN & AVAILABLE',
      title: 'Territory Available!',
      desc: 'Your responses match our minimum criteria ($30k+/mo, +$2k ticket, active field crew).',
      bookingTitle: 'Lock In Your Territory Briefing',
      bookingSubhead: 'Choose a time slot to confirm exclusive trade protection in your city with our senior dispatch team.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Business Email',
      phonePlaceholder: 'Direct Phone Number',
      companyPlaceholder: 'Company Name',
      cityPlaceholder: 'Primary Metro / City',
      submitBtn: 'Confirm Territory Reservation',
      confirmedTitle: 'Application Confirmed',
      confirmedDesc: 'We have reserved your territory slot for review. An executive strategist will contact you to verify exclusivity.'
    },
    disqualified: {
      badge: 'TERRITORY INELIGIBLE',
      title: 'Territory Currently Ineligible',
      desc: 'Based on your selections, we cannot offer territory exclusivity at this time.',
      waitlistTitle: 'Join Confidential Priority Waitlist',
      waitlistDesc: 'Enter your email to receive our high-ticket case studies and be notified if capacity opens in your city.',
      emailPlaceholder: 'Enter your business email',
      submitWaitlistBtn: 'Join Waitlist',
      confirmedWaitlist: 'You are on the priority notification list.',
      resetBtn: 'Start Over'
    }
  },

  sv: {
    badge: '60-SEKUNDERS KVALIFICERING',
    headlinePart1: 'Kontrollera ditt ',
    headlineSpan: 'Områdesgodkännande',
    subhead: 'För entreprenörer och hantverksföretag med minst 300 000 kr/mån i omsättning och ordervärden över 25 000 kr i Sverige, Skandinavien, Storbritannien och USA.',
    startBtn: 'Starta kvalificeringstest',
    stepIndicator: 'Steg {current} av {total}',
    completedLabel: '{percent}% genomfört',
    questions: [
      {
        id: 1,
        question: 'Var är ditt företag verksamt?',
        type: 'hard',
        options: [
          { id: 'us', label: 'Sverige / Norden', sublabel: 'Aktivt upptagningsområde' },
          { id: 'uk', label: 'Storbritannien (UK)', sublabel: 'Regional marknad' },
          { id: 'ire', label: 'Irland & Västeuropa', sublabel: 'Lokal täckning' },
          { id: 'ca_au', label: 'USA, Kanada eller Australien', sublabel: 'Metroområde' },
          { id: 'other_geo', label: 'Övrigt internationellt', sublabel: 'Utanför våra kärnregioner', isDisqualifier: true }
        ]
      },
      {
        id: 2,
        question: 'Vad är ert genomsnittliga ordervärde per kund?',
        type: 'hard',
        options: [
          { id: 'under_2k', label: 'Under 25 000 kr', sublabel: 'Mindre småreparationer / hantverksjobb', isDisqualifier: true },
          { id: '2k_5k', label: '25 000 kr till 60 000 kr', sublabel: 'Standard hantverks- och servicejobb' },
          { id: '5k_15k', label: '60 000 kr till 180 000 kr', sublabel: 'Större installationer och renoveringar' },
          { id: '15k_plus', label: '180 000 kr+', sublabel: 'Större entreprenader & totalrenoveringar' }
        ]
      },
      {
        id: 3,
        question: 'Vad är er nuvarande månadsomsättning?',
        type: 'hard',
        options: [
          { id: 'under_30k', label: 'Under 300 000 kr / mån', sublabel: 'Tidig fas (under 300k kr minimigräns)', isDisqualifier: true },
          { id: '30k_50k', label: '300 000 kr till 500 000 kr / mån', sublabel: '5–12 personers tillväxtbolag' },
          { id: '50k_100k', label: '500 000 kr till 1 000 000 kr / mån', sublabel: 'Skalande flergruppsentreprenad' },
          { id: '100k_plus', label: '1 000 000 kr+ / mån', sublabel: 'Etablerat entreprenadbolag' }
        ]
      },
      {
        id: 4,
        question: 'Hur många montörer eller anställda har ni?',
        type: 'soft',
        options: [
          { id: 'solo_small', label: '1 till 4 personer', sublabel: 'Mindre enmans- eller mikroteam' },
          { id: 'sweet_spot_crew', label: '5 till 12 personer', sublabel: 'Mellanstort team (Perfekt match)' },
          { id: 'large_crew', label: '13+ personer', sublabel: 'Regional entreprenadverksamhet' }
        ]
      },
      {
        id: 5,
        question: 'Är ni beredda att avsätta minst 350 till 500 kr/dag i direkta annonskostnader?',
        type: 'hard',
        options: [
          { id: 'yes_fund', label: 'Ja, 100%', sublabel: 'Redo att köra direkt via eget klientägt annonskonto' },
          { id: 'no_fund', label: 'Inte just nu', sublabel: 'Söker enbart gratiskontakter', isSoftDisqualifier: true }
        ]
      }
    ],
    disqualificationReasons: {
      ticket: 'Vår prestationsmodell kräver ett genomsnittligt ordervärde på minst 25 000 kr för att säkerställa hög lönsamhet.',
      revenue: 'Vårt system är optimerat för etablerade bolag som omsätter minst 300 000 kr/mån.',
      geo: 'Vi samarbetar endast med auktoriserade entreprenörer i verifierade upptagningsområden.',
      adSpend: 'Eget annonskonto och direkt annonsbudget krävs för att generera köpstarka offertförfrågningar i ert område.',
      general: 'Vår prestationsmodell kräver minst 300 000 kr i månadsomsättning samt ordervärden över 25 000 kr.'
    },
    qualified: {
      badge: 'OMRÅDE LEDIGT & TILLGÄNGLIGT',
      title: 'Område Ledigt!',
      desc: 'Ert företag uppfyller alla våra minimikriterier (omsättning över 300k kr/mån, högt ordervärde, aktiv personalstyrka).',
      bookingTitle: 'Säkra ditt exklusiva revirskydd',
      bookingSubhead: 'Boka en tid med vår strateg för att låsa din nisch i staden och gå igenom offertflödet.',
      namePlaceholder: 'För- och efternamn',
      emailPlaceholder: 'Företagsepost',
      phonePlaceholder: 'Telefonnummer',
      companyPlaceholder: 'Företagsnamn',
      cityPlaceholder: 'Verksamhetsort / Stad',
      submitBtn: 'Bekräfta revirreservation',
      confirmedTitle: 'Ansökan Mottagen',
      confirmedDesc: 'Vi har preliminärbokat ert område. En rådgivare kontaktar er inom kort för att slutverifiera exklusiviteten.'
    },
    disqualified: {
      badge: 'OMRÅDE EJ TILLGÄNGLIGT JUST NU',
      title: 'Området ej kvalificerat just nu',
      desc: 'Baserat på era valda uppgifter kan vi tyvärr inte erbjuda områdesexklusivitet i nuläget.',
      waitlistTitle: 'Gå med i vår konfidentiella väntelista',
      waitlistDesc: 'Fyll i er e-post för att få våra fallstudier och meddelas om en plats blir ledig i ert område.',
      emailPlaceholder: 'Ange er företagsepost',
      submitWaitlistBtn: 'Gå med i väntelistan',
      confirmedWaitlist: 'Du är nu uppsatt på vår prioriterade lista.',
      resetBtn: 'Börja om'
    }
  },

  es: {
    badge: 'DIAGNÓSTICO ICP DE 60 SEGUNDOS',
    headlinePart1: 'Comprueba la ',
    headlineSpan: 'Disponibilidad de tu Territorio',
    subhead: 'Para empresas de reformas e instaladores con facturación superior a 30.000€/mes y ticket promedio de más de 2.000€.',
    startBtn: 'Comprobar Disponibilidad',
    stepIndicator: 'Paso {current} de {total}',
    completedLabel: '{percent}% completado',
    questions: [
      {
        id: 1,
        question: '¿Dónde está ubicada tu empresa?',
        type: 'hard',
        options: [
          { id: 'us', label: 'España y Europa', sublabel: 'Área de servicio activa' },
          { id: 'uk', label: 'Reino Unido (UK)', sublabel: 'Territorio asignado' },
          { id: 'ire', label: 'Irlanda', sublabel: 'Cobertura regional' },
          { id: 'ca_au', label: 'Estados Unidos, Canadá o Australia', sublabel: 'Área metropolitana' },
          { id: 'other_geo', label: 'Otro país internacional', sublabel: 'Fuera de regiones operativas principales', isDisqualifier: true }
        ]
      },
      {
        id: 2,
        question: '¿Cuál es el valor medio por proyecto o servicio?',
        type: 'hard',
        options: [
          { id: 'under_2k', label: 'Menos de 2.000€', sublabel: 'Trabajos menores o manitas', isDisqualifier: true },
          { id: '2k_5k', label: 'De 2.000€ a 5.000€', sublabel: 'Trabajos estándar de reformas e instalaciones' },
          { id: '5k_15k', label: 'De 5.000€ a 15.000€', sublabel: 'Reformas completas e instalaciones de alto valor' },
          { id: '15k_plus', label: 'Más de 15.000€', sublabel: 'Grandes obras, cubiertas y contratos de lujo' }
        ]
      },
      {
        id: 3,
        question: '¿Cuál es tu facturación mensual actual?',
        type: 'hard',
        options: [
          { id: 'under_30k', label: 'Menos de 30.000€ / mes', sublabel: 'Fase inicial (por debajo del mínimo de 30k€)', isDisqualifier: true },
          { id: '30k_50k', label: 'De 30.000€ a 50.000€ / mes', sublabel: 'Fase de crecimiento de 5 a 12 operarios' },
          { id: '50k_100k', label: 'De 50.000€ a 100.000€ / mes', sublabel: 'Escala con múltiples cuadrillas activas' },
          { id: '100k_plus', label: 'Más de 100.000€ / mes', sublabel: 'Empresa consolidada del sector' }
        ]
      },
      {
        id: 4,
        question: '¿Cuántas personas forman tu equipo o cuadrilla?',
        type: 'soft',
        options: [
          { id: 'solo_small', label: 'De 1 a 4 personas', sublabel: 'Profesional autónomo o equipo reducido' },
          { id: 'sweet_spot_crew', label: 'De 5 a 12 personas', sublabel: 'Equipo mediano (Perfil Ideal)' },
          { id: 'large_crew', label: 'Más de 13 personas', sublabel: 'Empresa regional con múltiples cuadrillas' }
        ]
      },
      {
        id: 5,
        question: '¿Estás preparado para destinar un mínimo de 35€ a 50€+/día en publicidad directa?',
        type: 'hard',
        options: [
          { id: 'yes_fund', label: 'Sí, 100%', sublabel: 'Listos para activar inversión en cuenta publicitaria propia' },
          { id: 'no_fund', label: 'No en este momento', sublabel: 'Solo busco contactos orgánicos gratuitos', isSoftDisqualifier: true }
        ]
      }
    ],
    disqualificationReasons: {
      ticket: 'Nuestro modelo de rendimiento requiere un ticket mínimo de +2.000€ para garantizar un retorno positivo de la inversión.',
      revenue: 'El sistema está optimizado para empresas consolidadas que ya facturan al menos 30.000€ al mes.',
      geo: 'Actualmente solo colaboramos en territorios y ciudades autorizadas.',
      adSpend: 'Es imprescindible disponer de presupuesto publicitario propio para atraer a los propietarios más cualificados.',
      general: 'Nuestro sistema requiere un mínimo de 30.000€/mes de facturación y proyectos superiores a 2.000€.'
    },
    qualified: {
      badge: 'TERRITORIO DISPONIBLE',
      title: '¡Territorio Disponible!',
      desc: 'Tus respuestas cumplen con todos nuestros criterios (facturación superior a 30k€/mes, ticket alto y equipo activo).',
      bookingTitle: 'Asegura la Exclusividad en tu Ciudad',
      bookingSubhead: 'Elige un horario para una reunión de 15 minutos y reservar el bloqueo de tu sector frente a competidores.',
      namePlaceholder: 'Nombre y Apellidos',
      emailPlaceholder: 'Correo de Empresa',
      phonePlaceholder: 'Teléfono Móvil',
      companyPlaceholder: 'Nombre de la Empresa',
      cityPlaceholder: 'Ciudad o Provincia Principal',
      submitBtn: 'Confirmar Reserva Territorial',
      confirmedTitle: 'Solicitud Recibida',
      confirmedDesc: 'Hemos registrado tu reserva. Un estratega senior se pondrá en contacto contigo para verificar la exclusividad.'
    },
    disqualified: {
      badge: 'TERRITORIO NO DISPONIBLE ACTUALMENTE',
      title: 'Territorio no disponible actualmente',
      desc: 'En base a tus respuestas, no podemos ofrecerte exclusividad territorial en este momento.',
      waitlistTitle: 'Únete a la lista de espera confidencial',
      waitlistDesc: 'Introduce tu email para recibir nuestros casos de estudio y ser notificado si se libera una plaza en tu ciudad.',
      emailPlaceholder: 'Introduce tu correo de empresa',
      submitWaitlistBtn: 'Unirme a la lista de espera',
      confirmedWaitlist: 'Estás en la lista prioritaria de notificaciones.',
      resetBtn: 'Volver a empezar'
    }
  },

  de: {
    badge: '60-SEKUNDEN-ZIELGRUPPENPRÜFUNG',
    headlinePart1: 'Prüfen Sie Ihre ',
    headlineSpan: 'Gebietsverfügbarkeit',
    subhead: 'Für Fachbetriebe und Montageunternehmen mit mindestens 30.000€ Monatsumsatz und Auftragswerten ab 2.000€ in Deutschland, Österreich, der Schweiz, UK und den USA.',
    startBtn: 'Gebietsprüfung starten',
    stepIndicator: 'Schritt {current} von {total}',
    completedLabel: '{percent}% abgeschlossen',
    questions: [
      {
        id: 1,
        question: 'Wo befindet sich Ihr Unternehmenssitz?',
        type: 'hard',
        options: [
          { id: 'us', label: 'Deutschland, Österreich oder Schweiz', sublabel: 'Zulässiges Einsatzgebiet' },
          { id: 'uk', label: 'Großbritannien (UK)', sublabel: 'Regionales Gewerk' },
          { id: 'ire', label: 'Irland & Europa', sublabel: 'Lokal verifiziertes Gebiet' },
          { id: 'ca_au', label: 'USA, Kanada oder Australien', sublabel: 'Metropolregion' },
          { id: 'other_geo', label: 'Anderes internationales Gebiet', sublabel: 'Außerhalb unserer Kernregionen', isDisqualifier: true }
        ]
      },
      {
        id: 2,
        question: 'Wie hoch ist Ihr durchschnittlicher Auftragswert?',
        type: 'hard',
        options: [
          { id: 'under_2k', label: 'Unter 2.000€', sublabel: 'Kleinreparaturen oder Kleinaufträge', isDisqualifier: true },
          { id: '2k_5k', label: '2.000€ bis 5.000€', sublabel: 'Standard-Handwerks- und Montageaufträge' },
          { id: '5k_15k', label: '5.000€ bis 15.000€', sublabel: 'Hochwertige Umbauten und Sanierungen' },
          { id: '15k_plus', label: 'Über 15.000€', sublabel: 'Großprojekte, Komplettsanierungen & Gewerbe' }
        ]
      },
      {
        id: 3,
        question: 'Wie hoch ist Ihr derzeitiger monatlicher Umsatz?',
        type: 'hard',
        options: [
          { id: 'under_30k', label: 'Unter 30.000€ / Monat', sublabel: 'Frühphase (unter der 30k€ Mindestgrenze)', isDisqualifier: true },
          { id: '30k_50k', label: '30.000€ bis 50.000€ / Monat', sublabel: 'Wachstumsphase mit 5–12 Mitarbeitern' },
          { id: '50k_100k', label: '50.000€ bis 100.000€ / Monat', sublabel: 'Skalierung mit mehreren Kolonnen' },
          { id: '100k_plus', label: 'Über 100.000€ / Monat', sublabel: 'Etablierter Meister- oder Fachbetrieb' }
        ]
      },
      {
        id: 4,
        question: 'Wie viele Mitarbeiter oder Monteure beschäftigen Sie?',
        type: 'soft',
        options: [
          { id: 'solo_small', label: '1 bis 4 Personen', sublabel: 'Einzelunternehmer oder Kleinstteam' },
          { id: 'sweet_spot_crew', label: '5 bis 12 Personen', sublabel: 'Mittelgroßes Team (Ideale Passform)' },
          { id: 'large_crew', label: '13+ Personen', sublabel: 'Überregionaler Fachbetrieb' }
        ]
      },
      {
        id: 5,
        question: 'Sind Sie bereit, mindestens 35€ bis 50€+/Tag in direktes Werbebudget zu investieren?',
        type: 'hard',
        options: [
          { id: 'yes_fund', label: 'Ja, zu 100%', sublabel: 'Bereit zur Schaltung im eigenen Kunden-Werbekonto' },
          { id: 'no_fund', label: 'Aktuell nicht', sublabel: 'Suche ausschließlich unbezahlte Kontakte', isSoftDisqualifier: true }
        ]
      }
    ],
    disqualificationReasons: {
      ticket: 'Unser Performance-Modell erfordert einen Mindestauftragswert von 2.000€, um profitables Wachstum sicherzustellen.',
      revenue: 'Unser System ist für etablierte Fachbetriebe mit mindestens 30.000€ Monatsumsatz konzipiert.',
      geo: 'Wir sind derzeit nur in lizenzierten Partnergebieten im Einsatz.',
      adSpend: 'Eigenes Werbebudget ist zwingend erforderlich, um kaufkräftige Hauseigentümer im direkten Umkreis zu gewinnen.',
      general: 'Unser System erfordert mindestens 30.000€ Monatsumsatz und Auftragswerte ab 2.000€.'
    },
    qualified: {
      badge: 'GEBIET VERFÜGBAR & FREI',
      title: 'Gebiet verfügbar!',
      desc: 'Ihr Betrieb erfüllt alle unsere Kriterien (über 30k€ Monatsumsatz, hohe Auftragswerte und aktive Montagekapazität).',
      bookingTitle: 'Exklusiven Gebietsschutz sichern',
      bookingSubhead: 'Wählen Sie ein 15-minütiges Gespräch, um den Ausschluss aller Mitbewerber in Ihrer Region abzusichern.',
      namePlaceholder: 'Vor- und Nachname',
      emailPlaceholder: 'Geschäftliche E-Mail',
      phonePlaceholder: 'Telefonnummer',
      companyPlaceholder: 'Name des Fachbetriebs',
      cityPlaceholder: 'Hauptort / Einsatzgebiet',
      submitBtn: 'Gebietsreservierung bestätigen',
      confirmedTitle: 'Bewerbung Bestätigt',
      confirmedDesc: 'Wir haben Ihren Gebietsplatz reserviert. Ein leitender Berater wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    disqualified: {
      badge: 'GEBIET DERZEIT NICHT VERFÜGBAR',
      title: 'Gebiet derzeit nicht verfügbar',
      desc: 'Basierend auf Ihren Angaben können wir derzeit leider keinen Gebietsschutz anbieten.',
      waitlistTitle: 'In die vertrauliche Warteliste eintragen',
      waitlistDesc: 'Geben Sie Ihre E-Mail an, um unsere Fallstudien zu erhalten und benachrichtigt zu werden, wenn ein Platz frei wird.',
      emailPlaceholder: 'Ihre geschäftliche E-Mail',
      submitWaitlistBtn: 'In Warteliste eintragen',
      confirmedWaitlist: 'Sie stehen auf der priorisierten Benachrichtigungsliste.',
      resetBtn: 'Neu starten'
    }
  }
};
