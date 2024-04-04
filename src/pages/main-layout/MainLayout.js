import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import Player from "components/player/Player";
import FooterMain from "components/footer-main/FooterMain";

import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Sidebar />
      <Player />
      <main className={"MainSection"}>
        <Header />
        <Outlet />
        <FooterMain />
      </main>
    </div>
  );
};

export default MainLayout;
