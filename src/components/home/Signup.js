import React from 'react'

export default function Signup({children,type,className,placeholder}) {
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        <div>
            <h6 className='font-semibold  text-[#616161]'>{children}</h6>
            <input type={type} required className={className} placeholder={placeholder}/>
        </div>
    </div>
  )
}
