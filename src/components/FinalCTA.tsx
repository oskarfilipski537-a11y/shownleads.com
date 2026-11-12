import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';
import { AppPage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTAProps {
  onOpenQuiz?: () => void;
  onNavigate?: (page: AppPage, hash?: string) => void;
  hideBookingWidget?: boolean;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuiz, onNavigate, hideBookingWidget = false }) => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    if (hideBookingWidget) return;
    // Dynamically load GoHighLevel / LeadConnector form embed script
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [hideBookingWidget]);

  return (
    <>
      {/* FINAL CTA / GOHIGHLEVEL BOOKING EMBED */}
      {!hideBookingWidget && (
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
      )}

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

          {/* Bottom Legal Identification & Links */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6f879c]">
            <div className="space-y-1 text-center md:text-left">
              <div>
                © {new Date().getFullYear()} ShownLeads. {t.footerAllRights}
              </div>
              <p className="text-[11px] text-[#556575]">
                ShownLeads is a trading name of Oskar Jan Filipski, 2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland. Phone: +353 83 023 6881.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs shrink-0">
              <button
                onClick={() => onNavigate ? onNavigate('privacy-policy') : window.location.assign('/privacy-policy')}
                className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-[#262832]">•</span>
              <button
                onClick={() => onNavigate ? onNavigate('terms-and-conditions') : window.location.assign('/terms-and-conditions')}
                className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                SMS Terms &amp; Conditions
              </button>
              <span className="text-[#262832]">•</span>
              <a 
                href="mailto:info@shownleads.com" 
                className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors"
              >
                info@shownleads.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* PRIVACY & TERMS QUICK MODAL FALLBACK */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050608]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0c0e17]/95 border border-white/10 rounded-[24px] p-7 text-left shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                aria-label={t.modalClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#161824] border border-white/10 flex items-center justify-center text-[#6f879c] hover:text-[#fffdf9] cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-[0.08em] text-blue-400 font-mono font-semibold">
                  {activeModal === 'privacy' ? 'Privacy Policy' : 'SMS Terms & Conditions'}
                </span>
              </div>

              <h3 className="font-heading text-xl text-[#fffdf9] font-normal mb-1">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'SMS Terms & Conditions'}
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">
                Last updated: November 6, 2026
              </p>

              <div className="space-y-3 text-xs text-[#fffdf9]/80 leading-relaxed font-sans">
                {activeModal === 'privacy' ? (
                  <>
                    <p>
                      This policy explains how ShownLeads, a trading name of Oskar Jan Filipski (&ldquo;we&rdquo;, &ldquo;us&rdquo;), collects and uses personal information when you visit shownleads.com or book an estimate through our forms.
                    </p>
                    <p>
                      <strong className="text-white">Text messaging (SMS):</strong> If you tick the consent box on our booking form, we send text messages about your estimate appointment, such as confirmations and reminders. Message frequency varies and is up to 5 messages per appointment. Message and data rates may apply. Reply STOP at any time to opt out, or HELP for help.
                    </p>
                    <p className="text-blue-300">
                      No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="text-white">Program description:</strong> ShownLeads (operated by Oskar Jan Filipski) sends appointment-related text messages to homeowners who book an attic insulation estimate through our forms and agree to receive texts. Messages are confirmations and reminders for the appointment you booked. We do not send marketing or promotional messages through this program.
                    </p>
                    <p>
                      <strong className="text-white">Opt out &amp; Help:</strong> Reply STOP to any message to cancel. You will receive one confirmation text and no further messages. Reply HELP for help, or contact us at info@shownleads.com or +353 83 023 6881.
                    </p>
                    <p className="text-blue-300">
                      No mobile information is shared with third parties or affiliates for marketing or promotional purposes.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const targetPage = activeModal === 'privacy' ? 'privacy-policy' : 'terms-and-conditions';
                    setActiveModal(null);
                    if (onNavigate) {
                      onNavigate(targetPage);
                    }
                  }}
                  className="text-xs text-blue-400 hover:underline font-mono"
                >
                  Open Full Page →
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 bg-white text-black font-semibold rounded-full text-xs uppercase tracking-[0.08em] cursor-pointer hover:bg-[#eae6de] transition-colors shadow-lg"
                >
                  {t.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
