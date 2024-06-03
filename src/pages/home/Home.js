import React from "react";


import "./Home.scss";
import Search from "components/search/Search";

const Home = () => {
  return (
    <div className="Home">
      Home
      <h1>You can search here</h1>
      <Search/>
    </div>
  );
};

export default Home;
