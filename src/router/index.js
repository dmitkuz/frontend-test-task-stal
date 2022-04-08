import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import Profile from "../pages/Profile";

export const ROUTE_NAMES = {
  HOME: "/",
  LOGIN: "/login",
  NEWS: "/news",
  PROFILE: "/profile",
};

export const publicRoutes = [
  { path: ROUTE_NAMES.HOME, exact: true, component: Home },
  { path: ROUTE_NAMES.NEWS, exact: true, component: News },
  { path: ROUTE_NAMES.LOGIN, exact: true, component: Login },
];

export const privateRoutes = [
  { path: ROUTE_NAMES.HOME, exact: true, component: Home },
  { path: ROUTE_NAMES.NEWS, exact: true, component: News },
  { path: ROUTE_NAMES.PROFILE, exact: true, component: Profile },
];
