import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "utils/constants/routes";
import MainLayout from "pages/main-layout/MainLayout";
import Home from "pages/home/Home";
import Search from "pages/search/Search";
import Playlist from "pages/playlist/Playlist";
import Artist from "pages/artist/Artist";
import Login from "pages/login/Login";
import Signup from "pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTE_NAMES.home} element={<Home />} />
            <Route path={ROUTE_NAMES.search} element={<Search />} />
            <Route path={ROUTE_NAMES.playlist} element={<Playlist />} />
            <Route path={ROUTE_NAMES.artist} element={<Artist />} />
          </Route>
          <Route path={ROUTE_NAMES.login} element={<Login />} />
          <Route path={ROUTE_NAMES.signup} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
