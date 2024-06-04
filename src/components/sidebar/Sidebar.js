import React from "react";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import FooterSidebar from "components/footer-sidebar/FooterSidebar";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <p>Sidebar</p>
      <Logo className={"Logo"} />
      <FooterSidebar />
    </div>
  );
};

export default Sidebar;
