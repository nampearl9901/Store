import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Usersev from '../service/user.service';
import { Option } from "antd/es/mentions";
import "./css/Register.css";

export default function RegisterPage() {
  const navigate = useNavigate(); // Sử dụng useNavigate để lấy hàm điều hướng

  const onFinish = async (values) => {
    try {
      console.log("Form data:", values);
      // Make the API call to register the user by passing the form values
      const response = await Usersev.postRegister(values);
      if (response.status === 200) { // Sửa thành 201 nếu mã trạng thái trả về cho thành công là 201 Created
        message.success({
          content: "Registration successful!",
          duration: 2, // Thời gian hiển thị trong giây
          onClose: () => {
            navigate("/login");
          },
        });
      } else {
        message.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      message.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className="body1">
      <div className="container">
        <div className="form">
          <div className="content">
            <h1>Register</h1>
            <Form
              onFinish={onFinish}
              layout="vertical"
              className="groupForm"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                className="group"
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Last Name is required!",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="fristName"
                label="First Name"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "First Name is required!",
                  },
                ]}
              >
                <Input className="inputText" placeholder="First Name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Invalid email format!",
                  },
                  {
                    required: true,
                    message: "Email is required!",
                  },
                  {
                    pattern: /^(?=.*@gmail\.com$|.*@yahoo\.com$)/,
                    message: "Email must be @gmail.com or @yahoo.com",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="passwordHash"
                className="group"
              
                rules={[
                  {
                    required: true,
                    message: "Password is required!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters long!",
                  },
                  {
                    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).*$/,
                    message: "Password must include at least one uppercase letter, one number, and one special character (!@#$%^&*.).",
                  },
                ]}
              >
                <Input.Password placeholder="Password" className="inputText" />
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Age is required!",
                  },
                ]}
              >
                <Input type="number" className="inputText" placeholder="Age" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Gender is required!",
                  },
                ]}
              >
                <Select placeholder="Select gender">
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                  <Option value="Khác">Khác</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Address is required!",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Address" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Phone is required!",
                  },
                ]}
              >
                <Input type="number" className="inputText" placeholder="Phone" />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
             
              </Form.Item>
              <div className="items-center justify-center">
              <Button className="btn" htmlType="submit">
                  Submit
                </Button>
          <p href="" className="text-center">
            Already have an account?
            <NavLink className="text" to="/login">
              Log in!
            </NavLink>
          </p>
        </div>
            </Form>
          </div>
        
        </div>
       
      </div>
    </div>
  );
}