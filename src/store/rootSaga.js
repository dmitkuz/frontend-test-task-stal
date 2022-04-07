import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";

export default function* rooSaga() {
  yield all([authSaga()]);
}
