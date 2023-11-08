import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import Usersev from '../service/user.service';
import "./css/login.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in, e.g., by checking a token in local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      // If the user is already logged in, redirect them to the home page
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = () => {
    // Kiểm tra điều kiện email phải là "@gmail" hoặc "@yahoo"
    if (!email.endsWith('@gmail.com') && !email.endsWith('@yahoo.com')&& !email.endsWith('@Admin.vip.com')) {
      message.error('Email must end with "@gmail.com" or "@yahoo.com"');
      return;
    }

    Usersev.postLogin(email, password)
      .then((response) => {
        // Kiểm tra xem phản hồi có chứa token không
        if (response.data && response.data.token) {
          // Lưu token vào local storage với tiền tố "Bearer"
          localStorage.setItem('Authorization', `${response.data.token}`);
          localStorage.setItem('isLoggedIn', 'true'); // Đánh dấu người dùng đã đăng nhập
          localStorage.setItem('userEmail', email); 
          // console.log("Login successful", response.data);
          message.success('Login successful');
          setIsLoggedIn(true);
                  setTimeout(() => {
          navigate("/home");
      }, 500);

        } else {
          console.error("Token is undefined or not provided in the response.");
          // Xử lý trường hợp không có token
          message.error('Token is undefined or not provided in the response.');
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
        message.error('Login failed');
      });
  };
  // if (isLoggedIn) {
  //   // If the user is already logged in, redirect them to the home page
  //   return navigate("/home");;
  // }
  const onFinish = (values) => {
    // You can use the "values" object to get form field values
    // console.log('Success:', values);

    // If you want to trigger the login action here, you can call handleLogin()
    handleLogin();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form-login'>
          
      <div className='form-item'>
      <h2>Login</h2>
    
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
       
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div>
              <p href="">
                Bạn đã tài khoản chưa?
                <NavLink className="text" to="/register">Đăng Ký!</NavLink>
              </p>
            </div>

      </Form>
      </div>
    </div>
  );
}