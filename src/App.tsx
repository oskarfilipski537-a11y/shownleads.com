/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { DeliveringPayPerResults } from './components/DeliveringPayPerResults';
import { DifferentiationSector } from './components/DifferentiationSector';
import { HowPayPerResultWorks } from './components/HowPayPerResultWorks';
import { PayPerResultSector } from './components/PayPerResultSector';
import { FitCheck } from './components/FitCheck';
import { NumbersProof } from './components/NumbersProof';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { CompaniesWeWorkWith } from './components/CompaniesWeWorkWith';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { CursorGlow } from './components/CursorGlow';
import { QuizModal } from './components/QuizModal';
import { SpecialistModal } from './components/SpecialistModal';
import { Toast } from './components/Toast';
import { LanguageProvider } from './context/LanguageContext';

// Dedicated Standalone Pages
import { CompanyPage } from './pages/CompanyPage';
import { LeadGenPage } from './pages/LeadGenPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { OurCompaniesPage } from './pages/OurCompaniesPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

import { AppPage } from './types';

function getInitialPage(): AppPage {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const candidate = path || hash;

    if (candidate.startsWith('company')) return 'company';
    if (candidate.startsWith('lead-gen')) return 'lead-gen';
    if (candidate.startsWith('appointments')) return 'appointments';
    if (candidate.startsWith('our-companies') || candidate.startsWith('companies')) return 'our-companies';
    if (candidate.startsWith('our-services') || candidate.startsWith('services')) return 'our-services';
    if (candidate.startsWith('case-studies')) return 'case-studies';
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(getInitialPage);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [applicantName, setApplicantName] = useState<string | undefined>(undefined);

  // Sync routing with browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = useCallback((page: AppPage, hash?: string) => {
    setCurrentPage(page);
    const targetUrl = page === 'home' ? (hash ? `/${hash}` : '/') : `/${page}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    if (page === 'home' && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleOpenQuiz = useCallback(() => {
    setIsQuizOpen(true);
  }, []);

  const handleCloseQuiz = useCallback(() => {
    setIsQuizOpen(false);
  }, []);

  const handleOpenSpecialist = useCallback(() => {
    setIsSpecialistOpen(true);
  }, []);

  const handleCloseSpecialist = useCallback(() => {
    setIsSpecialistOpen(false);
  }, []);

  const handleQuizCompleted = useCallback((name?: string) => {
    setApplicantName(name);
    setIsToastVisible(true);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#000000] text-[#fffdf9] font-sans antialiased relative selection:bg-[#fffdf9]/20 selection:text-[#fffdf9]">
      {/* Ambient Caustic Cursor Dispersion */}
      <CursorGlow />

      {/* Sticky Minimal Navbar */}
      <Navbar 
        onOpenQuiz={handleOpenQuiz} 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
      />

      {/* Multi-Page Route Views */}
      {currentPage === 'home' && (
        <main id="main-content">
          {/* Section 1: Hero (Centered Copy & CTA with Chromatic Prism Artifact) */}
          <Hero onOpenQuiz={handleOpenQuiz} onTalkToSpecialist={handleOpenSpecialist} />

          {/* Section 2: Animated Client Logos (Only vector logos, zero text) */}
          <ClientLogos />

          {/* Section 3: Delivering Pay Per Estimate (Performance Model vs Retainers) */}
          <DeliveringPayPerResults onOpenQuiz={handleOpenQuiz} />

          {/* Section 4: What Makes ShownLeads Different to Pay Per Lead Companies */}
          <DifferentiationSector onOpenQuiz={handleOpenQuiz} />

          {/* Section 5: How Does Pay Per Result Work With ShownLeads */}
          <HowPayPerResultWorks onOpenQuiz={handleOpenQuiz} />

          {/* Section 6: Dedicated Pay-Per-Result Performance Sector (with Animated iPhone 17 & Calculator) */}
          <PayPerResultSector onOpenQuiz={handleOpenQuiz} />

          {/* Section 7: Built for a Specific Caliber of Partner (Positioned below the calculator) */}
          <FitCheck onOpenQuiz={handleOpenQuiz} />

          {/* Section 8: The Numbers (Animated stat counters) */}
          <NumbersProof />

          {/* Section 9: Verified Contractor Results & WhatsApp Testimonials */}
          <Testimonials onOpenQuiz={handleOpenQuiz} />

          {/* Section 10: ShownLeads vs Traditional Agencies (Comparison table) */}
          <ComparisonTable />

          {/* Section 11: Companies We Work With (Animated sector above FAQ) */}
          <CompaniesWeWorkWith onOpenQuiz={handleOpenQuiz} />

          {/* Section 10: FAQ (Accordion) */}
          <FAQ />

          {/* Section 10: Final CTA & Minimal Footer */}
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'company' && (
        <main id="main-content">
          <CompanyPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'lead-gen' && (
        <main id="main-content">
          <LeadGenPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'appointments' && (
        <main id="main-content">
          <AppointmentsPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'our-companies' && (
        <main id="main-content">
          <OurCompaniesPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'our-services' && (
        <main id="main-content">
          <OurServicesPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {currentPage === 'case-studies' && (
        <main id="main-content">
          <CaseStudiesPage
            onOpenQuiz={handleOpenQuiz}
            onOpenSpecialist={handleOpenSpecialist}
            onNavigateHome={() => navigateTo('home')}
          />
          <FinalCTA onOpenQuiz={handleOpenQuiz} onNavigate={navigateTo} />
        </main>
      )}

      {/* 60-Second Qualification Quiz Modal */}
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={handleCloseQuiz} 
        onCompleted={handleQuizCompleted}
      />

      {/* Direct Specialist Strategy Call Modal */}
      <SpecialistModal
        isOpen={isSpecialistOpen}
        onClose={handleCloseSpecialist}
      />

      {/* Subtle Expert Review Confirmation Toast */}
      <Toast 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)}
        applicantName={applicantName}
        title="Application Received"
        message="Your qualification responses have been logged. A senior growth strategist is reviewing your territory and ad account data, and will finalize your custom performance plan before your call."
      />
    </div>
    </LanguageProvider>
  );
}
