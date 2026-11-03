import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuiz, onTalkToSpecialist }) => {
  const { t } = useLanguage();

  const customFaqList = [
    {
      id: 'faq-growth-system-what',
      question: 'What is The Market Leader Growth System, and how is it different from buying leads?',
      answer: 'The Market Leader Growth System is ShownLeads’ comprehensive growth partnership for ambitious attic insulation contractors. Rather than simply selling one-off leads or appointments, we build the entire operational and marketing engine to scale your company: multi-channel customer acquisition across Meta and local channels, an installer recruitment engine to expand your crew capacity, proprietary AI estimator tool integration, automated CRM and pipeline workflows, and dedicated strategic management.'
    },
    {
      id: 'faq-pricing-split',
      question: 'How does the $8,150 monthly pricing and two-stage payment work?',
      answer: 'The Market Leader Growth System is $8,150 per month with advertising costs included and $0 setup fee. Initial implementation is split into two equal installments: 50% ($4,075) upfront to begin onboarding, market planning, and infrastructure development; and the remaining 50% ($4,075) only when your campaigns are live and agreed infrastructure has been built.'
    },
    {
      id: 'faq-ad-spend-included',
      question: 'Are advertising costs really included in the $8,150 monthly package?',
      answer: 'Yes. Paid advertising management and media spend across Meta (Facebook and Instagram) and approved local channels are bundled directly into the $8,150 monthly fee. You do not receive separate agency bills or surprise surcharges.'
    },
    {
      id: 'faq-recruitment-workforce',
      question: 'How does the Recruitment & Workforce Expansion System work?',
      answer: 'Workforce capacity is the #1 bottleneck holding attic insulation businesses back. We build and run dedicated recruitment funnels, direct-response hiring ads, and candidate pre-screening questionnaires to attract qualified attic insulation installers and crew leaders. Candidates are organized into an applicant pipeline for fast interviewing. Your company retains full authority over hiring decisions and directly employs all crew members.'
    },
    {
      id: 'faq-options-difference',
      question: 'What is the difference between the $97 / $197 options and the $8,150 Growth System?',
      answer: 'The $97 and $197 options are pay-per-shown-appointment models where you pay per verified homeowner sit-down and fund your own ad spend separately—ideal for contractors seeking volume without changing their infrastructure. The $8,150 Market Leader Growth System is an end-to-end business growth partnership combining customer acquisition (ad spend included), workforce recruitment funnels, proprietary AI estimator integration, custom CRM buildout, and strategic scaling support.'
    },
    {
      id: 'faq-ai-estimator',
      question: 'What is the Proprietary AI Estimator Tool?',
      answer: 'It is ShownLeads’ interactive estimation software customized to your attic insulation pricing formulas. Homeowners complete a fast 2-minute visual questionnaire on their attic space, insulation depth, and project timeline to receive an instant, accurate estimate. This captures high-intent homeowners who refuse to wait 2 to 3 days for a standard estimator quote.'
    },
    {
      id: 'faq-territory-exclusivity',
      question: 'Why do you strictly limit partnerships to one contractor per city?',
      answer: 'We believe it is unethical to run competing campaigns for two contractors in the same market. Once you partner with ShownLeads for your territory, that territory is locked—we do not accept applications from other attic insulation companies in your designated driving radius.'
    },
    {
      id: 'faq-guarantee-show',
      question: 'What happens if a homeowner no-shows on the pay-per-sit options?',
      answer: 'On our $97 and $197 pay-per-shown-appointment options, you only pay when a vetted homeowner actually sits down with your team. If the homeowner cancels or ghosts, you owe $0 or receive a replacement credit.'
    }
  ];

  const [openId, setOpenId] = useState<string | null>(customFaqList[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 bg-[#07080c] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header with Framer Serif Italic Accent */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">Transparency &amp; Partnership Terms</span>
          </div>
          
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-tight">
            Frequently{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              asked
            </span>{' '}
            questions
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-lg mx-auto leading-relaxed">
            Everything you need to know about our growth partnership, performance tiers, and territory lock.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {customFaqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#0f1424] border-blue-500/50 shadow-[0_8px_30px_rgba(37,99,235,0.2)]'
                    : 'bg-[#0c0e17]/85 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-6 cursor-pointer"
                >
                  <span className="font-sans font-medium text-base sm:text-lg lg:text-[1.125rem] text-[#fffdf9] leading-snug">
                    {item.question}
                  </span>
                  
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                    isOpen ? 'border-blue-400 text-blue-300 bg-blue-950/80' : 'border-white/10 text-gray-400 bg-white/[0.04]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[1.5]" /> : <Plus className="w-4 h-4 stroke-[1.5]" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.52, 0.01, 0, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-1 font-sans text-sm sm:text-base text-[#fffdf9]/85 font-normal leading-relaxed border-t border-white/[0.06]">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-400 font-sans">
            Have a specific operational question about your market?{' '}
            <button
              onClick={onTalkToSpecialist || onOpenQuiz}
              className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer inline-flex items-center gap-1 ml-1"
            >
              <span>Talk to our growth director</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
