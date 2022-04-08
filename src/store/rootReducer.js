import { combineReducers } from "redux";
import auth from "./auth/reducer";
import news from "./news/reducer";

const rootReducer = combineReducers({
  auth,
  news,
});

export default rootReducer;
