import React from 'react'
import "./Header.css"
import UserNav from './UserNav';



//import { Input } from 'antd';


export default function Header() {

  return (
    <div className='home'>
    <div className='homenav'>
      <p>DaLat Dairy</p>
      <nav>
      
          <span>Trang Chủ</span>
          <span>Sản Phẩm</span>
          <span>Truyền Thông</span>
          <span>Liên Hệ</span>
     

   
      </nav>
     
      <div className='button'>
        <UserNav />
        </div>
      </div>
      
       </div>
     
       
  )
}
