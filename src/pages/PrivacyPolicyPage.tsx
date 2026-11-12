import React from 'react';
import { ArrowLeft, Shield, Lock, MessageSquare, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { AppPage } from '../types';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: AppPage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
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
            <span className="text-blue-400 font-medium">Privacy Policy</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] uppercase tracking-[0.14em] text-blue-300 font-mono font-medium">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Official Legal Documentation</span>
          </div>

          <h1 className="font-heading uppercase text-3xl sm:text-5xl text-[#fffdf9] font-normal tracking-[0.02em] mb-4 leading-tight">
            Privacy <span className="text-blue-400 font-serif italic lowercase">Policy</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pb-6 border-b border-white/[0.08]">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium">
              Last updated: November 12, 2026
            </span>
            <span>GDPR</span>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => onNavigate('terms-and-conditions')}
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Switch to SMS Terms &amp; Conditions →
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-10 font-sans text-sm sm:text-[15px] leading-relaxed text-gray-300">
          {/* Introduction Card */}
          <div className="p-6 sm:p-7 rounded-[20px] bg-[#0c0e17] border border-white/10 shadow-lg">
            <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
              This policy explains how ShownLeads, a trading name of Oskar Jan Filipski (&ldquo;we&rdquo;, &ldquo;us&rdquo;), collects and uses personal information when you visit shownleads.com or our booking page, or book a strategy call through our booking form.
            </p>
          </div>

          {/* Section 1: Who we are */}
          <section className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                Who we are
              </h2>
            </div>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-2 text-sm text-gray-300">
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

          {/* Section 2: Information we collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                Information we collect
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <li className="p-4 rounded-xl bg-[#0c0e17] border border-white/10 space-y-1">
                <span className="text-xs uppercase font-mono text-blue-400 block font-semibold">Contact Data</span>
                <span className="text-xs text-gray-300">Name, email address and mobile phone number you submit in our booking form.</span>
              </li>
              <li className="p-4 rounded-xl bg-[#0c0e17] border border-white/10 space-y-1">
                <span className="text-xs uppercase font-mono text-blue-400 block font-semibold">Call Details</span>
                <span className="text-xs text-gray-300">The date and time of the strategy call you book and the answers you give on the booking form.</span>
              </li>
              <li className="p-4 rounded-xl bg-[#0c0e17] border border-white/10 space-y-1">
                <span className="text-xs uppercase font-mono text-blue-400 block font-semibold">Technical Data</span>
                <span className="text-xs text-gray-300">Basic technical data such as browser type, operating system, and pages visited.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: How we use it */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                How we use it
              </h2>
            </div>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p>To book your strategy call and to contact you about it.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p>To send confirmations and reminders about your booked call by text message, if you agreed to receive them.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p>To answer your questions and to operate and improve our website.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Text messaging (SMS) - Critical Compliance Block */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
                Text messaging (SMS)
              </h2>
            </div>

            <div className="p-6 rounded-[22px] bg-gradient-to-b from-[#0e1220] to-[#0a0d17] border border-blue-500/30 space-y-4 shadow-xl">
              <p className="leading-relaxed">
                If you tick the consent box on our booking form, we send text messages about the strategy call you booked, such as confirmations and reminders. Message frequency varies and is up to 5 messages per booking. Message and data rates may apply. Reply <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-white text-xs font-semibold">STOP</span> at any time to opt out, or <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-white text-xs font-semibold">HELP</span> for help. Consent to receive texts is not a condition of any purchase.
              </p>

              <div className="p-4 rounded-xl bg-[#080911] border border-blue-500/20 flex items-start gap-3 text-xs leading-relaxed text-blue-100">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Strict Privacy Guarantee:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. We use your mobile number only to send the messages described above.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Sharing */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Sharing
            </h2>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10">
              <p className="leading-relaxed">
                We do not sell your personal information. We share it only with service providers who host our systems, process bookings and deliver messages on our behalf, under confidentiality obligations. We may disclose information if the law requires it.
              </p>
            </div>
          </section>

          {/* Section 6: Retention and security */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Retention and security
            </h2>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10">
              <p className="leading-relaxed">
                We keep your information only as long as needed for the purposes above or as the law requires, and protect it with reasonable technical and organisational measures.
              </p>
            </div>
          </section>

          {/* Section 7: Your rights */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Your rights
            </h2>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-3">
              <p className="leading-relaxed">
                You can ask us to access, correct, or delete your personal information, or object to its use. We are based in Ireland and handle personal data in line with applicable data protection law, including GDPR where it applies.
              </p>
              <p>
                Email <a href="mailto:info@shownleads.com" className="text-blue-400 hover:underline font-mono">info@shownleads.com</a> to make a request.
              </p>
            </div>
          </section>

          {/* Section 8: Changes */}
          <section className="space-y-4">
            <h2 className="font-heading uppercase text-xl sm:text-2xl text-white tracking-wide">
              Changes
            </h2>
            <div className="p-5 rounded-2xl bg-[#0c0e17] border border-white/10">
              <p className="leading-relaxed">
                We may update this policy. The date at the top shows when it last changed.
              </p>
            </div>
          </section>

          {/* Official Bottom Contact & Legal Identification Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#0c0e17] border border-white/15 shadow-2xl text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-blue-400 font-semibold">Privacy Policy</span>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => onNavigate('terms-and-conditions')}
                className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer"
              >
                SMS Terms &amp; Conditions
              </button>
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
