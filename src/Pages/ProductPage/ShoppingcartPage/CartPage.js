import React, { useEffect, useState } from 'react';
import ShoppingcartPage from './ShoppingcartPage';
import Header from '../../../Components/header/Header';
import Footer from '../../../Components/footer/Footer';

import { NavLink } from 'react-router-dom';
import { Button, message } from "antd";
import Banner from '../../../Components/banner/Banner';

export default function CartPage({ changeQuantity }) {
  const [gioHang, setGioHang] = useState([]);

  const saveCartToLocalStorage = (cartData) => {
    // Save shopping cart data to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cartData));
  };

  const calculateTotalPrice = () => {
    return gioHang.reduce((total, item) => total + item.soLuong * item.price, 0);
  };

  const handleChangeQuantity = (iddata, value) => {
    let index = gioHang.findIndex((data) => data.id === iddata);

    if (index === -1) return;

    let cloneGioHang = [...gioHang];
    cloneGioHang[index].soLuong = cloneGioHang[index].soLuong + value;

    if (cloneGioHang[index].soLuong === 0) {
      cloneGioHang.splice(index, 1);
    }

    setGioHang(cloneGioHang);
    saveCartToLocalStorage(cloneGioHang);
  };

  const handleClearCart = () => {
    setGioHang([]);
    saveCartToLocalStorage([]); // Clear and save the shopping cart
  };
  const handlePayment = () => {
    // Hiển thị hộp thoại Yes/No
    const paymentConfirmed = window.confirm("Bạn có muốn thực hiện thanh toán?");
  
    if (paymentConfirmed) {
      // Xử lý thanh toán
      message.loading({ content: "Processing payment...", duration: 2 });
      
      setTimeout(() => {
        message.success("Thanh toán thành công. Cảm ơn bạn đã mua hàng!");
        handleClearCart();
      }, 2000); // Simulate a 2-second delay for the payment process
    } else {
      // Người dùng chọn "No," không thực hiện thanh toán
      message.info("Thanh toán bị hủy.");
    }
  };

  useEffect(() => {
    const updateDataFromLocalStorage = () => {
      const storedCart = localStorage.getItem('shoppingCart');
      if (storedCart) {
        setGioHang(JSON.parse(storedCart));
      }
    };

    window.addEventListener('storage', updateDataFromLocalStorage);
    updateDataFromLocalStorage();

    return () => {
      window.removeEventListener('storage', updateDataFromLocalStorage);
    };
  }, []);

  return (
    <div className="cart-page">
      <Header />
      <Banner/>
      <div className='container'>
        <div className='Cart'>
          <h2>Giỏ Hàng</h2>
          {gioHang.length > 0 ? (
            <div>
              <ShoppingcartPage gioHang={gioHang} changeQuantity={changeQuantity} totalPrice={calculateTotalPrice()} handleChangeQuantity={handleChangeQuantity} />
              <Button onClick={handlePayment} >Thanh Toán</Button>  
            
            </div>
          ) : (
            <p>Giỏ hàng không có sản phẩm. <NavLink className="text" to="/product">Quay Lại Mua Hàng</NavLink></p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}