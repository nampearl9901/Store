import React, { useEffect, useState } from 'react';
import productService from '../../../service/product.service';
import "./productItem.css"
import ProductItem from './ProductItem';
import { Pagination, message } from 'antd';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [gioHang, setGioHang] = useState([]); // State for the shopping cart
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await productService.getProduct();
      setProducts(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    const storedCart = localStorage.getItem('shoppingCart');

    if (storedCart) {
      setGioHang(JSON.parse(storedCart));
    }
  }, []);
  
  // luu xuống localstorage
  const saveCartToLocalStorage = (cartData) => {
    // Save shopping cart data to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cartData));
  };

  // thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (data) => {
    let index = gioHang.findIndex((item) => item.id === data.id);
    let cloneGioHang = [...gioHang];

    if (index === -1) {
      let newSp = { ...data, soLuong: 1 };
      cloneGioHang.push(newSp);
      message.success("thêm sản phẩm thành công");
    } else {
      cloneGioHang[index].soLuong++;
    }

    setGioHang(cloneGioHang);
    saveCartToLocalStorage(cloneGioHang);
  };

// sự kiên  phân trang
const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // lấy sản phẩm lên 

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const productsToDisplay = products.slice(startIndex, endIndex);
    return (
      <div className='productcard'>
        {productsToDisplay.map((item, index) => (
          <ProductItem handleAddToCart={handleAddToCart} key={index} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className='container'>
      <div className='products'>
        <h2>Sản Phẩm</h2>
        {renderProducts()}
        <Pagination
          defaultCurrent={currentPage}
          total={products.length}
          pageSize={productsPerPage}
          onChange={handlePageChange}
        />
      </div>
      
    </div>
  );
}