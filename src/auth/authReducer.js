
import { types } from "../types/types";

export const authReducer = (inicialState = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...inicialState,
        nombre: action.payload.nombre,
        logged: true,
      };
    case types.logout:
      return {
        ...inicialState,
        nombre: '',
        logged: false,
      };

    default:
        return inicialState
  }
};
