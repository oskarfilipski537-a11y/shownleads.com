import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { HeroQuiz } from './HeroQuiz';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleted?: (applicantName?: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, onCompleted }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101010]/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.4, ease: [0.52, 0.01, 0, 1] }}
            className="relative w-full max-w-xl z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Quiz"
              className="absolute -top-12 right-0 sm:top-5 sm:right-5 z-20 w-8 h-8 rounded-[5px] bg-[#141414] hover:bg-[#1f1f1f] border border-[#403f3f] text-[#fffdf9] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <HeroQuiz onCompleted={onCompleted} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
