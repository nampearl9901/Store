import React, { useEffect, useState } from 'react';
import productService from '../../../service/product.service';
import "./productItem.css"
import ProductItem from './ProductItem';
import {  Pagination  } from 'antd';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Định nghĩa hàm gọi API bằng async/await
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
  }, []);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const productsToDisplay = products.slice(startIndex, endIndex);
    return (
      <div className='productcard'>


      
    {
          productsToDisplay.map((item, index) => (
    
    
            <ProductItem key={index} item={item} />
        
         
          
          ))
      };

  
 
     
      </div>
     
     
    )
  };

  return (
    <div className='container '>
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