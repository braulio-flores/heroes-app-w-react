import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


const LoginScreen = () => {

  const contextpUsuario = useContext(AuthContext);
  console.log(contextpUsuario.userInfoSession);

  const navigate = useNavigate();

  const handleLogin = () =>{
    
    contextpUsuario.dispatch({type: types.login, payload: contextpUsuario.userInfoSession})

    navigate('/marvel',{
      replace:true
    });
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button 
          onClick={ handleLogin }
          className="btn btn-primary" 
        >
          Login
        </button>
    </div>
  )
}

export default LoginScreen