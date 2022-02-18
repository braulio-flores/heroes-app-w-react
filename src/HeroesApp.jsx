import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import AppRouters from "./routers/AppRouters";

const HeroesApp = () => {

  const recoverInfo = () =>{

    return JSON.parse(localStorage.getItem('userInfo')) || {logged:false}
    // return {
    //   nombre:'Bra',
    //   logged:true
    // }
  }
  
  const [userInfoSession, dispatch] = useReducer(authReducer, {}, recoverInfo);

  useEffect(() => {
    // console.log('cambie');
    localStorage.setItem('userInfo',JSON.stringify(userInfoSession));

  }, [userInfoSession])
  

  return (
    <>
      <AuthContext.Provider value={{userInfoSession, dispatch}}>
        <AppRouters />
      </AuthContext.Provider>
    </>
  );
};

export default HeroesApp;
