
import { Button } from 'antd';
import React from 'react';




export default function ProductItem(props) {
  const { item, handleAddToCart} = props;
  



  return (
    <div className="card" style={{width: '18rem'}}>
  
      <img className="card-img-top" src={item.imageUrl}  alt="" />
  <div className="card-body">
    <h5 className="card-title">{item.productName}</h5>
    <p className="card-text">{item.price}</p>
    <Button onClick={() => handleAddToCart(item)}>Mua</Button>
  </div>
</div>
  // <div className='cardlist' >
    
  //    <div className='card' >
  // <div className='card-item'>
  // <div className='card-img'>
  //  <img src={item.imageUrl} alt="" />
  //  </div>
  //   <div className='card-text'>
  //   <h2 className="text-2xl">{item.productName}</h2>
  //     <p>{item.price}</p>
  //   </div>
  //   <Button>Mua</Button>
  // </div>
  // </div>
  //   </div>
  );
}