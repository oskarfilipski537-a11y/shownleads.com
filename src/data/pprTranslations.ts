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
    smsNotification: 'Reminder sent: Estimator arriving at 2:00 PM.'
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
    smsNotification: 'Påminnelse skickad: Kalkylator anländer kl. 14:00.'
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
    smsNotification: 'Recordatorio enviado: El tasador llega a las 14:00.'
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
    smsNotification: 'Erinnerung gesendet: Bauleiter trifft um 14:00 Uhr ein.'
  }
};
