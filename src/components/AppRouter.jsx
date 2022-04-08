import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, ROUTE_NAMES } from "../router";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth === null) return null;

  if (isAuth) {
    return (
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate to={ROUTE_NAMES.HOME} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to={ROUTE_NAMES.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
