import { SET_IS_AUTH, SET_USER, SET_ERROR, SET_IS_LOADING } from "./constants";

const initialState = {
  isAuth: null,
  user: {},
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
