import React from 'react'
import Footer from '../home/Footer'
import Navbar from '../home/Navbar'
import Shoppingcart from '../home/Shoppingcart'
import { Outlet } from 'react-router-dom'

export default function Landedpage({Product,setShowModal,showModal}) {
  return (
    <div>
      <Navbar productsName={Product} handleModal={setShowModal}/>
      <Shoppingcart showcart={showModal} cartinfo={setShowModal} />
      <Outlet/>
      <Footer products={Product}/>
    </div>
  )
}
