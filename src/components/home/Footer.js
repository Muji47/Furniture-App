import React from 'react'
import Button from './Button'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Footer({products}) {
  return (
    <>
    <div className='grid grid-cols-5 bg-slate-200 pt-9 h-[22rem]'>
        <div className='grid col-span-2 m-6'>
            <Link to={'/'}>
            <h1 className='text-2xl font-bold'>Furniture</h1>
            <p>Shop</p>
            </Link>
        </div> 
        <div >
            <h3 className='text-lg font-semibold'>Links</h3>
            <Link className='text-[#c19a83] hover:text-black cursor-pointer' to='/story'>
                <p>Story</p></Link>
            <Link className='text-[#c19a83] hover:text-black cursor-pointer' to='/contact'><p>Contact</p></Link>
            <Link className='text-[#c19a83] hover:text-black cursor-pointer' to='/trackorder'><p>Track Order</p></Link>
            <Link className='text-[#c19a83] hover:text-black cursor-pointer' to='/help'><p>Help</p></Link>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>Categories</h3>
            <ul className='flex flex-col justify-center'>
            {
                products.map(product=>
                    <li key={product.name}>
                        <div className='text-center  flex'>
                            <Link className='text-[#c19a83] hover:text-black cursor-pointer' to={`/shopall/${product.category}`}>{product.category}</Link>
                            <p className='ml-5 text-gray-600'>{product.subcategories.length}</p>
                        </div>
                    </li>
                )
            }
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>Subscribe</h3>
            <input className='m-3 ml-0'/>
            <Button className={'text-white bg-black p-3 rounded'}>SUBSCRIBE</Button>
        </div>
    </div>
    <div className='bg-slate-200 h-14'>
        <hr className='w-[100%] border-gray-400 '/>
        <div className='flex justify-between'>
            
            <p className='text-gray-600 pt-2'>Copyright © 2023 Furniture Shop | Powered by Furniture Shop</p>
            <div className='flex pt-3 text-lg '>
                <p className='mr-3 hover:text-[#c19a83] cursor-pointer'><FaFacebookF/></p>
                <p className='mr-3 hover:text-[#c19a83] cursor-pointer'><FaTwitter/></p>
                <p className='mr-3 hover:text-[#c19a83] cursor-pointer'><FaYoutube/></p>
                <p className='mr-3 hover:text-[#c19a83] cursor-pointer'><FaInstagram/></p>
            </div>
        </div>
    </div>
    </>
  )
}
