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
        className="relative py-16 sm:py-24 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Card Container (15px radius, 1px #403f3f ash border) */}
          <div className="relative rounded-[15px] bg-[#141414] border border-[#403f3f] p-4 sm:p-6 lg:p-8 text-center max-w-4xl mx-auto shadow-2xl">
            {/* Clean LeadConnector / GoHighLevel Embed Container */}
            <div className="w-full max-w-[800px] mx-auto rounded-[10px] overflow-hidden bg-white shadow-md relative">
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
        className="pt-20 pb-16 bg-[#000000] border-t border-[#1e2026] text-xs text-[#8e9aa8]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#1c1e24]">
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
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] bg-[#0d0e12] border border-[#22252e] text-[11px] text-[#cfd9e4] font-sans">
                <span className="w-2 h-2 rounded-full bg-[#2aff2a] animate-pulse" />
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
                    className="text-[#8e9aa8] hover:text-[#2aff2a] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>{t.navCaseStudies}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a]" />
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
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6px] bg-[#fffdf9] text-[#101010] font-sans font-medium text-xs uppercase tracking-[0.06em] hover:bg-[#eae6de] transition-colors cursor-pointer shadow-sm"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101010]/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-md bg-[#141414] border border-[#403f3f] rounded-[15px] p-7 text-left shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                aria-label={t.modalClose}
                className="absolute top-5 right-5 w-7 h-7 rounded-[5px] bg-[#101010] border border-[#403f3f] flex items-center justify-center text-[#6f879c] hover:text-[#fffdf9] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 text-[#fffdf9] mb-3">
                <Shield className="w-4 h-4 text-[#6f879c]" />
                <span className="text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display">
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
                className="mt-6 w-full py-2.5 bg-transparent border border-[#fffdf9] text-[#fffdf9] hover:bg-[#fffdf9] hover:text-[#101010] font-normal rounded-[5px] text-xs uppercase tracking-[0.08em] cursor-pointer transition-colors"
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
