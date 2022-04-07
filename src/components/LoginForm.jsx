import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(login(values));
  };

  return (
    <Form autoComplete="off" layout="vertical" onFinish={onFinish}>
      {error && (
        <Form.Item>
          <Alert message={error} type="error" />
        </Form.Item>
      )}

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Введите логин!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoading}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
