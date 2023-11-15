import React from 'react'
import Button from "./Button";
import { Link } from 'react-router-dom';
import './Backgroundhead.css'

export default function Navbarbase() {
  return (
    <div className='headerback'>
        <div className='flex flex-col justify-center h-[30rem] ml-8 w-[28rem] '>
            <span >Black Friday in july</span>
            <h1 className="text-6xl font-extrabold">Up to 50% off</h1>
            <h3 className="text-2xl font-semibold mt-3">Hundreds of styles available</h3>
            <Link to={'/shopall'}>
            <Button className="bg-black text-white w-28 p-2 pl-2 pr-2 hover:bg-[#c19a83] ">SHOP NOW</Button>
            </Link>
        </div>
    </div>
  )
}

