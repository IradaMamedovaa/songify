import React from "react";
import { useTranslation } from "react-i18next";

import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="Header">
      Header
      <p>{t("hello")}</p>
    </div>
  );
};

export default Header;
