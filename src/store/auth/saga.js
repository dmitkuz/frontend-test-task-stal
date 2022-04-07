import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "./constants";
import { setIsLoading, setError, setIsAuth } from "./actions";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getMockUsers = () => fetch("/users.json");

function* LoginWorker(action) {
  try {
    console.log("THIS SAGA");
    yield put(setIsLoading(true));
    yield delay(1000);
    const response = yield call(getMockUsers);
    const mockUserList = yield call(() => response.json());
    const { username, password } = action.payload;
    const mockUser = mockUserList.find(
      (user) => user.username === username && user.password === password
    );
    if (mockUser) {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", mockUser.username);
      yield put(setIsAuth(true));
    } else {
      yield put(setError("Некорректный логин или пароль"));
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
