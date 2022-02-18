import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";

const PublicRoutes = () => {
  const { userInfoSession } = useContext(AuthContext);
  return !userInfoSession.logged ? <LoginScreen /> : <Navigate to='/' />
};

export default PublicRoutes;
