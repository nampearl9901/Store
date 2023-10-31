import React from 'react'
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'

import Carousels from './Carousel/Carousels'
import ProductsList from './ProductList/ProductsList'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Carousels/>
  

       <ProductsList/>
     
        <Footer/>
    </div>
  )
}
