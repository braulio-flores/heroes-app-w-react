import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import LoginScreen from "../components/login/LoginScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchSscreen";
import { Navbar } from "../components/ui/NavBar";
import DashBoardRoutes from "./DashBoardRoutes";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        {/*  /* ES TODO LO DEMAS QUE NO SEA LOGIN  */}
        <Route path="/*" element={<DashBoardRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
