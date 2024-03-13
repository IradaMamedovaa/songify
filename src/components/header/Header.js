import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { LANGUAGES } from "utils/constants/languages";

import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="Header">
      Header
      <p>{t("hello")}</p>
      <div className="Languages">
        <select id="language" onChange={(e) => changeLanguage(e.target.value)}>
          <option value={LANGUAGES.en.code}>English</option>
          <option value={LANGUAGES.ru.code}>Russian</option>
          <option value={LANGUAGES.az.code}>Azerbaijani</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
