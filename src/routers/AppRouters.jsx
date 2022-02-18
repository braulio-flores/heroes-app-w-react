import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginScreen from "../components/login/LoginScreen";
// import DashBoardRoutes from "./DashBoardRoutes";
import PrivadeRoutes from "./PrivadeRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoutes />} />

        {/*  /* ES TODO LO DEMAS QUE NO SEA LOGIN  */}
        {/* VA A REMDERIZAR OTRO ROUTES  */}
        {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
        <Route path="/*" element={<PrivadeRoutes />} >
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
