import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../router";

const Header = () => (
  <nav>
    <Link to={ROUTE_NAMES.HOME}>На главную</Link>
    <Link to={ROUTE_NAMES.NEWS}>Новости</Link>
    <Link to={ROUTE_NAMES.PROFILE}>Профиль</Link>
  </nav>
);

export default Header;
