import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, ROUTE_NAMES } from "../router";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}

      {isAuth &&
        privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}

      {isAuth ? (
        <Route path="*" element={<Navigate to={ROUTE_NAMES.HOME} />} />
      ) : (
        <Route path="*" element={<Navigate to={ROUTE_NAMES.LOGIN} />} />
      )}
    </Routes>
  );
};

export default AppRouter;
