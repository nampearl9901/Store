import React from 'react'
import "./Header.css"
import UserNav from './UserNav'
import { NavLink } from 'react-router-dom'




//import { Input } from 'antd';


export default function Header() {
 
  return (
    <div className='home'>
    <div className='homenav'>
    <NavLink className={"text-logo"} to="/home"> DaLat Dairy</NavLink>
  
      <nav>
      
      <NavLink className={"span"} to="/home">Trang Chủ</NavLink>
          <NavLink className={"span"} to="/product">Sản Phẩm</NavLink>
          <NavLink className={"span"} to="/communication">Truyền Thông</NavLink>
          <NavLink className={"span"} to="/contact">Liên Hệ</NavLink>
          
      </nav>
      <div className='button1'>
      <UserNav/>
        </div>
      </div>
      
       </div>
     
       
  )
}
