import React from 'react'
import {FaStar} from 'react-icons/fa'

export default function Reviewchild({children}) {
  return (
    <div className='w-96 h-64 bg-slate-200 flex flex-col justify-center '>
        <div className='flex justify-center'>
            <span><FaStar className='text-yellow-400'/></span>
            <span><FaStar className='text-yellow-400'/></span>
            <span><FaStar className='text-yellow-400'/></span>
            <span><FaStar className='text-yellow-400'/></span>
            <span><FaStar className='text-yellow-400'/></span>
        </div>
        {children}
    </div>
  )
}
