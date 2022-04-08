import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import newsSaga from "./news/saga";

export default function* rooSaga() {
  yield all([authSaga(), newsSaga()]);
}
