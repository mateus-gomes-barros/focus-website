import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage?.startsWith("pt")
    ? "pt-BR"
    : "en";

  const changeLanguage = (language: "en" | "pt-BR") => {
    void i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher" aria-label="Select language">
      <Languages size={15} aria-hidden="true" />

      <button
        type="button"
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
        aria-pressed={currentLanguage === "en"}
      >
        EN
      </button>

      <span aria-hidden="true">/</span>

      <button
        type="button"
        className={currentLanguage === "pt-BR" ? "active" : ""}
        onClick={() => changeLanguage("pt-BR")}
        aria-pressed={currentLanguage === "pt-BR"}
      >
        PT
      </button>
    </div>
  );
}
