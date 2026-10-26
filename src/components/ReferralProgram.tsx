import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Mail } from 'lucide-react';

export const ReferralProgram: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState('');
  const [peerEmail, setPeerEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const referralUrl = 'https://shownleads.com/?ref=partner';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!peerEmail.trim()) return;
    setSubmitted(true);
  };

  const mailtoLink = `mailto:partners@shownleads.com?subject=Partner%20Introduction&body=Hi%20ShownLeads%20Team%2C%0A%0AI%20would%20like%20to%20introduce%20a%20fellow%20founder%20to%20your%2090-day%20growth%20sprint.%0A%0AMy%20Name%20%2F%20Company%3A%20%0APeer%20Name%20%2F%20Company%3A%20%0APeer%20Email%20or%20Phone%3A%20%0A%0AThanks!`;

  return (
    <section
      id="referral-program"
      aria-label="Partner Referral Program"
      className="py-24 sm:py-32 bg-[#000000] border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Thesis */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.1em] text-[#6f879c] font-display mb-4">
              PARTNER NETWORK
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-[#fffdf9] font-normal tracking-[-0.02em] mb-6 leading-[1.15]">
              Recommend a high-ticket peer. <br />
              Receive a <span className="neon-silver-text">$1,000 performance credit.</span>
            </h2>

            <p className="text-base text-[#fffdf9]/80 font-normal leading-relaxed mb-8 max-w-2xl">
              Our strongest client partnerships come through direct introductions from active operators. When you introduce a fellow $2,000+ ticket service brand that launches a 90-day sprint, we issue a <strong className="text-[#fffdf9] font-normal">$1,000 direct bank wire or invoice credit</strong> to your account. Your referral receives a <strong className="text-[#fffdf9] font-normal">$500 onboarding credit</strong>.
            </p>

            <div className="space-y-2.5 text-xs text-[#6f879c] font-display border-l border-[#403f3f] pl-4">
              <p>• Disbursed within 48 hours of sprint kickoff</p>
              <p>• No cap on introductions across the US, UK, and Ireland</p>
              <p>• Discretion guaranteed — territory availability verified before outreach</p>
            </div>
          </div>

          {/* Right: Clean, Restrained Introduction Console */}
          <div className="lg:col-span-5 pt-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5">
                      Your Name or Firm
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vance Luxury Living"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full bg-transparent border border-[#403f3f] rounded-[5px] px-4 py-3 text-sm text-[#fffdf9] placeholder-[#6f879c]/70 focus:outline-none focus:border-[#fffdf9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5">
                      Peer Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. founder@company.com or (555) 019-2834"
                      value={peerEmail}
                      onChange={(e) => setPeerEmail(e.target.value)}
                      className="w-full bg-transparent border border-[#403f3f] rounded-[5px] px-4 py-3 text-sm text-[#fffdf9] placeholder-[#6f879c]/70 focus:outline-none focus:border-[#fffdf9] transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 bg-[#fffdf9] hover:bg-transparent hover:text-[#fffdf9] border border-[#fffdf9] text-[#101010] text-xs uppercase tracking-[0.08em] font-normal rounded-[5px] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Introduction</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-4 border-t border-[#403f3f]/50 flex items-center justify-between text-xs text-[#6f879c]">
                  <a
                    href={mailtoLink}
                    className="hover:text-[#fffdf9] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Or introduce via email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="hover:text-[#fffdf9] transition-colors flex items-center gap-1.5 cursor-pointer font-display"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#fffdf9]" />
                        <span className="text-[#fffdf9]">Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Partner URL</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="border border-[#403f3f] rounded-[5px] p-8 text-left space-y-4">
                <div className="text-xs uppercase tracking-[0.1em] text-[#fffdf9] font-display flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#fffdf9]" />
                  <span>Introduction Logged</span>
                </div>
                <p className="text-sm text-[#fffdf9]/80 font-normal leading-relaxed">
                  We've attributed <span className="text-[#fffdf9]">{peerEmail}</span> to your partner profile. Our directors will conduct a regional capacity audit before initiating any conversation.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPeerEmail('');
                      setSubmitted(false);
                    }}
                    className="text-xs text-[#6f879c] hover:text-[#fffdf9] uppercase tracking-[0.08em] font-display transition-colors cursor-pointer underline"
                  >
                    Introduce another peer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
