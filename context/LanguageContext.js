import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('fr');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('lucci_lang');
    if (saved && ['fr', 'en', 'ar'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang) => {
    if (['fr', 'en', 'ar'].includes(newLang)) {
      setLangState(newLang);
      localStorage.setItem('lucci_lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations.fr;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to FR
        let fallback = translations.fr;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  const openQuoteModal = (initialData = {}) => {
    setQuoteInitialData(initialData);
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setQuoteInitialData({});
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        dir,
        isQuoteOpen,
        openQuoteModal,
        closeQuoteModal,
        quoteInitialData
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
