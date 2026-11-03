export interface MobileMockupTranslations {
  target: {
    header: string;
    sub: string;
    tapTip: string;
    targeted: string;
    filteredOut: string;
    adRouting: string;
    active: string;
    blocked: string;
    householdIncome: string;
    homeowners: string;
    mapDisclaimer: string;
  };
  ad: {
    sponsored: string;
    activeAd: string;
    clickToPlay: string;
    freeQuotes: string;
    exclusiveForHomeowners: string;
    getQuote: string;
  };
  copy: {
    badge: string;
    headline: string;
    body: string;
    feature1: string;
    feature2: string;
  };
  qualify: {
    title: string;
    subtitle: string;
    qRadius: string;
    qHomeowner: string;
    qPayment: string;
    qScope: string;
    qTimeline: string;
    yes: string;
    no: string;
    paymentOptions: string[];
    scopeOptions: string[];
    timelineOptions: string[];
    qualified: string;
  };
  book: {
    title: string;
    subtitle: string;
    days: string[];
    note: string;
    confirm: string;
    booked: string;
  };
  remind: {
    title: string;
    dispatchBadge: string;
    messageText: string;
    confirmed: string;
  };
  geo: {
    searchTitle: string;
    rankBadge: string;
    subtitle: string;
    fullView: string;
    recommendationTitle: string;
    recommendationDesc: string;
    rankedTop: string;
  };
  estimator: {
    title: string;
    subtitle: string;
    tag: string;
    cardTitle: string;
    cardSubtitle: string;
    generated: string;
  };
}

export interface LocalizedPprContent {
  headerTag: string;
  headerTitle: string;
  steps: {
    num: string;
    title: string;
    desc: string;
  }[];
  mapTargeted: string;
  mapExcluded: string;
  mapConfirmedEstimate: string;
  surveyQuestion: string;
  surveyAnswerOptions: string[];
  calendarSlot: string;
  smsNotification: string;
  mobile: MobileMockupTranslations;
}

