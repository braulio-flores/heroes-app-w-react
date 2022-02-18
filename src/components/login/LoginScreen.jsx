import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

const LoginScreen = () => {

  const { valuesForm, handleInputChange } = useForm({userName:''})


  const contextpUsuario = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    contextpUsuario.dispatch({
      type: types.login,
      payload: {nombre: valuesForm.userName },
    });

    navigate(`${localStorage.getItem('lastPath')}`, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          name="userName"
          onChange={ handleInputChange }
          value={ valuesForm.userName }
        />
      </div>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
