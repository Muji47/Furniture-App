import React from 'react'

export default function Button({children,className,onClick,handleEyeIcon}) {
  return (
    <div className='flex justify-center'>
        <button className={className} onClick={onClick} onMouseOver={handleEyeIcon}>{children}</button>
    </div>
  )
}
