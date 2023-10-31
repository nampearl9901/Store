
import React from 'react';
import { Button, Dropdown } from 'antd';

export default function UserNav() {
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Đăng Nhập
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Giỏ Hàng
        </a>
      ),
    },
    
  ];
  return (
    <div>
  
         <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <Button> Cá Nhân </Button>
    </Dropdown>

    
     
  
  </div>

  )
}   
