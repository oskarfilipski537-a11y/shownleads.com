import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuiz, onTalkToSpecialist }) => {
  const faqList = [
    {
      id: 'faq-growth-system-what',
      question: 'What is The Market Leader Growth System?',
      answer: 'It is our complete growth package. We run your ads across Meta, ChatGPT, local radio, and news articles, help you hire installers, give you a 2-minute online estimate tool, and send automatic appointment reminders.'
    },
    {
      id: 'faq-ad-spend-included',
      question: 'Are advertising costs included in the $8,150 package?',
      answer: 'Yes. All advertising costs on Meta (Facebook and Instagram), radio, and news articles are included in the $8,150 monthly price. There are no extra setup fees or hidden bills.'
    },
    {
      id: 'faq-recruitment-workforce',
      question: 'How does the installer hiring help work?',
      answer: 'We run targeted hiring ads in your city and pre-screen applicants for driver licenses and attic insulation experience. You get a list of qualified installers ready to interview.'
    },
    {
      id: 'faq-options-difference',
      question: 'How do the $97 and $197 pay-per-sit options work?',
      answer: 'You only pay when a verified homeowner actually sits down with you for an estimate. If the homeowner cancels or does not show up, you owe $0.'
    },
    {
      id: 'faq-ai-estimator',
      question: 'What is the instant 2-minute estimator tool?',
      answer: 'It is an online tool on your website where homeowners answer a few quick questions about their attic to get an instant estimate in 2 minutes instead of waiting 2 days.'
    },
    {
      id: 'faq-territory-exclusivity',
      question: 'Can my competitors in the same city hire you?',
      answer: 'No. We strictly work with only 1 attic insulation contractor per city. Once your area is locked, we turn down all competitors in your service radius.'
    }
  ];

  const [openId, setOpenId] = useState<string | null>(faqList[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 bg-[#07080c] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-sans font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-wider text-[11px]">Questions &amp; Answers</span>
          </div>
          
          <h2 className="font-heading uppercase text-3xl sm:text-5xl text-[#fffdf9] font-normal tracking-[0.02em] mb-3 leading-tight">
            Frequently{' '}
            <span className="font-serif italic font-normal text-blue-400 tracking-normal normal-case">
              asked
            </span>{' '}
            questions
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-[#fffdf9]/70 font-normal max-w-md mx-auto leading-relaxed">
            Simple answers about how we work, pricing, and city exclusivity.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#0f1424] border-blue-500/50 shadow-[0_8px_30px_rgba(37,99,235,0.15)]'
                    : 'bg-[#0c0e17]/85 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-sans font-medium text-sm sm:text-base text-[#fffdf9] leading-snug">
                    {item.question}
                  </span>
                  
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'border-blue-400 text-blue-300 bg-blue-950/80' : 'border-white/10 text-gray-400 bg-white/[0.04]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.52, 0.01, 0, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-[#fffdf9]/80 font-normal leading-relaxed border-t border-white/5">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400 font-sans mb-3">
            Have a different question?
          </p>
          <button
            onClick={onTalkToSpecialist || onOpenQuiz}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            <span>Talk With Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
