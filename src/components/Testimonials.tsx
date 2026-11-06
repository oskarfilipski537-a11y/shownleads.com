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
      tag: 'VERIFIED CONTRACTOR RESULTS',
      titlePart1: 'PROVEN RESULTS. ',
      titleSpan: 'REAL PARTNERS.',
      subtitle: 'Real contractor metrics from their first 30 days on our pay-per-estimate dispatch system. Zero retainers, 100% verified sit-downs.',
      ctaButton: 'See If Your Trade & City Are Open',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Mark Callahan',
          company: 'Callahan Custom Kitchens',
          niche: 'Kitchen Remodelling',
          quote: 'ShownLeads completely filled our calendar with high-budget homeowners. We closed 11 full kitchen renovations in our first month without touching a cold lead.',
          result: '32 shown estimates · 11 closed jobs ($285k acquired)',
          stats: { shownEstimates: 32, closedJobs: 11, ticketValue: '$285,000' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'David Miller',
          company: 'Miller Roofing & Exteriors',
          niche: 'Metal Roof Replacement',
          quote: 'Every single appointment showed up prepared with their budget ready. We locked in 9 high-ticket metal roof replacements within 4 weeks.',
          result: '26 shown estimates · 9 closed jobs ($198k acquired)',
          stats: { shownEstimates: 26, closedJobs: 9, ticketValue: '$198,000' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Thomas & Elena Vance',
          company: 'Vance Luxury Design',
          niche: 'Bathroom Remodelling',
          quote: 'The human setters are a game changer. We got 21 vetted sit-downs and converted 8 luxury master bathroom remodels immediately.',
          result: '21 shown estimates · 8 closed jobs ($152k acquired)',
          stats: { shownEstimates: 21, closedJobs: 8, ticketValue: '$152,000' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Robert Kowalski',
          company: 'Apex Surface & Flatwork',
          niche: 'Epoxy & Concrete Driveways',
          quote: 'Zero tire-kickers or bargain hunters. 34 confirmed homeowner sits resulted in 12 concrete driveway and epoxy projects on our books.',
          result: '34 shown estimates · 12 closed jobs ($134k acquired)',
          stats: { shownEstimates: 34, closedJobs: 12, ticketValue: '$134,000' }
        }
      ],
      waTag: 'DIRECT DISPATCH LOGS',
      waTitlePart1: 'LIVE FROM THE FIELD. ',
      waTitleSpan: 'CLIENT CHATS.',
      waSubtitle: 'Real-time screenshot updates directly from our partner contractor group chats as estimates get booked and jobs close.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Client Thread #1',
          caption: 'Signed contract on the spot · Deposit received',
          location: 'Dallas, TX'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Client Thread #2',
          caption: 'Full master remodel quote closed · Route locked',
          location: 'Chicago, IL'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Client Thread #3',
          caption: '3 sit-downs completed today · 2 deposits taken',
          location: 'Austin, TX'
        }
      ]
    },
    sv: {
      tag: 'VERIFIERADE KUNDRESULTAT',
      titlePart1: 'BEPRÖVADE RESULTAT. ',
      titleSpan: 'VERKLIGA PARTNERS.',
      subtitle: 'Mätbara resultat från hantverksföretag under deras första 30 dagar med vår pay-per-estimate modell. Noll fasta arvoden, 100% genomförda offertmöten.',
      ctaButton: 'Se om din bransch och stad är ledig',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Mark Callahan',
          company: 'Callahan Kök & Inredning',
          niche: 'Köksrenovering',
          quote: 'ShownLeads fyllde vår kalender helt med köpstarka villaägare. Vi stängde 11 fulla köksrenoveringar första månaden utan ett enda kallt samtal.',
          result: '32 genomförda offerter · 11 vunna jobb (2,85 Mkr)',
          stats: { shownEstimates: 32, closedJobs: 11, ticketValue: '2 850 000 kr' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'David Miller',
          company: 'Miller Tak & Fasad',
          niche: 'Plåttak & Takbyte',
          quote: 'Varje enskild kund satt redo vid mötet med godkänd budget. Vi säkrade 9 större plåttaksbyten på under 4 veckor.',
          result: '26 genomförda offerter · 9 vunna jobb (1,98 Mkr)',
          stats: { shownEstimates: 26, closedJobs: 9, ticketValue: '1 980 000 kr' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Thomas & Elena Vance',
          company: 'Vance Badrumsdesign',
          niche: 'Badrumsrenovering',
          quote: 'Mötesbokarna gör hela skillnaden. Vi fick 21 granskade hembesök och konverterade 8 lyxiga badrumsrenoveringar direkt.',
          result: '21 genomförda offerter · 8 vunna jobb (1,52 Mkr)',
          stats: { shownEstimates: 21, closedJobs: 8, ticketValue: '1 520 000 kr' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Robert Kowalski',
          company: 'Apex Ytbeläggning & Betong',
          niche: 'Epoxigolv & Betonguppfarter',
          quote: 'Noll fönstershoppare eller prispressare. 34 bekräftade möten resulterade i 12 betonguppfarts- och epoxiprojekt i orderboken.',
          result: '34 genomförda offerter · 12 vunna jobb (1,34 Mkr)',
          stats: { shownEstimates: 34, closedJobs: 12, ticketValue: '1 340 000 kr' }
        }
      ],
      waTag: 'DIREKTA CHATTLOGGAR',
      waTitlePart1: 'DIREKT FRÅN FÄLTET. ',
      waTitleSpan: 'KUNDMEDDELANDEN.',
      waSubtitle: 'Realtidsuppdateringar från våra entreprenörers WhatsApp-grupper när offerter bokas och avtal signeras.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Kundchatt #1',
          caption: 'Signerat kontrakt på plats · Handpenning mottagen',
          location: 'Stockholm'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Kundchatt #2',
          caption: 'Full offert godkänd · Rutten fullbokad',
          location: 'Göteborg'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Kundchatt #3',
          caption: '3 möten genomförda idag · 2 vunna avtal',
          location: 'Malmö'
        }
      ]
    },
    es: {
      tag: 'RESULTADOS VERIFICADOS DE CLIENTES',
      titlePart1: 'RESULTADOS PROBADOS. ',
      titleSpan: 'SOCIOS REALES.',
      subtitle: 'Métricas reales de empresas de reformas durante sus primeros 30 días con nuestro sistema de pago por presupuesto. Cero cuotas mensuales, 100% visitas realizadas.',
      ctaButton: 'Comprobar disponibilidad de tu especialidad',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Mark Callahan',
          company: 'Callahan Cocinas de Diseño',
          niche: 'Reformas de Cocinas',
          quote: 'ShownLeads llenó nuestra agenda de propietarios con presupuestos reales. Cerramos 11 reformas completas el primer mes sin hacer llamadas en frío.',
          result: '32 visitas completadas · 11 contratos cerrados (285.000€)',
          stats: { shownEstimates: 32, closedJobs: 11, ticketValue: '285.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'David Miller',
          company: 'Miller Tejados y Cubiertas',
          niche: 'Sustitución de Tejados',
          quote: 'Todos los propietarios acudieron a la cita preparados y con presupuesto. Cerramos 9 proyectos de tejados en 4 semanas.',
          result: '26 visitas completadas · 9 contratos cerrados (198.000€)',
          stats: { shownEstimates: 26, closedJobs: 9, ticketValue: '198.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Thomas & Elena Vance',
          company: 'Vance Baños de Lujo',
          niche: 'Reformas de Baños',
          quote: 'Los teleoperadores marcan la diferencia. Tuvimos 21 reuniones cualificadas y cerramos 8 reformas de baños principales de inmediato.',
          result: '21 visitas completadas · 8 contratos cerrados (152.000€)',
          stats: { shownEstimates: 21, closedJobs: 8, ticketValue: '152.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Robert Kowalski',
          company: 'Apex Pavimentos y Resinas',
          niche: 'Suelos de Resina y Hormigón',
          quote: 'Cero curiosos buscando precios bajos. 34 visitas confirmadas se tradujeron en 12 obras de pavimentos y entradas de hormigón.',
          result: '34 visitas completadas · 12 contratos cerrados (134.000€)',
          stats: { shownEstimates: 34, closedJobs: 12, ticketValue: '134.000€' }
        }
      ],
      waTag: 'CONVERSACIONES REALES DE CLIENTES',
      waTitlePart1: 'DESDE EL TERRENO. ',
      waTitleSpan: 'CHATS DE WHATSAPP.',
      waSubtitle: 'Capturas reales compartidas en directo por nuestros contratistas al cerrar presupuestos.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Chat de Cliente #1',
          caption: 'Contrato firmado en el acto · Señal cobrada',
          location: 'Madrid'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Chat de Cliente #2',
          caption: 'Presupuesto completo cerrado · Calendario lleno',
          location: 'Barcelona'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Chat de Cliente #3',
          caption: '3 visitas realizadas hoy · 2 contratos cerrados',
          location: 'Valencia'
        }
      ]
    },
    de: {
      tag: 'VERIFIZIERTE KUNDENERGEBNISSE',
      titlePart1: 'BEWIESENE ERFOLGE. ',
      titleSpan: 'ECHTE PARTNERBETRIEBE.',
      subtitle: 'Tatsächliche Kennzahlen von Fachbetrieben aus ihren ersten 30 Tagen mit unserem Pay-per-Estimate System. Keine monatlichen Retainer, 100% wahrgenommene Termine.',
      ctaButton: 'Prüfen Sie, ob Ihr Gewerk frei ist',
      cards: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_20_vuryj6.jpg',
          name: 'Mark Callahan',
          company: 'Callahan Küchenmanufaktur',
          niche: 'Küchenrenovierung',
          quote: 'ShownLeads hat unseren Kalender komplett mit kaufkräftigen Eigentümern gefüllt. Wir haben im ersten Monat 11 Komplettküchen abgeschlossen.',
          result: '32 Vor-Ort-Termine · 11 Aufträge (285.000€ Umsatz)',
          stats: { shownEstimates: 32, closedJobs: 11, ticketValue: '285.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854944/Image_24_ppwwz3.jpg',
          name: 'David Miller',
          company: 'Miller Dachtechnik',
          niche: 'Metalldacheindeckung',
          quote: 'Jeder einzelne Termin fand wie vereinbart statt. Wir haben innerhalb von 4 Wochen 9 hochwertige Dacheindeckungen unter Vertrag genommen.',
          result: '26 Vor-Ort-Termine · 9 Aufträge (198.000€ Umsatz)',
          stats: { shownEstimates: 26, closedJobs: 9, ticketValue: '198.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_17_w0msvz.jpg',
          name: 'Thomas & Elena Vance',
          company: 'Vance Luxusbäder',
          niche: 'Badsanierung',
          quote: 'Die Vorqualifizierung ist unschlagbar. 21 geprüfte Vor-Ort-Besichtigungen führten direkt zu 8 hochwertigen Masterbad-Sanierungen.',
          result: '21 Vor-Ort-Termine · 8 Aufträge (152.000€ Umsatz)',
          stats: { shownEstimates: 21, closedJobs: 8, ticketValue: '152.000€' }
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854408/Image_18_cc9t7y.jpg',
          name: 'Robert Kowalski',
          company: 'Apex Industrieböden & Beton',
          niche: 'Epoxidharzböden & Beton',
          quote: 'Keine Schnäppchenjäger. 34 bestätigte Eigentümertermine brachten 12 feste Einfahrts- und Bodenbeschichtungsaufträge in unsere Bücher.',
          result: '34 Vor-Ort-Termine · 12 Aufträge (134.000€ Umsatz)',
          stats: { shownEstimates: 34, closedJobs: 12, ticketValue: '134.000€' }
        }
      ],
      waTag: 'DIREKTE EINSATZPROTOKOLLE',
      waTitlePart1: 'LIVE VOM FACHBETRIEB. ',
      waTitleSpan: 'WHATSAPP-NACHRICHTEN.',
      waSubtitle: 'Echte Bildschirmaufnahmen aus den WhatsApp-Gruppen unserer Partnerbetriebe bei Terminbuchungen und Vertragsabschlüssen.',
      waItems: [
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_21_zmxtae.jpg',
          tag: 'Kundenchat #1',
          caption: 'Vertrag vor Ort unterschrieben · Anzahlung erhalten',
          location: 'München'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_22_fy7cvl.jpg',
          tag: 'Kundenchat #2',
          caption: 'Komplettauftrag abgeschlossen · Route ausgelastet',
          location: 'Köln'
        },
        {
          image: 'https://res.cloudinary.com/diwxs2xe8/image/upload/v1792854844/Image_23_rba7bx.jpg',
          tag: 'Kundenchat #3',
          caption: '3 Termine heute durchgeführt · 2 Abschlüsse gesichert',
          location: 'Frankfurt'
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
            Verified Results from{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              Real Partners
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
                    <span className="text-[11px] font-mono text-gray-400 ml-1.5">5.0 Verified</span>
                  </div>

                  {/* Client quote */}
                  <p className="font-sans text-xs sm:text-[13.5px] text-[#fffdf9]/90 font-normal leading-relaxed mb-4">
                    “{card.quote}”
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
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Value</div>
                    </div>
                    <div className="border-l border-white/10">
                      <div className="font-display font-bold text-white leading-none text-xs sm:text-sm">{card.stats.closedJobs}</div>
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Closed</div>
                    </div>
                    <div className="border-l border-white/10">
                      <div className="font-display font-bold text-white leading-none text-xs sm:text-sm">{card.stats.shownEstimates}</div>
                      <div className="text-[9px] text-gray-400 font-mono uppercase mt-0.5">Sits</div>
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
              Live from Contractors:{' '}
              <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
                WhatsApp Dispatch Records
              </span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              {currentContent.waSubtitle}
            </p>
          </div>

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
                      <span>Live Record</span>
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
            <span>All metrics independently verified. Zero upfront retainers. You only pay per shown estimate.</span>
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
