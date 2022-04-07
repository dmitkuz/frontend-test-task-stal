import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { setIsAuth } from "./store/auth/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(setIsAuth(true));
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Layout.Content>
        <div className="site-layout-content">
          <AppRouter />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default App;
