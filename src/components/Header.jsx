import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ROUTE_NAMES } from "../router";

const Header = () => {
  let location = useLocation();

  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key={ROUTE_NAMES.HOME}>
          <Link to={ROUTE_NAMES.HOME}>На главную</Link>
        </Menu.Item>
        <Menu.Item key={ROUTE_NAMES.NEWS}>
          <Link to={ROUTE_NAMES.NEWS}>Новости</Link>
        </Menu.Item>
        <Menu.Item key={ROUTE_NAMES.PROFILE}>
          <Link to={ROUTE_NAMES.PROFILE}>Профиль</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
