
import React from 'react';
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer';
import Contact from './ContactList/Contact';
import Banner from '../../Components/banner/Banner';

export default function Contactpage() {
  return (
    <div>
       <Header/>
       <Banner/>
       <Contact/>
       <Footer/>

    </div>
  )
}
