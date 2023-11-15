import React from 'react'

function Products({category,children}) {
  return (
    <div className='flex flex-col w-[95%] mt-28 items-center justify-center'>
        <div className='flex items-center justify-center flex-col'>
        <p className='text-xs '>Shop by category</p>
        <h1 className='font-bold text-3xl '>{category}</h1>
        <hr className='w-14 mt-4 border-[#c19a83]'/>
        </div>
        <div className='mt-11'>
           {children}
        </div>
    </div>
  )
}

export default Products