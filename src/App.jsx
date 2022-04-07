import { Layout } from "antd";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

const App = () => {
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
