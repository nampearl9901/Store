
import { Dropdown, Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";


export default function UserNav() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    // Clear user data and tokens from local storage
    localStorage.removeItem('Authorization');
    localStorage.removeItem('isLoggedIn');
     localStorage.removeItem('userEmail');

   window.location.href = '/home';
  };

const items = [
 
    {
      key: 'login',
      label: (
        !isLoggedIn ? (
          <NavLink to="/login">Đăng Nhập</NavLink>
        ) : null
      ),
    },
    {
      key: 'register',
      label: (
        !isLoggedIn ? (
          <NavLink to="/register">Đăng Ký</NavLink>
        ) : null
      ),
    },
    {
      key: 'admin',
      label: (
        isLoggedIn && userEmail ? (
          userEmail.endsWith('@Admin.vip.com') ? (
            <NavLink to="/admin">Admin</NavLink>
          ) : null
        ) : null
      ),
    },
    {
      key: 'giohang',
      label: (
        <NavLink to="/cart">Giỏ Hàng</NavLink>
      ),
    },
    {
      key: 'logout',
      label: (
        isLoggedIn ? (
          <span onClick={handleLogout}>Đăng Xuất</span>
        ) : null
      ),
    },   {
        key: 'profile',
        label: (
          isLoggedIn ? (
            <NavLink to="/profile">Trang Cá Nhân</NavLink>
          ) : null
        ),
      },
 
  ];

  
  return (
    
    <Dropdown menu={{items}} placement="bottomRight" arrow>
      <Button>
        {isLoggedIn ? "Thông Tin" : "Cá Nhân"}
      </Button>
      
    </Dropdown>
  );
}
