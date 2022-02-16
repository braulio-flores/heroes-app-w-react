import React from "react";
import { Navbar } from "../components/ui/NavBar";
import { Routes, Route } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchSscreen";

const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
      </Routes>


    </>
  );
};

export default DashBoardRoutes;
