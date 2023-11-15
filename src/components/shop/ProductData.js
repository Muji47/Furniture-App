import React from 'react'


export default function ProductData({item}) {
  return (
            <li key={item.id} className='p-5' >
                    <img src={item.image} alt={item.subcategory} className='h-96 object-fill w-96 '/>
                    <h4 className='font-bold text-[#c19a83] text-3xl'>{item.subcategory}</h4>
                    <span >${item.price}</span>
            </li>
  )
}
