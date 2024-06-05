import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "utils/constants/routes";

import { ReactComponent as LogoHeadPhone } from "assets/icons/headphone.svg";
import FooterSidebar from "components/footer-sidebar/FooterSidebar";

import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <LogoHeadPhone className={"Logo"} />

      <h1 style={{maxWidth: "100px", marginRight: "100px", border: "1px solid white", padding: "20px" }}onClick={() => navigate(ROUTE_NAMES.search)}>
        navigate to <i>search</i> page
      </h1>
      <FooterSidebar />
    </div>
  );
};

export default Sidebar;
