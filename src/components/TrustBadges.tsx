import React from 'react';
import { motion } from 'motion/react';

export const TrustBadges: React.FC = () => {
  const platforms = [
    {
      name: 'Meta',
      role: 'Business Partner',
      badge: 'Certified Ads Ecosystem',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      role: 'Marketing Partner',
      badge: 'Enterprise Solutions',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      ),
    },
    {
      name: 'Google Ads',
      role: 'Premier Network',
      badge: 'High-Intent Search & Display',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      role: 'Agency Partner',
      badge: 'Verified Performance',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.32V8.75a8.28 8.28 0 0 0 4.82 1.53V6.84a4.86 4.86 0 0 1-.9-.15Z" />
        </svg>
      ),
    },
    {
      name: 'Stripe',
      role: 'Infrastructure',
      badge: 'Performance Escrow & Billing',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252 1.088 15.696.6 12.759.6 6.845.6 3.013 3.655 3.013 8.397c0 4.908 3.618 6.476 7.427 7.822 2.396.849 3.238 1.547 3.238 2.477 0 .977-.843 1.492-2.38 1.492-2.227 0-5.11-.977-7.234-2.134l-.903 5.483c2.09.977 5.176 1.463 8.286 1.463 6.09 0 10.231-3.056 10.231-8.156 0-4.664-3.356-6.494-7.699-7.694Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="trust-badges"
      aria-label="Accredited Advertising Platform Ecosystem"
      className="py-10 sm:py-12 bg-[#000000] border-y border-[#403f3f]/50"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Minimalist Sector Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#403f3f]/40">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6f879c]" />
            <h3 className="text-[11px] uppercase tracking-[0.14em] text-[#6f879c] font-display font-medium">
              Accredited Advertising Platform Ecosystem
            </h3>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#6f879c]/80 font-display tracking-[0.06em] uppercase flex items-center gap-2">
            <span>Direct Enterprise API Status</span>
            <span className="text-[#403f3f]">•</span>
            <span className="text-[#fffdf9]/90">Verified Agency Access</span>
          </div>
        </div>

        {/* Minimalist Grid / Row with Hairline Separation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.52, 0.01, 0, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#403f3f]/30 pt-6"
        >
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="group px-4 sm:px-6 py-4 sm:py-2 first:pl-0 last:pr-0 flex items-start gap-3.5 transition-colors duration-200"
            >
              <div className="mt-0.5 text-[#fffdf9]/70 group-hover:text-[#fffdf9] transition-colors shrink-0">
                {p.icon}
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm text-[#fffdf9] font-medium tracking-tight">
                  {p.name}
                </div>
                <div className="text-xs text-[#6f879c] group-hover:text-[#fffdf9]/85 transition-colors mt-0.5 tracking-tight truncate">
                  {p.role}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.08em] font-display text-[#6f879c]/60 group-hover:text-[#6f879c] transition-colors">
                  {p.badge}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

