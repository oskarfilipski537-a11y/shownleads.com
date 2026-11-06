import React from 'react';
import { ArrowLeft, FileText, MessageSquare, Shield, HelpCircle, Phone, Mail, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AppPage } from '../types';

interface TermsPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: AppPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20">
      {/* Background ambient lighting */}
      <div 
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 -z-10"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 py-4 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[#8e9aa8] hover:text-[#fffdf9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#6f879c] font-sans">
            <span className="cursor-pointer hover:text-[#fffdf9]" onClick={onNavigateHome}>Home</span>
            <span>/</span>
            <span className="text-blue-400 font-medium">Terms &amp; Conditions</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.14em] text-blue-300 font-mono font-medium">
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Official Legal Documentation</span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-tight">
            SMS Terms &amp; <span className="text-blue-400 font-serif italic lowercase">Conditions</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pb-6 border-b border-white/[0.08]">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium">
              Last updated: November 6, 2026
            </span>
            <span>Appointment Messaging Program</span>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors cursor-pointer"
            >
              Switch to Privacy Policy →
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-10 font-sans text-sm sm:text-[15px] leading-relaxed text-gray-300">
          {/* Program Description */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                Program description
              </h2>
            </div>
            <div className="p-6 rounded-[22px] bg-[#0c0e17] border border-white/10 shadow-lg space-y-3">
              <p className="text-base text-white leading-relaxed">
                <strong className="text-white font-semibold">ShownLeads</strong> (operated by <strong className="text-white font-semibold">Oskar Jan Filipski</strong>) sends appointment-related text messages to homeowners who book an attic insulation estimate through our forms and agree to receive texts.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Messages are confirmations and reminders for the appointment you booked. <strong className="text-white">We do not send marketing or promotional messages through this program.</strong>
              </p>
            </div>
          </section>

          {/* How to opt in */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                How to opt in
              </h2>
            </div>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10">
              <p className="leading-relaxed">
                You opt in by entering your mobile number on our booking form and ticking the unchecked consent box. <strong className="text-white">Consent is not a condition of any purchase.</strong>
              </p>
            </div>
          </section>

          {/* Key Parameters: Frequency & Costs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Message frequency */}
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-2">
              <h3 className="font-heading uppercase text-base sm:text-lg text-white tracking-wide">
                Message frequency
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Message frequency varies. You will receive <strong className="text-blue-400 font-semibold">up to 5 messages per booked appointment</strong>.
              </p>
            </div>

            {/* Costs */}
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-2">
              <h3 className="font-heading uppercase text-base sm:text-lg text-white tracking-wide">
                Costs
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Message and data rates may apply, depending on your mobile plan.
              </p>
            </div>
          </div>

          {/* Opt out and Help Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Opt out */}
            <div className="p-6 rounded-[22px] bg-gradient-to-b from-[#13121d] to-[#0c0e17] border border-white/15 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 font-mono text-xs font-bold uppercase tracking-wider">
                  STOP
                </span>
                <h3 className="font-heading uppercase text-lg text-white tracking-wide">
                  Opt out
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Reply <strong className="text-white font-mono">STOP</strong> to any message to cancel. You will receive one confirmation text and no further messages. You can opt back in at any time by booking again.
              </p>
            </div>

            {/* Help */}
            <div className="p-6 rounded-[22px] bg-gradient-to-b from-[#0f1424] to-[#0c0e17] border border-blue-500/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider">
                  HELP
                </span>
                <h3 className="font-heading uppercase text-lg text-white tracking-wide">
                  Help
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Reply <strong className="text-white font-mono">HELP</strong> to any message, or contact us at <a href="mailto:info@shownleads.com" className="text-blue-400 hover:underline">info@shownleads.com</a> or <a href="tel:+353830236881" className="text-white hover:underline">+353 83 023 6881</a>.
              </p>
            </div>
          </div>

          {/* Carriers */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Carriers
            </h2>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10">
              <p className="leading-relaxed">
                Carriers and ShownLeads are not liable for delayed or undelivered messages.
              </p>
            </div>
          </section>

          {/* Privacy Guarantee */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                Privacy
              </h2>
            </div>
            <div className="p-6 rounded-[22px] bg-gradient-to-b from-[#0e1220] to-[#0a0d17] border border-blue-500/30 space-y-3">
              <p className="leading-relaxed">
                Your information is handled as described in our <button onClick={() => onNavigate('privacy-policy')} className="text-blue-400 hover:underline font-medium">Privacy Policy</button>.
              </p>
              <div className="p-4 rounded-xl bg-[#080911] border border-blue-500/20 flex items-start gap-3 text-xs leading-relaxed text-blue-100">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Strict Privacy Commitment:</strong> No mobile information is shared with third parties or affiliates for marketing or promotional purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Contact
            </h2>
            <div className="p-6 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-2 text-sm text-gray-300">
              <p>
                <strong className="text-white">Oskar Jan Filipski trading as ShownLeads</strong>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland.</span>
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono">
                <a 
                  href="mailto:info@shownleads.com" 
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@shownleads.com</span>
                </a>
                <a 
                  href="tel:+353830236881" 
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+353 83 023 6881</span>
                </a>
              </div>
            </div>
          </section>

          {/* Official Bottom Contact & Legal Identification Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#0c0e17] border border-white/15 shadow-2xl text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <button 
                onClick={() => onNavigate('privacy-policy')}
                className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <span className="text-blue-400 font-semibold">SMS Terms &amp; Conditions</span>
              <span className="text-gray-600">•</span>
              <a href="mailto:info@shownleads.com" className="text-gray-300 hover:text-white hover:underline">
                info@shownleads.com
              </a>
            </div>

            <p className="text-xs text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">
              ShownLeads is a trading name of Oskar Jan Filipski, 2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland. Phone: +353 83 023 6881.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
