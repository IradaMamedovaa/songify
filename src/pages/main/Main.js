import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import Player from "components/player/Player";

import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <Sidebar />
      <Player />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
