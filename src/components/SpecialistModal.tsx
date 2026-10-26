import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MapPin, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALIST_TRANSLATIONS } from '../data/specialistTranslations';

interface SpecialistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialistModal: React.FC<SpecialistModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const content = SPECIALIST_TRANSLATIONS[language] || SPECIALIST_TRANSLATIONS.en;

  const [market, setMarket] = useState<'US' | 'Europe'>('US');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    email: '',
    phone: '',
    tradeSector: content.tradeOptions[0] || 'Kitchen Remodeling',
    monthlyVolume: content.volumeOptions[0] || '$30k - $50k/mo',
    preferredTime: content.timeOptions[0] || 'Morning (9am - 12pm)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

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
            className="relative w-full max-w-xl z-10 my-auto bg-[#141414] border border-[#403f3f] rounded-[14px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-20 w-8 h-8 rounded-[5px] bg-[#101010] hover:bg-[#1a1a1a] border border-[#403f3f] text-[#fffdf9] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-[#101010] border border-[#403f3f] text-[#fffdf9] mb-3">
                    <UserCheck className="w-3.5 h-3.5 text-[#2aff2a]" />
                    <span className="text-[11px] uppercase tracking-[0.08em] font-display text-[#fffdf9]">
                      {content.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#fffdf9] font-normal mb-2 tracking-tight">
                    {content.title}
                  </h3>
                  <p className="font-display text-xs sm:text-sm text-[#fffdf9]/75 font-normal leading-relaxed">
                    {content.desc}
                  </p>
                </div>

                {/* Market Selector */}
                <div className="mb-5">
                  <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-2">
                    {content.marketSelectLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setMarket('US')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-[6px] text-xs font-display transition-all cursor-pointer border ${
                        market === 'US'
                          ? 'bg-[#fffdf9] text-[#101010] border-[#fffdf9] font-medium shadow-sm'
                          : 'bg-[#101010] text-[#6f879c] border-[#403f3f] hover:text-[#fffdf9]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{content.marketUS}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMarket('Europe')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-[6px] text-xs font-display transition-all cursor-pointer border ${
                        market === 'Europe'
                          ? 'bg-[#fffdf9] text-[#101010] border-[#fffdf9] font-medium shadow-sm'
                          : 'bg-[#101010] text-[#6f879c] border-[#403f3f] hover:text-[#fffdf9]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{content.marketEurope}</span>
                    </button>
                  </div>
                </div>

                {/* Booking / Details Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                        {content.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John O'Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                        {content.companyLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Remodeling Co."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#2aff2a]" />
                        <span>{content.cityLabel}</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={market === 'US' ? 'e.g. Dallas, TX / Chicago' : 'e.g. Dublin / Stockholm / Madrid'}
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                        {content.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                        {content.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                        {content.tradeLabel}
                      </label>
                      <select
                        value={formData.tradeSector}
                        onChange={(e) => setFormData({ ...formData, tradeSector: e.target.value })}
                        className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3 py-2.5 text-xs text-[#fffdf9] focus:outline-none focus:border-[#fffdf9]"
                      >
                        {content.tradeOptions.map((sector) => (
                          <option key={sector} value={sector} className="bg-[#101010] text-[#fffdf9]">
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6f879c] font-display mb-1.5">
                      {content.timeLabel}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3 py-2.5 text-xs text-[#fffdf9] focus:outline-none focus:border-[#fffdf9]"
                    >
                      {content.timeOptions.map((time) => (
                        <option key={time} value={time} className="bg-[#101010] text-[#fffdf9]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submission Guarantee Banner */}
                  <div className="p-3 rounded-[6px] bg-[#101010] border border-[#403f3f] flex items-center gap-2.5 text-[11px] text-[#6f879c]">
                    <ShieldCheck className="w-4 h-4 text-[#2aff2a] shrink-0" />
                    <span>{content.successNote}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-[5px] bg-[#fffdf9] text-[#101010] hover:bg-transparent hover:text-[#fffdf9] border border-[#fffdf9] font-display text-xs uppercase tracking-[0.08em] font-normal transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>...</span>
                    ) : (
                      <>
                        <span>{content.submitBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#101010] border border-[#2aff2a]/40 flex items-center justify-center mx-auto mb-4 text-[#2aff2a]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-2xl text-[#fffdf9] font-normal mb-2">
                  {content.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#fffdf9]/75 max-w-md mx-auto mb-6 leading-relaxed">
                  {content.successDesc}
                </p>

                <div className="p-4 rounded-[8px] bg-[#101010] border border-[#403f3f] text-xs text-[#6f879c] mb-6 text-left max-w-sm mx-auto space-y-1">
                  <div className="flex justify-between py-1 border-b border-[#262626]">
                    <span>{content.cityLabel}</span>
                    <span className="text-[#fffdf9] font-medium">{formData.city || 'Requested Territory'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#262626]">
                    <span>{content.tradeLabel}</span>
                    <span className="text-[#fffdf9] truncate max-w-[180px]">{formData.tradeSector}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Performance Basis:</span>
                    <span className="text-[#2aff2a]">Pay-Per-Estimate ($0 Retainer)</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-[5px] border border-[#fffdf9] text-[#fffdf9] hover:bg-[#fffdf9] hover:text-[#101010] text-xs uppercase tracking-[0.08em] font-display transition-all cursor-pointer"
                >
                  {content.closeBtn}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
