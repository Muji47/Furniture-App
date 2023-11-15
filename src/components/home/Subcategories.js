import React from 'react'

export default function Subcategories({sub,contentSwitch,showEye}) {
  return (
    <div className='relative '>
        <li key={sub.subcategory} className='cursor-pointer m-3'>
                <div className='w-60 h-64' onClick={contentSwitch}>
                    <img src={sub.image} alt={sub.subcategory} className=' absolute h-64 object-fill w-60' />
                </div>
        </li>
    </div>
  )
}
