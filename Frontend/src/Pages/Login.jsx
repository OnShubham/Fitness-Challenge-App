import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { postLogin } from "../Api/Auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await postLogin(loginData);
      console.log("Login response:", response);
      login();
      setLoginData({ email: "", password: "" });
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <div className="p-4 bg-white rounded shadow border" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form name="login" initialValues={{ remember: true }} onFinish={handleLogin}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
            value={loginData.email}
            onChange={handleChange}
          >
            <Input name="email" prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            value={loginData.password}
            onChange={handleChange}
          >
            <Input name="password" prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="float-right" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Log in
            </Button>
          </Form.Item>
          <div className="text-center">
            Or <a href="/register">register now!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
