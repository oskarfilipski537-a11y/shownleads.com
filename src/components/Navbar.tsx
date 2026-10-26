import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronRight, Globe, ChevronDown, Instagram, Linkedin, Facebook } from 'lucide-react';
import { AppPage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenQuiz: () => void;
  currentPage?: AppPage;
  onNavigate?: (page: AppPage, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuiz, 
  currentPage = 'home', 
  onNavigate 
}) => {
  const { language, setLanguage, languages, currentLanguageOption, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isOver = window.scrollY > 20;
          setScrolled((prev) => (prev !== isOver ? isOver : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (page: AppPage, hash?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, hash);
    } else {
      const url = page === 'home' ? (hash ? `/${hash}` : '/') : `/${page}`;
      window.location.assign(url);
    }
  };

  const navLinks: { id: AppPage; label: string; badge?: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'company', label: t.navCompany },
    { id: 'appointments', label: t.navAppointments },
    { id: 'case-studies', label: t.navCaseStudies },
  ];

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[1.5px] z-50 origin-left pointer-events-none"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #ff2a2a 0%, #2a7fff 50%, #2aff2a 100%)',
        }}
      />

      {/* Floating Logo Top-Left (Optimized sizing & vertical alignment across all views) */}
      <div className="fixed top-3 sm:top-4 lg:top-5 left-4 sm:left-6 lg:left-8 z-40 pointer-events-auto flex items-center h-10 lg:h-11">
        <button
          onClick={() => handleNavClick('home')}
          id="brand-logo"
          className="flex items-center group cursor-pointer focus:outline-none bg-transparent border-none p-0 transition-opacity hover:opacity-90"
          aria-label="ShownLeads Home"
        >
          <img
            src="https://res.cloudinary.com/pskmrw71/image/upload/v1791768528/ShownLeads_Gold_Growth_Logo.png"
            alt="ShownLeads"
            className="h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 w-auto object-contain filter drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] brightness-[1.03] contrast-[1.05] transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </button>
      </div>

      {/* Floating Top-Right Cluster: Language Changing Tool + CTA Button (Desktop / Laptop) */}
      <div className="fixed top-3 sm:top-4 lg:top-5 right-4 sm:right-6 lg:right-8 z-40 pointer-events-auto hidden lg:flex items-center gap-2 h-10 lg:h-11">
        {/* Language Changing Tool Dropdown */}
        <div className="relative" ref={langDropdownRef}>
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="inline-flex items-center gap-1.5 border border-[#2e323e] bg-[#0c0d10]/90 hover:bg-[#181a22] text-[#fffdf9] backdrop-blur-xl rounded-full px-3 py-2 text-xs font-sans font-medium transition-all duration-200 cursor-pointer shadow-md"
            aria-label="Change language"
          >
            <span className="text-sm">{currentLanguageOption.flag}</span>
            <span className="font-mono text-[11px] uppercase">{currentLanguageOption.shortLabel}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#888888] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Glass Dropdown Menu */}
          <AnimatePresence>
            {langDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0c0d10]/95 border border-[#2e323e] p-1.5 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
              >
                <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#6f7e8f] px-3 py-1 font-semibold">
                  {t.languageLabel}
                </div>
                {languages.map((l) => {
                  const isSelected = language === l.code;
                  return (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-colors cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#1e2028] text-[#2aff2a] font-semibold'
                          : 'text-[#d6dee8] hover:bg-[#16181f] hover:text-[#fffdf9]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.nativeLabel}</span>
                      </span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a]" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <button
          id="nav-apply-btn"
          onClick={onOpenQuiz}
          className="group inline-flex items-center justify-center border border-[#fffdf9]/90 bg-[#0c0d10]/90 hover:bg-[#fffdf9] text-[#fffdf9] hover:text-[#101010] backdrop-blur-xl rounded-full px-4 lg:px-5 py-2 lg:py-2.5 text-[11px] lg:text-xs uppercase tracking-[0.08em] font-sans font-medium shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(255,253,249,0.25)] transition-all duration-300 cursor-pointer active:scale-95"
        >
          <span>{t.navSeeIfYouQualify}</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </button>
      </div>

      {/* Centered Compact Floating Nav Bar for Pages Only (Optimized Width, 35px Radius, Zero Green Outlines) */}
      <header
        id="main-nav"
        className="fixed top-3 sm:top-4 lg:top-5 inset-x-0 z-40 flex items-center justify-center pointer-events-none px-4 sm:px-6 lg:px-8 h-10 lg:h-11"
      >
        {/* Desktop Pages Pill */}
        <nav
          className={`pointer-events-auto rounded-[35px] transition-all duration-300 ease-[cubic-bezier(0.52,0.01,0,1)] hidden lg:flex items-center gap-0.5 xl:gap-1.5 px-2.5 xl:px-4 py-1.5 xl:py-2 ${
            scrolled
              ? 'bg-[#0c0d10]/95 backdrop-blur-xl border border-[#2a2c35] shadow-[0_12px_45px_rgba(0,0,0,0.85)]'
              : 'bg-[#0c0d10]/85 backdrop-blur-lg border border-[#242732]/85 shadow-[0_8px_32px_rgba(0,0,0,0.65)]'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] xl:text-xs uppercase tracking-[0.06em] xl:tracking-[0.08em] font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-[#1e2028] text-[#fffdf9] font-semibold border border-[#333644] shadow-sm' 
                    : 'text-[#fffdf9]/70 hover:text-[#fffdf9] hover:bg-[#14151a]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#1e2026] text-[9px] text-[#cfd9e4] border border-[#2e3238]">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Divider between nav links and social buttons */}
          <div className="h-4 w-[1px] bg-[#2a2d39] mx-1 xl:mx-1.5" />

          {/* Social Media Buttons */}
          <div className="flex items-center gap-1">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#fffdf9]/70 hover:text-[#fffdf9] hover:bg-[#181a22] transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/oskar-filipski-942360327"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#fffdf9]/70 hover:text-[#fffdf9] hover:bg-[#181a22] transition-colors"
              aria-label="LinkedIn Profile"
              title="Oskar Filipski LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#fffdf9]/70 hover:text-[#fffdf9] hover:bg-[#181a22] transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>

        {/* Mobile / Tablet Compact Floating Control (Right-aligned, perfectly centered) */}
        <div className="pointer-events-auto lg:hidden flex items-center gap-1.5 sm:gap-2 ml-auto">
          {/* Mobile Language Button */}
          <button
            onClick={() => {
              const currentIndex = languages.findIndex((l) => l.code === language);
              const nextLang = languages[(currentIndex + 1) % languages.length].code;
              setLanguage(nextLang);
            }}
            className="inline-flex items-center gap-1 border border-[#2e323e] bg-[#0c0d10]/90 rounded-full px-2.5 py-1.5 text-[11px] font-mono font-medium text-[#fffdf9] backdrop-blur-md shadow-md active:scale-95"
            title="Switch Language"
            aria-label="Switch Language"
          >
            <span>{currentLanguageOption.flag}</span>
            <span className="uppercase text-[10px]">{currentLanguageOption.shortLabel}</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center justify-center border border-[#fffdf9] bg-[#0c0d10]/90 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-sans font-medium text-[#fffdf9] hover:bg-[#fffdf9] hover:text-[#101010] active:scale-95 transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          >
            <span>{t.navQualify}</span>
            <ArrowUpRight className="w-3 h-3 ml-1 opacity-80" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[#2e3238] bg-[#0c0d10]/90 backdrop-blur-md text-[#fffdf9] hover:text-[#fffdf9] hover:border-[#fffdf9]/40 active:scale-95 transition-colors cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Drawer Navigation (Zero Green Outlines) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 sm:inset-x-6 top-[60px] sm:top-[70px] z-30 max-w-lg mx-auto rounded-[28px] bg-[#0c0d10]/95 border border-[#2e3238] p-4 sm:p-5 lg:hidden shadow-2xl backdrop-blur-2xl"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between p-3 rounded-[14px] text-xs uppercase tracking-wider font-sans font-medium transition-colors text-left cursor-pointer ${
                      isActive 
                        ? 'bg-[#181a22] text-[#fffdf9] font-semibold' 
                        : 'text-[#fffdf9]/75 hover:bg-[#14151a]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#1e2026] text-[10px] text-[#cfd9e4]">
                        {link.badge} Niches
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-[#6f879c]" />
                    )}
                  </button>
                );
              })}

              {/* Language Changing Tool in Mobile Drawer */}
              <div className="pt-3 pb-2 border-t border-[#26282e]">
                <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#7e8c9d] mb-2 px-1 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-[#2aff2a]" /> {t.languageLabel}
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {languages.map((l) => {
                    const isSelected = language === l.code;
                    return (
                      <button
                        key={l.code}
                        onClick={() => setLanguage(l.code)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#2aff2a] text-[#000000] font-semibold shadow-sm'
                            : 'bg-[#14151a] text-[#c9d4e0] hover:bg-[#1a1c22]'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{l.flag}</span>
                          <span>{l.nativeLabel}</span>
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#000000]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Social Channels in Mobile Drawer */}
              <div className="pt-3 pb-2 border-t border-[#26282e]">
                <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#7e8c9d] mb-2 px-1 font-semibold">
                  Social Channels
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#14151a] border border-[#232733] text-xs font-sans text-[#c9d4e0] hover:text-[#fffdf9] hover:bg-[#1c1f28] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#fffdf9]" />
                    <span className="text-[11px]">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oskar-filipski-942360327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#14151a] border border-[#232733] text-xs font-sans text-[#c9d4e0] hover:text-[#fffdf9] hover:bg-[#1c1f28] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#fffdf9]" />
                    <span className="text-[11px]">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#14151a] border border-[#232733] text-xs font-sans text-[#c9d4e0] hover:text-[#fffdf9] hover:bg-[#1c1f28] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#fffdf9]" />
                    <span className="text-[11px]">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#26282e]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuiz();
                  }}
                  className="w-full py-3.5 rounded-full bg-[#fffdf9] text-[#101010] text-xs font-sans font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:bg-[#eae6de] transition-colors"
                >
                  <span>{t.navSeeIfYouQualify}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
