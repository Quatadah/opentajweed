import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { locales } from '../i18n/locales';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, values?: { [key: string]: string | number }) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: () => '',
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('tajweed-lang') as Language;
    return savedLang || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('tajweed-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, values?: { [key: string]: string | number }): string => {
    let translation = locales[language][key] || key;
    if (values) {
        Object.keys(values).forEach(valueKey => {
            translation = translation.replace(`{{${valueKey}}}`, String(values[valueKey]));
        });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};