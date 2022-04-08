import { call, put, takeLatest } from "redux-saga/effects";
import { setIsLoadingNews, setNews } from "./actions";
import { GET_NEWS } from "./constants";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* fetchNewsWorker() {
  try {
    yield put(setIsLoadingNews(true));
    yield delay(1000);
    const data = yield call(() => fetch("/news.json"));
    const { articles } = yield call(() => data.json());
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
