import React, { useEffect, useState } from 'react'
import productService from '../../../service/product.service';
import { Carousel } from 'antd';

export default function Carousels() {
 
    const [banners, SetBanner] = useState([]);

    // Định nghĩa hàm gọi API bằng async/await
    const fetchBanner = async () => {
      try {
      
        const res = await productService.getbanner();
        // console.log( response.data);// liem tra dua lieu tren console
        SetBanner(res.data);
        // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    useEffect(() => {
      fetchBanner();
    }, []);
    
      // render sản phẩm
  let renderbanner = () => {
    return banners.map((item, index) => {
      return (
        <div key={index}>
         <img style={contentStyle} src={item.imgBanner} alt="" />
        </div>
      );
    });
  };

  const contentStyle = {
    width: '100%',
    height: '800px',
    lineHeight: '160px',
    textAlign: 'center',
    marginTop:'50px',
    borderRadius: '0px 0px 20px 20px',
  };
    
    return (
      <div>
        <Carousel autoplay>
        {renderbanner()}
    
      </Carousel>
      </div>
    );
}
