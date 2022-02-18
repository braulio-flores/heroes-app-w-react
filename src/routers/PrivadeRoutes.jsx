import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import DashBoardRoutes from "./DashBoardRoutes";

const PrivadeRoutes = ({ children }) => {
  const { userInfoSession } = useContext(AuthContext);

   const location = useLocation();
   localStorage.setItem('lastPath', location.pathname);

  return userInfoSession.logged ? <DashBoardRoutes /> : <Navigate to='/login' />
};

export default PrivadeRoutes;
