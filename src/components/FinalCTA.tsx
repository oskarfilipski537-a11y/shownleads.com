import React, { useEffect } from 'react';
import { AppPage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTAProps {
  onOpenQuiz?: () => void;
  onNavigate?: (page: AppPage, hash?: string) => void;
  hideBookingWidget?: boolean;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuiz, onNavigate, hideBookingWidget = false }) => {
  const { t } = useLanguage();

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

            {/* Column 1: Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.footerColModels}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs">
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('home');
                      }
                    }}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left inline-block"
                  >
                    {t.navHome}
                  </a>
                </li>
                <li>
                  <a
                    href="/#delivering-pay-per-results"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('home', '#delivering-pay-per-results');
                      }
                    }}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left inline-block"
                  >
                    {t.footerLinkDelivering}
                  </a>
                </li>
                <li>
                  <a
                    href="/#differentiation"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('home', '#differentiation');
                      }
                    }}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left inline-block"
                  >
                    {t.footerLinkDiff}
                  </a>
                </li>
                <li>
                  <a
                    href="/#how-it-works"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('home', '#how-it-works');
                      }
                    }}
                    className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left inline-block"
                  >
                    {t.footerLinkHow}
                  </a>
                </li>
                <li>
                  <a
                    href="/case-studies"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('case-studies');
                      }
                    }}
                    className="text-[#8e9aa8] hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>{t.navCaseStudies}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Attic insulation focus */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.footerColNiches}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs">
                {[
                  'Blown-In Cellulose',
                  'Spray Foam Insulation',
                  'Fiberglass Batt & Roll',
                  'Attic Air Sealing',
                  'Insulation Removal'
                ].map((service, idx) => (
                  <li key={idx}>
                    <a
                      href="/appointments"
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('appointments');
                        }
                      }}
                      className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer text-left inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: City Availability */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading uppercase text-xs tracking-[0.1em] text-[#fffdf9]">
                {t.footerColPartnerTitle}
              </h4>
              <p className="font-sans text-xs text-[#8e9aa8] leading-relaxed">
                {t.footerColPartnerDesc}
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
                ShownLeads is a trading name of Oskar Jan Filipski, 2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland. info@shownleads.com
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs shrink-0">
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('privacy-policy');
                  }
                }}
                className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <span className="text-[#262832]">•</span>
              <a
                href="/terms-and-conditions"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('terms-and-conditions');
                  }
                }}
                className="text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </a>
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
    </>
  );
};
