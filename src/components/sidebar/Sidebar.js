import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "utils/constants/routes";

import { ReactComponent as LogoHeadPhone } from "assets/icons/headphone.svg";
import FooterSidebar from "components/footer-sidebar/FooterSidebar";

import "./Sidebar.scss";

const Sidebar = () => {

const navigate = useNavigate()
  return (
    <div className="Sidebar">
      <LogoHeadPhone className={"Logo"} />

      <h1 onClick={() => navigate(ROUTE_NAMES.search)}>SEARCH</h1>
      <FooterSidebar />
    </div>
  );
};

export default Sidebar;
