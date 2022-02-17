import React from "react";
import { Navbar } from "../components/ui/NavBar";
import { Routes, Route } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchSscreen";
import HeroScreen from "../components/hero/HeroScreen";

const DashBoardRoutes = () => {
  return (
    <>
      {/* ESTE ES UN ROUTER HIJO  */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashBoardRoutes;
