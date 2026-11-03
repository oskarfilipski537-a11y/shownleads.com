import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenQuiz?: () => void;
  onTalkToSpecialist?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onTalkToSpecialist }) => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.52, 0.01, 0, 1] },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#07080c]"
    >
      {/* Framer/Fundory Luminous Blue Aurora Header Glow */}
      <div className="absolute top-0 inset-x-0 h-[560px] pointer-events-none aurora-hero-glow z-0 opacity-90" />

      {/* Visually Animated Background Layer */}
      <AnimatedBackground />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Subtle Tagline Pill */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1326]/90 border border-blue-500/30 text-xs font-sans text-blue-300 shadow-[0_0_25px_rgba(37,99,235,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="tracking-wide uppercase font-medium text-[11px] sm:text-xs">
              The Market Leader Growth System • Attic Insulation Contractors
            </span>
          </motion.div>

          {/* Primary Headline with Framer-style Serif Italic Accent */}
          <motion.h1
            variants={itemVariants}
            className="font-heading uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] text-[#fffdf9] font-normal leading-[1.02] tracking-[0.015em] mb-6 max-w-5xl select-none"
          >
            Become One of the{' '}
            <span className="font-serif italic font-normal text-blue-300 tracking-normal normal-case drop-shadow-[0_0_30px_rgba(59,130,246,0.45)]">
              Biggest
            </span>{' '}
            Attic Insulation Companies in Your City.
          </motion.h1>

          {/* Supporting Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-sans text-base sm:text-lg lg:text-[1.15rem] text-[#fffdf9]/85 font-normal max-w-3xl leading-[1.68] mb-10"
          >
            We help ambitious attic insulation contractors generate more homeowner demand, build a stronger workforce, and create the infrastructure to scale—without trying to manage every part of growth themselves.
          </motion.h2>

          {/* Action Buttons: "SEE IF YOUR BUSINESS QUALIFIES" and "BOOK A GROWTH STRATEGY CALL" */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenQuiz}
              id="hero-see-if-you-qualify-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#0a0d14] bg-[#fffdf9] border border-[#fffdf9] rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>SEE IF YOUR BUSINESS QUALIFIES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onTalkToSpecialist}
              id="hero-talk-to-specialist-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#fffdf9] border border-white/20 hover:border-blue-400 bg-[#0e111a]/90 hover:bg-[#151928] hover:scale-[1.02] active:scale-[0.98] rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]"
            >
              <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span>BOOK A GROWTH STRATEGY CALL</span>
            </button>
          </motion.div>

          {/* Wistia Video Sales Letter (VSL) Embed directly under the CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl mx-auto mt-12 sm:mt-14"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0e17]/90 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-2 sm:p-3">
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] mb-2 text-xs font-sans text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-gray-400 tracking-wider uppercase font-mono">
                    ShownLeads Master Walkthrough
                  </span>
                </div>
                <span className="text-[10px] text-blue-400 uppercase tracking-widest font-mono font-medium">
                  HD 1080P
                </span>
              </div>

              {/* Wistia Custom Element */}
              <div className="relative rounded-xl overflow-hidden bg-black/80 aspect-video shadow-inner">
                <wistia-player
                  media-id="hi3zcl5d2a"
                  aspect="1.7777777777777777"
                ></wistia-player>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
