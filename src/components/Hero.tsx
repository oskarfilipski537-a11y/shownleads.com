import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
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
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#000000]"
    >
      {/* Visually Animated Background Layer (flowing particles, perspective grid scan, chromatic caustic fields) */}
      <AnimatedBackground />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* High-Impact Condensed Display Headline (Anton / Bebas Neue) */}
          <motion.h1
            variants={itemVariants}
            className="font-heading uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] text-[#fffdf9] font-normal leading-[0.98] tracking-[0.015em] mb-6 max-w-5xl select-none"
          >
            {t.heroHeadlinePart1}
            <span className="neon-silver-text drop-shadow-[0_0_25px_rgba(207,217,228,0.35)]">
              {t.heroHeadlineSpan}
            </span>
          </motion.h1>

          {/* Supporting Subhead in Clean Geometric Body Font (Outfit) */}
          <motion.h2
            variants={itemVariants}
            className="font-sans text-sm sm:text-base lg:text-[1.125rem] text-[#fffdf9]/85 font-normal max-w-3xl leading-[1.68] mb-10"
          >
            {t.heroSubhead}
          </motion.h2>

          {/* Two Action Buttons: "see if you qualify" and "talk to a specialist" */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenQuiz}
              id="hero-see-if-you-qualify-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#101010] bg-[#fffdf9] border border-[#fffdf9] rounded-[6px] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(255,253,249,0.15)]"
            >
              <span>{t.heroBtnQualify}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onTalkToSpecialist}
              id="hero-talk-to-specialist-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#fffdf9] border border-[#403f3f] hover:border-[#fffdf9] bg-[#141414]/90 hover:bg-[#1f1f1f] hover:scale-[1.02] active:scale-[0.98] rounded-[6px] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#6f879c] group-hover:text-[#fffdf9] transition-colors" />
              <span>{t.heroBtnSpecialist}</span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
