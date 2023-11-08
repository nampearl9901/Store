import React from 'react'
import ProductsList from './ProductList/ProductsList'
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'
import Banner from '../../Components/banner/Banner'

export default function ProductPage() {
  return (
    <div>
        <Header/>
        <Banner/>
           <ProductsList/>
        <Footer/>
    </div>
  )
}
