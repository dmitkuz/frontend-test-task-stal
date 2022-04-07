import {
  SET_IS_AUTH,
  SET_ERROR,
  SET_IS_LOADING,
  LOGIN,
  LOGOUT,
} from "./constants";

export const setIsAuth = (payload) => ({ type: SET_IS_AUTH, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
export const login = (payload) => ({ type: LOGIN, payload });
export const logout = () => ({ type: LOGOUT });
