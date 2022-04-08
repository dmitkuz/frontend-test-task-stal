import { Typography, Button } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Typography.Title>Профиль</Typography.Title>
      <Typography.Paragraph>
        Страница с произвольным текстом, недоступная без авторизации
      </Typography.Paragraph>
      <Button type="primary" onClick={handleLogout}>
        Выйти
      </Button>
    </>
  );
};

export default Profile;
