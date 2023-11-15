import React from 'react'

export default function Slogan({children,className,optional}) {
  return (
    <div>
        <div className={className}>
          <span className='text-sm'>{optional}</span>
          <h1 className='text-5xl font-extrabold'>{children}</h1>
          <hr className='w-14 mt-4 border-[#c19a83]'/>
        </div>
    </div>
  )
}
