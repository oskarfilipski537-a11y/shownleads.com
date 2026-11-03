import React from 'react';
import { Search, UserCheck, CheckCircle, Radio, Globe, PhoneCall } from 'lucide-react';
import { PLATFORMS_MARQUEE } from '../data/content';

export const IntentSystem: React.FC = () => {
  return (
    <section
      id="intent-system"
      className="relative py-32 sm:py-44 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header Block with generous negative space */}
        <div className="max-w-2xl mx-auto text-center mb-20 sm:mb-24">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.12em] text-[#6f879c] font-display">
              HOW WE CAPTURE BUYERS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] text-[#fffdf9] font-normal tracking-[-0.025em] mb-5 leading-tight">
            <span className="neon-silver-text">Intent targeting</span> & appointment radar.
          </h2>
          <p className="font-display text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-lg mx-auto leading-relaxed">
            We track active buyer cues, qualify +$2k scopes through multi-stage logic, and dispatch live setters while your crew works on-site.
          </p>
        </div>

        {/* 3-Step Flow Card */}
        <div className="max-w-5xl mx-auto bg-[#0c0e17] rounded-[24px] p-8 sm:p-10 mb-20 border border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.12)] backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 gap-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#fffdf9] font-display">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span>3-TIER CAPTURE &amp; SETTING SYSTEM</span>
            </div>
            <div className="text-xs uppercase tracking-[0.08em] text-blue-400 border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 font-display font-medium">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>US • UK • IRELAND</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-[#10121a] border border-white/10 rounded-[18px] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors duration-300">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#161824] border border-white/10 flex items-center justify-center text-blue-400 mb-5">
                  <Search className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase tracking-[0.08em] text-blue-400 font-display font-semibold mb-2">
                  1. INTENT SIGNALS
                </div>
                <h4 className="font-display text-lg text-[#fffdf9] font-normal mb-2">
                  Buyer Cues &amp; Search
                </h4>
                <p className="text-xs text-[#fffdf9]/75 leading-relaxed font-normal">
                  Pixel tracking identifying homeowners actively researching trade contractors in your exact postal codes.
                </p>
              </div>
              <div className="mt-6 pt-4 text-[11px] uppercase tracking-[0.08em] text-[#6f879c] font-display">
                Meta Intent Pixels
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#10121a] border border-white/10 rounded-[18px] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors duration-300">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#161824] border border-white/10 flex items-center justify-center text-blue-400 mb-5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase tracking-[0.08em] text-blue-400 font-display font-semibold mb-2">
                  2. MULTI-STAGE QUIZ
                </div>
                <h4 className="font-display text-lg text-[#fffdf9] font-normal mb-2">
                  +$2K Scope Qualification
                </h4>
                <p className="text-xs text-[#fffdf9]/75 leading-relaxed font-normal">
                  Multi-question logic filters for ownership, immediate project timeframe, and verified budget thresholds.
                </p>
              </div>
              <div className="mt-6 pt-4 text-[11px] uppercase tracking-[0.08em] text-[#6f879c] font-display">
                Vetted High-Ticket ICP
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-b from-[#10162a] to-[#0c101d] border border-blue-500/40 rounded-[18px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div>
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase tracking-[0.08em] text-blue-300 font-display font-semibold mb-2">
                  3. SETTER CALL &amp; SHOW
                </div>
                <h4 className="font-display text-lg text-[#fffdf9] font-normal mb-2">
                  Speed to Lead in 180s
                </h4>
                <p className="text-xs text-[#fffdf9]/85 leading-relaxed font-normal">
                  Dedicated US-trained reps confirm project scope and lock appointments directly onto your route calendar.
                </p>
              </div>
              <div className="mt-6 pt-4 text-[11px] uppercase tracking-[0.08em] text-blue-400 flex items-center gap-1.5 font-display font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Pay Per Estimate (Paid Only On Show)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Integration Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {PLATFORMS_MARQUEE.map((plat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[6px] bg-[#141414] border border-[#403f3f] text-center flex flex-col items-center justify-center hover:border-[#6f879c] transition-colors"
            >
              <div className="font-display text-sm font-normal text-[#fffdf9] mb-0.5">
                {plat.name}
              </div>
              <div className="text-[11px] text-[#6f879c] font-display">
                {plat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
