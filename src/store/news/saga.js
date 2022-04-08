import { call, put, takeLatest } from "redux-saga/effects";
import { setIsLoadingNews, setNews } from "./actions";
import { GET_NEWS } from "./constants";
import { fetchNews } from "./api";

function* fetchNewsWorker() {
  try {
    yield put(setIsLoadingNews(true));
    const articles = yield call(fetchNews);
    yield put(setNews(articles));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoadingNews(false));
  }
}

export default function* watchNews() {
  yield takeLatest(GET_NEWS, fetchNewsWorker);
}
