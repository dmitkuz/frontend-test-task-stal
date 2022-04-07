import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form autoComplete="off" layout="vertical" onFinish={onFinish}>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
