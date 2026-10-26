import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Sparkles, UserCheck } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  applicantName?: string;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  onClose,
  title = "Submission Confirmed",
  message = "Thank you! Your qualification submission has been logged. An expert growth strategist is reviewing your territory data and will finalize your custom high-intent model.",
  applicantName,
  duration = 8000,
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.52, 0.01, 0, 1] }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] pointer-events-auto"
          role="status"
          aria-live="polite"
        >
          <div className="rounded-[12px] bg-[#141414] border border-[#fffdf9] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-md">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2a7fff] via-[#fffdf9] to-[#2aff2a]" />

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-[5px] bg-[#101010] border border-[#403f3f] flex items-center justify-center shrink-0 text-[#fffdf9] mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#fffdf9]" />
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-[0.08em] font-display text-[#fffdf9] font-normal">
                    {title}
                  </span>
                  <span className="px-1.5 py-0.5 rounded-[3px] bg-[#101010] border border-[#403f3f] text-[9px] font-display text-[#6f879c] uppercase">
                    Priority Audit
                  </span>
                </div>

                <p className="text-xs text-[#fffdf9]/90 font-normal leading-relaxed">
                  {applicantName ? `Thank you, ${applicantName}. ` : "Thank you! "}
                  {message}
                </p>

                <div className="mt-2.5 pt-2 border-t border-[#403f3f]/50 flex items-center gap-2 text-[11px] text-[#6f879c] font-display">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] animate-pulse" />
                  <span>Expert Lead Strategist Assigned</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Dismiss notification"
                className="text-[#6f879c] hover:text-[#fffdf9] transition-colors p-1 rounded hover:bg-[#1f1f1f] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
