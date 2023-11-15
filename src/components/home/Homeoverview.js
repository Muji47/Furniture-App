import React from 'react'
import './Backgroundhead.css'
import Button from './Button';

function Homeoverview({Data}) {
  const filteredItems = Data.reduce((result, category) => {
    const matchingSubcategories = category.subcategories.filter(subcategory => subcategory.subcategory === 'Sectional Sofas');
    return result.concat(matchingSubcategories);
  }, [])
  return (
    <div className='flex justify-center drop-shadow-md'>
      <div className="h-64 newarrival m-20 flex flex-col justify-center items-center opacity-100 mr-7">
          <p className='text-white'>New arrivals</p>
          <h1 className='text-center w-[22rem] font-extrabold text-4xl text-white'>Brand New,Modern Sofa Collection</h1>
          <p className='font-semibold text-lg text-white'>Ideal for offices, bedrooms and all in between.</p>
      </div>
      <div>
        <img src='images/sectionalsofa.jpeg' className='h-[20rem] mt-20'/>
        {filteredItems.map(filteritem=><div>
          <p className='text-center text-lg font-bold p-4'>{filteritem.subcategory}</p>
          <div className='flex justify-center'>
          <p className='text-gray-700 p-3'>${filteritem.price}</p>
          <Button className="bg-black text-white p-3 rounded-sm hover:bg-[#c19a83]" >Show Options</Button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Homeoverview