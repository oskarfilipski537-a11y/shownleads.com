import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Calendar, Clock, Download, AlertCircle, RotateCcw, User, Mail, Phone, Building2, ChevronLeft, ShieldCheck, MapPin } from 'lucide-react';
import { QuizOption, QuizState } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { QUIZ_TRANSLATIONS } from '../data/quizTranslations';

interface HeroQuizProps {
  onStateChange?: (state: QuizState) => void;
  onCompleted?: (applicantName?: string) => void;
}

export const HeroQuiz: React.FC<HeroQuizProps> = ({ onStateChange, onCompleted }) => {
  const { language } = useLanguage();
  const quizContent = QUIZ_TRANSLATIONS[language] || QUIZ_TRANSLATIONS.en;
  const questions = quizContent.questions;

  const [started, setStarted] = useState(false);
  const [direction, setDirection] = useState<number>(1);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    isQualified: false,
  });

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  
  // Qualified booking state
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow at 2:00 PM');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingCompany, setBookingCompany] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Disqualified lead capture state
  const [nurtureEmail, setNurtureEmail] = useState('');
  const [nurtureSubmitted, setNurtureSubmitted] = useState(false);

  const currentQ = questions[quizState.currentQuestionIndex];
  const progressPercent = started
    ? quizState.isCompleted
      ? 100
      : ((quizState.currentQuestionIndex + 1) / questions.length) * 100
    : 0;

  const handleSelectOption = (option: QuizOption) => {
    setDirection(1);
    setSelectedOptionId(option.id);

    const updatedAnswers = {
      ...quizState.answers,
      [currentQ.id]: option,
    };

    setTimeout(() => {
      setSelectedOptionId(null);

      // Check if this option disqualifies immediately
      if (option.isDisqualifier || option.isSoftDisqualifier) {
        let reason = quizContent.disqualificationReasons.general;
        if (option.id === 'under_2k') {
          reason = quizContent.disqualificationReasons.ticket;
        } else if (option.id === 'under_30k') {
          reason = quizContent.disqualificationReasons.revenue;
        } else if (option.id === 'other_geo') {
          reason = quizContent.disqualificationReasons.geo;
        } else if (option.isSoftDisqualifier) {
          reason = quizContent.disqualificationReasons.adSpend;
        }

        setQuizState({
          ...quizState,
          answers: updatedAnswers,
          isCompleted: true,
          isQualified: false,
          disqualificationReason: reason,
        });
        return;
      }

      // Check if there is a next question
      if (quizState.currentQuestionIndex < questions.length - 1) {
        setQuizState({
          ...quizState,
          answers: updatedAnswers,
          currentQuestionIndex: quizState.currentQuestionIndex + 1,
        });
      } else {
        // Finished all questions successfully -> Qualified
        setQuizState({
          ...quizState,
          answers: updatedAnswers,
          isCompleted: true,
          isQualified: true,
        });
      }
    }, 280);
  };

  const handleReset = () => {
    setDirection(1);
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      isQualified: false,
    });
    setStarted(false);
    setSelectedOptionId(null);
    setBookingSubmitted(false);
    setNurtureSubmitted(false);
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setDirection(-1);
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
      });
    }
  };

  const questionSlideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingEmail || !bookingName) return;
    setBookingSubmitted(true);
    onCompleted?.(bookingName);
  };

  const handleNurtureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nurtureEmail) return;
    setNurtureSubmitted(true);
    onCompleted?.('Growth Partner');
  };

  const timeSlots = [
    'Tomorrow at 10:00 AM',
    'Tomorrow at 2:00 PM',
    'Thursday at 11:30 AM',
    'Thursday at 4:00 PM',
    'Friday at 1:00 PM',
  ];

  return (
    <div
      id="hero-quiz-card"
      className="relative w-full max-w-lg mx-auto rounded-[15px] bg-[#141414] p-7 sm:p-9 border border-[#403f3f]"
    >
      {/* Quiz Progress & Step Indicator */}
      {started && !quizState.isCompleted && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs tracking-[0.08em] uppercase font-display mb-2.5">
            <span className="text-[#6f879c]">
              {quizContent.stepIndicator
                .replace('{current}', String(quizState.currentQuestionIndex + 1))
                .replace('{total}', String(questions.length))}
            </span>
            <span className="text-[#fffdf9]">
              {quizContent.completedLabel.replace('{percent}', String(Math.round(progressPercent)))}
            </span>
          </div>
          <div className="w-full bg-[#101010] h-[2px] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff2a2a] via-[#2a7fff] to-[#2aff2a] transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* QUIZ START VIEW */}
      {!started && (
        <div className="flex flex-col items-center text-center py-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] border border-[#403f3f] text-[#6f879c] text-xs uppercase tracking-[0.08em] font-sans mb-5 bg-[#101010]">
            <span>{quizContent.badge}</span>
          </div>

          <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal mb-3 tracking-tight">
            {quizContent.headlinePart1}
            <span className="neon-silver-text">{quizContent.headlineSpan}</span>
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#fffdf9]/80 max-w-sm mb-8 leading-relaxed font-normal">
            {quizContent.subhead}
          </p>

          <button
            id="start-quiz-btn"
            onClick={() => setStarted(true)}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm uppercase tracking-[0.08em] font-medium font-sans text-[#101010] bg-[#fffdf9] hover:bg-[#eae6de] hover:scale-[1.02] active:scale-[0.98] border border-[#fffdf9] rounded-[6px] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span>{quizContent.startBtn}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2 mt-6 text-xs text-[#6f879c]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2aff2a]" />
            <span>Strict 1-partner-per-niche territory lock</span>
          </div>
        </div>
      )}

      {/* ACTIVE QUESTIONS VIEW */}
      {started && !quizState.isCompleted && currentQ && (
        <div className="overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display">
              {quizContent.stepIndicator
                .replace('{current}', String(quizState.currentQuestionIndex + 1))
                .replace('{total}', String(questions.length))}
            </span>
            {quizState.currentQuestionIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-[#6f879c] hover:text-[#fffdf9] transition-colors cursor-pointer px-2.5 py-1 rounded-[5px] border border-[#403f3f]"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{quizContent.disqualified.resetBtn === 'Start Over' ? 'Back' : 'Tillbaka'}</span>
              </button>
            )}
          </div>

          <div className="relative overflow-hidden min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentQ.id}
                custom={direction}
                variants={questionSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.52, 0.01, 0, 1] }}
                className="w-full"
              >
                <h4 className="font-display text-xl sm:text-2xl text-[#fffdf9] font-normal mb-5 leading-snug">
                  {currentQ.question}
                </h4>

                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOptionId === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option)}
                        className={`w-full text-left p-4 rounded-[10px] transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group ${
                          isSelected
                            ? 'bg-[#181818] border border-[#fffdf9]'
                            : 'bg-[#101010] border border-[#403f3f] hover:border-[#6f879c]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`w-5 h-5 rounded-[3px] text-xs font-display flex items-center justify-center shrink-0 mt-0.5 border ${
                            isSelected
                              ? 'border-[#fffdf9] text-[#fffdf9]'
                              : 'border-[#403f3f] text-[#6f879c] group-hover:text-[#fffdf9]'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <div>
                            <div className="text-sm sm:text-base text-[#fffdf9] font-normal">
                              {option.label}
                            </div>
                            {option.sublabel && (
                              <div className="text-xs mt-0.5 text-[#6f879c] font-normal">
                                {option.sublabel}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#fffdf9] bg-[#fffdf9] text-[#101010]'
                            : 'border-[#403f3f] text-transparent'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* QUALIFIED VIEW */}
      {quizState.isCompleted && quizState.isQualified && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] border border-[#fffdf9] text-[#fffdf9] mb-4 bg-[#101010]">
            <Check className="w-3.5 h-3.5 stroke-[2] text-[#2aff2a]" />
            <span className="text-xs uppercase tracking-[0.08em] font-sans font-medium">
              {quizContent.qualified.badge}
            </span>
          </div>

          <h3 className="font-heading uppercase text-2xl sm:text-3xl text-[#fffdf9] font-normal mb-2 tracking-tight">
            {quizContent.qualified.title}
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#fffdf9]/80 mb-6 leading-relaxed font-normal">
            {quizContent.qualified.desc}
          </p>

          {!bookingSubmitted ? (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-2.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#6f879c]" />
                  <span>{quizContent.qualified.bookingTitle}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`text-left text-xs p-3 rounded-[5px] border transition-all cursor-pointer font-normal ${
                        selectedDate === slot
                          ? 'bg-[#181818] border-[#fffdf9] text-[#fffdf9]'
                          : 'bg-[#101010] border-[#403f3f] text-[#fffdf9]/70 hover:border-[#6f879c]'
                      }`}
                    >
                      <Clock className="w-3 h-3 inline mr-1.5 text-[#6f879c]" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#6f879c]" />
                    <span>{quizContent.qualified.namePlaceholder} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={quizContent.qualified.namePlaceholder}
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#6f879c]" />
                    <span>{quizContent.qualified.emailPlaceholder} *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={quizContent.qualified.emailPlaceholder}
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-[#6f879c]" />
                    <span>{quizContent.qualified.companyPlaceholder} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={quizContent.qualified.companyPlaceholder}
                    value={bookingCompany}
                    onChange={(e) => setBookingCompany(e.target.value)}
                    className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#6f879c]" />
                    <span>{quizContent.qualified.cityPlaceholder} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={quizContent.qualified.cityPlaceholder}
                    value={bookingCity}
                    onChange={(e) => setBookingCity(e.target.value)}
                    className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.08em] text-[#6f879c] font-display mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#6f879c]" />
                  <span>{quizContent.qualified.phonePlaceholder} *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={quizContent.qualified.phonePlaceholder}
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  className="w-full bg-[#101010] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-[6px] bg-[#fffdf9] hover:bg-[#eae6de] hover:scale-[1.01] active:scale-[0.99] text-[#101010] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{quizContent.qualified.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="bg-[#101010] border border-[#403f3f] rounded-[15px] p-8 text-center">
              <div className="w-12 h-12 rounded-full border border-[#fffdf9] flex items-center justify-center mx-auto mb-4 text-[#fffdf9]">
                <Check className="w-6 h-6 stroke-[2] text-[#2aff2a]" />
              </div>
              <h4 className="font-heading uppercase text-xl text-[#fffdf9] font-normal mb-2">
                {quizContent.qualified.confirmedTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#fffdf9]/80 max-w-md mx-auto mb-4 leading-relaxed font-sans">
                {quizContent.qualified.confirmedDesc}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-[#6f879c] hover:text-[#fffdf9] transition-colors cursor-pointer px-4 py-2 rounded-[5px] border border-[#403f3f]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{quizContent.disqualified.resetBtn}</span>
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* DISQUALIFIED VIEW */}
      {quizState.isCompleted && !quizState.isQualified && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] border border-[#403f3f] text-[#6f879c] mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-[#ff4a4a]" />
            <span className="text-xs uppercase tracking-[0.08em] font-display">
              {quizContent.disqualified.badge}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-[#fffdf9] font-normal mb-2">
            {quizContent.disqualified.title}
          </h3>
          <p className="font-display text-sm sm:text-base text-[#fffdf9]/80 mb-6 leading-relaxed font-normal">
            {quizState.disqualificationReason || quizContent.disqualified.desc}
          </p>

          <div className="bg-[#101010] border border-[#403f3f] rounded-[10px] p-5 mb-5">
            <div className="text-xs uppercase tracking-[0.08em] text-[#fffdf9] font-display mb-2 flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-[#6f879c]" />
              <span>{quizContent.disqualified.waitlistTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#fffdf9]/70 mb-4 leading-relaxed font-normal">
              {quizContent.disqualified.waitlistDesc}
            </p>

            {!nurtureSubmitted ? (
              <form onSubmit={handleNurtureSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder={quizContent.disqualified.emailPlaceholder}
                  value={nurtureEmail}
                  onChange={(e) => setNurtureEmail(e.target.value)}
                  className="w-full bg-[#141414] border border-[#403f3f] rounded-[5px] px-3.5 py-2.5 text-xs text-[#fffdf9] placeholder-[#6f879c] focus:outline-none focus:border-[#fffdf9]"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-[5px] border border-[#fffdf9] text-[#fffdf9] hover:bg-[#fffdf9] hover:text-[#101010] font-normal text-xs uppercase tracking-[0.08em] transition-all duration-500 cursor-pointer"
                >
                  {quizContent.disqualified.submitWaitlistBtn}
                </button>
              </form>
            ) : (
              <div className="text-xs text-[#fffdf9] py-2 flex items-center gap-2 font-normal">
                <Check className="w-3.5 h-3.5 text-[#2aff2a]" />
                <span>{quizContent.disqualified.confirmedWaitlist}</span>
              </div>
            )}
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-[#6f879c] hover:text-[#fffdf9] transition-colors cursor-pointer px-4 py-2 rounded-[5px] border border-[#403f3f]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{quizContent.disqualified.resetBtn}</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};
