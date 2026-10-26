import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface StatItemProps {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  description: string;
  duration?: number;
}

const StatCounter: React.FC<StatItemProps> = ({
  prefix = '',
  target,
  suffix = '',
  label,
  description,
  duration = 1400,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 sm:p-8">
      {/* Big Scale Display Number */}
      <div className="font-display text-5xl sm:text-6xl text-[#fffdf9] font-normal tracking-[-0.025em] mb-2 flex items-center justify-center">
        <span>{prefix}</span>
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5">
        {label}
      </div>
      <div className="text-sm text-[#fffdf9]/70 font-normal max-w-[220px]">
        {description}
      </div>
    </div>
  );
};

export const NumbersProof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="numbers-proof"
      className="relative py-24 sm:py-32 bg-[#000000] border-y border-[#1a1a1a] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]">
          <div>
            <StatCounter
              target={94}
              suffix="%"
              label={t.stat1Label}
              description={t.stat1Desc}
            />
          </div>

          <div>
            <StatCounter
              target={100}
              suffix="%"
              label={t.stat2Label}
              description={t.stat2Desc}
            />
          </div>

          <div>
            <StatCounter
              target={3500}
              prefix="+"
              label={t.stat3Label}
              description={t.stat3Desc}
            />
          </div>

          <div>
            <StatCounter
              target={0}
              label={t.stat4Label}
              description={t.stat4Desc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
