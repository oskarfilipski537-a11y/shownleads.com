export interface SubpageContent {
  common: {
    backToHome: string;
    checkEligibility: string;
    talkToSpecialist: string;
    territoryLockNotice: string;
    viewAll: string;
    searchPlaceholder: string;
  };
  company: {
    tag: string;
    title: string;
    subtitle: string;
    tabs: {
      about: string;
      team: string;
      principles: string;
      news: string;
    };
    aboutHeading: string;
    aboutP1: string;
    aboutP2: string;
    principlesHeading: string;
    principles: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  leadGen: {
    tag: string;
    title: string;
    subtitle: string;
    criteriaHeading: string;
    criteria: {
      title: string;
      desc: string;
      tag: string;
    }[];
    roiTitle: string;
    ticketLabel: string;
    volumeLabel: string;
    estRevenue: string;
    estProfit: string;
  };
  appointments: {
    tag: string;
    title: string;
    subtitle: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Desc: string;
    workflowHeading: string;
    workflowSteps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  ourCompanies: {
    tag: string;
    title: string;
    subtitle: string;
    badgeExclusivity: string;
    badgeMinTicket: string;
    searchPlaceholder: string;
    allFilter: string;
    interiorFilter: string;
    exteriorFilter: string;
    mechanicalFilter: string;
  };
  ourServices: {
    tag: string;
    title: string;
    subtitle: string;
    services: {
      num: string;
      title: string;
      desc: string;
      points: string[];
    }[];
  };
  caseStudies: {
    tag: string;
    title: string;
    subtitle: string;
    cases: {
      client: string;
      trade: string;
      location: string;
      metric: string;
      metricLabel: string;
      quote: string;
      author: string;
    }[];
  };
}

export const SUBPAGE_TRANSLATIONS: Record<'en' | 'sv' | 'es' | 'de', SubpageContent> = {
  en: {
    common: {
      backToHome: 'Back to Home',
      checkEligibility: 'Check Territory Availability',
      talkToSpecialist: 'Talk to a Specialist',
      territoryLockNotice: 'Strict 1-partner-per-niche territory lock. Once claimed, local competitors are locked out.',
      viewAll: 'View All',
      searchPlaceholder: 'Search trade or specialty...',
    },
    company: {
      tag: 'ABOUT SHOWNLEADS',
      title: 'Built to Abolish Marketing Retainers',
      subtitle: 'We align 100% of our economic success with whether vetted homeowners actually sit down with your estimators.',
      tabs: {
        about: 'About Us',
        team: 'Leadership',
        principles: 'Principles',
        news: 'Press & News',
      },
      aboutHeading: 'Why We Built ShownLeads',
      aboutP1: 'For years, trade contractors have been burnt by traditional agencies demanding thousands of dollars in upfront retainers while delivering cold spreadsheets and unqualified clicks. When homeowners don’t pick up or no-show, the agency keeps your cash and you take all the loss.',
      aboutP2: 'ShownLeads flipped the equation. We invest our own capital, run intent ads, qualify homeowners with US-trained setters, and put confirmed appointments directly into your estimator’s calendar. If they cancel or ghost, you owe $0.',
      principlesHeading: 'Our Core Operating Principles',
      principles: [
        {
          num: '01',
          title: 'Symmetric Economic Risk',
          desc: 'We never take upfront retainers. We only get paid when a vetted homeowner sits down for an estimate.'
        },
        {
          num: '02',
          title: 'Strict Territory Sovereignty',
          desc: '1 trade contractor per niche per city. We never sell your leads to local competitors.'
        },
        {
          num: '03',
          title: '100% Client Account Ownership',
          desc: 'You own your pixel data, ad account, and customer lists forever with zero hostage fees.'
        }
      ]
    },
    leadGen: {
      tag: 'INTENT-PIXELLED LEAD ENGINE',
      title: 'High-Ticket Homeowner Generation',
      subtitle: 'Targeting $90k+ household income homeowners actively researching high-ticket renovations in your driving radius.',
      criteriaHeading: 'Our 4-Stage Lead Qualification',
      criteria: [
        {
          title: '1. Verified Homeowner Status',
          desc: 'We strictly eliminate renters, tenants, and commercial landlords looking for cheap patchwork.',
          tag: 'Verified Owner'
        },
        {
          title: '2. Project Budget Threshold Met',
          desc: 'Prospects must confirm an active project scope matching your minimum ticket requirements ($3.5k+).',
          tag: 'Real Budget'
        },
        {
          title: '3. Immediate Decision-Maker Timeline',
          desc: 'We screen out casual window shoppers browsing for 2 years out. Every lead is ready for an estimate within 14–45 days.',
          tag: 'Active Timeline'
        },
        {
          title: '4. Direct Route Sync',
          desc: 'Pre-screened appointments drop straight into your estimator’s route slots with day-before SMS confirmation.',
          tag: 'Calendar Locked'
        }
      ],
      roiTitle: 'Interactive Territory Yield Estimator',
      ticketLabel: 'Average Job Ticket',
      volumeLabel: 'Estimates Per Month',
      estRevenue: 'Est. Monthly Gross Revenue',
      estProfit: 'Est. Net Contractor Profit'
    },
    appointments: {
      tag: 'HUMAN SETTER TELEPHONY',
      title: 'Confirmed In-Home Estimates',
      subtitle: 'Our trained setters dial within 180 seconds to screen scope, verify single-family homeownership, and book your route.',
      stat1Label: 'Speed-to-Lead',
      stat1Desc: 'We call every lead in under 180 seconds while their intent is peak.',
      stat2Label: 'Verified Show Rate',
      stat2Desc: 'Automated 2-way SMS and morning-of route confirmations.',
      stat3Label: 'No-Show Fee',
      stat3Desc: 'If the customer cancels or is not home, your fee is exactly $0.',
      workflowHeading: 'How We Ensure 94.6% Show-Up Rates',
      workflowSteps: [
        {
          step: '01',
          title: '180-Second Phone Intake',
          desc: 'Our setter calls the prospect instantly to confirm single-family homeownership and project budget.'
        },
        {
          step: '02',
          title: 'Calendar Route Matching',
          desc: 'The confirmed sit is scheduled directly into your team’s route based on driving territory.'
        },
        {
          step: '03',
          title: 'Day-Before & Morning-Of SMS',
          desc: 'Automated text sequences confirm that both decision-makers will be present at the home.'
        },
        {
          step: '04',
          title: 'Show Up & Close',
          desc: 'Your estimator sits down, delivers the proposal, and secures the contract.'
        }
      ]
    },
    ourCompanies: {
      tag: 'HIGH-TICKET TRADE VERTICALS',
      title: 'Trades & Niches We Specialize In',
      subtitle: 'Exclusively partnering with trades with an average ticket value of +$3.5k across Ireland, US, UK, Australia, and Canada.',
      badgeExclusivity: 'Strict 1-Partner Exclusivity',
      badgeMinTicket: 'Min. +$3,500 Ticket Value',
      searchPlaceholder: 'Search trade (e.g. Kitchens, Roofing, HVAC)...',
      allFilter: 'All Trades',
      interiorFilter: 'Interior Remodeling',
      exteriorFilter: 'Exterior & Roofing',
      mechanicalFilter: 'Mechanical & Energy'
    },
    ourServices: {
      tag: 'END-TO-END DISPATCH INFRASTRUCTURE',
      title: 'Our 3 Growth Systems',
      subtitle: 'Everything needed to scale your contractor revenue without paying agency retainers.',
      services: [
        {
          num: '01',
          title: 'Intent-Targeted Creative & Pixels',
          desc: 'High-converting video and photo creative showcasing high-ticket transformations in your exact driving radius.',
          points: [
            'Geo-fenced $90k+ household income zip codes',
            'Scroll-stopping job site transformation reels',
            'Anti-price-shopper conversion copy'
          ]
        },
        {
          num: '02',
          title: 'Dedicated Setter Telephony Floor',
          desc: 'Trained phone setters who dial every inbound homeowner within 180 seconds to verify budget and scope.',
          points: [
            '< 180s speed-to-lead protocol',
            'Single-family homeownership vetting',
            'Direct booking into your calendar route'
          ]
        },
        {
          num: '03',
          title: 'Show-Up Assurance & Automated Re-engagement',
          desc: 'SMS and email workflows that guarantee 94.6% show-up rates and nurture delayed projects for 60 days.',
          points: [
            'Automated 2-way SMS appointment confirmations',
            'Zero cost on client cancellations ($0 fee)',
            '60-day delayed project retargeting'
          ]
        }
      ]
    },
    caseStudies: {
      tag: 'VERIFIED PARTNER RESULTS',
      title: 'Real Contractor Case Studies',
      subtitle: 'Real numbers from high-ticket contractors scaled through our pay-per-estimate framework.',
      cases: [
        {
          client: 'Apex Roofing Systems',
          trade: 'Metal Roofing Replacement',
          location: 'Dallas, TX',
          metric: '$318,000',
          metricLabel: 'Added Gross Revenue in 90 Days',
          quote: 'ShownLeads completely eliminated the retainer risk. We did 28 estimate sits our first month with zero cold calling.',
          author: 'David M., Managing Director'
        },
        {
          client: 'Vanguard Kitchen & Bath',
          trade: 'Kitchen & Bath Remodeling',
          location: 'Dublin, Ireland',
          metric: '96.2%',
          metricLabel: 'Verified Show-Up Rate',
          quote: 'The setters are incredible. Homeowners are actually waiting at the door with project specs ready.',
          author: 'Sean O., Head Estimator'
        },
        {
          client: 'Nordic Epoxy & Surface Pro',
          trade: 'Garage & Commercial Epoxy Flooring',
          location: 'London & Home Counties',
          metric: '4.8x ROI',
          metricLabel: 'Return on Direct Ad Spend',
          quote: 'We locked out our competitors in our driving radius. The pay-per-sit model is the only honest way to market.',
          author: 'Marcus H., Founder'
        }
      ]
    }
  },

  sv: {
    common: {
      backToHome: 'Tillbaka till start',
      checkEligibility: 'Kontrollera områdesgodkännande',
      talkToSpecialist: 'Prata med en specialist',
      territoryLockNotice: 'Strikt revirskydd: 1 partner per nisch i varje stad. Konkurrenter utesluts.',
      viewAll: 'Visa alla',
      searchPlaceholder: 'Sök bransch eller tjänst...',
    },
    company: {
      tag: 'OM SHOWNLEADS',
      title: 'Skapat för att avskaffa fasta arvoden',
      subtitle: 'Vi kopplar 100% av vår framgång till att verifierade villaägare faktiskt genomför offertmötet med er.',
      tabs: {
        about: 'Om Oss',
        team: 'Ledning',
        principles: 'Principer',
        news: 'Nyheter',
      },
      aboutHeading: 'Varför vi startade ShownLeads',
      aboutP1: 'Under åratal har duktiga entreprenörer blivit brända av traditionella marknadsföringsbyråer som kräver tiotusentals kronor i fasta månadsarvoden för kalla telefonlistor och klick som aldrig leder till jobb. När kunden inte svarar eller uteblir behåller byrån pengarna och du bär hela förlusten.',
      aboutP2: 'ShownLeads förändrade spelreglerna. Vi investerar vårt eget kapital, skapar lokala annonser, kvalificerar villaägare med professionella mötesbokare och lägger bekräftade offertmöten direkt i er kalender. Uteblir kunden betalar ni 0 kr.',
      principlesHeading: 'Våra Grundprinciper',
      principles: [
        {
          num: '01',
          title: 'Symmetrisk ekonomisk risk',
          desc: 'Vi tar aldrig fasta månadsarvoden. Vi får endast betalt när ett genomfört offertmöte äger rum.'
        },
        {
          num: '02',
          title: 'Strikt revirskydd',
          desc: '1 partner per nisch i varje stad. Vi säljer aldrig era leads vidare till lokala konkurrenter.'
        },
        {
          num: '03',
          title: '100% ägandeskap av data',
          desc: 'Ni äger alltid era annonskonton, kundlistor och mätdata utan dolda inlåsningar.'
        }
      ]
    },
    leadGen: {
      tag: 'PRECISIONSRIKTAD LEADSMOTOR',
      title: 'Generering av köpstarka villaägare',
      subtitle: 'Riktar in sig mot villaägare med god ekonomi som aktivt söker renoverings- och hantverkstjänster i ert upptagningsområde.',
      criteriaHeading: 'Vår 4-stegs kvalificering',
      criteria: [
        {
          title: '1. Bekräftat fastighetsägande',
          desc: 'Vi filtrerar bort hyresgäster och personer som enbart söker billiga småreparationer.',
          tag: 'Verifierad Ägare'
        },
        {
          title: '2. Bekräftad projektbudget',
          desc: 'Kunden måste bekräfta en projektomfattning som matchar ert minimikrav (från 25 000 kr och uppåt).',
          tag: 'Reell Budget'
        },
        {
          title: '3. Omedelbar tidsplan',
          desc: 'Vi rensar bort fönstertittare som planerar 2 år framåt. Varje lead är redo för offert inom 14–45 dagar.',
          tag: 'Aktiv Tidsplan'
        },
        {
          title: '4. Direkt kalendersynkning',
          desc: 'Kvalificerade offertmöten schemaläggs direkt i er rutt med SMS-bekräftelse dagen innan.',
          tag: 'Bokat i Kalendern'
        }
      ],
      roiTitle: 'Interaktiv kalkylator för intäktspotential',
      ticketLabel: 'Genomsnittligt ordervärde',
      volumeLabel: 'Offerter per månad',
      estRevenue: 'Beräknad månatlig bruttoomsättning',
      estProfit: 'Beräknad nettovinst efter material & lön'
    },
    appointments: {
      tag: 'MÄNSKLIG TELEFONKVALIFICERING',
      title: 'Bekräftade Offertbesök',
      subtitle: 'Våra utbildade mötesbokare ringer inom 180 sekunder för att granska omfattning och boka in besöket direkt i er rutt.',
      stat1Label: 'Responstid',
      stat1Desc: 'Vi ringer varje förfrågan inom 180 sekunder medan intresset är som störst.',
      stat2Label: 'Verifierad Närvaro',
      stat2Desc: 'Automatiserade SMS-bekräftelser och ruttkontroller samma morgon.',
      stat3Label: 'Avgift vid Uteblivet Möte',
      stat3Desc: 'Om kunden avbokar eller inte är på plats betalar ni exakt 0 kr.',
      workflowHeading: 'Hur vi uppnår 94,6% genomförandegrad',
      workflowSteps: [
        {
          step: '01',
          title: 'Telefonsamtal inom 180 sekunder',
          desc: 'Vår bokare ringer direkt för att bekräfta fastighetsägande och projektbudget.'
        },
        {
          step: '02',
          title: 'Ruttsynkning i kalendern',
          desc: 'Det bekräftade besöket läggs in direkt i er kalender baserat på ert körområde.'
        },
        {
          step: '03',
          title: 'SMS-påminnelse dagen innan och samma morgon',
          desc: 'Automatiska SMS säkerställer att beslutsfattare finns på plats i bostaden.'
        },
        {
          step: '04',
          title: 'Åk ut och räkna hem affären',
          desc: 'Er kalkylator eller projektledare genomför mötet och lämnar offert.'
        }
      ]
    },
    ourCompanies: {
      tag: 'HÖGVÄRDIGA NISCHER',
      title: 'Branscher vi är specialiserade på',
      subtitle: 'Samarbetar exklusivt med företag med ett genomsnittligt ordervärde på minst 25 000 kr.',
      badgeExclusivity: 'Strikt 1 partner per stad',
      badgeMinTicket: 'Min. ordervärde: 25 000 kr',
      searchPlaceholder: 'Sök bransch (t.ex. kök, tak, värmepumpar)...',
      allFilter: 'Alla Branscher',
      interiorFilter: 'Invändig Renovering',
      exteriorFilter: 'Tak & Exteriör',
      mechanicalFilter: 'VVS & Energi'
    },
    ourServices: {
      tag: 'KOMPLETT OFFERTINFRASTRUKTUR',
      title: 'Våra 3 Kärnsystem',
      subtitle: 'Allt som krävs för att skala ert entreprenadföretag utan att betala fasta byråarvoden.',
      services: [
        {
          num: '01',
          title: 'Lokalanpassad annonsering och intressepixlar',
          desc: 'Professionellt video- och bildmaterial som visar högkvalitativa renoveringar i ert exakta närområde.',
          points: [
            'Riktat mot postnummer med hög köpkraft',
            'Konverteringsstarka före- och efterfilmer',
            'Copywriting som sållar bort fönstershoppare'
          ]
        },
        {
          num: '02',
          title: 'Dedikerat mötesbokningsteam',
          desc: 'Utbildade telefonister som ringer upp varje villaägare inom 180 sekunder för att verifiera budget och omfattning.',
          points: [
            '< 180 sekunders responstid',
            'Kontroll av lagfart/fastighetsägande',
            'Direktbokning i er kalenderrutt'
          ]
        },
        {
          num: '03',
          title: 'Närvarogaranti & 60-dagars återaktivering',
          desc: 'SMS- och e-postflöden som säkrar 94,6% närvaro och väcker liv i projekt som skjutits upp.',
          points: [
            'Automatiserade 2-vägs SMS-påminnelser',
            '0 kr avgift vid uteblivet möte',
            '60-dagars uppföljning av fördröjda projekt'
          ]
        }
      ]
    },
    caseStudies: {
      tag: 'VERIFIERADE PARTNERRESULTAT',
      title: 'Verkliga Kundcase',
      subtitle: 'Mätbara resultat från entreprenörer och hantverksföretag som skalat med vår pay-per-estimate modell.',
      cases: [
        {
          client: 'Apex Tak & Plåtslageri',
          trade: 'Plåttak & Takbyte',
          location: 'Stockholm & Mälardalen',
          metric: '3,2 Mkr',
          metricLabel: 'Ny omsättning på 90 dagar',
          quote: 'ShownLeads eliminerade all risk med fasta arvoden. Vi genomförde 28 offertmöten första månaden utan att ringa ett enda kallt samtal själv.',
          author: 'David M., VD & Ägare'
        },
        {
          client: 'Vanguard Kök & Bad',
          trade: 'Köks- och Badrumsrenovering',
          location: 'Göteborg',
          metric: '96,2%',
          metricLabel: 'Verifierad Genomförandegrad',
          quote: 'Mötesbokarna är fantastiska. Villaägarna står i princip redo vid dörren med ritningar och projektbudget i handen.',
          author: 'Johan S., Kalkylator'
        },
        {
          client: 'Nordic Epoxi & Ytbeläggning',
          trade: 'Garagegolv & Epoxi',
          location: 'Malmö & Skåne',
          metric: '4,8x ROI',
          metricLabel: 'Avkastning på annonsbudget',
          quote: 'Vi säkrade ensamrätten i vårt område. Att bara betala per genomfört offertmöte är det enda ärliga sättet.',
          author: 'Marcus H., Grundare'
        }
      ]
    }
  },

  es: {
    common: {
      backToHome: 'Volver al Inicio',
      checkEligibility: 'Comprobar Disponibilidad',
      talkToSpecialist: 'Hablar con un Especialista',
      territoryLockNotice: 'Exclusividad estricta: 1 socio por especialidad en cada ciudad. Competencia bloqueada.',
      viewAll: 'Ver Todo',
      searchPlaceholder: 'Buscar oficio o especialidad...',
    },
    company: {
      tag: 'SOBRE SHOWNLEADS',
      title: 'Creados para erradicar las cuotas mensuales fijas',
      subtitle: 'Alineamos el 100% de nuestro éxito con que propietarios verificados asistan a la visita de presupuesto.',
      tabs: {
        about: 'Quiénes Somos',
        team: 'Equipo Directivo',
        principles: 'Principios',
        news: 'Noticias y Prensa',
      },
      aboutHeading: 'Por qué nació ShownLeads',
      aboutP1: 'Durante años, las empresas de reformas han sufrido a agencias tradicionales que cobran miles de euros mensuales por adelantado entregando contactos fríos que no contestan. Cuando el cliente no acude a la cita, la agencia se queda tu dinero y tú asumes toda la pérdida.',
      aboutP2: 'ShownLeads cambió las reglas. Invertimos nuestro propio capital, lanzamos anuncios de alta intención, cualificamos a los propietarios con llamadas de confirmación y agendamos visitas confirmadas directamente en tu calendario. Si cancelan, pagas 0€.',
      principlesHeading: 'Nuestros Principios Fundamentales',
      principles: [
        {
          num: '01',
          title: 'Riesgo económico simétrico',
          desc: 'Sin cuotas fijas mensuales. Solo cobramos cuando una visita confirmada se realiza.'
        },
        {
          num: '02',
          title: 'Soberanía territorial estricta',
          desc: '1 empresa por oficio y ciudad. Nunca compartimos tus contactos con la competencia.'
        },
        {
          num: '03',
          title: '100% propiedad de tus datos',
          desc: 'Eres dueño de tus cuentas de anuncios, listas de clientes y datos de píxeles sin penalizaciones.'
        }
      ]
    },
    leadGen: {
      tag: 'MOTOR DE CAPTACIÓN POR PÍXEL',
      title: 'Generación de Propietarios Cualificados',
      subtitle: 'Dirigido a propietarios con ingresos superiores a 90.000€ que buscan activamente reformas de alto valor en tu radio de servicio.',
      criteriaHeading: 'Nuestra Cualificación en 4 Etapas',
      criteria: [
        {
          title: '1. Verificación de Propietario',
          desc: 'Eliminamos inquilinos y curiosos que buscan arreglos menores de bajo importe.',
          tag: 'Propietario Real'
        },
        {
          title: '2. Presupuesto Confirmado',
          desc: 'El cliente debe confirmar un alcance acorde con tu ticket mínimo (+3.500€).',
          tag: 'Presupuesto Real'
        },
        {
          title: '3. Plazo de Decisión Inmediato',
          desc: 'Filtramos a quienes solo miran para dentro de dos años. Todos están listos para presupuesto en 14–45 días.',
          tag: 'Plazo Activo'
        },
        {
          title: '4. Sincronización en Ruta',
          desc: 'Las citas confirmadas caen en la ruta de tu tasador con recordatorios SMS el día antes.',
          tag: 'Ruta Asegurada'
        }
      ],
      roiTitle: 'Estimador Interactivo de Rentabilidad Territorial',
      ticketLabel: 'Ticket Promedio por Trabajo',
      volumeLabel: 'Presupuestos por Mes',
      estRevenue: 'Ingresos Brutos Estimados',
      estProfit: 'Beneficio Neto Estimado'
    },
    appointments: {
      tag: 'CENTRO TELEFÓNICO DE CUALIFICACIÓN',
      title: 'Visitas y Presupuestos Confirmados',
      subtitle: 'Llamamos en menos de 180 segundos para confirmar que son propietarios y agendar la visita en tu ruta.',
      stat1Label: 'Velocidad de Contacto',
      stat1Desc: 'Llamamos en menos de 180 segundos mientras el interés está en su punto máximo.',
      stat2Label: 'Tasa de Asistencia',
      stat2Desc: 'Confirmaciones automatizadas por SMS y verificación el mismo día.',
      stat3Label: 'Coste en Cancelación',
      stat3Desc: 'Si el cliente cancela o no está en casa, tu coste es exactamente 0€.',
      workflowHeading: 'Cómo garantizamos un 94,6% de asistencia',
      workflowSteps: [
        {
          step: '01',
          title: 'Contacto en 180 segundos',
          desc: 'Nuestro equipo llama inmediatamente para verificar propiedad y presupuesto.'
        },
        {
          step: '02',
          title: 'Sincronización en tu ruta',
          desc: 'La visita se agenda en el calendario de tu equipo según tu zona de desplazamiento.'
        },
        {
          step: '03',
          title: 'SMS recordatorio el día antes y la mañana de la cita',
          desc: 'Aseguramos que los titulares estén presentes en la vivienda.'
        },
        {
          step: '04',
          title: 'Visita y cierre de obra',
          desc: 'Tu tasador acude al domicilio, presenta la oferta y firma el contrato.'
        }
      ]
    },
    ourCompanies: {
      tag: 'ESPECIALIDADES DE ALTO VALOR',
      title: 'Oficios en los que nos Especializamos',
      subtitle: 'Colaboramos exclusivamente con empresas con ticket promedio de más de 3.500€.',
      badgeExclusivity: '1 Socio Por Ciudad',
      badgeMinTicket: 'Ticket Mín. +3.500€',
      searchPlaceholder: 'Buscar oficio (ej. Cocinas, Tejados, Climatización)...',
      allFilter: 'Todos los Oficios',
      interiorFilter: 'Reformas Interiores',
      exteriorFilter: 'Tejados y Fachadas',
      mechanicalFilter: 'Clima y Energía'
    },
    ourServices: {
      tag: 'INFRAESTRUCTURA INTEGRAL DE DESPACHO',
      title: 'Nuestros 3 Sistemas de Crecimiento',
      subtitle: 'Todo lo necesario para escalar la facturación de tu empresa sin pagar cuotas fijas a agencias.',
      services: [
        {
          num: '01',
          title: 'Creatividades y Píxeles de Alta Intención',
          desc: 'Vídeos e imágenes de alta conversión mostrando transformaciones de alto valor en tu radio exacto.',
          points: [
            'Segmentación de códigos postales con ingresos > 90k€',
            'Vídeos de impacto antes y después',
            'Textos persuasivos que frenan a los buscadores de precios bajos'
          ]
        },
        {
          num: '02',
          title: 'Centro Telefónico de Cualificación',
          desc: 'Operadores que llaman a cada cliente en menos de 180 segundos para verificar presupuesto y alcance.',
          points: [
            '< 180s velocidad de contacto',
            'Verificación estricta de propiedad',
            'Agendamiento directo en tu ruta'
          ]
        },
        {
          num: '03',
          title: 'Garantía de Asistencia y Reactivación a 60 Días',
          desc: 'Secuencias de SMS y email que aseguran el 94,6% de citas y reactivan proyectos aplazados.',
          points: [
            'Confirmaciones SMS bidireccionales automáticas',
            '0€ de coste en cancelaciones',
            'Reactivación a 60 días para proyectos futuros'
          ]
        }
      ]
    },
    caseStudies: {
      tag: 'RESULTADOS COMPROBADOS',
      title: 'Casos Reales de Clientes',
      subtitle: 'Cifras reales de empresas de reformas que han crecido con nuestro modelo de pago por presupuesto.',
      cases: [
        {
          client: 'Apex Cubiertas y Tejados',
          trade: 'Sustitución de Tejados',
          location: 'Madrid y alrededores',
          metric: '318.000€',
          metricLabel: 'Facturación añadida en 90 días',
          quote: 'ShownLeads eliminó por completo el riesgo de las agencias. Tuvimos 28 visitas el primer mes sin hacer una sola llamada en frío.',
          author: 'David M., Director'
        },
        {
          client: 'Vanguard Cocinas y Baños',
          trade: 'Reformas Integrales de Cocina',
          location: 'Barcelona',
          metric: '96,2%',
          metricLabel: 'Tasa de Citas Realizadas',
          quote: 'Los teleoperadores son magníficos. Los propietarios ya nos están esperando en la puerta con las medidas y el presupuesto.',
          author: 'Sean O., Tasador Principal'
        },
        {
          client: 'Nordic Resinas y Pavimentos',
          trade: 'Suelos de Epoxi y Garajes',
          location: 'Valencia y Levante',
          metric: '4,8x ROI',
          metricLabel: 'Retorno sobre gasto publicitario',
          quote: 'Bloqueamos a los competidores en nuestro radio. Pagar solo por visita realizada es el único modelo transparente.',
          author: 'Marcus H., Fundador'
        }
      ]
    }
  },

  de: {
    common: {
      backToHome: 'Zurück zur Startseite',
      checkEligibility: 'Gebietsverfügbarkeit prüfen',
      talkToSpecialist: 'Mit Spezialisten sprechen',
      territoryLockNotice: 'Strikter Gebietsschutz: 1 Partner pro Gewerk und Stadt. Mitbewerber sind ausgeschlossen.',
      viewAll: 'Alle anzeigen',
      searchPlaceholder: 'Gewerk oder Spezialisierung suchen...',
    },
    company: {
      tag: 'ÜBER SHOWNLEADS',
      title: 'Entwickelt, um monatliche Agentur-Retainer abzuschaffen',
      subtitle: 'Wir koppeln 100% unseres wirtschaftlichen Erfolgs daran, ob geprüfte Hauseigentümer den Vor-Ort-Termin wahrnehmen.',
      tabs: {
        about: 'Über Uns',
        team: 'Geschäftsführung',
        principles: 'Grundsätze',
        news: 'Aktuelles & Presse',
      },
      aboutHeading: 'Warum wir ShownLeads gegründet haben',
      aboutP1: 'Über viele Jahre hinweg wurden Handwerks- und Montagebetriebe von klassischen Agenturen enttäuscht, die tausende Euro Vorauszahlung verlangten und kalte Telefonlisten lieferten. Wenn der Eigentümer nicht erreichbar ist oder absagt, behält die Agentur das Geld und Sie tragen den vollen Verlust.',
      aboutP2: 'ShownLeads hat das Prinzip umgekehrt. Wir investieren eigenes Werbebudget, qualifizieren Interessenten telefonisch und tragen bestätigte Termine direkt in Ihre Tourenplanung ein. Sagt der Kunde ab, zahlen Sie 0€.',
      principlesHeading: 'Unsere Grundsätze',
      principles: [
        {
          num: '01',
          title: 'Symmetrisches wirtschaftliches Risiko',
          desc: 'Keine monatlichen Pauschalen. Wir werden nur vergütet, wenn ein echter Vor-Ort-Termin stattfindet.'
        },
        {
          num: '02',
          title: 'Strikte Gebietshoheit',
          desc: '1 Partner pro Gewerk in jeder Stadt. Wir verkaufen Ihre Anfragen niemals an die lokale Konkurrenz.'
        },
        {
          num: '03',
          title: '100% Dateneigentum',
          desc: 'Sie behalten die volle Kontrolle über Ihre Werbekonten, Kundenlisten und Pixeldaten.'
        }
      ]
    },
    leadGen: {
      tag: 'ABSIHTSGESTEUERTE ANFRAGEMASCHINE',
      title: 'Gewinnung kaufkräftiger Hauseigentümer',
      subtitle: 'Gezielte Ansprache von Eigentümern mit hohem Haushaltseinkommen, die aktiv nach Sanierungen im Umkreis suchen.',
      criteriaHeading: 'Unsere 4-Stufen-Qualifizierung',
      criteria: [
        {
          title: '1. Verifizierter Eigentümerstatus',
          desc: 'Wir filtern Mieter und Personen, die lediglich Kleinreparaturen suchen, konsequent heraus.',
          tag: 'Hauseigentümer'
        },
        {
          title: '2. Ausreichendes Projektbudget',
          desc: 'Interessenten müssen ein Mindestbudget passend zu Ihrem Auftragswert (ab 3.500€) bestätigen.',
          tag: 'Budget Bestätigt'
        },
        {
          title: '3. Konkreter Umsetzungszeitraum',
          desc: 'Keine unverbindlichen Langzeitsucher. Alle Kontakte sind bereit für ein Angebot innerhalb von 14–45 Tagen.',
          tag: 'Reisefertig'
        },
        {
          title: '4. Direkte Touren-Synchronisierung',
          desc: 'Bestätigte Termine werden direkt in die Route Ihres Bauleiters eingetragen.',
          tag: 'Im Kalender'
        }
      ],
      roiTitle: 'Interaktiver Umsatzpotenzial-Rechner',
      ticketLabel: 'Durchschnittlicher Auftragswert',
      volumeLabel: 'Termine pro Monat',
      estRevenue: 'Geschätzter monatlicher Bruttoumsatz',
      estProfit: 'Geschätzter Reingewinn'
    },
    appointments: {
      tag: 'TELEFONISCHE TERMINQUALIFIZIERUNG',
      title: 'Bestätigte Vor-Ort-Besichtigungstermine',
      subtitle: 'Unser geschultes Team ruft innerhalb von 180 Sekunden an, um Eigentum und Budget abzusichern und Ihre Route zu planen.',
      stat1Label: 'Reaktionszeit',
      stat1Desc: 'Wir rufen jeden Interessenten in unter 180 Sekunden an, solange das Kaufinteresse am höchsten ist.',
      stat2Label: 'Verifizierte Termintreue',
      stat2Desc: 'Automatisierte SMS-Erinnerungen und Routenabstimmung am Morgen des Termins.',
      stat3Label: 'Gebühr bei Nichterscheinen',
      stat3Desc: 'Sagt der Kunde ab oder ist nicht zuhause, beträgt Ihre Gebühr genau 0€.',
      workflowHeading: 'Wie wir 94,6% Termintreue erreichen',
      workflowSteps: [
        {
          step: '01',
          title: 'Telefonat innerhalb von 180 Sekunden',
          desc: 'Unser Disponent ruft sofort an, um Wohneigentum und Projektumfang abzugleichen.'
        },
        {
          step: '02',
          title: 'Eintragung in Ihre Routenplanung',
          desc: 'Der Termin wird passend zu Ihrem Fahrgebiet direkt in den Kalender gebucht.'
        },
        {
          step: '03',
          title: 'SMS-Erinnerung am Vortag und Morgen',
          desc: 'Automatische SMS stellen sicher, dass die Entscheidungsträger vor Ort sind.'
        },
        {
          step: '04',
          title: 'Hinfahren und Auftrag sichern',
          desc: 'Ihr Bauleiter berät vor Ort und schließt den Vertrag ab.'
        }
      ]
    },
    ourCompanies: {
      tag: 'GEWERKE & BRANCHEN',
      title: 'Gewerke, auf die wir spezialisiert sind',
      subtitle: 'Exklusive Partnerschaften mit Betrieben mit einem durchschnittlichen Auftragswert ab 3.500€.',
      badgeExclusivity: 'Strikter 1-Partner-Gebietsschutz',
      badgeMinTicket: 'Mindestauftragswert: 3.500€',
      searchPlaceholder: 'Gewerk suchen (z.B. Küchen, Dächer, Klimatechnik)...',
      allFilter: 'Alle Gewerke',
      interiorFilter: 'Innenausbau',
      exteriorFilter: 'Dach & Fassade',
      mechanicalFilter: 'TGA & Energie'
    },
    ourServices: {
      tag: 'VOLLSTÄNDIGE TERMININFRASTRUKTUR',
      title: 'Unsere 3 Wachstumssysteme',
      subtitle: 'Alles, was Sie benötigen, um Ihren Fachbetrieb ohne monatliche Agentur-Retainer profitabel zu skalieren.',
      services: [
        {
          num: '01',
          title: 'Zielgruppenpixel & Werbemittel',
          desc: 'Hochwertige Video- und Fotoreihen, die Sanierungen in Ihrem exakten Einzugsgebiet präsentieren.',
          points: [
            'Einkommensstarke Postleitzahlengebiete',
            'Aufmerksamkeitsstarke Vorher-Nachher-Videos',
            'Werbetexte, die Billigsucher fernhalten'
          ]
        },
        {
          num: '02',
          title: 'Eigenes Disponenten- und Telefonteam',
          desc: 'Geschulte Fachkräfte rufen jede Anfrage innerhalb von 180 Sekunden an, um Budget und Machbarkeit zu prüfen.',
          points: [
            '< 180 Sekunden Anrufprotokoll',
            'Prüfung des Hauseigentums',
            'Direkte Terminbuchung in Ihren Kalender'
          ]
        },
        {
          num: '03',
          title: 'Termingarantie & 60-Tage-Nachfass',
          desc: 'Automatisierte SMS- und E-Mail-Workflows für 94,6% Termintreue und Nachfassen bei späteren Bauvorhaben.',
          points: [
            'Automatisierte SMS-Terminbestätigung',
            '0€ Kosten bei Absagen durch Kunden',
            '60 Tage Begleitung für spätere Projekte'
          ]
        }
      ]
    },
    caseStudies: {
      tag: 'GEPRÜFTE ERGEBNISSE',
      title: 'Echte Partner-Fallstudien',
      subtitle: 'Verifizierte Kennzahlen von Handwerksunternehmen, die mit unserem Modell gewachsen sind.',
      cases: [
        {
          client: 'Apex Dachsysteme',
          trade: 'Metalldacheindeckung & Spenglerei',
          location: 'München & Oberbayern',
          metric: '318.000€',
          metricLabel: 'Zusatzumsatz in 90 Tagen',
          quote: 'ShownLeads hat das Risiko klassischer Agenturen komplett abgeschafft. 28 Vor-Ort-Termine im ersten Monat ohne eigene Kaltakquise.',
          author: 'David M., Geschäftsführer'
        },
        {
          client: 'Vanguard Küchen & Bäder',
          trade: 'Badsanierung & Küchenumbau',
          location: 'Köln / Düsseldorf',
          metric: '96,2%',
          metricLabel: 'Verifizierte Termintreue',
          quote: 'Die Vorqualifizierung ist erstklassig. Die Eigentümer erwarten uns bereits pünktlich an der Haustür.',
          author: 'Stefan O., Bauleiter'
        },
        {
          client: 'Nordic Epoxidharzböden',
          trade: 'Industrie- & Garagenböden',
          location: 'Frankfurt & Rhein-Main',
          metric: '4,8x ROI',
          metricLabel: 'Return on Ad Spend',
          quote: 'Wir haben uns das gesamte Einzugsgebiet exklusiv gesichert. Nur für echte Termine zu zahlen ist absolut fair.',
          author: 'Marcus H., Inhaber'
        }
      ]
    }
  }
};
