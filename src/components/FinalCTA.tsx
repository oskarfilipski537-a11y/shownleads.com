import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';
import { AppPage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTAProps {
  onOpenQuiz?: () => void;
  onNavigate?: (page: AppPage, hash?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuiz, onNavigate }) => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    // Dynamically load GoHighLevel / LeadConnector form embed script
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* FINAL CTA / GOHIGHLEVEL BOOKING EMBED */}
      <section
        id="final-cta"
        className="relative py-16 sm:py-24 bg-[#07080c] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Card Container (Fundory 24px glass card) */}
          <div className="relative rounded-[24px] bg-[#0c0e17] border border-white/10 p-4 sm:p-6 lg:p-8 text-center max-w-4xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-xl">
            {/* Clean LeadConnector / GoHighLevel Embed Container */}
            <div className="w-full max-w-[800px] mx-auto rounded-[16px] overflow-hidden bg-white shadow-md relative">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/2hz4fNHE7eV6zMYRJY9U"
                allow="payment"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '760px' }}
                scrolling="no"
                id="2hz4fNHE7eV6zMYRJY9U_1792887741783"
                title="GoHighLevel Booking Widget"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED FOOTER */}
      <footer
        id="footer"
        className="pt-20 pb-16 bg-[#07080c] text-xs text-[#8e9aa8]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="font-heading uppercase text-2xl sm:text-3xl tracking-[0.03em] text-[#fffdf9]">
                  SHOWN<span className="neon-silver-text ml-1">LEADS</span>
                </span>
              </div>
              <p className="font-sans text-[13px] text-[#8e9aa8] leading-relaxed max-w-md font-normal">
                {t.footerBrandDesc}
              </p>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-sans">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span>{t.footerOperatingBadge}</span>
              </div>
            </div>

            {/* Column 1: Performance Model */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.footerColModels}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs">
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('home') : window.location.assign('/')}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left"
                  >
                    {t.navHome}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('home', '#delivering-pay-per-results') : window.location.assign('/#delivering-pay-per-results')}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left"
                  >
                    {t.footerLinkDelivering}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('home', '#differentiation') : window.location.assign('/#differentiation')}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left"
                  >
                    {t.footerLinkDiff}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('home', '#how-it-works') : window.location.assign('/#how-it-works')}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left"
                  >
                    {t.footerLinkHow}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate ? onNavigate('case-studies') : window.location.assign('/case-studies')}
                    className="text-[#8e9aa8] hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>{t.navCaseStudies}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Supported Verticals */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.footerColNiches}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs">
                {(t.companiesTrades || []).slice(0, 5).map((trade, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate ? onNavigate('our-companies') : window.location.assign('/our-companies')}
                      className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left"
                    >
                      {trade.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Partner Lock */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.companiesBadgeLock}
              </h4>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                {t.fitCheckSubtitle}
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenQuiz}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-sans font-semibold text-xs uppercase tracking-[0.06em] hover:bg-[#eae6de] hover:scale-[1.02] transition-all cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                >
                  <span>{t.deliveringCta}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6f879c]">
            <div>
              © {new Date().getFullYear()} ShownLeads. {t.footerAllRights}
            </div>

            <div className="flex items-center gap-5 text-xs">
              <button
                onClick={() => setActiveModal('privacy')}
                className="text-[#6f879c] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                {t.footerPrivacy}
              </button>
              <span className="text-[#262832]">•</span>
              <button
                onClick={() => setActiveModal('terms')}
                className="text-[#6f879c] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                {t.footerTerms}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* PRIVACY & TERMS MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050608]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#0c0e17]/95 border border-white/10 rounded-[24px] p-7 text-left shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                aria-label={t.modalClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#161824] border border-white/10 flex items-center justify-center text-[#6f879c] hover:text-[#fffdf9] cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-[0.08em] text-blue-400 font-display font-semibold">
                  {activeModal === 'privacy' ? t.footerPrivacy : t.footerTerms}
                </span>
              </div>

              <h3 className="font-display text-xl text-[#fffdf9] font-normal mb-4">
                {activeModal === 'privacy' ? t.footerPrivacy : t.footerTerms}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#fffdf9]/80 leading-relaxed font-normal">
                {activeModal === 'privacy' ? (
                  <>
                    <p>
                      {t.footerBrandDesc}
                    </p>
                    <p>
                      {t.diffCol2Desc}
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="text-[#fffdf9] font-medium">{t.deliveringPoint1Title}</strong> {t.deliveringPoint1Desc}
                    </p>
                    <p>
                      <strong className="text-[#fffdf9] font-medium">{t.deliveringPoint2Title}</strong> {t.deliveringPoint2Desc}
                    </p>
                    <p>
                      <strong className="text-[#fffdf9] font-medium">{t.deliveringPoint3Title}</strong> {t.deliveringPoint3Desc}
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-full text-xs uppercase tracking-[0.08em] cursor-pointer hover:bg-[#eae6de] transition-colors shadow-lg"
              >
                {t.modalClose}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
