import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const faqList = t.faqList || [];
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(207, 217, 228, 0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.14em] text-[#6f879c] font-sans font-medium">
              {t.faqTag}
            </span>
          </div>
          
          <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-[3.5rem] text-[#fffdf9] font-normal tracking-[0.02em] mb-5 leading-tight">
            {t.faqTitle1}<span className="neon-silver-text">{t.faqTitle2}</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-lg mx-auto leading-relaxed">
            {t.faqSubhead}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-[14px] transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#14151a] border-[#6f879c]/80 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
                    : 'bg-[#0d0e11] border-[#26282f] hover:border-[#403f3f]'
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
                  
                  <span className={`w-8 h-8 rounded-[6px] border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                    isOpen ? 'border-[#cfd9e4] text-[#fffdf9] bg-[#1d1f26]' : 'border-[#2e313a] text-[#8e9aa8] bg-[#121317]'
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
                      <div className="px-6 sm:px-7 pb-7 pt-1 font-sans text-sm sm:text-base text-[#fffdf9]/85 font-normal leading-relaxed border-t border-[#22242a]">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
