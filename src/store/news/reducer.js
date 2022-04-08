import { SET_NEWS, SET_IS_LOADING_NEWS } from "./constants";

const initialState = {
  news: Array(4).fill({}),
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_NEWS:
      return { ...state, isLoading: action.payload };
    case SET_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
};

export default reducer;
