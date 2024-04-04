import React from "react";

import { ReactComponent as LogoWithTitle } from "assets/icons/spotifyIconWithTitle.svg";
import FooterSidebar from "components/footer-sidebar/FooterSidebar";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p>Sidebar</p>
      <LogoWithTitle className={"LogoWithTitle"} />
      <FooterSidebar />
    </div>
  );
};

export default Sidebar;
