import React, { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Kiểm tra xem email của người dùng có trong local storage không
    const userEmail = localStorage.getItem('userEmail');

    // Kiểm tra địa chỉ email
    if (userEmail && userEmail.endsWith('@Admin.vip.com')) {
      // Đúng địa chỉ email, cho phép vào trang AdminPage
      // (Có thể thêm các logic xử lý ở đây nếu cần)
    } else {
      // Email không phù hợp, chuyển họ về trang home
      window.location.href = '/'; // Điều hướng về trang chính
    }
  }, []);

  return (
    <div>AdminPage</div>
  );
}