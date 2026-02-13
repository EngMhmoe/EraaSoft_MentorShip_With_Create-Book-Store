import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import en from "./locales/en/translation.json";
import ar from "../public/locales   ده خاص بى مكتبه i18next وده للترجمه/ar/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
    //   en: { translation: en },
      ar: { translation: ar }
    },
    // lng: "en",   
    lng: localStorage.getItem("lang") || "en",       // اللغة الافتراضية
    fallbackLng: "en",  // لو اللغة مش موجودة
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
