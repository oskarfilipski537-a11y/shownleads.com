import React from 'react';
import { motion } from 'motion/react';
import { Layers, Target, Check, Activity, LayoutDashboard, PhoneCall, Instagram, Facebook, Linkedin, Video } from 'lucide-react';

interface ShownLeadsModelProps {
  onOpenQuiz?: () => void;
}

export const ShownLeadsModel: React.FC<ShownLeadsModelProps> = ({ onOpenQuiz }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.52, 0.01, 0, 1] },
    },
  };

  return (
    <section
      id="model-section"
      className="relative py-28 sm:py-36 bg-[#000000] overflow-hidden border-t border-[#403f3f]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10"
      >
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.1em] text-[#6f879c] font-display">
              HOW IT WORKS
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-5xl text-[#fffdf9] font-normal tracking-[-0.02em] mb-4"
          >
            Two core pillars.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-display text-base sm:text-lg text-[#fffdf9]/80 font-normal max-w-lg mx-auto leading-relaxed"
          >
            Social media management builds undisputed trade authority. High-intent Meta ads & setters book qualified estimates for your 5–12 person crew.
          </motion.p>
        </div>

        {/* Two Pillars Side-by-Side (15px radius, 1px #403f3f ash border) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24 items-stretch"
        >
          {/* Pillar 1: Social Media Management */}
          <div className="bg-[#141414] p-8 sm:p-10 rounded-[15px] border border-[#403f3f] flex flex-col justify-between hover:border-[#6f879c] transition-colors duration-500 ease-[cubic-bezier(0.52,0.01,0,1)]">
            <div>
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-[#403f3f] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[5px] border border-[#403f3f] text-[#fffdf9] flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase text-[#6f879c] tracking-[0.08em] font-display">
                    PILLAR 1
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] border border-[#403f3f] text-[#fffdf9] text-xs font-display">
                  <Activity className="w-3 h-3 text-[#6f879c]" />
                  Zero AI Slop
                </span>
              </div>

              <h3 className="font-display text-2xl text-[#fffdf9] font-normal mb-3">
                Social Media Management
              </h3>
              <p className="text-sm sm:text-base text-[#fffdf9]/80 font-normal leading-relaxed mb-6">
                Bespoke job-site video editing, trade scripts, and dedicated DM setters to convert viewers into booked estimates while your crew is on-site.
              </p>

              {/* Platforms We Manage Profiles On */}
              <div className="mb-6 p-4 rounded-[10px] bg-[#000000] border border-[#403f3f]">
                <div className="text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-3 flex items-center justify-between">
                  <span>PLATFORMS MANAGED</span>
                  <span className="text-[11px] text-[#fffdf9]/70 font-normal">Active Profile Oversight</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-[5px] bg-[#141414] border border-[#403f3f] text-xs font-display text-[#fffdf9]">
                    <Instagram className="w-3.5 h-3.5 text-[#fffdf9] shrink-0" />
                    <span>Instagram</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-[5px] bg-[#141414] border border-[#403f3f] text-xs font-display text-[#fffdf9]">
                    <Facebook className="w-3.5 h-3.5 text-[#fffdf9] shrink-0" />
                    <span>Facebook</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-[5px] bg-[#141414] border border-[#403f3f] text-xs font-display text-[#fffdf9]">
                    <Linkedin className="w-3.5 h-3.5 text-[#fffdf9] shrink-0" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-[5px] bg-[#141414] border border-[#403f3f] text-xs font-display text-[#fffdf9]">
                    <Video className="w-3.5 h-3.5 text-[#fffdf9] shrink-0" />
                    <span>TikTok</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 mb-6">
                {[
                  "Profiles managed on Instagram, Facebook, LinkedIn & TikTok",
                  "Content creation & short-form video editing (Reels, TikToks)",
                  "High-ticket scriptwriting tailored to your niche",
                  "Profile makeover & conversion-optimized bio",
                  "Dedicated DM setter booking inbound chats into calls"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#fffdf9]">
                    <div className="w-4 h-4 rounded-full text-[#fffdf9] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#403f3f] flex items-center justify-between text-xs tracking-[0.08em] uppercase text-[#6f879c]">
              <span>FOCUS: BRAND AUTHORITY</span>
              <span className="text-[#fffdf9]">ORGANIC PIPELINE</span>
            </div>
          </div>

          {/* Pillar 2: Meta Ads & Setters */}
          <div className="bg-[#141414] p-8 sm:p-10 rounded-[15px] border border-[#403f3f] flex flex-col justify-between hover:border-[#6f879c] transition-colors duration-500 ease-[cubic-bezier(0.52,0.01,0,1)]">
            <div>
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-[#403f3f] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[5px] border border-[#403f3f] text-[#fffdf9] flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase text-[#6f879c] tracking-[0.08em] font-display">
                    PILLAR 2
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] border border-[#403f3f] text-[#fffdf9] text-xs font-display">
                  $55 Lead · $97 Appt
                </span>
              </div>

              <h3 className="font-display text-2xl text-[#fffdf9] font-normal mb-3">
                Hybrid Pay-Per-Lead Ads
              </h3>
              <p className="text-sm sm:text-base text-[#fffdf9]/80 font-normal leading-relaxed mb-8">
                Direct Meta ads driving traffic through a multi-stage quiz vetting +$2k project budgets. Trained setters call in seconds to book verified estimates.
              </p>

              <div className="space-y-3.5 mb-6">
                {[
                  "High-intent Meta ads tracking active buyers",
                  "Multi-stage quiz filtering out tire-kickers",
                  "Trained live setters calling within seconds",
                  "60-day automated multi-channel follow-up",
                  "Live personal client performance dashboard"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#fffdf9]">
                    <div className="w-4 h-4 rounded-full text-[#fffdf9] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#403f3f] flex items-center justify-between text-xs tracking-[0.08em] uppercase text-[#6f879c]">
              <span>FOCUS: QUALIFIED BOOKINGS</span>
              <span className="text-[#fffdf9]">PAY PER SHOW</span>
            </div>
          </div>
        </motion.div>

        {/* Personal Dashboard & Setters Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-[15px] bg-[#141414] border border-[#403f3f] hover:border-[#6f879c] transition-colors duration-500 ease-[cubic-bezier(0.52,0.01,0,1)]">
            <div className="w-8 h-8 rounded-[5px] border border-[#403f3f] flex items-center justify-center text-[#fffdf9] mb-4">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <h4 className="font-display text-xl text-[#fffdf9] font-normal mb-2">
              Personal Dashboard
            </h4>
            <p className="text-sm sm:text-base text-[#fffdf9]/80 leading-relaxed">
              Track active lead volumes, survey responses, cost-per-lead, and shown appointments 24/7.
            </p>
          </div>

          <div className="p-8 rounded-[15px] bg-[#141414] border border-[#403f3f] hover:border-[#6f879c] transition-colors duration-500 ease-[cubic-bezier(0.52,0.01,0,1)]">
            <div className="w-8 h-8 rounded-[5px] border border-[#403f3f] flex items-center justify-center text-[#fffdf9] mb-4">
              <PhoneCall className="w-4 h-4" />
            </div>
            <h4 className="font-display text-xl text-[#fffdf9] font-normal mb-2">
              Dedicated Setters
            </h4>
            <p className="text-sm sm:text-base text-[#fffdf9]/80 leading-relaxed">
              Our setters call leads within seconds to verify project scope and budget before booking.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const VantyxModel = ShownLeadsModel;
