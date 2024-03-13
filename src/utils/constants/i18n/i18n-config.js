import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { LANGUAGES } from "utils/constants/languages";
import TRANSLATION_EN from "./en";
import TRANSLATION_RU from "./ru";
import TRANSLATION_AZ from "./az";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: [LANGUAGES.en.code],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      [LANGUAGES.en.code]: {
        translation: TRANSLATION_EN,
      },
      [LANGUAGES.ru.code]: {
        translation: TRANSLATION_RU,
      },
      [LANGUAGES.az.code]: {
        translation: TRANSLATION_AZ,
      },
    },
  });

export default i18n;
