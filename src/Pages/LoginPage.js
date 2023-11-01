import React, { useEffect } from "react";
import { Button,  Form, Input, message } from "antd";

import { NavLink, useNavigate } from "react-router-dom";
import { userInforLocal } from "../service/local.service";
//import Lottie from "lottie-react";
// import bg_car from "./assets/bg_spiderman.json";
import { useDispatch } from "react-redux";
import { setLoginActionService } from "../redux/action/userAction";


export default function LoginPage() {
  let dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    let userInfor = userInforLocal.get();

    if (userInfor) {
      navigate("/");
    }
  } );


  const onFinish = (values) => {
    console.log("Success:", values);
    let handleSuccess = () => {
      message.success("Đăng Nhập Thành Công!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
    dispatch(setLoginActionService(values, handleSuccess));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-screen bg flex justify-center items-center px-20">
       
      <div className="container mx-auto p-5 bg__form rounded flex">
       
        {/* animate */}
        {/* <div className="w-2/5 border-red-300 border-4 rounded-3xl mr-20">
          <Lottie animationData={bg_car} />
        </div> */}

        {/* end animate */}
        <div className="w-1/2 p-20  items-center justify-center  ">
        <div className="justify-center items-center text__Login">
          <h1 >Login</h1>
        </div>
          <Form
            className=""
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tài Khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Bị Thiếu Rồi!!",
                },
              ]}
            >
              <Input className="textInput" />
            </Form.Item>

            <Form.Item
              label="Mật Khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Nhập Mật Khẩu Vô Đi Ba!",
                },
              ]}
            >
              <Input.Password className="textInput" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button className="btn" htmlType="submit">
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
          <div className="container3">
            <div id="containerid"></div>
          </div>
          <div className="container2">
            <div id="containerid2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

