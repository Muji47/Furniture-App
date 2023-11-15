import React from 'react'
import Services from './Services'
import {FaShippingFast,FaRegCreditCard,FaShieldAlt,FaCartArrowDown} from 'react-icons/fa'

export default function Bestchoice() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-xs'>Best products</p>
        <h1 className='text-3xl font-bold'>Why Choose us</h1>
        <hr className='w-14 mt-5 border-[#c19a83]'/>
        <div className='flex justify-between m-5'>
        <Services 
        icon={<FaShippingFast/>}
        text='orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
        main='Fast Delivery'
        className={'w-64 h-36 m-8'}
        ></Services>
        <Services 
        icon={<FaRegCreditCard/>}
        text='orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
        main='Free Shipping'
        className={'w-64 h-36 m-8'}
        ></Services>
        <Services 
        icon={<FaShieldAlt/>}
        text='orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
        main='Secure Checkout'
        className={'w-64 h-36 m-8'}
        ></Services>
        <Services 
        icon={<FaCartArrowDown/>}
        text='orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.'
        main='Fast Delivery'
        className={'w-64 h-36 m-8'}
        ></Services>
      </div>
    </div>
  )
}
