import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "./constants";
import { setIsLoading, setError, setIsAuth } from "./actions";
import { getMockUsers } from "./api";

function* LoginWorker(action) {
  try {
    yield put(setIsLoading(true));
    const mockUserList = yield call(getMockUsers);
    const { username, password } = action.payload;
    const mockUser = mockUserList.find(
      (u) => u.username === username && u.password === password
    );
    if (mockUser) {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", mockUser.username);
      yield put(setIsAuth(true));
      yield put(setError(""));
    } else {
      yield put(setError("Имя пользователя или пароль введены не верно"));
    }
  } catch (error) {
    console.error(error);
    yield put(setError("Произошла ошибка"));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* LogoutWorker(action) {
  localStorage.removeItem("auth");
  localStorage.removeItem("username");
  yield put(setIsAuth(false));
}

export default function* watchAuth() {
  yield takeLatest(LOGIN, LoginWorker);
  yield takeLatest(LOGOUT, LogoutWorker);
}
