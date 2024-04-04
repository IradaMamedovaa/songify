import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { LANGUAGES } from "utils/constants/languages";

const FooterSidebar = () => {
  const { t } = useTranslation();

  return (
    <footer className={"FooterSidebar"}>
      <p>{t("goodbye")}</p>

      <div className="Languages">
        <select id="language" onChange={(e) => changeLanguage(e.target.value)}>
          <option value={LANGUAGES.en.code}>English</option>
          <option value={LANGUAGES.ru.code}>Russian</option>
          <option value={LANGUAGES.az.code}>Azerbaijani</option>
        </select>
      </div>
    </footer>
  );
};

export default FooterSidebar;