export const PPR_TRANSLATIONS: Record<'en' | 'sv' | 'es' | 'de', LocalizedPprContent> = {
  en: {
    headerTag: 'HOW IT WORKS',
    headerTitle: 'From ad to booked sit.',
    steps: [
      {
        num: '01',
        title: 'Target',
        desc: 'Only high-income ZIP codes.'
      },
      {
        num: '02',
        title: 'Generative Engine Optimisation',
        desc: 'Get your company ranking on AI tools.'
      },
      {
        num: '03',
        title: 'Ad',
        desc: 'Video that stops the scroll.'
      },
      {
        num: '04',
        title: 'Copy',
        desc: 'Direct response, no fluff.'
      },
      {
        num: '05',
        title: 'Qualify',
        desc: 'Renters and DIYers filtered out.'
      },
      {
        num: '06',
        title: 'Book',
        desc: 'Homeowners pick a slot on your route.'
      },
      {
        num: '07',
        title: 'Instant Estimator Tool',
        desc: 'Provide a full estimate in 2 minutes instead of sending it in 2 days.'
      },
      {
        num: '08',
        title: 'Remind',
        desc: 'SMS reminders so 94.6% show up.'
      }
    ],
    mapTargeted: 'Targeted ($90k+ Income)',
    mapExcluded: 'Filtered Out (Low Income)',
    mapConfirmedEstimate: 'CONFIRMED ESTIMATE',
    surveyQuestion: 'Are you the verified homeowner?',
    surveyAnswerOptions: ['Yes, Sole Owner', 'Yes, Joint Owner', 'Renting / Tenant'],
    calendarSlot: 'Route Slot Confirmed',
    smsNotification: 'Reminder sent: Estimator arriving at 2:00 PM.',
    mobile: {
      target: {
        header: 'Target area',
        sub: 'Tampa Bay, FL',
        tapTip: 'Tap any $ figure to inspect',
        targeted: 'Targeted',
        filteredOut: 'Filtered Out',
        adRouting: 'Ad Routing',
        active: 'Active',
        blocked: 'Blocked',
        householdIncome: 'Household Income',
        homeowners: 'Homeowners',
        mapDisclaimer: 'Map figures are examples.'
      },
      ad: {
        sponsored: 'Sponsored',
        activeAd: 'Active Ad',
        clickToPlay: 'Click to play ad',
        freeQuotes: 'Free in-home quotes',
        exclusiveForHomeowners: 'Exclusive for local homeowners',
        getQuote: 'Get quote'
      },
      copy: {
        badge: 'Direct response copy',
        headline: 'Ever been stuck in a grocery line that never seems to move?',
        body: 'What a bathroom remodel feels like with the wrong bathroom remodeler.',
        feature1: 'Waterproof luxury finishes',
        feature2: '5-day completion'
      },
      qualify: {
        title: 'Quick check',
        subtitle: 'Takes 30 seconds',
        qRadius: 'Are you within a 100 km radius?',
        qHomeowner: 'Are you the homeowner?',
        qPayment: 'How will you be paying?',
        qScope: 'Scope of work?',
        qTimeline: 'When do you need this done?',
        yes: 'Yes',
        no: 'No',
        paymentOptions: ['Insurance', 'Cash', 'Finance'],
        scopeOptions: ['Replacement', 'Repair', 'Remodel'],
        timelineOptions: ['ASAP', '1-3 mo', '3+ mo'],
        qualified: 'Qualified'
      },
      book: {
        title: 'Pick a time',
        subtitle: 'Available route slots',
        days: ['Mon 11', 'Tue 12', 'Wed 13', 'Thu 14'],
        note: 'Sit-down times route-locked with your crew.',
        confirm: 'Confirm',
        booked: 'Booked'
      },
      remind: {
        title: 'Messages',
        dispatchBadge: 'Automated Dispatch',
        messageText: 'Hi Sarah, your estimate is tomorrow at 10:00 with Dave. Reply 1 to confirm, 2 to reschedule.',
        confirmed: 'Confirmed'
      },
      geo: {
        searchTitle: 'ChatGPT Search',
        rankBadge: 'Rank #1',
        subtitle: 'Generative Engine Optimisation',
        fullView: 'Full View',
        recommendationTitle: 'AI Tool Recommendation',
        recommendationDesc: 'ChatGPT cites SLC Connections LLC as #1 option',
        rankedTop: 'Ranked Top'
      },
      estimator: {
        title: 'Instant Estimator',
        subtitle: 'AI Measurement & Scope',
        tag: '2 Min Quote',
        cardTitle: 'Automated Scope & Price',
        cardSubtitle: 'Sent to homeowner in 2 minutes',
        generated: 'Generated'
      }
    }
  },

  sv: {
    headerTag: 'HUR DET FUNGERAR',
    headerTitle: 'Från annons till bokat möte.',
    steps: [
      {
        num: '01',
        title: 'Målgrupp',
        desc: 'Endast postnummer med hög köpkraft.'
      },
      {
        num: '02',
        title: 'Generativ motoroptimering (GEO)',
        desc: 'Få ditt företag rankat i AI-verktyg.'
      },
      {
        num: '03',
        title: 'Annons',
        desc: 'Video som fångar uppmärksamheten.'
      },
      {
        num: '04',
        title: 'Copy',
        desc: 'Direkt respons, inget fluff.'
      },
      {
        num: '05',
        title: 'Kvalificera',
        desc: 'Hyresgäster och gör-det-självare filtreras bort.'
      },
      {
        num: '06',
        title: 'Boka',
        desc: 'Husägare väljer en tid i din rutt.'
      },
      {
        num: '07',
        title: 'Instant Estimator Tool',
        desc: 'Ge en fullständig offert på 2 minuter istället för 2 dagar.'
      },
      {
        num: '08',
        title: 'Påminnelse',
        desc: 'SMS-påminnelser så 94,6% faktiskt kommer.'
      }
    ],
    mapTargeted: 'Målgrupp (Hög inkomst & köpkraft)',
    mapExcluded: 'Bortfiltrerad (Låg inkomst)',
    mapConfirmedEstimate: 'BEKRÄFTAT OFFERTBESÖK',
    surveyQuestion: 'Äger du fastigheten/villan?',
    surveyAnswerOptions: ['Ja, ensam ägare', 'Ja, delägare', 'Hyr bostaden'],
    calendarSlot: 'Rutttid bekräftad i kalender',
    smsNotification: 'Påminnelse skickad: Kalkylator anländer kl. 14:00.',
    mobile: {
      target: {
        header: 'Målområde',
        sub: 'Tampa Bay, FL',
        tapTip: 'Klicka på ett belopp för att granska',
        targeted: 'Målgrupp',
        filteredOut: 'Bortfiltrerad',
        adRouting: 'Annonsstyrning',
        active: 'Aktiv',
        blocked: 'Blockerad',
        householdIncome: 'Hushållsinkomst',
        homeowners: 'Bostadsägare',
        mapDisclaimer: 'Kartans siffror är exempel.'
      },
      ad: {
        sponsored: 'Sponsrad',
        activeAd: 'Aktiv annons',
        clickToPlay: 'Klicka för att spela video',
        freeQuotes: 'Kostnadsfri offert på plats',
        exclusiveForHomeowners: 'Exklusivt för lokala villaägare',
        getQuote: 'Få offert'
      },
      copy: {
        badge: 'Direktrespons-copy',
        headline: 'Har du någonsin fastnat i en matbutikskö som aldrig rör sig?',
        body: 'Precis så känns en badrumsrenovering med fel entreprenör.',
        feature1: 'Vattensäkra premiumytor',
        feature2: 'Färdigt på 5 dagar'
      },
      qualify: {
        title: 'Snabbkoll',
        subtitle: 'Tar 30 sekunder',
        qRadius: 'Är du inom 100 km radie?',
        qHomeowner: 'Äger du bostaden/villan?',
        qPayment: 'Hur planerar du att betala?',
        qScope: 'Projektets omfattning?',
        qTimeline: 'När behöver det vara klart?',
        yes: 'Ja',
        no: 'Nej',
        paymentOptions: ['Försäkring', 'Kontant', 'Finansiering'],
        scopeOptions: ['Byte', 'Reparation', 'Renovering'],
        timelineOptions: ['Snarast', '1-3 mån', '3+ mån'],
        qualified: 'Kvalificerad'
      },
      book: {
        title: 'Välj en tid',
        subtitle: 'Tillgängliga tider i din rutt',
        days: ['Mån 11', 'Tis 12', 'Ons 13', 'Tor 14'],
        note: 'Bokade tider ruttoptimeras direkt med ditt team.',
        confirm: 'Bekräfta',
        booked: 'Bokat'
      },
      remind: {
        title: 'Meddelanden',
        dispatchBadge: 'Automatisk avisering',
        messageText: 'Hej Sara, ditt offertbesök är imorgon kl 10:00 med David. Svara 1 för att bekräfta, 2 för att boka om.',
        confirmed: 'Bekräftad'
      },
      geo: {
        searchTitle: 'ChatGPT Sök',
        rankBadge: 'Rank #1',
        subtitle: 'Generativ motoroptimering',
        fullView: 'Full vy',
        recommendationTitle: 'AI-rekommendation',
        recommendationDesc: 'ChatGPT rekommenderar företaget som förstahandsval',
        rankedTop: 'Rankad 1:a'
      },
      estimator: {
        title: 'Instant Estimator',
        subtitle: 'AI-mätning och kalkyl',
        tag: '2 min offert',
        cardTitle: 'Automatiserat pris & omfattning',
        cardSubtitle: 'Skickas till villaägaren på 2 minuter',
        generated: 'Skapad'
      }
    }
  },

  es: {
    headerTag: 'CÓMO FUNCIONA',
    headerTitle: 'Del anuncio a la visita agendada.',
    steps: [
      {
        num: '01',
        title: 'Segmentación',
        desc: 'Solo códigos postales de altos ingresos.'
      },
      {
        num: '02',
        title: 'Optimización de Motores Generativos (GEO)',
        desc: 'Posiciona tu empresa en herramientas de IA.'
      },
      {
        num: '03',
        title: 'Anuncio',
        desc: 'Vídeo que detiene el scroll.'
      },
      {
        num: '04',
        title: 'Copywriting',
        desc: 'Respuesta directa sin rodeos.'
      },
      {
        num: '05',
        title: 'Cualificación',
        desc: 'Inquilinos y curiosos filtrados.'
      },
      {
        num: '06',
        title: 'Reserva',
        desc: 'Los propietarios eligen un hueco en tu ruta.'
      },
      {
        num: '07',
        title: 'Instant Estimator Tool',
        desc: 'Ofrece un presupuesto completo en 2 minutos en vez de tardar 2 días.'
      },
      {
        num: '08',
        title: 'Recordatorio',
        desc: 'SMS automatizados para un 94,6% de asistencia.'
      }
    ],
    mapTargeted: 'Segmentado (Ingresos > 90k€)',
    mapExcluded: 'Excluido (Bajos ingresos)',
    mapConfirmedEstimate: 'PRESUPUESTO CONFIRMADO',
    surveyQuestion: '¿Eres el propietario de la vivienda?',
    surveyAnswerOptions: ['Sí, único propietario', 'Sí, copropietario', 'Alquiler / Inquilino'],
    calendarSlot: 'Hueco de ruta confirmado',
    smsNotification: 'Recordatorio enviado: El tasador llega a las 14:00.',
    mobile: {
      target: {
        header: 'Área objetivo',
        sub: 'Tampa Bay, FL',
        tapTip: 'Toca cualquier cifra para inspeccionar',
        targeted: 'Segmentado',
        filteredOut: 'Filtrado',
        adRouting: 'Enrutamiento del anuncio',
        active: 'Activo',
        blocked: 'Bloqueado',
        householdIncome: 'Ingresos del hogar',
        homeowners: 'Propietarios',
        mapDisclaimer: 'Las cifras del mapa son ejemplos.'
      },
      ad: {
        sponsored: 'Patrocinado',
        activeAd: 'Anuncio activo',
        clickToPlay: 'Clic para reproducir anuncio',
        freeQuotes: 'Presupuestos gratuitos a domicilio',
        exclusiveForHomeowners: 'Exclusivo para propietarios locales',
        getQuote: 'Pedir presupuesto'
      },
      copy: {
        badge: 'Copywriting directo',
        headline: '¿Alguna vez te has quedado atrapado en una cola del supermercado que nunca avanza?',
        body: 'Así se siente una reforma de baño con el contratista equivocado.',
        feature1: 'Acabados de lujo impermeables',
        feature2: 'Terminado en 5 días'
      },
      qualify: {
        title: 'Comprobación rápida',
        subtitle: 'Toma 30 segundos',
        qRadius: '¿Estás a menos de 100 km de distancia?',
        qHomeowner: '¿Eres el propietario de la vivienda?',
        qPayment: '¿Cómo vas a financiar el proyecto?',
        qScope: '¿Alcance del trabajo?',
        qTimeline: '¿Cuándo necesitas tenerlo listo?',
        yes: 'Sí',
        no: 'No',
        paymentOptions: ['Seguro', 'Al contado', 'Financiación'],
        scopeOptions: ['Sustitución', 'Reparación', 'Reforma'],
        timelineOptions: ['Urgente', '1-3 meses', '+3 meses'],
        qualified: 'Cualificado'
      },
      book: {
        title: 'Elige una hora',
        subtitle: 'Huecos de ruta disponibles',
        days: ['Lun 11', 'Mar 12', 'Mié 13', 'Jue 14'],
        note: 'Horarios de visita bloqueados en ruta con tu equipo.',
        confirm: 'Confirmar',
        booked: 'Reservado'
      },
      remind: {
        title: 'Mensajes',
        dispatchBadge: 'Envío automatizado',
        messageText: 'Hola Sara, tu presupuesto es mañana a las 10:00 con David. Responde 1 para confirmar o 2 para cambiar fecha.',
        confirmed: 'Confirmado'
      },
      geo: {
        searchTitle: 'Búsqueda en ChatGPT',
        rankBadge: 'Puesto #1',
        subtitle: 'Optimización de Motores Generativos',
        fullView: 'Ver completo',
        recommendationTitle: 'Recomendación de IA',
        recommendationDesc: 'ChatGPT recomienda la empresa como 1ª opción',
        rankedTop: 'Nº 1 destacado'
      },
      estimator: {
        title: 'Instant Estimator',
        subtitle: 'Medición y presupuesto por IA',
        tag: 'Presupuesto en 2 min',
        cardTitle: 'Alcance y precio automatizados',
        cardSubtitle: 'Enviado al propietario en 2 minutos',
        generated: 'Generado'
      }
    }
  },

  de: {
    headerTag: 'WIE ES FUNKTIONIERT',
    headerTitle: 'Von der Anzeige zum gebuchten Vor-Ort-Termin.',
    steps: [
      {
        num: '01',
        title: 'Zielgruppe',
        desc: 'Nur einkommensstarke Postleitzahlengebiete.'
      },
      {
        num: '02',
        title: 'Generative Engine Optimisation (GEO)',
        desc: 'Bringen Sie Ihr Unternehmen in KI-Tools nach oben.'
      },
      {
        num: '03',
        title: 'Werbevideo',
        desc: 'Videos, die sofort die Aufmerksamkeit fesseln.'
      },
      {
        num: '04',
        title: 'Werbetext',
        desc: 'Direktes Angebot ohne Umschweife.'
      },
      {
        num: '05',
        title: 'Qualifizierung',
        desc: 'Mieter und Schnäppchenjäger herausgefiltert.'
      },
      {
        num: '06',
        title: 'Terminbuchung',
        desc: 'Eigentümer wählen ein freies Zeitfenster.'
      },
      {
        num: '07',
        title: 'Instant Estimator Tool',
        desc: 'Erstellen Sie ein vollständiges Angebot in 2 Minuten statt 2 Tagen.'
      },
      {
        num: '08',
        title: 'Erinnerung',
        desc: 'Automatische SMS-Erinnerungen für 94,6% Termintreue.'
      }
    ],
    mapTargeted: 'Zielgebiet (Einkommen ab 90k€)',
    mapExcluded: 'Herausgefiltert (Geringes Einkommen)',
    mapConfirmedEstimate: 'BESTÄTIGTER BESICHTIGUNGSTERMIN',
    surveyQuestion: 'Sind Sie eingetragener Eigentümer?',
    surveyAnswerOptions: ['Ja, Alleineigentümer', 'Ja, Miteigentümer', 'Mietobjekt / Mieter'],
    calendarSlot: 'Routenfenster bestätigt',
    smsNotification: 'Erinnerung gesendet: Bauleiter trifft um 14:00 Uhr ein.',
    mobile: {
      target: {
        header: 'Zielgebiet',
        sub: 'Tampa Bay, FL',
        tapTip: 'Betrag antippen zur Detailansicht',
        targeted: 'Zielgruppe',
        filteredOut: 'Herausgefiltert',
        adRouting: 'Werbeschaltung',
        active: 'Aktiv',
        blocked: 'Blockiert',
        householdIncome: 'Haushaltseinkommen',
        homeowners: 'Hauseigentümer',
        mapDisclaimer: 'Kartenzahlen dienen als Beispiele.'
      },
      ad: {
        sponsored: 'Gesponsert',
        activeAd: 'Aktive Anzeige',
        clickToPlay: 'Klicken zum Abspielen',
        freeQuotes: 'Kostenlose Vor-Ort-Angebote',
        exclusiveForHomeowners: 'Exklusiv für lokale Eigentümer',
        getQuote: 'Angebot anfordern'
      },
      copy: {
        badge: 'Direktwerbetext',
        headline: 'Schon mal an einer Supermarktkasse gestanden, die sich einfach nicht bewegt?',
        body: 'Genauso fühlt sich eine Badsanierung mit dem falschen Handwerker an.',
        feature1: 'Wasserdichte Premium-Oberflächen',
        feature2: 'Fertigstellung in 5 Tagen'
      },
      qualify: {
        title: 'Kurzcheck',
        subtitle: 'Dauert 30 Sekunden',
        qRadius: 'Befinden Sie sich im Umkreis von 100 km?',
        qHomeowner: 'Sind Sie der Eigentümer der Immobilie?',
        qPayment: 'Wie möchten Sie bezahlen?',
        qScope: 'Umfang der Arbeiten?',
        qTimeline: 'Bis wann soll es fertig sein?',
        yes: 'Ja',
        no: 'Nein',
        paymentOptions: ['Versicherung', 'Bar / Überweisung', 'Finanzierung'],
        scopeOptions: ['Austausch', 'Reparatur', 'Sanierung'],
        timelineOptions: ['Sofort', '1-3 Monate', '3+ Monate'],
        qualified: 'Qualifiziert'
      },
      book: {
        title: 'Uhrzeit wählen',
        subtitle: 'Verfügbare Routenzeitfenster',
        days: ['Mo 11', 'Di 12', 'Mi 13', 'Do 14'],
        note: 'Besichtigungstermine fest in die Route Ihres Teams eingetaktet.',
        confirm: 'Bestätigen',
        booked: 'Gebucht'
      },
      remind: {
        title: 'Nachrichten',
        dispatchBadge: 'Automatisierter Versand',
        messageText: 'Hallo Sarah, Ihr Vor-Ort-Termin ist morgen um 10:00 Uhr mit Dave. Antworten Sie mit 1 zum Bestätigen, 2 zum Verschieben.',
        confirmed: 'Bestätigt'
      },
      geo: {
        searchTitle: 'ChatGPT Suche',
        rankBadge: 'Rang #1',
        subtitle: 'Generative Engine Optimisation',
        fullView: 'Vollansicht',
        recommendationTitle: 'KI-Empfehlung',
        recommendationDesc: 'ChatGPT empfiehlt das Unternehmen als erste Wahl',
        rankedTop: 'Top-Platzierung'
      },
      estimator: {
        title: 'Instant Estimator',
        subtitle: 'KI-Aufmaß & Kalkulation',
        tag: '2-Min-Angebot',
        cardTitle: 'Automatisierter Umfang & Preis',
        cardSubtitle: 'In 2 Minuten beim Eigentümer',
        generated: 'Erstellt'
      }
    }
  }
};
