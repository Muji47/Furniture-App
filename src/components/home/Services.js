import React from 'react'

export default function Services({icon,text,main,className}) {
  return (
    
        <div className={className}>
            <p className='text-4xl text-[#c19a83] flex justify-center'>{icon}</p>
            <h3 className='text-3xl font-bold text-center'>{main}</h3>
            <p className='text-center'>{text}</p>
        </div>
    
  )
}
