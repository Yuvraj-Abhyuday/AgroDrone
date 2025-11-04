// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translations from a server/public folder
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    supportedLngs: ["en", "hi", "gu"], // Your supported languages
    fallbackLng: "en", // Default language if detection fails
    debug: process.env.NODE_ENV === "development", // Logs in development mode
    
    // Options for react-i18next
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    backend: {
      // Path where translations are stored
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;