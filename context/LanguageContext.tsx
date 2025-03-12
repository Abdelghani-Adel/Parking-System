"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LANG_KEY = "rd_parking_lang";

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  currentLang: string;
  changeLang: (lang: "en" | "ar") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  changeLang: (lang: "en" | "ar") => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [translations, setTranslations] = useState<Translations>({});

  // Restore the selected languages from the localstorage
  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY) ?? "en";
    setLocale(storedLang);
    document.documentElement.setAttribute(LANG_KEY, storedLang);
    document.documentElement.setAttribute(
      "dir",
      storedLang === "ar" ? "rtl" : "ltr"
    );
  }, []);

  // Get the right file for the selected language
  useEffect(() => {
    import(`../locales/${locale}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}));
  }, [locale]);

  // Translator function
  const t = (key: string) => translations[key] || key;

  const changeLang = (lang: "en" | "ar") => {
    setLocale(lang);
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.setAttribute(LANG_KEY, lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  return (
    <LanguageContext.Provider value={{ currentLang: locale, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
