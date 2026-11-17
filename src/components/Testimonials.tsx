import React, { useState } from 'react';
import { Star, ShieldCheck, ArrowRight, MessageCircle, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialsProps {
  onOpenQuiz?: () => void;
}

interface TestimonialCardData {
  image: string;
  name: string;
  company: string;
  niche: string;
  quote: string;
  result: string;
  stats: {
    shownEstimates: number;
    closedJobs: number;
    ticketValue: string;
  };
}

interface WhatsAppTestimonial {
  image: string;
  tag: string;
  caption: string;
  location: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenQuiz }) => {
  const { language } = useLanguage();
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const testimonialsByLang: Record<string, {
    tag: string;
    titlePart1: string;
    titleSpan: string;
    subtitle: string;
    ctaButton: string;
    cards: TestimonialCardData[];
    waTag: string;
    waTitlePart1: string;
    waTitleSpan: string;
    waSubtitle: string;
    waItems: WhatsAppTestimonial[];
  }> = {
    en: {
      tag: 'HOW OUR PROCESS WORKS',
      titlePart1: 'BUILT FOR ATTIC ',
      titleSpan: 'INSULATION CONTRACTORS.',
      subtitle: 'Designed for attic insulation contractors and business owners. We run the ads, qualify homeowners and book estimate appointments on your calendar, and you pay per appointment that shows.',
      ctaButton: 'See If Your City Is Available',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Local Ad Campaigns',
          company: 'Targeted Homeowner Reach',
          niche: 'Step 01 · Advertising',
          quote: 'We run paid ads tailored for homeowners in your service area who are looking for attic insulation estimates.',
          result: 'Built for attic insulation contractors',
          stats: { shownEstimates: 1, closedJobs: 1, ticketValue: 'Local Ads' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'Homeowner Screening',
          company: 'Property & Scope Checks',
          niche: 'Step 02 · Qualification',
          quote: 'We qualify homeowners on location, property ownership, and attic project scope before scheduling any visit.',
          result: 'No shared contact lists sold',
          stats: { shownEstimates: 2, closedJobs: 1, ticketValue: 'Qualified' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Price Education',
          company: 'Clear Expectations',
          niche: 'Step 03 · Preparation',
          quote: 'On our price-educated option, we speak with homeowners beforehand so they understand your pricing before you arrive.',
          result: 'Reminders sent prior to appointment',
          stats: { shownEstimates: 3, closedJobs: 1, ticketValue: 'Prepared' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Booked Calendar Sits',
          company: 'Pay Per Shown Appointment',
          niche: 'Step 04 · Appointment',
          quote: 'Booked estimate appointments go straight onto your calendar. If a homeowner cancels or does not show up, you owe $0.',
          result: 'Pay only when the homeowner shows',
          stats: { shownEstimates: 4, closedJobs: 0, ticketValue: '$97–$197' }
        }
      ],
      waTag: 'DISPATCH COMMUNICATION',
      waTitlePart1: 'DIRECT CONTRACTOR ',
      waTitleSpan: 'SCHEDULING UPDATES.',
      waSubtitle: 'Examples of direct scheduling and appointment confirmation updates used while coordinating booked estimate appointments.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Dispatch Example #1',
          caption: 'Booked estimate confirmation update',
          location: 'Scheduling'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Dispatch Example #2',
          caption: 'Calendar slot coordination message',
          location: 'Route Sync'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Dispatch Example #3',
          caption: 'Homeowner attendance confirmation',
          location: 'Follow-Up'
        }
      ]
    },
    sv: {
      tag: 'SÅ FUNGERAR PROCESSEN',
      titlePart1: 'BYGGT FÖR ',
      titleSpan: 'ISOLERINGSFÖRETAG.',
      subtitle: 'För entreprenörer och företagare inom vindsisolering. Vi sköter annonsering, kvalificering och kalenderbokning, och du betalar per genomfört möte.',
      ctaButton: 'Se om din stad är ledig',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Lokal Annonsering',
          company: 'Riktade Kampanjer',
          niche: 'Steg 01 · Annonser',
          quote: 'Vi kör betalda annonser riktade till husägare i ditt upptagningsområde som söker offert på vindsisolering.',
          result: 'Anpassat för vindsisolering',
          stats: { shownEstimates: 1, closedJobs: 1, ticketValue: 'Lokalt' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'Kvalificering av Husägare',
          company: 'Kontroll av Omfattning',
          niche: 'Steg 02 · Urval',
          quote: 'Vi kontrollerar ägandeskap, plats och projektomfattning innan ett offertbesök bokas in.',
          result: 'Inga delade kontaktlistor',
          stats: { shownEstimates: 2, closedJobs: 1, ticketValue: 'Granskad' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Prisinformation i Förväg',
          company: 'Tydliga Förväntningar',
          niche: 'Steg 03 · Förberedelse',
          quote: 'Med vårt prisinformerade alternativ pratar vi med husägaren i förväg så att prisnivån är tydlig före besöket.',
          result: 'Påminnelser skickas före mötet',
          stats: { shownEstimates: 3, closedJobs: 1, ticketValue: 'Förberedd' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Bokade Offertbesök',
          company: 'Betala Per Genomfört Möte',
          niche: 'Steg 04 · Kalender',
          quote: 'Bokade offertbesök läggs direkt i din kalender. Uteblir eller avbokar kunden betalar du 0 kr.',
          result: 'Betala endast vid genomfört besök',
          stats: { shownEstimates: 4, closedJobs: 0, ticketValue: '0 kr bom' }
        }
      ],
      waTag: 'BOKNINGSKOMMUNIKATION',
      waTitlePart1: 'DIREKTA ',
      waTitleSpan: 'KALENDERUPPDATERINGAR.',
      waSubtitle: 'Exempel på direkt kommunikation vid samordning av bokade offertbesök.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Exempel #1',
          caption: 'Bekräftelse av bokat offertbesök',
          location: 'Kalender'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Exempel #2',
          caption: 'Samordning av tidsbokning',
          location: 'Planering'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Exempel #3',
          caption: 'Uppföljning inför besök',
          location: 'Uppföljning'
        }
      ]
    },
    es: {
      tag: 'CÓMO FUNCIONA EL PROCESO',
      titlePart1: 'PARA CONTRATISTAS DE ',
      titleSpan: 'AISLAMIENTO DE ÁTICOS.',
      subtitle: 'Servicio de concertación de citas B2B para contratistas y propietarios de empresas de aislamiento de áticos. Gestionamos los anuncios, calificamos propietarios y pagas por cita realizada.',
      ctaButton: 'Comprobar disponibilidad de tu ciudad',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Campañas Locales',
          company: 'Alcance a Propietarios',
          niche: 'Paso 01 · Anuncios',
          quote: 'Publicamos anuncios dirigidos a propietarios de tu zona que buscan presupuestos de aislamiento de áticos.',
          result: 'Enfocado en aislamiento de áticos',
          stats: { shownEstimates: 1, closedJobs: 1, ticketValue: 'Local' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'Cualificación Previa',
          company: 'Revisión de Alcance',
          niche: 'Paso 02 · Filtro',
          quote: 'Verificamos ubicación, titularidad de la vivienda y alcance del trabajo antes de agendar cualquier visita.',
          result: 'No vendemos listas compartidas',
          stats: { shownEstimates: 2, closedJobs: 1, ticketValue: 'Filtrado' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Educación de Precios',
          company: 'Expectativas Claras',
          niche: 'Paso 03 · Preparación',
          quote: 'En la opción con precio informado, hablamos primero con el propietario para que conozca tus tarifas antes de la visita.',
          result: 'Recordatorios antes de la cita',
          stats: { shownEstimates: 3, closedJobs: 1, ticketValue: 'Informado' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Citas en tu Calendario',
          company: 'Pago por Cita Realizada',
          niche: 'Paso 04 · Agenda',
          quote: 'Las citas de presupuesto agendadas llegan directo a tu calendario. Si cancelan o no asisten, pagas $0.',
          result: 'Solo pagas si el cliente asiste',
          stats: { shownEstimates: 4, closedJobs: 0, ticketValue: '$97–$197' }
        }
      ],
      waTag: 'COMUNICACIÓN DE CITAS',
      waTitlePart1: 'ACTUALIZACIONES ',
      waTitleSpan: 'DE AGENDA.',
      waSubtitle: 'Ejemplos de comunicación directa durante la coordinación de citas de presupuesto agendadas.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Ejemplo #1',
          caption: 'Confirmación de cita agendada',
          location: 'Agenda'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Ejemplo #2',
          caption: 'Coordinación de horario de visita',
          location: 'Calendario'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Ejemplo #3',
          caption: 'Seguimiento previo a la visita',
          location: 'Seguimiento'
        }
      ]
    },
    de: {
      tag: 'SO FUNKTIONIERT UNSER PROZESS',
      titlePart1: 'FÜR DACHBODENDÄMMUNGS-',
      titleSpan: 'FACHBETRIEBE.',
      subtitle: 'B2B-Terminvereinbarung für Fachbetriebe und Inhaber im Bereich Dachbodendämmung. Wir schalten Anzeigen, qualifizieren Eigentümer und Sie zahlen pro wahrgenommenem Kostenvoranschlagstermin.',
      ctaButton: 'Prüfen Sie, ob Ihre Stadt verfügbar ist',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Lokale Werbeanzeigen',
          company: 'Regionale Ansprache',
          niche: 'Schritt 01 · Anzeigen',
          quote: 'Wir schalten bezahlte Anzeigen für Hauseigentümer in Ihrem Einsatzgebiet, die Angebote zur Dachbodendämmung suchen.',
          result: 'Fokus auf Dachbodendämmung',
          stats: { shownEstimates: 1, closedJobs: 1, ticketValue: 'Lokal' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'Eigentümer-Vorprüfung',
          company: 'Umfang & Standort',
          niche: 'Schritt 02 · Prüfung',
          quote: 'Wir prüfen Standort, Immobilieneigentum und Projektumfang, bevor ein Kostenvoranschlagstermin gebucht wird.',
          result: 'Keine geteilten Kontaktlisten',
          stats: { shownEstimates: 2, closedJobs: 1, ticketValue: 'Geprüft' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Preisaufklärung vorab',
          company: 'Klare Erwartungen',
          niche: 'Schritt 03 · Vorbereitung',
          quote: 'Bei der preisaufgeklärten Option sprechen wir vorab mit dem Eigentümer, damit der Preisrahmen vor Ihrem Besuch bekannt ist.',
          result: 'Erinnerungen vor dem Termin',
          stats: { shownEstimates: 3, closedJobs: 1, ticketValue: 'Aufgeklärt' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Gebuchte Termine',
          company: 'Zahlung bei Erscheinen',
          niche: 'Schritt 04 · Kalender',
          quote: 'Gebuchte Termine landen direkt in Ihrem Kalender. Bei Absage oder Nichterscheinen zahlen Sie $0.',
          result: 'Zahlung nur bei stattfindendem Termin',
          stats: { shownEstimates: 4, closedJobs: 0, ticketValue: '$97–$197' }
        }
      ],
      waTag: 'TERMINKOMMUNIKATION',
      waTitlePart1: 'DIREKTE ',
      waTitleSpan: 'TERMINUPDATES.',
      waSubtitle: 'Beispiele direkter Terminkommunikation bei der Koordination gebuchter Kostenvoranschlagstermine.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Beispiel #1',
          caption: 'Bestätigung eines gebuchten Termins',
          location: 'Kalender'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Beispiel #2',
          caption: 'Zeitfenster-Abstimmung',
          location: 'Planung'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Beispiel #3',
          caption: 'Terminerinnerung vorab',
          location: 'Nachfassung'
        }
      ]
    }
  };

  const currentContent = testimonialsByLang[language] || testimonialsByLang.en;

  return (
    <section
      id="contractor-testimonials"
      aria-label="Verified Contractor Testimonials"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 aurora-blue-glow blur-3xl -z-0"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <span className="uppercase tracking-widest text-[11px]">
              {currentContent.tag}
            </span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.75rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-6 leading-tight">
            Built for Attic Insulation{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Contractors
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/85 font-normal leading-relaxed max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* 4-Column Grid Super-Optimised Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-20">
          {currentContent.cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-gradient-to-b from-[#0e111d]/95 to-[#080a11]/98 border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_16px_40px_-10px_rgba(37,99,235,0.2)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group backdrop-blur-md"
            >
              {/* Top Hairline Glow Accent */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Card Top: Contractor Image with Top Badge */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] overflow-hidden bg-[#161820]">
                  <img
                    src={card.image}
                    alt={`${card.name} - ${card.company}`}
                    className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a11] via-[#080a11]/20 to-transparent opacity-90" />
                  
                  {/* Floating Niche Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-blue-300 uppercase tracking-wider">
                    {card.niche}
                  </div>
                </div>

                {/* Card Middle: Content */}
                <div className="p-5 sm:p-6 pb-2">
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#f97316] text-[#f97316]"
                      />
                    ))}
                    <span className="text-[11px] font-mono text-gray-400 ml-1.5">B2B Workflow</span>
                  </div>

                  {/* Client quote */}
                  <p className="font-sans text-xs sm:text-[13.5px] text-[#fffdf9]/90 font-normal leading-relaxed mb-4">
                    {card.quote}
                  </p>

                  {/* Result Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-blue-200 mb-3 w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="truncate font-medium">{card.result}</span>
                  </div>

                  {/* Mini Stats Ribbon */}
                  <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 rounded-xl bg-[#121524]/80 border border-white/[0.06] text-center text-xs mb-3">
                    <div>
                      <div className="font-display font-bold text-blue-400 leading-none text-xs sm:text-sm">{card.stats.ticketValue}</div>
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Focus</div>
                    </div>
                    <div className="border-l border-white/10">
                      <div className="font-display font-bold text-white leading-none text-xs sm:text-sm">{card.stats.closedJobs === 0 ? '$0 No-Show' : '1 City'}</div>
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Policy</div>
                    </div>
                    <div className="border-l border-white/10">
                      <div className="font-display font-bold text-white leading-none text-xs sm:text-sm">0{card.stats.shownEstimates}</div>
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Step</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Client Info */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-3 border-t border-white/[0.08]">
                  <div className="font-heading uppercase text-base sm:text-lg text-[#fffdf9] font-medium tracking-tight mb-0.5">
                    {card.name}
                  </div>
                  <div className="font-sans text-xs text-gray-400 truncate">
                    <span>{card.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* THREE WHATSAPP MESSAGE TESTIMONIALS SECTION */}
        <div className="pt-10 pb-16">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="mb-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.14em] font-mono font-medium">
                {currentContent.waTag}
              </span>
            </div>

            <h3 className="font-heading uppercase text-2xl sm:text-4xl text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-tight">
              Contractor Dispatch:{' '}
              <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
                Scheduling Communication
              </span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              {currentContent.waSubtitle}
            </p>
          </div>

          <p className="text-center text-xs font-mono text-gray-400 mb-6">
            Illustrative examples of scheduling messages
          </p>

          {/* 3 WhatsApp Phone / Chat Mockup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {currentContent.waItems.map((wa, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageModal(wa.image)}
                className="relative rounded-[24px] bg-gradient-to-b from-[#0e111d]/95 to-[#080a11]/98 border border-white/[0.08] hover:border-emerald-500/50 hover:shadow-[0_16px_40px_-10px_rgba(16,185,129,0.2)] hover:-translate-y-1.5 p-3 sm:p-3.5 transition-all duration-300 shadow-2xl group cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-md"
              >
                {/* Top hairline emerald glow */}
                <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header bar mimicking WhatsApp chat */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] mb-2.5 text-xs font-sans">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 text-[#25d366]" />
                      </div>
                      <span className="text-[#cfd9e4] font-medium text-[11px] tracking-wide">
                        {wa.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Dispatch</span>
                    </span>
                  </div>

                  {/* Screenshot Image Container */}
                  <div className="relative rounded-[18px] overflow-hidden bg-[#14161f] border border-white/[0.08] shadow-inner aspect-[9/13]">
                    <img
                      src={wa.image}
                      alt={wa.caption}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Subtle hover overlay to prompt zoom */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Zoom Dispatch</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer caption */}
                <div className="pt-3 px-2 flex items-center justify-between text-xs font-sans">
                  <span className="text-gray-300 text-[11px] font-medium truncate">{wa.caption}</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0 ml-2">{wa.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Territory Callout Anchor & Quiz Action */}
        <div className="max-w-2xl mx-auto text-center space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 text-xs text-[#8e9aa8] font-sans">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Built for attic insulation contractors and business owners. Zero upfront retainers—you pay per appointment that shows.</span>
          </div>

          {onOpenQuiz && (
            <div>
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-semibold font-sans text-black bg-white hover:scale-[1.02] active:scale-[0.98] rounded-full transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
              >
                <span>{currentContent.ctaButton} •</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>

      {/* LIGHTBOX MODAL FOR FULL-RESOLUTION WHATSAPP CHAT INSPECTION */}
      <AnimatePresence>
        {activeImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-md w-full max-h-[90vh] overflow-y-auto rounded-[20px] bg-[#0c0d12] border border-[#2a2f3d] p-3 shadow-2xl"
            >
              <button
                onClick={() => setActiveImageModal(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#101217] hover:bg-[#1f222b] border border-[#3b4152] text-[#fffdf9] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={activeImageModal}
                alt="Full resolution WhatsApp chat"
                className="w-full h-auto rounded-[14px] shadow-lg"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
