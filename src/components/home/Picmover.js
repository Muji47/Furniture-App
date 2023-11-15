import React from 'react'
import data from '../products/Slider.json'
export default function Picmover() {
    const picdet=data.pictures


    return (
    <div className='flex justify-center items-center mt-10'>
        <ul className='flex'>
        {
            picdet.slice(0,3).map(pic=>
            <li key={pic.id}>
                <img src={pic.image} alt={`slide${pic.id}`} className='h-40'/>
            </li>)
            
        }
        </ul>
    </div>
  )
}
