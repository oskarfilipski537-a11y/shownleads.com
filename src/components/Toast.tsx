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
          <div className="rounded-[20px] bg-[#0c0e17]/95 border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden backdrop-blur-2xl">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-400" />

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 mt-0.5 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-[0.08em] font-display text-[#fffdf9] font-semibold">
                    {title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-400 uppercase">
                    Priority Audit
                  </span>
                </div>

                <p className="text-xs text-[#fffdf9]/90 font-normal leading-relaxed">
                  {applicantName ? `Thank you, ${applicantName}. ` : "Thank you! "}
                  {message}
                </p>

                <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#6f879c] font-display">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
                  <span className="text-blue-300">Expert Lead Strategist Assigned</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Dismiss notification"
                className="text-[#6f879c] hover:text-[#fffdf9] transition-colors p-1.5 rounded-full hover:bg-white/10 cursor-pointer shrink-0"
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
