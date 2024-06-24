import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { postRegister } from "../Api/Auth";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await postRegister(registerData);
      console.log(response);
      setRegisterData({ username: "", email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center pt-5 ">
      <div
        className="p-4 bg-white rounded shadow border"
        style={{ width: "350px" }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={handleRegister}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              name="username"
              value={registerData.username}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Register
            </Button>
          </Form.Item>
          <div className="text-center">
            Or <a href="/login">login now!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
