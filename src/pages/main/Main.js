import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import Player from "components/player/Player";

import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Sidebar />
      <Outlet />
      <Player />
    </div>
  );
};

export default Main;
