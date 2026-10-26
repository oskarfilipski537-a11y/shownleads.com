import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  LanguageCode,
  CurrencyCode,
  LANGUAGES,
  CURRENCIES,
  TRANSLATIONS,
  LanguageOption,
  CurrencyOption
} from '../data/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  currency: CurrencyCode;
  setCurrency: (curr: CurrencyCode) => void;
  currentLanguageOption: LanguageOption;
  currentCurrencyOption: CurrencyOption;
  languages: LanguageOption[];
  currencies: CurrencyOption[];
  t: typeof TRANSLATIONS['en'];
  formatCurrency: (amount: number, overrideCurrency?: CurrencyCode) => string;
  currencySymbol: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('shownleads_lang');
      if (saved && (saved === 'en' || saved === 'sv' || saved === 'es' || saved === 'de')) {
        return saved as LanguageCode;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem('shownleads_curr');
      if (saved && (saved === 'usd' || saved === 'eur' || saved === 'sek')) {
        return saved as CurrencyCode;
      }
    } catch {
      // fallback
    }
    return 'usd';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('shownleads_lang', lang);
    } catch {
      // ignore
    }
    // Smart auto-suggestion of primary currency if user hasn't explicitly locked it
    if (lang === 'sv') {
      setCurrency('sek');
    } else if (lang === 'de' || lang === 'es') {
      setCurrency('eur');
    }
  };

  const setCurrency = (curr: CurrencyCode) => {
    setCurrencyState(curr);
    try {
      localStorage.setItem('shownleads_curr', curr);
    } catch {
      // ignore
    }
  };

  const currentLanguageOption = useMemo(() => {
    return LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  }, [language]);

  const currentCurrencyOption = useMemo(() => {
    return CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];
  }, [currency]);

  const t = useMemo(() => {
    return TRANSLATIONS[language] || TRANSLATIONS.en;
  }, [language]);

  const formatCurrency = (amount: number, overrideCurrency?: CurrencyCode): string => {
    const activeCurr = overrideCurrency || currency;
    const rounded = Math.round(amount);

    if (activeCurr === 'usd') {
      return `$${rounded.toLocaleString('en-US')}`;
    }
    if (activeCurr === 'eur') {
      return `€${rounded.toLocaleString('de-DE')}`;
    }
    if (activeCurr === 'sek') {
      // Swedish standard formatting: number followed by "kr"
      return `${rounded.toLocaleString('sv-SE')} kr`;
    }
    return `$${rounded.toLocaleString()}`;
  };

  const currencySymbol = currentCurrencyOption.symbol;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        currentLanguageOption,
        currentCurrencyOption,
        languages: LANGUAGES,
        currencies: CURRENCIES,
        t,
        formatCurrency,
        currencySymbol,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
