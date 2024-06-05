import React from "react";

import { ReactComponent as LogoHeadPhone } from "assets/icons/headphone.svg";
import FooterSidebar from "components/footer-sidebar/FooterSidebar";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <LogoHeadPhone className={"Logo"} />
      <FooterSidebar />
    </div>
  );
};

export default Sidebar;
