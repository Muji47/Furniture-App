import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({products}) {
  return (
    <div>
         <ul className='flex justify-center ml-10'>
            {
                products.map(product=>
                    <Link key={product.name} className='h-60' to={`/shopall/${product.category}`}>
                        <img className='w-[15rem] h-60 pl-6' src={product.image} alt={product.name}/>
                        <div className='text-center font-semibold -mt-20 text-white'>
                            <p>{product.category}</p>
                            <p>{product.subcategories.length}</p>
                        </div>
                    </Link>
                )
            }
            </ul>
    </div>
  )
}
