import React from 'react';

export const TrustStatement: React.FC = () => {
  return (
    <section
      id="trust-statement"
      className="relative py-32 sm:py-44 bg-[#000000] overflow-hidden border-y border-[#403f3f]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10">
        {/* Eyebrow Label (Fog Blue #6f879c) */}
        <div className="mb-8 inline-flex items-center justify-center gap-3">
          <span className="text-xs uppercase tracking-[0.1em] text-[#6f879c] font-display">
            OUR CORE BELIEF
          </span>
        </div>

        {/* Statement Headline */}
        <blockquote className="font-display text-2xl sm:text-4xl md:text-5xl text-[#fffdf9] leading-[1.18] tracking-[-0.015em] mb-8 font-normal">
          &ldquo;We built ShownLeads for 5–12 person contractor and service crews — operators too busy on-site doing great work to film videos or chase <span className="neon-silver-text">cold leads.</span>&rdquo;
        </blockquote>

        {/* Attribution (Fog Blue #6f879c, uppercase Neue Montreal) */}
        <div className="inline-flex items-center text-xs uppercase tracking-[0.1em] text-[#6f879c]">
          <span>— ShownLeads Team</span>
        </div>
      </div>
    </section>
  );
};
